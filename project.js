/* =========================================================
   PROJECT.JS — Alptekin Residences
   ========================================================= */

/* ── SCROLL RESTORATION ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── REDUCED MOTION ── */
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (REDUCED_MOTION) document.documentElement.classList.add('reduced-motion');

  /* ── MOBİL TESPİTİ ── Sadece dar viewport + hover yok = gerçek mobil */
  const IS_MOBILE = window.matchMedia('(max-width: 768px)').matches
    && !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (IS_MOBILE) document.documentElement.classList.add('is-mobile');

  /* ── 3 KATMANLI EASE SİSTEMİ ── */
  const EASE = { micro: 'power2.out', reveal: 'power3.out', cinematic: 'expo.out' };
  const DUR  = { micro: 0.30, reveal: 0.70, cinematic: 1.20 };


  /* ── LENİS SMOOTH SCROLL + GSAP ENTEGRASYONU ── (mobilde devre dışı) */
  let lenis = null;
  if (!REDUCED_MOTION && !IS_MOBILE && typeof Lenis !== 'undefined') lenis = new Lenis({
    duration: 0.85,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false,
  });

  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    window._lenis = lenis;
  }

  /* ── SAYFA GEÇİŞ PERDESİ — AÇILIŞ ── */
  const ptCurtain = document.getElementById('ptCurtain');
  const ptLogo    = ptCurtain?.querySelector('.pt-logo');
  if (ptCurtain) {
    gsap.set(ptCurtain, { yPercent: 0 });
    gsap.timeline({ delay: 0.05 })
      .to(ptLogo,     { opacity: 0.9,   duration: 0.25, ease: 'power2.out'   }, 0)
      .to(ptCurtain,  { yPercent: -100, duration: 0.6,  ease: 'power4.inOut' }, 0.18)
      .set(ptCurtain, { pointerEvents: 'none' });
  }

  /* ── GERİ DÖN LİNKLERİ — perdeli geçiş ── */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      if (!ptCurtain) { window.location.href = href; return; }
      lenis?.stop();
      ptCurtain.style.pointerEvents = 'all';
      gsap.timeline({ onComplete: () => { window.location.href = href; } })
        .set(ptCurtain, { yPercent: 100 })
        .to(ptCurtain,  { yPercent: 0,  duration: 0.55, ease: 'power4.inOut' }, 0)
        .to(ptLogo,     { opacity: 0.9, duration: 0.22, ease: 'power2.out'  }, 0.15);
    });
  });

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
  const heroTl = gsap.timeline({ delay: .12, defaults: { ease: 'power4.out' } });
  heroTl
    .from('.ph-eyebrow',   { opacity: 0, y: 14,    duration: .4 }, 0)
    .from('#phL1',         { yPercent: 110,         duration: 0.7 }, .15)
    .from('#phL2',         { yPercent: 110,         duration: 0.7 }, .28)
    .from('#phDesc',       { opacity: 0, y: 18,     duration: .45 }, .42)
    .from('.ph-badge-item',{ opacity: 0, y: 14,     duration: .35, stagger: .055 }, .55)
    .from('#phScrollCue',  { opacity: 0, y: 8,      duration: .35 }, .78);

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

  /* ── BİNA AÇILARI ── Mobilde grid + lightbox, masaüstünde karusel */
  const IS_MOBILE_VIEWS = window.matchMedia('(max-width: 768px)').matches
    && !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const panels   = Array.from(document.querySelectorAll('.view-panel'));
  const vDots    = document.querySelectorAll('.vdot');
  const vCurrent = document.getElementById('vCurrent');
  const vpbFill  = document.getElementById('vpbFill');

  /* MOBİL: Her panele tıklayınca lightbox aç (karusel mantığı atlanır) */
  if (IS_MOBILE_VIEWS && panels.length) {
    panels.forEach(p => {
      p.addEventListener('click', () => {
        const img = p.querySelector('.vp-photo');
        const lb = document.getElementById('planLightbox');
        const lbImage = document.getElementById('lbImg');
        if (!img || !lb || !lbImage) return;
        lbImage.src = img.src;
        gsap.set(lbImage, { scale: 1 });
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
        gsap.from(lbImage, { scale: .85, opacity: 0, duration: .4, ease: 'back.out(1.4)' });
      });
    });
    /* Reveal animasyonu */
    gsap.from(panels, {
      scrollTrigger: { trigger: '#viewsSection', start: 'top 80%', once: true },
      opacity: 0, y: 30, duration: 0.5, ease: 'power3.out', stagger: 0.07,
    });
  } else if (panels.length) {
    const N = panels.length;

    /* Başlangıç durumları */
    panels.forEach((p, i) => {
      gsap.set(p, { yPercent: i === 0 ? 0 : 100 });
      p.classList.toggle('active', i === 0);
      const txt = p.querySelectorAll('.vpi-num, .vpi-title, .vpi-desc, .vpi-tags');
      gsap.set(txt, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 32 });
      /* Görsel: aktif değilkenlerin görseli zoom-in bekler */
      if (i > 0) gsap.set(p.querySelector('.vp-bg'), { scale: 1.12 });
    });

    /* Timeline: panel + görsel Ken Burns + metin */
    const viewsTl = gsap.timeline({ defaults: { ease: 'none', duration: 1 } });
    for (let i = 0; i < N - 1; i++) {
      const exitTxt  = panels[i].querySelectorAll('.vpi-num, .vpi-title, .vpi-desc, .vpi-tags');
      const enterTxt = panels[i + 1].querySelectorAll('.vpi-num, .vpi-title, .vpi-desc, .vpi-tags');
      const exitBg   = panels[i].querySelector('.vp-bg');
      const enterBg  = panels[i + 1].querySelector('.vp-bg');

      viewsTl
        /* Panel slayt */
        .to(panels[i],     { yPercent: -100 }, i)
        .to(panels[i + 1], { yPercent: 0    }, i)
        /* Görsel Ken Burns: çıkan hafifçe küçülür, giren büyükten normale gelir */
        .to(exitBg,  { scale: 0.93, duration: 1 }, i)
        .fromTo(enterBg,
          { scale: 1.12 },
          { scale: 1.0,  duration: 1 },
          i
        )
        /* Metin: çıkan yukarı uçar */
        .to(exitTxt,  { opacity: 0, y: -22, duration: 0.35 }, i)
        /* Metin: giren aşağıdan süzülür */
        .fromTo(enterTxt,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0,  duration: 0.45 },
          i + 0.55
        );
    }

    ScrollTrigger.create({
      id: 'views-pin',
      trigger: '#viewsSection',
      pin: true,
      pinSpacing: true,
      start: 'top top',
      end: () => `+=${(N - 1) * window.innerHeight}`,
      /* scrub:true = scroll ile anlık senkron, lag yok */
      scrub: true,
      /* snap = %50 geçince "tık" diye oturur — aircenter tarzı */
      snap: {
        snapTo: 1 / (N - 1),
        duration: { min: 0.18, max: 0.5 },
        ease: 'power3.inOut',
        delay: 0.04,
      },
      animation: viewsTl,
      onUpdate(self) {
        const idx = Math.min(N - 1, Math.round(self.progress * (N - 1)));
        panels.forEach((p, i) => p.classList.toggle('active', i === idx));
        vDots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
        if (vCurrent) vCurrent.textContent = String(idx + 1).padStart(2, '0');
        if (vpbFill) vpbFill.style.width = (self.progress * 100) + '%';
      },
    });

    /* Dot navigation */
    vDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const st = ScrollTrigger.getById('views-pin');
        if (!st) return;
        const extra   = (N - 1) * window.innerHeight;
        const portion = i === 0 ? 0 : (i / (N - 1)) * extra;
        const target = st.start + portion;
        if (window._lenis) window._lenis.scrollTo(target, { duration: 1.2 });
        else window.scrollTo({ top: target, behavior: 'smooth' });
      });
    });
  }

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
          val: +el.dataset.target, duration: 1.2, ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(this.targets()[0].val); },
        });
      });
    }
  });

  /* ── LOCATION SECTION ── */
  gsap.from('.location-intro > *', {
    scrollTrigger: { trigger: '.location-intro', start: 'top 80%', once: true },
    opacity: 0, y: 18, duration: .42, ease: 'power3.out', stagger: .08,
  });
  gsap.from('.poi-group', {
    scrollTrigger: { trigger: '.location-pois', start: 'top 80%', once: true },
    opacity: 0, y: 14, duration: .35, ease: 'power3.out', stagger: .06,
  });

  /* ── PLANS INTRO ── */
  gsap.from('.plans-intro > *', {
    scrollTrigger: { trigger: '.plans-intro', start: 'top 80%', once: true },
    opacity: 0, y: 18, duration: .42, ease: 'power3.out', stagger: .08,
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
      scrollTrigger: { trigger: block, start: 'top 75%', once: true }
    });

    tl
      .from(meta, {
        opacity: 0, x: -xFrom * 0.4, duration: .5, ease: 'power3.out',
      }, 0)
      .fromTo(inner,
        {
          clipPath: clipFrom, scale: .97,
          rotateY: isLeft ? -6 : 6,
          transformPerspective: 1200,
          immediateRender: false,
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)', scale: 1, rotateY: 0,
          duration: 0.65, ease: 'power3.out',
        },
        .08
      )
      .from(rooms, {
        opacity: 0, x: isLeft ? -14 : 14, duration: .28, ease: 'power2.out', stagger: .04,
      }, .28);
  });

  /* ── SECTION HEADINGS ── */
  document.querySelectorAll('.gs-section-head').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: { trigger: el, start: 'top 80%', once: true },
      opacity: 0, y: 18, duration: .45, ease: 'power3.out', stagger: .07,
    });
  });

  /* ── CTA ── */
  gsap.from('.pcta-inner > *', {
    scrollTrigger: { trigger: '.proj-cta', start: 'top 75%', once: true },
    opacity: 0, y: 18, duration: .4, ease: 'power3.out', stagger: .07,
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