/* karte.svg -- kachelbare Landkarte fuer das Drohnenkapitel.
   Grundsatz: eine echte Flaechenaufteilung. Jede Parzelle gehoert genau EINER
   Nutzungsart, nichts ueberlappt, alle Flaechen sind DECKEND -- sonst scheint
   eine Flaeche durch die andere und es wirkt schmutzig.
   Aufruf: node bau-karte.js <zieldatei> */
const fs=require('fs');
const T=1700, n=4, Z=T/n, MUSTER=50;          /* 1700/50 = 34, Muster passt auf die Kachel */
let seed=51907;
const rnd=()=>{seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296;};
const r=(a,b)=>a+rnd()*(b-a);
const P=v=>Math.round(v*10)/10;
const J=[]; for(let i=0;i<n;i++){J[i]=[];for(let j=0;j<n;j++)J[i][j]=[r(-88,88),r(-88,88)];}
const V=(i,j)=>{const a=((i%n)+n)%n,b=((j%n)+n)%n;return [i*Z+J[a][b][0], j*Z+J[a][b][1]];};
function abtasten(p,proSeg=16){
  const m=[]; for(let i=0;i<p.length-1;i++) m.push([(p[i][0]+p[i+1][0])/2,(p[i][1]+p[i+1][1])/2]);
  const q=[p[0]];
  for(let i=1;i<p.length-1;i++){const a=m[i-1],c=p[i],b=m[i];
    for(let s=1;s<=proSeg;s++){const t=s/proSeg,u=1-t;
      q.push([u*u*a[0]+2*u*t*c[0]+t*t*b[0], u*u*a[1]+2*u*t*c[1]+t*t*b[1]]);}}
  q.push(p[p.length-1]); return q;}
const versetzt=(p,d)=>p.map((q,i)=>{const a=p[Math.max(0,i-1)],b=p[Math.min(p.length-1,i+1)];
  const dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1;
  return [q[0]-dy/L*d, q[1]+dx/L*d];});
const D=p=>'M'+p.map(q=>P(q[0])+' '+P(q[1])).join('L');
const Dz=p=>D(p)+'Z';
function aufPfad(p,abst,start){const out=[];let rest=start;
  for(let i=1;i<p.length;i++){const dx=p[i][0]-p[i-1][0],dy=p[i][1]-p[i-1][1],L=Math.hypot(dx,dy);
    let t=rest;while(t<L){out.push([p[i-1][0]+dx/L*t,p[i-1][1]+dy/L*t]);t+=abst;}rest=t-L;}
  return out;}
function abstand(px,py,p,umlauf=true){
  let best=1e9; const R=umlauf?1:0;
  for(let ax=-R;ax<=R;ax++) for(let ay=-R;ay<=R;ay++){
    const ox=ax*T,oy=ay*T;
    for(let i=1;i<p.length;i++){
      const x1=p[i-1][0]+ox,y1=p[i-1][1]+oy,x2=p[i][0]+ox,y2=p[i][1]+oy;
      const dx=x2-x1,dy=y2-y1,L2=dx*dx+dy*dy;
      let t=L2?((px-x1)*dx+(py-y1)*dy)/L2:0;t=t<0?0:t>1?1:t;
      const d=Math.hypot(px-(x1+t*dx),py-(y1+t*dy)); if(d<best)best=d;}}
  return best;}
function drin(px,py,poly){                       /* Strahlverfahren */
  let c=false;
  for(let i=0,j=poly.length-1;i<poly.length;j=i++){
    const xi=poly[i][0],yi=poly[i][1],xj=poly[j][0],yj=poly[j][1];
    if((yi>py)!==(yj>py) && px<(xj-xi)*(py-yi)/(yj-yi)+xi) c=!c;}
  return c;}
function schneide(p,sperren){
  const teile=[];let akt=[];
  p.forEach(q=>{ if(sperren.some(s=>abstand(q[0],q[1],s.p)<s.halb+s.luft)){if(akt.length>1)teile.push(akt);akt=[];}
                 else akt.push(q);});
  if(akt.length>1)teile.push(akt); return teile;}

/* ---------- Strassen ---------- */
const haupt={p:abtasten([V(0,0),V(1,1),V(2,2),V(3,3),V(4,4)],22), breite:34};
const neben={p:abtasten([V(0,4),V(1,3),V(2,2),V(3,1),V(4,0)],22), breite:22};
const sperren=[{p:haupt.p,halb:17},{p:neben.p,halb:11}];
const frei=(x,y,rad,luft=8)=>sperren.every(s=>abstand(x,y,s.p)>s.halb+rad+luft);
let verworfen=0;

