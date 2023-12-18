'use strict';

// Scroll Progress Indicator
document.addEventListener('scroll', function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolledPercentage + '%';
});

// Smooth revealing of sections on scroll
const allMainSections = document.querySelectorAll('.main__section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fadeIn');
    setTimeout(() => {
        entry.target.style.opacity = 1;
    }, 700);
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
});
allMainSections.forEach(function (section) {
    sectionObserver.observe(section);
    if (!section.classList.contains('profile-intro')) section.style.opacity = 0;
});

// Mobile Navigation Menu
const mobileBurger = document.querySelector('.header__menu-icon');
const mobileMenu = document.querySelector('.header__nav--mobile');
const burgerIconPath = 'assets/images/svg/menu.svg';
const exitIconPath = 'assets/images/svg/exit.svg';
mobileBurger.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
    if (mobileBurger.src.includes('menu.svg')) mobileBurger.src = exitIconPath;
    else mobileBurger.src = burgerIconPath;
});
const headerHeight = document.querySelector('.header').offsetHeight;
mobileMenu.style.marginTop = `${headerHeight + 4}px`;

// Dynamic Typing of "Portfolio" in logo (using Typed.js)
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: [
            'Portfolio',
            'Portfólio',
            'портфель',
            '投资组合',
            'Portföy',
            'ポートフォリオ',
            'محفظة',
            'पोर्टफोलियो',
            'Portafolio',
            ' พอร์ตโฟลิโอ',
            'Portafoglio',
            ' 投資組合',
            'Portefeuille',
            'χαρτοφυλάκιο',
            'תיק',
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
    };
    var typed = new Typed('#typed-output', options);
});

// Smooth scroll into view
const contactDetails = document.getElementById('connect-directly');
const portfolioSection = document.getElementById('my-portfolio');
const connectButton = document.querySelector('.btn--connect');
const portfolioButton = document.querySelector('.btn--my-portfolio');
connectButton.addEventListener('click', () => {
    contactDetails.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
portfolioButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
