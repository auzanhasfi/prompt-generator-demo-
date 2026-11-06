# prompt-generator-demo

Galeri Prompt versi DEMO (tanpa generator): 12 prompt game & app edukasi pilihan (±1/5 dari contoh yang punya preview),
3 bahasa (Indonesia, Melayu, English). Tiap kartu: preview (preview.edugamelabs.com) + salin prompt + lihat prompt.
Tombol "Upgrade ke Pro" → LP sesuai bahasa: ID → lptoolsid.edugamelabs.com, MS & EN → lptoolsmy.edugamelabs.com. Bahasa ikut URL: /id, /ms, /en (lihat `_redirects`) (ubah di `js/i18n.js`, `PRO_LINK`).

Statik tanpa build (publish = `.`), siap Netlify.

- `index.html`, `css/app.css`, `js/app.js` (tampilan), `js/i18n.js` (teks UI + link Pro)
- Di bawah galeri: **Cara pakai prompt gratis** (animasi 4 langkah: pilih kartu → salin → tempel ke AI → jadi, isinya diambil dari data bahasa aktif)
  dan **Fitur Pro** (9 kartu beranimasi). Gaya: `css/fitur.css`, animasi + muncul saat scroll: `js/demo.js`, teks 3 bahasa di akhir `js/i18n.js`.
- `img/pro/` = sampul contoh koleksi Pro (dipakai kartu "100+")
- `js/data-<id|ms|en>.js` + `img/` dijana dari repo prompt-generator & game-preview:
  `node _build/jana.js <folder prompt-generator> <folder game-preview>` — daftar contoh ada di `PILIH` dalam `_build/jana.js`.

Lihat di localhost: `node _build/serve.mjs` lalu buka http://localhost:8930

## Marketing Kit (6 Nov 2026)
Seksyen #kit sebelum testimoni: 4 bagian kit jualan versi Pro (App, Game, Landing Page, Video) + alur 4 langkah + 2 prompt video percuma
(tipografi-kinetik, promo-tutorial) dengan pratonton KOD di video/<id>.html (video/kit.js). Prompt sentiasa Bahasa Melayu;
butang BM/ID/EN memilih bahasa HASIL video (js/kit-video-data.js dijana daripada js/video.js repo Pro). Fail: js/kit.js, css/kit.css,
teks k*/kv* di akhir js/i18n.js, poster img/video/.

## Perbaikan HP ikut Microsoft Clarity (6 Nov 2026 malam)
CTA di bawah video hero (hvA/hvB), urutan: hero > galeri > cara > pro > banding > kit > testimoni > wtm. HP: galeri 4 kartu + tombol "Lihat semua", Marketing Kit & fitur Pro jadi geser ke samping, cara jual 3 langkah + tombol. Event Clarity di js/ukur.js (situs=demo, bahasa, klik_pro, main_video_testimoni, salin_prompt, pratonton_galeri, lihat_<seksyen>). HP dari 19.200 px jadi ±11.500 px.
