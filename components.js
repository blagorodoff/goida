// ГОЙДА — загрузчик общих HTML-шаблонов.
// URL компонентов строится от реального URL этого скрипта, а не от URL открытой страницы.
// Поэтому загрузка работает и на вложенных страницах, и если сайт размещён в подпапке домена.
(() => {

  // BEGIN GENERATED OFFLINE COMPONENT FALLBACKS
  // Сгенерировано из файлов components/*.html для работы при открытии index.html через file://.
  // На обычном HTTP/HTTPS всегда загружаются отдельные HTML-шаблоны.
  const LOCAL_COMPONENTS = {
  "header.html": "<header class=\"site-header\">\n  <a href=\"{{root}}index.html\" class=\"logo\" aria-label=\"Гойда — на главную\">\n    <img src=\"{{root}}img/logo.png\" alt=\"Гойда — цифровая студия\" class=\"logo-mark logo-mark-dark\" width=\"120\" height=\"auto\">\n    <img src=\"{{root}}img/logo2.png\" alt=\"\" aria-hidden=\"true\" class=\"logo-mark logo-mark-light\" width=\"120\" height=\"auto\">\n  </a>\n  <nav class=\"main-nav\" aria-label=\"Основная навигация\">\n    <ul>\n      <li><a href=\"{{home}}\">Главная</a></li>\n      <li><a href=\"{{root}}services/web.html\">Сайты</a></li>\n      <li><a href=\"{{root}}services/branding.html\">Дизайн</a></li>\n      <li><a href=\"{{home}}#works\">Работы</a></li>\n      <li><a href=\"{{root}}games.html\">Игры</a></li>\n      <li><a href=\"{{home}}#contact\">Связаться</a></li>\n    </ul>\n  </nav>\n  <div class=\"header-actions\">\n    <button class=\"theme-toggle\" type=\"button\" data-theme-toggle aria-label=\"Включить светлую тему\" aria-pressed=\"false\" title=\"Светлая тема\">\n      <svg class=\"theme-toggle-icon theme-toggle-sun\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42\"></path></svg>\n      <svg class=\"theme-toggle-icon theme-toggle-moon\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6a8.8 8.8 0 1 0 11.6 11.6Z\"></path></svg>\n    </button>\n    <button class=\"burger\" type=\"button\" aria-label=\"Открыть меню\" aria-expanded=\"false\"><span></span></button>\n  </div>\n</header>\n<div class=\"mobile-menu\" aria-hidden=\"true\">\n  <div class=\"mobile-menu-inner\">\n    <div class=\"mobile-menu-head\">\n      <span class=\"mobile-menu-kicker\">Навигация / GOYDA</span>\n      <span class=\"mobile-menu-line\" aria-hidden=\"true\"></span>\n    </div>\n    <ul>\n      <li><a href=\"{{root}}services/web.html\"><span>01</span>Сайты</a></li>\n      <li><a href=\"{{root}}services/branding.html\"><span>02</span>Дизайн</a></li>\n      <li><a href=\"{{home}}#works\"><span>03</span>Работы</a></li>\n      <li><a href=\"{{root}}games.html\"><span>04</span>Игры</a></li>\n      <li><a href=\"{{home}}#about\"><span>05</span>О студии</a></li>\n      <li><a href=\"{{home}}#contact\"><span>06</span>Контакты</a></li>\n    </ul>\n    <div class=\"mobile-menu-foot\">\n      <a href=\"{{home}}#contact\" class=\"btn btn-primary\">Обсудить проект</a>\n      <span>Разработка · Графика</span>\n    </div>\n  </div>\n</div>\n",
  "footer.html": "<footer class=\"site-footer\">\n  <span>© Гойда, цифровая студия</span>\n  <div class=\"foot-links\">\n    <a href=\"{{root}}services/web.html\">Сайты</a>\n    <a href=\"{{root}}services/branding.html\">Дизайн</a>\n    <a href=\"{{root}}games.html\">Игры</a>\n    <a href=\"{{home}}#contact\">Контакты</a>\n    <button class=\"cookie-settings-link\" type=\"button\" data-cookie-settings>Настройки cookies</button>\n  </div>\n</footer>\n",
  "site-portfolio.html": "<section class=\"shared-site-portfolio works-section\" aria-labelledby=\"site-portfolio-title\">\n  <div class=\"shared-portfolio-heading wrap\">\n    <div class=\"section-head\">\n      <div>\n        <span class=\"eyebrow-num\">Сайты / избранные проекты</span>\n        <h2 class=\"section-title\" id=\"site-portfolio-title\">Работы</h2>\n        <p class=\"lede works-lede\">Каждый проект — своя задача, визуальная система и удобный сценарий на любом экране.</p>\n      </div>\n      <div class=\"works-guide\" aria-hidden=\"true\">\n        <span>Листайте проекты</span><span class=\"works-guide-line\"></span><span>01 / 04</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"site-case-carousel\">\n    <div class=\"site-case-rail\" tabindex=\"0\" aria-label=\"Портфолио сайтов. Листайте по горизонтали\">\n      <article class=\"site-case-slide site-case-ermak\">\n        <div class=\"site-case-inner\">\n          <div class=\"site-case-copy\">\n            <span class=\"site-case-index\">01 <i>/ 04</i></span>\n            <span class=\"site-case-kicker\">Интернет-магазин · каталог</span>\n            <h3>ЕРМАК</h3>\n            <p>Сайт-каталог бренда одежды с карточками товаров. Мы реализовали удобную админ-панель на Python Flask для редактирования контента сайта.</p>\n            <a class=\"site-case-link\" href=\"https://ermakwear.shop\" target=\"_blank\" rel=\"noopener noreferrer\">Посмотреть сайт <span aria-hidden=\"true\">↗</span></a>\n          </div>\n          <div class=\"site-case-mockups\" aria-label=\"Версии сайта ЕРМАК для компьютера и телефона\">\n            <div class=\"site-device site-device-desktop\">\n              <div class=\"site-device-topbar\" aria-hidden=\"true\"><span></span><span></span><span></span><small>desktop</small></div>\n              <div class=\"site-case-screen\"><img src=\"{{root}}img/works/ermak-desktop.jpg\" class=\"site-case-screenshot\" alt=\"Главная страница сайта ЕРМАК на компьютере\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n            <div class=\"site-device site-device-phone\">\n              <span class=\"site-phone-speaker\" aria-hidden=\"true\"></span>\n              <div class=\"site-case-screen site-case-screen-mobile\"><img src=\"{{root}}img/works/ermak-mobile.jpg\" class=\"site-case-screenshot\" alt=\"Мобильная версия сайта ЕРМАК\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"site-case-slide site-case-kinterest\">\n        <div class=\"site-case-inner\">\n          <div class=\"site-case-copy\">\n            <span class=\"site-case-index\">02 <i>/ 04</i></span>\n            <span class=\"site-case-kicker\">Кинодневник · рекомендации</span>\n            <h3>КИНТЕРЕСТ</h3>\n            <p>Кинодневник на React с авторизацией, подборками фильмов и интеграцией с API TMDB и Google Firebase.</p>\n            <a class=\"site-case-link\" href=\"https://kinterest-phi.vercel.app\" target=\"_blank\" rel=\"noopener noreferrer\">Посмотреть сайт <span aria-hidden=\"true\">↗</span></a>\n          </div>\n          <div class=\"site-case-mockups\" aria-label=\"Версии сайта Кинтерест для компьютера и телефона\">\n            <div class=\"site-device site-device-desktop\">\n              <div class=\"site-device-topbar\" aria-hidden=\"true\"><span></span><span></span><span></span><small>desktop</small></div>\n              <div class=\"site-case-screen\"><img src=\"{{root}}img/works/kinterest-desktop.jpg\" class=\"site-case-screenshot\" alt=\"Главная страница Кинтерест на компьютере\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n            <div class=\"site-device site-device-phone\">\n              <span class=\"site-phone-speaker\" aria-hidden=\"true\"></span>\n              <div class=\"site-case-screen site-case-screen-mobile\"><img src=\"{{root}}img/works/kinterest-mobile.jpg\" class=\"site-case-screenshot\" alt=\"Мобильная версия Кинтерест\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"site-case-slide site-case-quizolis\">\n        <div class=\"site-case-inner\">\n          <div class=\"site-case-copy\">\n            <span class=\"site-case-index\">03 <i>/ 04</i></span>\n            <span class=\"site-case-kicker\">Образовательная платформа</span>\n            <h3>КВИЗОЛИС</h3>\n            <p>Платформа для тестирования и олимпиад на Flask. Преподаватели могут создавать викторины, настраивать их и отслеживать результаты прохождения.</p>\n            <a class=\"site-case-link\" href=\"https://quizolis.onrender.com\" target=\"_blank\" rel=\"noopener noreferrer\">Посмотреть сайт <span aria-hidden=\"true\">↗</span></a>\n          </div>\n          <div class=\"site-case-mockups\" aria-label=\"Версии Квизолиса для компьютера и телефона\">\n            <div class=\"site-device site-device-desktop\">\n              <div class=\"site-device-topbar\" aria-hidden=\"true\"><span></span><span></span><span></span><small>desktop</small></div>\n              <div class=\"site-case-screen\"><img src=\"{{root}}img/works/quizolis-desktop.jpg\" class=\"site-case-screenshot\" alt=\"Главная страница Квизолиса на компьютере\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n            <div class=\"site-device site-device-phone\">\n              <span class=\"site-phone-speaker\" aria-hidden=\"true\"></span>\n              <div class=\"site-case-screen site-case-screen-mobile\"><img src=\"{{root}}img/works/quizolis-mobile.jpg\" class=\"site-case-screenshot\" alt=\"Мобильная версия Квизолиса\" loading=\"lazy\" decoding=\"async\"></div>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"site-case-slide site-case-third\">\n        <div class=\"site-case-inner\">\n          <div class=\"site-case-copy\">\n            <span class=\"site-case-index\">04 <i>/ 04</i></span>\n            <span class=\"site-case-kicker\">Следующий проект — ваш</span>\n            <h3>Ваш проект</h3>\n            <p>Здесь может быть ваш будущий сайт — от первой идеи и структуры до адаптивного интерфейса и запуска.</p>\n            <a class=\"site-case-link\" href=\"{{home}}#contact\">Обсудить проект <span aria-hidden=\"true\">↗</span></a>\n          </div>\n          <div class=\"site-case-mockups\" aria-label=\"Концепция сайта для будущего проекта\">\n            <div class=\"site-device site-device-desktop\">\n              <div class=\"site-device-topbar\" aria-hidden=\"true\"><span></span><span></span><span></span><small>your website</small></div>\n              <div class=\"site-case-screen site-case-screen-concept\">\n                <span class=\"site-concept-label\">ГОЙДА / DIGITAL</span>\n                <strong>ВАШ ПРОЕКТ</strong>\n                <small>Дизайн · разработка · запуск</small>\n                <span class=\"site-concept-cta\">Начнём с идеи ↗</span>\n              </div>\n            </div>\n            <div class=\"site-device site-device-phone\">\n              <span class=\"site-phone-speaker\" aria-hidden=\"true\"></span>\n              <div class=\"site-case-screen site-case-screen-mobile site-case-screen-concept\">\n                <span class=\"site-concept-label\">ГОЙДА</span>\n                <strong>ВАШ<br>САЙТ</strong>\n                <small>От идеи до запуска</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n    <div class=\"site-case-rail-arrows\" aria-label=\"Управление портфолио\">\n      <button type=\"button\" data-portfolio-direction=\"-1\" aria-label=\"Предыдущий проект\">←</button>\n      <button type=\"button\" data-portfolio-direction=\"1\" aria-label=\"Следующий проект\">→</button>\n    </div>\n  </div>\n</section>\n"
};
  // END GENERATED OFFLINE COMPONENT FALLBACKS
  const currentScript = document.currentScript || Array.from(document.scripts).reverse().find((item) => /(?:^|\/)components\.js(?:[?#].*)?$/.test(item.src));
  const scriptBase = new URL('.', currentScript && currentScript.src ? currentScript.src : location.href);
  const pageBase = new URL('.', location.href);

  function relativeDirectory(from, to) {
    const fromParts = new URL('.', from).pathname.split('/').filter(Boolean);
    const toParts = new URL('.', to).pathname.split('/').filter(Boolean);
    let shared = 0;
    while (shared < fromParts.length && shared < toParts.length && fromParts[shared] === toParts[shared]) shared++;
    const path = [...Array(fromParts.length - shared).fill('..'), ...toParts.slice(shared)].join('/');
    return path ? `${path}/` : '';
  }

  const root = relativeDirectory(pageBase, scriptBase);
  const currentPath = new URL(location.href).pathname;
  const isHome = currentPath.endsWith('/index.html') || currentPath.endsWith('/');
  const home = isHome ? '' : `${root}index.html`;
  const replaceRoot = (html) => html.replaceAll('{{root}}', root).replaceAll('{{home}}', home);

  async function inject(selector, file) {
    const target = document.querySelector(selector);
    if (!target) return;

    // При открытии HTML двойным щелчком браузеры блокируют fetch(file://...)
    // по соображениям безопасности. Для такого режима используем офлайн-копию,
    // сгенерированную из components/*.html. На сервере остаются источниками именно
    // отдельные файлы шаблонов, поэтому они по-прежнему редактируются в одном месте.
    if (location.protocol === 'file:') {
      const fallback = LOCAL_COMPONENTS[file];
      if (fallback) {
        target.innerHTML = replaceRoot(fallback);
        return;
      }
    }

    const componentUrl = new URL(`components/${file}`, scriptBase);
    try {
      const response = await fetch(componentUrl.href, { cache: 'no-cache', credentials: 'same-origin' });
      if (!response.ok) throw new Error(`HTTP ${response.status} при запросе ${componentUrl.pathname}`);
      target.innerHTML = replaceRoot(await response.text());
    } catch (error) {
      console.error(`Не удалось загрузить шаблон ${file} (${componentUrl.href}):`, error);
      // Если файл доступен локально, сохраняем работоспособность сайта за счёт
      // офлайн-копии и одновременно оставляем подробную диагностику в консоли.
      const fallback = LOCAL_COMPONENTS[file];
      if (fallback) {
        target.innerHTML = replaceRoot(fallback);
        target.setAttribute('data-component-fallback', 'true');
        return;
      }
      target.innerHTML = `<div class="component-load-error" role="status">Не удалось загрузить общий блок. Проверьте адрес <code>${componentUrl.pathname}</code> и убедитесь, что папка <code>components</code> загружена на сервер.</div>`;
    }
  }

  async function mountSharedTemplates() {
    await Promise.all([
      inject('[data-site-header]', 'header.html'),
      inject('[data-site-footer]', 'footer.html'),
      inject('[data-site-portfolio]', 'site-portfolio.html')
    ]);
    document.dispatchEvent(new CustomEvent('site:components-ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountSharedTemplates, { once: true });
  } else {
    mountSharedTemplates();
  }
})();

// Cookie / analytics consent. Set the real counter ID before enabling Yandex Metrica.
// Until METRIKA_COUNTER_ID contains your counter number, no analytics code is requested.
const METRIKA_COUNTER_ID = 0; // Example: const METRIKA_COUNTER_ID = 12345678;

function loadGoydaMetrika() {
  if (!METRIKA_COUNTER_ID || window.__goydaMetrikaLoaded) return;
  window.__goydaMetrikaLoaded = true;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  window.ym(METRIKA_COUNTER_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false
  });
}

// Horizontal portfolio controls work both on the homepage and on the web-service page.
document.addEventListener('click', (event) => {
  const arrow = event.target.closest('[data-portfolio-direction]');
  if (!arrow) return;
  const section = arrow.closest('.shared-site-portfolio');
  const rail = section?.querySelector('.site-case-rail');
  if (!rail) return;
  rail.scrollBy({
    left: Number(arrow.dataset.portfolioDirection || 1) * rail.clientWidth,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-cookie-banner]')) return;

  const banner = document.createElement('aside');
  banner.className = 'cookie-banner';
  banner.setAttribute('data-cookie-banner', '');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <div class="cookie-banner-copy">
      <span class="cookie-kicker">Cookie / аналитика</span>
      <h2>Как мы используем данные</h2>
      <p>Мы хотим подключить Яндекс Метрику, чтобы понимать посещаемость и улучшать сайт. Аналитический счётчик запускается только после вашего согласия. Можно оставить только необходимые cookies.</p>
    </div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-settings>Подробнее</button>
      <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-necessary>Только необходимые</button>
      <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-accept>Разрешить аналитику</button>
    </div>
    <button class="cookie-close" type="button" aria-label="Оставить только необходимые cookies" data-cookie-dismiss>×</button>`;
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
      <span class="cookie-kicker">Cookie / настройки</span>
      <h2 id="cookie-modal-title">Какие данные используются</h2>
      <div class="cookie-modal-list">
        <div><b>Необходимые</b><span>Нужны для базовой работы сайта и сохранения вашего выбора в настройках cookies.</span></div>
        <div><b>Аналитика — Яндекс Метрика</b><span>После согласия может подключаться для подсчёта посещений, источников переходов и взаимодействия со страницами. Счётчик использует идентификаторы браузера в cookies и localStorage. Вебвизор отключён. Без вашего согласия аналитический код не загружается.</span></div>
        <div><b>Внешние сервисы</b><span>Если вы переходите по ссылкам на Telegram или ВКонтакте, дальнейшая обработка данных регулируется правилами соответствующего сервиса.</span></div>
      </div>
      <div class="cookie-modal-actions">
        <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-close>Закрыть</button>
        <button class="cookie-btn cookie-btn-secondary" type="button" data-cookie-necessary>Только необходимые</button>
        <button class="cookie-btn cookie-btn-primary" type="button" data-cookie-accept>Разрешить аналитику</button>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const consentKey = 'goida_cookie_consent_v2';
  function savedConsent() {
    try {
      const local = localStorage.getItem(consentKey);
      if (local === 'analytics' || local === 'necessary') return local;
    } catch (_) {}
    const match = document.cookie.match(/(?:^|;\s*)goida_cookie_consent_v2=(analytics|necessary)(?:;|$)/);
    return match ? match[1] : null;
  }

  function setConsent(choice) {
    const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString();
    try { localStorage.setItem(consentKey, choice); } catch (_) {}
    try {
      let cookie = `goida_cookie_consent_v2=${choice}; expires=${expires}; path=/; SameSite=Lax`;
      if (location.protocol === 'https:') cookie += '; Secure';
      document.cookie = cookie;
    } catch (_) {}
    banner.classList.add('is-hidden');
    modal.hidden = true;
    document.body.classList.remove('cookie-modal-open');
    if (choice === 'analytics') loadGoydaMetrika();
  }

  function openModal() {
    modal.hidden = false;
    document.body.classList.add('cookie-modal-open');
    modal.querySelector('[data-cookie-close]')?.focus();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('cookie-modal-open');
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-cookie-accept], [data-cookie-necessary], [data-cookie-dismiss], [data-cookie-settings], [data-cookie-close]');
    if (!target) return;
    if (target.matches('[data-cookie-accept]')) setConsent('analytics');
    else if (target.matches('[data-cookie-necessary], [data-cookie-dismiss]')) setConsent('necessary');
    else if (target.matches('[data-cookie-settings]')) openModal();
    else if (target.matches('[data-cookie-close]')) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  const currentConsent = savedConsent();
  if (currentConsent) banner.classList.add('is-hidden');
  if (currentConsent === 'analytics') loadGoydaMetrika();
});
