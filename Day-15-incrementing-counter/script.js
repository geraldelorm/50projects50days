const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const increaseCounter = () => {
        const target = +counter.getAttribute('data-target');
        const innerText = +counter.innerText;

        const increment = target / 1000;

        if (innerText < target) {
            counter.innerText = `${Math.ceil(innerText + increment)}`;

            setTimeout(increaseCounter, 1);
        } else {
            counter.innerText = target;
        }
    };

    increaseCounter();
});
