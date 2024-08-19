var $header = `<header id="header">
  <div class="nav_container">
    <h1 class="logo">
      <a title="APKPure" href="https://apkpure.net/">
        <img class="m_logo" src="https://static.apkpure.com/mobile/static/imgs/logo_v1.png" height="24" width="100" alt="Logo" />
      </a>
    </h1>
    <div class="shadow" id="shadow" onclick="closeMenu()"></div>
    <div class="nav_new" id="nav_new">
      <div class="item close_item">
        <button type="button" onclick="closeMenu()">
          <i class="icon icon_close"></i>
        </button>
      </div>

      <div class="item nav_home searching-hide">
        <a href="./index.html" class="dt_nav_button">
          <i class="icon icon_home"></i>
          <span class="dt_menu_text">Home</span>
        </a>
      </div>
      <div class="item searching-hide">
        <a class="dt_nav_button nav-g" href="./game.html">
          <i class="icon icon_game"></i>
          <span class="dt_menu_text">Games</span>
        </a>
      </div>
      <div class="item searching-hide">
        <a class="dt_nav_button nav-a" href="/game.html">
          <i class="icon icon_app"></i>
          <span class="dt_menu_text">Apps</span>
        </a>
      </div>
      <div class="item many searching-hide" id="article_item">
        <a class="nav-article dt_nav_button dt-nav-parent" href="/news.html">
          <i class="icon icon_article"></i>
          <span class="dt_menu_text">News</span>
        </a>
      </div>
      <div class="item many searching-hide">
        <a class="nav-p dt_nav_button dt-nav-parent" href="/topics.html">
          <i class="icon icon_product"></i>
          <span class="dt_menu_text">Topics</span>
        </a>
      </div>
    </div>
    <button type="button" class="menu_btn" onclick="openMenu()">
      <i class="icon icon_menu"></i>
    </button>
    <a class="search_btn" title="search" href="/search-index.html">
      <i class="icon icon_search"></i>
    </a>
  </div>
</header>`;
