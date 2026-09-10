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
          <button class="cookie-settings-link" type="button" data-cookie-settings>Cookie</button>
        </div>
      </footer>`;
  }
});


// Cookie consent UI — intentionally injected globally for every page.
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-cookie-banner]')) return;
  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('data-cookie-banner', '');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <div class="cookie-banner-copy">
      <span class="cookie-kicker">Cookie</span>
      <h2>Небольшое соглашение</h2>
      <p>Мы используем только необходимые cookies для работы сайта и сохранения ваших настроек. Аналитических и рекламных cookies сейчас нет.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-settings>Подробнее</button>
      <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-accept>Согласен</button>
    </div>
    <button class="cookie-close" type="button" aria-label="Закрыть" data-cookie-dismiss>×</button>`;
  document.body.appendChild(banner);

  const modal = document.createElement('div');
  modal.className = 'cookie-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'cookie-modal-title');
  modal.hidden = true;
  modal.innerHTML = `
    <div class="cookie-modal-backdrop" data-cookie-close></div>
    <div class="cookie-modal-panel">
      <button class="cookie-modal-close" type="button" aria-label="Закрыть" data-cookie-close>×</button>
      <span class="cookie-kicker">Cookie policy</span>
      <h2 id="cookie-modal-title">Как мы используем cookies</h2>
      <div class="cookie-modal-list">
        <div><b>Необходимые</b><span>Нужны для базовой работы сайта и сохранения вашего выбора. Не используются для рекламы или отслеживания поведения.</span></div>
        <div><b>Аналитика</b><span>На текущей версии сайта сторонние аналитические cookies не подключены.</span></div>
        <div><b>Третьи стороны</b><span>Переход по ссылкам на VK и Telegram происходит на их сайтах и регулируется их собственными политиками.</span></div>
      </div>
      <div class="cookie-modal-actions">
        <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-close>Закрыть</button>
        <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-accept>Согласен</button>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const consentKey = 'goida_cookie_consent_v1';
  const setConsent = () => {
    const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `goida_cookie_consent=accepted; expires=${expires}; path=/; SameSite=Lax`;
    localStorage.setItem(consentKey, 'accepted');
    banner.classList.add('is-hidden');
    modal.hidden = true;
    document.body.classList.remove('cookie-modal-open');
  };
  const dismiss = () => {
    banner.classList.add('is-hidden');
  };
  const openModal = () => {
    modal.hidden = false;
    document.body.classList.add('cookie-modal-open');
    modal.querySelector('[data-cookie-close]')?.focus();
  };
  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove('cookie-modal-open');
  };
  document.querySelectorAll('[data-cookie-accept]').forEach(btn => btn.addEventListener('click', setConsent));
  document.querySelectorAll('[data-cookie-dismiss]').forEach(btn => btn.addEventListener('click', dismiss));
  document.querySelectorAll('[data-cookie-settings]').forEach(btn => btn.addEventListener('click', openModal));
  modal.querySelectorAll('[data-cookie-close]').forEach(btn => btn.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  try {
    const accepted = localStorage.getItem(consentKey) === 'accepted' || /(?:^|;\s*)goida_cookie_consent=accepted(?:;|$)/.test(document.cookie);
    if (accepted) banner.classList.add('is-hidden');
  } catch (_) {}
});