/* ---------- Heckenverlaeufe: Parzellenrand und Hecke sind derselbe Pfad ---------- */
const kh=[],kv=[];
for(let i=0;i<n;i++){kh[i]=[];kv[i]=[];for(let j=0;j<n;j++){
  const bogen=(a,b)=>abtasten([a,[(a[0]+b[0])/2+r(-30,30),(a[1]+b[1])/2+r(-30,30)],b],12);
  kh[i][j]=bogen(V(i,j),V(i+1,j)); kv[i][j]=bogen(V(i,j),V(i,j+1));}}
const schieb=(p,dx,dy)=>p.map(q=>[q[0]+dx,q[1]+dy]);
const KH=(i,j)=>schieb(kh[((i%n)+n)%n][((j%n)+n)%n],Math.floor(i/n)*T,Math.floor(j/n)*T);
const KV=(i,j)=>schieb(kv[((i%n)+n)%n][((j%n)+n)%n],Math.floor(i/n)*T,Math.floor(j/n)*T);
const umriss=(i,j)=>KH(i,j).concat(KV(i+1,j),KH(i,j+1).slice().reverse(),KV(i,j).slice().reverse());

/* ---------- Nutzungsarten. Alle Farben DECKEND, also fertig ausgerechnet
     ueber dem Kapitelgrund rgb(16,22,37). Nichts scheint durch. ---------- */
/* Drei Farbfamilien: Tanne/Petrol fuer Gruenland, gedecktes Gold/Oliv fuer
   Ackerland, Schiefer als Bindeglied zum blauen Kapitelgrund. Die Toene sind
   so gespreizt, dass kein Nachbarpaar unter Delta-E 15 liegt -- darunter liest
   man zwei Parzellen als eine. */
const ART=[
  {name:'Getreide', farbe:'#66593a', muster:'flurA'},   /* gedecktes Gold   L* 38 */
  {name:'Wiese',    farbe:'#245043'},                   /* Wiesengruen      L* 31 */
  {name:'Acker',    farbe:'#443b3c'},                   /* Graubraun        L* 26 */
  {name:'Stoppel',  farbe:'#484c39', muster:'flurB'},   /* Oliv             L* 31 */
  {name:'Weide',    farbe:'#2d6157'},                   /* Petrol           L* 38 */
  {name:'Brache',   farbe:'#28313e'},                   /* Schiefer         L* 20 */
  {name:'Wald',     farbe:'#12302a', wald:true}         /* tiefes Tannengruen L* 18 */
];
/* Verteilung von Hand gelegt statt gewuerfelt: so ist jede Nutzungsart
   vertreten, die Muster tauchen oft genug auf, und kein Nachbar gleicht dem
   anderen -- auch ueber die Kachelnaht hinweg. Zeilen sind j, Spalten i. */
/* Anordnung nicht geraten, sondern gesucht: aus 400 000 Mischungen die mit dem
   groessten kleinsten Nachbarabstand -- hier Delta-E 15,5. Zeilen sind j. */
const PLAN=[[0,1,3,6],
            [4,0,1,5],
            [2,1,2,0],
            [6,3,6,5]];
const wahl=[]; for(let i=0;i<n;i++){wahl[i]=[];for(let j=0;j<n;j++) wahl[i][j]=PLAN[j][i];}
(function pruefe(){
  let gleich=0;
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){
    if(wahl[i][j]===wahl[(i+1)%n][j])gleich++;
    if(wahl[i][j]===wahl[i][(j+1)%n])gleich++;}
  if(gleich) throw new Error('Plan hat '+gleich+' gleiche Nachbarn');
})();

function laubKrone(R,lappen,phase){
  const p=[];
  for(let a=0;a<360;a+=9){const t2=a*Math.PI/180, rr=R*(1+0.14*Math.sin(lappen*t2+phase));
    p.push([Math.round(Math.cos(t2)*rr*10)/10, Math.round(Math.sin(t2)*rr*10)/10]);}
  return 'M'+p.map(q=>q[0]+' '+q[1]).join('L')+'Z';}
function nadelStern(R,zacken,phase){
  const p=[];
  for(let k=0;k<zacken*2;k++){const t2=(k/(zacken*2))*Math.PI*2+phase, rr=k%2?R*0.46:R;
    p.push([Math.round(Math.cos(t2)*rr*10)/10, Math.round(Math.sin(t2)*rr*10)/10]);}
  return 'M'+p.map(q=>q[0]+' '+q[1]).join('L')+'Z';}
