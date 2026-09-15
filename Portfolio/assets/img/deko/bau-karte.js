/* karte.svg -- kachelbare Landkarte fuer das Drohnenkapitel.
   Grundsatz: FLAECHEN tragen das Bild, nicht Striche. Wenige Elementarten,
   alles buendig aneinander, nichts frei schwebend. Fester Startwert. */
const fs=require('fs');
const T=1700, n=4, Z=T/n;
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
function abstand(px,py,p){
  let best=1e9;
  for(let ax=-1;ax<=1;ax++) for(let ay=-1;ay<=1;ay++){
    const ox=ax*T,oy=ay*T;
    for(let i=1;i<p.length;i++){
      const x1=p[i-1][0]+ox,y1=p[i-1][1]+oy,x2=p[i][0]+ox,y2=p[i][1]+oy;
      const dx=x2-x1,dy=y2-y1,L2=dx*dx+dy*dy;
      let t=L2?((px-x1)*dx+(py-y1)*dy)/L2:0;t=t<0?0:t>1?1:t;
      const d=Math.hypot(px-(x1+t*dx),py-(y1+t*dy)); if(d<best)best=d;}}
  return best;}
function schneide(p,sperren){
  const teile=[];let akt=[];
  p.forEach(q=>{ if(sperren.some(s=>abstand(q[0],q[1],s.p)<s.halb+s.luft)){if(akt.length>1)teile.push(akt);akt=[];}
                 else akt.push(q);});
  if(akt.length>1)teile.push(akt); return teile;}

/* ---------- 1. Strassen ---------- */
const haupt={p:abtasten([V(0,0),V(1,1),V(2,2),V(3,3),V(4,4)],22), breite:34};
const neben={p:abtasten([V(0,4),V(1,3),V(2,2),V(3,1),V(4,0)],22), breite:22};
const sperren=[{p:haupt.p,halb:17},{p:neben.p,halb:11}];
const frei=(x,y,rad,luft=8)=>sperren.every(s=>abstand(x,y,s.p)>s.halb+rad+luft);
let verworfen=0;

/* ---------- 2. Heckenverlaeufe: Felder und Hecken teilen sich denselben Pfad,
       damit die Farbflaechen exakt an den Hecken enden ---------- */
const kh=[],kv=[];
for(let i=0;i<n;i++){kh[i]=[];kv[i]=[];for(let j=0;j<n;j++){
  const bogen=(a,b)=>abtasten([a,[(a[0]+b[0])/2+r(-30,30),(a[1]+b[1])/2+r(-30,30)],b],12);
  kh[i][j]=bogen(V(i,j),V(i+1,j)); kv[i][j]=bogen(V(i,j),V(i,j+1));}}
const schieb=(p,dx,dy)=>p.map(q=>[q[0]+dx,q[1]+dy]);
const KH=(i,j)=>schieb(kh[((i%n)+n)%n][((j%n)+n)%n],Math.floor(i/n)*T,Math.floor(j/n)*T);
const KV=(i,j)=>schieb(kv[((i%n)+n)%n][((j%n)+n)%n],Math.floor(i/n)*T,Math.floor(j/n)*T);

/* ---------- 3. Felder: kraeftig genug, um als Flaeche zu lesen.
       Der Wert in Klammern ist der gemessene Abstand zum Kapitelgrund. ---------- */
const feldTon=[
  'rgba(214,192,118,.30)',  /* Getreide  ~68 */
  'rgba(126,180,130,.26)',  /* Wiese     ~56 */
  'rgba(176,124,88,.28)',   /* Acker     ~55 */
  'rgba(200,200,142,.22)',  /* Stoppel   ~60 */
  'rgba(104,156,142,.20)',  /* Weide     ~39 */
  'rgba(196,176,136,.15)'   /* Brache    ~38 */
];
const wahl=[];
for(let i=0;i<n;i++){wahl[i]=[];for(let j=0;j<n;j++){
  const verboten=new Set([i>0?wahl[i-1][j]:-1,j>0?wahl[i][j-1]:-1,
                          i===n-1?wahl[0][j]:-1,j===n-1?wahl[i][0]:-1]);
  let k;do{k=Math.floor(rnd()*feldTon.length);}while(verboten.has(k));
  wahl[i][j]=k;}}
