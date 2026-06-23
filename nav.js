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
      pickSub:    "Documentation is available in English, Italian, German, Spanish, Dutch, Portuguese, and Russian.",
      langEN:     "English",
      langIT:     "Italian",
      langDE:     "German",
      langES:     "Spanish",
      langNL:     "Dutch",
      langPT:     "Portuguese (BR)",
      langRU:     "Russian",
      next:       "Next →",
      prev:       "← Prev",
      download:   "Download Free",
      installBtn: "Installation guide →",
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
      pickSub:    "La documentazione è disponibile in inglese, italiano, tedesco, spagnolo, olandese, portoghese e russo.",
      langEN:     "Inglese",
      langIT:     "Italiano",
      langDE:     "Tedesco",
      langES:     "Spagnolo",
      langNL:     "Olandese",
      langPT:     "Portoghese (BR)",
      next:       "Successivo →",
      prev:       "← Precedente",
      download:   "Scarica gratis",
      installBtn: "Guida all'installazione →",
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
      pickSub:    "Die Dokumentation ist auf Englisch, Italienisch, Deutsch, Spanisch, Niederländisch, Portugiesisch und Russisch verfügbar.",
      langEN:     "Englisch",
      langIT:     "Italienisch",
      langDE:     "Deutsch",
      langES:     "Spanisch",
      langNL:     "Niederländisch",
      langPT:     "Portugiesisch (BR)",
      next:       "Weiter →",
      prev:       "← Zurück",
      download:   "Gratis herunterladen",
      installBtn: "Installationsanleitung →",
    },
    es: {
      groups: {
        "Getting Started":  "Primeros pasos",
        "Using the Plugin": "Uso del plugin",
        "Features":         "Funcionalidades",
        "Tools":            "Herramientas",
        "Advanced":         "Avanzado"
      },
      labels: {
        "index.html":          "Introducción",
        "installation.html":   "Instalación",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Bloque Gutenberg",
        "themes.html":         "Temas y categorías",
        "logo.html":           "Logotipo",
        "mega-menu.html":      "Megamenú",
        "announcement.html":   "Barra de anuncios",
        "cart.html":           "Carrito WooCommerce",
        "search.html":         "Búsqueda",
        "badges.html":         "Insignias y puntos",
        "visibility.html":     "Reglas de visibilidad",
        "mobile.html":         "Menús para móvil",
        "layout.html":         "Diseño y efectos",
        "footer.html":         "Constructor de pie de página",
        "wp-integration.html": "Integración WP",
        "import-export.html":  "Importar / Exportar",
        "accessibility.html":  "Accesibilidad",
        "multilingual.html":   "Multilingüe",
        "faq.html":            "Preguntas frecuentes"
      },
      onThisPage: "En esta página",
      pickTitle:  "Elige tu idioma",
      pickSub:    "La documentación está disponible en inglés, italiano, alemán, español, neerlandés, portugués y ruso.",
      langEN:     "Inglés",
      langIT:     "Italiano",
      langDE:     "Alemán",
      langES:     "Español",
      langNL:     "Neerlandés",
      langPT:     "Portugués (BR)",
      next:       "Siguiente →",
      prev:       "← Anterior",
      download:   "Descargar gratis",
      installBtn: "Guía de instalación →",
    },
    nl: {
      groups: {
        "Getting Started":  "Aan de slag",
        "Using the Plugin": "Plugin gebruiken",
        "Features":         "Mogelijkheden",
        "Tools":            "Hulpmiddelen",
        "Advanced":         "Geavanceerd"
      },
      labels: {
        "index.html":          "Inleiding",
        "installation.html":   "Installatie",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Gutenberg-blok",
        "themes.html":         "Thema's en categorieën",
        "logo.html":           "Logo",
        "mega-menu.html":      "Megamenu",
        "announcement.html":   "Aankondigingsbalk",
        "cart.html":           "WooCommerce-winkelwagen",
        "search.html":         "Zoeken",
        "badges.html":         "Badges en stippen",
        "visibility.html":     "Zichtbaarheidsregels",
        "mobile.html":         "Mobiele menu's",
        "layout.html":         "Opmaak en effecten",
        "footer.html":         "Footer Builder",
        "wp-integration.html": "WP-integratie",
        "import-export.html":  "Importeren / Exporteren",
        "accessibility.html":  "Toegankelijkheid",
        "multilingual.html":   "Meertalig",
        "faq.html":            "Veelgestelde vragen"
      },
      onThisPage: "Op deze pagina",
      pickTitle:  "Kies je taal",
      pickSub:    "De documentatie is beschikbaar in het Engels, Italiaans, Duits, Spaans, Nederlands, Portugees en Russisch.",
      langEN:     "Engels",
      langIT:     "Italiaans",
      langDE:     "Duits",
      langES:     "Spaans",
      langNL:     "Nederlands",
      langPT:     "Portugees (BR)",
      next:       "Volgende →",
      prev:       "← Vorige",
      download:   "Gratis downloaden",
      installBtn: "Installatiegids →",
    },
    pt: {
      groups: {
        "Getting Started":  "Primeiros passos",
        "Using the Plugin": "Usando o plugin",
        "Features":         "Funcionalidades",
        "Tools":            "Ferramentas",
        "Advanced":         "Avançado"
      },
      labels: {
        "index.html":          "Introdução",
        "installation.html":   "Instalação",
        "shortcode.html":      "Shortcode [menux]",
        "gutenberg.html":      "Bloco Gutenberg",
        "themes.html":         "Temas e categorias",
        "logo.html":           "Logotipo",
        "mega-menu.html":      "Megamenu",
        "announcement.html":   "Barra de avisos",
        "cart.html":           "Carrinho WooCommerce",
        "search.html":         "Busca",
        "badges.html":         "Badges e pontos",
        "visibility.html":     "Regras de visibilidade",
        "mobile.html":         "Menus mobile",
        "layout.html":         "Layout e efeitos",
        "footer.html":         "Footer Builder",
        "wp-integration.html": "Integração WP",
        "import-export.html":  "Importar / Exportar",
        "accessibility.html":  "Acessibilidade",
        "multilingual.html":   "Multilíngue",
        "faq.html":            "Perguntas frequentes"
      },
      onThisPage: "Nesta página",
      pickTitle:  "Escolha o seu idioma",
      pickSub:    "A documentação está disponível em inglês, italiano, alemão, espanhol, holandês, português e russo.",
      langEN:     "Inglês",
      langIT:     "Italiano",
      langDE:     "Alemão",
      langES:     "Espanhol",
      langNL:     "Holandês",
      langPT:     "Português",
      next:       "Próximo →",
      prev:       "← Anterior",
      download:   "Baixar grátis",
      installBtn: "Guia de instalação →",
    },
    ru: {
      groups: {
        "Getting Started":  "Начало работы",
        "Using the Plugin": "Использование плагина",
        "Features":         "Возможности",
        "Tools":            "Инструменты",
        "Advanced":         "Дополнительно"
      },
      labels: {
        "index.html":          "Введение",
        "installation.html":   "Установка",
        "shortcode.html":      "Шорткод [menux]",
        "gutenberg.html":      "Блок Gutenberg",
        "themes.html":         "Темы и категории",
        "logo.html":           "Логотип",
        "mega-menu.html":      "Мегаменю",
        "announcement.html":   "Панель объявлений",
        "cart.html":           "Корзина WooCommerce",
        "search.html":         "Поиск",
        "badges.html":         "Значки и точки",
        "visibility.html":     "Правила видимости",
        "mobile.html":         "Мобильные меню",
        "layout.html":         "Макет и эффекты",
        "footer.html":         "Конструктор подвала",
        "wp-integration.html": "Интеграция с WP",
        "import-export.html":  "Импорт / Экспорт",
        "accessibility.html":  "Доступность",
        "multilingual.html":   "Мультиязычность",
        "faq.html":            "Частые вопросы"
      },
      onThisPage: "На этой странице",
      pickTitle:  "Выберите язык",
      pickSub:    "Документация доступна на английском, итальянском, немецком, испанском, нидерландском, португальском и русском языках.",
      langEN:     "Английский",
      langIT:     "Итальянский",
      langDE:     "Немецкий",
      langES:     "Испанский",
      langNL:     "Нидерландский",
      langPT:     "Португальский (BR)",
      langRU:     "Русский",
      next:       "Далее →",
      prev:       "← Назад",
      download:   "Скачать бесплатно",
      installBtn: "Руководство по установке →",
    }
  };

  const getLang = ()  => localStorage.getItem(LANG_KEY);
  const setLang = l   => localStorage.setItem(LANG_KEY, l);

  const FLAG   = { en: '🇬🇧', it: '🇮🇹', de: '🇩🇪', es: '🇪🇸', nl: '🇳🇱', pt: '🇧🇷', ru: '🇷🇺' };
  const NATIVE = { en: 'English', it: 'Italiano', de: 'Deutsch', es: 'Español', nl: 'Nederlands', pt: 'Português', ru: 'Русский' };

  /* ── Language picker overlay ──────────────────────────────────────────── */
  function showPicker(onDone) {
    const saved = getLang();
    const uiLang = (saved && T[saved]) ? saved : (() => {
      const l = (navigator.language || 'en').toLowerCase();
      return l.startsWith('it') ? 'it' : l.startsWith('de') ? 'de' : l.startsWith('es') ? 'es' : l.startsWith('nl') ? 'nl' : l.startsWith('pt') ? 'pt' : 'en';
    })();
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
            <span class="lang-flag">${FLAG.en}</span>
            <span class="lang-name">${NATIVE.en}</span>
          </button>
          <button class="lang-opt" data-lang="it">
            <span class="lang-flag">${FLAG.it}</span>
            <span class="lang-name">${NATIVE.it}</span>
          </button>
          <button class="lang-opt" data-lang="de">
            <span class="lang-flag">${FLAG.de}</span>
            <span class="lang-name">${NATIVE.de}</span>
          </button>
          <button class="lang-opt" data-lang="es">
            <span class="lang-flag">${FLAG.es}</span>
            <span class="lang-name">${NATIVE.es}</span>
          </button>
          <button class="lang-opt" data-lang="nl">
            <span class="lang-flag">${FLAG.nl}</span>
            <span class="lang-name">${NATIVE.nl}</span>
          </button>
          <button class="lang-opt" data-lang="pt">
            <span class="lang-flag">${FLAG.pt}</span>
            <span class="lang-name">${NATIVE.pt}</span>
          </button>
          <button class="lang-opt" data-lang="ru">
            <span class="lang-flag">${FLAG.ru}</span>
            <span class="lang-name">${NATIVE.ru}</span>
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

  /* ── URL / language helpers ───────────────────────────────────────────── */
  const LANGS = ['it','de','es','nl','pt','ru'];

  /* Each language is served from its own folder (/it/, /de/, …); English
     lives at the site root. Content is static per URL — no client-side
     swapping — so every language version is independently crawlable. */
  function currentPage() {
    const last = window.location.pathname.split('/').pop();
    return last && last.endsWith('.html') ? last : 'index.html';
  }
  function currentLang() {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return LANGS.includes(seg) ? seg : 'en';
  }
  function urlFor(lang, page) {
    if (lang === 'en') return page === 'index.html' ? '/' : '/' + page;
    return page === 'index.html' ? '/' + lang + '/' : '/' + lang + '/' + page;
  }
  function goToLang(lang) {
    setLang(lang);
    if (lang !== currentLang()) window.location.href = urlFor(lang, currentPage());
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
      { code: 'es', flag: '&#x1F1EA;&#x1F1F8;', label: 'ES' },
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
              <button type="button" class="lang-toggle" aria-label="Switch language">${FLAG[lang] || ''} ${NATIVE[lang] || lang.toUpperCase()} &#9662;</button>
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
    html += `</nav>
    <div class="sidebar-footer">
      <a href="https://wordpress.org/plugins/giuliomax-menu-builder/" target="_blank" rel="noopener" class="sidebar-download">&#8659; ${tr.download || 'Download Free'}</a>
    </div>`;
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

    /* Language switcher — opens the full picker overlay, then navigates */
    const langToggle = sidebar.querySelector(".lang-toggle");
    langToggle.addEventListener("click", e => {
      e.stopPropagation();
      showPicker(chosen => goToLang(chosen));
    });
  }

  /* ── Bootstrap ────────────────────────────────────────────────────────── */
  const here  = currentLang();
  const saved = getLang();

  if (here !== 'en') {
    /* Explicit language URL — respect it and remember the preference */
    setLang(here);
    document.addEventListener("DOMContentLoaded", () => init(here));
  } else if (saved && T[saved] && saved !== 'en') {
    /* On the default (English) URL but the visitor has chosen another
       language before — send them to their version. Crawlers have no saved
       preference, so they never redirect and every URL stays indexable. */
    window.location.replace(urlFor(saved, currentPage()));
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      init('en');
      /* First-ever visit on the English site: offer the language picker */
      if (!saved) showPicker(chosen => goToLang(chosen));
    });
  }

})();
