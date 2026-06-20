window.MENUX_IT = {

"index.html": `
<p class="breadcrumb">Per Iniziare</p>
<h1>Introduzione</h1>
<p class="lead">Giuliomax Menu Builder è un plugin WordPress gratuito e open-source che ti permette di costruire qualsiasi tipo di menu di navigazione — e un footer corrispondente — da una semplice lista a un mega menu a larghezza intera, senza scrivere una sola riga di codice.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/nav-desktop.svg" alt="Desktop navigation bar rendered by MenuX with logo, links, a New badge, search and a CTA button" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#what-is-it">Cos'è Giuliomax Menu Builder?</a><a href="#features">Funzionalità principali</a><a href="#requirements">Requisiti</a><a href="#quick-start">Avvio rapido</a></div>

<h2 id="what-is-it">Cos'è Giuliomax Menu Builder?</h2>
<p>Giuliomax Menu Builder sostituisce il sistema di menu predefinito di WordPress con un costruttore visivo completo, direttamente nel pannello di amministrazione. Puoi creare menu semplici a una riga, dropdown multilivello o pannelli mega menu a più colonne — tutto tramite un'interfaccia drag-and-drop.</p>
<p>Il menu può essere inserito nel sito in due modi:</p>
<ul>
  <li>Lo <strong>shortcode</strong> <code>[menux]</code> — funziona in qualsiasi pagina, post, widget di testo o template PHP classico.</li>
  <li>Il <strong>blocco Gutenberg</strong> — si integra nativamente nell'Editor del Sito (FSE) e nell'editor a blocchi.</li>
</ul>

<h2 id="features">Funzionalità principali</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Funzionalità</th><th>Dettagli</th></tr></thead>
  <tbody>
    <tr><td>50 temi</td><td>10 categorie di stile, applicabili con un clic</td></tr>
    <tr><td>Mega menu</td><td>Fino a 4 colonne, con link, intestazioni, immagini e shortcode</td></tr>
    <tr><td>Footer Builder</td><td>Footer multi-colonna con sezioni, barra inferiore e temi dedicati</td></tr>
    <tr><td>Barra annunci</td><td>Banner promozionale con timer countdown integrato</td></tr>
    <tr><td>Carrello WooCommerce</td><td>Icona carrello con contatore in tempo reale</td></tr>
    <tr><td>Ricerca</td><td>Overlay di ricerca modale con schede Menu e Pagina</td></tr>
    <tr><td>Badge e puntini</td><td>Etichette testuali e puntini di notifica per singole voci</td></tr>
    <tr><td>Regole di visibilità</td><td>Mostra/nascondi voci per ruolo, dispositivo, orario o parametri UTM</td></tr>
    <tr><td>Menu mobile</td><td>4 stili: Dropdown, Fullscreen, Drawer sinistro, Drawer destro</td></tr>
    <tr><td>Logo</td><td>Immagine logo posizionabile con logo mobile separato</td></tr>
    <tr><td>Layout &amp; Effetti</td><td>Navigazione sticky, barra di avanzamento scroll, animazioni</td></tr>
    <tr><td>Multilingua</td><td>Compatibile con WPML, Polylang, TranslatePress, Multilingual Press</td></tr>
    <tr><td>Accessibilità</td><td>Conforme WCAG 2.2 AA, navigazione da tastiera completa</td></tr>
    <tr><td>Import / Export</td><td>Backup e trasferimento della configurazione in formato JSON</td></tr>
    <tr><td>Integrazione WP</td><td>Sostituisce wp_nav_menu() dei temi classici senza modificare i template</td></tr>
    <tr><td>Icone</td><td>Supporto Font Awesome 6 per le voci di menu</td></tr>
    <tr><td>Scroll Spy</td><td>Evidenzia automaticamente la voce attiva durante lo scroll</td></tr>
    <tr><td>Anteprime live</td><td>Anteprima telefono in tempo reale per il menu mobile</td></tr>
  </tbody>
</table></div>

<div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><p>Completamente gratuito. Non esiste una versione Pro, non ci sono funzionalità a pagamento e non è richiesta alcuna chiave di licenza. Tutto ciò che è documentato qui è disponibile nell'installazione standard del plugin.</p></div></div>

<h2 id="requirements">Requisiti</h2>
<ul>
  <li>WordPress 6.0 o versione successiva</li>
  <li>PHP 7.4 o versione successiva</li>
  <li>Qualsiasi tema WordPress (classico o basato su blocchi)</li>
  <li>WooCommerce (opzionale — necessario solo per la funzione carrello)</li>
</ul>

<h2 id="quick-start">Avvio rapido</h2>
<ol class="steps">
  <li>Installa e attiva il plugin dalla directory di WordPress (<strong>Plugin → Aggiungi nuovo → cerca "Giuliomax Menu Builder"</strong>).</li>
  <li>Vai su <strong>Menu Builder → Voci</strong> e crea le voci del tuo menu.</li>
  <li>Vai su <strong>Menu Builder → Temi</strong> e scegli un tema.</li>
  <li>Inserisci lo shortcode <code>[menux]</code> nella tua pagina, oppure usa il blocco <strong>MenuX</strong> nell'Editor del Sito.</li>
</ol>

<div class="page-nav"><span></span><a class="next" href="installation.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Installazione</span></a></div>
`,

"installation.html": `
<p class="breadcrumb">Per Iniziare</p>
<h1>Installazione</h1>
<p class="lead">Installa Giuliomax Menu Builder in meno di due minuti. Non è richiesto l'accesso FTP, non è necessario caricare file manualmente e non serve alcuna chiave di licenza a pagamento.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#method-a">Metodo A — Directory plugin di WordPress</a><a href="#method-b">Metodo B — Carica un file ZIP</a><a href="#activate">Attivazione del plugin</a><a href="#first-steps">Primi passi</a><a href="#uninstall">Disinstallazione</a></div>

<h2 id="method-a">Metodo A — Directory plugin di WordPress <span class="badge-green">Consigliato</span></h2>
<ol class="steps">
  <li>Accedi al pannello di amministrazione di WordPress.</li>
  <li>Vai su <strong>Plugin → Aggiungi nuovo</strong>.</li>
  <li>Cerca <strong>Giuliomax Menu Builder</strong> nella casella di ricerca.</li>
  <li>Fai clic su <strong>Installa ora</strong> nella scheda del plugin.</li>
  <li>Al termine dell'installazione, fai clic su <strong>Attiva</strong>.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Il tuo server necessita di accesso HTTP in uscita per scaricare i plugin dalla directory di WordPress. La maggior parte degli hosting lo consente per impostazione predefinita. In caso di problemi, usa il Metodo B.</p></div></div>

<h2 id="method-b">Metodo B — Carica un file ZIP</h2>
<p>Se il tuo server non ha accesso a Internet o preferisci installare manualmente, puoi caricare il file ZIP del plugin:</p>
<ol class="steps">
  <li>Scarica il file ZIP più recente dalla <a href="https://wordpress.org/plugins/giuliomax-menu-builder/" target="_blank">pagina del plugin su wordpress.org</a> o dalla <a href="https://github.com/giulio001/giuliomax-menu-builder" target="_blank">pagina GitHub</a>.</li>
  <li>Nel pannello di amministrazione di WordPress, vai su <strong>Plugin → Aggiungi nuovo → Carica plugin</strong>.</li>
  <li>Fai clic su <strong>Scegli file</strong>, seleziona il file ZIP scaricato e fai clic su <strong>Installa ora</strong>.</li>
  <li>Al termine, fai clic su <strong>Attiva plugin</strong>.</li>
</ol>

<h2 id="activate">Attivazione del plugin</h2>
<p>Dopo l'attivazione, nella barra laterale del pannello di amministrazione di WordPress apparirà la voce <strong>Menu Builder</strong>.</p>
<ul>
  <li>Fai clic su <strong>Menu Builder</strong> per aprire il costruttore di menu e iniziare a configurare la navigazione del tuo sito.</li>
</ul>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Non è necessario creare un nuovo menu nelle impostazioni native di WordPress. Menu Builder gestisce le proprie voci in modo indipendente.</p></div></div>

<h2 id="first-steps">Primi passi</h2>
<h3>1. Costruisci il tuo menu</h3>
<p>Vai su <strong>Menu Builder → Voci</strong> per aggiungere e organizzare le voci del menu. Puoi creare voci personalizzate, aggiungere link a pagine o post esistenti e strutturare i sottomenu tramite drag-and-drop.</p>
<ul>
  <li>Fai clic su <strong>Aggiungi voce</strong> per inserire un nuovo elemento.</li>
  <li>Trascina le voci per riordinarle o per nidificarle come sottomenu.</li>
</ul>

<h3>2. Aggiungi il menu al tuo sito</h3>
<p>Dopo aver creato le voci, inserisci il menu nel tuo sito scegliendo uno dei metodi disponibili:</p>
<ul>
  <li>Usa lo shortcode <code>[menux]</code> in una pagina, un post o un widget di testo.</li>
  <li>Usa il blocco <strong>MenuX</strong> nell'Editor del Sito o nell'editor a blocchi.</li>
  <li>Usa la funzione <strong>Integrazione WP</strong> per sostituire i menu nativi del tema.</li>
</ul>

<h3>3. Configura il tuo menu</h3>
<p>Personalizza l'aspetto e il comportamento del menu dalle sezioni del pannello di amministrazione:</p>
<ul>
  <li><strong>Temi</strong> — scegli uno dei 50 temi predefiniti.</li>
  <li><strong>Layout</strong> — configura spaziatura, comportamento sticky e animazioni.</li>
  <li><strong>Mobile</strong> — scegli lo stile del menu mobile e il breakpoint.</li>
</ul>

<h2 id="uninstall">Disinstallazione</h2>
<p>Per rimuovere il plugin, vai su <strong>Plugin → Plugin installati</strong>, disattiva Giuliomax Menu Builder e fai clic su <strong>Elimina</strong>.</p>

<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><p>Eliminando il plugin vengono rimossi anche tutti i dati di configurazione, incluse le voci del menu, le impostazioni di stile e la configurazione del footer. Esegui un export prima di disinstallare se desideri conservare la configurazione.</p></div></div>

<div class="page-nav"><a href="index.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Introduzione</span></a><a class="next" href="shortcode.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Shortcode [menux]</span></a></div>
`,

"shortcode.html": `
<p class="breadcrumb">Uso del Plugin</p>
<h1>Shortcode [menux]</h1>
<p class="lead">Lo shortcode <code>[menux]</code> ti permette di inserire un menu di navigazione completamente stilizzato in qualsiasi punto che accetti shortcode: pagine, post, widget di testo, template di temi classici e altro ancora.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/shortcode.svg" alt="Shortcode [menux] in uso" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#basic">Utilizzo di base</a><a href="#attributes">Attributi</a><a href="#examples">Esempi</a><a href="#template">Utilizzo nei template PHP</a></div>

<h2 id="basic">Utilizzo di base</h2>
<p>Inserisci il seguente shortcode in qualsiasi pagina o post per visualizzare il menu:</p>
<pre><code>[menux]</code></pre>
<p>Il menu viene reso con la posizione e il tema predefiniti configurati in Menu Builder. Non sono necessari parametri aggiuntivi per un utilizzo standard.</p>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Lo shortcode funziona nell'editor classico, nell'editor a blocchi (come blocco Shortcode) e in qualsiasi widget di testo o area di testo che elabori shortcode WordPress.</p></div></div>

<h2 id="attributes">Attributi</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Attributo</th><th>Tipo</th><th>Predefinito</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td><code>location</code></td><td>stringa</td><td><code>primary</code></td><td>La posizione del menu da visualizzare. Deve corrispondere a una posizione definita in Menu Builder → Impostazioni → Posizioni.</td></tr>
  </tbody>
</table></div>

<h2 id="examples">Esempi</h2>
<h3>Menu predefinito</h3>
<pre><code>[menux]</code></pre>

<h3>Menu secondario</h3>
<pre><code>[menux location="secondary"]</code></pre>

<h3>Menu footer</h3>
<pre><code>[menux location="footer"]</code></pre>

<h2 id="template">Utilizzo nei template PHP</h2>
<p>Per inserire il menu direttamente in un file template PHP del tuo tema, usa la funzione <code>do_shortcode()</code>:</p>
<pre><code>&lt;?php echo do_shortcode('[menux]'); ?&gt;</code></pre>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Per i temi FSE (Full Site Editing), è preferibile usare il blocco Gutenberg MenuX invece dello shortcode, in modo da mantenere tutto all'interno dell'Editor del Sito.</p></div></div>

<div class="page-nav"><a href="installation.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Installazione</span></a><a class="next" href="gutenberg.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Blocco Gutenberg</span></a></div>
`,

"gutenberg.html": `
<p class="breadcrumb">Uso del Plugin</p>
<h1>Blocco Gutenberg</h1>
<p class="lead">Il blocco MenuX è un blocco WordPress nativo che ti permette di inserire il menu direttamente nell'Editor del Sito — senza shortcode, senza widget, senza PHP.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#when-to-use">Quando usare il blocco</a><a href="#add-block">Aggiungere il blocco</a><a href="#settings">Pannello impostazioni del blocco</a><a href="#fse-header">Utilizzo in un'intestazione FSE</a><a href="#classic">Temi classici</a></div>

<h2 id="when-to-use">Quando usare il blocco</h2>
<p>Il blocco MenuX è la scelta ideale se utilizzi un tema a blocchi (Full Site Editing) oppure se stai costruendo layout di pagina nell'editor a blocchi di WordPress. Offre i seguenti vantaggi:</p>
<ul>
  <li>Integrazione nativa con l'Editor del Sito — nessun shortcode da ricordare.</li>
  <li>Posizionamento visivo direttamente nel template dell'intestazione o del footer.</li>
  <li>Compatibilità completa con i blocchi di WordPress, incluso il blocco Modello.</li>
</ul>
<p>Per i temi classici che utilizzano file template PHP, lo shortcode <code>[menux]</code> o la funzione di Integrazione WP sono generalmente più pratici.</p>

<h2 id="add-block">Aggiungere il blocco a una pagina o template</h2>
<ol class="steps">
  <li>Apri la pagina o il template in cui vuoi inserire il menu nell'editor a blocchi o nell'Editor del Sito.</li>
  <li>Fai clic sul pulsante <strong>+</strong> per aprire l'inseritore di blocchi.</li>
  <li>Cerca <strong>MenuX</strong> e seleziona il blocco dai risultati.</li>
  <li>Il blocco viene inserito nella posizione del cursore e il menu viene visualizzato immediatamente.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Il nome tecnico del blocco è <code>giuliomax/menu</code>. Puoi fare riferimento a questo nome in codice personalizzato o quando utilizzi l'API dei blocchi di WordPress.</p></div></div>

<h2 id="settings">Pannello impostazioni del blocco</h2>
<p>Selezionando il blocco MenuX nell'editor, nella barra laterale destra appare il pannello delle impostazioni del blocco con le opzioni disponibili:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Impostazione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Posizione menu</td><td>Seleziona quale posizione di menu visualizzare (ad es. Primary, Secondary). Le posizioni disponibili sono quelle definite in Menu Builder → Impostazioni.</td></tr>
  </tbody>
</table></div>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Tutte le altre impostazioni (tema, layout, mobile, ecc.) vengono gestite globalmente in Menu Builder e si applicano automaticamente al blocco.</p></div></div>

<h2 id="fse-header">Consigliato: inserimento in un'intestazione FSE</h2>
<ol class="steps">
  <li>Vai su <strong>Aspetto → Editor</strong> per aprire l'Editor del Sito.</li>
  <li>Seleziona <strong>Template → Intestazione</strong> (o crea un nuovo template di intestazione).</li>
  <li>Fai clic su <strong>Modifica</strong> per entrare in modalità di modifica.</li>
  <li>Fai clic sul pulsante <strong>+</strong> e cerca <strong>MenuX</strong>.</li>
  <li>Inserisci il blocco nell'intestazione, nella posizione desiderata.</li>
  <li>Salva il template. Il menu apparirà ora in tutte le pagine che utilizzano quel template.</li>
</ol>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Puoi inserire più blocchi MenuX nello stesso template o in template diversi, ciascuno con una posizione di menu differente — ad esempio un menu principale nell'intestazione e un menu secondario nel footer.</p></div></div>

<h2 id="classic">Temi classici e l'editor a blocchi</h2>
<p>Nei temi classici, l'editor a blocchi è disponibile per la modifica dei contenuti delle pagine, ma il template del sito (intestazione, footer) è gestito dai file PHP del tema. In questo caso, per inserire il menu nell'intestazione del tema classico è preferibile usare lo shortcode <code>[menux]</code> tramite <code>do_shortcode()</code> nel file template, oppure la funzione di Integrazione WP che sostituisce automaticamente i menu nativi del tema.</p>

<div class="page-nav"><a href="shortcode.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Shortcode [menux]</span></a><a class="next" href="themes.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Temi &amp; Categorie</span></a></div>
`,

"themes.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Temi &amp; Categorie</h1>
<p class="lead">Giuliomax Menu Builder include 50 temi progettati professionalmente, organizzati in 10 categorie di stile. Scegli un tema, fai clic su Applica e il tuo menu viene trasformato istantaneamente.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/themes-strip.svg" alt="Striscia di anteprime temi" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#browsing">Sfogliare i temi</a><a href="#categories">Le 10 categorie</a><a href="#applying">Applicare un tema</a><a href="#customizing">Personalizzare dopo l'applicazione</a><a href="#per-instance">Override per singola istanza</a></div>

<h2 id="browsing">Sfogliare i temi</h2>
<p>Tutti i temi sono accessibili dalla scheda <strong>Menu Builder → Temi</strong>. Puoi filtrare i temi per categoria usando i pulsanti in cima alla griglia, oppure scorrere l'intera libreria. Ogni tema mostra un'anteprima del menu applicato.</p>

<h2 id="categories">Le 10 categorie</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Categoria</th><th>Carattere</th><th>Ideale per</th></tr></thead>
  <tbody>
    <tr><td>Dark</td><td>Sfondi scuri, testo chiaro</td><td>Portfolio, agenzie creative, siti tech</td></tr>
    <tr><td>Minimal</td><td>Pulito, senza fronzoli, molto spazio bianco</td><td>Blog, siti personali, landing page</td></tr>
    <tr><td>Vibrant</td><td>Colori vivaci, alto contrasto</td><td>E-commerce, eventi, siti per giovani</td></tr>
    <tr><td>Creative</td><td>Layout insoliti, tipografia audace</td><td>Artisti, fotografi, studi di design</td></tr>
    <tr><td>Corporate</td><td>Professionale, colori sobri</td><td>Aziende, studi legali, servizi B2B</td></tr>
    <tr><td>Nature</td><td>Verde, toni terrosi, organico</td><td>Agriturismo, benessere, sostenibilità</td></tr>
    <tr><td>Elegant</td><td>Serif, oro, lusso discreto</td><td>Hotel, moda, ristoranti fine dining</td></tr>
    <tr><td>Retro</td><td>Palette vintage, texture anni '70–'90</td><td>Musica, cultura pop, brand nostalgici</td></tr>
    <tr><td>Glass</td><td>Effetti glassmorphism, trasparenze</td><td>App SaaS, prodotti digitali moderni</td></tr>
    <tr><td>Playful</td><td>Forme arrotondate, colori pastello</td><td>Bambini, istruzione, app consumer</td></tr>
  </tbody>
</table></div>

<h2 id="applying">Applicare un tema</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Temi</strong>.</li>
  <li>Sfoglia la griglia o filtra per categoria.</li>
  <li>Fai clic su un tema per selezionarlo — vedrai un'anteprima aggiornata.</li>
  <li>Fai clic su <strong>Applica tema</strong> per salvare la scelta.</li>
  <li>Il menu sul tuo sito viene aggiornato immediatamente.</li>
</ol>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Applicare un tema è un'operazione non distruttiva: puoi cambiare tema quante volte vuoi senza perdere le personalizzazioni avanzate che hai aggiunto manualmente nelle sezioni Colori, Tipografia e Spaziatura.</p></div></div>

<h2 id="customizing">Personalizzare dopo l'applicazione</h2>
<p>Dopo aver applicato un tema puoi modificare qualsiasi aspetto visivo dalle sezioni di personalizzazione del pannello:</p>
<ul>
  <li><strong>Colori</strong> — sfondo della barra, colore dei link, hover, testo attivo.</li>
  <li><strong>Tipografia</strong> — famiglia di font, dimensione, peso, spaziatura delle lettere.</li>
  <li><strong>Spaziatura</strong> — padding della barra, gap tra le voci, altezza della riga.</li>
  <li><strong>Forma</strong> — border-radius dei pulsanti e dei dropdown.</li>
  <li><strong>Effetti</strong> — ombre, bordi, animazioni hover sui link.</li>
  <li><strong>Gradiente</strong> — applica un gradiente di sfondo alla barra di navigazione.</li>
</ul>

<h2 id="per-instance">Override per singola istanza</h2>
<p>Se hai più istanze del menu nel sito (ad esempio un menu principale e uno secondario), puoi applicare stili diversi a ciascuna istanza usando l'attributo <code>location</code> dello shortcode e sovrascrivendo il tema tramite CSS personalizzato.</p>
<p>Esempio con due shortcode che puntano a posizioni diverse:</p>
<pre><code>[menux location="primary"]
[menux location="secondary"]</code></pre>

<div class="page-nav"><a href="gutenberg.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Blocco Gutenberg</span></a><a class="next" href="logo.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Logo</span></a></div>
`,

"logo.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Logo</h1>
<p class="lead">Aggiungi un'immagine logo direttamente nella barra di navigazione, posizionala come preferisci e, opzionalmente, mostra un logo diverso su dispositivi mobili.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#adding">Aggiungere un logo</a><a href="#position">Posizione</a><a href="#size">Dimensione e forma</a><a href="#mobile">Logo mobile separato</a><a href="#link">Rendere il logo un link</a></div>

<h2 id="adding">Aggiungere un logo</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Logo</strong>.</li>
  <li>Fai clic su <strong>Carica logo</strong> e seleziona un'immagine dalla Libreria Media o caricane una nuova.</li>
  <li>Configura posizione, dimensione e altre opzioni (vedi sezioni seguenti).</li>
  <li>Fai clic su <strong>Salva</strong> per applicare le modifiche.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Si consiglia di usare un'immagine SVG o PNG con sfondo trasparente per ottenere i migliori risultati su tutti i temi. Le dimensioni consigliate sono di almeno 200 × 60 px.</p></div></div>

<h2 id="position">Posizione</h2>
<p>Puoi posizionare il logo in quattro modi diversi all'interno della barra di navigazione:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Posizione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Sinistra</td><td>Il logo è allineato al bordo sinistro della barra; le voci del menu si trovano a destra.</td></tr>
    <tr><td>Destra</td><td>Il logo è allineato al bordo destro della barra; le voci del menu si trovano a sinistra.</td></tr>
    <tr><td>Centro</td><td>Il logo è centrato sopra le voci del menu, che si estendono su tutta la larghezza.</td></tr>
    <tr><td>Centro diviso</td><td>Le voci del menu sono divise in due gruppi ai lati del logo centrato.</td></tr>
  </tbody>
</table></div>

<h2 id="size">Dimensione e forma</h2>
<ul>
  <li><strong>Larghezza/Altezza</strong> — imposta dimensioni fisse in pixel oppure lascia che il browser calcoli automaticamente mantenendo le proporzioni.</li>
  <li><strong>Larghezza massima</strong> — limita la larghezza massima del logo per evitare che sia troppo grande su schermi ampi.</li>
  <li><strong>Border radius</strong> — arrotonda gli angoli del logo (utile per loghi quadrati o foto).</li>
  <li><strong>Allineamento verticale</strong> — allinea il logo al centro, in alto o in basso rispetto alla barra di navigazione.</li>
  <li><strong>Testo alternativo</strong> — testo alt per l'accessibilità (letto dagli screen reader).</li>
</ul>

<h2 id="mobile">Logo mobile separato</h2>
<p>Puoi caricare un logo alternativo da mostrare sui dispositivi mobili — utile se hai un logo orizzontale per desktop e un'icona quadrata per mobile.</p>
<ul>
  <li>Vai su <strong>Menu Builder → Logo → Logo mobile</strong> e carica l'immagine alternativa.</li>
  <li>Il logo mobile viene visualizzato automaticamente sotto il breakpoint mobile configurato in <strong>Menu Builder → Mobile</strong>.</li>
</ul>

<h2 id="link">Rendere il logo un link</h2>
<ol class="steps">
  <li>Nella sezione <strong>Menu Builder → Logo</strong>, trova il campo <strong>URL del link</strong>.</li>
  <li>Inserisci l'URL di destinazione (di solito la home page: <code>/</code> o l'URL completo del sito).</li>
  <li>Scegli se aprire il link nella stessa scheda o in una nuova scheda, quindi salva.</li>
</ol>

<div class="page-nav"><a href="themes.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Temi &amp; Categorie</span></a><a class="next" href="mega-menu.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Mega Menu</span></a></div>
`,


"mega-menu.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Mega Menu</h1>
<p class="lead">Trasforma qualsiasi voce di menu di primo livello in un pannello a larghezza intera con fino a 4 colonne — combina link, intestazioni, immagini, shortcode e altro ancora senza scrivere alcun codice.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/mega-menu.svg" alt="Esempio di mega menu a più colonne" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#what-is">Cos'è un mega menu?</a><a href="#enable">Attivare il mega menu su una voce</a><a href="#columns">Aggiungere e organizzare le colonne</a><a href="#content">Tipi di contenuto delle colonne</a><a href="#appearance">Aspetto per singola voce</a><a href="#presets">Preset</a><a href="#mobile">Comportamento su mobile</a><a href="#global">Impostazioni globali</a></div>

<h2 id="what-is">Cos'è un mega menu?</h2>
<p>Un mega menu è un pannello a dropdown di grandi dimensioni che si apre al passaggio del mouse (o al tocco su mobile) su una voce di menu di primo livello. A differenza di un dropdown standard — che mostra una singola colonna di link — un mega menu può contenere più colonne con contenuti eterogenei: link di navigazione, intestazioni di sezione, immagini promozionali, form di ricerca, shortcode e qualsiasi altro elemento HTML supportato da WordPress.</p>

<h2 id="enable">Attivare il mega menu su una voce di primo livello</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Voci</strong>.</li>
  <li>Fai clic sulla voce di primo livello su cui vuoi abilitare il mega menu.</li>
  <li>Nel pannello delle impostazioni della voce, attiva l'interruttore <strong>Mega menu</strong>.</li>
  <li>Fai clic su <strong>Modifica mega menu</strong> per aprire l'editor del pannello.</li>
  <li>Aggiungi colonne e contenuti (vedi sezioni seguenti), quindi salva.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Il mega menu è disponibile solo per le voci di <strong>primo livello</strong>. Le voci nidificate all'interno di un mega menu non possono avere a loro volta un mega menu. Il numero massimo di colonne per pannello è <strong>4</strong>.</p></div></div>

<h2 id="columns">Aggiungere e organizzare le colonne</h2>
<p>Nell'editor del mega menu puoi gestire le colonne con le seguenti azioni:</p>
<ul>
  <li><strong>Aggiungi colonna</strong> — inserisce una nuova colonna vuota al pannello.</li>
  <li><strong>Duplica</strong> — crea una copia esatta di una colonna esistente.</li>
  <li><strong>Riordina</strong> — trascina le colonne per cambiarne l'ordine.</li>
  <li><strong>Imposta larghezza</strong> — assegna una larghezza percentuale a ciascuna colonna (la somma deve essere 100%).</li>
  <li><strong>Imposta allineamento</strong> — allinea il contenuto della colonna a sinistra, al centro o a destra.</li>
  <li><strong>Elimina</strong> — rimuove la colonna e tutto il suo contenuto.</li>
</ul>

<h2 id="content">Tipi di contenuto delle colonne</h2>
<p>All'interno di ciascuna colonna puoi aggiungere elementi di tipo diverso:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Tipo</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Link</td><td>Una voce di menu cliccabile con URL, etichetta e opzione di apertura in nuova scheda.</td></tr>
    <tr><td>Intestazione</td><td>Un'intestazione di sezione non cliccabile per raggruppare i link sottostanti.</td></tr>
    <tr><td>Divisore</td><td>Una linea orizzontale per separare visivamente i gruppi di contenuto.</td></tr>
    <tr><td>Immagine</td><td>Un'immagine dalla Libreria Media, opzionalmente con link e testo alternativo.</td></tr>
    <tr><td>Shortcode</td><td>Qualsiasi shortcode WordPress valido — form di contatto, prodotti WooCommerce, ecc.</td></tr>
  </tbody>
</table></div>

<h2 id="appearance">Aspetto per singola voce</h2>
<p>Per ciascuna voce di tipo Link all'interno del mega menu puoi personalizzare l'aspetto individualmente:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Sfondo</td><td>Colore di sfondo del pannello mega menu.</td></tr>
    <tr><td>Larghezza massima del pannello</td><td>Limita la larghezza del pannello (predefinito: larghezza del contenuto del sito).</td></tr>
    <tr><td>Padding</td><td>Spaziatura interna del pannello (top, bottom, sinistra, destra).</td></tr>
    <tr><td>Gap tra colonne</td><td>Spazio orizzontale tra le colonne.</td></tr>
    <tr><td>Border radius</td><td>Arrotondamento degli angoli del pannello.</td></tr>
    <tr><td>Dimensione font</td><td>Dimensione del testo delle voci all'interno del pannello.</td></tr>
    <tr><td>Colori</td><td>Colore dei link, colore hover, colore delle intestazioni.</td></tr>
    <tr><td>Stile divisore</td><td>Colore, spessore e stile (solido, tratteggiato) delle linee divisorie.</td></tr>
    <tr><td>Velocità animazione</td><td>Durata dell'animazione di apertura/chiusura del pannello in millisecondi.</td></tr>
  </tbody>
</table></div>

<h2 id="presets">Preset</h2>
<p>Menu Builder include 20 template di mega menu predefiniti, organizzati per settore, che puoi applicare con un clic come punto di partenza per il tuo pannello.</p>
<p>I preset coprono categorie come e-commerce, servizi, agenzia, ristorazione, tecnologia e altri verticali comuni. Ogni preset è completamente modificabile dopo l'applicazione.</p>
<p>Per accedere ai preset, fai clic su <strong>Carica preset</strong> nell'editor del mega menu, scegli il template che preferisci e confermane l'applicazione. Il contenuto del pannello verrà sostituito con quello del preset selezionato.</p>

<h2 id="mobile">Comportamento su mobile</h2>
<p>Il mega menu dispone di due modalità di visualizzazione sui dispositivi mobili, configurabili per ogni singola voce:</p>
<ul>
  <li><strong>Visibile su mobile</strong> — il pannello viene mostrato su mobile come accordion espandibile. Le colonne vengono impilate verticalmente.</li>
  <li><strong>Nascosto su mobile</strong> — il mega menu non viene mostrato su mobile; la voce si comporta come un link semplice o un dropdown standard.</li>
</ul>

<h2 id="global">Impostazioni globali</h2>
<p>Alcune opzioni del mega menu si applicano a tutti i pannelli del sito e si configurano in <strong>Menu Builder → Layout → Mega menu</strong>:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Ritardo hover</td><td>Millisecondi di attesa prima che il pannello si apra al passaggio del mouse.</td></tr>
    <tr><td>Chiudi al clic esterno</td><td>Chiude il pannello quando l'utente fa clic fuori da esso.</td></tr>
  </tbody>
</table></div>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Il ritardo hover "indulgente" impedisce la chiusura accidentale del pannello quando il mouse percorre una traiettoria diagonale verso i sottoelementi — una tecnica ispirata al classico algoritmo del "triangolo del menu a discesa".</p></div></div>

<div class="page-nav"><a href="logo.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Logo</span></a><a class="next" href="announcement.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Barra Annunci</span></a></div>
`,

"announcement.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Barra Annunci</h1>
<p class="lead">Aggiungi un sottile banner promozionale sopra (o sotto) la barra di navigazione con un messaggio personalizzato, un link di invito all'azione e un timer countdown opzionale.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/announcement-countdown.svg" alt="Barra annunci con countdown" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#enable">Attivare la barra</a><a href="#content">Impostare il messaggio e il link</a><a href="#countdown">Timer countdown</a><a href="#styling">Stile</a><a href="#position">Posizione e chiusura</a></div>

<h2 id="enable">Attivare la barra</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Barra annunci</strong>.</li>
  <li>Attiva l'interruttore <strong>Abilita barra annunci</strong>.</li>
  <li>Configura il messaggio, il link e le opzioni di stile (vedi sezioni seguenti), quindi salva.</li>
</ol>
<p>La barra annunci è visibile immediatamente su tutte le pagine del sito che mostrano il menu.</p>

<h2 id="content">Impostare il messaggio e il link</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Campo</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Testo del messaggio</td><td>Il testo promozionale visualizzato nella barra. Supporta HTML di base (grassetto, corsivo, link).</td></tr>
    <tr><td>URL del link</td><td>URL della pagina di destinazione quando l'utente fa clic sulla barra.</td></tr>
    <tr><td>Apri in nuova scheda</td><td>Se attivo, il link si apre in una nuova scheda del browser.</td></tr>
  </tbody>
</table></div>

<h2 id="countdown">Timer countdown</h2>
<p>Il countdown è uno strumento efficace per creare urgenza attorno a offerte a tempo limitato. Visualizza giorni, ore, minuti e secondi rimanenti fino a una data di scadenza specificata.</p>
<ol class="steps">
  <li>Nella sezione <strong>Countdown</strong>, attiva l'interruttore <strong>Mostra countdown</strong>.</li>
  <li>Imposta la <strong>Data di scadenza</strong> usando il selettore di data e ora.</li>
  <li>Scegli il <strong>Fuso orario</strong> di riferimento per il countdown.</li>
  <li>Salva le impostazioni. Il timer apparirà nella barra accanto al messaggio.</li>
</ol>

<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><p>Il countdown si basa sull'orologio del browser del visitatore. Se l'orologio del dispositivo non è sincronizzato correttamente, il timer potrebbe mostrare un valore leggermente diverso da quello atteso. Per offerte critiche, considera di gestire la scadenza lato server.</p></div></div>

<h3>Formato di visualizzazione del timer</h3>
<p>Il timer countdown mostra automaticamente i segmenti rilevanti: se mancano più di 24 ore alla scadenza, vengono mostrati giorni, ore, minuti e secondi. Nelle ultime 24 ore vengono mostrati solo ore, minuti e secondi. Quando il countdown raggiunge zero, la barra può essere configurata per scomparire automaticamente o per mostrare un messaggio alternativo.</p>

<h2 id="styling">Stile</h2>
<p>La barra annunci supporta le seguenti opzioni di personalizzazione visiva:</p>
<ul>
  <li><strong>Colore di sfondo</strong> — colore della barra (solido o gradiente).</li>
  <li><strong>Colore del testo</strong> — colore del messaggio e del countdown.</li>
  <li><strong>Dimensione del testo</strong> — dimensione del font del messaggio.</li>
  <li><strong>Altezza della barra</strong> — altezza in pixel della barra annunci.</li>
</ul>

<h2 id="position">Posizione e chiusura</h2>
<ul>
  <li><strong>Posizione</strong> — la barra può essere visualizzata <strong>sopra</strong> la barra di navigazione (predefinito) oppure <strong>sotto</strong> di essa.</li>
  <li><strong>Chiusura</strong> — puoi abilitare un pulsante di chiusura (×) che consente agli utenti di nascondere la barra. La preferenza viene memorizzata in un cookie di sessione, in modo che la barra rimanga nascosta durante la stessa visita.</li>
</ul>

<div class="page-nav"><a href="mega-menu.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Mega Menu</span></a><a class="next" href="cart.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Carrello WooCommerce</span></a></div>
`,

"cart.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Carrello WooCommerce</h1>
<p class="lead">Mostra un'icona carrello con un badge contatore in tempo reale direttamente nella barra di navigazione. Il badge si aggiorna istantaneamente quando i clienti aggiungono o rimuovono prodotti — senza ricaricare la pagina.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/woo-cart.svg" alt="Icona carrello WooCommerce nella barra di navigazione" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#requirements">Requisiti</a><a href="#enable">Attivare l'icona carrello</a><a href="#position">Posizione dell'icona</a><a href="#styling">Stile</a><a href="#mini-cart">Dropdown mini carrello</a></div>

<h2 id="requirements">Requisiti</h2>
<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>WooCommerce deve essere installato e attivato sul sito. La funzione icona carrello non è disponibile senza WooCommerce. Tutti gli altri moduli di Menu Builder funzionano indipendentemente da WooCommerce.</p></div></div>

<h2 id="enable">Attivare l'icona carrello</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Carrello</strong>.</li>
  <li>Attiva l'interruttore <strong>Mostra icona carrello</strong>.</li>
  <li>Scegli lo stile dell'icona e le altre opzioni di visualizzazione.</li>
  <li>Salva le impostazioni.</li>
</ol>
<p>L'icona apparirà nella barra di navigazione nella posizione configurata. Il contatore viene aggiornato automaticamente tramite il sistema di frammenti di WooCommerce ogni volta che il contenuto del carrello cambia.</p>

<h2 id="position">Posizione dell'icona</h2>
<p>Puoi controllare dove viene visualizzata l'icona carrello nella barra di navigazione:</p>
<ul>
  <li><strong>Destra</strong> (predefinito) — l'icona è posizionata all'estremità destra della barra, dopo tutte le voci di menu.</li>
  <li><strong>Sinistra</strong> — l'icona è posizionata all'estremità sinistra della barra.</li>
</ul>
<p>Per un posizionamento più preciso, puoi anche inserire l'icona carrello come voce di menu speciale, trascinandola nella posizione desiderata nell'elenco delle voci.</p>

<h2 id="styling">Stile</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Stile icona</td><td>Scegli tra diversi design di icona carrello (outline, filled, minimal).</td></tr>
    <tr><td>Colore icona</td><td>Colore dell'icona carrello nella barra.</td></tr>
    <tr><td>Mostra badge contatore</td><td>Visualizza il numero di articoli nel carrello come badge sovrapposto all'icona.</td></tr>
    <tr><td>Mostra totale</td><td>Mostra il totale del carrello accanto all'icona.</td></tr>
    <tr><td>Sfondo badge</td><td>Colore di sfondo del badge contatore.</td></tr>
    <tr><td>Nascondi se vuoto</td><td>Nasconde l'icona quando il carrello è vuoto.</td></tr>
  </tbody>
</table></div>

<h2 id="mini-cart">Dropdown mini carrello</h2>
<p>Puoi abilitare un mini carrello a dropdown che si apre al passaggio del mouse (o al clic) sull'icona, mostrando il riepilogo degli articoli e i pulsanti per andare al carrello o al checkout.</p>
<ol class="steps">
  <li>Nella sezione <strong>Mini carrello</strong>, attiva l'interruttore <strong>Abilita dropdown mini carrello</strong>.</li>
  <li>Scegli se il dropdown deve aprirsi al <strong>passaggio del mouse</strong> o al <strong>clic</strong> sull'icona.</li>
</ol>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Il contatore del carrello si aggiorna in tempo reale usando il sistema nativo di frammenti di WooCommerce — lo stesso meccanismo usato dal tema Storefront e dalla maggior parte dei temi WooCommerce compatibili. Non è necessario alcun codice personalizzato.</p></div></div>

<div class="page-nav"><a href="announcement.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Barra Annunci</span></a><a class="next" href="search.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Ricerca</span></a></div>
`,

"search.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Ricerca</h1>
<p class="lead">Aggiungi un'icona di ricerca alla barra di navigazione che apre un overlay di ricerca modale. Cerca tra le voci del menu o trova testo nella pagina corrente — senza mai abbandonare la pagina.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/search-modal.svg" alt="Overlay di ricerca modale" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#enable">Attivare la ricerca</a><a href="#modes">Schede di ricerca</a><a href="#keyboard">Scorciatoie da tastiera</a><a href="#styling">Aspetto dell'icona di ricerca</a></div>

<h2 id="enable">Attivare la ricerca</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Ricerca</strong>.</li>
  <li>Attiva l'interruttore <strong>Mostra icona di ricerca</strong>.</li>
  <li>Scegli la posizione dell'icona e le opzioni di stile, quindi salva.</li>
</ol>
<p>L'icona di ricerca appare nella barra di navigazione. Facendo clic su di essa (o premendo la scorciatoia da tastiera) si apre il modal di ricerca sovrapposto alla pagina.</p>

<h2 id="modes">Schede di ricerca</h2>
<p>Il modal di ricerca contiene due schede indipendenti, selezionabili dall'utente:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Scheda</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Scheda Menu</td><td>Cerca tra le voci del menu e i loro URL. I risultati vengono filtrati in tempo reale mentre si digita.</td></tr>
    <tr><td>Scheda Pagina</td><td>Cerca nel testo della pagina attualmente visualizzata. Evidenzia e scorre automaticamente fino alle corrispondenze trovate.</td></tr>
  </tbody>
</table></div>

<h2 id="keyboard">Scorciatoie da tastiera</h2>
<p>Il modal di ricerca supporta la navigazione completa da tastiera per un'esperienza accessibile ed efficiente:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Tasto</th><th>Azione</th></tr></thead>
  <tbody>
    <tr><td><kbd>↑</kbd> / <kbd>↓</kbd></td><td>Naviga tra i risultati di ricerca nell'elenco.</td></tr>
    <tr><td><kbd>Enter</kbd></td><td>Apre il risultato selezionato (scheda Menu) o va all'occorrenza successiva (scheda Pagina).</td></tr>
    <tr><td><kbd>Escape</kbd></td><td>Chiude il modal di ricerca e restituisce il focus alla pagina.</td></tr>
  </tbody>
</table></div>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Puoi anche aprire il modal di ricerca con la scorciatoia globale <kbd>/</kbd> (barra obliqua), purché il focus non sia all'interno di un campo di testo o di un'area di testo.</p></div></div>

<h2 id="styling">Aspetto dell'icona di ricerca</h2>
<p>Personalizza l'aspetto dell'icona di ricerca nella barra di navigazione dalle seguenti opzioni:</p>
<ul>
  <li><strong>Colore icona</strong> — colore dell'icona a forma di lente d'ingrandimento nella barra.</li>
  <li><strong>Posizione</strong> — posiziona l'icona a sinistra o a destra della barra di navigazione.</li>
</ul>

<div class="page-nav"><a href="cart.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Carrello WooCommerce</span></a><a class="next" href="badges.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Badge &amp; Puntini di Notifica</span></a></div>
`,

"badges.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Badge &amp; Puntini di Notifica</h1>
<p class="lead">Attira l'attenzione su singole voci di menu con un piccolo badge testuale (es. "Nuovo", "Hot") o un semplice puntino di notifica.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/components.svg" alt="Esempi di badge e puntini di notifica" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#badge">Badge testuali</a><a href="#dot">Puntino di notifica</a><a href="#icons">Icone delle voci</a></div>

<h2 id="badge">Badge testuali</h2>
<p>Un badge testuale è una piccola etichetta colorata visualizzata accanto all'etichetta della voce di menu — ideale per segnalare novità, promozioni o contenuti in evidenza.</p>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Voci</strong> e fai clic sulla voce a cui vuoi aggiungere il badge.</li>
  <li>Nel pannello delle impostazioni della voce, individua la sezione <strong>Badge</strong>.</li>
  <li>Inserisci il testo del badge nel campo apposito (es. "Nuovo", "Sale", "Hot").</li>
  <li>Scegli il colore di sfondo e il colore del testo del badge.</li>
  <li>Salva le modifiche.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Il badge viene reso con l'attributo <code>aria-hidden="true"</code> per evitare che gli screen reader lo annuncino due volte — l'etichetta della voce è già letta dal lettore di schermo. Se il testo del badge è semanticamente rilevante, considera di aggiungerlo anche al testo alternativo o all'etichetta ARIA della voce.</p></div></div>

<h2 id="dot">Puntino di notifica</h2>
<p>Il puntino di notifica è un piccolo cerchio colorato che appare nell'angolo superiore destro dell'icona o del testo della voce — più discreto di un badge testuale, utile per indicare aggiornamenti non letti o nuovi contenuti.</p>
<ol class="steps">
  <li>Nelle impostazioni della voce di menu, individua la sezione <strong>Puntino di notifica</strong>.</li>
  <li>Attiva l'interruttore <strong>Mostra puntino</strong>.</li>
  <li>Scegli il colore del puntino.</li>
</ol>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Il puntino include automaticamente un testo nascosto visivamente accessibile agli screen reader (es. "Nuovi elementi disponibili"), in modo che gli utenti che navigano con tecnologie assistive ricevano comunque l'informazione.</p></div></div>

<h2 id="icons">Icone delle voci</h2>
<p>Puoi aggiungere un'icona accanto all'etichetta di qualsiasi voce di menu usando Font Awesome 6. Inserisci il nome della classe dell'icona (es. <code>fa-solid fa-house</code>) nel campo <strong>Icona</strong> delle impostazioni della voce. L'icona viene visualizzata prima del testo dell'etichetta e si adatta automaticamente al colore dei link del tema attivo.</p>

<div class="page-nav"><a href="search.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Ricerca</span></a><a class="next" href="visibility.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Regole di Visibilità</span></a></div>
`,


"visibility.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Regole di Visibilità</h1>
<p class="lead">Mostra o nascondi singole voci di menu in base a chi visita il sito, quale dispositivo usa, quando accede o se è autenticato.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/visibility.svg" alt="Regole di visibilità per le voci di menu" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#how">Come funzionano le regole di visibilità</a><a href="#user-role">Menu a tendina Visibilità</a><a href="#device">Dispositivo</a><a href="#schedule">Pianificazione e orario</a><a href="#login">Pagina e campagna</a><a href="#combining">Combinare le regole</a></div>

<h2 id="how">Come funzionano le regole di visibilità</h2>
<p>Le regole di visibilità si applicano a livello di singola voce di menu. Per ogni voce puoi definire una o più condizioni: la voce viene mostrata solo se <strong>tutte</strong> le condizioni attive sono soddisfatte contemporaneamente (logica AND).</p>
<p>Se nessuna regola è configurata, la voce è sempre visibile a tutti i visitatori. Le regole vengono valutate lato server al momento del rendering del menu, quindi non c'è alcun contenuto nascosto nel DOM che un utente potrebbe scoprire ispezionando il codice sorgente.</p>

<h2 id="user-role">Menu a tendina Visibilità (ruolo e login)</h2>
<p>Il selettore di visibilità principale controlla chi può vedere la voce in base al suo stato di autenticazione o ruolo WordPress:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Comportamento</th></tr></thead>
  <tbody>
    <tr><td>Tutti</td><td>La voce è visibile a qualsiasi visitatore, sia loggato che non loggato (impostazione predefinita).</td></tr>
    <tr><td>Qualsiasi utente loggato</td><td>La voce è visibile solo agli utenti autenticati, indipendentemente dal loro ruolo.</td></tr>
    <tr><td>Solo ospiti</td><td>La voce è visibile solo ai visitatori non autenticati.</td></tr>
    <tr><td>Solo [Ruolo]</td><td>La voce è visibile solo agli utenti con il ruolo WordPress specificato (es. Amministratore, Editor, Abbonato).</td></tr>
  </tbody>
</table></div>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Sono supportati anche i ruoli personalizzati creati da altri plugin. Per mostrare una voce a più ruoli specifici, crea voci di menu duplicate con regole di visibilità diverse, oppure usa l'opzione "Qualsiasi utente loggato" se i ruoli condividono l'accesso.</p></div></div>

<h2 id="device">Dispositivo</h2>
<p>Puoi limitare la visibilità di una voce in base al tipo di dispositivo del visitatore:</p>
<ul>
  <li><strong>Tutti i dispositivi</strong> — visibile su desktop e mobile (predefinito).</li>
  <li><strong>Solo desktop</strong> — nascosta sui dispositivi mobili.</li>
  <li><strong>Solo mobile</strong> — nascosta sui dispositivi desktop.</li>
</ul>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Il rilevamento del dispositivo usa la funzione <code>wp_is_mobile()</code> di WordPress, che si basa sull'user agent del browser. Non è un rilevamento della larghezza dello schermo: un tablet potrebbe essere classificato come mobile o desktop a seconda del browser e del sistema operativo.</p></div></div>

<h2 id="schedule">Pianificazione e orario</h2>
<p>Le regole di pianificazione permettono di mostrare voci di menu solo durante un periodo specifico o una finestra oraria giornaliera.</p>
<h3>Intervallo di date</h3>
<p>Imposta una data di inizio e una data di fine: la voce sarà visibile solo durante quell'intervallo. Utile per promozioni stagionali, eventi o contenuti a tempo limitato.</p>
<h3>Finestra oraria giornaliera</h3>
<p>Imposta un orario di inizio e un orario di fine (es. 12:00–14:00): la voce sarà visibile solo durante quella finestra ogni giorno. Utile per mostrare un menu del pranzo o un'offerta dell'ora di punta.</p>

<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><p>Tutti gli orari di pianificazione vengono confrontati con il fuso orario del sito WordPress, configurato in <strong>Impostazioni → Generali → Fuso orario</strong>. Assicurati che il fuso orario del sito sia impostato correttamente prima di usare le regole orarie.</p></div></div>

<h2 id="login">Pagina e campagna</h2>
<p>Per casi d'uso più avanzati, puoi mostrare voci di menu condizionalmente in base alla pagina corrente o ai parametri UTM della campagna:</p>
<ul>
  <li><strong>Pagine specifiche</strong> — mostra la voce solo quando l'utente si trova su determinate pagine (per ID o slug).</li>
  <li><strong>Sorgente UTM</strong> — mostra la voce solo quando l'URL contiene un parametro UTM specifico (es. <code>utm_source=newsletter</code>).</li>
</ul>

<h2 id="combining">Combinare le regole</h2>
<p>Tutte le regole attive su una voce vengono valutate contemporaneamente con logica AND. Ad esempio, puoi combinare:</p>
<ul>
  <li>Visibilità: <strong>Qualsiasi utente loggato</strong></li>
  <li>Dispositivo: <strong>Solo desktop</strong></li>
  <li>Intervallo di date: <strong>1 dic – 31 dic</strong></li>
</ul>

<div class="page-nav"><a href="badges.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Badge &amp; Puntini di Notifica</span></a><a class="next" href="mobile.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Menu Mobile</span></a></div>
`,

"mobile.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Menu Mobile</h1>
<p class="lead">Scegli tra quattro stili distinti di menu mobile e configura esattamente come si comporta la navigazione su schermi piccoli — senza toccare CSS o JavaScript.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/mobile-menu.svg" alt="Stili di menu mobile" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#breakpoint">Impostare il breakpoint</a><a href="#styles">Gli stili mobile</a><a href="#hamburger">Pulsante hamburger</a><a href="#link-colors">Colori dei link mobile</a><a href="#submenu">Comportamento dei sottomenu</a><a href="#mega-mobile">Mega menu su mobile</a><a href="#preview">Anteprima telefono live</a></div>

<h2 id="breakpoint">Impostare il breakpoint</h2>
<p>Il breakpoint determina la larghezza dello schermo sotto la quale il menu desktop viene sostituito dal menu mobile. Il valore predefinito è <strong>768 px</strong>, corrispondente alla larghezza tipica dei tablet in modalità verticale.</p>
<p>Se selezioni l'opzione <strong>Auto</strong>, Menu Builder sceglierà automaticamente il breakpoint in base alla larghezza del contenitore del menu, adattandosi dinamicamente al layout del tema.</p>

<h2 id="styles">Gli stili del menu mobile</h2>
<h3>1. Dropdown (Predefinito)</h3>
<p>Il menu mobile a dropdown si apre verticalmente sotto il pulsante hamburger, all'interno del flusso della pagina. È lo stile più semplice e familiare.</p>
<ul>
  <li>Non occupa l'intero schermo.</li>
  <li>Ideale per menu con poche voci.</li>
</ul>

<h3>2. Fullscreen</h3>
<p>Il menu fullscreen si apre sopra l'intera pagina, coprendo tutto lo schermo con un overlay. Le voci sono centrate e solitamente mostrate con un font grande.</p>
<ul>
  <li>Crea un impatto visivo forte.</li>
  <li>Ideale per siti creativi e portfolio.</li>
</ul>

<h3>3. Drawer — Sinistra</h3>
<p>Il drawer sinistro scorre da sinistra verso destra, come un pannello laterale. Il contenuto della pagina rimane visibile sullo sfondo (spesso oscurato).</p>
<ul>
  <li>Familiare agli utenti di app mobile native.</li>
  <li>Ideale per menu con molte voci e sottomenu profondi.</li>
</ul>

<h3>4. Drawer — Destra</h3>
<p>Come il drawer sinistro, ma si apre dal lato destro dello schermo. Preferibile per siti RTL (destra a sinistra) o per ragioni estetiche.</p>
<ul>
  <li>Stessa funzionalità del drawer sinistro.</li>
  <li>Adatto a layout con navigazione posizionata a destra.</li>
</ul>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Puoi cambiare stile mobile in qualsiasi momento senza perdere la configurazione delle voci o del tema. Sperimenta con l'anteprima live per trovare lo stile più adatto al tuo sito.</p></div></div>

<h2 id="hamburger">Pulsante hamburger</h2>
<p>Il pulsante hamburger (☰) è il controllo che gli utenti toccano per aprire il menu mobile. Puoi personalizzarlo dalle seguenti opzioni:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Stile icona</td><td>Icona hamburger (tre linee), croce (×), puntini o icona personalizzata.</td></tr>
    <tr><td>Allineamento</td><td>Posiziona il pulsante a sinistra, al centro o a destra della barra mobile.</td></tr>
    <tr><td>Colore icona</td><td>Colore delle linee dell'icona hamburger.</td></tr>
    <tr><td>Sfondo del pulsante</td><td>Colore di sfondo del pulsante (trasparente per impostazione predefinita).</td></tr>
  </tbody>
</table></div>

<h2 id="link-colors">Colori dei link mobile</h2>
<p>I colori dei link nel menu mobile sono indipendenti da quelli del menu desktop e possono essere configurati separatamente:</p>
<ul>
  <li><strong>Normale</strong> — colore predefinito dei link nel menu mobile.</li>
  <li><strong>Hover</strong> — colore dei link quando l'utente li tocca o ci passa sopra.</li>
  <li><strong>Attivo</strong> — colore della voce che corrisponde alla pagina corrente.</li>
</ul>
<p>Se non vengono configurati colori separati, il menu mobile eredita i colori del tema attivo.</p>

<h2 id="submenu">Comportamento dei sottomenu su mobile</h2>
<p>I sottomenu (dropdown) si comportano diversamente su mobile rispetto al desktop, dove si aprono al passaggio del mouse. Puoi scegliere tra due modalità:</p>
<ul>
  <li><strong>Accordion attivo</strong> — i sottomenu si espandono e si contraggono al tocco della voce genitore. Solo un sottomenu alla volta rimane aperto.</li>
  <li><strong>Accordion disattivo</strong> — tutti i sottomenu sono espansi per impostazione predefinita, mostrando l'intera struttura del menu.</li>
</ul>
<p>La modalità accordion è generalmente preferibile per menu con molti livelli di nidificazione, in quanto evita che il menu diventi troppo lungo.</p>

<h2 id="mega-mobile">Mega menu su mobile</h2>
<p>I pannelli mega menu vengono adattati automaticamente per i dispositivi mobili: le colonne vengono impilate verticalmente e il contenuto viene presentato in formato accordion.</p>
<p>Puoi controllare il comportamento del mega menu su mobile per ogni singola voce:</p>
<ul>
  <li><strong>Visibile su mobile</strong> — il pannello viene mostrato come accordion espandibile.</li>
  <li><strong>Nascosto su mobile</strong> — la voce si comporta come un link semplice su mobile.</li>
</ul>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>I contenuti di tipo Shortcode all'interno delle colonne del mega menu vengono renderizzati normalmente anche su mobile, ma elementi complessi come slider o mappe potrebbero richiedere CSS personalizzato per adattarsi correttamente agli schermi piccoli.</p></div></div>

<h2 id="preview">Anteprima telefono live</h2>
<p>La sezione <strong>Menu Builder → Mobile → Anteprima</strong> mostra una simulazione del menu mobile all'interno di un frame a forma di smartphone, aggiornata in tempo reale mentre modifichi le impostazioni. Utile per verificare l'aspetto senza dover ridimensionare la finestra del browser.</p>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>L'anteprima rispetta le preferenze di sistema per la riduzione del movimento (<code>prefers-reduced-motion</code>): se le animazioni sono disabilitate a livello di sistema operativo, anche l'anteprima non mostrerà animazioni.</p></div></div>

<div class="page-nav"><a href="visibility.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Regole di Visibilità</span></a><a class="next" href="layout.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Layout &amp; Effetti</span></a></div>
`,

"layout.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Layout &amp; Effetti</h1>
<p class="lead">Metti a punto la disposizione della barra di navigazione, rendila fissa in cima mentre i visitatori scorrono la pagina e aggiungi animazioni eleganti — tutto dalla sezione Layout di Menu Builder.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/layout-effects.svg" alt="Layout e effetti della barra di navigazione" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#spacing">Spaziatura e allineamento</a><a href="#sticky">Navigazione sticky</a><a href="#progress">Barra di avanzamento scroll</a><a href="#entrance">Animazione di ingresso</a><a href="#link-anim">Animazione hover sui link</a><a href="#dropdown">Indicatore dropdown</a><a href="#scroll-spy">Scroll Spy</a></div>

<h2 id="spacing">Spaziatura e allineamento</h2>
<p>Dalla sezione <strong>Menu Builder → Layout → Spaziatura</strong> puoi controllare le dimensioni e la distribuzione degli elementi nella barra di navigazione:</p>
<ul>
  <li><strong>Padding della barra</strong> — spaziatura interna superiore e inferiore della barra (influisce sull'altezza totale).</li>
  <li><strong>Gap tra le voci</strong> — spazio orizzontale tra i link di menu adiacenti.</li>
  <li><strong>Allineamento delle voci</strong> — allinea le voci a sinistra, al centro o a destra della barra.</li>
  <li><strong>Larghezza massima del contenuto</strong> — limita la larghezza della barra su schermi molto larghi.</li>
  <li><strong>Padding dei dropdown</strong> — spaziatura interna dei pannelli dropdown e mega menu.</li>
</ul>

<h2 id="sticky">Navigazione sticky</h2>
<p>La navigazione sticky mantiene la barra di navigazione visibile in cima alla finestra del browser mentre l'utente scorre verso il basso nella pagina.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Riduci allo scroll</td><td>La barra si riduce in altezza dopo un certo numero di pixel di scroll, per occupare meno spazio.</td></tr>
    <tr><td>Ombra</td><td>Aggiunge un'ombra sotto la barra sticky per separarla visivamente dal contenuto.</td></tr>
    <tr><td>Replica layout</td><td>Clona il layout della barra principale (logo, voci) anche nella versione sticky.</td></tr>
    <tr><td>Transizione</td><td>Durata e curva della transizione di ridimensionamento della barra sticky.</td></tr>
    <tr><td>Z-index</td><td>Livello di impilamento della barra sticky rispetto ad altri elementi della pagina.</td></tr>
  </tbody>
</table></div>

<h2 id="progress">Barra di avanzamento scroll</h2>
<p>Una sottile barra colorata in cima alla pagina che si riempie man mano che il visitatore scorre verso il basso, indicando la percentuale di contenuto già letta.</p>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Layout → Effetti</strong> e attiva <strong>Barra di avanzamento scroll</strong>.</li>
  <li>Scegli il colore della barra di avanzamento.</li>
</ol>

<h2 id="entrance">Animazione di ingresso</h2>
<p>L'animazione di ingresso fa apparire la barra di navigazione con un effetto visivo al caricamento della pagina — ad esempio una dissolvenza dall'alto o uno scivolamento verso il basso.</p>
<p>Puoi scegliere tra vari stili di animazione e configurare la durata e il ritardo dall'opzione <strong>Animazione di ingresso</strong> nella sezione Layout. Se preferisci un'esperienza più sobria, lascia l'animazione disabilitata (predefinita).</p>

<h2 id="link-anim">Animazione hover sui link</h2>
<p>Aggiungi un effetto visivo quando il cursore passa sopra le voci del menu. Le opzioni disponibili includono: sottolineatura animata, sfondo con dissolvenza, sottolineatura che si espande dal centro, bordo inferiore colorato e altri stili decorativi.</p>

<h2 id="dropdown">Indicatore dropdown</h2>
<p>L'indicatore dropdown è un'icona (tipicamente una freccia o uno chevron) che segnala visivamente agli utenti che una voce di menu ha un sottomenu o un mega menu.</p>
<p>Puoi scegliere lo stile dell'icona (freccia, chevron, triangolo, nessuno), il colore e il comportamento di rotazione: molti stili ruotano l'icona di 180° quando il dropdown è aperto, fornendo un feedback visivo immediato.</p>

<h2 id="scroll-spy">Scroll Spy</h2>
<p>La funzione Scroll Spy aggiorna automaticamente la voce di menu "attiva" in base alla sezione della pagina attualmente visibile nel viewport — utile per le pagine a scorrimento singolo con ancoraggi.</p>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Layout → Scroll Spy</strong> e attiva la funzione.</li>
  <li>Assicurati che le voci di menu puntino ad ancoraggi nella pagina (es. <code>#sezione-1</code>).</li>
  <li>Mentre l'utente scorre, la voce corrispondente alla sezione visibile viene evidenziata automaticamente.</li>
</ol>
<p>La voce attiva riceve la classe CSS <code>active</code> e i colori configurati per lo stato attivo nel tema.</p>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Scroll Spy rispetta le preferenze di sistema per la riduzione del movimento (<code>prefers-reduced-motion</code>): le transizioni di evidenziazione vengono saltate se l'utente ha disabilitato le animazioni nel sistema operativo.</p></div></div>

<div class="page-nav"><a href="mobile.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Menu Mobile</span></a><a class="next" href="footer.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Footer Builder</span></a></div>
`,


"footer.html": `
<p class="breadcrumb">Funzionalità</p>
<h1>Footer Builder</h1>
<p class="lead">Costruisci un footer professionale e multi-colonna interamente dall'amministrazione di WordPress — scegli fino a sei sezioni per riga, personalizza ogni dettaglio visivamente e inseriscilo con un blocco, uno shortcode o automaticamente su ogni pagina.</p>

<p style="margin:2rem 0 2.5rem;"><img src="assets/img/footer.svg" alt="Footer Builder con più colonne e sezioni" style="display:block;width:100%;max-width:880px;height:auto;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;"></p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#enable">Attivazione e inserimento</a><a href="#wizard">Procedura guidata</a><a href="#sections">Sezioni del footer</a><a href="#bottom">Barra inferiore</a><a href="#themes">Temi footer</a><a href="#styling">Stile</a><a href="#placing">Inserire il footer</a></div>

<h2 id="enable">Attivazione e inserimento</h2>
<p>Prima di usare il Footer Builder, devi abilitarlo e scegliere come inserirlo nel sito:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Abilita footer</td><td>Attiva il Footer Builder. Se disabilitato, il footer nativo del tema rimane invariato.</td></tr>
    <tr><td>Layout</td><td>Numero di colonne per riga nella sezione principale del footer (da 1 a 6).</td></tr>
    <tr><td>Posizionamento</td><td>Modalità di inserimento: automatico (agganciato al hook <code>wp_footer</code>), blocco Gutenberg o shortcode.</td></tr>
    <tr><td>Priorità</td><td>Priorità del hook WordPress per il posizionamento automatico (predefinito: 10).</td></tr>
  </tbody>
</table></div>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Se il tuo tema ha già un footer nativo, evita di usare il posizionamento automatico e quello del tema contemporaneamente, per non visualizzare due footer. Usa il blocco o lo shortcode per un controllo preciso della posizione.</p></div></div>

<h2 id="wizard">Procedura guidata</h2>
<p>La procedura guidata di configurazione del Footer Builder ti accompagna in 4 passi: scelta del layout, selezione del tema, configurazione delle sezioni e impostazione della barra inferiore. Puoi avviare la procedura guidata facendo clic su <strong>Avvia procedura guidata</strong> nella pagina principale del Footer Builder.</p>

<h2 id="sections">Sezioni del footer</h2>
<p>Ciascuna colonna del footer può contenere una o più sezioni di contenuto. Le sezioni disponibili sono:</p>
<p>Puoi trascinare le sezioni per riordinarle all'interno di una colonna e aggiungere più sezioni dello stesso tipo in colonne diverse.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Tipo di sezione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Testo/Chi siamo</td><td>Un blocco di testo libero con supporto HTML di base — ideale per presentare brevemente il sito o l'azienda.</td></tr>
    <tr><td>Lista di link</td><td>Un elenco di link personalizzabili con etichetta, URL e opzione di apertura in nuova scheda.</td></tr>
    <tr><td>Informazioni di contatto</td><td>Indirizzo, telefono, email e altri dati di contatto con icone opzionali.</td></tr>
    <tr><td>Icone social</td><td>Link ai profili social con icone colorate. Supporta 14 reti sociali.</td></tr>
    <tr><td>Orari di apertura</td><td>Tabella settimanale con orari di apertura e chiusura per ogni giorno.</td></tr>
    <tr><td>Newsletter</td><td>Form di iscrizione alla newsletter, compatibile con i principali servizi di email marketing.</td></tr>
    <tr><td>HTML personalizzato</td><td>Inserisci qualsiasi codice HTML o shortcode WordPress.</td></tr>
  </tbody>
</table></div>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>La sezione Icone social supporta 14 reti sociali, tra cui Facebook, Instagram, Twitter/X, LinkedIn, YouTube, TikTok, Pinterest, Snapchat, WhatsApp, Telegram, GitHub, Dribbble, Behance e RSS.</p></div></div>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>La sezione Newsletter si integra con i principali servizi tramite shortcode: inserisci lo shortcode del tuo plugin di email marketing (es. Mailchimp for WP, MailPoet) nel campo apposito e il form verrà renderizzato automaticamente.</p></div></div>

<h2 id="bottom">Barra inferiore</h2>
<p>La barra inferiore (bottom bar) è una striscia sottile sotto le colonne principali del footer, solitamente usata per il copyright e i link legali.</p>
<ul>
  <li><strong>Testo copyright</strong> — testo personalizzabile con supporto per il segnaposto <code>{year}</code> che inserisce automaticamente l'anno corrente.</li>
  <li><strong>Link legali</strong> — elenco di link (Privacy policy, Termini di servizio, Cookie policy) visualizzati in riga.</li>
  <li><strong>Social nella barra inferiore</strong> — opzione per mostrare le icone social anche nella barra inferiore, invece che (o oltre che) nelle sezioni principali.</li>
  <li><strong>Pulsante torna in cima</strong> — un pulsante che al clic riporta l'utente all'inizio della pagina con uno scroll fluido.</li>
</ul>

<h2 id="themes">Temi footer</h2>
<p>Come per i menu, il Footer Builder include una libreria di temi predefiniti che puoi applicare con un clic. I temi controllano colori, tipografia e stile visivo dell'intero footer.</p>
<p>Sono disponibili 11 temi footer: Dark Classic, Dark Modern, Light Minimal, Light Corporate, Warm Earthy, Cool Blue, Green Nature, Elegant Gold, Retro Cream, Glass Frosted e Playful Pastel. Ogni tema è completamente personalizzabile dopo l'applicazione.</p>

<h2 id="styling">Stile</h2>
<p>Oltre ai temi predefiniti, puoi personalizzare ogni aspetto visivo del footer dalla sezione <strong>Menu Builder → Footer → Stile</strong>:</p>
<h3>Colori</h3>
<p>Sfondo del footer, colore del testo, colore dei link, colore hover dei link, colore delle intestazioni di sezione, colore della barra inferiore.</p>
<h3>Layout</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Opzione</th><th>Descrizione</th></tr></thead>
  <tbody>
    <tr><td>Padding superiore/inferiore</td><td>Spaziatura interna verticale delle colonne principali.</td></tr>
    <tr><td>Padding laterale</td><td>Spaziatura interna orizzontale del footer.</td></tr>
    <tr><td>Gap tra colonne</td><td>Spazio orizzontale tra le colonne.</td></tr>
    <tr><td>Gap tra sezioni</td><td>Spazio verticale tra le sezioni all'interno di una colonna.</td></tr>
    <tr><td>Larghezza massima</td><td>Larghezza massima del contenuto del footer.</td></tr>
    <tr><td>Allineamento testo</td><td>Allineamento orizzontale del testo nelle colonne (sinistra, centro, destra).</td></tr>
    <tr><td>Divisore tra colonne</td><td>Linea verticale opzionale tra le colonne.</td></tr>
    <tr><td>Divisore barra inferiore</td><td>Linea orizzontale tra le colonne principali e la barra inferiore.</td></tr>
  </tbody>
</table></div>
<h3>Tipografia</h3>
<ul>
  <li><strong>Font delle intestazioni</strong> — famiglia, dimensione e peso delle intestazioni di sezione.</li>
  <li><strong>Font del testo</strong> — famiglia e dimensione del testo normale.</li>
  <li><strong>Font dei link</strong> — stile dei link (dimensione, decorazione, peso).</li>
</ul>
<h3>Icone social</h3>
<p>Dimensione, stile (cerchio, quadrato, nessuno), colore e colore hover delle icone social nel footer.</p>
<h3>CSS personalizzato</h3>
<p>Inserisci CSS personalizzato applicato esclusivamente al footer — ideale per aggiustamenti specifici senza modificare il CSS globale del sito.</p>

<h2 id="placing">Inserire il footer</h2>
<p>Puoi inserire il footer nel sito in tre modi diversi:</p>
<ul>
  <li><strong>Automatico</strong> — il footer viene agganciato al hook <code>wp_footer</code> di WordPress e appare automaticamente in fondo a ogni pagina. Adatto alla maggior parte dei temi classici.</li>
  <li><strong>Blocco Gutenberg</strong> — inserisci il blocco <strong>MenuX Footer</strong> nel template del footer tramite l'Editor del Sito. Ideale per i temi FSE.</li>
  <li><strong>Shortcode</strong> — usa <code>[menux_footer]</code> in qualsiasi pagina, post o area widget per posizionare il footer manualmente.</li>
</ul>

<div class="callout tip"><span class="callout-icon">🌍</span><div class="callout-body"><p>Il Footer Builder è compatibile con WPML e Polylang: puoi creare versioni tradotte del contenuto del footer per ogni lingua del sito, con testi, link e sezioni indipendenti per ogni lingua.</p></div></div>

<div class="page-nav"><a href="layout.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Layout &amp; Effetti</span></a><a class="next" href="wp-integration.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Integrazione WP</span></a></div>
`,

"wp-integration.html": `
<p class="breadcrumb">Strumenti</p>
<h1>Integrazione WP Menu</h1>
<p class="lead">Sostituisci i menu di navigazione nativi del tuo tema con un menu di Menu Builder — senza modificare alcun file template. Ideale per i temi PHP classici che usano <code>wp_nav_menu()</code>.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#what">Cosa fa</a><a href="#mapping">Mappare una posizione del tema</a><a href="#notes">Note e limitazioni</a></div>

<h2 id="what">Cosa fa</h2>
<p>La funzione di Integrazione WP intercetta le chiamate a <code>wp_nav_menu()</code> effettuate dal tema e le reindirizza a Menu Builder, che restituisce il markup del menu al posto del menu WordPress nativo. In questo modo puoi usare tutte le funzionalità avanzate di Menu Builder — mega menu, tema, badge, visibilità — anche nei temi classici che non sono stati progettati per supportarle, senza toccare i file PHP del tema.</p>

<h2 id="mapping">Mappare una posizione del tema</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Strumenti → Integrazione WP</strong>.</li>
  <li>Nell'elenco delle posizioni di menu registrate dal tema (es. "Primary", "Footer"), individua quella che vuoi sostituire.</li>
  <li>Nel selettore a fianco, scegli la posizione di Menu Builder da usare al suo posto.</li>
  <li>Salva le impostazioni. Da quel momento, ogni volta che il tema chiama <code>wp_nav_menu()</code> per quella posizione, verrà visualizzato il menu di Menu Builder.</li>
</ol>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Se il tema non mostra posizioni di menu nell'elenco, significa che non ha registrato posizioni di menu tramite <code>register_nav_menus()</code>. In questo caso, usa lo shortcode <code>[menux]</code> o il blocco Gutenberg per inserire il menu manualmente.</p></div></div>

<h2 id="notes">Note e limitazioni</h2>
<ul>
  <li>L'integrazione intercetta solo le chiamate a <code>wp_nav_menu()</code> con un parametro <code>theme_location</code> corrispondente alla posizione mappata. Le chiamate senza <code>theme_location</code> non vengono intercettate.</li>
  <li>I parametri passati da <code>wp_nav_menu()</code> dal tema (come <code>container</code>, <code>menu_class</code>) vengono ignorati: il markup è completamente gestito da Menu Builder.</li>
  <li>Questa funzione non è necessaria per i temi FSE, che usano i blocchi direttamente nell'Editor del Sito.</li>
</ul>

<div class="page-nav"><a href="footer.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Footer Builder</span></a><a class="next" href="import-export.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Import / Export</span></a></div>
`,

"import-export.html": `
<p class="breadcrumb">Strumenti</p>
<h1>Import / Export</h1>
<p class="lead">Esegui il backup dell'intera configurazione del menu in un singolo file JSON, oppure trasferiscila tra siti — ad esempio da un sito di staging alla produzione.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#export">Esportare la configurazione</a><a href="#import">Importare una configurazione</a><a href="#contents">Cosa è incluso</a></div>

<h2 id="export">Esportare la configurazione</h2>
<ol class="steps">
  <li>Vai su <strong>Menu Builder → Strumenti → Import / Export</strong>.</li>
  <li>Fai clic su <strong>Esporta configurazione</strong>.</li>
  <li>Il browser scarica un file <code>menux-export.json</code> contenente l'intera configurazione del menu.</li>
</ol>

<h2 id="import">Importare una configurazione</h2>
<ol class="steps">
  <li>Nella stessa pagina, fai clic su <strong>Scegli file</strong> nella sezione Import e seleziona il file JSON esportato in precedenza.</li>
  <li>Fai clic su <strong>Importa configurazione</strong>.</li>
  <li>Conferma l'operazione nella finestra di dialogo di conferma.</li>
</ol>

<div class="callout warn"><span class="callout-icon">⚠️</span><div class="callout-body"><p>L'importazione sovrascrive le voci di menu e le impostazioni di stile correnti. L'operazione non può essere annullata. Esegui prima un export della configurazione attuale se desideri conservarla come backup.</p></div></div>

<h2 id="contents">Cosa è incluso nel file</h2>
<p>Il file JSON di export contiene uno snapshot completo della configurazione di Menu Builder al momento dell'esportazione:</p>
<ul>
  <li><strong>Voci di menu</strong> — tutte le voci, i loro attributi (etichetta, URL, target, badge, icona, visibilità, ecc.) e la struttura gerarchica (voci figlio, mega menu).</li>
  <li><strong>Stile</strong> — tema attivo, personalizzazioni di colori, tipografia, spaziatura, impostazioni mobile, layout e tutti gli altri parametri di configurazione visiva.</li>
</ul>

<div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p>Il file di export è JSON standard leggibile da qualsiasi editor di testo. Puoi versionarlo in un repository Git per tenere traccia delle modifiche alla configurazione del menu nel tempo, proprio come faresti con il codice sorgente.</p></div></div>

<div class="page-nav"><a href="wp-integration.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Integrazione WP</span></a><a class="next" href="accessibility.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Accessibilità</span></a></div>
`,

"accessibility.html": `
<p class="breadcrumb">Avanzato</p>
<h1>Accessibilità</h1>
<p class="lead">Giuliomax Menu Builder è costruito per soddisfare i requisiti WCAG 2.2 Livello AA. La navigazione funziona completamente senza mouse, i dropdown vengono annunciati agli screen reader e il movimento può essere disabilitato a livello di sistema.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#wcag">Conformità WCAG 2.2 AA</a><a href="#keyboard">Navigazione da tastiera</a><a href="#aria">Attributi ARIA</a><a href="#focus">Gestione del focus</a><a href="#motion">Riduzione del movimento</a><a href="#testing">Testare il menu</a></div>

<h2 id="wcag">Conformità WCAG 2.2 AA</h2>
<p>La tabella seguente mostra i criteri di successo WCAG 2.2 rilevanti per la navigazione e come Menu Builder li soddisfa:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Criterio</th><th>Livello</th><th>Come viene soddisfatto</th></tr></thead>
  <tbody>
    <tr><td>1.4.3 Contrasto (minimo)</td><td>AA</td><td>Tutti i temi predefiniti sono stati verificati per garantire un rapporto di contrasto di almeno 4,5:1 per il testo normale.</td></tr>
    <tr><td>2.1.1 Tastiera</td><td>A</td><td>Tutte le funzionalità del menu sono accessibili tramite tastiera, senza richiedere un dispositivo di puntamento.</td></tr>
    <tr><td>2.4.3 Ordine del focus</td><td>A</td><td>L'ordine del focus nel menu segue l'ordine visivo delle voci e dei sottomenu.</td></tr>
    <tr><td>2.4.7 Focus visibile</td><td>AA</td><td>Tutti gli elementi interattivi mostrano un indicatore di focus visibile e chiaramente identificabile.</td></tr>
    <tr><td>2.5.3 Etichetta nel nome</td><td>A</td><td>I nomi accessibili degli elementi interattivi includono il testo visibile dell'etichetta.</td></tr>
    <tr><td>3.2.3 Navigazione coerente</td><td>AA</td><td>L'ordine e la posizione delle voci di menu rimangono coerenti tra le pagine.</td></tr>
    <tr><td>4.1.2 Nome, ruolo, valore</td><td>A</td><td>Tutti gli elementi del menu espongono ruolo, nome e stato corretti tramite attributi ARIA.</td></tr>
  </tbody>
</table></div>

<h2 id="keyboard">Navigazione da tastiera</h2>
<p>Tabella completa delle scorciatoie da tastiera supportate nella navigazione del menu:</p>
<div class="table-wrap"><table>
  <thead><tr><th>Tasto</th><th>Azione</th></tr></thead>
  <tbody>
    <tr><td><kbd>Tab</kbd></td><td>Sposta il focus alla voce di menu successiva.</td></tr>
    <tr><td><kbd>Shift</kbd>+<kbd>Tab</kbd></td><td>Sposta il focus alla voce di menu precedente.</td></tr>
    <tr><td><kbd>Enter</kbd> / <kbd>Space</kbd></td><td>Attiva il link o apre/chiude il sottomenu della voce focalizzata.</td></tr>
    <tr><td><kbd>↓</kbd> / <kbd>↑</kbd></td><td>Naviga tra le voci di un sottomenu o mega menu aperto.</td></tr>
    <tr><td><kbd>→</kbd> / <kbd>←</kbd></td><td>Apre il sottomenu della voce focalizzata (→) o torna al livello superiore (←).</td></tr>
    <tr><td><kbd>Escape</kbd></td><td>Chiude il sottomenu o mega menu aperto e restituisce il focus alla voce genitore.</td></tr>
    <tr><td><kbd>Home</kbd> / <kbd>End</kbd></td><td>Sposta il focus alla prima o all'ultima voce del menu corrente.</td></tr>
  </tbody>
</table></div>

<h2 id="aria">Attributi ARIA</h2>
<p>Menu Builder genera automaticamente tutti gli attributi ARIA necessari per una navigazione accessibile:</p>
<ul>
  <li><code>role="navigation"</code> e <code>aria-label</code> sull'elemento <code>&lt;nav&gt;</code> per identificare la regione di navigazione.</li>
  <li><code>aria-haspopup="true"</code> sulle voci con sottomenu o mega menu.</li>
  <li><code>aria-controls</code> che punta all'ID del pannello dropdown controllato dalla voce.</li>
  <li><code>role="menu"</code> e <code>role="menuitem"</code> sui sottomenu e sulle loro voci.</li>
  <li><code>aria-current="page"</code> sulla voce che corrisponde alla pagina correntemente visualizzata.</li>
</ul>
<p>Gli attributi <code>aria-expanded</code> vengono aggiornati dinamicamente in JavaScript ogni volta che un sottomenu viene aperto o chiuso, in modo che gli screen reader annuncino correttamente lo stato del controllo.</p>

<h2 id="focus">Gestione del focus</h2>
<ul>
  <li>Quando un dropdown viene chiuso tramite <kbd>Escape</kbd>, il focus ritorna automaticamente alla voce genitore che lo ha aperto.</li>
  <li>Il modal di ricerca intrappola il focus al suo interno mentre è aperto, in modo che Tab non possa portare il focus fuori dal modal.</li>
  <li>Quando il modal di ricerca viene chiuso, il focus ritorna al pulsante che lo ha aperto.</li>
</ul>

<h2 id="motion">Riduzione del movimento</h2>
<p>Menu Builder rispetta la media query CSS <code>prefers-reduced-motion: reduce</code>. Quando l'utente ha abilitato l'opzione di riduzione del movimento nel sistema operativo:</p>
<ul>
  <li>Le animazioni di apertura/chiusura dei dropdown sono eliminate.</li>
  <li>L'animazione di ingresso della barra di navigazione è disabilitata.</li>
  <li>Le transizioni di hover sui link sono ridotte al minimo.</li>
  <li>L'animazione della barra di avanzamento scroll è semplificata.</li>
</ul>

<h2 id="testing">Testare il menu</h2>
<p>Per verificare l'accessibilità del menu sul tuo sito, si consiglia di usare i seguenti strumenti e metodi:</p>
<ul>
  <li><strong>Solo tastiera</strong> — naviga l'intero menu usando solo Tab, frecce direzionali, Enter e Escape, senza toccare il mouse.</li>
  <li><strong>axe DevTools</strong> — estensione del browser (Chrome/Firefox) che analizza la pagina e segnala i problemi di accessibilità WCAG.</li>
  <li><strong>NVDA / VoiceOver</strong> — testa il menu con un lettore di schermo reale: NVDA su Windows, VoiceOver su macOS/iOS.</li>
  <li><strong>Colour Contrast Analyser</strong> — strumento desktop per verificare manualmente il rapporto di contrasto tra testo e sfondo su colori personalizzati.</li>
</ul>

<div class="page-nav"><a href="import-export.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Import / Export</span></a><a class="next" href="multilingual.html"><span class="nav-dir">Successivo →</span><span class="nav-title">Multilingua</span></a></div>
`,


"multilingual.html": `
<p class="breadcrumb">Avanzato</p>
<h1>Multilingua</h1>
<p class="lead">Giuliomax Menu Builder ha un supporto integrato per i siti multilingua. Quando WPML, Polylang, TranslatePress o Multilingual Press è attivo, il plugin rileva le lingue disponibili e ti permette di assegnare un'etichetta separata a ciascuna voce di menu per ogni lingua.</p>

<div class="on-this-page"><strong>In questa pagina</strong><a href="#how-it-works">Come funziona</a><a href="#setup">Configurare le etichette per lingua</a><a href="#detection">Plugin supportati</a><a href="#rtl">Lingue RTL</a><a href="#strings">Tradurre le stringhe del plugin</a></div>

<h2 id="how-it-works">Come funziona</h2>
<p>Quando un plugin multilingua compatibile è attivo, Menu Builder aggiunge automaticamente un pannello di traduzione nelle impostazioni di ogni voce di menu. In quel pannello trovi un campo etichetta per ciascuna lingua configurata nel sito.</p>
<p>Al momento del rendering del menu, Menu Builder rileva la lingua corrente dell'utente (tramite il plugin multilingua attivo) e usa l'etichetta corrispondente a quella lingua. Gli URL delle voci di menu non sono modificati da Menu Builder: la reindirizzazione verso la versione tradotta della pagina di destinazione è gestita dal plugin multilingua.</p>

<div class="callout note"><span class="callout-icon">ℹ️</span><div class="callout-body"><p>Se per una lingua non è stata fornita un'etichetta tradotta, Menu Builder usa automaticamente l'etichetta predefinita della voce come ripiego. Non è necessario compilare tutte le lingue per far funzionare il menu.</p></div></div>

<h2 id="setup">Configurare le etichette per lingua</h2>
<ol class="steps">
  <li>Assicurati che uno dei plugin multilingua supportati sia installato, attivato e configurato con almeno due lingue.</li>
  <li>Vai su <strong>Menu Builder → Voci</strong>.</li>
  <li>Fai clic su una voce di menu per aprire il pannello delle sue impostazioni.</li>
  <li>Nella sezione <strong>Traduzioni</strong>, troverai un campo etichetta per ogni lingua configurata nel sito.</li>
  <li>Inserisci l'etichetta tradotta per ciascuna lingua e salva.</li>
</ol>

<h2 id="detection">Plugin multilingua supportati</h2>
<p>Menu Builder rileva automaticamente i seguenti plugin multilingua e si integra con essi:</p>
<ul>
  <li><strong>WPML</strong> — il plugin multilingua più diffuso per WordPress. Menu Builder usa l'API di WPML per rilevare la lingua corrente.</li>
  <li><strong>Polylang</strong> — alternativa leggera e gratuita a WPML. Supporto completo tramite le funzioni native di Polylang.</li>
  <li><strong>TranslatePress</strong> — soluzione di traduzione front-end. Menu Builder espone le etichette delle voci all'interfaccia di traduzione di TranslatePress.</li>
  <li><strong>Multilingual Press</strong> — plugin per reti multisite multilingua. Menu Builder supporta la rete WordPress multisite con lingue separate per sito.</li>
</ul>
<p>Se stai usando un plugin multilingua diverso da quelli elencati, le etichette per lingua non saranno disponibili, ma il menu funzionerà normalmente con l'etichetta predefinita.</p>

<h2 id="rtl">Lingue RTL (arabo, ebraico, persiano, ecc.)</h2>
<p>Menu Builder supporta pienamente le lingue con scrittura da destra a sinistra (RTL). Quando il sito è in una lingua RTL, il layout della barra di navigazione viene automaticamente specchiato:</p>
<ul>
  <li>Le voci del menu si ordinano da destra a sinistra.</li>
  <li>I dropdown si aprono verso sinistra invece che verso destra.</li>
  <li>Il logo si sposta al lato destro (o a quello impostato come "inizio" nella direzione RTL).</li>
  <li>Le frecce degli indicatori dropdown vengono invertite.</li>
</ul>
<p>Il mirroring RTL viene attivato automaticamente quando il plugin multilingua imposta la direzione del testo su RTL per la lingua corrente. Non è necessaria alcuna configurazione manuale in Menu Builder.</p>

<h2 id="strings">Tradurre le stringhe del plugin</h2>
<p>Le stringhe dell'interfaccia utente di Menu Builder (etichette dei pulsanti, messaggi di errore, testo dell'admin) possono essere tradotte usando i file .po/.mo standard di WordPress.</p>
<p>Il plugin include un file .pot (template di traduzione) nella cartella <code>/languages/</code> del plugin. Puoi usarlo come base per creare traduzioni in qualsiasi lingua.</p>
<ol class="steps">
  <li>Scarica il file <code>giuliomax-menu-builder.pot</code> dalla cartella <code>/languages/</code> del plugin.</li>
  <li>Aprilo con <a href="https://poedit.net/" target="_blank">Poedit</a> o un editor di file .po compatibile.</li>
  <li>Traduci le stringhe e salva il file con il nome del locale corretto (es. <code>giuliomax-menu-builder-it_IT.po</code>). Poedit genererà automaticamente il file .mo compilato.</li>
  <li>Carica i file .po e .mo nella cartella <code>/languages/plugins/</code> della tua installazione WordPress (o nella cartella <code>/languages/</code> del plugin stesso).</li>
</ol>

<div class="page-nav"><a href="accessibility.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Accessibilità</span></a><a class="next" href="faq.html"><span class="nav-dir">Successivo →</span><span class="nav-title">FAQ</span></a></div>
`,

"faq.html": `
<p class="breadcrumb">Avanzato</p>
<h1>Domande Frequenti</h1>
<p class="lead">Risposte alle domande più comuni su Giuliomax Menu Builder.</p>

<h2>Generale</h2>

<h3>Il plugin è davvero gratuito?</h3>
<p>Sì, Giuliomax Menu Builder è completamente gratuito e open-source. Non esiste una versione Pro, non ci sono funzionalità premium a pagamento e non è richiesta alcuna chiave di licenza. Tutto ciò che è documentato in questo sito è disponibile nell'installazione standard del plugin.</p>

<h3>Dove posso trovare il codice sorgente?</h3>
<p>Il codice sorgente è disponibile su <a href="https://github.com/giulio001/giuliomax-menu-builder" target="_blank">GitHub</a>. Contribuzioni, segnalazioni di bug e pull request sono benvenute.</p>

<h3>Funziona con qualsiasi tema WordPress?</h3>
<p>Sì. Menu Builder funziona con qualsiasi tema WordPress, sia classico (PHP) che basato su blocchi (FSE). Per i temi classici, puoi usare lo shortcode o la funzione di Integrazione WP. Per i temi FSE, usa il blocco Gutenberg MenuX nell'Editor del Sito.</p>

<h3>Rallenterà il mio sito?</h3>
<p>No, Menu Builder è progettato con le prestazioni come priorità. Il CSS e il JavaScript vengono caricati in modo condizionale solo nelle pagine in cui il menu è presente. Il markup generato è semantico e leggero. I temi includono solo le variabili CSS necessarie, evitando il caricamento di fogli di stile inutilizzati.</p>

<h2>Installazione &amp; Compatibilità</h2>

<h3>Quale versione di WordPress è richiesta?</h3>
<p>Menu Builder richiede WordPress 6.0 o versione successiva e PHP 7.4 o versione successiva. Si consiglia di usare sempre la versione più recente di WordPress per motivi di sicurezza e compatibilità.</p>

<h3>È compatibile con i page builder (Elementor, Divi, Beaver Builder)?</h3>
<p>Sì. Puoi inserire il menu tramite shortcode <code>[menux]</code> in qualsiasi widget di testo o shortcode supportato dai principali page builder. Per Elementor, esiste anche un widget dedicato. Per Divi e Beaver Builder, usa il modulo/widget shortcode nativo del page builder.</p>

<h3>Cosa devo fare se c'è un conflitto con un altro plugin?</h3>
<p>I conflitti tra plugin sono rari ma possibili. Per diagnosticare un conflitto, disattiva temporaneamente tutti gli altri plugin e verifica se il problema persiste. Poi riattivali uno alla volta per identificare il plugin che causa il conflitto. Apri una segnalazione su <a href="https://github.com/giulio001/giuliomax-menu-builder/issues" target="_blank">GitHub</a> con i dettagli del conflitto.</p>

<h3>Funziona con WordPress Multisite?</h3>
<p>Sì. Menu Builder può essere attivato sia a livello di rete (network-wide) che su singoli siti della rete multisite. Ogni sito della rete ha la propria configurazione di menu indipendente. La funzione Multilingual Press è supportata per le reti multisite multilingua.</p>

<h2>Temi &amp; Stile</h2>

<h3>Posso creare un tema personalizzato?</h3>
<p>Non è possibile salvare un tema personalizzato con un nome nella libreria, ma puoi personalizzare completamente tutti gli aspetti visivi del menu (colori, tipografia, spaziatura, forma) a partire da qualsiasi tema predefinito. Le personalizzazioni vengono salvate separatamente dal tema base e vengono mantenute anche se cambi tema in un secondo momento.</p>

<h3>Posso usare un font personalizzato?</h3>
<p>Sì. Nel campo <strong>Tipografia → Famiglia font</strong> puoi inserire qualsiasi nome di font — inclusi i font di Google Fonts, Adobe Fonts o font caricati tramite altri plugin WordPress. Assicurati che il font sia già caricato nel sito: Menu Builder non carica automaticamente i font web esterni.</p>

<h3>Come faccio a ripristinare gli stili predefiniti?</h3>
<p>Puoi ripristinare le impostazioni di stile predefinite del tema attivo facendo clic sul pulsante <strong>Ripristina predefiniti</strong> nella sezione delle impostazioni di stile. Questa operazione riporta tutti i valori personalizzati a quelli del tema base selezionato. In alternativa, applica di nuovo il tema dalla libreria dei temi.</p>

<h2>Mega Menu</h2>

<h3>Il mega menu viene tagliato dal bordo della pagina. Come si risolve?</h3>
<p>Il problema è quasi sempre causato dall'elemento contenitore del menu che ha la proprietà CSS <code>overflow: hidden</code>. Identifica l'elemento con DevTools del browser e rimuovi o modifica quella proprietà tramite CSS personalizzato. In alternativa, imposta una larghezza massima del pannello mega menu inferiore alla larghezza del contenitore.</p>

<h3>Posso inserire un form di contatto nel mega menu?</h3>
<p>Sì. Usa il tipo di contenuto <strong>Shortcode</strong> in una colonna del mega menu e inserisci lo shortcode del tuo plugin preferito (es. Contact Form 7, WPForms, Gravity Forms). Il form viene renderizzato normalmente all'interno del pannello. Assicurati che gli script del plugin del form siano caricati nella pagina in cui appare il menu.</p>

<h2>Mobile</h2>

<h3>Su mobile vedo sia il menu desktop che quello mobile. Come mai?</h3>
<p>Questo accade quando il breakpoint del menu mobile non è impostato correttamente, oppure quando il CSS del tema nasconde il menu mobile e mostra quello desktop indipendentemente dalla larghezza dello schermo. Verifica il valore del breakpoint in <strong>Menu Builder → Mobile → Breakpoint</strong> e assicurati che non ci sia CSS del tema che sovrascrive le media query di Menu Builder.</p>

<h2>WooCommerce</h2>

<h3>Il contatore del carrello non si aggiorna. Come si risolve?</h3>
<p>Il contatore del carrello usa il sistema di frammenti AJAX di WooCommerce. Se non si aggiorna, verifica che WooCommerce sia correttamente installato e attivato e che la funzione di frammenti AJAX non sia disabilitata da un plugin di caching o di ottimizzazione. Alcuni plugin di caching disabilitano i frammenti WooCommerce per migliorare le prestazioni: in questo caso, escludere la funzione di aggiornamento del carrello dalla cache di solito risolve il problema.</p>

<h2>Assistenza</h2>
<p>Non hai trovato risposta alla tua domanda? Puoi contattarci o cercare soluzioni esistenti nei seguenti canali:</p>
<ul>
  <li><a href="https://github.com/giulio001/giuliomax-menu-builder/issues" target="_blank">Segnalazioni e discussioni su GitHub</a> — per bug, richieste di funzionalità e domande tecniche.</li>
  <li><a href="https://wordpress.org/support/plugin/giuliomax-menu-builder/" target="_blank">Forum di supporto su WordPress.org</a> — per domande generali e supporto della community.</li>
</ul>

<div class="page-nav"><a href="multilingual.html"><span class="nav-dir">← Precedente</span><span class="nav-title">Multilingua</span></a><span></span></div>
`,

};
