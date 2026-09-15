/* karte.svg -- kachelbare Landkarte fuer das Drohnenkapitel.
   Grundsatz: eine echte Flaechenaufteilung. Jede Parzelle gehoert genau EINER
   Nutzungsart, nichts ueberlappt, alle Flaechen sind DECKEND -- sonst scheint
   eine Flaeche durch die andere und es wirkt schmutzig.
   Aufruf: node bau-karte.js <zieldatei> */
const fs=require('fs');
/* Zweiter Aufrufparameter "bunt" erzeugt die Flugfassung: kraeftige Farben und
   eine gerichtete Bewegungsunschaerfe laengs der Flugrichtung. */
const BUNT = process.argv[3]==='bunt';
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
/* Palette von Max vorgegeben: #c9a26a, #8f6b3e, #6f7c4b und #2f3b2e. Die
   beiden uebrigen Nutzungsarten sind daraus gemischt, damit alles aus einer
   Familie kommt. Kein Blau -- die frueheren Brache-Parzellen sind jetzt Wiese. */
const ART=[
  {name:'Getreide', farbe:'#c9a26a', muster:'flurA'},   /* vorgegeben   L* 69 */
  {name:'Stoppel',  farbe:'#a1915c', muster:'flurB'},   /* 55 % Getreide + 45 % Wiese, L* 60 */
  {name:'Acker',    farbe:'#8f6b3e'},                   /* vorgegeben   L* 48 */
  {name:'Wiese',    farbe:'#6f7c4b'},                   /* vorgegeben   L* 50 */
  {name:'Weide',    farbe:'#55623f'},                   /* 60 % Wiese + 40 % Wald, L* 40 */
  {name:'Wald',     farbe:'#2f3b2e', wald:true}         /* vorgegeben   L* 23 */
];
/* Verteilung von Hand gelegt statt gewuerfelt: so ist jede Nutzungsart
   vertreten, die Muster tauchen oft genug auf, und kein Nachbar gleicht dem
   anderen -- auch ueber die Kachelnaht hinweg. Zeilen sind j, Spalten i. */
/* Anordnung gesucht, nicht geraten: aus 600 000 Mischungen die mit dem
   groessten kleinsten Nachbarabstand -- hier Delta-E 16,6. Zeilen sind j.
   0 Getreide · 1 Stoppel · 2 Acker · 3 Wiese · 4 Weide · 5 Wald */
const PLAN=[[0,2,0,3],
            [3,5,3,1],
            [5,3,1,4],
            [3,0,5,2]];
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
/* Kronen als hellere Abstufungen zwischen Wiesen- und Waldton, damit der Wald
   in derselben Familie bleibt */
const BAUM=[
  {id:'lb1', d:laubKrone(10,7,0.4),  ton:'#4a5a3a', licht:'#5e7048'},
  {id:'lb2', d:laubKrone(10,6,2.1),  ton:'#435234', licht:'#556645'},
  {id:'lb3', d:laubKrone(10,8,4.0),  ton:'#55663f', licht:'#6b7e50'},
  {id:'lb4', d:laubKrone(10,5,1.2),  ton:'#3d4b30', licht:'#4e5e3d'},
  {id:'nd1', d:nadelStern(10,9,0.2), ton:'#445435', licht:null},
  {id:'nd2', d:nadelStern(10,8,0.9), ton:'#3b4a2e', licht:null}
];
const baumDef=BAUM.map(b=>
  `<g id="${b.id}"><path d="${b.d}" fill="#212a1f" transform="translate(2.4 3)"/>`
  +`<path d="${b.d}" fill="${b.ton}"/>`
  +(b.licht?`<circle cx="-2.7" cy="-2.9" r="3" fill="${b.licht}"/>`:'')
  +`</g>`).join('');
