const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currrentActive = 1;

next.addEventListener('click', () => {
    currrentActive++;
    if (currrentActive > circles.length) {
        currrentActive = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    currrentActive--;
    if (currrentActive < 1) {
        currrentActive = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currrentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    if (currrentActive == 1) {
        prev.disabled = true;
    } else if (currrentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
