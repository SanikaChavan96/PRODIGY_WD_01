window.addEventListener('scroll', () => {
    const scrollThreshold = 100; // Adjust this value as needed
    const body = document.body;

    if (window.scrollY > scrollThreshold) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});
