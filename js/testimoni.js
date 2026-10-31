/* Testimoni: video YouTube baru dimuat saat diklik (ringan) */
(function () {
  var b = document.getElementById('testiPutar');
  if (!b) return;
  b.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0&playsinline=1';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true; f.title = 'Video';
    b.replaceChildren(f); b.style.cursor = 'default';
  }, { once: true });
})();
