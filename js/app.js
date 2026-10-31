/* Galeri Prompt (demo): kartu prompt + preview, 3 bahasa, tombol Pro ke LP sesuai bahasa */
window.DATA = window.DATA || {};
var S = { lg: 'id', kat: 'semua', open: null };
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s || '').replace(/[&<>"]/g, function(c){ return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]; }); }
function t(k, v){ var s = (UI[S.lg] && UI[S.lg][k]) || UI.id[k] || ''; if (v) for (var x in v) s = s.replace('{' + x + '}', v[x]); return s; }
function num(n){ return n.toLocaleString(S.lg === 'en' ? 'en-US' : 'id-ID'); }
var IC = {
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  copy: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  eye: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  ext: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  lock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  ok: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>',
  no: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 12h12"/></svg>'
};

function items(){ return DATA[S.lg] || []; }
function isGame(i){ return i.kat !== 'app'; }

function loadLang(lg, cb){
  if (DATA[lg]) return cb();
  var s = document.createElement('script');
  s.src = 'js/data-' + lg + '.js';
  s.onload = cb;
  document.head.appendChild(s);
}

function setLang(lg){
  if (!UI[lg]) lg = 'id';
  S.lg = lg;
  try { localStorage.setItem('galeri_lg', lg); } catch (e) {}
  // URL ikut bahasa: /id, /ms, /en (Netlify _redirects menyajikan index.html yang sama)
  if (location.protocol !== 'file:' && location.pathname.replace(/\/+$/, '') !== '/' + lg) {
    try { history.replaceState(null, '', '/' + lg + location.search + location.hash); } catch (e) {}
  }
  document.documentElement.lang = lg;
  document.querySelectorAll('[data-lg]').forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.lg === lg); });
  document.querySelectorAll('[data-t]').forEach(function(el){ el.innerHTML = t(el.dataset.t); });
  document.querySelectorAll('.pro-link').forEach(function(a){ a.href = PRO_LINK[lg]; });
  $('mClose').setAttribute('aria-label', t('close'));
  document.title = t('brand') + ' — Demo';
  cmp();
  loadLang(lg, function(){ render(); if (S.open) openPrompt(S.open); });
}

function cmp(){
  var rows = [['f1', 1, 1], ['f2', 1, 1], ['f3', 0, 1], ['f4', 0, 1], ['f5', 0, 1], ['f6', 0, 1]];
  $('cmp').innerHTML = rows.map(function(r){
    return '<tr><td>' + esc(t(r[0])) + '</td><td class="' + (r[1] ? 'y' : 'n') + '">' + (r[1] ? IC.ok : IC.no) + '</td><td class="y">' + IC.ok + '</td></tr>';
  }).join('');
}

function render(){
  var all = items(), nG = all.filter(isGame).length;
  var tabs = [['semua', t('all'), all.length], ['game', t('game'), nG], ['app', t('app'), all.length - nG]];
  $('tabs').innerHTML = tabs.map(function(x){
    return '<button class="tab" data-k="' + x[0] + '" aria-pressed="' + (S.kat === x[0]) + '">' + esc(x[1]) + '<span>' + x[2] + '</span></button>';
  }).join('');
  var list = all.filter(function(i){ return S.kat === 'semua' || (S.kat === 'game' ? isGame(i) : !isGame(i)); });
  $('count').textContent = t('shown', { n: all.length });
  $('grid').innerHTML = list.map(card).join('') + lockCard();
  if (window.isiLiputan) isiLiputan();
  if (window.isiMeja) isiMeja();
}

