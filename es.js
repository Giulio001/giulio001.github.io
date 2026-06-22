/* Traducciones al español — Giuliomax Menu Builder Docs */
window.MENUX_ES = {

  'index.html': `
<p class="breadcrumb">Primeros pasos</p>
<h1>Introducción</h1>
<p class="lead">Giuliomax Menu Builder es un plugin gratuito para WordPress que te permite crear menús de navegación visualmente atractivos, responsivos y totalmente personalizables, directamente desde el panel de administración.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#what">¿Qué es Menu Builder?</a>
  <a href="#features">Funcionalidades principales</a>
  <a href="#requirements">Requisitos</a>
  <a href="#start">Primeros pasos</a>
</div>

<h2 id="what">¿Qué es Menu Builder?</h2>
<p>Menu Builder sustituye los menús de navegación predeterminados de WordPress por un sistema visual completo. Puedes crear menús con temas de color, megamenús, barra de anuncios, integración con WooCommerce, soporte multilingüe y mucho más, todo sin escribir una sola línea de código.</p>
<p>El plugin funciona con cualquier tema de WordPress, tanto los clásicos basados en PHP como los modernos basados en bloques (FSE). Se coloca en la página mediante un shortcode, un bloque de Gutenberg o reemplazando automáticamente las ubicaciones de menú del tema.</p>

<h2 id="features">Funcionalidades principales</h2>
<ul>
  <li><strong>Temas visuales</strong> — más de 18 temas de diseño listos para usar, cada uno con paletas de colores y tipografía cuidadosamente seleccionadas.</li>
  <li><strong>Megamenú</strong> — paneles de ancho completo con columnas, imágenes, iconos y contenido HTML personalizado.</li>
  <li><strong>Diseño y efectos</strong> — menú fijo (sticky), animaciones de entrada, indicadores de desplegable y Scroll Spy.</li>
  <li><strong>Menú para móvil</strong> — cajón lateral push, superposición completa o menú desplegable, con control de punto de corte.</li>
  <li><strong>Barra de anuncios</strong> — franja de anuncio superior con temporizador de cuenta regresiva opcional.</li>
  <li><strong>Integración con WooCommerce</strong> — icono del carrito con contador de artículos en tiempo real.</li>
  <li><strong>Búsqueda</strong> — modal de búsqueda activada mediante un icono en el menú.</li>
  <li><strong>Insignias</strong> — etiquetas de "Nuevo", "Oferta" o personalizadas sobre los elementos del menú.</li>
  <li><strong>Reglas de visibilidad</strong> — muestra u oculta elementos según el estado de sesión del usuario o su rol en WordPress.</li>
  <li><strong>Constructor de pie de página</strong> — crea un pie de página multicolumna completo directamente desde el admin.</li>
  <li><strong>Multilingüe</strong> — compatible con WPML, Polylang, TranslatePress y Multilingual Press.</li>
  <li><strong>Accesibilidad</strong> — cumple con WCAG 2.2 nivel AA, con navegación completa por teclado y atributos ARIA.</li>
</ul>

<h2 id="requirements">Requisitos</h2>
<ul>
  <li>WordPress 5.8 o superior</li>
  <li>PHP 7.4 o superior</li>
  <li>Para la experiencia completa con el editor de bloques: WordPress 6.0 o superior</li>
</ul>

<h2 id="start">Primeros pasos</h2>
<ol class="steps">
  <li><a href="installation.html">Instala el plugin</a> desde el repositorio de WordPress.org o subiendo el archivo ZIP.</li>
  <li>Ve a <strong>Menu Builder</strong> en el menú lateral del administrador.</li>
  <li>Elige un tema en la sección <strong>Temas</strong> y personaliza los colores, la tipografía y el diseño a tu gusto.</li>
  <li>Añade elementos de menú en la sección <strong>Estructura del menú</strong>.</li>
  <li>Coloca el menú en tu sitio con el <a href="shortcode.html">shortcode</a>, el <a href="gutenberg.html">bloque de Gutenberg</a> o a través de la <a href="wp-integration.html">integración con WP</a>.</li>
</ol>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>El plugin incluye un <strong>Asistente de configuración</strong> que te guía paso a paso en la creación de tu primer menú. Se abre automáticamente al acceder por primera vez a Menu Builder.</p></div>
</div>

<div class="page-nav">
  <span></span>
  <a class="next" href="installation.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Instalación</span></a>
</div>
`,

  'installation.html': `
<p class="breadcrumb">Primeros pasos</p>
<h1>Instalación</h1>
<p class="lead">Instala Giuliomax Menu Builder desde el repositorio oficial de WordPress.org o subiendo el archivo ZIP manualmente. Todo el proceso tarda menos de dos minutos.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#repo">Instalación desde WordPress.org</a>
  <a href="#zip">Instalación manual (ZIP)</a>
  <a href="#activate">Activación</a>
  <a href="#update">Actualizaciones</a>
</div>

<h2 id="repo">Instalación desde WordPress.org</h2>
<ol class="steps">
  <li>En tu panel de administración de WordPress, ve a <strong>Plugins → Añadir nuevo</strong>.</li>
  <li>Busca <strong>Giuliomax Menu Builder</strong>.</li>
  <li>Haz clic en <strong>Instalar ahora</strong> junto al plugin.</li>
  <li>Cuando termine la instalación, haz clic en <strong>Activar</strong>.</li>
</ol>

<h2 id="zip">Instalación manual (ZIP)</h2>
<ol class="steps">
  <li>Descarga el archivo ZIP del plugin desde <a href="https://github.com/Giulio001/menux-free-version" target="_blank">GitHub</a> o desde WordPress.org.</li>
  <li>En tu panel de WordPress, ve a <strong>Plugins → Añadir nuevo → Subir plugin</strong>.</li>
  <li>Haz clic en <strong>Elegir archivo</strong>, selecciona el ZIP descargado y haz clic en <strong>Instalar ahora</strong>.</li>
  <li>Haz clic en <strong>Activar el plugin</strong>.</li>
</ol>

<h2 id="activate">Activación</h2>
<p>Una vez activado, aparecerá un nuevo elemento <strong>Menu Builder</strong> en el menú lateral izquierdo del administrador de WordPress. Haz clic en él para abrir el constructor.</p>
<p>En la primera visita, el <strong>Asistente de configuración</strong> se abrirá automáticamente y te guiará a través de los pasos básicos: elegir un tema de diseño, añadir elementos al menú y colocarlo en tu sitio.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>El plugin no modifica ningún archivo de tu tema ni la base de datos más allá de sus propias opciones en <code>wp_options</code>. Puedes desactivarlo y eliminarlo sin dejar rastro.</p></div>
</div>

<h2 id="update">Actualizaciones</h2>
<p>Las actualizaciones se distribuyen a través de WordPress.org. Cuando hay una nueva versión disponible, aparecerá la notificación estándar de actualización de WordPress en <strong>Plugins → Plugins instalados</strong>. Haz clic en <strong>Actualizar ahora</strong> para instalarla.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>Antes de actualizar, utiliza <strong>Menu Builder → Importar / Exportar</strong> para exportar tu configuración actual. Así tendrás una copia de seguridad a la que volver si algo no funciona como esperabas.</p></div>
</div>

<div class="page-nav">
  <a href="index.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Introducción</span></a>
  <a class="next" href="shortcode.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Shortcode [menux]</span></a>
</div>
`,

  'shortcode.html': `
<p class="breadcrumb">Uso del plugin</p>
<h1>Shortcode [menux]</h1>
<p class="lead">Coloca el menú de navegación en cualquier página, entrada o área de widgets añadiendo el shortcode <code>[menux]</code>, sin necesidad de editar archivos PHP del tema.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#basic">Uso básico</a>
  <a href="#location">Parámetro location</a>
  <a href="#classic">Temas clásicos</a>
  <a href="#builders">Constructores de páginas</a>
</div>

<h2 id="basic">Uso básico</h2>
<p>Añade <code>[menux]</code> en el editor de contenido de cualquier página o entrada de WordPress. El plugin renderizará el menú principal configurado en esa posición.</p>

<h2 id="location">Parámetro location</h2>
<p>Si tienes varias ubicaciones de menú configuradas, puedes especificar cuál mostrar:</p>
<ul>
  <li><code>[menux location="primary"]</code> — menú principal (por defecto)</li>
  <li><code>[menux location="footer"]</code> — menú de pie de página</li>
  <li><code>[menux location="sidebar"]</code> — menú de barra lateral</li>
  <li><code>[menux location="mobile"]</code> — menú exclusivo para móvil</li>
</ul>

<h2 id="classic">Temas clásicos</h2>
<p>En los temas clásicos de WordPress basados en PHP, la forma más habitual de colocar el menú es mediante el shortcode. Añádelo en una zona de widgets del área de encabezado o directamente en el contenido de una página de plantilla personalizada.</p>
<p>También puedes usar la <a href="wp-integration.html">integración WP</a> para reemplazar automáticamente las ubicaciones de menú del tema sin tocar el código.</p>

<h2 id="builders">Constructores de páginas</h2>
<ul>
  <li><strong>Elementor</strong> — usa el widget <em>Shortcode</em> y pega <code>[menux]</code>.</li>
  <li><strong>Divi</strong> — usa el módulo <em>Código</em>.</li>
  <li><strong>Beaver Builder</strong> — usa el módulo <em>HTML</em>.</li>
  <li><strong>WPBakery</strong> — usa el elemento <em>Raw HTML</em>.</li>
</ul>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Para los temas basados en bloques (FSE), el método recomendado es el <a href="gutenberg.html">bloque de Gutenberg</a> en el editor del sitio, no el shortcode.</p></div>
</div>

<div class="page-nav">
  <a href="installation.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Instalación</span></a>
  <a class="next" href="gutenberg.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Bloque Gutenberg</span></a>
</div>
`,

  'gutenberg.html': `
<p class="breadcrumb">Uso del plugin</p>
<h1>Bloque Gutenberg</h1>
<p class="lead">Inserta el menú de navegación en cualquier página o en las plantillas del editor del sitio (FSE) usando el bloque nativo de Gutenberg <strong>MenuX — Navigation</strong>.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#insertar">Insertar el bloque</a>
  <a href="#fse">Editor del sitio (FSE)</a>
  <a href="#location">Seleccionar ubicación</a>
</div>

<h2 id="insertar">Insertar el bloque</h2>
<ol class="steps">
  <li>Abre el editor de bloques de WordPress en cualquier página o entrada.</li>
  <li>Haz clic en el botón <strong>＋</strong> para añadir un bloque.</li>
  <li>Busca <strong>MenuX</strong> o <strong>Navigation</strong>.</li>
  <li>Selecciona el bloque <strong>MenuX — Navigation</strong>.</li>
</ol>
<p>El bloque renderizará el menú configurado en Menu Builder directamente en el editor con una vista previa en tiempo real.</p>

<h2 id="fse">Editor del sitio (FSE)</h2>
<p>Para los temas basados en bloques (Full Site Editing), el lugar ideal para colocar el bloque es la <strong>parte de plantilla del encabezado</strong>:</p>
<ol class="steps">
  <li>Ve a <strong>Apariencia → Editor</strong> (o <strong>Editor del sitio</strong>).</li>
  <li>Abre la parte de plantilla del encabezado (<em>Header</em>).</li>
  <li>Añade el bloque <strong>MenuX — Navigation</strong> donde quieras que aparezca el menú.</li>
  <li>Guarda la plantilla.</li>
</ol>
<p>El menú aparecerá en todas las páginas que utilicen esa plantilla de encabezado.</p>

<h2 id="location">Seleccionar ubicación</h2>
<p>En el panel de ajustes del bloque (barra lateral derecha del editor) puedes elegir qué ubicación de menú renderizar: <code>primary</code>, <code>footer</code>, <code>sidebar</code> o <code>mobile</code>.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>Para los temas clásicos basados en PHP, usa el <a href="shortcode.html">shortcode</a> o la <a href="wp-integration.html">integración WP</a> en su lugar.</p></div>
</div>

<div class="page-nav">
  <a href="shortcode.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Shortcode [menux]</span></a>
  <a class="next" href="themes.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Temas y categorías</span></a>
</div>
`,

  'themes.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Temas y categorías</h1>
<p class="lead">Menu Builder incluye más de 18 temas de diseño listos para usar. Cada tema es un punto de partida visual completo que puedes personalizar con total libertad.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#aplicar">Aplicar un tema</a>
  <a href="#categorias">Categorías de temas</a>
  <a href="#personalizar">Personalización</a>
  <a href="#preview">Vista previa en tiempo real</a>
</div>

<h2 id="aplicar">Aplicar un tema</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Temas</strong>.</li>
  <li>Explora la galería de temas y haz clic en el que quieras aplicar.</li>
  <li>El tema se aplica de forma instantánea. La vista previa en vivo se actualiza en tiempo real.</li>
  <li>Haz clic en <strong>Guardar menú</strong> para confirmar los cambios.</li>
</ol>
<p>Aplicar un tema es no destructivo: puedes cambiar de tema en cualquier momento y seguir ajustando los colores y la tipografía individualmente después.</p>

<h2 id="categorias">Categorías de temas</h2>
<p>Los temas están organizados en varias categorías para facilitar la búsqueda:</p>
<ul>
  <li><strong>Claro</strong> — fondos blancos y gris claro, adecuados para sitios de contenido y tiendas.</li>
  <li><strong>Oscuro</strong> — fondos negros y de carbón, ideales para portfolios y sitios de tecnología.</li>
  <li><strong>Colorido</strong> — paletas de color vivas con acentos llamativos.</li>
  <li><strong>Minimalista</strong> — diseños limpios con tipografía como elemento principal.</li>
  <li><strong>Degradado</strong> — fondos con degradados sutiles o pronunciados.</li>
</ul>

<h2 id="personalizar">Personalización</h2>
<p>Una vez aplicado un tema, puedes ajustar cualquier detalle desde los paneles de estilo:</p>
<ul>
  <li><strong>Colores</strong> — fondo, texto, enlaces, enlace activo, enlace hover, acento y submenú.</li>
  <li><strong>Tipografía</strong> — familia de fuente (más de 70 fuentes de Google Fonts o personalizada), tamaño, peso y espaciado.</li>
  <li><strong>Diseño</strong> — alineación, espaciado entre elementos, relleno y radio de borde.</li>
</ul>

<h2 id="preview">Vista previa en tiempo real</h2>
<p>Mientras ajustas colores, tipografía y disposición, la <strong>Vista previa en vivo</strong> a la derecha del panel muestra exactamente cómo quedará el menú en el frontend, incluyendo el estado hover y los desplegables.</p>

<div class="page-nav">
  <a href="gutenberg.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Bloque Gutenberg</span></a>
  <a class="next" href="logo.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Logotipo</span></a>
</div>
`,

  'logo.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Logotipo</h1>
<p class="lead">Muestra el logotipo de tu marca directamente en la barra de navegación, con control total sobre el tamaño, los márgenes y la imagen alternativa para el modo oscuro.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#configurar">Configurar el logotipo</a>
  <a href="#tamano">Tamaño y espaciado</a>
  <a href="#oscuro">Logotipo para modo oscuro</a>
  <a href="#texto">Logotipo de texto</a>
</div>

<h2 id="configurar">Configurar el logotipo</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Logotipo</strong>.</li>
  <li>Haz clic en <strong>Seleccionar imagen</strong> para abrir la biblioteca de medios de WordPress.</li>
  <li>Elige o sube tu logotipo (se recomienda formato SVG o PNG con fondo transparente).</li>
  <li>Haz clic en <strong>Guardar menú</strong>.</li>
</ol>

<h2 id="tamano">Tamaño y espaciado</h2>
<p>Ajusta el <strong>ancho máximo</strong> del logotipo en píxeles. El alto se calcula automáticamente para mantener las proporciones. También puedes configurar el <strong>margen derecho</strong> para separar el logotipo de los elementos del menú.</p>

<h2 id="oscuro">Logotipo para modo oscuro</h2>
<p>Si tu sitio tiene un modo oscuro, puedes cargar una <strong>versión alternativa del logotipo</strong> específica para ese contexto. El plugin detecta automáticamente la preferencia del sistema (<code>prefers-color-scheme: dark</code>) y muestra la versión correcta.</p>

<h2 id="texto">Logotipo de texto</h2>
<p>Si no tienes un logotipo en imagen, puedes usar un <strong>logotipo de texto</strong>: escribe el nombre de tu marca, elige la fuente, el tamaño y el color. Opcionalmente, activa el <strong>efecto degradado</strong> para aplicar un gradiente de color al texto del logotipo.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>Para obtener los mejores resultados en pantallas de alta densidad (Retina), usa un archivo SVG como logotipo. Los SVG se escalan perfectamente a cualquier resolución sin perder nitidez.</p></div>
</div>

<div class="page-nav">
  <a href="themes.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Temas y categorías</span></a>
  <a class="next" href="mega-menu.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Megamenú</span></a>
</div>
`,

  'mega-menu.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Megamenú</h1>
<p class="lead">Transforma cualquier elemento del menú en un panel de ancho completo con múltiples columnas, imágenes destacadas, iconos y contenido HTML personalizado.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#activar">Activar el megamenú</a>
  <a href="#columnas">Tipos de columna</a>
  <a href="#imagen">Imagen destacada</a>
  <a href="#estilo">Estilo del panel</a>
  <a href="#movil">Comportamiento en móvil</a>
</div>

<h2 id="activar">Activar el megamenú</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Megamenú</strong>.</li>
  <li>En la lista de elementos del menú, activa el interruptor <strong>Megamenú</strong> del elemento que quieres convertir.</li>
  <li>Haz clic en <strong>＋ Añadir columna</strong> para añadir la primera columna al panel.</li>
  <li>Configura el contenido de cada columna y guarda el menú.</li>
</ol>

<h2 id="columnas">Tipos de columna</h2>
<p>Cada columna del megamenú puede contener uno de los siguientes tipos de contenido:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tipo</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td><strong>Lista de enlaces</strong></td><td>Una lista vertical de enlaces de submenú, con título opcional.</td></tr>
      <tr><td><strong>Imagen destacada</strong></td><td>Una imagen con título, texto descriptivo y enlace opcionales.</td></tr>
      <tr><td><strong>HTML personalizado</strong></td><td>Cualquier HTML, shortcode de WordPress o código de inserción.</td></tr>
      <tr><td><strong>Separador</strong></td><td>Un espaciador visual para organizar el panel.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="imagen">Imagen destacada</h2>
<p>La columna de imagen destacada es ideal para resaltar una categoría o producto con una imagen atractiva. Puedes ajustar el ancho de la imagen, el radio de borde y si el enlace abarca toda la columna o solo el texto.</p>

<h2 id="estilo">Estilo del panel</h2>
<p>El panel del megamenú tiene sus propios controles de estilo independientes del menú principal:</p>
<ul>
  <li><strong>Ancho</strong> — ancho completo (100% del viewport) o personalizado en píxeles.</li>
  <li><strong>Fondo</strong> — color sólido, degradado o imagen de fondo.</li>
  <li><strong>Radio de borde y sombra</strong> — para darle un acabado visual cuidado.</li>
  <li><strong>Columnas de la cuadrícula</strong> — de 2 a 6 columnas con distribución flexible.</li>
  <li><strong>Animación</strong> — elige entre fundido, deslizamiento hacia abajo o sin animación.</li>
</ul>

<h2 id="movil">Comportamiento en móvil</h2>
<p>En dispositivos móviles, cuando un elemento principal tiene un megamenú, al pulsar sobre él se abre un panel de pantalla completa con un botón ← Volver, lo que da a la navegación un aspecto de aplicación nativa.</p>
<ul>
  <li><strong>Visible en móvil</strong> — la navegación push descrita anteriormente.</li>
  <li><strong>Oculto en móvil</strong> — el panel no se renderiza en pantallas pequeñas.</li>
</ul>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>En móvil, las personalizaciones individuales de estilo del megamenú (fondo, colores, fuentes) se desactivan automáticamente para que los enlaces se rendericen siempre con el estilo neutro del menú móvil.</p></div>
</div>

<div class="page-nav">
  <a href="logo.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Logotipo</span></a>
  <a class="next" href="announcement.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Barra de anuncios</span></a>
</div>
`,

  'announcement.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Barra de anuncios</h1>
<p class="lead">Muestra un mensaje destacado en la parte superior del sitio — un anuncio de oferta, una actualización importante o cualquier aviso — con un temporizador de cuenta regresiva opcional.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#activar">Activar la barra</a>
  <a href="#contenido">Contenido y estilo</a>
  <a href="#countdown">Cuenta regresiva</a>
  <a href="#cierre">Botón de cierre</a>
</div>

<h2 id="activar">Activar la barra</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Anuncios</strong>.</li>
  <li>Activa el interruptor <strong>Activar barra de anuncios</strong>.</li>
  <li>Escribe el texto del anuncio en el campo correspondiente.</li>
  <li>Guarda el menú.</li>
</ol>

<h2 id="contenido">Contenido y estilo</h2>
<p>El texto admite HTML básico, por lo que puedes incluir enlaces, texto en negrita o cursiva. Además de los colores de fondo y texto, puedes configurar:</p>
<ul>
  <li><strong>Enlace del anuncio</strong> — convierte toda la barra en un enlace clicable (útil para campañas).</li>
  <li><strong>Alineación del texto</strong> — izquierda, centro o derecha.</li>
  <li><strong>Altura de la barra</strong> — en píxeles.</li>
  <li><strong>Animación de entrada</strong> — la barra puede deslizarse hacia abajo al cargar la página.</li>
</ul>

<h2 id="countdown">Cuenta regresiva</h2>
<p>Activa el <strong>Temporizador de cuenta regresiva</strong> para mostrar un contador en tiempo real junto al texto del anuncio. Establece la fecha y hora de finalización y el plugin calculará automáticamente el tiempo restante en días, horas, minutos y segundos.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>Cuando el temporizador llega a cero, la cuenta regresiva desaparece automáticamente del frontend. El texto del anuncio permanece visible a menos que desactives la barra manualmente.</p></div>
</div>

<h2 id="cierre">Botón de cierre</h2>
<p>Activa el <strong>Botón de cierre</strong> para que los visitantes puedan ocultar la barra. La preferencia se guarda en <code>sessionStorage</code>, por lo que la barra no vuelve a mostrarse durante la misma sesión del navegador (se restaura al abrir una nueva pestaña o ventana).</p>

<div class="page-nav">
  <a href="mega-menu.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Megamenú</span></a>
  <a class="next" href="cart.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Carrito WooCommerce</span></a>
</div>
`,

  'cart.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Carrito WooCommerce</h1>
<p class="lead">Muestra un icono del carrito de compras en el menú de navegación con un contador que se actualiza en tiempo real cada vez que el cliente añade o elimina un artículo.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#activar">Activar el icono del carrito</a>
  <a href="#estilo">Estilo y posición</a>
  <a href="#comportamiento">Comportamiento al hacer clic</a>
</div>

<h2 id="activar">Activar el icono del carrito</h2>
<p>El icono del carrito se activa automáticamente cuando WooCommerce está instalado y activo. Ve a <strong>Menu Builder → Carrito</strong> y activa el interruptor <strong>Mostrar icono del carrito</strong>.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Si WooCommerce no está instalado, la sección de Carrito en el admin no aparece y el icono no se renderiza en el frontend.</p></div>
</div>

<h2 id="estilo">Estilo y posición</h2>
<p>El icono del carrito puede personalizarse con las siguientes opciones:</p>
<ul>
  <li><strong>Posición</strong> — colócalo al principio o al final de la barra de navegación.</li>
  <li><strong>Icono</strong> — elige entre carrito de compras, bolsa de la compra o cesta.</li>
  <li><strong>Color</strong> — hereda el color de los enlaces del menú o establece uno personalizado.</li>
  <li><strong>Contador</strong> — muestra el número de artículos como una burbuja. Puedes elegir el color de fondo y del texto del contador.</li>
  <li><strong>Ocultar cuando está vacío</strong> — el icono (y el contador) solo aparece cuando hay artículos en el carrito.</li>
</ul>

<h2 id="comportamiento">Comportamiento al hacer clic</h2>
<p>Elige qué ocurre cuando el visitante hace clic en el icono del carrito:</p>
<ul>
  <li><strong>Ir a la página del carrito</strong> — redirige a <code>/carrito</code> (o la URL del carrito configurada en WooCommerce).</li>
  <li><strong>Abrir el panel lateral del carrito</strong> — muestra un mini-carrito deslizante sin abandonar la página actual.</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>El contador se actualiza mediante los fragmentos de carrito de WooCommerce. Si usas un plugin de caché, asegúrate de que las solicitudes AJAX de WooCommerce no estén en caché para que el contador se actualice correctamente.</p></div>
</div>

<div class="page-nav">
  <a href="announcement.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Barra de anuncios</span></a>
  <a class="next" href="search.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Búsqueda</span></a>
</div>
`,

  'search.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Búsqueda</h1>
<p class="lead">Añade un icono de búsqueda en la barra de navegación que abre un modal de búsqueda a pantalla completa, con soporte para búsqueda en tiempo real (AJAX).</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#activar">Activar la búsqueda</a>
  <a href="#modal">Modal de búsqueda</a>
  <a href="#ajax">Búsqueda en tiempo real</a>
  <a href="#estilo">Estilo</a>
</div>

<h2 id="activar">Activar la búsqueda</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Búsqueda</strong>.</li>
  <li>Activa el interruptor <strong>Mostrar icono de búsqueda</strong>.</li>
  <li>Elige la posición del icono: al inicio o al final del menú.</li>
  <li>Guarda el menú.</li>
</ol>

<h2 id="modal">Modal de búsqueda</h2>
<p>Al hacer clic en el icono de la lupa, se abre un modal de búsqueda centrado con fondo semitransparente. El campo de búsqueda recibe el foco automáticamente. El visitante puede cerrar el modal pulsando <kbd>Escape</kbd> o haciendo clic fuera de él.</p>

<h2 id="ajax">Búsqueda en tiempo real</h2>
<p>Activa la opción <strong>Búsqueda AJAX en tiempo real</strong> para mostrar resultados instantáneos mientras el visitante escribe. Los resultados se muestran debajo del campo de búsqueda con el título de la página, el tipo de contenido y un fragmento del extracto.</p>
<p>Puedes configurar los <strong>tipos de contenido</strong> en los que buscar (páginas, entradas, productos de WooCommerce, tipos de post personalizados) y el <strong>número máximo de resultados</strong> a mostrar.</p>

<h2 id="estilo">Estilo</h2>
<p>El icono de búsqueda hereda el color de los enlaces del menú. El modal tiene su propia sección de estilo:</p>
<ul>
  <li><strong>Color de fondo del overlay</strong> — controla la opacidad del fondo oscurecido.</li>
  <li><strong>Color del campo de búsqueda</strong> — fondo, texto y borde.</li>
  <li><strong>Efecto de desenfoque</strong> — aplica un <code>backdrop-filter: blur()</code> al fondo del modal.</li>
</ul>

<div class="page-nav">
  <a href="cart.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Carrito WooCommerce</span></a>
  <a class="next" href="badges.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Insignias y puntos</span></a>
</div>
`,

  'badges.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Insignias y puntos de notificación</h1>
<p class="lead">Destaca elementos del menú con insignias de texto como "Nuevo" u "Oferta", o con puntos de notificación para llamar la atención del visitante.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#insignias">Insignias de texto</a>
  <a href="#puntos">Puntos de notificación</a>
  <a href="#estilo">Personalización visual</a>
</div>

<h2 id="insignias">Insignias de texto</h2>
<p>Para añadir una insignia a un elemento del menú:</p>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Estructura del menú</strong>.</li>
  <li>Haz clic en el elemento al que quieres añadir la insignia para desplegarlo.</li>
  <li>Escribe el texto en el campo <strong>Insignia</strong> (por ejemplo: "Nuevo", "Oferta", "Pro").</li>
  <li>Guarda el menú.</li>
</ol>
<p>La insignia aparece como una pequeña etiqueta junto al texto del enlace.</p>

<h2 id="puntos">Puntos de notificación</h2>
<p>Los puntos de notificación son círculos pequeños sin texto, similares a los que se ven en las aplicaciones móviles para indicar actividad o novedades. Se activan de la misma forma que las insignias, pero dejando el campo de texto vacío y activando el interruptor <strong>Mostrar punto</strong>.</p>

<h2 id="estilo">Personalización visual</h2>
<p>Tanto las insignias como los puntos tienen sus propios controles de estilo globales en <strong>Menu Builder → Estilo → Insignias</strong>:</p>
<ul>
  <li><strong>Color de fondo</strong> — por defecto usa el color de acento del tema activo.</li>
  <li><strong>Color del texto</strong> — para el texto de la insignia.</li>
  <li><strong>Radio de borde</strong> — desde etiqueta cuadrada hasta completamente redondeada (tipo pastilla).</li>
  <li><strong>Tamaño de fuente</strong> — en píxeles.</li>
  <li><strong>Animación de pulso</strong> — añade una animación pulsante a los puntos para hacerlos más llamativos.</li>
</ul>

<div class="page-nav">
  <a href="search.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Búsqueda</span></a>
  <a class="next" href="visibility.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Reglas de visibilidad</span></a>
</div>
`,

  'visibility.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Reglas de visibilidad</h1>
<p class="lead">Controla qué elementos del menú ve cada visitante según su estado de sesión (conectado o no) o su rol en WordPress.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#como">Cómo funcionan</a>
  <a href="#configurar">Configurar reglas</a>
  <a href="#roles">Visibilidad por rol</a>
</div>

<h2 id="como">Cómo funcionan</h2>
<p>Por defecto, todos los elementos del menú son visibles para todos los visitantes. Las reglas de visibilidad te permiten restringir o dirigir la visibilidad de cada elemento de forma individual, sin necesitar código PHP ni plugins adicionales.</p>

<h2 id="configurar">Configurar reglas</h2>
<ol class="steps">
  <li>En <strong>Menu Builder → Estructura del menú</strong>, haz clic en cualquier elemento para desplegarlo.</li>
  <li>Busca el desplegable <strong>Visibilidad</strong>.</li>
  <li>Elige una de las opciones disponibles:</li>
</ol>
<div class="table-wrap">
  <table>
    <thead><tr><th>Opción</th><th>Quién ve este elemento</th></tr></thead>
    <tbody>
      <tr><td><strong>Todos</strong></td><td>Todos los visitantes, independientemente de su estado de sesión (valor por defecto).</td></tr>
      <tr><td><strong>Solo usuarios conectados</strong></td><td>Solo los usuarios que hayan iniciado sesión en WordPress.</td></tr>
      <tr><td><strong>Solo usuarios desconectados</strong></td><td>Solo los visitantes que <em>no</em> hayan iniciado sesión (útil para el enlace "Iniciar sesión").</td></tr>
      <tr><td><strong>Por rol</strong></td><td>Solo los usuarios con un rol específico de WordPress (ver abajo).</td></tr>
    </tbody>
  </table>
</div>

<h2 id="roles">Visibilidad por rol</h2>
<p>Al elegir la opción <strong>Por rol</strong>, se muestra una lista de todos los roles de WordPress disponibles en tu instalación (Suscriptor, Colaborador, Autor, Editor, Administrador y cualquier rol personalizado creado por plugins). Puedes seleccionar uno o varios roles.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Las reglas de visibilidad se aplican en el servidor al renderizar el HTML del menú. Los elementos ocultos no se incluyen en el código fuente de la página, por lo que no pueden verse inspeccionando el DOM.</p></div>
</div>

<div class="page-nav">
  <a href="badges.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Insignias y puntos</span></a>
  <a class="next" href="mobile.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Menús para móvil</span></a>
</div>
`,

  'mobile.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Menús para móvil</h1>
<p class="lead">Menu Builder genera automáticamente una versión responsiva del menú para dispositivos móviles, con botón hamburguesa, animaciones y un panel deslizante completamente personalizable.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#breakpoint">Punto de corte</a>
  <a href="#tipos">Tipos de menú móvil</a>
  <a href="#hamburger">Botón hamburguesa</a>
  <a href="#estilo">Estilo del panel</a>
  <a href="#megamovil">Megamenú en móvil</a>
  <a href="#preview">Vista previa en tiempo real</a>
</div>

<h2 id="breakpoint">Punto de corte</h2>
<p>Define el ancho de ventana (en píxeles) por debajo del cual el menú de escritorio se oculta y aparece el menú móvil. El valor por defecto es <strong>768 px</strong>. Puedes ajustarlo en <strong>Menu Builder → Móvil → Punto de corte</strong>.</p>

<h2 id="tipos">Tipos de menú móvil</h2>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tipo</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td><strong>Cajón (push)</strong></td><td>Un panel lateral que se desliza desde el borde de la pantalla y empuja el contenido de la página hacia un lado.</td></tr>
      <tr><td><strong>Superposición completa</strong></td><td>Un panel a pantalla completa que cubre toda la página con un fondo semitransparente.</td></tr>
      <tr><td><strong>Desplegable</strong></td><td>Un menú desplegable que aparece justo debajo de la barra de navegación.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="hamburger">Botón hamburguesa</h2>
<p>El botón para abrir y cerrar el menú móvil es completamente personalizable:</p>
<ul>
  <li><strong>Estilo</strong> — hamburguesa clásica, líneas con espacio, Cruz (×) o Flecha.</li>
  <li><strong>Tamaño</strong> — en píxeles.</li>
  <li><strong>Color</strong> — hereda el color de los enlaces del menú o usa uno personalizado.</li>
  <li><strong>Alineación</strong> — izquierda, derecha o centrado dentro de la barra.</li>
  <li><strong>Animación</strong> — el icono se anima al abrirse y cerrarse.</li>
</ul>

<h2 id="estilo">Estilo del panel</h2>
<p>El panel móvil tiene su propia sección de estilo independiente del menú de escritorio:</p>
<ul>
  <li><strong>Color de fondo</strong> y <strong>color del overlay</strong>.</li>
  <li><strong>Color de los enlaces</strong> y <strong>color hover</strong>.</li>
  <li><strong>Tamaño y peso de la fuente</strong>.</li>
  <li><strong>Animación de apertura</strong> — deslizamiento desde la izquierda, derecha, arriba o abajo.</li>
  <li><strong>Dirección del cajón</strong> — izquierda o derecha.</li>
</ul>

<h2 id="megamovil">Megamenú en móvil</h2>
<p>Cuando un elemento del menú principal tiene un megamenú, al pulsarlo en móvil se abre un panel de pantalla completa con un botón ← Volver, dando a la navegación un aspecto de aplicación nativa.</p>
<ul>
  <li><strong>Visible en móvil</strong> — la navegación push descrita anteriormente.</li>
  <li><strong>Oculto en móvil</strong> — el panel no se renderiza en pantallas pequeñas.</li>
</ul>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>En móvil, las personalizaciones individuales de estilo del megamenú (fondo, colores, fuentes) se desactivan automáticamente para que los enlaces se muestren siempre con el estilo neutro del menú móvil.</p></div>
</div>

<h2 id="preview">Vista previa del teléfono en tiempo real</h2>
<p>Mientras tienes abierta la pestaña <strong>Móvil</strong> en el panel de administración, un modelo de teléfono fijo a la derecha se actualiza en tiempo real con cada cambio de configuración móvil: estilo, color del overlay, alineación del hamburguesa, color de los enlaces y más.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>El plugin respeta automáticamente la media query CSS <code>prefers-reduced-motion</code>. Si el visitante ha activado "Reducir movimiento" en la configuración de accesibilidad de su sistema operativo, todas las animaciones se desactivan.</p></div>
</div>

<div class="page-nav">
  <a href="visibility.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Reglas de visibilidad</span></a>
  <a class="next" href="layout.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Diseño y efectos</span></a>
</div>
`,

  'layout.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Diseño y efectos</h1>
<p class="lead">Ajusta cómo se organiza la barra de navegación, hazla fija al hacer scroll y añade animaciones sutiles, todo desde la sección Diseño del Menu Builder.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#espaciado">Espaciado y alineación</a>
  <a href="#sticky">Navegación fija</a>
  <a href="#progreso">Barra de progreso de scroll</a>
  <a href="#entrada">Animación de entrada</a>
  <a href="#hover">Animación hover de enlace</a>
  <a href="#indicador">Indicador de desplegable</a>
  <a href="#scroll-spy">Scroll Spy</a>
</div>

<h2 id="espaciado">Espaciado y alineación</h2>
<p>En la sección <strong>Diseño</strong> puedes controlar cómo se distribuyen los elementos del menú:</p>
<ul>
  <li><strong>Alineación</strong> — dónde se sitúan los elementos en la barra: inicio, centro, fin, espacio entre elementos o espacio uniforme.</li>
  <li><strong>Separación</strong> — el espacio entre elementos del menú.</li>
  <li><strong>Relleno horizontal / vertical</strong> — el relleno interior de la barra de navegación.</li>
  <li><strong>Radio de borde del contenedor</strong> — redondea las esquinas de toda la barra.</li>
  <li><strong>Desplazar último elemento</strong> — fija el último elemento del menú en el extremo opuesto (útil para un botón de "Contacto" o "Acceder").</li>
</ul>

<h2 id="sticky">Navegación fija</h2>
<p>Activa <strong>Sticky</strong> para mantener la barra de navegación fija en la parte superior de la pantalla mientras el visitante hace scroll.</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Opción</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td><strong>Reducir al hacer scroll</strong></td><td>La barra se vuelve más compacta una vez que se ha hecho scroll en la página.</td></tr>
      <tr><td><strong>Sombra</strong></td><td>Añade una sombra bajo la barra cuando está fija.</td></tr>
      <tr><td><strong>Espejo de diseño</strong></td><td>Usa una alineación diferente para el estado fijo respecto al estado por defecto.</td></tr>
      <tr><td><strong>Transición</strong></td><td>Con qué suavidad anima la barra entre estados (en segundos).</td></tr>
      <tr><td><strong>Z-index</strong></td><td>Orden de apilamiento, por si la barra necesita estar sobre otros elementos fijos.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="progreso">Barra de progreso de scroll</h2>
<p>Una fina barra que se rellena conforme el visitante hace scroll en la página, un toque popular en artículos largos y documentación.</p>
<ol class="steps">
  <li>Activa <strong>Barra de progreso de scroll</strong> en la sección Diseño.</li>
  <li>Elige su <strong>color</strong>, <strong>altura</strong> (1–10 px) y <strong>posición</strong> (arriba o abajo de la barra de navegación).</li>
</ol>

<h2 id="entrada">Animación de entrada</h2>
<p>Anima el menú cuando la página carga por primera vez. Elige entre <strong>Fundido</strong>, <strong>Deslizar arriba/abajo/izquierda/derecha</strong>, <strong>Zoom</strong> o <strong>Flip X</strong>, o déjalo en <strong>Ninguna</strong>.</p>
<p>También puedes ajustar la <strong>duración</strong>, un <strong>retardo</strong> antes de que comience y un <strong>escalonado</strong> para que los elementos aparezcan uno tras otro.</p>

<h2 id="hover">Animación hover de enlace</h2>
<p>Añade una microinteracción cuando el visitante pasa el ratón sobre un enlace del menú. Las opciones incluyen <strong>Elevar</strong>, <strong>Escalar</strong>, <strong>Pulsar</strong>, <strong>Rebotar</strong>, <strong>Sacudir</strong>, <strong>Brillar</strong> y <strong>Subrayado animado</strong>.</p>

<h2 id="indicador">Indicador de desplegable</h2>
<p>Los elementos con submenú pueden mostrar un pequeño indicador. Elige la forma — <strong>triángulo</strong>, <strong>chevron</strong>, <strong>punto</strong> o <strong>ninguno</strong> — y opcionalmente su color, tamaño y si rota al abrir el desplegable.</p>
<p>El panel desplegable del submenú es totalmente personalizable en <strong>Estilo → Desplegable de submenú</strong>: radio de borde, relleno horizontal y vertical, tamaño de fuente, peso de fuente y ancho mínimo.</p>

<h2 id="scroll-spy">Scroll Spy</h2>
<p>Scroll Spy resalta automáticamente el enlace de navegación correspondiente a la sección visible en el viewport mientras el visitante hace scroll en una página larga.</p>
<ol class="steps">
  <li>Activa <strong>Scroll Spy</strong> en <strong>Diseño → Diseño</strong>.</li>
  <li>Establece un <strong>desplazamiento de activación</strong> (por defecto 80 px) — la altura de la barra fija se añade automáticamente en tiempo de ejecución.</li>
  <li>Activa opcionalmente el <strong>Scroll suave</strong> con actualizaciones del hash en la API History y anuncios en la región ARIA live para lectores de pantalla.</li>
</ol>
<p>La última sección de la página siempre se activa al llegar al fondo. Los enlaces de la sección activa comparten el estilo visual definido en <strong>Colores → Enlace activo</strong>.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Todas las animaciones respetan la configuración <code>prefers-reduced-motion</code> del visitante — consulta la página de <a href="accessibility.html">Accesibilidad</a>.</p></div>
</div>

<div class="page-nav">
  <a href="mobile.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Menús para móvil</span></a>
  <a class="next" href="footer.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Constructor de pie de página</span></a>
</div>
`,

  'footer.html': `
<p class="breadcrumb">Funcionalidades</p>
<h1>Constructor de pie de página</h1>
<p class="lead">Crea un pie de página profesional y multicolumna directamente desde el panel de WordPress, elige hasta seis secciones por fila, personaliza cada detalle visualmente y colócalo con un bloque, un shortcode o automáticamente en todas las páginas.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#activar">Activación y colocación</a>
  <a href="#asistente">Asistente de configuración</a>
  <a href="#secciones">Secciones del pie de página</a>
  <a href="#inferior">Barra inferior</a>
  <a href="#temas">Temas del pie de página</a>
  <a href="#estilo">Estilo</a>
  <a href="#colocar">Colocar el pie de página</a>
</div>

<h2 id="activar">Activación y colocación</h2>
<p>Abre <strong>Menu Builder → Pie de página</strong>. La barra de herramientas en la parte superior de la página controla el comportamiento global del pie de página:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Ajuste</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td><strong>Activar pie de página</strong></td><td>Interruptor principal. El pie de página solo se renderiza cuando está activado <em>y</em> se ha añadido al menos una sección.</td></tr>
      <tr><td><strong>Diseño</strong></td><td><strong>Primera columna ancha</strong> (la primera sección es más ancha, ideal para un bloque "Sobre nosotros"), <strong>Columnas iguales</strong> o <strong>Centrado</strong>.</td></tr>
      <tr><td><strong>Colocación</strong></td><td><strong>Manual</strong> — lo colocas tú con el bloque o el shortcode. <strong>Automático</strong> — el pie de página se inserta al final de todas las páginas.</td></tr>
      <tr><td><strong>Prioridad</strong></td><td>Solo visible con Colocación automática. Prioridad del hook <code>wp_footer</code> (1–9999, por defecto 100) — los números menores se imprimen antes. Auméntala si el pie de página colisiona con otro plugin.</td></tr>
    </tbody>
  </table>
</div>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>La colocación automática evita duplicados: si ya se generó un pie de página manualmente (con bloque o shortcode) más arriba en la misma página, la inserción automática se omite para que nunca aparezcan dos pies de página.</p></div>
</div>

<h2 id="asistente">Asistente de configuración</h2>
<p>La forma más rápida de crear un pie de página completo es el botón <strong>🪄 Asistente de configuración</strong> en la barra de herramientas. Te guía por cuatro pasos — <strong>diseño → tema → contenido → barra inferior</strong> — y genera un pie de página completo y estilizado en menos de un minuto. El asistente se abre automáticamente la primera vez que visitas la página de Pie de página.</p>

<h2 id="secciones">Secciones del pie de página</h2>
<p>El pie de página se construye a partir de <strong>secciones</strong> (las columnas). Haz clic en <strong>＋ Añadir sección</strong> para añadir una — hasta <strong>6</strong> por fila. Cada tarjeta de sección tiene un <strong>Título</strong>, una casilla <strong>Ocultar en móvil</strong> y un botón <strong>⧉ Duplicar</strong> que clona toda la sección (incluyendo su contenido) e la inserta justo debajo.</p>
<p>Hay <strong>7 tipos de sección</strong>:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tipo</th><th>Qué renderiza</th><th>Campos principales</th></tr></thead>
    <tbody>
      <tr><td><strong>Sobre nosotros / texto</strong></td><td>Una imagen de logotipo opcional seguida de un párrafo de texto — normalmente una breve descripción de la empresa.</td><td>Imagen del logo, ancho de la imagen, texto</td></tr>
      <tr><td><strong>Lista de enlaces</strong></td><td>Una lista vertical de enlaces (hasta 20), cada uno puede abrirse en una nueva pestaña.</td><td>Etiqueta, URL, abrir en nueva pestaña</td></tr>
      <tr><td><strong>Información de contacto</strong></td><td>Dirección, teléfono y correo electrónico. El teléfono se convierte en enlace <code>tel:</code> y el correo en <code>mailto:</code> automáticamente.</td><td>Dirección, teléfono, correo</td></tr>
      <tr><td><strong>Iconos de redes sociales</strong></td><td>Una fila de iconos de redes sociales (hasta 14) con enlaces a tus perfiles.</td><td>Red + URL por icono</td></tr>
      <tr><td><strong>Horario de atención</strong></td><td>Una lista simple de líneas (hasta 10), p. ej. "Lun–Vie: 9–18 h".</td><td>Una línea por entrada</td></tr>
      <tr><td><strong>Newsletter</strong></td><td>Un formulario de suscripción por correo que envía a cualquier servicio externo (Mailchimp, ConvertKit, Brevo, …).</td><td>URL de acción del formulario, subtítulo, placeholder, texto del botón, texto RGPD</td></tr>
      <tr><td><strong>HTML personalizado</strong></td><td>Cualquier HTML, saneado con <code>wp_kses_post</code> de WordPress — útil para inserciones, badges o shortcodes.</td><td>HTML</td></tr>
    </tbody>
  </table>
</div>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>La sección de <strong>iconos de redes sociales</strong> admite 14 redes: Facebook, Instagram, X (Twitter), LinkedIn, YouTube, TikTok, Pinterest, GitHub, WhatsApp, Telegram, Discord, Spotify, Threads y Correo electrónico. Los iconos provienen de los glifos de marca de Font Awesome 6.</p></div>
</div>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>La sección <strong>Newsletter</strong> no renderiza nada hasta que introduzcas una <em>URL de acción</em> del formulario — esto evita que un formulario vacío envíe accidentalmente a la página actual. Añade una casilla opcional de consentimiento RGPD para mantener las suscripciones en regla.</p></div>
</div>

<h2 id="inferior">Barra inferior</h2>
<p>Debajo de las secciones hay una <strong>barra inferior</strong> opcional, configurada en la misma página:</p>
<ul>
  <li><strong>Texto de copyright</strong> — texto libre; el token <code>{year}</code> se reemplaza automáticamente por el año actual.</li>
  <li><strong>Enlaces legales</strong> — hasta 6 pequeños enlaces (Privacidad, Términos, Cookies, …).</li>
  <li><strong>Redes sociales en la barra inferior</strong> — muestra también tus iconos sociales en la barra inferior.</li>
  <li><strong>Botón volver arriba</strong> — una flecha flotante con el color de acento que aparece después de 300&nbsp;px de scroll y sube suavemente al inicio.</li>
</ul>

<h2 id="temas">Temas del pie de página</h2>
<p>La cuadrícula de <strong>🎨 Temas del pie de página</strong> aplica una paleta de colores cuidadosamente seleccionada con un solo clic. Hay <strong>11 temas</strong>:</p>
<p>Midnight, Carbon Gold, Graphite, Deep Ocean, Evergreen, Bordeaux, Sapphire, Aurora, Porcelain, Sandstone y Editorial.</p>
<p>Cada uno está ajustado para el contraste y la armonía visual — las paletas oscuras incluyen sutiles degradados de profundidad. Aplicar un tema no es destructivo: cada color individual sigue siendo editable en el panel de estilo.</p>

<h2 id="estilo">Estilo</h2>
<p>El panel <strong>🎛 Estilo</strong> (con vista previa en vivo junto a él) te da control visual completo. Una <strong>👁 Vista previa en vivo</strong> se actualiza en tiempo real al cambiar secciones, colores y tipografía.</p>

<h3>Colores</h3>
<p>Fondo, encabezados, texto, enlaces, hover de enlace, acento, más el fondo y el texto de la barra inferior. Un <strong>degradado</strong> CSS de fondo opcional puede reemplazar el fondo sólido.</p>

<h3>Diseño</h3>
<div class="table-wrap">
  <table>
    <thead><tr><th>Opción</th><th>Rango</th></tr></thead>
    <tbody>
      <tr><td><strong>Barra de acento</strong> (línea de color en la parte superior)</td><td>Activar/desactivar + altura 1–10&nbsp;px</td></tr>
      <tr><td><strong>Relleno vertical</strong></td><td>16–160&nbsp;px</td></tr>
      <tr><td><strong>Relleno horizontal</strong></td><td>0–120&nbsp;px</td></tr>
      <tr><td><strong>Separación entre columnas</strong></td><td>8–120&nbsp;px</td></tr>
      <tr><td><strong>Ancho máximo del contenido</strong></td><td>600–1920&nbsp;px</td></tr>
      <tr><td><strong>Espaciado de enlaces</strong></td><td>2–40&nbsp;px</td></tr>
      <tr><td><strong>Alineación en móvil</strong></td><td>Izquierda o Centrado</td></tr>
      <tr><td><strong>Divisor de barra inferior</strong></td><td>Mostrar/ocultar el borde superior</td></tr>
    </tbody>
  </table>
</div>

<h3>Tipografía</h3>
<ul>
  <li><strong>Encabezado</strong> — tamaño (10–28&nbsp;px), peso (Regular–Extranegrita) y estilo (MAYÚSCULAS o Normal).</li>
  <li><strong>Tamaño del texto</strong> — 11–20&nbsp;px.</li>
  <li><strong>Efecto hover de enlace</strong> — Deslizar a la derecha, Subrayado animado o Solo color.</li>
</ul>

<h3>Iconos de redes sociales</h3>
<p>Elige un <strong>estilo</strong> — Círculo, Cuadrado redondeado o Iconos simples — y un <strong>tamaño</strong> de 12–28&nbsp;px.</p>

<h3>CSS personalizado</h3>
<p>Un campo CSS con alcance limitado para ajustes finos. Usa <code>.menux-footer</code> como selector padre para mantener tus reglas contenidas al pie de página.</p>

<h2 id="colocar">Colocar el pie de página</h2>
<p>Hay tres formas de añadir el pie de página a tu sitio — elige la que mejor se adapte a tu tema:</p>
<ul>
  <li><strong>Automático</strong> — establece la Colocación en <em>Automático</em> en la barra de herramientas y el pie de página aparecerá al final de todas las páginas. No se necesita bloque ni shortcode.</li>
  <li><strong>Bloque de Gutenberg</strong> — añade el bloque <strong>MenuX — Footer</strong> a una parte de plantilla de pie de página en el Editor del sitio (temas FSE).</li>
  <li><strong>Shortcode</strong> — pega <code>[menux_footer]</code> en cualquier página, área de widgets o constructor de páginas (Elementor, Divi, temas clásicos).</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🌍</span>
  <div class="callout-body"><p>Todos los textos del pie de página — encabezados, enlaces, copyright y más — son traducibles. El constructor registra cada cadena con la API de traducción de cadenas de WPML / Polylang, y TranslatePress traduce la salida renderizada directamente. Consulta la página de <a href="multilingual.html">Multilingüe</a>.</p></div>
</div>

<div class="page-nav">
  <a href="layout.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Diseño y efectos</span></a>
  <a class="next" href="wp-integration.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Integración WP</span></a>
</div>
`,

  'wp-integration.html': `
<p class="breadcrumb">Herramientas</p>
<h1>Integración WP</h1>
<p class="lead">Reemplaza los menús de navegación nativos de tu tema por un menú de Menu Builder, sin necesidad de editar ningún archivo de plantilla. Ideal para temas clásicos en PHP que usan <code>wp_nav_menu()</code>.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#que">Qué hace</a>
  <a href="#asignar">Asignar una ubicación del tema</a>
  <a href="#notas">Notas y limitaciones</a>
</div>

<h2 id="que">Qué hace</h2>
<p>Muchos temas clásicos renderizan su navegación de encabezado llamando a <code>wp_nav_menu()</code> contra una <em>ubicación de tema</em> registrada (p. ej. "Menú principal", "Menú del pie"). La herramienta de Integración WP te permite interceptar esas ubicaciones y renderizar en su lugar un menú de Menu Builder, obteniendo todos los estilos y funcionalidades del plugin sin tocar <code>header.php</code> ni usar un shortcode.</p>

<h2 id="asignar">Asignar una ubicación del tema</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Integración WP</strong>.</li>
  <li>Verás una tabla con todas las ubicaciones de navegación registradas por tu tema activo.</li>
  <li>Para cada ubicación, elige una ubicación de Menu Builder (<code>primary</code>, <code>footer</code>, <code>sidebar</code> o <code>mobile</code>) en el desplegable para reemplazarla, o deja <strong>— No reemplazar —</strong> para mantener el menú original del tema.</li>
  <li>Haz clic en <strong>Guardar menú</strong>.</li>
</ol>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Si tu tema no registra ubicaciones de menú, la tabla muestra un aviso. En ese caso, tu tema no llama a <code>register_nav_menus()</code> y debes usar el <a href="shortcode.html">shortcode</a> o el <a href="gutenberg.html">bloque de Gutenberg</a> en su lugar.</p></div>
</div>

<h2 id="notas">Notas y limitaciones</h2>
<ul>
  <li>Una ubicación de Menu Builder marcada como <strong>⚠ sin elementos</strong> no tiene elementos de menú asignados. Seleccionarla simplemente mantendrá el menú original del tema en lugar de renderizar uno vacío.</li>
  <li>El desplegable muestra cuántos elementos tiene cada ubicación, para que puedas confirmar que estás mapeando a la correcta.</li>
  <li>Esta herramienta está pensada para temas clásicos basados en PHP. Para los temas basados en bloques (FSE), edita la parte de plantilla del encabezado y usa el <a href="gutenberg.html">bloque de Gutenberg</a>.</li>
</ul>

<div class="page-nav">
  <a href="footer.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Constructor de pie de página</span></a>
  <a class="next" href="import-export.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Importar / Exportar</span></a>
</div>
`,

  'import-export.html': `
<p class="breadcrumb">Herramientas</p>
<h1>Importar / Exportar</h1>
<p class="lead">Guarda tu configuración completa de menú en un único archivo JSON, o transfiérela entre sitios — por ejemplo, de un entorno de pruebas a producción.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#exportar">Exportar la configuración</a>
  <a href="#importar">Importar una configuración</a>
  <a href="#contenido">Qué incluye el archivo</a>
</div>

<h2 id="exportar">Exportar la configuración</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Importar / Exportar</strong>.</li>
  <li>Haz clic en <strong>Exportar</strong>.</li>
  <li>Se descargará un archivo JSON en tu ordenador. Guárdalo en un lugar seguro como copia de seguridad.</li>
</ol>

<h2 id="importar">Importar una configuración</h2>
<ol class="steps">
  <li>Ve a <strong>Menu Builder → Importar / Exportar</strong> en el sitio de destino.</li>
  <li>Haz clic en <strong>Elegir archivo</strong> y selecciona un archivo JSON exportado anteriormente.</li>
  <li>La configuración se aplica y la página se recarga con los ajustes importados.</li>
</ol>

<div class="callout warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><p>Importar <strong>sobreescribe</strong> los elementos del menú y la configuración de estilo actuales en el sitio de destino. Si quieres conservar la configuración existente, expórtala primero como copia de seguridad antes de importar.</p></div>
</div>

<h2 id="contenido">Qué incluye el archivo</h2>
<p>El JSON exportado contiene las dos partes principales de tu configuración:</p>
<ul>
  <li><strong>Elementos del menú</strong> — toda la estructura del menú, incluyendo etiquetas, iconos, insignias, reglas de visibilidad y columnas del megamenú.</li>
  <li><strong>Estilo</strong> — todos los ajustes de apariencia: los valores del tema activo, colores, tipografía, diseño, comportamiento móvil y activaciones de funcionalidades (anuncio, búsqueda, carrito, etc.).</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body"><p>El archivo es JSON simple, por lo que puedes guardarlo en un sistema de control de versiones junto a tu proyecto para llevar un registro de los cambios en tu menú a lo largo del tiempo.</p></div>
</div>

<div class="page-nav">
  <a href="wp-integration.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Integración WP</span></a>
  <a class="next" href="accessibility.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Accesibilidad</span></a>
</div>
`,

  'accessibility.html': `
<p class="breadcrumb">Avanzado</p>
<h1>Accesibilidad</h1>
<p class="lead">Giuliomax Menu Builder está desarrollado para cumplir con WCAG 2.2 Nivel AA. La navegación funciona completamente sin ratón, los desplegables se anuncian a los lectores de pantalla y el movimiento puede desactivarse a nivel del sistema.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#wcag">Conformidad WCAG 2.2 AA</a>
  <a href="#teclado">Navegación por teclado</a>
  <a href="#aria">Atributos ARIA</a>
  <a href="#foco">Gestión del foco</a>
  <a href="#movimiento">Movimiento reducido</a>
  <a href="#testing">Verificar tu menú</a>
</div>

<h2 id="wcag">Conformidad WCAG 2.2 AA</h2>
<p>El plugin se prueba frente a los siguientes criterios de éxito de WCAG 2.2 relevantes para componentes de navegación:</p>
<div class="table-wrap">
  <table>
    <thead><tr><th>Criterio</th><th>Nivel</th><th>Cómo se cumple</th></tr></thead>
    <tbody>
      <tr><td>1.4.3 Contraste (mínimo)</td><td>AA</td><td>Todos los temas integrados se prueban para alcanzar una relación de contraste de 4,5:1 para el texto.</td></tr>
      <tr><td>2.1.1 Teclado</td><td>A</td><td>Toda la funcionalidad es operable únicamente con teclado.</td></tr>
      <tr><td>2.1.2 Sin trampa de teclado</td><td>A</td><td>El foco siempre puede salir del menú sin usar un dispositivo señalador.</td></tr>
      <tr><td>2.4.3 Orden del foco</td><td>A</td><td>El orden del foco sigue el orden de lectura visual del menú.</td></tr>
      <tr><td>2.4.7 Foco visible</td><td>AA</td><td>Se muestra un indicador de foco visible en cada elemento interactivo.</td></tr>
      <tr><td>2.4.11 Apariencia del foco</td><td>AA</td><td>Los indicadores de foco cumplen los requisitos mínimos de tamaño y contraste (nuevo en WCAG 2.2).</td></tr>
      <tr><td>4.1.2 Nombre, rol, valor</td><td>A</td><td>Todos los elementos interactivos tienen un nombre accesible y el rol ARIA correcto.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="teclado">Navegación por teclado</h2>
<div class="table-wrap">
  <table>
    <thead><tr><th>Tecla</th><th>Acción</th></tr></thead>
    <tbody>
      <tr><td><kbd>Tab</kbd></td><td>Mover el foco al siguiente elemento del menú o elemento interactivo.</td></tr>
      <tr><td><kbd>Shift + Tab</kbd></td><td>Mover el foco al elemento anterior.</td></tr>
      <tr><td><kbd>Enter</kbd> / <kbd>Espacio</kbd></td><td>Activar un enlace, o abrir / cerrar un desplegable.</td></tr>
      <tr><td><kbd>↓</kbd> / <kbd>↑</kbd></td><td>Mover el foco por los elementos dentro de un desplegable o panel de megamenú abierto.</td></tr>
      <tr><td><kbd>→</kbd> / <kbd>←</kbd></td><td>Moverse entre elementos de nivel superior.</td></tr>
      <tr><td><kbd>Escape</kbd></td><td>Cerrar el desplegable o panel de megamenú actual y devolver el foco al elemento padre.</td></tr>
      <tr><td><kbd>Inicio</kbd> / <kbd>Fin</kbd></td><td>Saltar al primer / último elemento en una lista desplegable.</td></tr>
    </tbody>
  </table>
</div>

<h2 id="aria">Atributos ARIA</h2>
<p>El plugin añade automáticamente los siguientes atributos ARIA al marcado renderizado:</p>
<ul>
  <li><code>role="navigation"</code> y <code>aria-label</code> en el elemento <code>&lt;nav&gt;</code> (la etiqueta corresponde al nombre del menú en WordPress).</li>
  <li><code>aria-haspopup="true"</code> y <code>aria-expanded</code> en los elementos de nivel superior que tienen un desplegable o megamenú.</li>
  <li><code>aria-controls</code> vinculando el botón disparador con su panel.</li>
  <li><code>role="menu"</code> y <code>role="menuitem"</code> dentro de los desplegables.</li>
  <li><code>aria-current="page"</code> en el elemento correspondiente a la página actual.</li>
</ul>
<p>No necesitas configurar nada de esto — se aplica automáticamente en función de la estructura del menú.</p>

<h2 id="foco">Gestión del foco</h2>
<ul>
  <li>Cuando se abre un desplegable, el foco se mueve al primer elemento dentro de él.</li>
  <li>Cuando se cierra un desplegable (con Escape o al mover el foco fuera), el foco vuelve al elemento que lo activó.</li>
  <li>El overlay del menú móvil atrapa el foco dentro mientras está abierto (el foco no puede tabular fuera del panel). Al cerrar el overlay, el foco regresa al botón hamburguesa.</li>
</ul>

<h2 id="movimiento">Movimiento reducido</h2>
<p>Todas las transiciones y animaciones respetan la media query CSS <code>prefers-reduced-motion: reduce</code>. Cuando el usuario ha activado "Reducir movimiento" en la configuración de accesibilidad de su sistema operativo:</p>
<ul>
  <li>Las animaciones de deslizamiento/fundido de los desplegables se reemplazan por aparición/desaparición instantánea.</li>
  <li>Las transiciones de apertura/cierre del menú móvil son instantáneas.</li>
  <li>La animación de entrada de la barra de anuncios se desactiva.</li>
  <li>Las animaciones de entrada en los elementos del menú se desactivan.</li>
</ul>

<h2 id="testing">Verificar tu menú</h2>
<p>Tras configurar el menú, usa las siguientes herramientas para verificar la accesibilidad:</p>
<ul>
  <li><strong>Solo teclado</strong> — desconecta el ratón y navega por todo el menú usando únicamente Tab, teclas de flecha, Enter y Escape.</li>
  <li><strong>axe DevTools</strong> — una extensión de navegador gratuita que ejecuta comprobaciones automáticas de WCAG en la página en vivo.</li>
  <li><strong>NVDA / VoiceOver</strong> — lectores de pantalla para verificar que los estados de los desplegables y las etiquetas se anuncian correctamente.</li>
  <li><strong>Colour Contrast Analyser</strong> — comprueba que tus personalizaciones de color siguen cumpliendo el ratio mínimo de 4,5:1.</li>
</ul>

<div class="page-nav">
  <a href="import-export.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Importar / Exportar</span></a>
  <a class="next" href="multilingual.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Multilingüe</span></a>
</div>
`,

  'multilingual.html': `
<p class="breadcrumb">Avanzado</p>
<h1>Multilingüe</h1>
<p class="lead">Giuliomax Menu Builder tiene soporte integrado para sitios multilingües. Cuando WPML, Polylang, TranslatePress o Multilingual Press está activo, el plugin detecta los idiomas disponibles y te permite asignar una etiqueta diferente a cada elemento del menú por idioma.</p>
<div class="on-this-page">
  <strong>En esta página</strong>
  <a href="#como">Cómo funciona</a>
  <a href="#configurar">Configurar etiquetas por idioma</a>
  <a href="#plugins">Plugins compatibles</a>
  <a href="#rtl">Idiomas RTL</a>
  <a href="#strings">Traducir las cadenas del plugin</a>
</div>

<h2 id="como">Cómo funciona</h2>
<p>Cuando hay un plugin multilingüe compatible activo, <strong>Menu Builder</strong> detecta automáticamente la lista de idiomas disponibles. En la sección <strong>Multilingüe</strong> del panel de administración puedes ver los idiomas detectados.</p>
<p>Cada elemento del menú en <strong>Menu Builder → Estructura del menú</strong> obtiene un campo de etiqueta independiente para cada idioma detectado. El JavaScript del frontend lee el idioma activo del visitante y muestra la etiqueta correcta, sin recargar la página ni necesitar un menú separado.</p>

<div class="callout note">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body"><p>Si no hay una etiqueta configurada para el idioma del visitante, el plugin usa la etiqueta por defecto como respaldo.</p></div>
</div>

<h2 id="configurar">Configurar etiquetas por idioma</h2>
<ol class="steps">
  <li>Instala y activa un plugin multilingüe compatible (ver lista abajo).</li>
  <li>Abre <strong>Menu Builder</strong> en el administrador de WordPress.</li>
  <li>Haz clic en cualquier elemento del menú en la <strong>Estructura del menú</strong> para desplegarlo.</li>
  <li>Verás un campo de etiqueta para cada idioma detectado. Rellena la etiqueta traducida para cada idioma.</li>
  <li>Haz clic en <strong>Guardar menú</strong>.</li>
</ol>

<h2 id="plugins">Plugins multilingües compatibles</h2>
<p>El plugin detecta automáticamente los idiomas de estos plugins:</p>
<ul>
  <li><strong>WPML</strong> — detectado mediante <code>ICL_SITEPRESS_VERSION</code></li>
  <li><strong>Polylang</strong> — detectado mediante <code>pll_languages_list()</code></li>
  <li><strong>TranslatePress</strong> — detectado mediante la clase <code>TRP_Translate_Press</code></li>
  <li><strong>Multilingual Press</strong> — detectado mediante <code>mlp_get_available_languages()</code></li>
</ul>
<p>Si no hay ningún plugin multilingüe activo, el plugin usa el idioma predeterminado del sitio.</p>

<h2 id="rtl">Idiomas RTL (árabe, hebreo, persa, etc.)</h2>
<p>El plugin incluye soporte completo para RTL (derecha a izquierda). Cuando WordPress detecta que el idioma activo es RTL (mediante la función <code>is_rtl()</code>), MenuX activa automáticamente:</p>
<ul>
  <li>El diseño del menú en espejo (los elementos fluyen de derecha a izquierda).</li>
  <li>Posiciones de desplegable invertidas (los paneles se abren a la izquierda en lugar de a la derecha).</li>
  <li>Dirección del cajón invertida (se desliza desde la derecha).</li>
  <li>Posiciones de iconos invertidas (icono del carrito, icono de búsqueda).</li>
</ul>
<p>No se requiere ninguna configuración — el modo RTL se activa automáticamente según la configuración de idioma de WordPress.</p>

<h2 id="strings">Traducir las cadenas de interfaz del plugin</h2>
<p>Las cadenas de interfaz del propio plugin (p. ej. la etiqueta "Cerrar" del botón del menú móvil) están listas para traducirse mediante el sistema estándar de archivos <code>.po</code> / <code>.mo</code> de WordPress.</p>
<p>El text domain del plugin es <code>giuliomax-menu-builder</code>. Para añadir una traducción:</p>
<ol class="steps">
  <li>Descarga el archivo de plantilla <code>.pot</code> desde la carpeta <code>/languages</code> del plugin.</li>
  <li>Ábrelo en <a href="https://poedit.net/" target="_blank">Poedit</a> o cualquier editor de <code>.po</code>.</li>
  <li>Guarda tu traducción como <code>giuliomax-menu-builder-{locale}.po</code> (p. ej. <code>giuliomax-menu-builder-es_ES.po</code>) y compílalo a <code>.mo</code>.</li>
  <li>Sube ambos archivos a <code>/wp-content/languages/plugins/</code>.</li>
</ol>

<div class="page-nav">
  <a href="accessibility.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Accesibilidad</span></a>
  <a class="next" href="faq.html"><span class="nav-dir">Siguiente →</span><span class="nav-title">Preguntas frecuentes</span></a>
</div>
`,

  'faq.html': `
<p class="breadcrumb">Avanzado</p>
<h1>Preguntas frecuentes</h1>
<p class="lead">Respuestas a las preguntas más habituales sobre Giuliomax Menu Builder.</p>

<h2>General</h2>

<h3>¿El plugin es realmente gratuito? ¿Hay una versión Pro?</h3>
<p>Sí, completamente gratuito. No existe versión Pro, ni complementos de pago, ni funcionalidades bloqueadas tras un muro de pago. Todo lo descrito en esta documentación está disponible desde el primer día, sin coste alguno.</p>

<h3>¿Dónde está el código fuente del plugin?</h3>
<p>El plugin es de código abierto. El repositorio está en <a href="https://github.com/Giulio001/menux-free-version" target="_blank">github.com/Giulio001/menux-free-version</a>. Se aceptan informes de errores y pull requests.</p>

<h3>¿Funciona con cualquier tema de WordPress?</h3>
<p>Sí. El plugin renderiza su propio marcado y estilos de forma independiente al tema activo. La única consideración específica del tema es <em>dónde</em> colocas el menú: en los temas clásicos usas el shortcode o un widget; en los temas FSE usas el bloque de Gutenberg en el Editor del sitio.</p>

<h3>¿Ralentizará mi sitio?</h3>
<p>No. El plugin solo carga el CSS y JavaScript necesarios para las funcionalidades que hayas activado. Si no usas el temporizador de cuenta regresiva, ese script no se carga. Los assets están minificados y se sirven desde tu servidor (sin llamadas a CDN de terceros).</p>

<h2>Instalación y compatibilidad</h2>

<h3>¿Qué versión de WordPress necesito?</h3>
<p>WordPress 5.8 o superior. Para la mejor experiencia de Full Site Editing (FSE) con el bloque de Gutenberg, se recomienda WordPress 6.0 o superior.</p>

<h3>¿Funciona con constructores de páginas (Elementor, Divi, Beaver Builder)?</h3>
<p>Sí, mediante el shortcode <code>[menux]</code>. En Elementor, usa el widget <em>Shortcode</em> y pega <code>[menux]</code>. En Divi, usa el módulo <em>Código</em>. En Beaver Builder, usa el módulo <em>HTML</em>.</p>

<h3>¿Entra en conflicto con otros plugins de menú?</h3>
<p>Puede coexistir con otros plugins de menú siempre que no se apliquen ambos a la misma ubicación de menú. Si usabas otro plugin antes (p. ej. Max Mega Menu, UberMenu), desactívalo antes de activar Giuliomax Menu Builder para evitar conflictos de estilos.</p>

<h3>¿Puedo usarlo en una instalación multisitio?</h3>
<p>Sí. Actívalo en toda la red para que esté disponible en todos los sitios, o actívalo sitio por sitio. La configuración se guarda por sitio, no a nivel de red.</p>

<h2>Temas y estilo</h2>

<h3>¿Puedo crear mis propios temas?</h3>
<p>Puedes personalizar profundamente cualquier tema integrado usando los controles de estilo en <strong>Menu Builder (secciones de Colores / Tipografía / Diseño)</strong>. Guardar esas personalizaciones como un "preset" con nombre (Exportar → Guardar como preset) está en la hoja de ruta para una versión futura.</p>

<h3>Mi fuente personalizada no aparece en la lista de más de 70 Google Fonts. ¿Puedo usarla?</h3>
<p>Sí. Carga tu fuente mediante tu tema, un plugin o encolándola manualmente, luego introduce el nombre de la familia de fuentes en <strong>Menu Builder → Tipografía → Familia de fuente → Personalizada</strong>. El plugin usará cualquier fuente disponible en el navegador.</p>

<h3>¿Cómo restablezco todos los cambios de estilo y vuelvo a los valores por defecto del tema?</h3>
<p>En <strong>Menu Builder (Colores / Tipografía / Diseño)</strong>, haz clic en <em>Restablecer valores por defecto del tema</em> en la parte inferior del panel. Esto restaura todos los valores a los que estableció el tema aplicado actualmente.</p>

<h2>Megamenú</h2>

<h3>El panel del megamenú se corta por el lado derecho de la pantalla. ¿Cómo lo soluciono?</h3>
<p>Establece el ancho del panel en <strong>Ancho completo</strong> en <strong>Menu Builder → Megamenú → Ancho del panel</strong>. Si necesitas un panel más estrecho, comprueba que el CSS del contenedor de tu sitio no aplique <code>overflow: hidden</code> a un elemento ancestro del menú.</p>

<h3>¿Puedo poner un formulario de contacto o un producto de WooCommerce en una columna del megamenú?</h3>
<p>Sí — usa el tipo de contenido de columna <strong>Shortcode</strong> y pega cualquier shortcode o HTML. Por ejemplo: <code>[contact-form-7 id="123"]</code> o un shortcode de producto de WooCommerce.</p>

<h2>Móvil</h2>

<h3>El menú de escritorio y el menú móvil están visibles al mismo tiempo. ¿Cómo lo soluciono?</h3>
<p>Normalmente significa que otra regla CSS está sobrescribiendo los estilos del punto de corte del plugin. Abre las DevTools del navegador, inspecciona el contenedor del menú y busca una propiedad <code>display</code> proveniente de tu tema. Añade una regla CSS más específica a la hoja de estilos de tu tema, o ajusta el valor del punto de corte en <strong>Menu Builder → Móvil</strong>.</p>

<h2>WooCommerce</h2>

<h3>El contador del carrito no se actualiza sin recargar la página.</h3>
<p>Asegúrate de que tu plugin de caché (si tienes uno) no está almacenando en caché las solicitudes AJAX de WooCommerce. La mayoría de los plugins de caché tienen un modo compatible con WooCommerce o excluyen automáticamente las solicitudes de fragmentos del carrito — consulta la documentación de tu plugin de caché.</p>

<h2>Obtener ayuda</h2>
<p>Si tu pregunta no aparece aquí:</p>
<ul>
  <li>Abre un issue en <a href="https://github.com/Giulio001/menux-free-version/issues" target="_blank">GitHub</a>.</li>
  <li>Deja un hilo en el <a href="https://wordpress.org/plugins/giuliomax-menu-builder/#support" target="_blank">foro de soporte de WordPress.org</a>.</li>
</ul>

<div class="page-nav">
  <a href="multilingual.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Multilingüe</span></a>
  <span></span>
</div>
`,
};
