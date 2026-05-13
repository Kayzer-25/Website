/* =========================================================
   YENİ ALPTEKİN İNŞAAT — script.js
   ========================================================= */

/* ── HİZMET VERİSİ ── */
const services = {
  1: {
    num: '01', icon: '🏠', badge: 'Konut', theme: 'st-1',
    title: 'Konut İnşaatı',
    tagline: 'Hayalinizdeki Evi Birlikte İnşa Edelim',
    desc: 'Adana ve çevresinde villa, müstakil ev ve apartman projelerini güncel yapı teknolojileri, depreme dayanıklı statik hesaplar ve özenli işçilikle hayata geçiriyoruz. Her projede teslimden sonra da yanınızdayız.',
    features: ['Villa & Müstakil Ev', 'Apartman & Rezidans', 'A+ Enerji Sınıfı', 'Deprem Yönetmeliği', 'Anahtar Teslim Seçeneği', 'Isı & Ses Yalıtımı', 'Akıllı Ev Altyapısı', '2 Yıl Yapı Garantisi'],
    process: ['Keşif & İhtiyaç Analizi', 'Mimari Tasarım', 'Ruhsat & İzinler', 'İnşaat Süreci', 'Anahtar Teslim'],
  },
  2: {
    num: '02', icon: '🏢', badge: 'Ticari', theme: 'st-2',
    title: 'Ticari Yapılar',
    tagline: 'İşinize Değer Katan Güçlü Yapılar',
    desc: 'Ofis binaları, mağazalar, depolar ve endüstriyel tesisler gibi ticari yapıların tüm inşaat sürecini profesyonel ekibimizle yönetiyoruz. Fonksiyonellik, dayanıklılık ve uzun ömür her projemizin temelidir.',
    features: ['Ofis Binaları', 'Mağaza & Showroom', 'Depo & Lojistik Tesisi', 'Endüstriyel Yapılar', 'Karma Kullanım Binaları', 'Enerji Verimliliği', 'Güvenlik Altyapısı', '5 Yıl Yapısal Garanti'],
    process: ['İhtiyaç & Fizibilite', 'Proje Tasarımı', 'Ruhsat & İzinler', 'İnşaat & Denetim', 'İşletme Teslimi'],
  },
  3: {
    num: '03', icon: '🤝', badge: 'Arsa', theme: 'st-3',
    title: 'Kat Karşılığı',
    tagline: 'Arsanızı Değere Dönüştürün — Nakit Ödemeden',
    desc: 'Arsanızı nakit harcamak zorunda kalmadan değere dönüştürmek istiyorsanız doğru adrestesiniz. Kat karşılığı modeliyle arsanızı en yüksek değerde değerlendiriyor, şeffaf sözleşme ve noterli güvenceyle süreci başından sonuna kadar yönetiyoruz.',
    features: ['Ücretsiz Arsa Değerleme', 'Yüksek Kat Payı Oranı', 'Şeffaf & Hukuki Sözleşme', 'Noterli Güvence', 'Hızlı Proje Başlangıcı', 'Daire Seçim Önceliği', 'Ruhsat & İzin Desteği', 'Süreç Takip Raporları'],
    process: ['Arsa İnceleme', 'Değerleme & Teklif', 'Protokol & Sözleşme', 'Ruhsat & Proje', 'İnşaat & Teslim'],
  },
  4: {
    num: '04', icon: '🗝️', badge: 'Komple', theme: 'st-4',
    title: 'Anahtar Teslim',
    tagline: 'Tek Noktadan Komple Çözüm — Siz Sadece Anahtarı Alın',
    desc: 'Projenizin başından sonuna kadar tüm süreci tek elden yönetiyoruz. Mimari tasarımdan statik hesaplara, mekanik & elektrik tesisattan iç mimari uygulamalarına ve peyzaja kadar koordineli çalışan uzman ekibimizle zamanında ve bütçe dahilinde teslim garantisi.',
    features: ['Mimari & Statik Proje', 'Mekanik & Elektrik Tesisat', 'İç Mimari Tasarım', 'Peyzaj & Dış Cephe', 'Bütçe & Zaman Yönetimi', 'Kalite Denetim Raporları', 'Bağımsız Denetim', 'Kapsamlı Teslim Garantisi'],
    process: ['Brifing & İhtiyaç', 'Tasarım & Onay', 'Ruhsat & Hazırlık', 'İnşaat & Denetim', 'Komple Teslim'],
  },
};

