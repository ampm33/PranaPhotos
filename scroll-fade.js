// scroll-fade.js — Intersection Observer reveal
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || els.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => io.observe(el));
});
