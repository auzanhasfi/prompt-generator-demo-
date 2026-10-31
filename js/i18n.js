/* Teks UI 3 bahasa + link Pro per bahasa */
var PRO_LINK = {
  id: 'https://lptoolsid.edugamelabs.com',
  ms: 'https://lptoolsmy.edugamelabs.com',
  en: 'https://lptoolsmy.edugamelabs.com'
};

var UI = {
  id: {
    brand: 'Galeri Prompt', upgrade: 'Upgrade ke Pro', upgradeLong: 'Upgrade ke Pro sekarang',
    eyebrow: 'Prompt game & app edukasi',
    h1: 'Lihat hasilnya dulu, lalu <em>salin prompt-nya</em>',
    lead: 'Setiap prompt di sini sudah terbukti jadi game atau app sungguhan. Coba preview-nya, salin prompt-nya, tempel ke AI favoritmu.',
    s1: 'Coba preview', s1d: 'Mainkan game atau app-nya langsung di browser.',
    s2: 'Salin prompt', s2d: 'Satu klik, prompt lengkap tersalin.',
    s3: 'Tempel ke AI', s3d: 'ChatGPT, Gemini, Claude, atau DeepSeek akan membuatkannya.',
    all: 'Semua', game: 'Game', app: 'App', shown: '{n} prompt demo',
    preview: 'Preview', copy: 'Salin prompt', copied: 'Tersalin!', view: 'Lihat prompt', chars: '{n} karakter',
    toast: 'Prompt tersalin. Tempel ke AI pilihanmu.',
    pasteTo: 'Tempel ke:', openPreview: 'Buka preview',
    lockNum: '100+', lockH: 'prompt lainnya ada di versi Pro', lockP: 'Game, app, dan landing page, plus generator AI yang menyesuaikan prompt dengan materimu.',
    proEyebrow: 'Versi Pro', proH: 'Buat prompt sendiri, sesuai materi kelasmu',
    proP: 'Demo ini hanya menampilkan sebagian kecil. Di Pro kamu bisa membuka semua prompt dan memakai generator untuk mengubah topik, jenjang, dan bahasa.',
    f1: 'Prompt siap salin', f2: 'Preview game & app', f3: 'Semua 100+ prompt', f4: 'Ubah topik, jenjang & bahasa', f5: 'Prompt custom dengan AI', f6: 'Template landing page',
    foot: 'Demo galeri prompt. Preview game & app di-host terpisah.', close: 'Tutup'
  },
  ms: {
    brand: 'Galeri Prompt', upgrade: 'Naik taraf ke Pro', upgradeLong: 'Naik taraf ke Pro sekarang',
    eyebrow: 'Prompt game & app pendidikan',
    h1: 'Lihat hasilnya dahulu, kemudian <em>salin prompt-nya</em>',
    lead: 'Setiap prompt di sini sudah terbukti menjadi game atau app sebenar. Cuba pratonton, salin prompt, tampal ke AI kegemaran anda.',
    s1: 'Cuba pratonton', s1d: 'Main game atau app terus di pelayar.',
    s2: 'Salin prompt', s2d: 'Satu klik, prompt lengkap disalin.',
    s3: 'Tampal ke AI', s3d: 'ChatGPT, Gemini, Claude, atau DeepSeek akan membinanya.',
    all: 'Semua', game: 'Game', app: 'App', shown: '{n} prompt demo',
    preview: 'Pratonton', copy: 'Salin prompt', copied: 'Disalin!', view: 'Lihat prompt', chars: '{n} aksara',
    toast: 'Prompt disalin. Tampal ke AI pilihan anda.',
    pasteTo: 'Tampal ke:', openPreview: 'Buka pratonton',
    lockNum: '100+', lockH: 'prompt lain ada dalam versi Pro', lockP: 'Game, app dan landing page, serta penjana AI yang menyesuaikan prompt dengan bahan pengajaran anda.',
    proEyebrow: 'Versi Pro', proH: 'Bina prompt sendiri, ikut bahan kelas anda',
    proP: 'Demo ini hanya menunjukkan sebahagian kecil. Dalam Pro anda boleh membuka semua prompt dan guna penjana untuk tukar topik, tahap dan bahasa.',
    f1: 'Prompt sedia salin', f2: 'Pratonton game & app', f3: 'Semua 100+ prompt', f4: 'Tukar topik, tahap & bahasa', f5: 'Prompt custom dengan AI', f6: 'Templat landing page',
    foot: 'Demo galeri prompt. Pratonton game & app dihoskan berasingan.', close: 'Tutup'
  },
  en: {
    brand: 'Prompt Gallery', upgrade: 'Upgrade to Pro', upgradeLong: 'Upgrade to Pro now',
    eyebrow: 'Educational game & app prompts',
    h1: 'See the result first, then <em>copy the prompt</em>',
    lead: 'Every prompt here has already been turned into a real game or app. Try the preview, copy the prompt, paste it into your favourite AI.',
    s1: 'Try the preview', s1d: 'Play the game or app right in your browser.',
    s2: 'Copy the prompt', s2d: 'One click copies the full prompt.',
    s3: 'Paste into AI', s3d: 'ChatGPT, Gemini, Claude or DeepSeek will build it for you.',
    all: 'All', game: 'Games', app: 'Apps', shown: '{n} demo prompts',
    preview: 'Preview', copy: 'Copy prompt', copied: 'Copied!', view: 'View prompt', chars: '{n} characters',
    toast: 'Prompt copied. Paste it into your AI of choice.',
    pasteTo: 'Paste into:', openPreview: 'Open preview',
    lockNum: '100+', lockH: 'more prompts in the Pro version', lockP: 'Games, apps and landing pages, plus an AI generator that adapts each prompt to your lesson.',
    proEyebrow: 'Pro version', proH: 'Make your own prompts, matched to your lesson',
    proP: 'This demo shows only a small sample. With Pro you unlock every prompt and use the generator to change the topic, level and language.',
    f1: 'Ready-to-copy prompts', f2: 'Game & app previews', f3: 'All 100+ prompts', f4: 'Change topic, level & language', f5: 'Custom prompts with AI', f6: 'Landing page templates',
    foot: 'Prompt gallery demo. Game & app previews are hosted separately.', close: 'Close'
  }
};