const projects = {
  1: {
    tag:'Konut', icon:'🏡', theme:'mv-1', title:'Sarıyer Lüks Villa',
    specs:[{icon:'📍',text:'İstanbul, Sarıyer'},{icon:'📅',text:'2024'},{icon:'📐',text:'320 m²'},{icon:'🛏️',text:'5+2 Oda'}],
    desc:`İstanbul'un en prestijli semtlerinden Sarıyer'de hayata geçirilen bu lüks villa projesi, modern mimari anlayışını geleneksel sıcaklıkla buluşturuyor.\n\nÇift garaj, özel yüzme havuzu ve geniş doğal taş teraslara sahip yapıda KNX tabanlı akıllı ev sistemi entegre edilmiştir.\n\nDış cephede kullanılan doğal travertine ve İtalyan tasarımlı ahşap paneller binanın özgün karakterini tamamlamaktadır.`,
    features:['A+ Enerji Sınıfı Sertifikası','KNX Akıllı Ev Sistemi','Doğal Travertine Cephe','Çatı Güneş Panelleri','Yerden Isıtma Sistemi','Özel Peyzaj Tasarımı','Yüzme Havuzu','2 Yıl Yapı Garantisi'],
  },
  2: {
    tag:'Ticari', icon:'🏢', theme:'mv-2', title:'Çankaya Ofis Merkezi',
    specs:[{icon:'📍',text:'Ankara, Çankaya'},{icon:'📅',text:'2024'},{icon:'📐',text:'850 m²'},{icon:'👥',text:'120 Kişilik'}],
    desc:`Ankara'nın iş ve finans merkezi Çankaya'da yükselen bu modern ofis binası, çalışma kültürünü yeniden tanımlıyor.\n\nBinanın zemin katında yer alan lobi, yüksek tavanlı ve doğal taş kaplı yapısıyla kurumsal kimliği güçlendiriyor.\n\nYapı, BREEAM sertifikası hedeflenerek tasarlanmış; yağmur suyu geri dönüşüm sistemi ile işletme giderlerini %30 azaltmaktadır.`,
    features:['BREEAM Enerji Sertifikası','Fiber Optik Altyapı','Yedekli UPS Güç Sistemi','Yağmur Suyu Geri Dönüşümü','Bağımsız Kat Klima','Yangın Algılama & Sprinkler','Engelli Erişim Tasarımı','5 Yıl Yapısal Garanti'],
  },
  3: {
    tag:'Renovasyon', icon:'🏠', theme:'mv-3', title:'Konak Komple Yenileme',
    specs:[{icon:'📍',text:'İzmir, Konak'},{icon:'📅',text:'2023'},{icon:'📐',text:'480 m²'},{icon:'🔄',text:'Komple Yenileme'}],
    desc:`İzmir Konak'ta 1970'lerden kalma bu tarihi apartman binası, yapısal bütünlüğü korunarak baştan aşağıya yenilenmiştir.\n\nYapı önce zemin etüdü ve statik analiziyle değerlendirilmiş; ardından deprem yönetmeliği uygulanmıştır.\n\nDış cephede özgün kireçtaşı görünümü korunmuş, ısı yalıtımı eklenmiş ve tüm mekanik altyapı sıfırdan yenilenmiştir.`,
    features:['Deprem Güçlendirme','Isı ve Ses Yalıtımı','Cephe Restorasyonu','Komple Tesisat Yenileme','Yangın Güvenlik Sistemi','Asansör Modernizasyonu','Ortak Alan Yenileme','3 Yıl İşçilik Garantisi'],
  },
  4: {
    tag:'Konut', icon:'🏘️', theme:'mv-4', title:'Nilüfer Müstakil Ev',
    specs:[{icon:'📍',text:'Bursa, Nilüfer'},{icon:'📅',text:'2023'},{icon:'📐',text:'210 m²'},{icon:'🌳',text:'350 m² Bahçe'}],
    desc:`Bursa Nilüfer'in sakin ve yeşil dokusuna uyum sağlayan bu müstakil ev projesi, modern konfor ile doğal malzemelerin uyumunu temsil ediyor.\n\nZemin katta açık plan mutfak-yemek-oturma bölümü, üst katta ise üç ebeveyn süiti planlanmıştır.\n\n350 m² bahçede meyve ağaçları, otomatik sulama sistemi ve açık yemek terası tasarlanmıştır.`,
    features:['Açık Plan Yaşam Alanı','Doğal Ahşap Cephe','Otomatik Bahçe Sulama','EV Şarj Altyapısı','Akıllı Ev Ön Hazırlığı','Isı Pompalı Merkezi Sistem','Zemin Isıtması','2 Yıl Kapsamlı Garanti'],
  },
  5: {
    tag:'Ticari', icon:'🏪', theme:'mv-5', title:'Meram Ticaret Merkezi',
    specs:[{icon:'📍',text:'Konya, Meram'},{icon:'📅',text:'2022'},{icon:'📐',text:'620 m²'},{icon:'🏬',text:'8 Mağaza Ünitesi'}],
    desc:`Konya Meram'ın yoğun ticaret aksında inşa edilen bu alışveriş merkezi, 8 bağımsız mağaza ünitesini tek çatı altında buluşturuyor.\n\nYapının en belirgin özelliği, giriş cephesindeki geniş atriyum boşluğu ve cam fasad uygulamasıdır.\n\n24 araçlık otopark ve modüler tesisat sistemi sayesinde kiracı revizyonları kolaylıkla yapılabilmektedir.`,
    features:['Cam Fasad & Atriyum','24 Araçlık Kapalı Otopark','Modüler Tesisat','Merkezi İklimlendirme','Yangın Söndürme Sistemi','CCTV & Güvenlik','Engelli Erişim Standartları','5 Yıl Yapısal Garanti'],
  },
  6: {
    tag:'Peyzaj', icon:'🌿', theme:'mv-6', title:'Konyaaltı Peyzaj Projesi',
    specs:[{icon:'📍',text:'Antalya, Konyaaltı'},{icon:'📅',text:'2022'},{icon:'📐',text:'1.200 m²'},{icon:'🌊',text:'Deniz Manzaralı'}],
    desc:`Antalya Konyaaltı'nda denize sıfır konumda yer alan bu lüks villa kompleksinin dış mekan düzenlemesi, Akdeniz iklimine özgü bitkisel çeşitlilik ile çağdaş tasarım dilini bir araya getiriyor.\n\nSonsuzluk havuzu tasarımı, deniz yüzeyiyle görsel bütünlük sağlayacak biçimde konumlandırılmıştır.\n\nOtomatik damla sulama sistemi su tüketimini %50 oranında azaltmaktadır.`,
    features:['Sonsuzluk Havuzu','Akdeniz Bitkisel Paleti','Damla Sulama Sistemi','Katmanlı Led Aydınlatma','Bazalt Taş Kaplama','Meyve Bahçesi','Gizli Drenaj Sistemi','1 Yıl Bakım Desteği'],
  },
};

