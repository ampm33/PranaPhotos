// scroll-fade.js — Intersection Observer reveal
// Uses .js body class so content is always visible without JS

document.addEventListener('DOMContentLoaded', () => {
  // Mark JS as active — CSS uses this to enable animations
  document.body.classList.add('js');

  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    // Fallback: show everything immediately
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
  );

  els.forEach(el => io.observe(el));
});