/* Teks bagian "Cara pakai prompt gratis" (animasi) dan "Fitur Pro" */
Object.assign(UI.id, {
  caraEyebrow: 'Cara pakai prompt gratis', caraH: 'Dari prompt sampai game jadi, <em>4 langkah</em>',
  caraP: 'Begini cara memakai prompt demo di atas. Tidak perlu bisa coding: cukup salin, tempel, lalu tunggu AI bekerja.',
  c1: 'Pilih kartu & coba preview', c1d: 'Lihat dulu hasil jadinya, lalu tekan Lihat prompt.',
  c2: 'Salin prompt', c2d: 'Prompt lengkap tersalin dengan satu klik.',
  c3: 'Tempel ke AI, kirim', c3d: 'Buka ChatGPT, Gemini, Claude, atau DeepSeek, tempel, lalu kirim.',
  c4: 'Game jadi, mainkan', c4d: 'Buka pratinjau (Canvas atau Artifact) dan bagikan ke murid.',
  pasteHint: 'Tempel prompt di sini…', jadi: 'Game jadi, siap dimainkan murid', demoBar: 'Galeri Prompt · Demo',
  pfEyebrow: 'Apa bila Pro', pfH: 'Fitur yang terbuka di <em>versi Pro</em>',
  pfP: 'Demo hanya memberi 12 prompt. Di Pro, Anda mendapat seluruh koleksi plus alat untuk membuat prompt sesuai materi sendiri.',
  pf1: '100+ prompt game, app & landing page', pf1d: 'Semua koleksi terbuka, masing-masing dengan preview hasil jadinya.',
  pf2: 'Ubah topik, jenjang & bahasa', pf2d: 'Tekan Isi & ubah: prompt menyesuaikan materi kelas Anda sendiri.',
  pf3: 'Dua mode mulai', pf3d: 'Sudah punya ide? Ketik saja. Belum? Dipandu 5 langkah sampai prompt jadi.',
  pf4: 'Prompt custom dengan AI', pf4d: 'Ceritakan ide dengan bahasa sehari-hari, AI menyusunnya jadi prompt detail.',
  pf5: 'Kirim ke AI, prompt ikut', pf5d: 'Satu klik membuka ChatGPT atau Claude dengan prompt sudah terisi.',
  pf6: 'Template landing page', pf6d: 'Prompt untuk halaman jualan produk digital, kelas, atau jasa Anda.',
  pf7: 'Riwayat prompt', pf7d: 'Setiap prompt yang disalin atau dikirim tersimpan, tinggal pakai ulang.',
  pf8: 'Koleksi game Clawd siap main', pf8d: 'Arena Clawd, Lastik, Potong Tali, dan lainnya: mainkan dulu, lalu buat versi Anda.',
  pf9: 'Panduan beranimasi', pf9d: 'Cara pakai, cara revisi, dan cara membuat prompt lebih detail, langkah demi langkah.',
  vfTopik: 'Topik', vfTopikV: 'Pecahan', vfJenjang: 'Jenjang', vfJenjangV: 'SD kelas 4', vfBahasa: 'Bahasa', vfBahasaV: 'Indonesia',
  vm1: 'Punya ide', vm2: 'Belum punya ide', vcIde: '“game balapan soal IPA kelas 5”'
});
Object.assign(UI.ms, {
  caraEyebrow: 'Cara guna prompt percuma', caraH: 'Dari prompt hingga game siap, <em>4 langkah</em>',
  caraP: 'Begini cara menggunakan prompt demo di atas. Tidak perlu tahu coding: salin, tampal, kemudian tunggu AI bekerja.',
  c1: 'Pilih kad & cuba pratonton', c1d: 'Lihat hasil siapnya dahulu, kemudian tekan Lihat prompt.',
  c2: 'Salin prompt', c2d: 'Prompt lengkap disalin dengan satu klik.',
  c3: 'Tampal ke AI, hantar', c3d: 'Buka ChatGPT, Gemini, Claude atau DeepSeek, tampal, kemudian hantar.',
  c4: 'Game siap, mainkan', c4d: 'Buka pratonton (Canvas atau Artifact) dan kongsi dengan murid.',
  pasteHint: 'Tampal prompt di sini…', jadi: 'Game siap, sedia dimainkan murid', demoBar: 'Galeri Prompt · Demo',
  pfEyebrow: 'Jika Pro', pfH: 'Ciri yang dibuka dalam <em>versi Pro</em>',
  pfP: 'Demo hanya memberi 12 prompt. Dalam Pro, anda mendapat seluruh koleksi serta alat untuk membina prompt ikut bahan pengajaran sendiri.',
  pf1: '100+ prompt game, app & landing page', pf1d: 'Semua koleksi dibuka, setiap satu dengan pratonton hasil siapnya.',
  pf2: 'Tukar topik, tahap & bahasa', pf2d: 'Tekan Isi & ubah: prompt menyesuaikan bahan kelas anda sendiri.',
  pf3: 'Dua mod mula', pf3d: 'Sudah ada idea? Taip sahaja. Belum? Dipandu 5 langkah hingga prompt siap.',
  pf4: 'Prompt custom dengan AI', pf4d: 'Ceritakan idea dalam bahasa harian, AI menyusunnya menjadi prompt terperinci.',
  pf5: 'Hantar ke AI, prompt ikut', pf5d: 'Satu klik membuka ChatGPT atau Claude dengan prompt sudah terisi.',
  pf6: 'Templat landing page', pf6d: 'Prompt untuk halaman jualan produk digital, kelas atau perkhidmatan anda.',
  pf7: 'Sejarah prompt', pf7d: 'Setiap prompt yang disalin atau dihantar disimpan, sedia diguna semula.',
  pf8: 'Koleksi game Clawd sedia main', pf8d: 'Arena Clawd, Lastik, Potong Tali dan lain-lain: main dahulu, kemudian bina versi anda.',
  pf9: 'Panduan beranimasi', pf9d: 'Cara guna, cara semak semula dan cara menjadikan prompt lebih terperinci, langkah demi langkah.',
  vfTopik: 'Topik', vfTopikV: 'Pecahan', vfJenjang: 'Tahap', vfJenjangV: 'Tahun 4', vfBahasa: 'Bahasa', vfBahasaV: 'Melayu',
  vm1: 'Ada idea', vm2: 'Belum ada idea', vcIde: '“game lumba soalan Sains Tahun 5”'
});
Object.assign(UI.en, {
  caraEyebrow: 'How to use the free prompts', caraH: 'From prompt to finished game in <em>4 steps</em>',
  caraP: 'Here is how to use the demo prompts above. No coding needed: copy, paste, and let the AI do the work.',
  c1: 'Pick a card & try the preview', c1d: 'See the finished result first, then tap View prompt.',
  c2: 'Copy the prompt', c2d: 'One click copies the full prompt.',
  c3: 'Paste into AI, send', c3d: 'Open ChatGPT, Gemini, Claude or DeepSeek, paste and send.',
  c4: 'Game ready, play it', c4d: 'Open the preview (Canvas or Artifact) and share it with students.',
  pasteHint: 'Paste the prompt here…', jadi: 'Game ready for your students', demoBar: 'Prompt Gallery · Demo',
  pfEyebrow: 'With Pro', pfH: 'What you unlock in <em>Pro</em>',
  pfP: 'The demo gives you 12 prompts. Pro gives you the whole collection plus tools to build prompts around your own lessons.',
  pf1: '100+ game, app & landing page prompts', pf1d: 'The full collection unlocked, each with a preview of the finished result.',
  pf2: 'Change topic, level & language', pf2d: 'Tap Fill & edit: the prompt adapts to your own lesson.',
  pf3: 'Two ways to start', pf3d: 'Have an idea? Just type it. No idea yet? A 5-step guide builds the prompt with you.',
  pf4: 'Custom prompts with AI', pf4d: 'Describe your idea in plain words and AI turns it into a detailed prompt.',
  pf5: 'Send to AI, prompt included', pf5d: 'One click opens ChatGPT or Claude with the prompt already filled in.',
  pf6: 'Landing page templates', pf6d: 'Prompts for sales pages for your digital product, class or service.',
  pf7: 'Prompt history', pf7d: 'Every prompt you copy or send is saved, ready to reuse.',
  pf8: 'Clawd games, ready to play', pf8d: 'Arena Clawd, Slingshot, Cut the Rope and more: play first, then make your own.',
  pf9: 'Animated guide', pf9d: 'How to use, revise and add detail to prompts, step by step.',
  vfTopik: 'Topic', vfTopikV: 'Fractions', vfJenjang: 'Level', vfJenjangV: 'Grade 4', vfBahasa: 'Language', vfBahasaV: 'English',
  vm1: 'Have an idea', vm2: 'No idea yet', vcIde: '“racing game, grade 5 science”'
});

