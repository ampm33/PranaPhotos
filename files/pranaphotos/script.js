// script.js — PranaPhotos interactions

// Add .js class to body so CSS can safely hide/show elements
document.documentElement.classList.add('js');

// ── SERVICES ACCORDION ──────────────────────────────────────
// Each .service-item expands on hover (CSS handles it) AND
// clicking locks it open (toggling .is-open class)
document.addEventListener('DOMContentLoaded', () => {

  // Services: click to toggle open/close
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close all first
      serviceItems.forEach(s => {
        s.classList.remove('is-open');
        const toggle = s.querySelector('.svc-toggle');
        if (toggle) toggle.textContent = '+';
      });
      // Open clicked if it wasn't already open
      if (!isOpen) {
        item.classList.add('is-open');
        const toggle = item.querySelector('.svc-toggle');
        if (toggle) toggle.textContent = '—';
      }
    });
  });

  // ── MOBILE MENU TOGGLE ─────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header .nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── SCROLLED HEADER STATE ──────────────────────────────────
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ── ABOUT PHOTO: B&W → COLOR on hover ─────────────────────
  const aboutPhoto = document.querySelector('.about-photo, .about-page-photo');
  if (aboutPhoto) {
    aboutPhoto.addEventListener('mouseenter', () => aboutPhoto.classList.add('is-color'));
    aboutPhoto.addEventListener('mouseleave', () => aboutPhoto.classList.remove('is-color'));
  }

});
