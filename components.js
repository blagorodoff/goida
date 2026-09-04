// ГОЙДА — единые постоянные элементы сайта.
// Редактируйте header/footer здесь один раз — они автоматически появятся на всех страницах.
document.addEventListener('DOMContentLoaded', () => {
  const isNested = /\/(services|games)\//.test(location.pathname) || /\\(services|games)\\/.test(location.pathname);
  const root = isNested ? '../' : '';
  const home = `${root}index.html`;
  const games = `${root}games.html`;

  const header = document.querySelector('[data-site-header]');
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <a href="${home}" class="logo">
          <img src="${root}img/logo.png" alt="Гойда — цифровая студия" width="120" height="auto">
        </a>
        <nav class="main-nav">
          <ul>
            <li><a href="${home}#services">Услуги</a></li>
            <li><a href="${home}#works">Работы</a></li>
            <li><a href="${games}">Игры</a></li>
            <li><a href="${home}#about">О студии</a></li>
            <li><a href="${home}#contact">Контакты</a></li>
          </ul>
        </nav>
        <button class="burger" aria-label="Меню" aria-expanded="false"><span></span></button>
      </header>
      <div class="mobile-menu">
        <ul>
          <li><a href="${home}#services">Услуги</a></li>
          <li><a href="${home}#works">Работы</a></li>
          <li><a href="${games}">Игры</a></li>
          <li><a href="${home}#about">О студии</a></li>
          <li><a href="${home}#contact">Контакты</a></li>
        </ul>
        <a href="${home}#contact" class="btn btn-primary">Обсудить проект</a>
      </div>`;
  }

  const footer = document.querySelector('[data-site-footer]');
  if (footer) {
    footer.innerHTML = `
      <footer>
        <span>© Гойда, цифровая студия</span>
        <div class="foot-links">
          <a href="${home}#services">Услуги</a>
          <a href="${games}">Игры</a>
          <a href="${home}#contact">Контакты</a>
        </div>
      </footer>`;
  }
});