/* Hook 28 Okt: "cara tercepat = prompt", gratis, ringkas Pro di atas */
Object.assign(UI.id, {
  eyebrow: 'Demo gratis dari EduGame Labs',
  h1: 'Cara tercepat membuat apps dan game? <em>Pakai prompt.</em>',
  lead: 'Ini saya berikan <b>gratis</b> untuk kalian semua.',
  arah: 'Lihat hasilnya dulu di bawah, lalu salin prompt-nya.',
  hpH: 'Mau lebih detail?', hpP: 'Versi Pro dapat semuanya:',
  hp1: 'Prompt Generator', hp2: '100+ pilihan prompt', hp3: 'Ubah topik, jenjang &amp; bahasa', hp4: 'Kirim langsung ke AI',
  hpBtn: 'Lihat versi Pro', hpLihat: 'Bandingkan fitur'
});
Object.assign(UI.ms, {
  eyebrow: 'Demo percuma daripada EduGame Labs',
  h1: 'Cara paling pantas bina apps dan game? <em>Guna prompt.</em>',
  lead: 'Saya berikan <b>percuma</b> untuk anda semua.',
  arah: 'Lihat hasilnya dahulu di bawah, kemudian salin prompt-nya.',
  hpH: 'Mahu lebih terperinci?', hpP: 'Versi Pro dapat semuanya:',
  hp1: 'Prompt Generator', hp2: '100+ pilihan prompt', hp3: 'Tukar topik, tahap &amp; bahasa', hp4: 'Hantar terus ke AI',
  hpBtn: 'Lihat versi Pro', hpLihat: 'Banding ciri'
});
Object.assign(UI.en, {
  eyebrow: 'Free demo from EduGame Labs',
  h1: 'The fastest way to build apps and games? <em>Prompts.</em>',
  lead: 'I\'m giving these away <b>free</b> for all of you.',
  arah: 'See the result below first, then copy the prompt.',
  hpH: 'Want more detail?', hpP: 'Pro gets you everything:',
  hp1: 'Prompt Generator', hp2: '100+ prompt choices', hp3: 'Change topic, level &amp; language', hp4: 'Send straight to AI',
  hpBtn: 'See Pro', hpLihat: 'Compare features'
});

