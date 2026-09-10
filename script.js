// ГОЙДА — общий скрипт сайта
document.addEventListener('DOMContentLoaded', () => {

  /* header shrink on scroll */
  const header = document.querySelector('.site-header');
  if (header){
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
  }

  /* mobile menu */
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu){
    burger.addEventListener('click', () => {
      const isOpen = !burger.classList.contains('open');
      burger.classList.toggle('open', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }));
  }

  /* mascot: hover on desktop, tap on touch */
  document.querySelectorAll('.mascot').forEach(m => {
    let timeout;
    const open = () => { clearTimeout(timeout); m.classList.add('talk'); };
    const close = () => { m.classList.remove('talk'); };
    m.addEventListener('mouseenter', open);
    m.addEventListener('mouseleave', close);
    m.addEventListener('click', (e) => {
      if (window.matchMedia('(hover: hover)').matches) return;
      e.preventDefault();
      m.classList.contains('talk') ? close() : open();
      clearTimeout(timeout);
      timeout = setTimeout(close, 1400);
    });
  });

  /* one orchestrated reveal pass on load/scroll-into-view */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* faq accordion */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });


  /* interactive web-focus stages */
  document.querySelectorAll('.focus-steps.interactive').forEach(group => {
    const steps = [...group.querySelectorAll('.focus-step.interactive')];
    const detail = group.parentElement.querySelector('.focus-detail');
    if (!detail || !steps.length) return;
    const kicker = detail.querySelector('.detail-kicker');
    const title = detail.querySelector('strong');
    const copy = detail.querySelector(':scope > div > span:last-child');
    const activate = (step) => {
      steps.forEach(s => s.classList.toggle('is-active', s === step));
      if (kicker) kicker.textContent = `Активный этап · ${steps.indexOf(step) + 1}`;
      if (title) title.textContent = step.dataset.focusTitle || '';
      if (copy) copy.textContent = step.dataset.focusCopy || '';
    };
    steps.forEach(step => {
      step.addEventListener('mouseenter', () => activate(step));
      step.addEventListener('focus', () => activate(step));
      step.addEventListener('click', () => activate(step));
    });
  });

  /* why-chain: node -> detail panel */
  document.querySelectorAll('.why-chain-wrap').forEach(wrap => {
    const nodes = [...wrap.querySelectorAll('.why-node')];
    const detail = wrap.querySelector('.why-detail');
    if (!detail || !nodes.length) return;
    const kicker = detail.querySelector('.detail-kicker');
    const title = detail.querySelector('h3');
    const copy = detail.querySelector('p');
    const arrow = detail.querySelector('.detail-arrow');
    const activate = (node) => {
      const i = nodes.indexOf(node);
      nodes.forEach(n => n.classList.toggle('is-active', n === node));
      if (kicker) kicker.textContent = `Шаг цепочки · ${String(i + 1).padStart(2,'0')}`;
      if (title) title.textContent = node.dataset.whyTitle || '';
      if (copy) copy.textContent = node.dataset.whyCopy || '';
      if (arrow) arrow.textContent = `${String(i + 1).padStart(2,'0')} → 06`;
    };
    nodes.forEach(node => {
      node.addEventListener('mouseenter', () => activate(node));
      node.addEventListener('focus', () => activate(node));
      node.addEventListener('click', () => activate(node));
    });
  });


  /* works: local cover photos + swipe progress */
  document.querySelectorAll('.work-photo').forEach(img => {
    img.addEventListener('error', () => img.remove(), { once: true });
  });
  document.querySelectorAll('.works-section').forEach(section => {
    const scroller = section.querySelector('.works-scroller');
    const guide = section.querySelector('.works-guide');
    const hint = section.querySelector('.works-mobile-hint');
    if (!scroller) return;
    const updateWorksProgress = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      const ratio = max > 0 ? scroller.scrollLeft / max : 0;
      if (guide) {
        const current = Math.min(3, Math.max(1, Math.round(ratio * 2) + 1));
        const total = 3;
        const text = guide.querySelector('span:last-child');
        if (text) text.textContent = `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
      }
      if (hint) hint.classList.toggle('is-done', ratio > 0.04);
    };
    scroller.addEventListener('scroll', updateWorksProgress, { passive: true });
    window.addEventListener('resize', updateWorksProgress, { passive: true });
    updateWorksProgress();
  });
});
