const form = document.querySelector('#pedido');
const quantities = [...form.querySelectorAll('.flavor-options input')];
const error = document.querySelector('#order-error');
const preview = document.querySelector('.order-preview');
const share = document.querySelector('#order-share');
const selected = new URLSearchParams(location.search).get('sabor');

const selectedQuantity = quantities.find(input => input.name === selected);
if (selectedQuantity) {
    selectedQuantity.value = '1';
}

form.querySelector('button[type="submit"]').disabled = false;
form.addEventListener('input', () => {
    preview.hidden = true;
    error.hidden = true;
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const items = quantities.filter(input => input.valueAsNumber > 0);
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
            const flavor = input.parentElement.querySelector('span').textContent;
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
    document.querySelector('#order-message').textContent = message;
    share.href = 'https://wa.me/?text=' + encodeURIComponent(message);
    preview.hidden = false;
    document.querySelector('#preview-title').focus();
});