/* 28 Okt 20:35: demo = Galeri Prompt; Pro = Galeri Prompt lengkap + Prompt Generator */
Object.assign(UI.id, {
  brand: 'Galeri Prompt',
  eyebrow: 'Galeri Prompt · demo gratis',
  hpH: 'Ini baru sebagian Galeri Prompt.', hpP: 'Versi Pro dapat keduanya:',
  hp1: 'Galeri Prompt lengkap (100+)', hp2: 'Prompt Generator untuk idemu', hp3: 'Ubah topik, jenjang &amp; bahasa', hp4: 'Kirim langsung ke AI',
  lockH: 'prompt lainnya ada di Galeri Prompt versi Pro', lockP: 'Game, app, dan landing page, plus Prompt Generator yang menyusun prompt dari idemu sendiri.',
  proH: 'Galeri Prompt lengkap + Prompt Generator',
  proP: 'Demo ini hanya sebagian kecil Galeri Prompt. Di Pro kamu membuka semua 100+ prompt dan memakai Prompt Generator untuk ide di luar galeri.',
  pfP: 'Demo memberimu 12 prompt dari Galeri Prompt. Pro membuka seluruh galeri plus Prompt Generator untuk materimu sendiri.',
  pf1: 'Galeri Prompt lengkap: 100+ prompt',
  foot: 'Demo Galeri Prompt. Preview game & app di-host terpisah.'
});
Object.assign(UI.ms, {
  brand: 'Galeri Prompt',
  eyebrow: 'Galeri Prompt · demo percuma',
  hpH: 'Ini baru sebahagian Galeri Prompt.', hpP: 'Versi Pro dapat kedua-duanya:',
  hp1: 'Galeri Prompt penuh (100+)', hp2: 'Prompt Generator untuk idea anda', hp3: 'Tukar topik, tahap &amp; bahasa', hp4: 'Hantar terus ke AI',
  lockH: 'prompt lain ada dalam Galeri Prompt versi Pro', lockP: 'Game, app dan landing page, serta Prompt Generator yang menyusun prompt daripada idea anda sendiri.',
  proH: 'Galeri Prompt penuh + Prompt Generator',
  proP: 'Demo ini hanya sebahagian kecil Galeri Prompt. Dalam Pro anda membuka semua 100+ prompt dan guna Prompt Generator untuk idea di luar galeri.',
  pfP: 'Demo memberi anda 12 prompt daripada Galeri Prompt. Pro membuka seluruh galeri serta Prompt Generator untuk bahan anda sendiri.',
  pf1: 'Galeri Prompt penuh: 100+ prompt',
  foot: 'Demo Galeri Prompt. Pratonton game & app dihoskan berasingan.'
});
Object.assign(UI.en, {
  brand: 'Prompt Gallery',
  eyebrow: 'Prompt Gallery · free demo',
  hpH: 'This is only part of the Prompt Gallery.', hpP: 'Pro gets you both:',
  hp1: 'The full Prompt Gallery (100+)', hp2: 'Prompt Generator for your ideas', hp3: 'Change topic, level &amp; language', hp4: 'Send straight to AI',
  lockH: 'more prompts in the Pro Prompt Gallery', lockP: 'Games, apps and landing pages, plus the Prompt Generator that builds prompts from your own ideas.',
  proH: 'Full Prompt Gallery + Prompt Generator',
  proP: 'This demo is a small slice of the Prompt Gallery. Pro unlocks all 100+ prompts and the Prompt Generator for ideas beyond the gallery.',
  pfP: 'The demo gives you 12 prompts from the Prompt Gallery. Pro unlocks the whole gallery plus the Prompt Generator for your own lessons.',
  pf1: 'Full Prompt Gallery: 100+ prompts',
  foot: 'Prompt Gallery demo. Game & app previews are hosted separately.'
});

