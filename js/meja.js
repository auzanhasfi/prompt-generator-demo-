/* Meja hero: laptop (Galeri Prompt → jendela AI) + HP (app jadi, TENG!). Frame = fungsi waktu t; bisa diklik. */
(function () {
  var mj = document.getElementById('meja');
  if (!mj) return;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var REDUKSI = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  if (MAC) $('#pintas .mod').textContent = '⌘';
  var PILIH = ['arena-clawd', 'petualangan-fotosintesis', 'grammo', 'crossy', 'sejarah-malaysia', 'kido-koda'];
  var AI = [['Claude', 'img/ai/claude.svg'], ['ChatGPT', 'img/ai/chatgpt.svg'], ['Gemini', 'img/ai/gemini.svg'], ['DeepSeek', 'img/ai/deepseek.png']];
  var P = 9.6, GM = [], kartu = [], pilih = 0, putar = -1, waktu = 0, tAkhir = 0, aktif = false, tKlik = -1;
  var baris = [], bubU, bubA, preA, lastNb = -1;
  var e = {
    gal: $('#lyrGal'), ai: $('#lyrAi'), grid: $('#galGrid'), tabG: $('#tabGal'), tabA: $('#tabAi'), aiLogo: $('#lapAiLogo'), aiNama: $('#lapAiNama'),
    chat: $('#aiChat'), inp: $('#aiInput'), ph: $('#aiPh'), kirim: $('#aiKirim'), pin: $('#pintas'), pinK: $('#pintasK'),
    hp: $('#hpx'), app: $('#hpxApp'), teng: $('#hpxTeng'), tengB: $('#hpxTeng b'), toast: $('#hpxToast'),
    kur: $('#mKursor'), bawa: $('#mBawa'), ktl: $$('#mejaKontrol button'), aiBox: $('#mejaAi')
  };
  var COPY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
  function tx(k) { return t(k); }
  function ease(x) { x = Math.min(1, Math.max(0, x)); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function eOut(x) { x = Math.min(1, Math.max(0, x)); return 1 - Math.pow(1 - x, 4); }
  function sg(u, a, b) { return (u - a) / (b - a); }
  function pos(n, fx, fy) { var r = n.getBoundingClientRect(), p = mj.getBoundingClientRect(); return { x: r.left - p.left + r.width * fx, y: r.top - p.top + r.height * fy }; }
  function lerp(a, b, k) { return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k }; }

  // tombol AI di bawah meja
  e.aiBox.insertAdjacentHTML('beforeend', AI.map(function (a, i) { return '<button type="button" data-i="' + i + '"><img src="' + a[1] + '" alt="">' + a[0] + '</button>'; }).join(''));
  var aiBtn = $$('button', e.aiBox);
  function setAI(i) { e.aiLogo.src = AI[i][1]; e.aiNama.textContent = AI[i][0]; aiBtn.forEach(function (b, k) { b.classList.toggle('on', k === i); }); }
  aiBtn.forEach(function (b, i) { b.addEventListener('click', function () { setAI(i); if (waktu % P > 2.3) lompat(2.3); }); });
  setAI(0);

  function siapkan() {
    var g = GM[pilih];
    kartu.forEach(function (k, i) { k.classList.toggle('pilih', i === pilih); var s = $('.sl', k); s.classList.remove('ok'); s.lastChild.textContent = tx('mjSalin'); });
    e.app.style.backgroundImage = 'url(' + g.img + ')';
    e.hp.href = g.preview;
    e.chat.innerHTML = '<div class="ai-u"><b>' + tx('mjKamu') + '</b>## ' + tx('mjTujuan') + '\n' + esc(g.n) + ' · ' + esc(g.mapel) + '\n## ' + tx('mjAturan') + ' …</div><div class="ai-a"><pre></pre></div>';
    bubU = $('.ai-u', e.chat); bubA = $('.ai-a', e.chat); preA = $('pre', bubA); lastNb = -1;
    baris = ['<span class="t">&lt;!doctype html&gt;</span>', '<span class="t">&lt;title&gt;</span>' + esc(g.n) + '<span class="t">&lt;/title&gt;</span>',
      '<span class="c">const</span> soal = buatSoal(<span class="s">"' + esc(g.mapel) + '"</span>);', '<span class="c">function</span> benar(){ skor += <span class="s">10</span>; }',
      'level.naik(); bintang++;', '<span class="c">// ' + tx('mjSiap') + '</span>'];
  }

  // dipanggil dari render() di app.js setiap bahasa berganti
  window.isiMeja = function () {
    var all = (window.DATA && DATA[S.lg]) || [];
    GM = PILIH.map(function (id) { return all.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
    if (!GM.length) return;
    if (pilih >= GM.length) pilih = 0;
    e.grid.innerHTML = GM.map(function (g, i) {
      return '<div class="gk2" data-i="' + i + '"><div class="gb" style="background-image:url(' + g.img + ')"></div><div class="nm"><b>' + esc(g.n) + '</b><small>' + esc(g.mapel) + '</small></div><span class="sl">' + COPY + '<span></span></span></div>';
    }).join('');
    kartu = $$('.gk2', e.grid);
    kartu.forEach(function (k, i) { k.addEventListener('click', function () { pilih = i; var n = Math.floor(waktu / P); tKlik = n; putar = n; siapkan(); lompat(.35); }); });
    siapkan(); gambar(waktu);
  };

  function gambar(tt) {
    if (!GM.length) return;
    var n = Math.floor(tt / P), u = tt - n * P;
    if (n !== putar) {
      if (putar >= 0 && n === putar + 1 && tKlik !== n) pilih = (pilih + 1) % GM.length;
      putar = n; siapkan();
    }
    var sl = $('.sl', kartu[pilih]);
    var geser = ease(sg(u, 1.9, 2.5)) - ease(sg(u, P - .6, P));
    e.gal.style.transform = 'translateX(' + (-geser * 100) + '%)';
    e.ai.style.transform = 'translateX(' + ((1 - geser) * 100) + '%)';
    var diAI = u > 2.2 && u < P - .3;
    e.tabG.classList.toggle('on', !diAI); e.tabA.classList.toggle('on', diAI);
    var rest = { x: mj.clientWidth * .5, y: mj.clientHeight * .95 };
    var pSl = pos(sl, .5, .6), pIn = pos(e.inp, .3, .55), pKr = pos(e.kirim, .5, .55), pHp = pos(e.hp, .5, .55), k;
    if (u < .3) k = rest;
    else if (u < 1.1) k = lerp(rest, pSl, ease(sg(u, .3, 1.1)));
    else if (u < 2.0) k = pSl;
    else if (u < 2.9) k = lerp(pSl, pIn, ease(sg(u, 2.0, 2.9)));
    else if (u < 3.7) k = pIn;
    else if (u < 4.1) k = lerp(pIn, pKr, ease(sg(u, 3.7, 4.1)));
    else if (u < 5.9) k = pKr;
    else if (u < 6.5) k = lerp(pKr, pHp, ease(sg(u, 5.9, 6.5)));
    else if (u < P - .7) k = pHp;
    else k = lerp(pHp, rest, ease(sg(u, P - .7, P)));
    e.kur.style.transform = 'translate(' + (k.x - mj.clientWidth * .006) + 'px,' + (k.y - mj.clientWidth * .004) + 'px)';
    e.kur.classList.toggle('tekan', (u > 1.15 && u < 1.4) || (u > 4.1 && u < 4.35) || (u > 6.55 && u < 6.8));
    var ok = u > 1.2 && u < P - .6;
    if (ok !== sl.classList.contains('ok') || !sl.lastChild.textContent) { sl.classList.toggle('ok', ok); sl.lastChild.textContent = ok ? tx('mjOk') : tx('mjSalin'); }
    var pc = u > 1.2 && u < 1.9 ? eOut(sg(u, 1.2, 1.45)) * (1 - ease(sg(u, 1.7, 1.9))) : u > 3.0 && u < 3.7 ? eOut(sg(u, 3.0, 3.25)) * (1 - ease(sg(u, 3.5, 3.7))) : 0;
    e.pinK.textContent = u < 2.5 ? 'C' : 'V';
    e.pin.style.transform = 'translate(-50%,-50%) scale(' + pc + ')';
    var bs = u < 1.3 ? 0 : u < 1.5 ? eOut(sg(u, 1.3, 1.5)) : u < 3.0 ? 1 : u < 3.2 ? 1 - sg(u, 3.0, 3.2) : 0;
    e.bawa.style.transform = 'translate(' + (k.x + 14) + 'px,' + (k.y + 16) + 'px) scale(' + bs + ')';
    var isi = u > 3.1 && u < 4.2;
    e.inp.classList.toggle('fokus', u > 2.7 && u < 4.2);
    e.inp.classList.toggle('isi', isi);
    e.ph.textContent = isi ? '## ' + tx('mjTujuan') + ' · ## ' + tx('mjAturan') + ' · ## ' + tx('mjTampilan') + ' …' : tx('mjPh');
    e.kirim.classList.toggle('siap', isi); e.kirim.classList.toggle('tekan', u > 4.1 && u < 4.3);
    bubU.style.display = u < 4.2 ? 'none' : ''; bubU.style.transform = 'scale(' + eOut(sg(u, 4.2, 4.5)) + ')';
    bubA.style.display = u < 4.55 ? 'none' : ''; bubA.style.transform = 'scale(' + eOut(sg(u, 4.55, 4.85)) + ')';
    var nb = Math.max(0, Math.min(baris.length, Math.floor(sg(u, 4.7, 5.8) * baris.length)));
    if (nb !== lastNb) { lastNb = nb; preA.innerHTML = baris.slice(0, nb).join('\n') + (nb < baris.length ? '<span class="c">▍</span>' : ''); }
    e.hp.classList.toggle('tekan', u > 6.55 && u < 6.8);
    var buka = eOut(sg(u, 6.6, 7.2)), tutup = ease(sg(u, P - .6, P));
    e.app.style.clipPath = 'inset(' + ((1 - buka) * 100) + '% 0 ' + (tutup * 100) + '% 0)';
    var tg = u < 6.7 ? 0 : u < 7.15 ? 1.2 * eOut(sg(u, 6.7, 7.15)) : u < 7.9 ? 1.2 - .2 * sg(u, 7.15, 7.9) : u < 8.3 ? 1 - ease(sg(u, 7.9, 8.3)) : 0;
    e.tengB.style.transform = 'rotate(-8deg) scale(' + Math.max(0, tg) + ')';
    e.teng.classList.toggle('on', u > 6.7 && u < 7.6);
    var ts = u < 7.6 ? 0 : u < P - .8 ? eOut(sg(u, 7.6, 8)) : 1 - ease(sg(u, P - .8, P - .5));
    e.toast.style.transform = 'translate(-50%,' + (300 - ts * 300) + '%)';
    var lg = u < 2.3 ? 0 : u < 5.9 ? 1 : 2, batas = [[0, 2.3], [2.3, 5.9], [5.9, P]];
    e.ktl.forEach(function (b, i) { b.classList.toggle('on', i === lg); $('i', b).style.width = (i < lg ? 100 : i > lg ? 0 : Math.min(100, sg(u, batas[i][0], batas[i][1]) * 100)) + '%'; });
  }
  function lompat(x) { var n = Math.floor(waktu / P); waktu = n * P + x; tKlik = n; gambar(waktu); }
  e.ktl.forEach(function (b) { b.addEventListener('click', function () { lompat(+b.dataset.t0); }); });
  function loop(now) {
    if (!aktif) return;
    var dt = tAkhir ? Math.min(.5, (now - tAkhir) / 1000) : 0; tAkhir = now; waktu += dt;
    gambar(waktu); requestAnimationFrame(loop);
  }
  window.__meja = function (x) { waktu = x; gambar(x); };
  if (window.DATA && DATA[S.lg]) isiMeja();
  if (REDUKSI) { waktu = 7.6; gambar(waktu); return; }
  new IntersectionObserver(function (es) {
    aktif = es[0].isIntersecting && !document.hidden;
    if (aktif) { tAkhir = 0; requestAnimationFrame(loop); }
  }).observe(mj);
})();
