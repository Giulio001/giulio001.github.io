/* Shared sidebar navigation — injected into every page */
(function () {
  const pages = [
    { group: "Getting Started" },
    { href: "index.html",        label: "Introduction" },
    { href: "installation.html", label: "Installation" },
    { group: "Using the Plugin" },
    { href: "shortcode.html",    label: "Shortcode [menux]" },
    { href: "gutenberg.html",    label: "Gutenberg Block" },
    { group: "Features" },
    { href: "themes.html",       label: "Themes & Categories" },
    { href: "logo.html",         label: "Logo" },
    { href: "mega-menu.html",    label: "Mega Menu" },
    { href: "announcement.html", label: "Announcement Bar" },
    { href: "cart.html",         label: "WooCommerce Cart" },
    { href: "search.html",       label: "Search" },
    { href: "badges.html",       label: "Badges & Dots" },
    { href: "visibility.html",   label: "Visibility Rules" },
    { href: "mobile.html",       label: "Mobile Menus" },
    { href: "layout.html",       label: "Layout & Effects" },
    { group: "Tools" },
    { href: "wp-integration.html", label: "WP Integration" },
    { href: "import-export.html",  label: "Import / Export" },
    { group: "Advanced" },
    { href: "accessibility.html",  label: "Accessibility" },
    { href: "multilingual.html",   label: "Multilingual" },
    { href: "faq.html",            label: "FAQ" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";
  const activePage = pages.find(p => p.href === current);
  const currentLabel = activePage ? activePage.label : "Menu";

  let html = `
    <div class="sidebar-head">
      <div class="sidebar-logo">
        <a href="index.html">Giuliomax Menu Builder</a>
        <span class="version">v3.8.2</span>
      </div>
      <button type="button" class="sidebar-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span class="sidebar-toggle-current">${currentLabel}</span>
        <span class="sidebar-toggle-icon" aria-hidden="true"></span>
      </button>
    </div>
    <nav class="sidebar-nav">`;

  let inGroup = false;
  pages.forEach(p => {
    if (p.group) {
      if (inGroup) html += `</div>`;
      html += `<div class="nav-group"><span class="nav-label">${p.group}</span>`;
      inGroup = true;
    } else {
      const active = p.href === current ? " active" : "";
      html += `<a href="${p.href}" class="${active}">${p.label}</a>`;
    }
  });
  if (inGroup) html += `</div>`;
  html += `</nav>`;

  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  sidebar.innerHTML = html;

  /* Mobile: collapsible nav toggled by the hamburger button. */
  const toggle = sidebar.querySelector(".sidebar-toggle");
  toggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  /* Tapping a link closes the menu (relevant if the target is the current page). */
  sidebar.querySelectorAll(".sidebar-nav a").forEach(a => {
    a.addEventListener("click", () => {
      sidebar.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