/* 28 Okt 21:05: liputan WTM (What's The Meta) tentang Arena Clawd + prompt-nya */
Object.assign(UI.id, {
  wEyebrow: 'Diliput What\'s The Meta (WTM)',
  wH: 'Game buatan saya diliput <em>media gaming terbesar Malaysia.</em> Prompt-nya saya bagikan di sini.',
  wLead: 'Pada 26 Oktober 2026, <b>WTM (What\'s The Meta)</b> mengangkat <b>Arena Clawd</b>, game ala Mobile Legends yang saya buat untuk murid, dengan kuis matematika di tengah pertarungan. Game itu saya buat dari satu prompt, dan prompt yang sama ada di bawah ini, gratis.',
  wTonton: 'Tonton liputannya di Instagram',
  wKutip: '“Seorang cikgu … menghasilkan Arena Clawd, game ala MOBA seperti Mobile Legends.”',
  wTgl: '@wtmtoday · 26 Okt 2026',
  wQ1: 'Siapa WTM', wA1: 'What\'s The Meta, media e-sport dan gaming terbesar di Malaysia, aktif di Instagram, TikTok, dan Facebook.',
  wQ2: 'Yang diliput', wA2: 'Arena Clawd: pilih hero, dorong minion lewat lorong, runtuhkan menara lawan. Setiap beberapa saat muncul soal matematika; jawaban benar memberi kekuatan, jawaban salah dijelaskan singkat.',
  wQ3: 'Kenapa menarik', wA3: 'Game ini dibuat oleh guru, bukan studio game, tanpa menulis kode: cukup menempelkan prompt ke AI. Murid belajar sambil main game yang mereka kenal.',
  wQ4: 'Bisa kamu tiru?', wA4: 'Bisa. Salin prompt di bawah, tempel ke Claude, ChatGPT, Gemini, atau DeepSeek, lalu ganti topik soalnya sesuai pelajaranmu.',
  wSukaIG: 'suka di Instagram', wSukaTT: 'suka di TikTok', wPlatform: 'platform: IG, TikTok, FB',
  wAlt: 'Liputan WTM tentang Arena Clawd: guru membuat game ala Mobile Legends dengan kuis matematika',
  wpEyebrow: 'Prompt yang diliput', wpH: 'Prompt lengkap Arena Clawd', wpP: 'Prompt yang sama yang saya pakai untuk membuat game di liputan WTM.',
  wpFull: 'Lihat prompt lengkap', wpMain: 'Main dulu'
});
Object.assign(UI.ms, {
  wEyebrow: 'Diliput What\'s The Meta (WTM)',
  wH: 'Game yang saya bina diliput <em>media gaming terbesar Malaysia.</em> Prompt-nya saya kongsikan di sini.',
  wLead: 'Pada 26 Oktober 2026, <b>WTM (What\'s The Meta)</b> mengangkat <b>Arena Clawd</b>, game macam Mobile Legends yang saya bina untuk murid, dengan kuiz matematik di tengah pertarungan. Game itu saya bina daripada satu prompt, dan prompt yang sama ada di bawah, percuma.',
  wTonton: 'Tonton liputannya di Instagram',
  wKutip: '“Seorang cikgu … menghasilkan Arena Clawd, game ala MOBA seperti Mobile Legends.”',
  wTgl: '@wtmtoday · 26 Okt 2026',
  wQ1: 'Siapa WTM', wA1: 'What\'s The Meta, media e-sukan dan gaming terbesar di Malaysia, aktif di Instagram, TikTok dan Facebook.',
  wQ2: 'Apa yang diliput', wA2: 'Arena Clawd: pilih hero, tolak minion ikut lorong, runtuhkan menara lawan. Setiap beberapa saat muncul soalan matematik; jawapan betul beri kuasa, jawapan salah diterangkan ringkas.',
  wQ3: 'Kenapa menarik', wA3: 'Game ini dibina oleh cikgu, bukan studio game, tanpa menulis kod: cuma tampal prompt ke AI. Murid belajar sambil main game yang mereka kenal.',
  wQ4: 'Boleh anda tiru?', wA4: 'Boleh. Salin prompt di bawah, tampal ke Claude, ChatGPT, Gemini atau DeepSeek, kemudian tukar topik soalan ikut subjek anda.',
  wSukaIG: 'suka di Instagram', wSukaTT: 'suka di TikTok', wPlatform: 'platform: IG, TikTok, FB',
  wAlt: 'Liputan WTM tentang Arena Clawd: cikgu bina game macam Mobile Legends dengan kuiz matematik',
  wpEyebrow: 'Prompt yang diliput', wpH: 'Prompt penuh Arena Clawd', wpP: 'Prompt yang sama yang saya guna untuk bina game dalam liputan WTM.',
  wpFull: 'Lihat prompt penuh', wpMain: 'Main dahulu'
});
Object.assign(UI.en, {
  wEyebrow: 'Featured by What\'s The Meta (WTM)',
  wH: 'A game I made was featured by <em>Malaysia\'s biggest gaming media.</em> Here is the prompt.',
  wLead: 'On 26 October 2026, <b>WTM (What\'s The Meta)</b> featured <b>Arena Clawd</b>, a Mobile Legends-style game I built for students, with maths questions in the middle of the battle. I made it from a single prompt, and that same prompt is below, free.',
  wTonton: 'Watch the feature on Instagram',
  wKutip: '“A teacher … created Arena Clawd, a MOBA-style game like Mobile Legends.”',
  wTgl: '@wtmtoday · 26 Oct 2026',
  wQ1: 'Who is WTM', wA1: 'What\'s The Meta, Malaysia\'s biggest e-sports and gaming media, on Instagram, TikTok and Facebook.',
  wQ2: 'What was featured', wA2: 'Arena Clawd: pick a hero, push minions down the lanes, bring down the enemy towers. Every so often a maths question appears; right answers give power-ups, wrong ones get a short explanation.',
  wQ3: 'Why it stood out', wA3: 'It was made by a teacher, not a game studio, without writing code: just pasting a prompt into AI. Students learn while playing a game they already know.',
  wQ4: 'Can you make one?', wA4: 'Yes. Copy the prompt below, paste it into Claude, ChatGPT, Gemini or DeepSeek, then change the question topic to fit your lesson.',
  wSukaIG: 'likes on Instagram', wSukaTT: 'likes on TikTok', wPlatform: 'platforms: IG, TikTok, FB',
  wAlt: 'WTM feature on Arena Clawd: a teacher built a Mobile Legends-style game with maths quizzes',
  wpEyebrow: 'The featured prompt', wpH: 'Full Arena Clawd prompt', wpP: 'The same prompt I used to make the game in the WTM feature.',
  wpFull: 'View full prompt', wpMain: 'Play first'
});

