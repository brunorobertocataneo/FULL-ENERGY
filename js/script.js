const carousel = document.querySelector('.product-carousel');
const slides = [...carousel.querySelectorAll('.item')];
const divider = document.querySelector('.smooth-divider');
const status = document.querySelector('#slide-status');
let active = 0;

function showSlide(index) {
    slides[active].classList.remove('active');
    active = (index + slides.length) % slides.length;
    const slide = slides[active];
    slide.classList.add('active');
    divider.style.setProperty('--divider-background', slide.style.getPropertyValue('--background'));
    status.textContent = `${active + 1} de ${slides.length} — ${slide.querySelector('.title').textContent}`;
}

function moveSlide(direction) {
    showSlide(active + direction);
}

document.querySelector('#prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('#next').addEventListener('click', () => moveSlide(1));
carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        moveSlide(event.key === 'ArrowLeft' ? -1 : 1);
    }
});

showSlide(0);
