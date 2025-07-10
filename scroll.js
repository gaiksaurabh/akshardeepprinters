// Scroll Header Effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

scrollReveal.reveal('.section-header', {
    origin: 'top',
    delay: 200
});
scrollReveal.reveal('.about-image', {
    origin: 'left',
    delay: 300
});
scrollReveal.reveal('.about-text', {
    origin: 'right',
    delay: 400
});
scrollReveal.reveal('.service-card', {
    interval: 200
});
scrollReveal.reveal('.vertical-card', {
    interval: 200
});
scrollReveal.reveal('.stat-item', {
    interval: 200
});
scrollReveal.reveal('.value-card', {
    interval: 200
});
scrollReveal.reveal('.contact-info', {
    origin: 'left',
    delay: 300
});
scrollReveal.reveal('.contact-form', {
    origin: 'right',
    delay: 400
});