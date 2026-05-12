/* =========================================================
   PROJECT.JS — Alptekin Residences
   ========================================================= */

window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── CSS pencere grid ── */
  const winGrid = document.querySelector('.pba-windows-grid');
  if (winGrid) {
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 5; c++) {
        const w = document.createElement('div');
        w.className = 'pba-window';
        w.style.setProperty('--dur', (2 + Math.random() * 4).toFixed(1) + 's');
        w.style.setProperty('--del', (Math.random() * 4).toFixed(1) + 's');
        winGrid.appendChild(w);
      }
    }
  }

  /* ── NAVBAR ── */
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 'top -60',
    onEnter:     () => navbar.classList.add('scrolled'),
    onLeaveBack: () => navbar.classList.remove('scrolled'),
  });

  /* ── SCROLL PROGRESS ── */
  const prog = document.getElementById('scrollProgress');
  if (prog) {
    window.addEventListener('scroll', () => {
      const max = document.body.scrollHeight - window.innerHeight;
      prog.style.width = (window.scrollY / max * 100) + '%';
    }, { passive: true });
  }

  /* ── MOBILE MENU ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  function closeMobile() { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
  mobileClose?.addEventListener('click', closeMobile);
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMobile));

  /* ── HERO GİRİŞ ANİMASYONU ── */
  const heroTl = gsap.timeline({ delay: .2, defaults: { ease: 'power4.out' } });
  heroTl
    .from('.ph-eyebrow',   { opacity: 0, y: 20,    duration: .6 }, 0)
    .from('#phL1',         { yPercent: 110,         duration: 1.0 }, .2)
    .from('#phL2',         { yPercent: 110,         duration: 1.0 }, .38)
    .from('#phDesc',       { opacity: 0, y: 28,     duration: .7 }, .6)
    .from('.ph-badge-item',{ opacity: 0, y: 20,     duration: .5, stagger: .08 }, .8)
    .from('#phScrollCue',  { opacity: 0, y: 12,     duration: .5 }, 1.1);

  /* ── HERO PARALLAX ── */
  gsap.to('#phBuildingWrap', {
    scrollTrigger: { trigger: '#phHero', scrub: 1.5 },
    yPercent: 18, ease: 'none',
  });

  /* ── HERO OVERLAY ── */
  gsap.to('.ph-overlay', {
    scrollTrigger: { trigger: '#phHero', start: 'top top', end: 'bottom top', scrub: true },
    opacity: .95, ease: 'none',
  });

  /* ── BİNA AÇILARI KARUSELİ ── */
  const panels    = Array.from(document.querySelectorAll('.view-panel'));
  const vDots     = document.querySelectorAll('.vdot');
  const vCurrent  = document.getElementById('vCurrent');
  const vpbFill   = document.getElementById('vpbFill');
  let activeIdx   = 0;
  let viewsBusy   = false;
  let viewsTarget = -1;

  function showPanel(idx, dir) {
    if (idx === activeIdx) return;
    const prev  = panels[activeIdx];
    const next  = panels[idx];
    const d     = (dir === undefined) ? (idx > activeIdx ? 1 : -1) : dir;

    const prevBg  = prev.querySelector('.vp-bg');
    const nextBg  = next.querySelector('.vp-bg');
    const prevEls = prev.querySelectorAll('.vpi-num,.vpi-title,.vpi-desc,.vpi-tags');
    const nextEls = next.querySelectorAll('.vpi-num,.vpi-title,.vpi-desc,.vpi-tags');

    gsap.set(prev, { zIndex: 2 });
    gsap.set(next, { zIndex: 3 });
    next.classList.add('active');
    activeIdx = idx;
    viewsBusy = true;

    /* ── Görsel: crossfade + hafif Ken Burns scale ── */
    gsap.fromTo(nextBg,
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 1.05, ease: 'power2.out', overwrite: true }
    );
    gsap.to(prevBg, {
      opacity: 0, scale: 0.96, duration: 0.55, ease: 'power2.in', overwrite: true,
    });

    /* ── Eski metin: yukarı uçar ── */
    gsap.to(prevEls, {
      opacity: 0, y: d > 0 ? -18 : 18,
      duration: 0.28, ease: 'power2.in', stagger: 0.04, overwrite: true,
    });

    /* ── Yeni metin: aşağıdan maskeli gelir ── */
    gsap.fromTo(nextEls,
      { opacity: 0, y: d > 0 ? 28 : -28 },
      { opacity: 1, y: 0, duration: 0.72, ease: 'power3.out', stagger: 0.1, delay: 0.38, overwrite: true }
    );

    /* UI */
    vDots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    if (vCurrent) vCurrent.textContent = String(idx + 1).padStart(2, '0');
    if (vpbFill)  vpbFill.style.width  = ((idx / (panels.length - 1)) * 100) + '%';

    /* Temizlik + kilit aç — gerekirse zincirleme devam */
    gsap.delayedCall(1.1, () => {
      prev.classList.remove('active');
      gsap.set(prev, { zIndex: 1 });
      gsap.set(prevBg,  { opacity: 0, scale: 1 });   /* bir sonraki aktivasyona hazır */
      gsap.set(prevEls, { opacity: 0, y: 0 });
      viewsBusy = false;

      if (viewsTarget !== -1 && viewsTarget !== activeIdx) {
        const t = viewsTarget; viewsTarget = -1;
        showPanel(t, t > activeIdx ? 1 : -1);
      } else {
        viewsTarget = -1;
      }
    });
  }

  /* ── Initialize ── */
  gsap.set(panels[0], { zIndex: 2 });
  panels.forEach((p, i) => {
    const bg  = p.querySelector('.vp-bg');
    const els = p.querySelectorAll('.vpi-num,.vpi-title,.vpi-desc,.vpi-tags');
    if (i === 0) {
      gsap.set(bg,  { opacity: 1, scale: 1 });
      gsap.set(els, { opacity: 1, y: 0 });
    } else {
      gsap.set(p,   { zIndex: 1 });
      gsap.set(bg,  { opacity: 0, scale: 1 });
      gsap.set(els, { opacity: 0, y: 0 });
    }
  });

  /* ── ScrollTrigger PIN ── */
  ScrollTrigger.create({
    id: 'views-pin',
    trigger: '#viewsSection',
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
    start: 'top top',
    end: () => `+=${(panels.length - 1) * window.innerHeight}`,

    onUpdate(self) {
      const newIdx = Math.min(
        panels.length - 1,
        Math.floor(self.progress * panels.length)
      );
      if (newIdx === activeIdx) { viewsTarget = -1; return; }

      if (viewsBusy) {
        viewsTarget = newIdx;
      } else {
        viewsTarget = -1;
        showPanel(newIdx, newIdx > activeIdx ? 1 : -1);
      }
    },
  });

  /* ── Dot navigation — ilgili scroll konumuna atlar ── */
  vDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const st = ScrollTrigger.getById('views-pin');
      if (!st) return;
      const extra   = (panels.length - 1) * window.innerHeight;
      const portion = i === 0 ? 0 : (i / panels.length + 0.02) * extra;
      window.scrollTo({ top: st.start + portion, behavior: 'smooth' });
    });
  });

  /* ── VIEW PHOTOS — fade in when loaded ── */
  document.querySelectorAll('.vp-photo').forEach(img => {
    const show = () => img.classList.add('loaded');
    if (img.complete && img.naturalWidth > 0) show();
    else img.addEventListener('load', show);
  });

  /* ── PROJE STATS COUNTER ── */
  ScrollTrigger.create({
    trigger: '#projStats', start: 'top 80%', once: true,
    onEnter() {
      gsap.from('.ps-item', { opacity: 0, y: 40, scale: .95, duration: .6, ease: 'power3.out', stagger: .08 });
      document.querySelectorAll('.ps-num[data-target]').forEach(el => {
        gsap.to({ val: 0 }, {
          val: +el.dataset.target, duration: 1.8, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].val); },
        });
      });
    }
  });

  /* ── LOCATION SECTION ── */
  gsap.from('.location-intro > *', {
    scrollTrigger: { trigger: '.location-intro', start: 'top 80%', once: true },
    opacity: 0, y: 32, duration: .65, ease: 'power3.out', stagger: .14,
  });
  gsap.from('.poi-group', {
    scrollTrigger: { trigger: '.location-pois', start: 'top 80%', once: true },
    opacity: 0, y: 20, duration: .5, ease: 'power3.out', stagger: .1,
  });

  /* ── PLANS INTRO ── */
  gsap.from('.plans-intro > *', {
    scrollTrigger: { trigger: '.plans-intro', start: 'top 80%', once: true },
    opacity: 0, y: 36, duration: .65, ease: 'power3.out', stagger: .14,
  });

  /* ── KAT PLANLARI — Clip-path + 3D reveal ── */
  gsap.utils.toArray('.plan-block').forEach((block, i) => {
    const wrap  = block.querySelector('.pb-image-wrap');
    const inner = block.querySelector('.pb-image-inner');
    const meta  = block.querySelector('.pb-meta');
    const rooms = block.querySelectorAll('.pb-room');
    if (!wrap || !inner) return;

    const isLeft   = wrap.closest('.pb-layout-left') !== null;
    const clipFrom = isLeft ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)';
    const xFrom    = isLeft ? -80 : 80;

    const tl = gsap.timeline({
      scrollTrigger: { trigger: block, start: 'top 72%', once: true }
    });

    tl
      .from(meta, {
        opacity: 0, x: -xFrom * 0.5, duration: .8, ease: 'power3.out',
      }, 0)
      .fromTo(inner,
        {
          clipPath: clipFrom, scale: .95,
          rotateY: isLeft ? -8 : 8,
          transformPerspective: 1200,
          immediateRender: false,
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)', scale: 1, rotateY: 0,
          duration: 1.0, ease: 'power3.out',
        },
        .12
      )
      .from(rooms, {
        opacity: 0, x: isLeft ? -20 : 20, duration: .4, ease: 'power2.out', stagger: .06,
      }, .4);
  });

  /* ── SECTION HEADINGS ── */
  document.querySelectorAll('.gs-section-head').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      opacity: 0, y: 32, duration: .7, ease: 'power3.out', stagger: .12,
    });
  });

  /* ── CTA ── */
  gsap.from('.pcta-inner > *', {
    scrollTrigger: { trigger: '.proj-cta', start: 'top 75%', once: true },
    opacity: 0, y: 36, duration: .65, ease: 'power3.out', stagger: .1,
  });

  /* ── MAGNETIC ── */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * .32;
      const y = (e.clientY - r.top  - r.height / 2) * .32;
      gsap.to(btn, { x, y, duration: .4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.5)' });
    });
  });

  /* ── CURSOR GLOW ── */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `position:fixed;width:500px;height:500px;pointer-events:none;border-radius:50%;
      background:radial-gradient(circle,rgba(191,154,80,0.04) 0%,transparent 68%);
      transform:translate(-50%,-50%);z-index:0;`;
    document.body.appendChild(glow);
    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    gsap.ticker.add(() => gsap.set(glow, { left: mx, top: my }));
  }

  /* ── PLAN LIGHTBOX ── */
  const lightbox    = document.getElementById('planLightbox');
  const lbImg       = document.getElementById('lbImg');
  const lbClose     = document.getElementById('lbClose');
  const lbZoomIn    = document.getElementById('lbZoomIn');
  const lbZoomOut   = document.getElementById('lbZoomOut');
  const lbZoomReset = document.getElementById('lbZoomReset');
  let lbScale = 1;

  function setLbScale(s) {
    lbScale = Math.max(.5, Math.min(4, s));
    gsap.to(lbImg, { scale: lbScale, duration: .3, ease: 'power2.out' });
    lbImg.style.cursor = lbScale < 3.5 ? 'zoom-in' : 'zoom-out';
  }

  document.querySelectorAll('.zoom-plan').forEach(btn => {
    btn.addEventListener('click', () => {
      lbImg.src = btn.dataset.src;
      lbScale = 1;
      gsap.set(lbImg, { scale: 1 });
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      gsap.from(lbImg, { scale: .8, opacity: 0, duration: .45, ease: 'back.out(1.5)' });
    });
  });

  function closeLightbox() {
    gsap.to(lbImg, {
      scale: .85, opacity: 0, duration: .3, ease: 'power2.in',
      onComplete: () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        lbImg.src = '';
        gsap.set(lbImg, { clearProps: 'all' });
      }
    });
  }

  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  lbImg?.addEventListener('click', () => setLbScale(lbScale < 2 ? 2 : lbScale < 3 ? 3 : 1));
  lbZoomIn?.addEventListener('click',    () => setLbScale(lbScale + .5));
  lbZoomOut?.addEventListener('click',   () => setLbScale(lbScale - .5));
  lbZoomReset?.addEventListener('click', () => setLbScale(1));
  lbImg?.addEventListener('wheel', e => {
    e.preventDefault();
    setLbScale(lbScale + (e.deltaY < 0 ? .2 : -.2));
  }, { passive: false });

});