let felder='';
for(let i=0;i<n;i++) for(let j=0;j<n;j++){
  const rand=KH(i,j).concat(KV(i+1,j),KH(i,j+1).slice().reverse(),KV(i,j).slice().reverse());
  felder+=`<path d="${Dz(rand)}" fill="${feldTon[wahl[i][j]]}"/>`;}

/* ---------- 4. Waelder: FLAECHE mit unruhigem Rand, nicht gestreute Kreise ---------- */
function wald(cx,cy,gr,a1,a2,a3){
  const rand=w=>gr*(1+0.17*Math.sin(3*w+a1)+0.11*Math.sin(5*w+a2)+0.07*Math.sin(7*w+a3));
  const umriss=[];
  for(let g=0;g<360;g+=4){const w=g*Math.PI/180, rr=rand(w);
    umriss.push([cx+Math.cos(w)*rr, cy+Math.sin(w)*rr*0.78]);}
  let s=`<path d="${Dz(umriss)}" fill="rgba(86,140,104,.34)"/>`;
  let z=0;
  for(let zy=cy-gr*0.78,reihe=0; zy<cy+gr*0.78; zy+=54,reihe++)
    for(let zx=cx-gr*1.3+(reihe%2?32:0); zx<cx+gr*1.3; zx+=64){
      const dx=zx-cx, dy=(zy-cy)/0.78;
      if(Math.hypot(dx,dy)/rand(Math.atan2(dy,dx))>0.82) continue;
      const rad=r(8,11);
      /* auch die Waldbaeume weichen den Strassen aus -- sonst stehen sie auf der Fahrbahn */
      if(!frei(zx,zy,rad,4)){verworfen++;continue;}
      s+=`<circle cx="${P(zx)}" cy="${P(zy)}" r="${P(rad)}" fill="none" stroke="rgba(164,206,166,.26)" stroke-width="1.6"/>`; z++;}
  return {s,z,umriss};
}
const w1=wald(0.58*T,0.19*T,265,0.7,2.1,1.3), w2=wald(0.15*T,0.79*T,190,2.4,0.9,3.0);

/* ---------- 5. Hecken, an den Strassen unterbrochen ---------- */
const sperrStr=[{p:haupt.p,halb:17,luft:3},{p:neben.p,halb:11,luft:3}];
let hecken='', heckenTeile=[];
for(let i=0;i<n;i++) for(let j=0;j<n;j++)
  [kh[i][j],kv[i][j]].forEach(k=>{
    schneide(k,sperrStr).forEach(t=>{ heckenTeile.push(t);
      hecken+=`<path d="${D(t)}" fill="none" stroke="rgba(118,168,126,.38)" stroke-width="2.4" stroke-linecap="round"/>`;});});

/* ---------- 6. Baeume an den Hecken: nur auf den Stuecken, die wirklich da
       sind -- sonst schweben Kreise dort, wo die Hecke weggeschnitten wurde ---------- */
let heckenbaeume='', hb=0;
heckenTeile.forEach(t=>{
  if(rnd()>=0.38) return;
  aufPfad(t,r(190,280),r(50,140)).forEach(q=>{
    const rad=r(5.5,7.5);
    if(!frei(q[0],q[1],rad)){verworfen++;return;}
    heckenbaeume+=`<circle cx="${P(q[0])}" cy="${P(q[1])}" r="${P(rad)}" fill="rgba(140,190,148,.14)" stroke="rgba(140,190,148,.34)" stroke-width="1.4"/>`; hb++;});});

