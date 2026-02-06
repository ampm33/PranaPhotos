document.addEventListener("DOMContentLoaded", async () => {
  const mount = document.getElementById("site-menu");
  if (!mount) return;

  // Cache-bust so GitHub Pages updates show instantly
  const menuUrl = "/PranaPhotos/menu.html?v=" + Date.now();

  try {
    const res = await fetch(menuUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load menu.html (${res.status})`);

    mount.innerHTML = await res.text();

    // Highlight current page
    const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

    mount.querySelectorAll("nav a").forEach((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (href === current) a.setAttribute("aria-current", "page");
    });
  } catch (e) {
    console.error(e);
    mount.innerHTML = `
      <div class="brand">
        <div class="title">PRANAPHOTOS</div>
      </div>
      <nav class="nav">
        <a href="index.html">HOME</a>
      </nav>
      <div class="sidebar-footer">© 2026 PRANAPHOTOS</div>
    `;
  }
});
