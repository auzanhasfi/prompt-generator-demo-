/* =========================================================
   PEMUTAR PRATONTON VIDEO (kod, bukan fail video)
   Setiap filem = fungsi masa: FILM.draw(c, t) melukis satu bingkai pada saat t (saat).
   Filem mendaftar dengan KIT.film({W,H,dur,poster,bpm,chords,mood,sfx,draw}).
   Parameter URL: ?t=8 (bingkai poster), ?auto=1 (main senyap terus).
   ========================================================= */
(function () {
  'use strict';
  var K = window.KIT = {};

  /* ---------- matematik & gerak ---------- */
  K.cl = function (x, a, b) { return x < (a == null ? 0 : a) ? (a == null ? 0 : a) : x > (b == null ? 1 : b) ? (b == null ? 1 : b) : x; };
  K.lerp = function (a, b, k) { return a + (b - a) * k; };
  K.prog = function (t, a, b) { return K.cl((t - a) / (b - a)); };
  K.eo = function (k) { return 1 - Math.pow(1 - k, 3); };          // ease out cubic
  K.eio = function (k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; };
  K.back = function (k) { var c = 1.70158, d = c + 1; return 1 + d * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2); };
  K.expo = function (k) { return k >= 1 ? 1 : 1 - Math.pow(2, -10 * k); };
  K.spring = function (k) { return k >= 1 ? 1 : 1 - Math.cos(k * 4.6) * Math.exp(-k * 6); };
  K.rnd = function (s) { var x = Math.sin(s * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

  /* ---------- lukisan asas ---------- */
  K.rr = function (c, x, y, w, h, r) { r = Math.min(r, w / 2, h / 2); c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); };
  K.circle = function (c, x, y, r) { c.beginPath(); c.arc(x, y, Math.max(0, r), 0, Math.PI * 2); };
  K.font = function (c, w, s, f) { c.font = w + ' ' + s + 'px ' + f; };
  /* teks dengan perkataan muncul satu demi satu; hl = senarai perkataan yang diwarnakan */
  K.words = function (c, str, x, y, o) {
    o = o || {}; var ws = str.split(' '), t = o.t == null ? 99 : o.t, gap = o.gap || .12, sp = c.measureText(' ').width;
    var total = 0; ws.forEach(function (w) { total += c.measureText(w).width; }); total += sp * (ws.length - 1);
    var cx = o.align === 'center' ? x - total / 2 : o.align === 'right' ? x - total : x;
    ws.forEach(function (w, i) {
      var k = K.eo(K.prog(t, i * gap, i * gap + .28)); var ww = c.measureText(w).width;
      if (k > 0) {
        c.save(); c.globalAlpha *= Math.min(1, k * 1.4); c.translate(cx, y + (1 - k) * (o.rise == null ? 18 : o.rise));
        var hl = o.hl && o.hl.indexOf(w.replace(/[.,!?:]/g, '')) >= 0;
        if (o.stroke) { c.lineWidth = o.stroke; c.strokeStyle = o.strokeColor || '#000'; c.lineJoin = 'round'; c.strokeText(w, 0, 0); }
        c.fillStyle = hl ? (o.hlColor || '#FD5E2B') : (o.color || c.fillStyle); c.fillText(w, 0, 0); c.restore();
      }
      cx += ww + sp;
    });
    return total;
  };
  K.wrap = function (c, str, maxW) { var ws = str.split(' '), L = [], cur = ''; ws.forEach(function (w) { var n = cur ? cur + ' ' + w : w; if (c.measureText(n).width > maxW && cur) { L.push(cur); cur = w; } else cur = n; }); if (cur) L.push(cur); return L; };
  /* takarir: senarai {a,b,s,hl} → baris aktif pada saat t */
  K.cue = function (list, t) { for (var i = 0; i < list.length; i++) if (t >= list[i][0] && t < list[i][1]) return { i: i, a: list[i][0], b: list[i][1], s: list[i][2], hl: list[i][3] || [] }; return null; };
  /* ikon garis ringkas */
  K.icon = function (c, n, x, y, s, col, lw) {
    c.save(); c.translate(x, y); c.scale(s / 24, s / 24); c.strokeStyle = col; c.lineWidth = (lw || 2) * 24 / s * (s / 24); c.lineCap = 'round'; c.lineJoin = 'round';
    var p = new Path2D(K.IC[n] || ''); c.stroke(p); c.restore();
  };
  K.IC = {
    copy: 'M8 8h12v12H8zM16 8V4H4v12h4', check: 'M5 12.5l4.5 4.5L19 7.5', play: 'M7 5l12 7-12 7z', phone: 'M8 2.5h8a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2zM10.5 18.5h3',
    game: 'M7 7h10a5 5 0 0 1 0 11H7A5 5 0 0 1 7 7zM7 11v3M5.5 12.5h3M15.5 12h.01M18 13.5h.01', spark: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z', chat: 'M4 5h16v11H9l-5 4z',
    coin: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 9.5c0-1 1.3-1.8 3-1.8s3 .8 3 1.8-1.3 1.6-3 1.9-3 .9-3 2 1.3 1.8 3 1.8 3-.8 3-1.8M12 6v12', bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z',
    clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2', arrow: 'M5 12h14M13 6l6 6-6 6', star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z',
    heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z', send: 'M4 12l16-8-6 16-2-6z', cursor: 'M5 3l14 7-6 2-2 6z', book: 'M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z'
  };
  /* maskot bulat (Si Bulat) */
  K.bulat = function (c, x, y, r, t, mood, col) {
    var b = Math.sin(t * 5) * r * .04, blink = (t % 3.1) < .12;
    c.save(); c.translate(x, y + b);
    c.fillStyle = 'rgba(0,0,0,.16)'; c.beginPath(); c.ellipse(0, r * 1.02 - b, r * .8, r * .14, 0, 0, Math.PI * 2); c.fill();
    c.fillStyle = col || '#FD5E2B'; K.circle(c, 0, 0, r); c.fill();
    c.fillStyle = 'rgba(255,255,255,.22)'; K.circle(c, -r * .35, -r * .4, r * .22); c.fill();
    c.fillStyle = '#2A1208'; c.strokeStyle = '#2A1208'; c.lineWidth = r * .09; c.lineCap = 'round';
    if (blink || mood === 'happy') { c.beginPath(); c.arc(-r * .33, -r * .05, r * .13, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); c.beginPath(); c.arc(r * .33, -r * .05, r * .13, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); }
    else { K.circle(c, -r * .32, -r * .08, r * .1); c.fill(); K.circle(c, r * .32, -r * .08, r * .1); c.fill(); }
    c.beginPath(); if (mood === 'sad') c.arc(0, r * .42, r * .22, Math.PI * 1.15, Math.PI * 1.85); else c.arc(0, r * .12, r * .26, Math.PI * .15, Math.PI * .85); c.stroke();
    c.fillStyle = 'rgba(255,140,150,.45)'; K.circle(c, -r * .58, r * .18, r * .12); c.fill(); K.circle(c, r * .58, r * .18, r * .12); c.fill();
    c.restore();
  };

  /* ---------- muzik sintesis (Web Audio), perlahan ---------- */
  var AC = null, MASTER = null, schedT = null, nextBeat = 0, film = null, muted = false;
  function mtof(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function audio() {
    if (AC) return AC;
    try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    MASTER = AC.createGain(); MASTER.gain.value = muted ? 0 : .5;
    var comp = AC.createDynamicsCompressor(); MASTER.connect(comp); comp.connect(AC.destination);
    return AC;
  }
  function env(g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  function note(type, f, t, dur, vol, cut) {
    var o = AC.createOscillator(), g = AC.createGain(), fl = AC.createBiquadFilter();
    o.type = type; o.frequency.value = f; fl.type = 'lowpass'; fl.frequency.value = cut || 1800;
    o.connect(fl); fl.connect(g); g.connect(MASTER); env(g, t, .01, vol, dur); o.start(t); o.stop(t + dur + .05);
  }
  function pad(f, t, dur, vol) {
    [-6, 6].forEach(function (dt) {
      var o = AC.createOscillator(), g = AC.createGain(), fl = AC.createBiquadFilter();
      o.type = 'sawtooth'; o.frequency.value = f; o.detune.value = dt; fl.type = 'lowpass'; fl.frequency.value = 700;
      o.connect(fl); fl.connect(g); g.connect(MASTER);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + dur * .3); g.gain.linearRampToValueAtTime(0.0001, t + dur);
      o.start(t); o.stop(t + dur + .05);
    });
  }
  function kick(t, v) { var o = AC.createOscillator(), g = AC.createGain(); o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(42, t + .18); o.connect(g); g.connect(MASTER); env(g, t, .004, v, .25); o.start(t); o.stop(t + .3); }
  var NOISE = null;
  function noise(t, dur, v, hp, bp) {
    if (!NOISE) { NOISE = AC.createBuffer(1, AC.sampleRate, AC.sampleRate); var d = NOISE.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
    var s = AC.createBufferSource(), g = AC.createGain(), f = AC.createBiquadFilter(); s.buffer = NOISE; f.type = bp ? 'bandpass' : 'highpass'; f.frequency.value = hp || 7000;
    s.connect(f); f.connect(g); g.connect(MASTER); env(g, t, .003, v, dur); s.start(t); s.stop(t + dur + .05);
  }
  K.sfx = function (type, t) {
    if (!AC || muted) return;
    if (type === 'pop') note('sine', 880, t, .12, .12, 4000);
    else if (type === 'tap') { note('triangle', 1250, t, .05, .09, 6000); }
    else if (type === 'whoosh') { var s = AC.createBufferSource(); noise(t, .35, .06, 900, true); }
    else if (type === 'ding') { note('sine', 1320, t, .5, .1, 6000); note('sine', 1980, t + .06, .45, .05, 6000); }
    else if (type === 'boom') { kick(t, .5); noise(t, .4, .05, 300, true); }
  };
  function schedule() {
    if (!AC || !film) return;
    var bpm = film.bpm || 96, spb = 60 / bpm, now = AC.currentTime, ft = player.time();
    while (nextBeat * spb < ft + .25) {
      var bt = nextBeat * spb, at = now + (bt - ft);
      if (bt >= ft - .02 && bt < film.dur) {
        var ch = film.chords || [57, 53, 48, 55], bar = Math.floor(nextBeat / 4), root = ch[bar % ch.length], m = film.mood || 'soft', b4 = nextBeat % 4;
        if (b4 === 0) { pad(mtof(root), at, spb * 4, .035); pad(mtof(root + (m === 'dark' ? 3 : 4)), at, spb * 4, .025); pad(mtof(root + 7), at, spb * 4, .025); }
        if (m !== 'paint') { if (b4 === 0 || b4 === 2) kick(at, m === 'drive' ? .35 : .22); noise(at + spb / 2, .04, m === 'drive' ? .05 : .03); }
        var arp = [0, 7, 12, 16, 12, 7, 4, 7]; if (m === 'dark') arp = [0, 3, 7, 10, 7, 3, 0, 3];
        note(m === 'paint' ? 'sine' : 'triangle', mtof(root + 12 + arp[(nextBeat * 2) % 8]), at, spb * .8, m === 'paint' ? .05 : .045, 2400);
        note(m === 'paint' ? 'sine' : 'triangle', mtof(root + 12 + arp[(nextBeat * 2 + 1) % 8]), at + spb / 2, spb * .7, .035, 2400);
      }
      nextBeat++;
    }
    (film.sfx || []).forEach(function (s) { if (!s.done && s[0] >= ft && s[0] < ft + .25) { s.done = 1; K.sfx(s[1], now + (s[0] - ft)); } });
  }
  function resetSched() { var spb = 60 / ((film && film.bpm) || 96); nextBeat = Math.ceil(player.time() / spb); (film.sfx || []).forEach(function (s) { s.done = 0; }); }

  /* ---------- pemutar ---------- */
  var player = { playing: false, t0: 0, base: 0 };
  player.time = function () { return player.playing ? player.base + (performance.now() - player.t0) / 1000 : player.base; };
  K.film = function (F) {
    film = F;
    var q = new URLSearchParams(location.search), poster = q.has('t') ? +q.get('t') : (F.poster || 0);
    document.documentElement.style.background = '#111'; document.body.style.cssText = 'margin:0;background:#111;overflow:hidden;font-family:system-ui,sans-serif;height:100vh';
    var wrap = document.createElement('div'); wrap.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center';
    var cv = document.createElement('canvas'); cv.width = F.W; cv.height = F.H; cv.style.cssText = 'display:block;max-width:100%;max-height:100%;aspect-ratio:' + F.W + '/' + F.H + ';width:auto;height:100%';
    if (F.W > F.H) cv.style.cssText = 'display:block;max-width:100%;max-height:100%;aspect-ratio:' + F.W + '/' + F.H + ';width:100%;height:auto';
    wrap.appendChild(cv); document.body.appendChild(wrap);
    var c = cv.getContext('2d');
    var css = document.createElement('style');
    css.textContent = '.kbtn{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:10px;border:0;background:none;cursor:pointer;color:#fff;font:600 14px system-ui}' +
      '.kbtn i{width:76px;height:76px;border-radius:50%;background:#FD5E2B;display:grid;place-items:center;box-shadow:0 10px 30px rgba(0,0,0,.35)}.kbtn span{background:rgba(0,0,0,.55);padding:6px 12px;border-radius:99px;letter-spacing:.02em}' +
      '.kbar{position:fixed;left:0;right:0;bottom:0;display:flex;align-items:center;gap:8px;padding:8px 10px;background:linear-gradient(transparent,rgba(0,0,0,.6));opacity:0;transition:opacity .2s}body:hover .kbar,.kbar.on{opacity:1}' +
      '.kbar button{border:0;background:rgba(255,255,255,.14);color:#fff;width:32px;height:32px;border-radius:8px;display:grid;place-items:center;cursor:pointer}.kbar input{flex:1;accent-color:#FD5E2B}.kbar small{color:#fff;font:12px ui-monospace,monospace;min-width:72px;text-align:right}';
    document.head.appendChild(css);
    var big = document.createElement('button'); big.className = 'kbtn'; big.setAttribute('aria-label', 'Main pratonton');
    big.innerHTML = '<i><svg width="30" height="30" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg></i><span>Pratonton kod · ' + Math.round(F.dur) + ' s</span>';
    document.body.appendChild(big);
    var bar = document.createElement('div'); bar.className = 'kbar';
    bar.innerHTML = '<button data-k="pp" aria-label="Main/jeda"></button><input type="range" min="0" max="' + F.dur + '" step="0.01" value="0" aria-label="Masa"><small></small><button data-k="mu" aria-label="Bunyi"></button>';
    document.body.appendChild(bar);
    var ppB = bar.querySelector('[data-k=pp]'), muB = bar.querySelector('[data-k=mu]'), rng = bar.querySelector('input'), lab = bar.querySelector('small');
    var IP = '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="#fff"/></svg>', IPA = '<svg width="16" height="16" viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="#fff"/></svg>';
    function icMu() { muB.innerHTML = muted ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 9h4l5-4v14l-5-4H4zM17 9l4 6M21 9l-4 6"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M4 9h4l5-4v14l-5-4H4zM17 8a5 5 0 0 1 0 8"/></svg>'; }
    function fmt(s) { s = Math.max(0, s); return Math.floor(s / 60) + ':' + ('0' + Math.floor(s % 60)).slice(-2); }
    function frame(t) { c.setTransform(1, 0, 0, 1, 0, 0); c.globalAlpha = 1; c.clearRect(0, 0, F.W, F.H); F.draw(c, t); }
    function play() {
      if (player.playing) return; if (player.base >= F.dur - .05) player.base = 0;
      if (!q.has('auto')) { audio(); if (AC && AC.state === 'suspended') AC.resume(); }
      player.playing = true; player.t0 = performance.now(); resetSched(); big.style.display = 'none'; ppB.innerHTML = IPA; bar.classList.add('on'); setTimeout(function () { bar.classList.remove('on'); }, 1500);
      if (AC) { clearInterval(schedT); schedT = setInterval(schedule, 60); }
      loop();
    }
    function pause() { if (!player.playing) return; player.base = player.time(); player.playing = false; ppB.innerHTML = IP; clearInterval(schedT); if (AC) AC.suspend(); }
    function loop() {
      if (!player.playing) return; var t = player.time();
      if (t >= F.dur) { player.base = 0; player.t0 = performance.now(); t = 0; resetSched(); }
      frame(t); rng.value = t; lab.textContent = fmt(t) + ' / ' + fmt(F.dur); requestAnimationFrame(loop);
    }
    big.onclick = play; cv.onclick = function () { player.playing ? pause() : play(); };
    ppB.onclick = function () { player.playing ? pause() : play(); };
    muB.onclick = function () { muted = !muted; if (!muted && !AC) { audio(); } if (AC && AC.state === 'suspended' && player.playing) AC.resume(); if (MASTER) MASTER.gain.value = muted ? 0 : .5; if (AC && player.playing) { resetSched(); clearInterval(schedT); schedT = setInterval(schedule, 60); } icMu(); };
    rng.oninput = function () { player.base = +rng.value; player.t0 = performance.now(); resetSched(); if (!player.playing) { frame(player.base); lab.textContent = fmt(player.base) + ' / ' + fmt(F.dur); if (player.base > 0) big.style.display = 'none'; } };
    ppB.innerHTML = IP; icMu();
    window.KIT_SEEK = function (t) { player.base = t; frame(t); };     // untuk ujian / tangkapan skrin
    window.addEventListener('message', function (e) { if (e.data === 'kit-pause') pause(); if (e.data === 'kit-play') play(); });
    function start() { player.base = poster; frame(poster); lab.textContent = fmt(0) + ' / ' + fmt(F.dur); player.base = 0; if (q.has('auto')) { muted = true; icMu(); play(); } }
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { (F.prep ? Promise.resolve(F.prep()) : Promise.resolve()).then(start); }); else start();
  };
})();
