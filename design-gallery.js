// Фильтры и счётчики галереи дизайна.
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('[data-design-masonry]');
  if (!gallery) return;

  const section = gallery.closest('.design-gallery-section') || document;
  const filters = [...section.querySelectorAll('[data-gallery-filter]')];
  const pins = [...gallery.querySelectorAll('[data-gallery-category]')];
  const categories = new Map();

  pins.forEach(pin => {
    const category = pin.dataset.galleryCategory;
    categories.set(category, (categories.get(category) || 0) + 1);
  });

  filters.forEach(button => {
    const category = button.dataset.galleryFilter || 'all';
    const badge = button.querySelector('span');
    const count = category === 'all' ? pins.length : (categories.get(category) || 0);
    if (badge) badge.textContent = String(count).padStart(2, '0');
  });

  const applyFilter = category => {
    pins.forEach(pin => {
      pin.hidden = category !== 'all' && pin.dataset.galleryCategory !== category;
    });
    filters.forEach(button => {
      const active = button.dataset.galleryFilter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  filters.forEach(button => {
    button.addEventListener('click', () => applyFilter(button.dataset.galleryFilter || 'all'));
  });
  applyFilter('all');
});
