// Предварительный калькулятор сайтов. Базовые уровни сверены с открытыми прайсами в описании на странице.
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-site-calculator]');
  if (!root) return;

  const form = root.querySelector('#site-calculator-form');
  const typeInput = root.querySelector('#calc-type');
  const stackInput = root.querySelector('#calc-stack');
  const typeHelp = root.querySelector('#calc-type-help');
  const pagesInput = root.querySelector('#calc-pages');
  const pagesOutput = root.querySelector('#calc-pages-output');
  const totalOutput = root.querySelector('#calc-total');
  const rangeOutput = root.querySelector('#calc-range');
  const breakdown = root.querySelector('#calc-breakdown');
  const contactLink = root.querySelector('.calculator-cta');
  if (!form || !typeInput || !stackInput || !pagesInput || !totalOutput) return;

  const money = (amount) => `${new Intl.NumberFormat('ru-RU').format(amount)} ₽`;
  const siteTypes = {
    landing: { label: 'Лендинг / промосайт', description: 'Одна длинная страница, чтобы рассказать об одном продукте, услуге или собрать заявки.', includedPages: 1, pageRate: 8000, floor: {
      tilda: { template: 20000, unique: 60000, motion: 90000 },
      cms: { template: 40000, unique: 60000, motion: 100000 },
      custom: { template: 15000, unique: 60000, motion: 120000 }
    } },
    corporate: { label: 'Корпоративный сайт', description: 'Сайт компании с разделами «О нас», услуги, команда, контакты и кейсы.', includedPages: 5, pageRate: 10000, floor: {
      tilda: { template: 80000, unique: 150000, motion: 220000 },
      cms: { template: 80000, unique: 150000, motion: 220000 },
      custom: { template: 70000, unique: 120000, motion: 200000 }
    } },
    catalog: { label: 'Многостраничный сайт / каталог', description: 'Много разделов или карточек товаров/услуг, но без полноценной онлайн-оплаты.', includedPages: 8, pageRate: 7000, floor: {
      tilda: { template: 120000, unique: 180000, motion: 260000 },
      cms: { template: 120000, unique: 180000, motion: 260000 },
      custom: { template: 200000, unique: 250000, motion: 350000 }
    } },
    shop: { label: 'Интернет-магазин', description: 'Каталог товаров, корзина и возможность оформить и оплатить заказ на сайте.', includedPages: 6, pageRate: 8000, floor: {
      tilda: { template: 150000, unique: 200000, motion: 280000 },
      cms: { template: 150000, unique: 200000, motion: 280000 },
      custom: { template: 250000, unique: 320000, motion: 450000 }
    } }
  };
  const features = {
    admin: { label: 'Дополнительные роли и логика админ-панели', price: 30000 },
    crm: { label: 'Интеграция с CRM', price: 35000 },
    payment: { label: 'Подключение онлайн-оплаты', price: 20000 },
    delivery: { label: 'Типовая интеграция внешнего API', price: 40000 },
    blog: { label: 'Блог / новости', price: 15000 },
    multilang: { label: 'Вторая языковая версия', price: 20000 }
  };
  const stackNames = { tilda: 'Tilda / конструктор', cms: 'Готовая CMS', custom: 'Кастомная разработка' };
  const designNames = { template: 'Шаблонный дизайн', unique: 'Индивидуальный дизайн', motion: 'Индивидуальный дизайн с анимацией' };

  function recalculate() {
    const typeKey = typeInput.value in siteTypes ? typeInput.value : 'landing';
    const site = siteTypes[typeKey];
    if (typeHelp) typeHelp.textContent = site.description;
    const stackKey = stackInput.value in site.floor ? stackInput.value : 'tilda';
    const designKey = form.querySelector('input[name="design"]:checked')?.value || 'template';
    const pages = Math.max(1, Number(pagesInput.value) || 1);
    const base = site.floor[stackKey][designKey];
    const extras = Math.max(0, pages - site.includedPages) * site.pageRate;
    const selectedFeatures = [...form.querySelectorAll('input[name="feature"]:checked')]
      .map(input => features[input.value])
      .filter(Boolean);
    const featuresTotal = selectedFeatures.reduce((sum, feature) => sum + feature.price, 0);
    const total = base + extras + featuresTotal;

    pagesOutput.value = String(pages);
    pagesOutput.textContent = String(pages);
    totalOutput.value = money(total);
    totalOutput.textContent = money(total);
    rangeOutput.textContent = `Ориентир для проекта: ${site.label.toLowerCase()} · ${stackNames[stackKey]} · ${designNames[designKey].toLowerCase()}`;

    const lines = [
      `<div><span>Базовая разработка</span><b>${money(base)}</b></div>`,
      ...(extras > 0 ? [`<div><span>Доп. страницы (${pages - site.includedPages})</span><b>${money(extras)}</b></div>`] : []),
      ...selectedFeatures.map(feature => `<div><span>${feature.label}</span><b>${money(feature.price)}</b></div>`)
    ];
    breakdown.innerHTML = lines.join('');
    if (contactLink) {
      contactLink.dataset.siteType = site.label;
      contactLink.dataset.siteEstimate = String(total);
      contactLink.dataset.siteStack = stackNames[stackKey];
      contactLink.dataset.siteDesign = designNames[designKey];
      contactLink.dataset.sitePages = String(pages);
    }
  }

  typeInput.addEventListener('change', () => {
    const type = siteTypes[typeInput.value];
    if (type) {
      pagesInput.value = String(Math.max(type.includedPages, Number(pagesInput.value) || 1));
      pagesInput.value = String(Math.min(30, Number(pagesInput.value)));
      pagesInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    recalculate();
  });
  form.addEventListener('input', recalculate);
  form.addEventListener('change', recalculate);
  if (contactLink) {
    contactLink.addEventListener('click', (event) => {
      event.preventDefault();
      const url = new URL(contactLink.href, window.location.href);
      url.searchParams.set('site_type', contactLink.dataset.siteType || 'Сайт');
      url.searchParams.set('site_estimate', contactLink.dataset.siteEstimate || '');
      url.searchParams.set('site_stack', contactLink.dataset.siteStack || '');
      url.searchParams.set('site_design', contactLink.dataset.siteDesign || '');
      url.searchParams.set('site_pages', contactLink.dataset.sitePages || '');
      window.location.href = url.toString();
    });
  }
  recalculate();
});
