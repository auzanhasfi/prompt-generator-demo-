/* =========================================================
   ANIMASI CARA PAKAI + muncul saat di-scroll.
   Alur berulang: 1 pilih kartu → 2 salin prompt → 3 tempel ke AI → 4 game jadi.
   Tiap tahap = data-step pada #demo (CSS yang menggeser layar) dan pada
   #caraLangkah (langkah kiri ikut menyala). Isi kartu & prompt diambil dari
   data bahasa aktif, jadi ikut berganti saat bahasa diganti.
   ========================================================= */
(function () {
  var demo = $('demo'), daftar = $('caraLangkah');
  if (!demo) return;
  var isi = demo.querySelector('.demo-isi'), kursor = demo.querySelector('.kursor');
  var hemat = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function tidur(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* dua kartu contoh: kartu kedua (yang dipilih) diutamakan Arena Clawd */
  function isiKartu() {
    var all = items();
    if (!all.length) return null;
    var pilih = all.filter(function (i) { return i.id === 'arena-clawd'; })[0] || all[0];
    var lain = all.filter(function (i) { return i !== pilih && i.kat !== 'app'; })[0] || all[1] || pilih;
    $('dImg1').src = lain.img; $('dNama1').textContent = lain.n;
    $('dImg2').src = pilih.img; $('dNama2').textContent = pilih.n;
    $('dImgJadi').src = pilih.img;
    $('dNamaP').textContent = pilih.n;
    $('demoBar').textContent = t('demoBar');
    demo.setAttribute('aria-label', t('caraEyebrow'));
    return pilih;
  }

  /* potongan awal prompt asli, tanpa baris kosong */
  function potongan(p, baris) {
    return p.split('\n').filter(function (x) { return x.trim(); }).slice(0, baris).join('\n');
  }

  function arahkan(sel, dx, dy) {
    var el = demo.querySelector(sel);
    if (!el) return;
    var a = isi.getBoundingClientRect(), b = el.getBoundingClientRect();
    kursor.style.setProperty('--kx', (b.left - a.left + b.width * (dx == null ? .5 : dx)) + 'px');
    kursor.style.setProperty('--ky', (b.top - a.top + b.height * (dy == null ? .55 : dy)) + 'px');
  }
  async function tekan() { kursor.classList.add('tekan'); await tidur(160); kursor.classList.remove('tekan'); }

  function tahap(n, dur) {
    demo.style.setProperty('--dur', dur + 'ms');
    daftar.style.setProperty('--dur', dur + 'ms');
    demo.setAttribute('data-step', n);
    daftar.setAttribute('data-step', n);
  }

  async function ketik(el, teks, total) {
    var lompat = Math.max(1, Math.round(teks.length / (total / 30)));
    for (var i = 0; i <= teks.length; i += lompat) { el.textContent = teks.slice(0, i); await tidur(30); }
    el.textContent = teks;
  }

  async function putar() {
    while (true) {
      var it = isiKartu();
      if (!it) { await tidur(500); continue; }
      var teks = potongan(it.prompt, 9);
      demo.classList.remove('dipilih', 'tersalin', 'tertempel', 'terkirim', 'main');
      $('dPrompt').textContent = ''; $('dTempel').textContent = '';
      tahap(0, 0);
      await tidur(80);

      tahap(1, 3400);
      await tidur(500); arahkan('.dk.pilih .dk-img');
      await tidur(900); arahkan('.dk.pilih .salin-k');
      await tidur(900); await tekan(); demo.classList.add('dipilih');
      await tidur(1000);

      tahap(2, 4400);
      await tidur(400); await ketik($('dPrompt'), teks, 1800);
      arahkan('.d-salin'); await tidur(800); await tekan(); demo.classList.add('tersalin');
      await tidur(1300);

      tahap(3, 4600);
      demo.classList.remove('tersalin');
      await tidur(400); arahkan('.ai-input', .3); await tidur(900); await tekan();
      $('dTempel').textContent = potongan(it.prompt, 5); demo.classList.add('tertempel');
      await tidur(700); arahkan('.ai-kirim'); await tidur(800); await tekan(); demo.classList.add('terkirim');
      await tidur(1700);

      tahap(4, 3800);
      await tidur(900); arahkan('.jadi-play'); await tidur(900); await tekan(); demo.classList.add('main');
      await tidur(1900);
    }
  }

  if (hemat) { var it = isiKartu(); if (it) $('dPrompt').textContent = potongan(it.prompt, 9); tahap(2, 0); }
  else setTimeout(putar, 900);

  /* muncul saat terlihat. Pakai posisi, bukan IntersectionObserver:
     elemen yang masih ter-clip-path penuh tidak pernah dianggap "terlihat". */
  var sisa = [].slice.call(document.querySelectorAll('.naik'));
  function periksa() {
    var h = innerHeight;
    sisa = sisa.filter(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < h - 60 && r.bottom > 0) { el.classList.add('tampak'); return false; }
      return true;
    });
  }
  addEventListener('scroll', periksa, { passive: true });
  addEventListener('resize', periksa);
  periksa();
})();
