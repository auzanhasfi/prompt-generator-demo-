/* Jana js/data-<lg>.js + img/ dari repo prompt-generator & game-preview.
   node _build/jana.js <folder prompt-generator> <folder game-preview>  */
const fs=require('fs'),vm=require('vm'),path=require('path');
const [PG,GP]=process.argv.slice(2);const OUT=path.join(__dirname,'..');
const c={};c.window=c;vm.createContext(c);
for(const f of ['template.js','template-kt.js','karya.js','i18n-ms.js','i18n-en.js','detail-id.js','detail-ms.js','detail-en.js'])
  vm.runInContext(fs.readFileSync(path.join(PG,'js',f),'utf8'),c);
const W=c.window, I18N=c.I18N||W.I18N, DET=W.DETAIL;
const PREVIEW='https://preview.edugamelabs.com/';
/* ±1/5 dari 56 contoh yang punya preview: campuran genre, mapel, dan 3 app */
const PILIH=[['tpl','petualangan-fotosintesis'],['tpl','sejarah-malaysia'],['tpl','arena-clawd'],['tpl','vesper'],['tpl','restoran'],
  ['tpl','crossy'],['tpl','tikus'],['tpl','wordle'],['tpl','invaders'],['karya','grammo'],['karya','cakap-v1'],['karya','kido-koda']];
const KAT={kertas:'Kertas & tinta',arkade:'Arkade',kuis:'Kuis & latihan',puzzle:'Puzzle',besar:'3D & besar',app:'App'};
const tr=(s,lg)=>lg==='id'?s:((I18N[lg]||{})[s]||s);
for(const lg of ['id','ms','en']){
  const items=PILIH.map(([jenis,id])=>{
    const src=jenis==='tpl'?c.TPL.find(t=>t.id===id):c.KARYA.find(k=>k.id===id);
    const url=jenis==='tpl'?src.main:src.link;
    const prompt=DET[lg]['tpl:'+id]||DET[lg]['karya:'+id]||DET.id[jenis+':'+id];
    if(!prompt)throw new Error('prompt kosong '+id);
    const kat=jenis==='tpl'?src.kat:'app';
    return {id,kat,katN:tr(KAT[kat],lg),n:tr(jenis==='tpl'?src.judul:src.n,lg),mapel:tr(src.mapel,lg),
      jenjang:tr(jenis==='tpl'?src.jenjang:src.jen,lg),topik:tr(jenis==='tpl'?src.topik:src.d,lg),
      img:'img/'+id+'.jpg',preview:PREVIEW+url.replace(/^contoh\//,''),prompt};
  });
  fs.writeFileSync(path.join(OUT,'js','data-'+lg+'.js'),'/* dijana _build/jana.js */\nwindow.DATA=window.DATA||{};DATA.'+lg+'='+JSON.stringify(items)+';\n');
  if(lg==='id')items.forEach(i=>fs.copyFileSync(path.join(GP,'sampul',i.id+'.jpg'),path.join(OUT,i.img)));
}
console.log('ok',PILIH.length,'contoh');
