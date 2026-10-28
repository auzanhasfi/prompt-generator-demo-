/* Liputan WTM: isi potongan prompt Arena Clawd sesuai bahasa aktif (dipanggil dari render() di app.js) */
function isiLiputan(){
  var i = find('arena-clawd'); if (!i) return;
  $('wpImg').src = i.img;
  $('wpPre').textContent = i.prompt.slice(0, 1400);
  $('wpLen').textContent = t('chars', { n: num(i.prompt.length) });
  $('wpCopy').innerHTML = IC.copy + '<span>' + esc(t('copy')) + '</span>';
  $('wpView').innerHTML = IC.eye + '<span>' + esc(t('wpFull')) + '</span>';
  $('wpPrev').innerHTML = IC.play + '<span>' + esc(t('wpMain')) + '</span>';
  $('wpPrev').href = i.preview;
  $('wtmImg').alt = t('wAlt');
}
