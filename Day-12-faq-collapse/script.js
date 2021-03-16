const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', (t) => {
        toggle.parentNode.classList.toggle('active');
    });
});
