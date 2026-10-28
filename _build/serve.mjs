// Server lokal: node _build/serve.mjs [port]  → http://localhost:8930
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import url from 'node:url';
const ROOT = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..'), PORT = +(process.env.PORT || process.argv[2] || 8930);
const T = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.json':'application/json' };
http.createServer((q, r) => {
  let p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]).replace(/^\/(id|ms|en)(\/|$)/, '/'));
  if (!p.startsWith(ROOT)) { r.writeHead(403); return r.end(); }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  fs.readFile(p, (e, b) => { if (e) { r.writeHead(404); return r.end('404'); } r.writeHead(200, { 'Content-Type': T[path.extname(p)] || 'application/octet-stream' }); r.end(b); });
}).listen(PORT, () => console.log('http://localhost:' + PORT));
