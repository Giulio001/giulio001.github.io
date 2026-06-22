/* Traduções em Português (Brasil) — Giuliomax Menu Builder Docs */
window.MENUX_PT = {

"index.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Primeiros passos › Introdução</nav>
<h1>Giuliomax Menu Builder</h1>
<p>Bem-vindo à documentação oficial do <strong>Giuliomax Menu Builder v3.9.0</strong> — o plugin de navegação mais completo para WordPress. Com ele você cria menus responsivos, megamenus, barras de avisos, integrações com WooCommerce e muito mais, sem escrever uma linha de código.</p>

<h2 id="o-que-e">O que é o Giuliomax Menu Builder?</h2>
<p>O Giuliomax Menu Builder substitui o sistema de menus padrão do WordPress por uma solução moderna e altamente configurável. Você controla tudo pelo painel de administração: cores, fontes, animações, regras de visibilidade e comportamento responsivo.</p>
<ul>
  <li><strong>Megamenus</strong> com colunas, imagens e HTML personalizado</li>
  <li><strong>Barra de avisos</strong> fixável no topo da página</li>
  <li><strong>Integração com WooCommerce</strong>: carrinho dinâmico no menu</li>
  <li><strong>Busca</strong> inline ou em overlay diretamente no menu</li>
  <li><strong>Badges e pontos</strong> para destacar itens</li>
  <li><strong>Footer Builder</strong> integrado ao mesmo painel</li>
  <li>Suporte completo a <strong>acessibilidade WCAG 2.1</strong></li>
  <li>Compatível com <strong>WPML, Polylang e TranslatePress</strong></li>
</ul>

<h2 id="requisitos">Requisitos</h2>
<ul>
  <li>WordPress 6.0 ou superior</li>
  <li>PHP 7.4 ou superior</li>
  <li>WooCommerce 6.0+ (opcional, apenas para o carrinho)</li>
</ul>

<h2 id="como-usar-esta-documentacao">Como usar esta documentação</h2>
<p>Use o menu lateral para navegar entre os tópicos. Se você está instalando o plugin pela primeira vez, comece pela seção <a href="installation.html">Instalação</a> e depois siga o guia do <a href="shortcode.html">Shortcode [menux]</a> ou do <a href="gutenberg.html">Bloco Gutenberg</a>.</p>

<div class="page-nav">
  <span></span>
  <a class="next" href="installation.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Instalação</span></a>
</div>
`,

"installation.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Primeiros passos › Instalação</nav>
<h1>Instalação</h1>
<p>O Giuliomax Menu Builder pode ser instalado diretamente pelo painel do WordPress ou via upload manual do arquivo ZIP.</p>

<h2 id="via-painel">Instalação pelo painel do WordPress</h2>
<ol>
  <li>Acesse <strong>Plugins › Adicionar novo</strong> no painel de administração.</li>
  <li>Pesquise por <strong>Giuliomax Menu Builder</strong> na caixa de busca.</li>
  <li>Clique em <strong>Instalar agora</strong> e, em seguida, em <strong>Ativar</strong>.</li>
  <li>O plugin estará disponível no menu lateral em <strong>Giuliomax</strong>.</li>
</ol>

<h2 id="via-upload">Instalação via upload manual</h2>
<ol>
  <li>Faça o download do arquivo <code>.zip</code> do plugin.</li>
  <li>No painel, acesse <strong>Plugins › Adicionar novo › Enviar plugin</strong>.</li>
  <li>Selecione o arquivo ZIP e clique em <strong>Instalar agora</strong>.</li>
  <li>Após a instalação, clique em <strong>Ativar plugin</strong>.</li>
</ol>

<h2 id="via-ftp">Instalação via FTP</h2>
<ol>
  <li>Descompacte o arquivo ZIP na sua máquina.</li>
  <li>Envie a pasta <code>giuliomax-menu-builder</code> para <code>/wp-content/plugins/</code> via FTP ou SFTP.</li>
  <li>No painel, acesse <strong>Plugins › Plugins instalados</strong> e ative o plugin.</li>
</ol>

<h2 id="primeiro-acesso">Primeiro acesso</h2>
<p>Após ativar o plugin, você verá o item <strong>Giuliomax</strong> no menu lateral do WordPress. Acesse <strong>Giuliomax › Configurações</strong> para configurar o comportamento geral e, em seguida, vá a <strong>Weergave › Menu's</strong> para criar ou editar seus menus.</p>

<h2 id="atualizacoes">Atualizações</h2>
<p>Novas versões são distribuídas pelo sistema de atualizações do WordPress. Você receberá uma notificação em <strong>Painel › Atualizações</strong> quando uma nova versão estiver disponível. Antes de atualizar em produção, recomendamos testar em um ambiente de homologação.</p>

<div class="page-nav">
  <a href="index.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Introdução</span></a>
  <a class="next" href="shortcode.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Shortcode [menux]</span></a>
</div>
`,

"shortcode.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Usando o plugin › Shortcode [menux]</nav>
<h1>Shortcode [menux]</h1>
<p>O shortcode <code>[menux]</code> permite inserir o menu em qualquer página, post, widget ou template que aceite shortcodes.</p>

<h2 id="uso-basico">Uso básico</h2>
<pre><code>[menux id="123"]</code></pre>
<p>Substitua <code>123</code> pelo ID do menu criado em <strong>Aparência › Menus</strong>. Para encontrar o ID, edite o menu e observe o número na URL do painel (<code>menu=123</code>).</p>

<h2 id="parametros">Parâmetros disponíveis</h2>
<table>
  <thead><tr><th>Parâmetro</th><th>Padrão</th><th>Descrição</th></tr></thead>
  <tbody>
    <tr><td><code>id</code></td><td>—</td><td>ID do menu (obrigatório)</td></tr>
    <tr><td><code>layout</code></td><td><code>horizontal</code></td><td><code>horizontal</code> ou <code>vertical</code></td></tr>
    <tr><td><code>sticky</code></td><td><code>false</code></td><td><code>true</code> para fixar o menu no scroll</td></tr>
    <tr><td><code>theme</code></td><td><code>light</code></td><td><code>light</code>, <code>dark</code> ou slug de tema personalizado</td></tr>
    <tr><td><code>mobile_breakpoint</code></td><td><code>768</code></td><td>Ponto de quebra em pixels para o menu mobile</td></tr>
    <tr><td><code>logo</code></td><td>—</td><td>ID de mídia ou URL da imagem do logotipo</td></tr>
    <tr><td><code>search</code></td><td><code>false</code></td><td><code>true</code> para exibir a barra de busca</td></tr>
    <tr><td><code>cart</code></td><td><code>false</code></td><td><code>true</code> para exibir o ícone do carrinho WooCommerce</td></tr>
  </tbody>
</table>

<h2 id="exemplos">Exemplos</h2>
<pre><code>[menux id="10" sticky="true" theme="dark"]</code></pre>
<pre><code>[menux id="10" layout="vertical" search="true" cart="true"]</code></pre>

<h2 id="onde-usar">Onde usar</h2>
<ul>
  <li>Diretamente no editor de páginas ou posts</li>
  <li>Em widgets de texto ou HTML</li>
  <li>No arquivo <code>header.php</code> do tema via <code>&lt;?php echo do_shortcode('[menux id="10"]'); ?&gt;</code></li>
  <li>Em templates de construtores de página (Elementor, Divi, WPBakery)</li>
</ul>

<div class="page-nav">
  <a href="installation.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Instalação</span></a>
  <a class="next" href="gutenberg.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Bloco Gutenberg</span></a>
</div>
`,

"gutenberg.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Usando o plugin › Bloco Gutenberg</nav>
<h1>Bloco Gutenberg</h1>
<p>O Giuliomax Menu Builder oferece um bloco nativo para o editor de blocos do WordPress (Gutenberg), permitindo inserir e configurar o menu diretamente no editor visual.</p>

<h2 id="inserindo-o-bloco">Inserindo o bloco</h2>
<ol>
  <li>Abra o editor de um post ou página.</li>
  <li>Clique no botão <strong>+</strong> para adicionar um bloco.</li>
  <li>Pesquise por <strong>Giuliomax Menu</strong> e selecione o bloco.</li>
  <li>O bloco será inserido com um seletor de menu na barra lateral direita.</li>
</ol>

<h2 id="configuracoes-do-bloco">Configurações do bloco</h2>
<p>Com o bloco selecionado, o painel lateral do editor exibe as seguintes opções:</p>
<ul>
  <li><strong>Menu</strong>: selecione o menu criado em <strong>Aparência › Menus</strong>.</li>
  <li><strong>Layout</strong>: horizontal ou vertical.</li>
  <li><strong>Tema</strong>: claro, escuro ou tema personalizado.</li>
  <li><strong>Menu fixo (sticky)</strong>: ativa ou desativa a navegação fixa no scroll.</li>
  <li><strong>Ponto de quebra mobile</strong>: define em quantos pixels o menu muda para a versão mobile.</li>
  <li><strong>Exibir busca</strong>: mostra a barra de busca integrada.</li>
  <li><strong>Exibir carrinho</strong>: mostra o ícone do carrinho WooCommerce.</li>
</ul>

<h2 id="site-editor">Uso no Site Editor (FSE)</h2>
<p>O bloco é totalmente compatível com o Site Editor (Full Site Editing). Para usá-lo em um cabeçalho global:</p>
<ol>
  <li>Acesse <strong>Aparência › Editor</strong>.</li>
  <li>Edite o template de cabeçalho (<em>Header</em>) ou crie um novo.</li>
  <li>Adicione o bloco <strong>Giuliomax Menu</strong> e configure as opções.</li>
  <li>Salve o template — o menu será exibido em todas as páginas que usam esse cabeçalho.</li>
</ol>

<h2 id="preview">Visualização em tempo real</h2>
<p>Todas as alterações feitas no painel lateral do bloco são refletidas imediatamente no preview do editor, sem a necessidade de salvar ou recarregar a página.</p>

<div class="page-nav">
  <a href="shortcode.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Shortcode [menux]</span></a>
  <a class="next" href="themes.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Temas e categorias</span></a>
</div>
`,

"themes.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Temas e categorias</nav>
<h1>Temas e categorias</h1>
<p>O sistema de temas do Giuliomax Menu Builder permite personalizar completamente a aparência do menu sem precisar escrever CSS. Você pode usar um dos temas pré-definidos ou criar seus próprios temas reutilizáveis.</p>

<h2 id="temas-predefinidos">Temas pré-definidos</h2>
<ul>
  <li><strong>Light</strong>: fundo branco, texto escuro — ideal para a maioria dos sites.</li>
  <li><strong>Dark</strong>: fundo escuro, texto claro — ótimo para sites com design escuro.</li>
  <li><strong>Transparent</strong>: fundo transparente, útil sobre imagens ou vídeos de destaque.</li>
  <li><strong>Glass</strong>: efeito de vidro fosco com <code>backdrop-filter: blur</code>.</li>
</ul>

<h2 id="criar-tema-personalizado">Criar um tema personalizado</h2>
<ol>
  <li>Acesse <strong>Giuliomax › Temas</strong> no painel.</li>
  <li>Clique em <strong>Novo tema</strong> e dê um nome a ele.</li>
  <li>Defina as cores de fundo, texto, hover, acento e borda usando os seletores de cor.</li>
  <li>Configure a fonte, o espaçamento entre itens e o raio das bordas.</li>
  <li>Salve o tema — ele ficará disponível no seletor de temas do shortcode e do bloco.</li>
</ol>

<h2 id="categorias">Categorias de menu</h2>
<p>As categorias agrupam visualmente os itens do menu no painel de edição. Elas não afetam a exibição no frontend, mas facilitam a organização de menus grandes.</p>
<ul>
  <li>Para criar uma categoria, acesse <strong>Giuliomax › Categorias</strong>.</li>
  <li>Arraste os itens do menu para a categoria desejada no editor de menus.</li>
  <li>Use cores diferentes por categoria para identificação rápida no painel.</li>
</ul>

<h2 id="dark-mode">Modo escuro automático</h2>
<p>O plugin detecta a preferência do sistema operacional do usuário via <code>prefers-color-scheme: dark</code>. Se o tema configurado tiver uma variante escura definida, ela será aplicada automaticamente.</p>

<div class="page-nav">
  <a href="gutenberg.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Bloco Gutenberg</span></a>
  <a class="next" href="logo.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Logotipo</span></a>
</div>
`,

"logo.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Logotipo</nav>
<h1>Logotipo</h1>
<p>O Giuliomax Menu Builder suporta logotipo integrado diretamente no menu, com controle independente de tamanho, link e versão alternativa para o modo escuro.</p>

<h2 id="adicionar-logo">Adicionar um logotipo</h2>
<ol>
  <li>No shortcode, use o parâmetro <code>logo="ID_DA_MIDIA"</code> ou <code>logo="URL_DA_IMAGEM"</code>.</li>
  <li>No bloco Gutenberg, acesse o painel lateral e clique em <strong>Selecionar logotipo</strong>.</li>
  <li>No painel de configurações em <strong>Giuliomax › Geral</strong>, defina o logotipo padrão que será usado quando nenhum for especificado.</li>
</ol>

<h2 id="tamanho">Tamanho e proporções</h2>
<p>O tamanho do logotipo é controlado via CSS ou pelas opções do painel:</p>
<ul>
  <li><strong>Largura máxima</strong>: define o tamanho máximo em pixels.</li>
  <li><strong>Altura máxima</strong>: útil para manter logos horizontais e verticais proporcionais.</li>
  <li>Em telas menores, o logotipo é redimensionado automaticamente para caber no cabeçalho mobile.</li>
</ul>

<h2 id="logo-dark">Logotipo para modo escuro</h2>
<p>Se o seu site usa um tema claro com versão escura, você pode definir dois logotipos diferentes:</p>
<ul>
  <li><strong>Logo padrão</strong>: exibido em temas claros.</li>
  <li><strong>Logo modo escuro</strong>: exibido automaticamente quando <code>prefers-color-scheme: dark</code> é detectado ou quando o tema escuro está ativo.</li>
</ul>

<h2 id="link-do-logo">Link do logotipo</h2>
<p>Por padrão, o logotipo linka para a página inicial do site (<code>/</code>). Você pode alterar esse link nas configurações do menu em <strong>Giuliomax › Geral › URL do logotipo</strong>.</p>

<h2 id="alt-text">Texto alternativo</h2>
<p>O atributo <code>alt</code> do logotipo é obtido automaticamente das informações da mídia no WordPress. Verifique se o campo <strong>Texto alternativo</strong> está preenchido na Biblioteca de Mídia para garantir acessibilidade adequada.</p>

<div class="page-nav">
  <a href="themes.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Temas e categorias</span></a>
  <a class="next" href="mega-menu.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Megamenu</span></a>
</div>
`,

"mega-menu.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Megamenu</nav>
<h1>Megamenu</h1>
<p>O megamenu permite criar dropdowns ricos com múltiplas colunas, imagens, ícones e HTML personalizado — muito além dos dropdowns tradicionais do WordPress.</p>

<h2 id="ativar-megamenu">Ativar o megamenu em um item</h2>
<ol>
  <li>Acesse <strong>Aparência › Menus</strong> e expanda o item de menu desejado.</li>
  <li>Marque a opção <strong>Ativar megamenu</strong> no painel de opções do item.</li>
  <li>Uma aba <strong>Conteúdo do megamenu</strong> será exibida para configuração.</li>
</ol>

<h2 id="colunas">Colunas</h2>
<p>O megamenu suporta de 1 a 6 colunas. Para cada coluna você pode definir:</p>
<ul>
  <li><strong>Título da coluna</strong>: texto de cabeçalho opcional.</li>
  <li><strong>Itens de menu</strong>: links padrão arrastados para a coluna.</li>
  <li><strong>HTML personalizado</strong>: qualquer conteúdo HTML, incluindo imagens, botões ou shortcodes.</li>
  <li><strong>Largura</strong>: porcentagem da largura total do megamenu.</li>
</ul>

<h2 id="imagem-destaque">Imagem de destaque</h2>
<p>Você pode adicionar uma imagem de destaque ao megamenu que ocupa uma coluna inteira. Isso é ideal para banners promocionais ou thumbnails de categorias.</p>

<h2 id="largura-do-megamenu">Largura do megamenu</h2>
<ul>
  <li><strong>Automática</strong>: se ajusta ao conteúdo.</li>
  <li><strong>Largura do container</strong>: ocupa a largura máxima do container do site.</li>
  <li><strong>Largura total (full-width)</strong>: ocupa 100% da largura da viewport.</li>
  <li><strong>Personalizada</strong>: define um valor fixo em pixels.</li>
</ul>

<h2 id="animacoes">Animações de abertura</h2>
<p>Escolha entre as seguintes animações de entrada para o megamenu:</p>
<ul>
  <li>Fade simples</li>
  <li>Deslizar de cima para baixo</li>
  <li>Zoom de entrada</li>
  <li>Sem animação (instantâneo)</li>
</ul>

<h2 id="mobile">Comportamento no mobile</h2>
<p>No mobile, o megamenu é convertido em um acordeão vertical. Cada coluna vira uma seção expansível que o usuário pode tocar para abrir.</p>

<div class="page-nav">
  <a href="logo.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Logotipo</span></a>
  <a class="next" href="announcement.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Barra de avisos</span></a>
</div>
`,

"announcement.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Barra de avisos</nav>
<h1>Barra de avisos</h1>
<p>A barra de avisos é uma faixa exibida acima do menu principal, ideal para comunicados, promoções, alertas ou links rápidos.</p>

<h2 id="ativar">Ativar a barra de avisos</h2>
<ol>
  <li>Acesse <strong>Giuliomax › Barra de avisos</strong> no painel.</li>
  <li>Ative a chave <strong>Exibir barra de avisos</strong>.</li>
  <li>Insira o texto ou HTML desejado no campo de conteúdo.</li>
  <li>Salve as configurações.</li>
</ol>

<h2 id="opcoes">Opções de configuração</h2>
<ul>
  <li><strong>Conteúdo</strong>: texto simples ou HTML (links, emojis, ícones).</li>
  <li><strong>Cor de fundo</strong>: cor sólida ou gradiente.</li>
  <li><strong>Cor do texto</strong>: cor do texto e dos links.</li>
  <li><strong>Botão fechar</strong>: exibe um ícone "×" para o usuário fechar a barra. A preferência é salva no <code>localStorage</code>.</li>
  <li><strong>Fixar no topo</strong>: mantém a barra visível durante o scroll.</li>
  <li><strong>Animação de entrada</strong>: deslizar de cima ou fade suave.</li>
  <li><strong>Alinhamento</strong>: esquerdo, centralizado ou direito.</li>
</ul>

<h2 id="agendamento">Agendamento</h2>
<p>É possível definir uma data de início e uma data de expiração para a barra de avisos. Após a data de expiração, ela é ocultada automaticamente sem nenhuma ação manual.</p>

<h2 id="multiplas-barras">Múltiplas barras / rotação</h2>
<p>O modo de rotação permite configurar várias mensagens que alternam automaticamente em um intervalo de tempo definido. Cada mensagem pode ter conteúdo e cor de fundo independentes.</p>

<div class="page-nav">
  <a href="mega-menu.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Megamenu</span></a>
  <a class="next" href="cart.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Carrinho WooCommerce</span></a>
</div>
`,

"cart.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Carrinho WooCommerce</nav>
<h1>Carrinho WooCommerce</h1>
<p>O Giuliomax Menu Builder integra nativamente com o WooCommerce para exibir um ícone de carrinho dinâmico diretamente no menu.</p>

<h2 id="requisitos">Requisitos</h2>
<ul>
  <li>WooCommerce 6.0 ou superior instalado e ativo.</li>
  <li>Parâmetro <code>cart="true"</code> no shortcode ou opção ativada no bloco Gutenberg.</li>
</ul>

<h2 id="funcionalidades">Funcionalidades</h2>
<ul>
  <li><strong>Contador de itens</strong>: exibe um badge com a quantidade de produtos no carrinho, atualizado via AJAX sem recarregar a página.</li>
  <li><strong>Subtotal</strong>: opção para exibir o valor total do carrinho ao lado do ícone.</li>
  <li><strong>Drawer lateral</strong>: ao clicar no ícone, abre um painel lateral (drawer) com a lista de itens do carrinho, quantidades e botão para finalizar a compra.</li>
  <li><strong>Dropdown mini-cart</strong>: alternativa ao drawer — exibe um dropdown compacto com os itens.</li>
</ul>

<h2 id="personalizacao">Personalização</h2>
<ul>
  <li><strong>Ícone do carrinho</strong>: escolha entre os ícones padrão ou faça upload de um SVG personalizado.</li>
  <li><strong>Posição</strong>: o carrinho pode ser posicionado à esquerda ou à direita dos itens de navegação.</li>
  <li><strong>Cor do badge</strong>: personalize a cor de fundo e do texto do contador.</li>
</ul>

<h2 id="sem-woocommerce">Sem WooCommerce</h2>
<p>Se o WooCommerce não estiver instalado, o ícone do carrinho é silenciosamente omitido — não há erros nem elementos vazios exibidos na página.</p>

<div class="page-nav">
  <a href="announcement.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Barra de avisos</span></a>
  <a class="next" href="search.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Busca</span></a>
</div>
`,

"search.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Busca</nav>
<h1>Busca</h1>
<p>O Giuliomax Menu Builder oferece uma barra de busca integrada ao menu com três modos de exibição e suporte a busca em tempo real.</p>

<h2 id="modos">Modos de exibição</h2>
<ul>
  <li><strong>Inline</strong>: a barra de busca é exibida diretamente na barra de navegação, ao lado dos itens de menu.</li>
  <li><strong>Ícone com expansão</strong>: exibe apenas um ícone de lupa; ao clicar, a barra se expande horizontalmente.</li>
  <li><strong>Overlay</strong>: ao clicar na lupa, uma sobreposição ocupa toda a tela com uma barra de busca centralizada.</li>
</ul>

<h2 id="ativar">Ativar a busca</h2>
<p>Use o parâmetro <code>search="true"</code> no shortcode ou ative a opção <strong>Exibir busca</strong> no painel lateral do bloco Gutenberg.</p>

<h2 id="busca-em-tempo-real">Busca em tempo real</h2>
<p>Com a busca em tempo real ativada, os resultados aparecem em um dropdown abaixo do campo enquanto o usuário digita, sem recarregar a página. Você pode configurar:</p>
<ul>
  <li><strong>Tipos de post</strong>: quais tipos de conteúdo incluir nos resultados (posts, páginas, produtos WooCommerce etc.).</li>
  <li><strong>Número máximo de resultados</strong>: quantos itens exibir no dropdown.</li>
  <li><strong>Exibir thumbnail</strong>: mostrar ou ocultar a imagem destacada nos resultados.</li>
  <li><strong>Delay</strong>: tempo em milissegundos após o usuário parar de digitar antes de disparar a busca.</li>
</ul>

<h2 id="acessibilidade">Acessibilidade</h2>
<p>O campo de busca recebe o atributo <code>role="search"</code> e o label adequado via <code>aria-label</code>. O overlay fecha ao pressionar <kbd>Esc</kbd> e o foco retorna ao botão de lupa.</p>

<div class="page-nav">
  <a href="cart.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Carrinho WooCommerce</span></a>
  <a class="next" href="badges.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Badges e pontos</span></a>
</div>
`,

"badges.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Badges e pontos</nav>
<h1>Badges e pontos</h1>
<p>Badges e pontos são marcadores visuais adicionados aos itens do menu para chamar atenção — úteis para indicar novidades, promoções, contagens ou status.</p>

<h2 id="tipos">Tipos de marcadores</h2>
<ul>
  <li><strong>Badge de texto</strong>: uma etiqueta com texto personalizado (ex.: "Novo", "Promoção", "Beta").</li>
  <li><strong>Ponto de notificação</strong>: um pequeno círculo colorido, similar às notificações de aplicativos mobile.</li>
  <li><strong>Contador numérico</strong>: exibe um número atualizado dinamicamente (útil para contagem de mensagens ou produtos).</li>
</ul>

<h2 id="adicionar-badge">Adicionar um badge a um item</h2>
<ol>
  <li>Acesse <strong>Aparência › Menus</strong> e expanda o item desejado.</li>
  <li>Localize o campo <strong>Badge</strong> nas opções do item.</li>
  <li>Selecione o tipo de badge, insira o texto (se aplicável) e escolha a cor.</li>
  <li>Salve o menu.</li>
</ol>

<h2 id="personalizacao">Personalização</h2>
<ul>
  <li><strong>Cor de fundo</strong> e <strong>cor do texto</strong> configuráveis por badge.</li>
  <li><strong>Posição</strong>: sobreposto ao canto superior direito do item ou ao lado do texto.</li>
  <li><strong>Pulsar</strong>: animação de pulso para atrair ainda mais atenção.</li>
  <li><strong>Tamanho</strong>: pequeno, médio ou grande.</li>
</ul>

<h2 id="contadores-dinamicos">Contadores dinâmicos</h2>
<p>Para integrar contadores dinâmicos (por exemplo, número de itens no carrinho ou mensagens não lidas), use o filtro PHP <code>menux_badge_count</code> para fornecer o valor via AJAX, ou atualize o conteúdo do elemento <code>.menux-badge[data-item="slug"]</code> diretamente via JavaScript.</p>

<div class="page-nav">
  <a href="search.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Busca</span></a>
  <a class="next" href="visibility.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Regras de visibilidade</span></a>
</div>
`,

"visibility.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Regras de visibilidade</nav>
<h1>Regras de visibilidade</h1>
<p>As regras de visibilidade permitem exibir ou ocultar itens do menu com base em condições como status de login, função do usuário, tipo de dispositivo ou URL da página atual.</p>

<h2 id="configurar-regra">Configurar uma regra</h2>
<ol>
  <li>Acesse <strong>Aparência › Menus</strong> e expanda o item desejado.</li>
  <li>Clique na aba <strong>Visibilidade</strong> nas opções do item.</li>
  <li>Escolha uma ou mais condições e salve.</li>
</ol>

<h2 id="condicoes">Condições disponíveis</h2>
<table>
  <thead><tr><th>Condição</th><th>Descrição</th></tr></thead>
  <tbody>
    <tr><td>Usuário logado</td><td>Exibe apenas para usuários autenticados</td></tr>
    <tr><td>Usuário não logado</td><td>Exibe apenas para visitantes anônimos</td></tr>
    <tr><td>Função do usuário</td><td>Exibe para uma ou mais funções específicas (administrador, editor, assinante…)</td></tr>
    <tr><td>Dispositivo</td><td>Exibe somente em desktop, somente em mobile, ou em ambos</td></tr>
    <tr><td>URL da página</td><td>Exibe quando a URL atual corresponde a um padrão específico</td></tr>
    <tr><td>Tipo de post</td><td>Exibe em páginas de um tipo de post específico</td></tr>
    <tr><td>Horário</td><td>Exibe entre duas datas ou horários específicos</td></tr>
  </tbody>
</table>

<h2 id="logica">Lógica AND / OR</h2>
<p>Quando múltiplas condições são definidas, você escolhe se todas devem ser verdadeiras ao mesmo tempo (<strong>E</strong>) ou se basta uma delas ser verdadeira (<strong>OU</strong>).</p>

<h2 id="preview">Pré-visualização por papel</h2>
<p>Em <strong>Giuliomax › Pré-visualização</strong>, você pode simular a visualização do menu como se fosse um usuário com uma função específica, sem precisar criar uma conta de teste.</p>

<div class="page-nav">
  <a href="badges.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Badges e pontos</span></a>
  <a class="next" href="mobile.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Menus mobile</span></a>
</div>
`,

"mobile.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Menus mobile</nav>
<h1>Menus mobile</h1>
<p>O Giuliomax Menu Builder oferece controle total sobre a experiência de navegação em dispositivos móveis, com suporte a gestos de toque, animações e layouts dedicados para telas menores.</p>

<h2 id="ponto-de-quebra">Ponto de quebra</h2>
<p>O ponto de quebra define a largura em pixels abaixo da qual o menu muda para o modo mobile. O valor padrão é <code>768px</code>, mas pode ser personalizado:</p>
<ul>
  <li>No shortcode: <code>[menux id="10" mobile_breakpoint="960"]</code></li>
  <li>No bloco Gutenberg: campo <strong>Ponto de quebra mobile</strong> no painel lateral.</li>
  <li>No painel global: <strong>Giuliomax › Configurações › Mobile</strong>.</li>
</ul>

<h2 id="botao-hamburguer">Botão hambúrguer</h2>
<p>No modo mobile, o menu é ocultado e um botão hambúrguer (☰) é exibido. Ao tocar, o menu abre em um painel deslizante ou em modo acordeão, dependendo da configuração.</p>
<ul>
  <li><strong>Ícone personalizado</strong>: substitua o ícone padrão por um SVG próprio.</li>
  <li><strong>Texto do botão</strong>: adicione um rótulo ao lado do ícone (ex.: "Menu").</li>
  <li><strong>Animação</strong>: o ícone pode animar para um "×" ao abrir o menu.</li>
</ul>

<h2 id="modos-de-abertura">Modos de abertura</h2>
<ul>
  <li><strong>Painel deslizante (off-canvas)</strong>: o menu desliza da esquerda ou da direita.</li>
  <li><strong>Acordeão inline</strong>: o menu expande abaixo do botão hambúrguer, empurrando o conteúdo da página para baixo.</li>
  <li><strong>Fullscreen overlay</strong>: o menu ocupa toda a tela com fundo semitransparente.</li>
</ul>

<h2 id="gestos">Gestos de toque</h2>
<p>No modo off-canvas, o usuário pode fechar o menu deslizando o dedo para o lado oposto à abertura. O gesto é detectado por um listener de <code>touchstart</code>/<code>touchend</code> nativo, sem dependência de bibliotecas externas.</p>

<h2 id="menu-exclusivo-mobile">Menu exclusivo para mobile</h2>
<p>Você pode configurar um menu diferente para ser exibido no mobile, independente do menu desktop. Isso é útil para simplificar a navegação em telas menores, ocultando itens secundários.</p>

<div class="page-nav">
  <a href="visibility.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Regras de visibilidade</span></a>
  <a class="next" href="layout.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Layout e efeitos</span></a>
</div>
`,

"layout.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Layout e efeitos</nav>
<h1>Layout e efeitos</h1>
<p>O Giuliomax Menu Builder oferece um conjunto abrangente de opções de layout e efeitos visuais para criar menus com identidade única.</p>

<h2 id="layouts">Layouts de menu</h2>
<ul>
  <li><strong>Horizontal</strong>: itens dispostos em linha — o layout mais comum para headers.</li>
  <li><strong>Vertical</strong>: itens empilhados em coluna — ideal para sidebars e menus laterais.</li>
  <li><strong>Centralizado</strong>: logotipo ao centro com itens distribuídos em ambos os lados.</li>
  <li><strong>Split</strong>: metade dos itens à esquerda, metade à direita, com o logotipo no centro.</li>
</ul>

<h2 id="sticky">Menu fixo (sticky)</h2>
<p>Com <code>sticky="true"</code>, o menu permanece visível no topo da janela durante o scroll. Opções adicionais:</p>
<ul>
  <li><strong>Ocultar ao rolar para baixo / exibir ao rolar para cima</strong>: comportamento estilo "smart" — libera espaço na tela durante a leitura.</li>
  <li><strong>Mudança de estilo ao fixar</strong>: o menu pode adotar um tema diferente (ex.: fundo sólido) ao ser fixado.</li>
  <li><strong>Offset</strong>: define a distância do topo a partir da qual o modo sticky é ativado.</li>
</ul>

<h2 id="separadores">Separadores</h2>
<p>Separadores visuais podem ser inseridos entre os itens do menu. Eles são configurados como itens especiais em <strong>Aparência › Menus</strong> com o tipo <strong>Separador</strong>.</p>

<h2 id="efeitos-hover">Efeitos de hover</h2>
<ul>
  <li>Sublinhado animado (desliza da esquerda, expande do centro)</li>
  <li>Fundo colorido com cantos arredondados</li>
  <li>Borda inferior colorida</li>
  <li>Sem efeito (estático)</li>
</ul>

<h2 id="animacoes-dropdown">Animações de dropdown</h2>
<p>Os submenus podem abrir com diferentes animações: fade, deslizar para baixo, zoom de entrada ou instantâneo. A duração e o timing são configuráveis via CSS ou nas opções do painel.</p>

<div class="page-nav">
  <a href="mobile.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Menus mobile</span></a>
  <a class="next" href="footer.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Footer Builder</span></a>
</div>
`,

"footer.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Funcionalidades › Footer Builder</nav>
<h1>Footer Builder</h1>
<p>O Footer Builder integrado ao Giuliomax Menu Builder permite criar rodapés estruturados em colunas, com widgets, menus de links, informações de contato e redes sociais — tudo pelo painel do WordPress.</p>

<h2 id="ativar">Ativar o Footer Builder</h2>
<ol>
  <li>Acesse <strong>Giuliomax › Footer Builder</strong> no painel.</li>
  <li>Ative a chave <strong>Usar Footer Builder</strong>.</li>
  <li>O rodapé padrão do seu tema será substituído automaticamente.</li>
</ol>

<h2 id="estrutura">Estrutura de colunas</h2>
<p>O rodapé é organizado em linhas (<em>rows</em>) e colunas. Você pode ter:</p>
<ul>
  <li>Até 3 linhas independentes (topo, meio, rodapé inferior).</li>
  <li>De 1 a 6 colunas por linha.</li>
  <li>Cada coluna recebe widgets ou conteúdo HTML.</li>
</ul>

<h2 id="widgets">Widgets suportados</h2>
<ul>
  <li><strong>Menu de links</strong>: exibe qualquer menu criado em Aparência › Menus.</li>
  <li><strong>Texto / HTML</strong>: bloco de texto rico com suporte a shortcodes.</li>
  <li><strong>Logo e descrição</strong>: exibe o logotipo do site e o tagline.</li>
  <li><strong>Redes sociais</strong>: ícones clicáveis para Instagram, Facebook, LinkedIn, X/Twitter, YouTube e outros.</li>
  <li><strong>Formulário de newsletter</strong>: campo de e-mail com integração a MailChimp, Brevo ou qualquer serviço via shortcode.</li>
  <li><strong>Informações de contato</strong>: endereço, telefone, e-mail com ícones.</li>
</ul>

<h2 id="rodape-inferior">Rodapé inferior (copyright bar)</h2>
<p>Uma barra adicional abaixo do rodapé principal pode exibir o texto de copyright, links de política de privacidade e atribuições. O conteúdo é configurado em <strong>Giuliomax › Footer Builder › Barra inferior</strong>.</p>

<h2 id="estilo">Estilo do rodapé</h2>
<p>O rodapé tem seu próprio sistema de temas, independente do menu. Defina cores de fundo, texto, links e bordas separadamente para o rodapé principal e para a barra inferior.</p>

<div class="page-nav">
  <a href="layout.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Layout e efeitos</span></a>
  <a class="next" href="wp-integration.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Integração WP</span></a>
</div>
`,

"wp-integration.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Ferramentas › Integração WP</nav>
<h1>Integração WP</h1>
<p>O Giuliomax Menu Builder foi projetado para se integrar ao ecossistema WordPress sem conflitos, respeitando os hooks, filtros e APIs nativas da plataforma.</p>

<h2 id="hooks">Hooks e filtros PHP</h2>
<p>O plugin expõe filtros que permitem personalizar o comportamento via código no <code>functions.php</code> do tema ou em um plugin auxiliar:</p>
<ul>
  <li><code>menux_menu_args</code>: modifica os argumentos passados para <code>wp_nav_menu()</code>.</li>
  <li><code>menux_item_classes</code>: adiciona ou remove classes CSS dos itens do menu.</li>
  <li><code>menux_badge_count</code>: fornece dinamicamente o valor de um contador de badge.</li>
  <li><code>menux_before_render</code> / <code>menux_after_render</code>: ações disparadas antes e depois da renderização do menu.</li>
  <li><code>menux_footer_row</code>: filtra o HTML de uma linha do Footer Builder.</li>
</ul>

<h2 id="construtores-de-pagina">Construtores de página</h2>
<p>O plugin é compatível com os principais construtores de página:</p>
<ul>
  <li><strong>Elementor</strong>: use o widget <em>Giuliomax Menu</em> disponível na aba de widgets.</li>
  <li><strong>Divi</strong>: insira o shortcode <code>[menux]</code> em um módulo de texto.</li>
  <li><strong>WPBakery</strong>: use o elemento <em>Shortcode</em> com <code>[menux id="ID"]</code>.</li>
  <li><strong>Beaver Builder</strong>: módulo HTML com o shortcode.</li>
</ul>

<h2 id="multisite">WordPress Multisite</h2>
<p>O plugin suporta instalações Multisite. Cada subsite pode ter sua própria configuração de menu independente. O plugin pode ser ativado em toda a rede ou site a site, conforme necessário.</p>

<h2 id="cache">Compatibilidade com cache</h2>
<p>O Giuliomax Menu Builder é compatível com os principais plugins de cache (WP Super Cache, W3 Total Cache, WP Rocket, LiteSpeed Cache). Os elementos dinâmicos (carrinho, contadores, regras de visibilidade por papel) usam fragmentos de cache ou carregamento via AJAX para garantir exibição correta mesmo com cache ativo.</p>

<h2 id="cdn">CDN e assets</h2>
<p>Os assets do plugin (CSS e JS) são enfileirados corretamente via <code>wp_enqueue_style</code> e <code>wp_enqueue_script</code>, respeitando as dependências e a versão. Em ambientes com CDN, os caminhos são filtrados automaticamente pelo WordPress.</p>

<div class="page-nav">
  <a href="footer.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Footer Builder</span></a>
  <a class="next" href="import-export.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Importar / Exportar</span></a>
</div>
`,

"import-export.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Ferramentas › Importar / Exportar</nav>
<h1>Importar / Exportar</h1>
<p>A função de importação e exportação permite fazer backup das configurações do plugin, migrar entre ambientes (desenvolvimento, homologação, produção) e compartilhar configurações entre sites.</p>

<h2 id="exportar">Exportar configurações</h2>
<ol>
  <li>Acesse <strong>Giuliomax › Importar / Exportar</strong>.</li>
  <li>Selecione o que deseja exportar: configurações gerais, temas personalizados, Footer Builder ou tudo.</li>
  <li>Clique em <strong>Exportar</strong> — um arquivo <code>.json</code> será baixado automaticamente.</li>
</ol>

<h2 id="importar">Importar configurações</h2>
<ol>
  <li>Acesse <strong>Giuliomax › Importar / Exportar</strong> no site de destino.</li>
  <li>Clique em <strong>Selecionar arquivo</strong> e escolha o arquivo <code>.json</code> exportado anteriormente.</li>
  <li>Escolha o modo de importação: <strong>Mesclar</strong> (preserva configurações existentes e adiciona/substitui apenas o que está no arquivo) ou <strong>Substituir tudo</strong> (apaga as configurações atuais antes de importar).</li>
  <li>Clique em <strong>Importar</strong> e aguarde a confirmação.</li>
</ol>

<h2 id="o-que-e-exportado">O que é exportado</h2>
<ul>
  <li>Todas as opções de <strong>Giuliomax › Configurações</strong></li>
  <li>Temas personalizados criados em <strong>Giuliomax › Temas</strong></li>
  <li>Configurações do <strong>Footer Builder</strong></li>
  <li>Configurações da <strong>Barra de avisos</strong></li>
</ul>
<p><strong>Nota:</strong> os menus em si (estrutura de itens) são gerenciados pelo WordPress e não estão incluídos no arquivo de exportação do plugin. Para exportar menus, use a função nativa de exportação do WordPress em <strong>Ferramentas › Exportar</strong>.</p>

<h2 id="entre-ambientes">Migração entre ambientes</h2>
<p>O fluxo recomendado para migrar de desenvolvimento para produção:</p>
<ol>
  <li>Exporte as configurações do plugin no ambiente de desenvolvimento.</li>
  <li>Use o exportador nativo do WordPress para exportar os menus e conteúdo.</li>
  <li>No ambiente de produção, importe primeiro o conteúdo via WordPress, depois as configurações do plugin.</li>
</ol>

<div class="page-nav">
  <a href="wp-integration.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Integração WP</span></a>
  <a class="next" href="accessibility.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Acessibilidade</span></a>
</div>
`,

"accessibility.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Avançado › Acessibilidade</nav>
<h1>Acessibilidade</h1>
<p>O Giuliomax Menu Builder foi desenvolvido com acessibilidade como requisito central, seguindo as diretrizes <strong>WCAG 2.1 nível AA</strong> e as práticas do <strong>WAI-ARIA Authoring Practices Guide</strong>.</p>

<h2 id="teclado">Navegação por teclado</h2>
<ul>
  <li><kbd>Tab</kbd> / <kbd>Shift+Tab</kbd>: percorre os itens do menu em ordem.</li>
  <li><kbd>Enter</kbd> / <kbd>Space</kbd>: abre submenus e aciona links.</li>
  <li><kbd>Esc</kbd>: fecha o submenu aberto e retorna o foco ao item pai.</li>
  <li><kbd>→</kbd> / <kbd>←</kbd>: navega entre itens do mesmo nível no menu horizontal.</li>
  <li><kbd>↓</kbd> / <kbd>↑</kbd>: navega entre itens dentro de um dropdown aberto.</li>
</ul>

<h2 id="aria">Atributos ARIA</h2>
<ul>
  <li><code>role="navigation"</code> e <code>aria-label</code> no elemento <code>&lt;nav&gt;</code>.</li>
  <li><code>aria-haspopup="true"</code> e <code>aria-expanded</code> nos itens com submenus.</li>
  <li><code>aria-current="page"</code> no item que corresponde à página atual.</li>
  <li><code>aria-hidden="true"</code> em elementos decorativos (ícones, separadores).</li>
  <li>Textos alternativos via <code>aria-label</code> nos botões de hambúrguer e fechar.</li>
</ul>

<h2 id="contraste">Contraste de cores</h2>
<p>Todos os temas padrão do plugin atendem à razão mínima de contraste de <strong>4,5:1</strong> para texto normal e <strong>3:1</strong> para texto grande, conforme o critério WCAG 1.4.3. Ao criar temas personalizados, use a ferramenta de verificação de contraste integrada no painel para confirmar a conformidade.</p>

<h2 id="reduced-motion">Preferência por movimento reduzido</h2>
<p>O plugin respeita automaticamente a configuração <code>prefers-reduced-motion: reduce</code> do sistema operacional do usuário:</p>
<ul>
  <li>Animações de dropdown são substituídas por exibição direta.</li>
  <li>Transições de abertura/fechamento do menu mobile são instantâneas.</li>
  <li>A animação de entrada da barra de avisos é desativada.</li>
  <li>Animações de entrada dos itens de menu são desativadas.</li>
</ul>

<h2 id="screen-readers">Leitores de tela</h2>
<p>O plugin foi testado com NVDA + Firefox, VoiceOver + Safari e JAWS + Chrome. Os estados dos submenus (expandido/recolhido) são anunciados corretamente. O foco é gerenciado de forma explícita ao abrir e fechar dropdowns e o overlay de busca.</p>

<h2 id="testar">Testando seu menu</h2>
<ul>
  <li><strong>Somente teclado</strong> — desconecte o mouse e navegue o menu inteiro via Tab, setas, Enter e Escape.</li>
  <li><strong>axe DevTools</strong> — extensão gratuita para auditorias WCAG automatizadas.</li>
  <li><strong>NVDA / VoiceOver</strong> — leitores de tela para verificar estados e labels.</li>
  <li><strong>Colour Contrast Analyser</strong> — confirme se as cores personalizadas mantêm a razão mínima de 4,5:1.</li>
</ul>

<div class="page-nav">
  <a href="import-export.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Importar / Exportar</span></a>
  <a class="next" href="multilingual.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Multilíngue</span></a>
</div>
`,

"multilingual.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Avançado › Multilíngue</nav>
<h1>Multilíngue</h1>
<p>O Giuliomax Menu Builder funciona perfeitamente com os plugins de tradução mais populares do WordPress. Você cria um menu e ele se adapta automaticamente ao idioma do visitante, sem necessidade de reconfiguração.</p>

<h2 id="wpml">WPML</h2>
<p>Com o WPML (WordPress Multilingual Plugin), você pode traduzir e exibir itens de menu separados para cada idioma.</p>
<ol>
  <li>Instale e configure o WPML normalmente.</li>
  <li>Acesse <strong>Aparência › Menus</strong> e traduza os itens pelo painel de tradução de menus do WPML.</li>
  <li>Atribua o menu traduzido à localização que o Giuliomax Menu Builder utiliza.</li>
  <li>O plugin detecta automaticamente o idioma ativo do WPML e exibe o menu correspondente.</li>
</ol>
<p><strong>Dica:</strong> use o widget de seletor de idioma do WPML e adicione-o à área de cabeçalho do seu tema para facilitar a troca de idioma pelos visitantes.</p>

<h2 id="polylang">Polylang</h2>
<p>O Polylang usa o mesmo sistema de menus do WordPress — cada idioma recebe sua própria atribuição de localização.</p>
<ol>
  <li>Crie uma versão do menu para cada idioma em <strong>Aparência › Menus</strong>.</li>
  <li>Atribua cada menu à localização correta para o idioma correspondente.</li>
  <li>O Polylang garante automaticamente que a atribuição correta esteja ativa com base no idioma visitado.</li>
  <li>O Giuliomax Menu Builder lê a localização ativa e exibe o menu correto.</li>
</ol>

<h2 id="translatepress">TranslatePress</h2>
<p>O TranslatePress traduz a página inteira, incluindo itens de menu, por meio de uma interface de tradução visual.</p>
<ol>
  <li>Instale o TranslatePress e adicione seus idiomas de destino nas configurações.</li>
  <li>Use o tradutor visual (engrenagem no frontend) para traduzir os itens de menu diretamente na página.</li>
  <li>O TranslatePress salva as traduções e as aplica em todas as páginas, inclusive nos itens do Giuliomax Menu Builder.</li>
</ol>
<p><strong>Observação:</strong> blocos HTML personalizados e conteúdo de megamenus também são traduzidos, desde que o texto esteja visível no DOM durante o processo de tradução.</p>

<h2 id="manual">Abordagem manual sem plugin</h2>
<p>Se você não usa um plugin de tradução, ainda pode oferecer menus multilíngues através da estrutura de páginas do WordPress:</p>
<ul>
  <li>Crie estruturas de menu separadas para cada idioma e atribua-as à mesma localização com código condicional no <code>functions.php</code>.</li>
  <li>Use um seletor de idioma baseado em sessão ou cookie para armazenar a preferência e carregar a estrutura de menu adequada.</li>
  <li>Aponte os itens de menu para URLs de páginas traduzidas (<code>/en/about/</code>, <code>/pt/sobre/</code>).</li>
</ul>

<h2 id="rtl">Suporte a idiomas RTL</h2>
<p>O Giuliomax Menu Builder detecta automaticamente a direção RTL (direita para esquerda) com base no atributo <code>dir="rtl"</code> no elemento <code>&lt;html&gt;</code>, definido pelo WPML ou Polylang.</p>
<ul>
  <li>Dropdowns abrem para a esquerda em vez de direita.</li>
  <li>Colunas do megamenu são exibidas em ordem invertida.</li>
  <li>O ícone do menu mobile e o botão fechar são espelhados.</li>
  <li>Margens, paddings e setas são invertidos automaticamente via propriedades lógicas do CSS.</li>
</ul>

<h2 id="boas-praticas">Boas práticas</h2>
<ul>
  <li>Teste o menu em cada idioma após a tradução para verificar se todos os labels, tooltips e títulos do megamenu estão corretos.</li>
  <li>Use tags <strong>hreflang</strong> nas suas páginas para indexação SEO correta por idioma.</li>
  <li>Garanta que o fechamento via <kbd>Esc</kbd> e a ordem de foco funcionem corretamente também em idiomas RTL — teste com um leitor de tela.</li>
  <li>Armazene labels de badges traduzidos e textos da barra de avisos no plugin de tradução, não hardcoded no HTML.</li>
</ul>

<div class="page-nav">
  <a href="accessibility.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Acessibilidade</span></a>
  <a class="next" href="faq.html"><span class="nav-dir">Próximo →</span><span class="nav-title">Perguntas frequentes</span></a>
</div>
`,

"faq.html": `
<nav class="breadcrumb"><a href="index.html">Documentação</a> › Avançado › Perguntas frequentes</nav>
<h1>Perguntas frequentes</h1>
<p>Abaixo você encontra respostas para as dúvidas mais comuns sobre o Giuliomax Menu Builder. Se a sua pergunta não está aqui, entre em contato pelo formulário de suporte no painel do WordPress.</p>

<h2 id="compatibilidade">Compatibilidade</h2>

<details>
<summary><strong>O plugin funciona com qualquer tema do WordPress?</strong></summary>
<p>O Giuliomax Menu Builder substitui o elemento de navegação padrão do seu tema. O plugin funciona com a maioria dos temas, mas alguns carregam estilos de navegação próprios que podem gerar conflitos. Nesses casos, adicione a classe CSS <code>.menux-nav</code> às regras de especificidade CSS do seu tema para resolver os conflitos.</p>
</details>

<details>
<summary><strong>O plugin é compatível com Gutenberg e o Site Editor?</strong></summary>
<p>Sim. Você pode adicionar o bloco Giuliomax Menu Builder pelo inseridor de blocos no editor clássico, no editor de posts e no Full Site Editor. No Site Editor, use o bloco em um template de cabeçalho.</p>
</details>

<details>
<summary><strong>Funciona com WooCommerce?</strong></summary>
<p>Sim, o widget de carrinho integra nativamente com o WooCommerce. Você precisa do WooCommerce 6.0 ou superior. A contagem de itens e o subtotal são atualizados em tempo real via AJAX sem recarregar a página.</p>
</details>

<details>
<summary><strong>Qual versão do WordPress é necessária?</strong></summary>
<p>O Giuliomax Menu Builder requer WordPress 6.0 ou superior e PHP 7.4 ou superior. Recomendamos sempre usar a versão estável mais recente do WordPress.</p>
</details>

<h2 id="problemas-de-instalacao">Problemas de instalação</h2>

<details>
<summary><strong>O shortcode não exibe nada na página.</strong></summary>
<p>Verifique se você especificou o ID correto do menu no shortcode (<code>[menux id="123"]</code>). Acesse <strong>Aparência › Menus</strong> para encontrar o ID na URL ao editar o menu. Certifique-se também de que a localização do menu está corretamente atribuída.</p>
</details>

<details>
<summary><strong>O menu está sendo exibido duas vezes.</strong></summary>
<p>Isso acontece quando o tema e o shortcode ou bloco do Giuliomax Menu Builder exibem o mesmo menu. Desative a navegação padrão do tema em <strong>Aparência › Personalizar › Menus</strong> ou remova a chamada <code>wp_nav_menu()</code> no <code>header.php</code> do seu tema.</p>
</details>

<details>
<summary><strong>Os estilos não são carregados após a ativação.</strong></summary>
<p>Limpe o cache do seu plugin de cache (ex.: WP Super Cache, W3 Total Cache) e eventuais caches de CDN. Se você usa um plugin de minificação, adicione os arquivos CSS e JS do Giuliomax à lista de exclusões para evitar conflitos.</p>
</details>

<h2 id="aparencia">Aparência e estilo</h2>

<details>
<summary><strong>Como altero a cor do menu?</strong></summary>
<p>Acesse <strong>Giuliomax › Aparência</strong> no painel. Lá você encontra seletores de cor para fundo, texto, hover, acento e mais. Todas as alterações são salvas como variáveis CSS e ficam visíveis imediatamente no frontend.</p>
</details>

<details>
<summary><strong>Posso adicionar CSS personalizado?</strong></summary>
<p>Sim. Use o campo <strong>CSS personalizado</strong> nas configurações do plugin ou o personalizador do WordPress (<strong>Aparência › Personalizar › CSS adicional</strong>). Use <code>.menux-nav</code> ou seletores mais específicos como <code>.menux-nav .menux-item</code> para seus estilos.</p>
</details>

<details>
<summary><strong>As fontes não correspondem ao meu tema.</strong></summary>
<p>O plugin herda a fonte do tema via <code>font-family: inherit</code> por padrão. Se isso não estiver acontecendo, verifique se um arquivo de reset CSS está sobrescrevendo isso. Adicione <code>.menux-nav { font-family: var(--fonte-do-tema, inherit); }</code> ao seu CSS personalizado.</p>
</details>

<h2 id="desempenho">Desempenho</h2>

<details>
<summary><strong>O plugin deixa meu site mais lento?</strong></summary>
<p>O Giuliomax Menu Builder é otimizado para desempenho. CSS e JS são entregues minificados e carregados apenas nas páginas onde o menu está ativo. O carregamento de scripts é adiado (<code>defer</code>) para não bloquear o caminho crítico de renderização.</p>
</details>

<details>
<summary><strong>Posso agrupar os assets do plugin com outros scripts?</strong></summary>
<p>Sim, via plugin de cache ou ferramenta de bundling. Garanta que a ordem de carregamento esteja correta: o CSS do Giuliomax deve vir após o reset stylesheet do seu tema, e o JS deve vir após <code>jquery</code> (se aplicável).</p>
</details>

<h2 id="licenca">Licença e atualizações</h2>

<details>
<summary><strong>Como recebo as atualizações?</strong></summary>
<p>As atualizações são distribuídas automaticamente pelo sistema de atualizações do WordPress assim que uma nova versão é disponibilizada. Acesse <strong>Painel › Atualizações</strong> para verificar manualmente.</p>
</details>

<details>
<summary><strong>Posso usar o plugin em vários sites?</strong></summary>
<p>Consulte os termos de licença incluídos na sua compra. A versão gratuita pode ser usada em sites ilimitados. Licenças premium têm restrições específicas de domínio conforme descrito no seu documento de licença.</p>
</details>

<details>
<summary><strong>O que acontece com minhas configurações se eu desativar o plugin?</strong></summary>
<p>Desativar o plugin não remove as configurações. Toda a configuração permanece no banco de dados do WordPress. Remover o plugin (via <strong>Plugins › Plugins instalados › Excluir</strong>) apaga todos os dados do plugin por padrão. Se quiser preservar os dados, exporte-os primeiro em <strong>Giuliomax › Importar / Exportar</strong>.</p>
</details>

<div class="page-nav">
  <a href="multilingual.html"><span class="nav-dir">← Anterior</span><span class="nav-title">Multilíngue</span></a>
  <span></span>
</div>
`,
};