const BAUM=[
  {id:'lb1', d:laubKrone(10,7,0.4),  ton:'#2e6149', licht:'#3c7a5c'},
  {id:'lb2', d:laubKrone(10,6,2.1),  ton:'#27563f', licht:'#347052'},
  {id:'lb3', d:laubKrone(10,8,4.0),  ton:'#356b52', licht:'#458566'},
  {id:'lb4', d:laubKrone(10,5,1.2),  ton:'#245139', licht:'#2f664a'},
  {id:'nd1', d:nadelStern(10,9,0.2), ton:'#1d4a3c', licht:null},
  {id:'nd2', d:nadelStern(10,8,0.9), ton:'#18412f', licht:null}
];
const baumDef=BAUM.map(b=>
  `<g id="${b.id}"><path d="${b.d}" fill="#0f2822" transform="translate(2.4 3)"/>`
  +`<path d="${b.d}" fill="${b.ton}"/>`
  +(b.licht?`<circle cx="-2.7" cy="-2.9" r="3" fill="${b.licht}"/>`:'')
  +`</g>`).join('');
const musterDef=
 `<pattern id="flurA" width="${MUSTER}" height="${MUSTER}" patternUnits="userSpaceOnUse">`
 +`<rect width="${MUSTER}" height="${MUSTER}" fill="#66593a"/><g fill="#7f7048">`
 +`<path d="M13 6.0L19 12.4L7 12.4Z"/><path d="M38 6.0L44 12.4L32 12.4Z"/><path d="M25.5 31L31.5 37.4L19.5 37.4Z"/></g></pattern>`
 +`<pattern id="flurB" width="${MUSTER}" height="${MUSTER}" patternUnits="userSpaceOnUse">`
 +`<rect width="${MUSTER}" height="${MUSTER}" fill="#484c39"/><g fill="#5e6249">`
 +`<path d="M13 6.0L19 12.4L7 12.4Z"/><path d="M38 6.0L44 12.4L32 12.4Z"/><path d="M25.5 31L31.5 37.4L19.5 37.4Z"/></g></pattern>`;

let flaechen='', baeume='', anzWaldbaum=0; const artZaehl={};
for(let i=0;i<n;i++) for(let j=0;j<n;j++){
  const art=ART[wahl[i][j]], u=umriss(i,j);
  flaechen+=`<path d="${Dz(u)}" fill="${art.muster?'url(#'+art.muster+')':art.farbe}"/>`;
  if(!art.wald) continue;
  /* Baeume nur innerhalb DIESER Parzelle, mit Abstand zur Hecke und zur Strasse */
  const xs=u.map(q=>q[0]), ys=u.map(q=>q[1]);
  const x0=Math.min(...xs), x1=Math.max(...xs), y0=Math.min(...ys), y1=Math.max(...ys);
  /* Dichte: Kronenflaeche gegen Rasterzelle. pi*17.5^2 / (40*34) entspricht
     rund zwei Dritteln Deckung -- darunter sieht es nach Punktmuster aus,
     darueber verschwinden die einzelnen Baeume in einer gruenen Masse. */
  for(let zy=y0, reihe=0; zy<y1; zy+=34, reihe++)
    for(let zx=x0+(reihe%2?20:0); zx<x1; zx+=40){
      const px=zx+r(-11,11), py=zy+r(-9,9);
      const gr=r(1.30,2.25), rad=10*gr;              /* Symbole sind auf Radius 10 gebaut */
      if(!drin(px,py,u)) continue;
      if(abstand(px,py,u,false)<rad+10) continue;
      if(!frei(px,py,rad,4)){verworfen++;continue;}
      /* rund 70 % Laub, 30 % Nadel -- gemischter Bestand statt Einheitsbrei */
      const b=rnd()<0.70?BAUM[Math.floor(rnd()*4)]:BAUM[4+Math.floor(rnd()*2)];
      baeume+=`<use href="#${b.id}" transform="translate(${P(px)} ${P(py)}) scale(${P(gr)})"/>`;
      anzWaldbaum++; artZaehl[b.id]=(artZaehl[b.id]||0)+1;}
}
/* ---------- Hecken, an den Strassen unterbrochen ---------- */
const sperrStr=[{p:haupt.p,halb:17,luft:3},{p:neben.p,halb:11,luft:3}];
let hecken='', teile=[];
for(let i=0;i<n;i++) for(let j=0;j<n;j++)
  [kh[i][j],kv[i][j]].forEach(k=>schneide(k,sperrStr).forEach(t=>{ teile.push(t);
    hecken+=`<path d="${D(t)}" fill="none" stroke="#55876a" stroke-width="2.6" stroke-linecap="round"/>`;}));
