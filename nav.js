/* Shared sidebar navigation + language system */
(function () {

  /* ── Translations ──────────────────────────────────────────────────────── */
  const LANG_KEY = 'menux-docs-lang';

  const T = {
    en: {
      groups: {
        "Getting Started":  "Getting Started",
        "Using the Plugin": "Using the Plugin",
        "Features":         "Features",
        "Tools":            "Tools",
        "Advanced":         "Advanced"
      },
      labels: {
        "index.html":          "Introduction",
        "installation.html":   "Installation",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Gutenberg Block",
        "themes.html":         "Themes & Categories",
        "logo.html":           "Logo",
        "mega-menu.html":      "Mega Menu",
        "announcement.html":   "Announcement Bar",
        "cart.html":           "WooCommerce Cart",
        "search.html":         "Search",
        "badges.html":         "Badges & Dots",
        "visibility.html":     "Visibility Rules",
        "mobile.html":         "Mobile Menus",
        "layout.html":         "Layout & Effects",
        "footer.html":         "Footer Builder",
        "wp-integration.html": "WP Integration",
        "import-export.html":  "Import / Export",
        "accessibility.html":  "Accessibility",
        "multilingual.html":   "Multilingual",
        "faq.html":            "FAQ"
      },
      onThisPage: "On this page",
      pickTitle:  "Choose your language",
      pickSub:    "Documentation is available in English, Italian, and German.",
      langEN:     "English",
      langIT:     "Italian",
      langDE:     "German",
      next:       "Next →",
      prev:       "← Prev",
    },
    it: {
      groups: {
        "Getting Started":  "Per Iniziare",
        "Using the Plugin": "Uso del Plugin",
        "Features":         "Funzionalità",
        "Tools":            "Strumenti",
        "Advanced":         "Avanzato"
      },
      labels: {
        "index.html":          "Introduzione",
        "installation.html":   "Installazione",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Blocco Gutenberg",
        "themes.html":         "Temi & Categorie",
        "logo.html":           "Logo",
        "mega-menu.html":      "Mega Menu",
        "announcement.html":   "Barra Annunci",
        "cart.html":           "Carrello WooCommerce",
        "search.html":         "Ricerca",
        "badges.html":         "Badge & Puntini",
        "visibility.html":     "Regole di Visibilità",
        "mobile.html":         "Menu Mobile",
        "layout.html":         "Layout & Effetti",
        "footer.html":         "Footer Builder",
        "wp-integration.html": "Integrazione WP",
        "import-export.html":  "Import / Export",
        "accessibility.html":  "Accessibilità",
        "multilingual.html":   "Multilingua",
        "faq.html":            "FAQ"
      },
      onThisPage: "In questa pagina",
      pickTitle:  "Scegli la tua lingua",
      pickSub:    "La documentazione è disponibile in inglese, italiano e tedesco.",
      langEN:     "Inglese",
      langIT:     "Italiano",
      langDE:     "Tedesco",
      next:       "Successivo →",
      prev:       "← Precedente",
    },
    de: {
      groups: {
        "Getting Started":  "Erste Schritte",
        "Using the Plugin": "Plugin verwenden",
        "Features":         "Funktionen",
        "Tools":            "Werkzeuge",
        "Advanced":         "Erweitert"
      },
      labels: {
        "index.html":          "Einführung",
        "installation.html":   "Installation",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Gutenberg-Block",
        "themes.html":         "Themes & Kategorien",
        "logo.html":           "Logo",
        "mega-menu.html":      "Mega-Menü",
        "announcement.html":   "Ankündigungsleiste",
        "cart.html":           "WooCommerce-Warenkorb",
        "search.html":         "Suche",
        "badges.html":         "Abzeichen & Punkte",
        "visibility.html":     "Sichtbarkeitsregeln",
        "mobile.html":         "Mobile Menüs",
        "layout.html":         "Layout & Effekte",
        "footer.html":         "Footer Builder",
        "wp-integration.html": "WP-Integration",
        "import-export.html":  "Import / Export",
        "accessibility.html":  "Barrierefreiheit",
        "multilingual.html":   "Mehrsprachigkeit",
        "faq.html":            "FAQ"
      },
      onThisPage: "Auf dieser Seite",
      pickTitle:  "Sprache wählen",
      pickSub:    "Die Dokumentation ist auf Englisch, Italienisch und Deutsch verfügbar.",
      langEN:     "Englisch",
      langIT:     "Italienisch",
      langDE:     "Deutsch",
      next:       "Weiter →",
      prev:       "← Zurück",
    }
  };

  const getLang = ()  => localStorage.getItem(LANG_KEY);
  const setLang = l   => localStorage.setItem(LANG_KEY, l);

  /* ── Language picker overlay ──────────────────────────────────────────── */
  function showPicker(onDone) {
    const l = (navigator.language || 'en').toLowerCase();
    const uiLang = l.startsWith('it') ? 'it' : l.startsWith('de') ? 'de' : 'en';
    const tr = T[uiLang];

    const overlay = document.createElement('div');
    overlay.id = 'lang-picker';
    overlay.innerHTML = `
      <div class="lang-picker-box">
        <div class="lang-picker-brand">Giuliomax Menu Builder</div>
        <h2 class="lang-picker-title">${tr.pickTitle}</h2>
        <p class="lang-picker-sub">${tr.pickSub}</p>
        <div class="lang-picker-btns">
          <button class="lang-opt" data-lang="en">
            <span class="lang-flag">&#x1F1EC;&#x1F1E7;</span>
            <span class="lang-name">${tr.langEN}</span>
          </button>
          <button class="lang-opt" data-lang="it">
            <span class="lang-flag">&#x1F1EE;&#x1F1F9;</span>
            <span class="lang-name">${tr.langIT}</span>
          </button>
          <button class="lang-opt" data-lang="de">
            <span class="lang-flag">&#x1F1E9;&#x1F1EA;</span>
            <span class="lang-name">${tr.langDE}</span>
          </button>
        </div>
      </div>`;

    overlay.querySelectorAll('.lang-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.dataset.lang;
        setLang(chosen);
        overlay.classList.add('lang-fade-out');
        setTimeout(() => { overlay.remove(); onDone(chosen); }, 280);
      });
    });

    document.body.appendChild(overlay);
  }

  /* ── Content loaders ──────────────────────────────────────────────────── */
  function loadScript(src, cb) {
    const s = document.createElement('script');
    s.src = src; s.onload = cb; s.onerror = cb;
    document.head.appendChild(s);
  }

  function loadItalianContent(cb) {
    if (window.MENUX_IT) { cb(); return; }
    loadScript('it.js', cb);
  }
  function applyItalianContent() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const article = document.querySelector('article');
    if (article && window.MENUX_IT && window.MENUX_IT[page])
      article.innerHTML = window.MENUX_IT[page];
  }

  function loadGermanContent(cb) {
    if (window.MENUX_DE) { cb(); return; }
    loadScript('de.js', cb);
  }
  function applyGermanContent() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const article = document.querySelector('article');
    if (article && window.MENUX_DE && window.MENUX_DE[page])
      article.innerHTML = window.MENUX_DE[page];
  }

  /* ── Apply page-level UI translations ────────────────────────────────── */
  function applyTranslations(lang) {
    const tr = T[lang];
    if (!tr) return;

    document.querySelectorAll('.on-this-page > strong').forEach(el => {
      el.textContent = tr.onThisPage;
    });

    const bc = document.querySelector('.breadcrumb');
    if (bc) {
      const key = bc.textContent.trim();
      if (tr.groups[key]) bc.textContent = tr.groups[key];
    }

    document.querySelectorAll('.page-nav .nav-dir').forEach(el => {
      if (el.textContent.includes('→'))      el.textContent = tr.next;
      else if (el.textContent.includes('←')) el.textContent = tr.prev;
    });

    document.querySelectorAll('.page-nav a[href]').forEach(a => {
      const label = tr.labels[a.getAttribute('href')];
      if (label) {
        const title = a.querySelector('.nav-title');
        if (title) title.textContent = label;
      }
    });
  }

  /* ── Pages manifest ───────────────────────────────────────────────────── */
  const pages = [
    { group: "Getting Started" },
    { href: "index.html",          label: "Introduction" },
    { href: "installation.html",   label: "Installation" },
    { group: "Using the Plugin" },
    { href: "shortcode.html",      label: "Shortcode [menux]" },
    { href: "gutenberg.html",      label: "Gutenberg Block" },
    { group: "Features" },
    { href: "themes.html",         label: "Themes & Categories" },
    { href: "logo.html",           label: "Logo" },
    { href: "mega-menu.html",      label: "Mega Menu" },
    { href: "announcement.html",   label: "Announcement Bar" },
    { href: "cart.html",           label: "WooCommerce Cart" },
    { href: "search.html",         label: "Search" },
    { href: "badges.html",         label: "Badges & Dots" },
    { href: "visibility.html",     label: "Visibility Rules" },
    { href: "mobile.html",         label: "Mobile Menus" },
    { href: "layout.html",         label: "Layout & Effects" },
    { href: "footer.html",         label: "Footer Builder" },
    { group: "Tools" },
    { href: "wp-integration.html", label: "WP Integration" },
    { href: "import-export.html",  label: "Import / Export" },
    { group: "Advanced" },
    { href: "accessibility.html",  label: "Accessibility" },
    { href: "multilingual.html",   label: "Multilingual" },
    { href: "faq.html",            label: "FAQ" },
  ];

  /* ── Build sidebar HTML ───────────────────────────────────────────────── */
  function buildLangMenu(currentLang) {
    return [
      { code: 'en', flag: '&#x1F1EC;&#x1F1E7;', label: 'EN' },
      { code: 'it', flag: '&#x1F1EE;&#x1F1F9;', label: 'IT' },
      { code: 'de', flag: '&#x1F1E9;&#x1F1EA;', label: 'DE' },
    ].map(o =>
      `<button class="lang-opt-sm${o.code === currentLang ? ' active' : ''}" data-lang="${o.code}">${o.flag} ${o.label}</button>`
    ).join('');
  }

  function buildSidebar(lang) {
    const tr      = T[lang] || T.en;
    const current = window.location.pathname.split("/").pop() || "index.html";
    const active  = pages.find(p => p.href === current);
    const currentLabel = active ? (tr.labels[active.href] || active.label) : "Menu";

    let html = `
      <div class="sidebar-head">
        <div class="sidebar-logo">
          <a href="index.html">Giuliomax Menu Builder</a>
          <div class="sidebar-logo-meta">
            <span class="version">v3.9.0</span>
            <div class="lang-switch">
              <button type="button" class="lang-toggle" aria-haspopup="true" aria-expanded="false" aria-label="Switch language">${lang.toUpperCase()} &#9662;</button>
              <div class="lang-menu" hidden>${buildLangMenu(lang)}</div>
            </div>
          </div>
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
        html += `<div class="nav-group"><span class="nav-label">${tr.groups[p.group] || p.group}</span>`;
        inGroup = true;
      } else {
        const isActive = p.href === current ? ' active' : '';
        const label    = tr.labels[p.href] || p.label;
        html += `<a href="${p.href}" class="${isActive}">${label}</a>`;
      }
    });
    if (inGroup) html += `</div>`;
    html += `</nav>`;
    return html;
  }

  /* ── Initialize ───────────────────────────────────────────────────────── */
  function init(lang) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    sidebar.innerHTML = buildSidebar(lang);

    /* Mobile hamburger */
    const toggle = sidebar.querySelector(".sidebar-toggle");
    toggle.addEventListener("click", () => {
      const open = sidebar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    sidebar.querySelectorAll(".sidebar-nav a").forEach(a => {
      a.addEventListener("click", () => {
        sidebar.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    /* Language dropdown */
    const langToggle = sidebar.querySelector(".lang-toggle");
    const langMenu   = sidebar.querySelector(".lang-menu");
    langToggle.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = !langMenu.hidden;
      langMenu.hidden = isOpen;
      langToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
    sidebar.querySelectorAll(".lang-opt-sm").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
        location.reload();
      });
    });
    document.addEventListener("click", () => {
      if (!langMenu.hidden) {
        langMenu.hidden = true;
        langToggle.setAttribute("aria-expanded", "false");
      }
    });

    /* Load translated content */
    if (lang === 'it') {
      loadItalianContent(() => { applyItalianContent(); applyTranslations(lang); });
    } else if (lang === 'de') {
      loadGermanContent(() => { applyGermanContent(); applyTranslations(lang); });
    } else {
      applyTranslations(lang);
    }
  }

  /* ── Bootstrap ────────────────────────────────────────────────────────── */
  const saved = getLang();
  if (saved) {
    document.addEventListener("DOMContentLoaded", () => init(saved));
  } else {
    document.addEventListener("DOMContentLoaded", () => showPicker(chosen => init(chosen)));
  }

})();
