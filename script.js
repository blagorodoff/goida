// ГОЙДА — общий скрипт сайта
document.addEventListener('DOMContentLoaded', () => {

  /* header shrink on scroll */
  const header = document.querySelector('.site-header');
  if (header){
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });
  }

  /* mobile menu — full-screen panel with safe focus/scroll behavior */
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (burger && mobileMenu){
    const setMenuState = (isOpen) => {
      burger.classList.toggle('open', isOpen);
      mobileMenu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };
    burger.addEventListener('click', () => {
      setMenuState(!burger.classList.contains('open'));
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenuState(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && burger.classList.contains('open')) setMenuState(false);
    });
  }

  /* Hero headline fill: stable 0→1→0 mapping to document scroll position. */
  document.querySelectorAll('.hero-fill-text').forEach(heroTitle => {
    let raf = 0;
    let startScroll = 0;
    let endScroll = 1;

    const measureHeroFill = () => {
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const docTop = heroTitle.getBoundingClientRect().top + window.scrollY;
      startScroll = Math.max(0, docTop - viewport * 0.32);
      // One full viewport of scrolling = one full red fill.
      endScroll = startScroll + Math.max(420, viewport * 0.9);
    };

    const updateHeroFill = () => {
      raf = 0;
      const progress = (window.scrollY - startScroll) / (endScroll - startScroll);
      heroTitle.style.setProperty('--fill', Math.min(1, Math.max(0, progress)).toFixed(4));
    };

    const requestMeasure = () => {
      measureHeroFill();
      updateHeroFill();
    };

    const requestUpdate = () => {
      if (!raf) raf = requestAnimationFrame(updateHeroFill);
    };

    requestMeasure();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestMeasure, { passive: true });
  });

  /* mascot: decode both frames before the first interaction so hover never flashes blank. */
  document.querySelectorAll('.mascot').forEach(m => {
    const frames = [...m.querySelectorAll('img')];
    const readyPromises = frames.map(img => {
      const waitForLoad = img.complete
        ? Promise.resolve()
        : new Promise(resolve => img.addEventListener('load', resolve, { once: true }));
      return waitForLoad.then(() => typeof img.decode === 'function' ? img.decode().catch(() => {}) : undefined);
    });
    Promise.all(readyPromises).then(() => {
      m.classList.add('ready');
      if (m.matches(':hover')) m.classList.add('talk');
    });

    let timeout;
    let touchLike = false;
    const open = () => {
      if (!m.classList.contains('ready')) return;
      clearTimeout(timeout);
      m.classList.add('talk');
    };
    const close = () => { clearTimeout(timeout); m.classList.remove('talk'); };
    m.addEventListener('pointerdown', (event) => {
      touchLike = event.pointerType === 'touch' || event.pointerType === 'pen';
      if (touchLike) {
        event.preventDefault();
        m.classList.contains('talk') ? close() : open();
        timeout = setTimeout(close, 1800);
      }
    });
    m.addEventListener('mouseenter', () => { if (!touchLike) open(); });
    m.addEventListener('mouseleave', () => { if (!touchLike) close(); });
    m.addEventListener('click', (event) => {
      if (!touchLike) return;
      event.preventDefault();
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
    const trigger = item.querySelector('.q');
    if (!trigger) return;
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    const toggle = () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    };
    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
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
    const visual = group.parentElement.querySelector('.focus-stage-visual');
    const visualImg = visual ? visual.querySelector('img') : null;
    const activate = (step) => {
      steps.forEach(s => s.classList.toggle('is-active', s === step));
      if (kicker) kicker.textContent = `Активный этап · ${steps.indexOf(step) + 1}`;
      if (title) title.textContent = step.dataset.focusTitle || '';
      if (copy) copy.textContent = step.dataset.focusCopy || '';
      if (visualImg && step.dataset.icon) {
        visualImg.src = step.dataset.icon;
        visual?.classList.add('is-visible');
      }
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


  /* semantic accent animation — only when the key phrase enters the viewport */
  const accentEls = document.querySelectorAll('.accent-word');
  if ('IntersectionObserver' in window && accentEls.length) {
    const accentObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.55, rootMargin: '0px 0px -8% 0px' });
    accentEls.forEach(el => accentObserver.observe(el));
  } else {
    accentEls.forEach(el => el.classList.add('in-view'));
  }

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
