/* Ukur dengan Microsoft Clarity (6 Nov 2026): tag halaman + bahasa, event klik penting, event sampai ke seksyen. */
(function () {
  function c() { if (window.clarity) window.clarity.apply(null, arguments); }
  var lg = (location.pathname.match(/^\/(id|ms|en)\b/) || [, (window.S && S.lg) || 'id'])[1];
  c('set', 'situs', 'demo'); c('set', 'bahasa', lg);
  function ev(el) {
    if (el.dataset.ev) return el.dataset.ev;
    if (el.classList.contains('pro-link')) return 'klik_pro';
    if (el.id === 'testiPutar' || el.closest('.testi-layar')) return 'main_video_testimoni';
    if (el.dataset.copy || el.dataset.kvcopy) return 'salin_prompt';
    if (el.dataset.kvplay) return 'main_video_template';
    if (el.classList.contains('thumb')) return 'pratonton_galeri';
    if (el.dataset.view || el.dataset.kvview) return 'lihat_prompt';
    return '';
  }
  document.addEventListener('click', function (e) { var el = e.target.closest('a,button'); if (!el) return; var n = ev(el); if (n) c('event', n); }, true);
  var dilihat = {};
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting && !dilihat[x.target.id]) { dilihat[x.target.id] = 1; c('event', 'lihat_' + x.target.id); } }); }, { threshold: .25 });
    ['galeri', 'terlaris', 'cara', 'pro', 'kit', 'testimoni', 'wtm'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
})();