function card(i){
  return '<article class="card">' +
    '<a class="thumb" href="' + i.preview + '" target="_blank" rel="noopener" aria-label="' + esc(t('openPreview') + ': ' + i.n) + '">' +
      '<img src="' + i.img + '" alt="" loading="lazy" width="800" height="500">' +
      '<span class="kat">' + esc(i.katN) + '</span><span class="pv">' + IC.play + esc(t('preview')) + '</span></a>' +
    '<div class="cbody"><h2>' + esc(i.n) + '</h2><p class="topik">' + esc(i.topik) + '</p>' +
      '<div class="chips"><span class="chip">' + esc(i.mapel) + '</span><span class="chip">' + esc(i.jenjang) + '</span></div>' +
      '<span class="plen">' + t('chars', { n: num(i.prompt.length) }) + '</span>' +
      '<div class="cact"><button class="btn" data-copy="' + i.id + '">' + IC.copy + '<span>' + esc(t('copy')) + '</span></button>' +
      '<button class="btn line" data-view="' + i.id + '" aria-label="' + esc(t('view')) + '" title="' + esc(t('view')) + '">' + IC.eye + '</button></div>' +
    '</div></article>';
}

function lockCard(){
  return '<a class="card lock pro-link" href="' + PRO_LINK[S.lg] + '" target="_blank" rel="noopener">' +
    '<div class="stack"><i></i><i></i><i></i></div>' +
    '<div><div class="num">' + t('lockNum') + '</div><h2>' + esc(t('lockH')) + '</h2><p>' + esc(t('lockP')) + '</p></div>' +
    '<span class="btn pro">' + IC.lock + esc(t('upgrade')) + '</span></a>';
}

function find(id){ return items().filter(function(i){ return i.id === id; })[0]; }

function copyText(txt, btn){
  var done = function(){
    toast(t('toast'));
    if (btn) {
      var old = btn.innerHTML; btn.classList.add('done'); btn.innerHTML = IC.ok + '<span>' + esc(t('copied')) + '</span>';
      setTimeout(function(){ btn.classList.remove('done'); btn.innerHTML = old; }, 1600);
    }
  };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done, fallback);
  else fallback();
  function fallback(){
    var ta = document.createElement('textarea'); ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch (e) {}
    ta.remove();
  }
}

var tT;
function toast(msg){ var el = $('toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(tT); tT = setTimeout(function(){ el.classList.remove('on'); }, 2200); }

function openPrompt(id){
  var i = find(id); if (!i) return;
  S.open = id;
  $('mKat').textContent = i.katN + ' · ' + i.mapel;
  $('mTitle').textContent = i.n;
  $('mText').value = i.prompt;
  $('mText').scrollTop = 0;
  $('mCopy').innerHTML = IC.copy + '<span>' + esc(t('copy')) + '</span>';
  $('mPrev').innerHTML = IC.ext + '<span>' + esc(t('openPreview')) + '</span>';
  $('mPrev').href = i.preview;
  $('modal').hidden = false;
  document.body.style.overflow = 'hidden';
  $('mCopy').focus();
}
function closePrompt(){ S.open = null; $('modal').hidden = true; document.body.style.overflow = ''; }

document.addEventListener('click', function(e){
  var b;
  if ((b = e.target.closest('[data-lg]'))) return setLang(b.dataset.lg);
  if ((b = e.target.closest('.tab'))) { S.kat = b.dataset.k; return render(); }
  if ((b = e.target.closest('[data-copy]'))) { var i = find(b.dataset.copy); return i && copyText(i.prompt, b); }
  if ((b = e.target.closest('[data-view]'))) return openPrompt(b.dataset.view);
  if (e.target.id === 'modal' || e.target.closest('#mClose')) return closePrompt();
  if (e.target.closest('#mCopy')) return copyText($('mText').value, $('mCopy'));
});
document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && !$('modal').hidden) closePrompt(); });

(function(){
  var m = location.pathname.match(/^\/(id|ms|en)(\/|$)/), lg = m ? m[1] : null;
  if (!lg) try { lg = localStorage.getItem('galeri_lg'); } catch (e) {}
  if (!lg) {
    var nav = (navigator.languages || [navigator.language || 'id']).join(',').toLowerCase();
    lg = /(^|,)ms/.test(nav) ? 'ms' : /(^|,)id/.test(nav) ? 'id' : /(^|,)en/.test(nav) ? 'en' : 'id';
  }
  setLang(lg);
})();
