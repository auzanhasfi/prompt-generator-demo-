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
