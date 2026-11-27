const form = document.querySelector('#pedido');
const quantities = [...form.querySelectorAll('.flavor-options input')];
const error = document.querySelector('#order-error');
const preview = document.querySelector('.order-preview');
const share = document.querySelector('#order-share');
const orderMessage = document.querySelector('#order-message');
const copyStatus = document.querySelector('#copy-status');

document.querySelector('#order-copy').addEventListener('click', async () => {
    const message = orderMessage.textContent;
    try {
        await navigator.clipboard.writeText(message);
        if (!preview.hidden && orderMessage.textContent === message) {
            copyStatus.textContent = 'Pedido copiado.';
        }
    } catch {
        if (preview.hidden || orderMessage.textContent !== message) return;
        const range = document.createRange();
        range.selectNodeContents(orderMessage);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyStatus.textContent = 'Use a opção Copiar do dispositivo para copiar o texto selecionado.';
    }
});

const selected = new URLSearchParams(location.search).get('sabor');

const selectedQuantity = quantities.find(input => input.name === selected);
if (selectedQuantity) {
    selectedQuantity.value = '1';
}

const summary = document.querySelector('#summary-items');
const emptySummary = document.querySelector('#summary-empty');
const orderTotal = document.querySelector('#order-total');
const mobileTotal = document.querySelector('#mobile-total');

function chosenItems() {
    return quantities.filter(input => Number.isInteger(input.valueAsNumber) && input.valueAsNumber > 0);
}

function flavorName(input) {
    return input.parentElement.querySelector('span').textContent;
}

function updateSummary() {
    const items = chosenItems();
    const total = items.reduce((sum, input) => sum + input.valueAsNumber, 0);
    const label = `${total} ${total === 1 ? 'unidade' : 'unidades'}`;
    orderTotal.textContent = label;
    mobileTotal.textContent = label;
    emptySummary.hidden = items.length > 0;
    summary.replaceChildren(...items.map(input => {
        const row = document.createElement('li');
        row.textContent = `${input.valueAsNumber} × ${flavorName(input)}`;
        return row;
    }));
}

quantities.forEach(input => input.addEventListener('input', updateSummary));
updateSummary();

form.querySelector('button[type="submit"]').disabled = false;
form.addEventListener('input', () => {
    copyStatus.textContent = '';
    preview.hidden = true;
    error.hidden = true;
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const items = chosenItems();
    if (!items.length) {
        error.textContent = 'Escolha pelo menos um sabor e informe a quantidade.';
        error.hidden = false;
        quantities[0].focus();
        return;
    }

    const data = new FormData(form);
    const lines = [
        'Olá! Gostaria de fazer um pedido Full Energy.',
        '',
        ...items.map(input => {
            const flavor = flavorName(input);
            return `- ${input.valueAsNumber} × ${flavor}`;
        }),
        '',
        `Nome: ${data.get('nome').trim()}`,
        `Cidade: ${data.get('cidade').trim()}`
    ];
    for (const [field, label] of [['telefone', 'Telefone'], ['email', 'E-mail'], ['observacoes', 'Observações']]) {
        const value = data.get(field).trim();
        if (value) lines.push(`${label}: ${value}`);
    }

    const message = lines.join('\n');
    copyStatus.textContent = '';
    orderMessage.textContent = message;
    share.href = 'https://wa.me/?text=' + encodeURIComponent(message);
    preview.hidden = false;
    document.querySelector('#preview-title').focus();
});