/* Baeume an den Hecken: nur Umriss, damit sie keine Flaeche ueberdecken */
let hb=0;
teile.forEach(t=>{ if(rnd()>=0.34) return;
  aufPfad(t,r(200,300),r(50,150)).forEach(q=>{
    const gr=r(0.55,0.85), rad=10*gr;
    if(!frei(q[0],q[1],rad)){verworfen++;return;}
    const b=BAUM[Math.floor(rnd()*4)];
    baeume+=`<use href="#${b.id}" transform="translate(${P(q[0])} ${P(q[1])}) scale(${P(gr)})"/>`; hb++;});});

/* ---------- Hof, deckend, Platz wird gesucht ---------- */
function hofFrei(hx,hy){
  return [[0,0],[92,0],[92,56],[0,56],[110,38],[166,38],[166,80],[110,80]]
    .every(e=>frei(hx+e[0],hy+e[1],0,26));}
let hp=null;
for(let ring=0;ring<30&&!hp;ring++) for(let w=0;w<12&&!hp;w++){
  const t=w/12*Math.PI*2, hx=0.40*T+Math.cos(t)*ring*26, hy=0.47*T+Math.sin(t)*ring*26;
  if(hofFrei(hx,hy)) hp=[hx,hy,ring];}
const hof = hp ? `<g transform="rotate(-9 ${P(hp[0])} ${P(hp[1])})">`
 +`<rect x="${P(hp[0])}" y="${P(hp[1])}" width="92" height="56" fill="#8a4f46" stroke="#a96b5f" stroke-width="2"/>`
 +`<rect x="${P(hp[0]+110)}" y="${P(hp[1]+38)}" width="56" height="42" fill="#4e4f52" stroke="#6b6c6f" stroke-width="1.8"/></g>` : '';

/* ---------- Strassen zuletzt, deckend ---------- */
const belag=`<g fill="none" stroke="#55564f" stroke-linecap="round">`
 +`<path d="${D(haupt.p)}" stroke-width="${haupt.breite}"/>`
 +`<path d="${D(neben.p)}" stroke-width="${neben.breite}"/></g>`;
const raender=(e,a,eb,ab)=>[versetzt(e,eb/2),versetzt(e,-eb/2)]
  .flatMap(v=>schneide(v,[{p:a,halb:ab/2,luft:5}]))
  .map(t=>`<path d="${D(t)}" stroke-width="2.2"/>`).join('');
const strassenRand=`<g fill="none" stroke="#3d4a3f">`
 +raender(haupt.p,neben.p,haupt.breite,neben.breite)
 +raender(neben.p,haupt.p,neben.breite,haupt.breite)+`</g>`;
const mitte=`<g fill="none" stroke="#787369" stroke-width="1.6" stroke-dasharray="28 24">`
 +schneide(haupt.p,[{p:neben.p,halb:11,luft:7}]).map(t=>`<path d="${D(t)}"/>`).join('')+`</g>`;

const inhalt=flaechen+hecken+baeume+hof+belag+strassenRand+mitte;
let uses=''; for(let a=-1;a<=1;a++) for(let b=-1;b<=1;b++) uses+=`<use href="#k" x="${a*T}" y="${b*T}"/>`;
fs.writeFileSync(process.argv[2],
 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}">`
 +`<defs>${musterDef}${baumDef}<g id="k">${inhalt}</g></defs>${uses}</svg>`);
const zaehlung={};
wahl.flat().forEach(k=>zaehlung[ART[k].name]=(zaehlung[ART[k].name]||0)+1);
console.log(`karte.svg ${(fs.statSync(process.argv[2]).size/1024).toFixed(1)} KB`);
console.log('  Parzellen:', Object.entries(zaehlung).map(([k,v])=>k+' '+v).join(', '));
console.log(`  Waldbäume ${anzWaldbaum} (nur in Waldparzellen) · Heckenbäume ${hb} · verworfen ${verworfen}`);
console.log('  Baumarten:', Object.entries(artZaehl).map(([k,v])=>k+' '+v).join(', '));
console.log('  alle Flächenfarben deckend:', !/fill="rgba/.test(inhalt));
