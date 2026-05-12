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

window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── INTRO SCREEN ── */
  const introScreen   = document.getElementById('introScreen');
  const isLogo        = document.getElementById('isLogo');
  const isName        = document.getElementById('isName');
  const isSub         = document.getElementById('isSub');
  const isRule        = document.getElementById('isRule');
  const isHint        = document.getElementById('isHint');
  const heroBgLogoImg = document.getElementById('heroBgLogoImg');

  /* Scroll kilitli — intro oynarken kaydırmayı engelle */
  document.body.style.overflow = 'hidden';

  /* Başlangıç state'leri */
  gsap.set(isLogo, { opacity: 0, scale: 0.55, y: 24 });
  gsap.set(isName, { opacity: 0, y: 52 });
  gsap.set(isSub,  { opacity: 0, y: 28 });
  gsap.set(isRule, { scaleX: 0, opacity: 0, transformOrigin: 'center' });
  gsap.set(isHint, { opacity: 0, y: 14 });

  /* Intro giriş animasyonu */
  const introTl = gsap.timeline({ delay: 0.15 });
  introTl
    .to(isLogo, {
      opacity: 1, scale: 1, y: 0,
      duration: 1.15, ease: 'back.out(1.5)',
    }, 0)
    .to(isName, {
      opacity: 1, y: 0,
      duration: 0.9, ease: 'power3.out',
    }, 0.55)
    .to(isSub, {
      opacity: 1, y: 0,
      duration: 0.75, ease: 'power3.out',
    }, 0.78)
    .to(isRule, {
      scaleX: 1, opacity: 1,
      duration: 0.9, ease: 'power2.out',
    }, 0.92)
    .to(isHint, {
      opacity: 1, y: 0,
      duration: 0.65, ease: 'power2.out',
    }, 1.35)
    /* Scroll'u 1.0s sonra aç */
    .add(() => {
      document.body.style.overflow = '';
    }, 1.0);

  /* ── Intro çıkış animasyonu ── */
  let introExited = false;
  let introReady  = false;
  introTl.add(() => { introReady = true; }, 0.9);

  function exitIntro() {
    if (introExited || !introReady) return;
    introExited = true;

    /* Exit sırasında sayfa kaymasın — bitince sıfırlanacak */
    document.body.style.overflow = 'hidden';

    const exitTl = gsap.timeline({
      onComplete() {
        introScreen.style.display = 'none';

        /* Scroll'u en başa al — projeler bölümü doğru konumda görünsün */
        window.scrollTo(0, 0);

        /* Scroll kilidini kaldır */
        document.body.style.overflow = '';

        /* Tüm ScrollTrigger pozisyonlarını yeniden hesapla */
        ScrollTrigger.refresh();

        runHeroAnimation();

        /* Arka plan logosu solukça belirir */
        gsap.to(heroBgLogoImg, {
          opacity: 0.055,
          duration: 1.4, ease: 'power2.out', delay: 0.3,
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
      .to(isHint, { opacity: 0, y: -16, duration: 0.25, ease: 'power2.in' }, 0)
      .to(isRule, { opacity: 0, width: 0, duration: 0.3, ease: 'power2.in' }, 0.05)
      .to(isSub,  { opacity: 0, y: -22, duration: 0.35, ease: 'power2.in' }, 0.08)
      .to(isName, { opacity: 0, y: -36, duration: 0.42, ease: 'power2.in' }, 0.13)
      .to(isLogo, { opacity: 0, scale: 0.75, duration: 0.45, ease: 'power2.in' }, 0.18)
      .to(introScreen, { yPercent: -100, duration: 0.85, ease: 'power4.inOut' }, 0.28);
  }

  /* İlk etkileşim intro'yu kapatır */
  window.addEventListener('scroll',     exitIntro, { once: true, passive: true });
  window.addEventListener('wheel',      exitIntro, { once: true, passive: true });
  window.addEventListener('touchstart', exitIntro, { once: true, passive: true });

  /* ── HERO ── */
  function runHeroAnimation() {
    const heroTl = gsap.timeline({
      defaults: { ease: 'power4.out' }
    });
    heroTl
      .from('#heroSymbol',  { opacity: 0, scale: .7, duration: .9, ease: 'back.out(1.6)' }, 0)
      .from('#heroBadge',  { opacity: 0, y: 18, scale: .96, duration: .65 }, .38)
      .from('#heroLine1',  { yPercent: 115, duration: 1.05 }, .55)
      .from('#heroLine2',  { yPercent: 115, duration: 1.05 }, .71)
      .from('#heroLine3',  { yPercent: 115, duration: 1.05 }, .87)
      .from('#heroDesc',   { opacity: 0, y: 28, duration: .8 }, 1.1)
      .from('#heroBtns',   { opacity: 0, y: 22, duration: .65 }, 1.28)
      .from('#heroScroll', { opacity: 0, y: 14, duration: .55 }, 1.48);

    /* subtle float/breathe after entrance */
    heroTl.add(() => {
      gsap.to('#heroSymbol', {
        y: -10, duration: 2.8, ease: 'sine.inOut',
        repeat: -1, yoyo: true
      });
    }, 1.1);
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

  /* ── NAV SMOOTH SCROLL (pin-aware — takılma olmadan) ── */
  function navScrollTo(targetId) {
    /* Pinned section'lar için ScrollTrigger start pozisyonu kullan */
    if (targetId === 'services') {
      const st = ScrollTrigger.getById('svc-pin');
      if (st) { window.scrollTo({ top: Math.round(st.start), behavior: 'smooth' }); return; }
    }
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
    window.scrollTo({ top, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-links a, .mobile-link').forEach(link => {
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

  /* ── SECTION HEADINGS ── */
  document.querySelectorAll('.gs-section-head').forEach(el => {
    gsap.from(el.children, {
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      opacity: 0, y: 34, duration: .85, ease: 'power4.out', stagger: .11,
      immediateRender: false,
    });
  });

  /* ── REVEAL PAIRS ── */
  document.querySelectorAll('.gs-reveal').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      opacity: 0, x: i % 2 === 0 ? -40 : 40, duration: .85, ease: 'power3.out',
      immediateRender: false,
    });
  });

  /* ── VALUE ITEMS ── */
  document.querySelectorAll('.gs-value').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      opacity: 0, x: -24, duration: .55, ease: 'power3.out', delay: i * .1,
      immediateRender: false,
    });
  });

  /* ── SERVICES CAROUSEL ── */
  const svcPanels    = Array.from(document.querySelectorAll('.svc-slide'));
  const svcDots      = document.querySelectorAll('.sdot');
  const svcCurrentEl = document.getElementById('svcCurrent');
  const svcPbFill    = document.getElementById('svcPbFill');
  const svcHint      = document.getElementById('svcScrollHint');
  let svcActive = 0;
  let svcBusy   = false;  /* animasyon devam ediyor mu? */
  let svcTarget = -1;     /* meşgulken gelen son hedef (-1 = yok) */

  function showSvcPanel(idx, dir) {
    if (idx === svcActive || idx < 0 || idx >= svcPanels.length) return;
    const prev = svcPanels[svcActive];
    const next = svcPanels[idx];
    const d    = (dir === undefined) ? (idx > svcActive ? 1 : -1) : dir;

    gsap.set(prev, { zIndex: 2 });
    gsap.set(next, { zIndex: 3 });
    next.classList.add('active');
    svcActive = idx;
    svcBusy   = true;

    /* Dikey wipe — aşağı kaydır → yeni panel alttan gelir, yukarı kaydır → üstten */
    gsap.fromTo(next,
      { clipPath: d > 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: .65, ease: 'power3.inOut', overwrite: true }
    );

    /* Metin dikey kayarak gelir */
    gsap.fromTo(next.querySelector('.svc-left'),
      { y: d * 40, opacity: 0 },
      { y: 0, opacity: 1, duration: .55, ease: 'power3.out', delay: .22, overwrite: true }
    );

    /* UI */
    svcDots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    if (svcCurrentEl) svcCurrentEl.textContent = String(idx + 1).padStart(2, '0');
    if (svcPbFill)    svcPbFill.style.width = ((idx / (svcPanels.length - 1)) * 100) + '%';
    if (svcHint && idx > 0) gsap.to(svcHint, { opacity: 0, duration: .3 });

    /* Animasyon bitince temizle + kilidi aç */
    gsap.delayedCall(0.68, () => {
      prev.classList.remove('active');
      gsap.set(prev, {
        clipPath: d > 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)',
        zIndex: 1,
      });
      gsap.set(prev.querySelector('.svc-left'), { clearProps: 'y,opacity' });
      svcBusy = false;

      /* Biz animasyon yaparken hedef değiştiyse hemen oraya git */
      if (svcTarget !== -1 && svcTarget !== svcActive) {
        const t = svcTarget; svcTarget = -1;
        showSvcPanel(t, t > svcActive ? 1 : -1);
      } else {
        svcTarget = -1;
      }
    });
  }

  /* ── Initialize ── */
  if (svcPanels.length) {
    gsap.set(svcPanels[0], { clipPath: 'inset(0 0% 0 0%)', zIndex: 2 });
    svcPanels.forEach((p, i) => {
      if (i > 0) {
        gsap.set(p, { clipPath: 'inset(0 0 0 100%)', zIndex: 1 });
        gsap.set(p.querySelector('.svc-left'), { opacity: 0 });
      }
    });

    /* ── ScrollTrigger PIN ── */
    ScrollTrigger.create({
      id: 'svc-pin',
      trigger: '#services',
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,          /* sabitleme öncesi titremeyi önler */
      start: 'top top',
      end: () => `+=${(svcPanels.length - 1) * window.innerHeight}`,

      onUpdate(self) {
        const newIdx = Math.min(
          svcPanels.length - 1,
          Math.floor(self.progress * svcPanels.length)
        );
        if (newIdx === svcActive) { svcTarget = -1; return; }

        if (svcBusy) {
          /* Meşgulken: hedefi güncelle, animasyon bitince uygulanacak */
          svcTarget = newIdx;
        } else {
          svcTarget = -1;
          showSvcPanel(newIdx, newIdx > svcActive ? 1 : -1);
        }
      },
    });

    /* ── Dot navigation ── */
    svcDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const st = ScrollTrigger.getById('svc-pin');
        if (!st) return;
        const extra   = (svcPanels.length - 1) * window.innerHeight;
        const portion = i === 0 ? 0 : (i / svcPanels.length + 0.02) * extra;
        window.scrollTo({ top: st.start + portion, behavior: 'smooth' });
      });
    });

    /* ── Cursor ring hover ── */
    document.querySelectorAll('.svc-slide, .svc-btn').forEach(el => {
      el.addEventListener('mouseenter', () => document.querySelector('.cursor-ring')?.classList.add('hover'));
      el.addEventListener('mouseleave', () => document.querySelector('.cursor-ring')?.classList.remove('hover'));
    });
  }

  /* ── FEATURED PROJECT ── */
  const fp = document.getElementById('featuredProject');
  if (fp) {
    gsap.from(fp, {
      scrollTrigger: { trigger: fp, start: 'top 92%', once: true },
      opacity: 0, y: 48, duration: .8, ease: 'power3.out',
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
    document.querySelectorAll('a, button, .svc-card, .featured-project, .svc-btn').forEach(el => {
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
});