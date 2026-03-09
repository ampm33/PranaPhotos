// script.js — PranaPhotos interactions

// About photo: B&W → color on hover
const aboutPhoto = document.querySelector('.about-photo');
if (aboutPhoto) {
  aboutPhoto.addEventListener('mouseenter', () => {
    aboutPhoto.classList.add('is-color');
  });
  aboutPhoto.addEventListener('mouseleave', () => {
    aboutPhoto.classList.remove('is-color');
  });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header .nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