/* ── SCROLL RESTORATION ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ============================================================
     PROFESYONEL MOTION SİSTEMİ — Anthropic tarafından eklendi
     ============================================================ */

  /* ── REDUCED MOTION DESTEĞİ ── */
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (REDUCED_MOTION) {
    document.documentElement.classList.add('reduced-motion');
  }

  /* ── 3 KATMANLI EASE SİSTEMİ ── */
  /* Tüm animasyonlar bu üç katmandan birini kullanır */
  const EASE = {
    micro:     'power2.out',       // hover, click, küçük dönüşümler
    reveal:    'power3.out',       // scroll reveal, section girişleri
    cinematic: 'expo.out',         // hero, intro, "vay" anları
  };
  const DUR = {
    micro:     0.30,
    reveal:    0.70,
    cinematic: 1.20,
  };

  /* ── LENİS SMOOTH SCROLL ── */
  let lenis = null;
  if (!REDUCED_MOTION && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 0.85,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    /* Intro süresince Lenis'i durdur — kullanıcı kaydırırken targetScroll biriktirmesin */
    lenis.stop();
    window._lenis = lenis;
  }


  /* ── INTRO SCREEN ── */
  const introScreen   = document.getElementById('introScreen');
  const isLogo        = document.getElementById('isLogo');
  const isName        = document.getElementById('isName');
  const isSub         = document.getElementById('isSub');
  const isRule        = document.getElementById('isRule');
  const isHint        = document.getElementById('isHint');
  const heroBgLogoImg = document.getElementById('heroBgLogoImg');

  /* ── HASH BYPASS ── Eğer URL'de #contact gibi bir hash varsa intro'yu atla */
  const initialHash = window.location.hash;
  const skipIntro = !!initialHash && document.getElementById(initialHash.slice(1));

  if (skipIntro && introScreen) {
    /* Intro'yu hiç göstermeden gizle */
    introScreen.style.display = 'none';
    if (heroBgLogoImg) heroBgLogoImg.style.opacity = '0.055';
  } else {
  /* Scroll kilitli — intro oynarken kaydırmayı engelle */
  document.body.style.overflow = 'hidden';

  /* Başlangıç state'leri */
  gsap.set(isLogo, { opacity: 0, scale: 0.55, y: 24 });
  gsap.set(isName, { opacity: 0, y: 52 });
  gsap.set(isSub,  { opacity: 0, y: 28 });
  gsap.set(isRule, { scaleX: 0, opacity: 0, transformOrigin: 'center' });
  gsap.set(isHint, { opacity: 0, y: 14 });

  /* Intro giriş animasyonu */
  const introTl = gsap.timeline({ delay: 0.1 });
  introTl
    .to(isLogo, {
      opacity: 1, scale: 1, y: 0,
      duration: 0.75, ease: 'back.out(1.4)',
    }, 0)
    .to(isName, {
      opacity: 1, y: 0,
      duration: 0.6, ease: 'power3.out',
    }, 0.35)
    .to(isSub, {
      opacity: 1, y: 0,
      duration: 0.5, ease: 'power3.out',
    }, 0.52)
    .to(isRule, {
      scaleX: 1, opacity: 1,
      duration: 0.55, ease: 'power2.out',
    }, 0.62)
    .to(isHint, {
      opacity: 1, y: 0,
      duration: 0.4, ease: 'power2.out',
    }, 0.88);

  /* ── Intro çıkış animasyonu ── */
  let introExited = false;
  let introReady  = false;
  introTl.add(() => { introReady = true; }, 0.6);

  function exitIntro() {
    if (introExited || !introReady) return;
    introExited = true;

    /* Exit sırasında sayfa kaymasın — bitince sıfırlanacak */
    document.body.style.overflow = 'hidden';

    const exitTl = gsap.timeline({
      onComplete() {
        introScreen.style.display = 'none';

        /* Scroll sıfırla — Lenis henüz durduğundan native sıfırlama güvenli */
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        /* Scroll kilidini kaldır (id ile hedeflenmiş — yanlış tag silme riski yok) */
        document.getElementById('scroll-lock')?.remove();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';

        /* Lenis: biriken targetScroll'u sıfırla, sonra başlat */
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
          lenis.start();
        }

        /* ScrollTrigger refresh */
        requestAnimationFrame(() => ScrollTrigger.refresh());

        runHeroAnimation();

        /* Arka plan logosu solukça belirir */
        gsap.to(heroBgLogoImg, {
          opacity: 0.055,
          duration: 0.9, ease: 'power2.out', delay: 0.2,
        });

        /* Logo projeler bölümüne doğru inerken silinir */
        gsap.to(heroBgLogoImg, {
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 90%',
            end:   'top 25%',
            scrub: 2,
          },
          opacity: 0,
          scale: 1.18,
          ease: 'power2.in',
        });
      }
    });

    exitTl
      .to(isHint, { opacity: 0, y: -10, duration: 0.18, ease: 'power2.in' }, 0)
      .to(isRule, { opacity: 0, width: 0, duration: 0.2, ease: 'power2.in' }, 0.04)
      .to(isSub,  { opacity: 0, y: -16, duration: 0.22, ease: 'power2.in' }, 0.06)
      .to(isName, { opacity: 0, y: -24, duration: 0.28, ease: 'power2.in' }, 0.10)
      .to(isLogo, { opacity: 0, scale: 0.8, duration: 0.28, ease: 'power2.in' }, 0.14)
      .to(introScreen, { yPercent: -100, duration: 0.65, ease: 'power4.inOut' }, 0.2);
  }

  /* İlk etkileşim intro'yu kapatır */
  window.addEventListener('scroll',     exitIntro, { once: true, passive: true });
  window.addEventListener('wheel',      exitIntro, { once: true, passive: true });
  window.addEventListener('touchstart', exitIntro, { once: true, passive: true });
  } /* skipIntro else bloğunun sonu */

  /* skipIntro ise hero animasyonunu burada başlat ve hash hedefine scroll yap */
  if (skipIntro) {
    /* Scroll kilidi yokken Lenis'i başlat */
    document.getElementById('scroll-lock')?.remove();
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    if (lenis) lenis.start();
    requestAnimationFrame(() => {
      runHeroAnimation();
      ScrollTrigger.refresh();
      setTimeout(() => {
        const targetId = initialHash.slice(1);
        if (targetId === 'services') {
          const st = ScrollTrigger.getById('svc-pin');
          if (st && window._lenis) { window._lenis.scrollTo(Math.round(st.start), { duration: 0.9 }); return; }
          if (st) { window.scrollTo({ top: Math.round(st.start), behavior: 'smooth' }); return; }
        }
        const el = document.getElementById(targetId);
        if (!el) return;
        const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
        if (window._lenis) window._lenis.scrollTo(top, { duration: 1.2 });
        else window.scrollTo({ top, behavior: 'smooth' });
      }, 350);
    });
  }

  /* ── HERO ── */
  /* Bir kelimeyi karakter span'larına böl — premium SplitText efekti */
  function splitToChars(el) {
    if (!el || el.dataset.split === '1') return [];
    const text = el.textContent;
    el.textContent = '';
    el.dataset.split = '1';
    const chars = [];
    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'split-char';
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      el.appendChild(span);
      chars.push(span);
    });
    return chars;
  }

  function runHeroAnimation() {
    /* Satır 1 ve 3 — karakter bazlı split */
    const chars1 = splitToChars(document.getElementById('heroLine1'));
    const chars3 = splitToChars(document.getElementById('heroLine3'));

    /* Satır 2 — gradient-text split edilince CSS bozulur, bütün halde animate et */
    const line2 = document.getElementById('heroLine2');

    gsap.set([...chars1, ...chars3], { yPercent: 110, opacity: 0 });
    gsap.set(line2, { yPercent: 110 }); /* reveal-line overflow:hidden ile klipler */

    const heroTl = gsap.timeline({ defaults: { ease: EASE.cinematic } });
    heroTl
      .from('#heroSymbol', { opacity: 0, scale: 0.75, duration: 0.6, ease: 'back.out(1.4)' }, 0)
      .from('#heroBadge',  { opacity: 0, y: 12, scale: 0.97, duration: 0.45, ease: EASE.reveal }, 0.25)
      .to(chars1, { yPercent: 0, opacity: 1, duration: 0.65, stagger: 0.018 }, 0.38)
      .to(line2,  { yPercent: 0, duration: 0.65, ease: EASE.cinematic }, 0.55)
      .to(chars3, { yPercent: 0, opacity: 1, duration: 0.65, stagger: 0.016 }, 0.72)
      .from('#heroDesc',   { opacity: 0, y: 18, duration: 0.5,  ease: EASE.reveal }, 0.95)
      .from('#heroBtns',   { opacity: 0, y: 14, duration: 0.4,  ease: EASE.reveal }, 1.10)
      .from('#heroScroll', { opacity: 0, y: 10, duration: 0.35, ease: EASE.reveal }, 1.25);

    /* subtle float/breathe after entrance */
    heroTl.add(() => {
      gsap.to('#heroSymbol', {
        y: -8, duration: 2.4, ease: 'sine.inOut',
        repeat: -1, yoyo: true
      });
    }, 0.8);
  }

  /* ── SCROLL PROGRESS ── */
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });

  /* ── NAVBAR ── */
  const navbar = document.getElementById('navbar');
  ScrollTrigger.create({
    start: 'top -60',
    onEnter: ()    => navbar.classList.add('scrolled'),
    onLeaveBack: () => navbar.classList.remove('scrolled'),
  });

  document.querySelectorAll('section[id]').forEach(sec => {
    ScrollTrigger.create({
      trigger: sec, start: 'top center', end: 'bottom center',
      onEnter: ()     => highlightNav(sec.id),
      onEnterBack: () => highlightNav(sec.id),
    });
  });
  function highlightNav(id) {
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--gold-2)' : '';
    });
  }

  /* ── NAV SMOOTH SCROLL (pin-aware + Lenis) ── */
  function navScrollTo(targetId) {
    const scrollTo = (top) => {
      if (window._lenis) window._lenis.scrollTo(top, { duration: 0.9 });
      else window.scrollTo({ top, behavior: 'smooth' });
    };
    if (targetId === 'services') {
      const st = ScrollTrigger.getById('svc-pin');
      if (st) { scrollTo(Math.round(st.start)); return; }
    }
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
    scrollTo(top);
  }

  document.querySelectorAll('.nav-links a, .mobile-link, .footer-links a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      navScrollTo(href.slice(1));
      /* Mobile menu'yü kapat */
      document.getElementById('mobileMenu')?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── BACK TO TOP ── */
  const bttBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    bttBtn?.classList.toggle('visible', window.scrollY > window.innerHeight * 0.6);
  }, { passive: true });
  bttBtn?.addEventListener('click', () => {
    if (window._lenis) window._lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── SECTION HEADINGS ── */
  document.querySelectorAll('.gs-section-head').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      opacity: 0, y: 20, duration: .55, ease: 'power3.out', stagger: .07,
      immediateRender: false,
    });
  });

  /* ── REVEAL PAIRS ── */
  document.querySelectorAll('.gs-reveal').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      opacity: 0, x: i % 2 === 0 ? -24 : 24, duration: .55, ease: 'power3.out',
      immediateRender: false,
    });
  });

  /* ── VALUE ITEMS ── */
  document.querySelectorAll('.gs-value').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      opacity: 0, x: -16, duration: .4, ease: 'power3.out', delay: i * .07,
      immediateRender: false,
    });
  });

  /* ── SERVICES CAROUSEL — snap + scrub ── */
  const svcPanels    = Array.from(document.querySelectorAll('.svc-track .svc-slide'));
  const svcDots      = document.querySelectorAll('.sdot');
  const svcCurrentEl = document.getElementById('svcCurrent');
  const svcPbFill    = document.getElementById('svcPbFill');
  const svcHint      = document.getElementById('svcScrollHint');

  if (svcPanels.length) {
    const N = svcPanels.length;

    /* Başlangıç durumları */
    svcPanels.forEach((p, i) => {
      gsap.set(p, { yPercent: i === 0 ? 0 : 100 });
      p.classList.toggle('active', i === 0);
      if (i > 0) {
        gsap.set(p.querySelector('.svc-left'),  { opacity: 0, y: 28 });
        gsap.set(p.querySelector('.svc-photo'), { scale: 1.12 });
      }
    });

    const svcTl = gsap.timeline({ defaults: { ease: 'none', duration: 1 } }); // scrub timeline — duration oransal, değiştirilmez
    for (let i = 0; i < N - 1; i++) {
      const exitLeft   = svcPanels[i].querySelector('.svc-left');
      const enterLeft  = svcPanels[i + 1].querySelector('.svc-left');
      const exitPhoto  = svcPanels[i].querySelector('.svc-photo');
      const enterPhoto = svcPanels[i + 1].querySelector('.svc-photo');

      svcTl
        .to(svcPanels[i],     { yPercent: -100 }, i)
        .to(svcPanels[i + 1], { yPercent: 0    }, i)
        /* Görsel Ken Burns: çıkan hafifçe küçülür, giren büyükten normale gelir */
        .to(exitPhoto,  { scale: 0.93, duration: 1 }, i)
        .fromTo(enterPhoto,
          { scale: 1.12 },
          { scale: 1.0,  duration: 1 },
          i
        )
        /* Sol metin: çıkarken yukarı uçar */
        .to(exitLeft,  { opacity: 0, y: -24, duration: 0.35 }, i)
        /* Sol metin: girerken aşağıdan süzülür */
        .fromTo(enterLeft,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0,  duration: 0.45 },
          i + 0.55
        );
    }

    ScrollTrigger.create({
      id: 'svc-pin',
      trigger: '#services',
      pin: true,
      pinSpacing: true,
      start: 'top top',
      end: () => `+=${(N - 1) * window.innerHeight}`,
      scrub: true,
      snap: {
        snapTo: 1 / (N - 1),
        duration: { min: 0.18, max: 0.5 },
        ease: 'power3.inOut',
        delay: 0.02,
      },
      animation: svcTl,
      onUpdate(self) {
        const idx = Math.min(N - 1, Math.round(self.progress * (N - 1)));
        svcPanels.forEach((p, i) => p.classList.toggle('active', i === idx));
        svcDots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
        if (svcCurrentEl) svcCurrentEl.textContent = String(idx + 1).padStart(2, '0');
        if (svcPbFill) svcPbFill.style.width = (self.progress * 100) + '%';
        if (svcHint) svcHint.style.opacity = self.progress > 0.05 ? '0' : '1';
      },
    });

    svcDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const st = ScrollTrigger.getById('svc-pin');
        if (!st) return;
        const extra   = (N - 1) * window.innerHeight;
        const portion = i === 0 ? 0 : (i / (N - 1)) * extra;
        window.scrollTo({ top: st.start + portion, behavior: 'smooth' });
      });
    });

    document.querySelectorAll('.svc-slide, .svc-btn').forEach(el => {
      el.addEventListener('mouseenter', () => document.querySelector('.cursor-ring')?.classList.add('hover'));
      el.addEventListener('mouseleave', () => document.querySelector('.cursor-ring')?.classList.remove('hover'));
    });
  }

  /* ── FEATURED PROJECT ── */
  const fp = document.getElementById('featuredProject');
  if (fp) {
    gsap.from(fp, {
      scrollTrigger: { trigger: fp, start: 'top 90%', once: true },
      opacity: 0, y: 28, duration: .5, ease: 'power3.out',
      immediateRender: false,
    });
  }

  /* ── HERO PARALLAX ── */
  const heroMesh = document.getElementById('heroMesh');
  if (heroMesh) {
    gsap.to(heroMesh, { scrollTrigger: { trigger: '#hero', scrub: 1.5 }, yPercent: 30, ease: 'none' });
  }

  /* ── MOBILE MENU ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    gsap.from('.mobile-link', { opacity:0, y:20, stagger:.08, duration:.4, ease:'power2.out' });
  });
  function closeMobile() { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
  mobileClose.addEventListener('click', closeMobile);
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMobile));

  /* ── 3D TILT ── */
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width  - .5;
      const y = (e.clientY - top)  / height - .5;
      gsap.to(card, { rotationY: x * 12, rotationX: -y * 12, transformPerspective: 800, duration: .4, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, duration: .6, ease: 'elastic.out(1, .6)' });
    });
  });

  /* ── MAGNETIC ── */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const { left, top, width, height } = btn.getBoundingClientRect();
      const x = (e.clientX - left - width  / 2) * .35;
      const y = (e.clientY - top  - height / 2) * .35;
      gsap.to(btn, { x, y, duration: .4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1, .5)' });
    });
  });

  /* ── CUSTOM CURSOR + GLOW ── */
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.body.classList.add('cursor-active');

    /* Dot cursor */
    const dot  = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    /* Ring cursor */
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);

    /* Ambient glow */
    const glow = document.createElement('div');
    glow.style.cssText = `position:fixed;width:520px;height:520px;pointer-events:none;
      border-radius:50%;background:radial-gradient(circle,rgba(191,154,80,0.04) 0%,transparent 68%);
      transform:translate(-50%,-50%);z-index:0;`;
    document.body.appendChild(glow);

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

    gsap.ticker.add(() => {
      gsap.set(dot,  { left: mx, top: my });
      gsap.set(glow, { left: mx, top: my });
      /* Ring lags slightly for elegance */
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      gsap.set(ring, { left: rx, top: ry });
    });

    /* Ring grows on hover of interactive elements */
    document.querySelectorAll('a, button, .svc-card, .featured-project, .svc-btn, .back-to-top').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      btn.innerHTML = '<span>Gönderiliyor...</span>';
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        btn.innerHTML = '<span>Mesaj Gönder</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        btn.disabled = false;
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      }, 1200);
    });
  }

  /* ── SERVICE MODAL ── */
  const svcOverlay = document.getElementById('svcOverlay');
  const svcPanel   = document.getElementById('svcPanel');

  function openSvcModal(id) {
    const s = services[id]; if (!s) return;

    /* Populate visual */
    document.getElementById('spvBg').className   = 'spv-bg';   // reset
    document.getElementById('svcPanelVisual').className = 'svc-panel-visual ' + s.theme;
    document.getElementById('spvNum').textContent    = s.num;
    document.getElementById('spvIcon').textContent   = s.icon;
    document.getElementById('spvBadge').textContent  = s.badge;

    /* Process steps */
    document.getElementById('spvProcess').innerHTML = s.process.map(step => `
      <div class="spv-step">
        <div class="spv-step-dot"><div class="spv-step-dot-inner"></div></div>
        <div class="spv-step-text">${step}</div>
      </div>
    `).join('');

    /* Populate content */
    document.getElementById('spcTitle').textContent   = s.title;
    document.getElementById('spcTagline').textContent = s.tagline;
    document.getElementById('spcDesc').textContent    = s.desc;
    document.getElementById('spcFeats').innerHTML     = s.features.map(f =>
      `<div class="spc-feat">${f}</div>`
    ).join('');

    /* Show overlay */
    svcOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    /* Entrance animation */
    gsap.fromTo(svcPanel,
      { scale: .93, opacity: 0, y: 28 },
      { scale: 1, opacity: 1, y: 0, duration: .48, ease: 'power3.out' }
    );
    gsap.from('.spv-step', {
      opacity: 0, x: -18, duration: .4, ease: 'power2.out',
      stagger: .08, delay: .2,
    });
    gsap.from('.spc-feat', {
      opacity: 0, y: 12, duration: .35, ease: 'power2.out',
      stagger: .05, delay: .28,
    });
    gsap.from(['.spc-eyebrow', '.spc-title', '.spc-tagline', '.spc-desc', '.spc-feats-label'], {
      opacity: 0, y: 20, duration: .5, ease: 'power3.out',
      stagger: .08, delay: .1,
    });
  }

  function closeSvcModal() {
    gsap.to(svcPanel, {
      scale: .93, opacity: 0, y: 20, duration: .3, ease: 'power2.in',
      onComplete: () => {
        svcOverlay.classList.remove('open');
        document.body.style.overflow = '';
        gsap.set(svcPanel, { clearProps: 'all' });
      }
    });
  }

  document.querySelectorAll('.svc-btn').forEach(btn => {
    btn.addEventListener('click', () => openSvcModal(+btn.dataset.service));
  });
  document.getElementById('svcClose').addEventListener('click', closeSvcModal);
  svcOverlay.addEventListener('click', e => { if (e.target === svcOverlay) closeSvcModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSvcModal(); closeModal(); }
  });

  /* Hizmet CTA → kapat ve scroll to contact */
  document.getElementById('spcCta').addEventListener('click', () => {
    closeSvcModal();
  });

  /* ── MODAL ── */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');

  function openModal(id) {
    const p = projects[id]; if (!p) return;
    document.getElementById('modalVisual').className = 'modal-visual ' + p.theme;
    document.getElementById('modalIcon').textContent  = p.icon;
    document.getElementById('modalTag').textContent   = p.tag;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').innerHTML =
      p.desc.split('\n\n').map(s => `<p style="margin-bottom:16px">${s}</p>`).join('');
    document.getElementById('modalSpecs').innerHTML =
      p.specs.map(s => `<div class="modal-spec">${s.icon} ${s.text}</div>`).join('');
    document.getElementById('modalFeatures').innerHTML =
      p.features.map(f => `<div class="modal-feature">${f}</div>`).join('');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    gsap.from('#modal', { scale: .94, opacity: 0, y: 30, duration: .5, ease: 'power3.out' });
  }

  function closeModal() {
    gsap.to('#modal', {
      scale: .94, opacity: 0, duration: .3, ease: 'power2.in',
      onComplete: () => {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
        gsap.set('#modal', { clearProps: 'all' });
      }
    });
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(+card.dataset.project));
  });
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.getElementById('modalCta').addEventListener('click', closeModal);

  /* ═══════════════════════════════════════════════════
     KATMAN 1 — Hızlı kazanımlar
     ═══════════════════════════════════════════════════ */

  /* ── MARQUEE VELOCITY (GSAP ticker + Lenis velocity) ── */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    let mPos      = 0;
    let mVelocity = 0;
    const mBase   = 0.55; // px/frame temel hız
    const mInner  = marqueeTrack.querySelector('.marquee-inner');

    lenis?.on('scroll', ({ velocity }) => {
      mVelocity = velocity;
    });

    gsap.ticker.add(() => {
      const speed = mBase + Math.min(Math.abs(mVelocity) * 0.45, 6);
      mPos -= speed;
      const w = mInner?.offsetWidth || 1;
      if (Math.abs(mPos) >= w) mPos += w; // seamless loop
      gsap.set(marqueeTrack, { x: mPos });
    });
  }

  /* ── FEATURED PROJECT — Clip-path reveal (daha sinematik) ── */
  if (fp) {
    gsap.fromTo(fp,
      { clipPath: 'inset(0 100% 0 0 round 16px)', opacity: 1 },
      {
        clipPath: 'inset(0 0% 0 0 round 16px)',
        duration: 0.7, ease: 'power3.inOut',
        scrollTrigger: { trigger: fp, start: 'top 88%', once: true },
        immediateRender: false,
      }
    );
  }

  /* ═══════════════════════════════════════════════════
     KATMAN 2 — Sinematik dokunuşlar
     ═══════════════════════════════════════════════════ */

  /* ── FEATURED PROJECT — 3D Magnetic Tilt ── */
  const fpEl     = document.getElementById('featuredProject');
  const fpVisual = fpEl?.querySelector('.fp-visual');
  if (fpEl && fpVisual) {
    fpEl.addEventListener('mousemove', e => {
      const { left, top, width, height } = fpEl.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      gsap.to(fpEl, {
        rotationY:  x * 7,
        rotationX: -y * 5,
        transformPerspective: 1200,
        ease: 'power2.out', duration: 0.5,
      });
      gsap.to(fpVisual.querySelector('.fp-bg-img'), {
        x: x * 12, y: y * 8,
        ease: 'power2.out', duration: 0.7,
      });
    });
    fpEl.addEventListener('mouseleave', () => {
      gsap.to(fpEl, { rotationY: 0, rotationX: 0, duration: 0.9, ease: 'elastic.out(1, 0.6)' });
      gsap.to(fpVisual.querySelector('.fp-bg-img'), { x: 0, y: 0, duration: 0.7, ease: 'power2.out' });
    });
  }

  /* ── CURSOR — "İNCELE →" text on featured project hover ── */
  const cursorRing = document.querySelector('.cursor-ring');
  if (cursorRing) {
    /* Cursor içine label ekle */
    const label = document.createElement('span');
    label.className = 'cursor-label';
    label.innerHTML = 'İNCELE<br>→';
    cursorRing.appendChild(label);

    fpEl?.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-view'));
    fpEl?.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-view'));
  }

  /* ═══════════════════════════════════════════════════
     KATMAN 3 — Sayfa geçiş perdesi
     ═══════════════════════════════════════════════════ */

  const ptCurtain = document.getElementById('ptCurtain');
  const ptLogo    = ptCurtain?.querySelector('.pt-logo');

  /* Sayfa AÇILIŞI — perde kapanı kaldır */
  if (ptCurtain) {
    gsap.set(ptCurtain, { yPercent: 0 });
    const openTl = gsap.timeline({ delay: 0.05 });
    openTl
      .to(ptLogo,    { opacity: 0.9, duration: 0.25, ease: 'power2.out' }, 0)
      .to(ptCurtain, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, 0.18)
      .set(ptCurtain, { pointerEvents: 'none' });
  }

  /* Sayfa ÇIKIŞI — proje sayfasına geçişte perde kapat */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      if (!ptCurtain) { window.location.href = href; return; }

      lenis?.stop();
      ptCurtain.style.pointerEvents = 'all';

      const exitTl = gsap.timeline({
        onComplete: () => { window.location.href = href; }
      });
      exitTl
        .set(ptCurtain,  { yPercent: 100 })
        .to(ptCurtain,   { yPercent: 0, duration: 0.55, ease: 'power4.inOut' }, 0)
        .to(ptLogo,      { opacity: 0.9, duration: 0.22, ease: 'power2.out' }, 0.15);
    });
  });

});
/* ============================================================
   SCRAMBLE COUNTER — Stats band için Matrix-tarzı sayı animasyonu
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  const scrambleNums = document.querySelectorAll('.sb-num[data-scramble]');
  if (!scrambleNums.length) return;

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function scrambleAnimate(el) {
    const target = parseInt(el.dataset.scramble, 10);
    const suffix = el.dataset.suffix || '';
    const staticText = el.dataset.static;
    const duration = 1800;
    const start = performance.now();

    if (REDUCED) {
      el.textContent = staticText || (target + suffix);
      return;
    }

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Easing — power3.out
      const eased = 1 - Math.pow(1 - progress, 3);

      if (staticText) {
        // Static text mode (e.g. "A+") — scramble random chars then settle
        if (progress < 0.85) {
          const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@%&*';
          const len = staticText.length;
          let scrambled = '';
          for (let i = 0; i < len; i++) {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
          el.textContent = scrambled;
        } else {
          el.textContent = staticText;
        }
      } else {
        // Number scramble — show random until close to end, then settle
        if (progress < 0.7) {
          const ghost = Math.floor(Math.random() * (target * 2));
          el.textContent = ghost + suffix;
        } else {
          const current = Math.round(target * eased);
          el.textContent = current + suffix;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = staticText || (target + suffix);
      }
    }

    requestAnimationFrame(frame);
  }

  // Trigger when stats band enters viewport
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrambleNums.forEach((el, i) => {
          setTimeout(() => scrambleAnimate(el), i * 120);
        });
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const band = document.getElementById('statsBand');
  if (band) io.observe(band);
});
