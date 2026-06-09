let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let divider = document.querySelector('.smooth-divider');

let count = list.length;
let active = 0;

function getSlideColor(index) {
    return getComputedStyle(list[index]).getPropertyValue('--background').trim();
}

function updateDividerColor() {
    if (!divider) {
        return;
    }

    divider.style.setProperty('--divider-background', getSlideColor(active));
}

function updateSlide(newIndex) {
    let activeOld = document.querySelector('.item.active');
    activeOld.classList.remove('active');

    active = newIndex;
    list[active].classList.add('active');
    updateDividerColor();
}

updateDividerColor();

next.onclick = () => {
    let newIndex = active >= count - 1 ? 0 : active + 1;
    updateSlide(newIndex);
}

prev.onclick = () => {
    let newIndex = active <= 0 ? count - 1 : active - 1;
    updateSlide(newIndex);
}