/* 31 Okt: meja laptop + HP interaktif di hero (js/meja.js) */
Object.assign(UI.id, {
  mjGaleri: 'Galeri Prompt', mjPilih: 'Pilih, lalu salin prompt-nya', mjSalin: 'Salin prompt', mjOk: 'Tersalin!',
  mjPh: 'Tempel prompt di sini…', mjKosong: 'App kamu akan muncul di sini', mjJadi: 'App jadi · klik untuk main',
  mjKamu: 'Kamu', mjTujuan: 'TUJUAN BELAJAR', mjAturan: 'ATURAN MAIN', mjTampilan: 'TAMPILAN', mjSiap: 'app siap dimainkan ✓',
  mj1: 'Salin prompt', mj2: 'Tempel ke AI', mj3: 'TENG! App jadi', mjTempel: 'Tempel ke',
  mjHint: 'Coba klik game di layar laptop, pilih AI-nya, atau klik HP untuk memainkan hasilnya.'
});
Object.assign(UI.ms, {
  mjGaleri: 'Galeri Prompt', mjPilih: 'Pilih, kemudian salin prompt-nya', mjSalin: 'Salin prompt', mjOk: 'Disalin!',
  mjPh: 'Tampal prompt di sini…', mjKosong: 'App anda akan muncul di sini', mjJadi: 'App siap · klik untuk main',
  mjKamu: 'Anda', mjTujuan: 'OBJEKTIF PEMBELAJARAN', mjAturan: 'PERATURAN PERMAINAN', mjTampilan: 'PAPARAN', mjSiap: 'app sedia dimainkan ✓',
  mj1: 'Salin prompt', mj2: 'Tampal ke AI', mj3: 'TENG! App siap', mjTempel: 'Tampal ke',
  mjHint: 'Cuba klik game di skrin laptop, pilih AI, atau klik telefon untuk main hasilnya.'
});
Object.assign(UI.en, {
  mjGaleri: 'Prompt Gallery', mjPilih: 'Pick one, then copy its prompt', mjSalin: 'Copy prompt', mjOk: 'Copied!',
  mjPh: 'Paste your prompt here…', mjKosong: 'Your app will appear here', mjJadi: 'App ready · tap to play',
  mjKamu: 'You', mjTujuan: 'LEARNING GOAL', mjAturan: 'GAME RULES', mjTampilan: 'LOOK & FEEL', mjSiap: 'app ready to play ✓',
  mj1: 'Copy prompt', mj2: 'Paste into AI', mj3: 'TENG! App ready', mjTempel: 'Paste into',
  mjHint: 'Click a game on the laptop screen, pick an AI, or tap the phone to play the result.'
});
