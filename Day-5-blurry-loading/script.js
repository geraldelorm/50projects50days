const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