/* ---------- 7. Strassenbelag in EINER Gruppe: an Kreuzungen addiert sich
       dadurch nichts auf. Randlinien an der anderen Strasse unterbrochen. ---------- */
const belag=`<g opacity=".24" fill="none" stroke="rgb(230,220,196)" stroke-linecap="round">`
 +`<path d="${D(haupt.p)}" stroke-width="${haupt.breite}"/>`
 +`<path d="${D(neben.p)}" stroke-width="${neben.breite}"/></g>`;
const raender=(e,a,eb,ab)=>[versetzt(e,eb/2),versetzt(e,-eb/2)]
  .flatMap(v=>schneide(v,[{p:a,halb:ab/2,luft:5}]))
  .map(t=>`<path d="${D(t)}" stroke-width="2.2"/>`).join('');
const strassenRand=`<g opacity=".40" fill="none" stroke="rgb(140,186,148)">`
 +raender(haupt.p,neben.p,haupt.breite,neben.breite)
 +raender(neben.p,haupt.p,neben.breite,haupt.breite)+`</g>`;
const mitte=`<g opacity=".34" fill="none" stroke="rgb(230,220,196)" stroke-width="1.6" stroke-dasharray="28 24">`
 +schneide(haupt.p,[{p:neben.p,halb:11,luft:7}]).map(t=>`<path d="${D(t)}"/>`).join('')+`</g>`;

/* ---------- 8. Ein Hof, Platz wird gesucht statt geraten ---------- */
function hofFrei(hx,hy){
  return [[0,0],[92,0],[92,56],[0,56],[110,38],[166,38],[166,80],[110,80]]
    .every(e=>frei(hx+e[0],hy+e[1],0,26));}
let hofPos=null;
for(let ring=0;ring<30 && !hofPos;ring++)
  for(let w=0;w<12 && !hofPos;w++){
    const t=w/12*Math.PI*2, hx=0.40*T+Math.cos(t)*ring*26, hy=0.47*T+Math.sin(t)*ring*26;
    if(hofFrei(hx,hy)) hofPos=[hx,hy,ring];}
const hof = hofPos ? `<g transform="rotate(-9 ${P(hofPos[0])} ${P(hofPos[1])})">`
 +`<rect x="${P(hofPos[0])}" y="${P(hofPos[1])}" width="92" height="56" fill="rgba(198,120,104,.40)" stroke="rgba(216,150,134,.55)" stroke-width="2"/>`
 +`<rect x="${P(hofPos[0]+110)}" y="${P(hofPos[1]+38)}" width="56" height="42" fill="rgba(214,206,186,.22)" stroke="rgba(214,206,186,.42)" stroke-width="1.8"/></g>` : '';

const inhalt=felder+w1.s+w2.s+hecken+belag+strassenRand+mitte+heckenbaeume+hof;
let uses=''; for(let a=-1;a<=1;a++) for(let b=-1;b<=1;b++) uses+=`<use href="#k" x="${a*T}" y="${b*T}"/>`;
fs.writeFileSync(process.argv[2],
 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${T} ${T}" width="${T}" height="${T}">`
 +`<defs><g id="k">${inhalt}</g></defs>${uses}</svg>`);
console.log(`karte.svg ${(fs.statSync(process.argv[2]).size/1024).toFixed(1)} KB`);
console.log(`  Felder 16 (Flächen) · Wälder 2 als Fläche mit ${w1.z}+${w2.z} Kreisen`);
console.log(`  Heckenstücke ${heckenTeile.length} · Bäume an Hecken ${hb} · Höfe ${hofPos?1:0} (versetzt ${hofPos?hofPos[2]*26:'-'} px)`);
console.log(`  Kreise gesamt ${(inhalt.match(/<circle/g)||[]).length} (vorher 133) · Wasser: keins · Ackerspuren: keine`);
console.log(`  wegen Straße verworfen: ${verworfen}`);
