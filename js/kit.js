/* =========================================================
   MARKETING KIT (demo): penjelasan 4 bahagian kit jualan versi Pro
   + 2 prompt video percuma dengan pratonton KOD (video/<id>.html).
   Dipanggil dari render() (js/app.js) setiap kali bahasa bertukar.
   ========================================================= */
(function () {
  var KV = { bhs: {} };
  var ICK = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/></svg>',
    game: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 13.5h.01"/></svg>',
    page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h6M7 16h10"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M10 9l5 3-5 3z"/></svg>',
    copy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
    eye: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
  };
  function e(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function vp(v) { return v.prompt[KV.bhs[v.id] || 'ms']; }
  window.isiKit = function () {
    var el = document.getElementById('kit'); if (!el || !window.KIT_VID) return;
    var parts = [['phone', 'kA', 'kAd', 'kPro'], ['game', 'kG', 'kGd', 'kPro'], ['page', 'kL', 'kLd', 'kPro'], ['play', 'kV', 'kVd', 'kFree']];
    var flow = ['kf1', 'kf2', 'kf3', 'kf4', 'kf5', 'kf6'];
    el.querySelector('#kitParts').innerHTML = parts.map(function (p, i) {
      return '<div class="kp"><span class="kp-n">' + (i + 1) + '</span><span class="kp-i">' + ICK[p[0]] + '</span><b>' + t(p[1]) + '</b><p>' + t(p[2]) + '</p><span class="kp-tag ' + (p[3] === 'kFree' ? 'free' : '') + '">' + (p[3] === 'kFree' ? '' : ICK.lock) + t(p[3]) + '</span></div>';
    }).join('');
    el.querySelector('#kitFlow').innerHTML = flow.map(function (k, i) { return '<li><span>' + (i + 1) + '</span><div><b>' + t(k) + '</b><small>' + t(k + 'd') + '</small><em class="kf-alat">' + t(k + 'a') + '</em></div></li>'; }).join('');
    el.querySelector('#kitVids').innerHTML = KIT_VID.map(function (v, i) {
      var b = KV.bhs[v.id] || 'ms';
      return '<article class="kv">' +
        '<div class="kv-box" data-kvbox="' + v.id + '"><img src="img/video/' + v.id + '.jpg" alt="" loading="lazy" width="540" height="960">' +
        '<button class="kv-play" data-kvplay="' + v.id + '"><span class="kv-pi">▶</span><span class="kv-pl">' + t('kvPlay') + '</span></button><span class="kv-code">&lt;/&gt; ' + t('kvCode') + '</span></div>' +
        '<div class="kv-body"><span class="kv-jenis">' + t('kv' + (i + 1) + 'j') + '</span><h3>' + t('kv' + (i + 1) + 'n') + '</h3><p>' + t('kv' + (i + 1) + 'd') + '</p>' +
        '<div class="kv-bhs" role="group" aria-label="' + e(t('kvBhs')) + '"><span>' + t('kvBhs') + '</span>' + [['ms', 'BM'], ['id', 'ID'], ['en', 'EN']].map(function (l) { return '<button data-kvbhs="' + v.id + ':' + l[0] + '" aria-pressed="' + (b === l[0]) + '">' + l[1] + '</button>'; }).join('') + '</div>' +
        '<div class="kv-act"><button class="btn pro" data-kvcopy="' + v.id + '">' + ICK.copy + '<span>' + t('copy') + '</span></button><button class="btn line" data-kvview="' + v.id + '">' + ICK.eye + '<span>' + t('view') + '</span></button></div>' +
        '<pre class="kv-pre" id="kvpre-' + v.id + '" hidden></pre></div></article>';
    }).join('');
  };
  function stopAll() { [].forEach.call(document.querySelectorAll('.kv-box.on'), function (b) { var f = b.querySelector('iframe'); if (f) f.remove(); b.classList.remove('on'); b.querySelector('.kv-pi').textContent = '▶'; b.querySelector('.kv-pl').textContent = t('kvPlay'); }); }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-kvplay],[data-kvcopy],[data-kvview],[data-kvbhs]'); if (!b) return;
    var d = b.dataset, v;
    if (d.kvplay) {
      var box = document.querySelector('[data-kvbox="' + d.kvplay + '"]'), on = box.classList.contains('on'); stopAll(); if (on) return;
      var f = document.createElement('iframe'); f.src = 'video/' + d.kvplay + '.html?auto=1'; f.title = t('kvPlay'); f.setAttribute('allow', 'autoplay'); box.appendChild(f); box.classList.add('on');
      box.querySelector('.kv-pi').textContent = '■'; box.querySelector('.kv-pl').textContent = t('kvStop'); return;
    }
    if (d.kvbhs) { var p = d.kvbhs.split(':'); KV.bhs[p[0]] = p[1]; stopAll(); isiKit(); return; }
    v = KIT_VID.filter(function (x) { return x.id === (d.kvcopy || d.kvview); })[0]; if (!v) return;
    if (d.kvcopy) { copyText(vp(v), b); return; }
    if (d.kvview) { var pre = document.getElementById('kvpre-' + v.id); if (pre.hidden) { pre.textContent = vp(v); pre.hidden = false; } else pre.hidden = true; }
  });
  if (window.S && S.lg) try { isiKit(); } catch (er) { }
})();
