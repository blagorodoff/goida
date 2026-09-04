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
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
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

  /* contact form: local demo submit (no backend wired) */
  const ctaForm = document.querySelector('.cta-form');
  if (ctaForm){
    ctaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = ctaForm.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Заявка отправлена';
      ctaForm.reset();
      setTimeout(() => { btn.textContent = original; }, 2600);
    });
  }
});
