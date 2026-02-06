// ===== Shared menu injection + your existing open/close logic =====

document.addEventListener("DOMContentLoaded", async () => {
  // ---------- 1) Inject menu.html into #site-menu ----------
  const mount = document.getElementById("site-menu");

  if (mount) {
    try {
      const res = await fetch("menu.html", { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load menu.html: ${res.status}`);

      mount.innerHTML = await res.text();

      // Highlight current page
      const current = window.location.pathname.split("/").pop() || "index.html";
      const links = mount.querySelectorAll("a.nav__link");

      links.forEach((a) => {
        const href = a.getAttribute("href");
        if (href === current) a.setAttribute("aria-current", "page");
      });
    } catch (err) {
      console.error(err);
      // If menu fails to load, at least show something
      mount.innerHTML = `<a class="brand__link" href="index.html">PRANAPHOTOS</a>`;
    }
  }

  // ---------- 2) Your existing menu open/close behavior ----------
  const menuBtn = document.getElementById("menuBtn");
  const backdrop = document.getElementById("backdrop");

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);

    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", String(open));
    }

    if (backdrop) {
      backdrop.hidden = !open;
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const isOpen = document.body.classList.contains("menu-open");
      setMenu(!isOpen);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", () => setMenu(false));
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });
});