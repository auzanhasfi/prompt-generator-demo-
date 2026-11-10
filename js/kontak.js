/* Tombol kontak melayang: WhatsApp, DM Instagram, DM Threads (ID / MS / EN).
   Pasang: <script src="/kontak.js" defer data-halaman="Nama halaman"></script>
   Bahasa diambil dari <html lang> setiap kali panel dibuka (ikut tukar bahasa). */
(function () {
  if (window.__kontakSiap) return; window.__kontakSiap = true;
  var skrip = document.currentScript || {};
  var ds = (skrip && skrip.dataset) || {};
  var HALAMAN = ds.halaman || document.title || '';
  var WA = '6285704973827', NO = '+62 857-0497-3827', IG = 'auzan_hasfi', TH = 'auzan_hasfi';
  var P = {
    wa: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    ig: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
    th: 'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z',
    chat: 'M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6A.5.5 0 0 1 5 19.2V16a1 1 0 0 1-1-1V5.5Z',
    x: 'M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19l5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6L19 6.4 17.6 5 12 10.6 6.4 5Z',
    panah: 'M9.3 6.7 10.7 5.3 17.4 12l-6.7 6.7-1.4-1.4 5.3-5.3-5.3-5.3Z'
  };
  var T = {
    id: { btn: 'Hubungi saya', judul: 'Mau tanya atau konsultasi?', sub: 'Pilih cara yang paling nyaman. Saya balas sendiri.',
          wa: 'WhatsApp', waS: NO, ig: 'DM Instagram', th: 'DM Threads', tutup: 'Tutup',
          teks: 'Halo Kak Auzan, saya dari ' + HALAMAN + '. Saya mau tanya/konsultasi tentang: ' },
    ms: { btn: 'Hubungi saya', judul: 'Nak tanya atau konsultasi?', sub: 'Pilih cara yang paling selesa. Saya balas sendiri.',
          wa: 'WhatsApp', waS: NO, ig: 'DM Instagram', th: 'DM Threads', tutup: 'Tutup',
          teks: 'Salam Auzan, saya dari ' + HALAMAN + '. Saya nak bertanya/konsultasi tentang: ' },
    en: { btn: 'Contact me', judul: 'Questions or need advice?', sub: 'Pick whichever is easiest. I reply personally.',
          wa: 'WhatsApp', waS: NO, ig: 'Instagram DM', th: 'Threads DM', tutup: 'Close',
          teks: 'Hi Auzan, I found you on ' + HALAMAN + '. I would like to ask about: ' }
  };
  function bahasa() {
    var l = (document.documentElement.lang || ds.lang || 'id').toLowerCase().slice(0, 2);
    return l === 'ms' || l === 'en' ? l : 'id';
  }
  function ikon(d, k) { return '<svg class="' + (k || '') + '" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="' + d + '"/></svg>'; }

  var css = '' +
  '.kon{--kon-hijau:#1FA855;--kon-tinta:#1d1a17;--kon-redup:#6b645c;--kon-garis:rgba(29,26,23,.1);position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px) + var(--kon-naik,0px));z-index:70;font-family:inherit;-webkit-font-smoothing:antialiased;transition:bottom .35s cubic-bezier(.2,.8,.2,1)}' +
  '.kon *{box-sizing:border-box}' +
  '.kon-btn{display:flex;align-items:center;gap:9px;height:52px;padding:0 18px 0 8px;border:0;border-radius:999px;background:var(--kon-hijau);color:#fff;font-family:inherit;font-size:15px;font-weight:700;line-height:1;cursor:pointer;box-shadow:0 10px 26px -8px rgba(31,168,85,.6),0 2px 6px rgba(0,0,0,.12);transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s}' +
  '.kon-btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px -8px rgba(31,168,85,.7),0 2px 6px rgba(0,0,0,.12)}' +
  '.kon-btn:focus-visible,.kon-op:focus-visible,.kon-x:focus-visible{outline:3px solid #1d1a17;outline-offset:2px}' +
  '.kon-bulat{position:relative;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.18);display:grid;place-items:center}' +
  '.kon-bulat svg{width:22px;height:22px;position:absolute;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .2s}' +
  '.kon-bulat .kon-ix{opacity:0;transform:rotate(-90deg) scale(.6)}' +
  '.kon.buka .kon-bulat .kon-iw{opacity:0;transform:rotate(90deg) scale(.6)}.kon.buka .kon-bulat .kon-ix{opacity:1;transform:none}' +
  '.kon-btn::before{content:"";position:absolute;left:8px;top:7px;width:38px;height:38px;border-radius:50%;box-shadow:0 0 0 0 rgba(31,168,85,.55);animation:kon-denyut 2.6s ease-out infinite;pointer-events:none}' +
  '.kon.buka .kon-btn::before,.kon.diam .kon-btn::before{animation:none}' +
  '@keyframes kon-denyut{0%{box-shadow:0 0 0 0 rgba(255,255,255,.55)}70%,100%{box-shadow:0 0 0 14px rgba(255,255,255,0)}}' +
  '.kon-btn{position:relative}' +
  '.kon-panel{position:absolute;left:0;bottom:64px;width:min(320px,calc(100vw - 32px));background:#fff;color:var(--kon-tinta);border-radius:20px;padding:18px 14px 14px;box-shadow:0 24px 60px -18px rgba(29,26,23,.45),0 0 0 1px var(--kon-garis);transform-origin:20px 100%;transform:translateY(10px) scale(.94);opacity:0;visibility:hidden;transition:transform .32s cubic-bezier(.2,.8,.2,1),opacity .2s,visibility 0s .32s}' +
  '.kon.buka .kon-panel{transform:none;opacity:1;visibility:visible;transition:transform .32s cubic-bezier(.2,.8,.2,1),opacity .2s}' +
  '.kon-kepala{display:flex;align-items:flex-start;gap:10px;padding:0 4px 12px}' +
  '.kon-kepala b{display:block;font-size:16px;line-height:1.25;letter-spacing:-.01em}' +
  '.kon-kepala span{display:block;margin-top:4px;font-size:13px;line-height:1.4;color:var(--kon-redup);font-weight:500}' +
  '.kon-x{margin-left:auto;flex:none;width:30px;height:30px;border:0;border-radius:50%;background:rgba(29,26,23,.06);color:var(--kon-tinta);display:grid;place-items:center;cursor:pointer}' +
  '.kon-x svg{width:16px;height:16px}' +
  '.kon-op{display:flex;align-items:center;gap:12px;padding:10px;border-radius:14px;color:inherit;text-decoration:none;opacity:0;transform:translateY(8px);transition:background .2s,opacity .3s,transform .35s cubic-bezier(.2,.8,.2,1)}' +
  '.kon.buka .kon-op{opacity:1;transform:none}.kon.buka .kon-op:nth-of-type(2){transition-delay:.05s}.kon.buka .kon-op:nth-of-type(3){transition-delay:.1s}' +
  '.kon-op:hover{background:rgba(29,26,23,.05)}' +
  '.kon-ik{flex:none;width:42px;height:42px;border-radius:12px;display:grid;place-items:center;color:#fff}' +
  '.kon-ik svg{width:22px;height:22px}' +
  '.kon-ik.wa{background:#1FA855}.kon-ik.ig{background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285AEB 90%)}.kon-ik.th{background:#111}' +
  '.kon-teks{min-width:0;flex:1}.kon-teks b{display:block;font-size:15px;line-height:1.2}.kon-teks small{display:block;margin-top:3px;font-size:12.5px;color:var(--kon-redup);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
  '.kon-panah{width:18px;height:18px;color:var(--kon-redup);flex:none}' +
  '@media (max-width:620px){.kon{left:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px) + var(--kon-naik,0px))}.kon-btn{height:50px;padding:0 6px}.kon-btn .kon-label{display:none}.kon-btn::before{left:6px;top:6px}.kon-panel{bottom:60px}}' +
  '@media (prefers-reduced-motion:reduce){.kon *,.kon *::before{animation:none!important;transition:none!important}}' +
  '@media print{.kon{display:none}}';

  function pasang() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var el = document.createElement('div'); el.className = 'kon'; el.id = 'kontak';
    document.body.appendChild(el);
    var buka = false;
    function render() {
      var t = T[bahasa()];
      var waUrl = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t.teks);
      el.innerHTML =
        '<div class="kon-panel" role="dialog" aria-label="' + t.judul + '" id="konPanel">' +
          '<div class="kon-kepala"><div><b>' + t.judul + '</b><span>' + t.sub + '</span></div>' +
          '<button type="button" class="kon-x" aria-label="' + t.tutup + '">' + ikon(P.x) + '</button></div>' +
          '<a class="kon-op" data-kon="wa" href="' + waUrl + '" target="_blank" rel="noopener"><span class="kon-ik wa">' + ikon(P.wa) + '</span><span class="kon-teks"><b>' + t.wa + '</b><small>' + t.waS + '</small></span>' + ikon(P.panah, 'kon-panah') + '</a>' +
          '<a class="kon-op" data-kon="ig" href="https://ig.me/m/' + IG + '" target="_blank" rel="noopener"><span class="kon-ik ig">' + ikon(P.ig) + '</span><span class="kon-teks"><b>' + t.ig + '</b><small>@' + IG + '</small></span>' + ikon(P.panah, 'kon-panah') + '</a>' +
          '<a class="kon-op" data-kon="threads" href="https://www.threads.com/@' + TH + '" target="_blank" rel="noopener"><span class="kon-ik th">' + ikon(P.th) + '</span><span class="kon-teks"><b>' + t.th + '</b><small>@' + TH + '</small></span>' + ikon(P.panah, 'kon-panah') + '</a>' +
        '</div>' +
        '<button type="button" class="kon-btn" aria-expanded="' + buka + '" aria-controls="konPanel" aria-label="' + t.btn + '">' +
          '<span class="kon-bulat">' + ikon(P.wa, 'kon-iw') + ikon(P.x, 'kon-ix') + '</span><span class="kon-label">' + t.btn + '</span></button>';
    }
    function set(v) {
      buka = v; el.classList.toggle('buka', v); el.classList.add('diam');
      var b = el.querySelector('.kon-btn'); if (b) b.setAttribute('aria-expanded', v);
      if (v && window.clarity) try { window.clarity('event', 'kontak_buka'); } catch (e) {}
    }
    render();
    el.addEventListener('click', function (e) {
      if (e.target.closest('.kon-btn')) return set(!buka);
      if (e.target.closest('.kon-x')) return set(false);
      var op = e.target.closest('[data-kon]');
      if (op && window.clarity) try { window.clarity('event', 'kontak_' + op.dataset.kon); } catch (er) {}
    });
    document.addEventListener('click', function (e) { if (buka && !el.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (buka && e.key === 'Escape') { set(false); el.querySelector('.kon-btn').focus(); } });
    /* ikut tukar bahasa saat panel tertutup */
    new MutationObserver(function () { if (!buka) render(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    /* naik bila ada bilah bawah (LP tools di HP) */
    function cekBilah() {
      var naik = 0, b = document.querySelector('.ck-bilah.tampil');
      if (b && getComputedStyle(b).display !== 'none') naik = b.offsetHeight + 8;
      el.style.setProperty('--kon-naik', naik + 'px');
    }
    var rafB = 0, jadwal = function () { cancelAnimationFrame(rafB); rafB = requestAnimationFrame(cekBilah); };
    cekBilah(); window.addEventListener('scroll', jadwal, { passive: true }); window.addEventListener('resize', jadwal);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pasang); else pasang();
})();