const musterDef=
 `<pattern id="flurA" width="${MUSTER}" height="${MUSTER}" patternUnits="userSpaceOnUse">`
 +`<rect width="${MUSTER}" height="${MUSTER}" fill="#c9a26a"/><g fill="#dcb87e">`
 +`<path d="M13 6.0L19 12.4L7 12.4Z"/><path d="M38 6.0L44 12.4L32 12.4Z"/><path d="M25.5 31L31.5 37.4L19.5 37.4Z"/></g></pattern>`
 +`<pattern id="flurB" width="${MUSTER}" height="${MUSTER}" patternUnits="userSpaceOnUse">`
 +`<rect width="${MUSTER}" height="${MUSTER}" fill="#a1915c"/><g fill="#b7a771">`
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
    hecken+=`<path d="${D(t)}" fill="none" stroke="#8a9668" stroke-width="2.6" stroke-linecap="round"/>`;}));
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
 +`<rect x="${P(hp[0])}" y="${P(hp[1])}" width="92" height="56" fill="#7a4a2a" stroke="#a06c3e" stroke-width="2"/>`
 +`<rect x="${P(hp[0]+110)}" y="${P(hp[1]+38)}" width="56" height="42" fill="#4e5140" stroke="#767a63" stroke-width="1.8"/></g>` : '';

/* ---------- Strassen zuletzt, deckend ---------- */
const belag=`<g fill="none" stroke="#b5ab92" stroke-linecap="round">`
 +`<path d="${D(haupt.p)}" stroke-width="${haupt.breite}"/>`
 +`<path d="${D(neben.p)}" stroke-width="${neben.breite}"/></g>`;
const raender=(e,a,eb,ab)=>[versetzt(e,eb/2),versetzt(e,-eb/2)]
  .flatMap(v=>schneide(v,[{p:a,halb:ab/2,luft:5}]))
  .map(t=>`<path d="${D(t)}" stroke-width="2.2"/>`).join('');
const strassenRand=`<g fill="none" stroke="#4e5934">`
 +raender(haupt.p,neben.p,haupt.breite,neben.breite)
 +raender(neben.p,haupt.p,neben.breite,haupt.breite)+`</g>`;
const mitte=`<g fill="none" stroke="#d6ceb6" stroke-width="1.6" stroke-dasharray="28 24">`
 +schneide(haupt.p,[{p:neben.p,halb:11,luft:7}]).map(t=>`<path d="${D(t)}"/>`).join('')+`</g>`;

let inhalt=flaechen+hecken+baeume+hof+belag+strassenRand+mitte;
let defs=musterDef+baumDef;
/* Die Flugfassung nutzt dieselbe Palette; sie unterscheidet sich nur durch
   die Bewegungsunschaerfe weiter unten. */
let uses=''; for(let a=-1;a<=1;a++) for(let b=-1;b<=1;b++) uses+=`<use href="#k" x="${a*T}" y="${b*T}"/>`;
/* ---- Bewegungsunschaerfe laengs der Flugrichtung.
   Der Trick mit der Drehung: ein SVG-Filter rechnet im Koordinatensystem des
   Elements, an dem er haengt. Aussen um 45 Grad gedreht, innen wieder zurueck --
   dadurch verwischt feGaussianBlur mit "13 1.6" laengs der Diagonale und nicht
   waagerecht. Der Inhalt landet geometrisch genau dort, wo er vorher war, die
   Kachelperiode bleibt also erhalten. ---- */
if(BUNT){
  defs+=`<filter id="mb" filterUnits="userSpaceOnUse" x="-800" y="-800" width="3300" height="3300" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="${process.argv[4]||16} ${process.argv[5]||0.8}"/></filter>`;
  uses=`<g transform="rotate(45 ${T/2} ${T/2})"><g filter="url(#mb)"><g transform="rotate(-45 ${T/2} ${T/2})">${uses}</g></g></g>`;
}
fs.writeFileSync(process.argv[2],
 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}">`
 +`<defs>${defs}<g id="k">${inhalt}</g></defs>${uses}</svg>`);
const zaehlung={};
wahl.flat().forEach(k=>zaehlung[ART[k].name]=(zaehlung[ART[k].name]||0)+1);
console.log(`karte.svg ${(fs.statSync(process.argv[2]).size/1024).toFixed(1)} KB`);
console.log('  Parzellen:', Object.entries(zaehlung).map(([k,v])=>k+' '+v).join(', '));
console.log(`  Waldbäume ${anzWaldbaum} (nur in Waldparzellen) · Heckenbäume ${hb} · verworfen ${verworfen}`);
console.log('  Baumarten:', Object.entries(artZaehl).map(([k,v])=>k+' '+v).join(', '));
console.log('  alle Flächenfarben deckend:', !/fill="rgba/.test(inhalt));
