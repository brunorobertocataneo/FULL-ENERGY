let pageLoader = document.querySelector('.page-loader');
let orderLinks = document.querySelectorAll('a[href="pedido.html"]');

function showLoader() {
    if (!pageLoader) {
        return;
    }

    pageLoader.classList.add('is-visible');
}

function hideEntryLoader() {
    if (!pageLoader || !pageLoader.classList.contains('page-loader-entry')) {
        return;
    }

    setTimeout(() => {
        pageLoader.classList.remove('is-visible');
        pageLoader.classList.add('is-hidden');
    }, 700);
}

orderLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (link.classList.contains('active')) {
            return;
        }

        event.preventDefault();
        showLoader();

        setTimeout(() => {
            window.location.href = link.href;
        }, 850);
    });
});

if (pageLoader && pageLoader.classList.contains('page-loader-entry')) {
    pageLoader.classList.add('is-visible');
    window.addEventListener('load', hideEntryLoader);
}
