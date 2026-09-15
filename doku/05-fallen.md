# Stolperfallen — was hier schon zugeschlagen hat

Jeder Eintrag ist ein Fehler, der tatsächlich passiert ist. **Ergänzen, nicht überschreiben.**

---

## Umgebung

### `git` und `python3` sind kaputt
`/usr/bin/git` wirft `libxcodebuildLoader.dylib … Symbol not found: _XPCTypeBool`.
Das echte git: `/Applications/Xcode.app/Contents/Developer/usr/bin/git`.
`python3` ist gar nicht brauchbar — alles in Node oder Shell lösen.

### iCloud lagert Dateien aus
Der wichtigste Dauerärger. Dateien werden durch Platzhalter ersetzt, der Server liefert dann
Fehler, die Seite sieht kaputt aus — **ohne dass am Code etwas falsch wäre**.
Beim letzten Mal waren **71 Dateien** gleichzeitig betroffen.

```bash
# finden (voller Pfad bleibt erhalten — WICHTIG, siehe unten)
find Cloud_Portfolio/Portfolio/assets -type f \\( -name '*.jpg' -o -name '*.webp' -o -name '*.mp4' -o -name '*.pdf' \\) -print0 \\
| xargs -0 -n1 -P8 sh -c 'ls -lO "$0" 2>/dev/null | grep -q dataless && printf "%s\\n" "$0"' > /tmp/dl.txt
# zurückholen
while IFS= read -r f; do cat "$f" >/dev/null & done < /tmp/dl.txt; wait
```

**Der naheliegende Einzeiler ist falsch und hat mich am 13.09. erwischt:** `ls -lO ordner1/* ordner2/*`
gruppiert die Ausgabe nach Ordnern und schreibt nur noch die **Dateinamen ohne Pfad**. `awk '{print $NF}'`
liefert dann `cat-tongue.jpg` statt `assets/img/tiere/cat-tongue.jpg`, `cat` findet nichts, und die
Meldung „236 zurückgeholt" ist gelogen — es waren 0. Deshalb oben `find` mit `-print0` benutzen und
**hinterher nachzählen**, statt dem Erfolg zu glauben.

Vor jedem Test und vor jedem Commit prüfen.

### `mdls` und `ffprobe` meinen verschiedene Maße — und beide haben recht
**Am 14.09. richtiggestellt.** Früher stand hier, `mdls` habe „gelogen", weil es 7751 × 1080
für ein Video meldete, das `ffprobe` als 1920 × 1080 auswies. Das war **falsch verstanden**:
Das Therme-Video hat **nicht-quadratische Pixel** (`sample_aspect_ratio=2067:512`). 1920 × 1080
ist die *gespeicherte* Größe, 7751 × 1080 die *dargestellte*. `mdls` nannte die Darstellung.

Der Schaden war trotzdem echt: Ich hatte auf die Darstellungsbreite skaliert und damit
hochgerechnet — 27,8 MB statt 10,8 MB.

→ **Immer beide Werte holen** und auf `sample_aspect_ratio` achten. Ist es nicht `1:1`, muss
beim Web-Export mit `setsar=1` auf quadratische Pixel umgerechnet werden, sonst stimmen die
Maße im Markup nie:
```bash
ffmpeg -i quelle.mp4 -vf "scale=2756:384,setsar=1" ... ziel.mp4
```
→ **Immer `ffprobe`**:
```bash
/opt/homebrew/bin/ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of default=noprint_wrappers=1 datei.mp4
```

### Kein PDF-Werkzeug vorhanden
Weder `pdftoppm`, `gs`, `magick`, `qpdf` noch `swift`. `qlmanage -t` liefert nur Seite 1.
**Ausweg, der funktioniert hat:** eingebettete JPEGs direkt aus der PDF-Datei schneiden —
sie liegen dort meist unverändert als DCTDecode-Strom zwischen `FFD8FFxx` und `FFD9`.
So kamen 26 Bilder aus `iBee.pdf`. Code-Muster in der Vorgeschichte, Abschnitt 7.

---

## Der Browser-Bereich

**Er ist oft zugeklappt.** Dann:
- `requestAnimationFrame` friert ein → alle rAF-gedrosselten Scroll-Effekte laufen nicht
- `IntersectionObserver` feuert nicht → Einblend-Effekte bleiben aus
- `setTimeout` wird auf **1 Sekunde** gedrosselt
- Screenshots werden **schwarz** oder laufen in eine Zeitüberschreitung
- Bilddekodierung ist so langsam, dass `img.decode()` bei 30 Bildern in eine Zeitüberschreitung läuft

**Konsequenz:** Scroll-Effekte lassen sich dort nicht live prüfen. Stattdessen die Formel
rechnerisch durchgehen — Transforms kurz auf `none` setzen, statische Positionen messen, und
den Verlauf über den ganzen Scrollweg simulieren. Muster:

```js
const lines=[...document.querySelectorAll('.pb__bg .bgl')];
const alt=lines.map(l=>l.style.transform); lines.forEach(l=>l.style.transform='none');
const d=lines.map(l=>{const q=l.getBoundingClientRect();const blk=l.closest('.pb__bg').parentElement;
 const br=blk.getBoundingClientRect();
 return {top:q.top+scrollY,bot:q.bottom+scrollY,bTop:br.top+scrollY,bH:br.height,
  sp:parseFloat(l.getAttribute('data-speed'))||0.12,g:blk};});
lines.forEach((l,i)=>l.style.transform=alt[i]);
// Wichtig: dieselbe Klammer wie der echte Handler, sonst falsche Ergebnisse
const c=(x,y)=>{const t=x.bTop-y;return Math.min(Math.max(t,-400-x.bH),innerHeight+400)+x.bH/2-innerHeight/2;};
```

**Fallstrick dabei:** Wenn die Simulation die **Sichtbarkeitsklammer des echten Handlers**
nicht nachbildet, meldet sie Überlappungen, die es nie gibt (einmal 74 px „Überlappung", die
in Wirklichkeit außerhalb des Sichtfelds lag).

**`html{scroll-behavior:smooth}`** macht `scrollTo` asynchron. Im zugeklappten Bereich
animiert es nie, der Test scrollt also gar nicht. → Zum Prüfen immer
`window.scrollTo({top:y,behavior:'instant'})`.

---

## Layout und CSS

### Hintergrundzeilen überlappen sich
**Zweimal passiert.** Ursachen:
1. `line-height` kleiner als 1 → die Glyphen ragen aus ihren Zeilenkästen
2. **Zu große Tempo-Unterschiede** zwischen benachbarten Zeilen — sie driften ineinander

Faustregel: Drift zwischen zwei Nachbarzeilen ≈ `Tempodifferenz × (400 + Blockhöhe/2 + Fensterhöhe/2)`.
- kurze Blöcke (~600 px): Stufen von **0,01** sind in Ordnung
- hohe Blöcke (> 1500 px): Stufen von **0,005**, sonst reicht der Zeilenabstand nicht

Immer über den **gesamten** Scrollweg prüfen, nicht nur an einer Stelle.

### Die Kapitelübergänge sind verkettet
Jedes Kapitel blendet oben über einen Verlauf die Farbe des **vorherigen** Kapitels aus:
`linear-gradient(to bottom,#vorherige-farbe 0,rgba(eigene,0) 460px)`.
Diese Vorgängerfarbe steht als fester Wert im CSS.

→ Ein Kapitel einfügen, löschen oder umsortieren bricht die Kette: an einer Stelle steht dann
die falsche Farbe im Verlauf und es entsteht eine sichtbare Kante. Nach jedem solchen Eingriff
die Verläufe aller Nachbarn durchgehen.

### `position: sticky` bricht
Ein Vorfahre mit `overflow` ungleich `visible` macht das Kleben wirkungslos. Das ist hier
schon einmal passiert (v6-Galerie, siehe `PROJEKT-UEBERGABE.md`). Vor jedem Sticky die ganze
Vorfahrenkette prüfen:

```js
let p=el.parentElement, schuld=null;
while(p&&p!==document.body){const o=getComputedStyle(p);
  if(o.overflow!=='visible'||o.overflowY!=='visible'){schuld=p.className;break;} p=p.parentElement;}
```

### Bilder ohne Maße lassen das Layout zusammenfallen
Ohne `width`/`height` am `<img>` hat das Bild vor dem Laden **keine Höhe**. Das Porträt-Kapitel
fiel dadurch von 2431 auf 659 px zusammen und die Messungen waren wertlos.
→ Echte Dateimaße setzen **und** im CSS `height:auto`, sonst wird verzerrt.

### `<picture>` fällt nicht zurück
Wenn die WebP-Quelle einen Fehler liefert, zeigt der Browser ein **kaputtes Bild** und greift
*nicht* auf das `<img>`-JPEG zurück. In Verbindung mit der iCloud-Auslagerung heißt das:
ausgelagerte WebP = kaputte Bilder, obwohl die JPEGs da sind.

### WebP und JPEG dürfen nicht auseinanderlaufen
Beim Tauschen von Vorschaubildern hat ein „lazy" Suchmuster nur das `srcset` erwischt, nicht
das `src`. Ergebnis: Karten hätten je nach Browser **zwei verschiedene Bilder** gezeigt.
→ Nach jedem Bildtausch prüfen, dass beide auf denselben Namen zeigen.

### Effekte, die ins Leere laufen
Zweimal passiert: ein Effekt, der von Überlauf lebt (seitlicher Drift, „seitlich scrollen"-Hinweis),
tut bei breitem Fenster nichts, weil alles hineinpasst.
→ Nach dem Bauen `scrollWidth - clientWidth` messen. Ist es 0, greift der Effekt nicht —
entweder Elemente vergrößern oder den Hinweis an die Bedingung koppeln.

### `scrollWidth > innerWidth` ist kein Beweis für Querscrollen
Die Live-Seite meldet 7 px Überhang — das ist die Scrollleiste. Entscheidend ist, ob man
tatsächlich scrollen kann:
```js
scrollTo(300,0); const geht=pageXOffset>0; scrollTo(0,0);
```

---

## Verhalten am Handy

- **Vollbild geht auf iOS nicht.** Alle iOS-Browser laufen auf WebKit; `requestFullscreen`
  auf dem Dokument existiert dort nicht, nur für Video. Der Knopf blendet sich deshalb aus,
  wenn `documentElement.requestFullscreen` fehlt. Kein Bug.
- **`vh` springt**, wenn die Browserleiste ein- und ausfährt → `svh` benutzen.
- **Scroll-getriebener Seitwärtsdrift kämpft mit dem Wischen.** Unter 700 px abgeschaltet,
  stattdessen `scroll-snap`.

---

## Arbeitsweise beim Ändern

### Suchmuster mit Sicherheitsnetz
Alle Änderungen an den HTML-Dateien laufen über Node-Skripte mit Suchen-und-Ersetzen.
**Immer prüfen, ob das Muster wirklich getroffen hat, und abbrechen, wenn nicht** — sonst
schreibt man stillschweigend nichts oder das Falsche. Das hat mehrfach Schaden verhindert:
- ein Muster hätte einen JavaScript-String in der Galerie-Funktion erwischt
- ein Schnitt für die alte Lightbox war 0 Zeichen lang, weil die Indizes vertauscht waren

Muster:
```js
if(!s.includes(alt)) throw new Error('nicht gefunden: '+alt.slice(0,50));
```

### Beim Kopieren von Seitenteilen
Beim Bau von `live/index.html` wanderte die alte Galerie-Lightbox **mit ihrem Markup, aber
ohne ihr JavaScript** mit — ein Dialog, der sich weder öffnen noch schließen ließ.
→ Wenn Markup übernommen wird, prüfen, ob das zugehörige Skript mitkommt oder das Markup weg muss.

### „Stummfilm" ist keine Aussage über den Ton
Max nannte „Hostage Holiday" einen Stummfilm. Gemeint war **ohne Dialog**. Die Datei hat eine
volle Musikspur mit 320 kbit/s und −19,4 dB. Wer daraufhin den `-an`-Befehl nimmt, liefert
einen stummen Film aus und merkt es nicht, weil das Bild in Ordnung aussieht.
→ **Vor jeder Videokompression den Pegel messen, nicht der Beschreibung glauben:**
```bash
ffmpeg -hide_banner -nostats -i datei.mp4 -vn -af volumedetect -f null /dev/null 2>&1 | grep mean_volume
```
Kein Audiostrom = wirklich stumm. Ein Strom allein beweist nichts — es gibt auch Spuren, auf
denen nur Stille liegt. Erst der Pegel entscheidet.


### Nicht komprimieren, was schon komprimiert ist
„Electrify Your Future" kam bereits als 1280×720 mit 1,0 Mbit/s, AAC 128k und gesetztem
faststart — also genau im Zielformat. Ein weiterer x264-Durchlauf hätte nur
**Generationsverlust** gebracht und kaum Platz gespart.
→ Vor jedem Durchlauf `ffprobe` fragen: Ist die Quelle schon 1280 breit und unter ~2 Mbit/s?
Dann kopieren statt rechnen.

### Breitwandfilme haben schwarze Balken im Bild
Derselbe Film liegt als 1280×720 vor, das eigentliche Bild ist aber nur 1280×480 ab y=120.
Ein naiver 4:5-Ausschnitt fürs Vorschaubild hätte oben und unten **schwarze Balken** enthalten.
→ Bildbereich erst ermitteln, dann daraus schneiden:
```bash
ffmpeg -hide_banner -nostats -ss 30 -t 12 -i film.mp4 -vf cropdetect=24:2:0 -f null - 2>&1 \
  | grep -o 'crop=[0-9:]*' | sort | uniq -c | sort -rn | head -3
```


### „Lokal committet" ist hier kein sicherer Zwischenzustand
Auf Max' Rechner läuft **GitHub Desktop** mit diesem Repo geöffnet. Im Protokoll
(`~/Library/Application Support/GitHub Desktop/logs/`) stehen Push-Vorgänge, die mit `[ui]`
markiert sind — also von Hand in der Oberfläche ausgelöst, nicht von einem Hook. Max drückt
dort offenbar routinemäßig auf „Push origin".

**Folge:** Ein Commit, den man „erstmal nur lokal" ablegt, kann Minuten später öffentlich
sein, ohne dass man selbst gepusht hat. Der Zustand „committet, aber noch nicht
veröffentlicht" hält hier also nicht von allein.

→ Nichts committen, was nicht veröffentlicht werden darf. Wenn etwas wirklich zurückgehalten
werden soll, mit Max reden statt auf „ist ja noch nicht gepusht" zu bauen.
Und: Wenn `origin/main` weiter ist, als der eigene Push erklärt, ist das **kein Rätsel** —
zuerst hier nachsehen:
```bash
grep -i 'Executing push' ~/Library/Application\ Support/GitHub\ Desktop/logs/*.log | tail
```
Die Zeitstempel dort sind **UTC**, die Uhr des Rechners steht auf **UTC+9**.


### Beigelegtes Material ist nicht automatisch eigenes Material
Max legte für das Drohnenkapitel elf Bilder bei mit der Bitte, „die besten auszusuchen".
Beim Ansehen war **keines davon von ihm**: Produktfotos aus Herstellershops (Artikelnummern
standen noch im Dateinamen), zwei mit Gemini erzeugte KI-Bilder, zwei schlecht freigestellte
PNGs mit Streifen im Bild.
→ **Vor dem Einbauen prüfen, woher ein Bild kommt.** Dateiname, Maße und Bildinhalt verraten
viel: Shop-Bilder haben Artikelnummern oder Größensuffixe wie `_1080x`, KI-Bilder heißen oft
nach dem Werkzeug, Freisteller haben harte Kanten und Artefakte.
Die Seite ist eine **Bewerbungsunterlage** — fremde Produktfotos sind rechtlich heikel, und
KI-Bilder untergraben genau die Aussage, die ein Portfolio machen soll.
Wenn eigenes Material da ist, Standbilder daraus ziehen. Und Max sagen, warum.

### Beim Kürzen neu aus dem Original rechnen
Max wollte von einem Clip nur die vordere Hälfte. Aus der bereits komprimierten Fassung zu
schneiden hätte einen zweiten Kompressionsdurchlauf bedeutet (oder einen unsauberen Schnitt
am nächsten Keyframe).
→ `-t <sekunden>` direkt auf das **Original** anwenden. Danach die überholte Langfassung
löschen, wenn sie von keiner Seite mehr eingebunden ist — vorher mit `grep` nachsehen.

### Neue Kapitel hinten anhängen, nicht einschieben
Wegen der verketteten Farbübergänge ist das **letzte** Kapitel die einzige Stelle, an der ein
neues Kapitel nur *einen* Verlauf braucht und keinen Nachbarn kaputtmacht.
→ Wenn die Reihenfolge nicht zwingend ist: hinten anhängen.


### Alles lädt sofort — die Seite hat kein `loading="lazy"`
Keines der inzwischen 63 Bilder ist verzögert eingebunden. Beim Aufruf lädt der Browser
**alles**, auch Bilder zehn Bildschirmhöhen weiter unten. Stand 13.09.: **5,2 MB** beim
Seitenaufruf. Die Videos fallen nicht ins Gewicht, die haben `preload="none"`.
→ Wer Bilder ergänzt, sollte das Gewicht im Blick behalten:
```bash
node -e 'const fs=require("fs");const s=fs.readFileSync("live/index.html","utf8");let n=0,sum=0;
[...new Set([...s.matchAll(/srcset="\.\.\/([^"]+\.webp)"/g)].map(m=>m[1]))].forEach(p=>{try{sum+=fs.statSync(p).size;n++}catch(e){}});
console.log(n+" Dateien, "+(sum/1048576).toFixed(1)+" MB")'
```
Der Fix wäre `loading="lazy"` an allen Bildern außer dem Auftakt — klein, aber **mit Max
absprechen**, weil er das nie beauftragt hat.


### Im zugeklappten Bereich spielt kein Video — auch wenn alles bereit ist
Beim Prüfen der Autoplay-Steuerung: `readyState=4`, 2,24 s gepuffert, `play()` warf **keinen
Fehler** — und `currentTime` blieb trotzdem bei 0. Der Browser-Bereich setzt die Wiedergabe
aus, solange er nicht sichtbar ist, und meldet das nirgends.
→ **Ein ausbleibender Fehler ist kein Beweis, dass etwas läuft.** Nie „Video spielt" melden,
nur weil `play()` durchging.

**Was stattdessen geht: die Aufrufe protokollieren.** Das prüft den echten Code der Seite,
nicht eine Nachbildung der Logik:
```js
const P=HTMLMediaElement.prototype, echtPlay=P.play, echtPause=P.pause, log=[];
P.play=function(){ log.push('PLAY '+this.currentSrc); return Promise.resolve(); };
P.pause=function(){ log.push('PAUSE '+this.currentSrc); };
window.scrollTo({top:Y,behavior:'instant'}); window.videoWahl();
P.play=echtPlay; P.pause=echtPause; log;
```
Für den Gegentest lässt sich ein Video als „laufend" vortäuschen, weil `paused` nur lesbar ist:
```js
Object.defineProperty(v,'paused',{configurable:true,get:()=>false});  // danach: delete v.paused
```

### Autoplay geht nur stumm — und nur mit Plan fürs Laden
Zwei feste Regeln, die jedes Autoplay-Vorhaben bestimmen:
1. **Ohne `muted` startet nichts.** Alle Browser blockieren Ton ohne Nutzerinteraktion.
2. **Abspielen heißt Herunterladen.** `preload="none"` muss bleiben, sonst zieht die Seite beim
   Aufruf alle Videos (hier über 200 MB). Nur das gerade aktive Video anspielen, nie alle
   sichtbaren.

Und: Wer automatisch startet, muss **eigenes Pausieren des Nutzers respektieren**, sonst
startet die Steuerung beim nächsten Scrollpixel wieder. Dafür unterscheiden, ob ein
`pause`-Ereignis vom eigenen Code kam oder vom Nutzer.


### `<video>` ohne `width`/`height` lässt das Layout genauso zusammenfallen wie `<img>`
**Am 14.09. aufgeflogen, und es war der eigentliche Grund für „das Autoplay bugt".**
Die Falle war für Bilder längst dokumentiert — bei den Videos hatte ich sie übersehen.
Ohne Maße hat ein `<video>` vor dem Laden von Poster und Metadaten nur die Standardgröße.
Gemessen: Seite **22225 px statt 27805 px**, also **5580 px zu kurz**. Beim Nachladen springt
alles nach unten.

Für eine Steuerung, die nach dem „mittigsten sichtbaren Video" sucht, ist das tödlich: Sie
misst in ein zusammengefallenes Layout und wählt durchgehend dasselbe falsche Video.

→ **An jedes `<video>` die echten Maße** (aus `ffprobe`) **und ins CSS `height:auto`** —
sonst wird verzerrt. Danach stand die Seite sofort auf 27805 px, mit null geladenen Dateien.

Gleich mit geprüft: 18 Bilder in den Design-Kapiteln hatten ebenfalls keine Maße, eines war
**19 px statt voller Höhe**. Bilder in Rahmen mit `aspect-ratio` (die Projektkarten) brauchen
nichts, die reservieren den Platz selbst.

Prüfung, ob die Seite beim Laden stillsteht:
```js
const sofort=document.body.scrollHeight;
await new Promise(r=>setTimeout(r,2500));
({sofort, nachher:document.body.scrollHeight, sprung:document.body.scrollHeight-sofort});
```
Sprung muss **0** sein.

### `play()` ist asynchron — eine Startanfrage muss verfolgt werden
Zweiter Fehler derselben Baustelle. `play()` liefert ein Versprechen, und bei `preload="none"`
lädt das Video erst danach. Solange bleibt `paused` auf `true`.

Naiver Code ruft deshalb bei **jedem Scrollpixel erneut** `play()` auf. Kommt dazwischen ein
`pause()`, bricht der Browser die laufende Anfrage ab („The play() request was interrupted by
a call to pause()") und das Video bleibt hängen.

→ Muster: je Element merken, ob eine Startanfrage läuft. Ein Haltewunsch während einer
laufenden Anfrage wird **vorgemerkt und danach ausgeführt**, nicht sofort.
```js
function starten(v){ if(v._anfrage||!v.paused) return; v._anfrage=true;
  var p=v.play();
  if(p&&p.then) p.then(function(){ v._anfrage=false;
      if(v._sollHalten){ v._sollHalten=false; anhalten(v); } },
    function(){ v._anfrage=false; v._sollHalten=false; });
}
function anhalten(v){ if(v._anfrage){ v._sollHalten=true; return; } if(v.paused) return;
  eigenerHalt=true; v.pause(); eigenerHalt=false; }
```
Messbar: 13 Scrollschritte über 10 Videos ergaben **9** `play()`-Aufrufe statt Dutzenden.

**Bekannter Restfall:** Löst ein `play()`-Versprechen nie aus (dauerhaft stehende Verbindung),
bleibt `_anfrage` gesetzt und das Video lässt sich weder anhalten noch neu starten. Da es in
dem Fall ohnehin nicht spielt, ist der Schaden gering — aber es steht hier, falls es auffällt.


### `pause()` bricht den Download nicht ab — das legt die ganze Seite lahm
**Der Fehler, den Max selbst richtig diagnostiziert hat.** Wer beim Scrollen Videos anspielt
und danach nur `pause()` ruft, lässt sie **weiter im Hintergrund laden**. Nach einem Durchlauf
durch die Seite laden acht Videos gleichzeitig, belegen die **sechs Verbindungen**, die ein
Browser pro Server erlaubt, und fressen die Bandbreite. Die unteren Videos laden dann gar
nicht mehr — genau das Symptom.

→ **Die Quelle entfernen und `load()` rufen.** Das bricht den laufenden Download wirklich ab
und stellt das Poster wieder her:
```js
var q=v.querySelector('source'); if(q) v.removeChild(q);
v.removeAttribute('src'); v.load();          // Download abgebrochen
```
Zum Wiederherstellen ein neues `<source>` anhängen und nochmal `load()`. Die Datei kommt beim
zweiten Mal aus dem Browser-Zwischenspeicher, das ist billig.

**Dazu eine Verzögerung vor dem Laden.** Wer nur vorbeiscrollt, soll gar nicht erst anfangen:
Ein Video muss hier **160 ms** mittig bleiben, bevor Quelle und Wiedergabe aufgebaut werden.

Nachgemessen mit dem Netzwerk-Protokoll — das ist der einzige verlässliche Beweis, weil
`play()`-Aufrufe nichts darüber sagen, was wirklich über die Leitung geht:

| Vorgang | Anfragen |
|---|---|
| 93 Scrollschritte über die ganze Seite | **0** |
| danach unten stehen bleiben | 1 (`drone-clip-1.mp4`) |
| danach hochscrollen zum ersten Film | 1 (`film-bergmann.mp4`), die erste mit `ERR_ABORTED` |

`ERR_ABORTED` im Protokoll ist hier das **gewünschte** Ergebnis, kein Fehler.

Prüfmuster:
```js
// Zustand aller Videos auf einen Blick (die Steuerung stellt das bereit)
window.videoZustand();   // -> hatQuelle, abgebaut, networkState, currentTime
```
Und im Netzwerk-Werkzeug nach `.mp4` filtern. Mehr als **eine** aktive Anfrage ist ein Fehler.


### `load()` feuert `pause` VERZÖGERT — und blockiert damit das Video für immer
**Der Fehler, der sich beim Hoch- und Runterscrollen anhäufte.** Die Steuerung merkt sich,
wenn der Nutzer selbst pausiert, um ihn nicht zu überfahren. Dafür braucht sie eine
Schutzmarke um das eigene `pause()`.

Das reicht nicht: **`load()` feuert sein `pause`-Ereignis erst später**, als eigene Aufgabe in
der Warteschlange. Eine Marke, die synchron gesetzt und gleich wieder gelöscht wird, ist dann
längst weg — das Ereignis gilt fälschlich als Nutzerklick, das Video wird als „von Hand
angehalten" markiert und **startet nie wieder**. Da der Merker nur bei *nicht*-aktiven Videos
aufgeräumt wurde, blieb ein aktives Video dauerhaft blockiert.

→ **Schutzmarke je Element, die erst nach ~150 ms verfällt**, und zwar als Zähler, nicht als
Schalter (mehrere Vorgänge können sich überlappen):
```js
function unserTun(v,fn){
  v._wir++;
  try{ fn(); }catch(e){}
  setTimeout(function(){ if(v._wir>0) v._wir--; },150);
}
// im Ereignis:  if(!v._wir && !v.ended) v.dataset.vonHand='1';
```
→ Und: **beim Abbauen jeden Merker löschen.** Nach einem Abbau ist das Element frisch, ein
alter „von Hand"-Merker darf nicht überleben.

### Nach einem asynchronen Start die Lage neu prüfen
`play()` kann fertig werden, wenn längst woanders hingescrollt wurde. Sich zu merken
„danach anhalten" reicht nicht, weil ein zwischenzeitlicher Abbau diesen Wunsch löscht.
→ Im Ergebnis des Starts **gegen den aktuellen Zustand prüfen**, nicht gegen einen Merker:
```js
p.then(function(){ v._anfrage=false;
  if(v!==aktuell || !hatQuelle(v)) anhalten(v); });
```

### Der DOM ist die Wahrheit, nicht ein Merker
`_abgebaut`-Flags laufen irgendwann aus dem Takt (ein Aufbau schlägt fehl, ein Ereignis kommt
doppelt). Dann steht das Flag auf „aufgebaut", es gibt aber kein `<source>` — und nichts
startet mehr.
→ Immer am DOM prüfen: `function hatQuelle(v){ return !!v.querySelector('source'); }`

### So prüft man das Anhäufen von Zustandsfehlern
Ein einzelner Durchlauf zeigt solche Fehler nicht — sie entstehen erst durch Wiederholung.
Muster: echte Wiedergabe nachbilden (inklusive des verzögerten `pause` aus `load()`), viele
Runden hoch und runter fahren und **an jedem Schritt** die Invarianten prüfen:
```js
// hoechstens eine Quelle, hoechstens eines spielend, keines blockiert
if(vs.filter(v=>v.querySelector('source')).length>1) fehler++;
```
Acht Runden über ~500 Schritte haben hier gereicht, um die Fehler sichtbar zu machen.


### Anamorphe Videos lassen die Seite springen
**Das Therme-Video hatte nicht-quadratische Pixel:** gespeichert 1280 × 720, dargestellt aber
**689:96, also rund 7,2:1** — ein ultrabreites Band für die Projektion auf eine Beckenwand.

Im Markup standen die *gespeicherten* Maße. Folge: Der Browser reserviert einen 16:9-Kasten,
korrigiert ihn auf das echte Verhältnis, sobald die Metadaten da sind — und **beim Abbauen
springt er zurück**. Mit der Autoplay-Steuerung, die ständig auf- und abbaut, hüpfte die Seite
dauernd. Dazu war das Vorschaubild gestaucht, weil es aus den gespeicherten Maßen stammte.

→ **Prüfen, bevor man Maße einträgt:**
```bash
ffprobe -v error -select_streams v:0 \
  -show_entries stream=width,height,sample_aspect_ratio,display_aspect_ratio \
  -of default=noprint_wrappers=1 datei.mp4
```
Ist `sample_aspect_ratio` nicht `1:1`, **neu rechnen mit `setsar=1`**, damit gespeicherte und
dargestellte Maße übereinstimmen. Danach passt ein einziger Wert überall — Markup, Poster,
Großansicht.

→ **Und das Poster aus der korrigierten Fassung neu erzeugen**, nicht aus der anamorphen.

Gegenprüfung, dass Markup und Dateien übereinstimmen — lohnt sich nach jedem Videotausch:
```js
// Kasten muss in allen vier Zustaenden gleich gross sein:
// frisch geladen / Quelle aufgebaut / abgebaut / erneut aufgebaut
```
Beim Therme-Video: **1040 × 147 in allen vier**, Seitenhöhe konstant.


### `aspect-ratio` schlägt die `height`-Angabe des Bildes nicht
Die Erinnerungskacheln der Produktwelt bekamen `aspect-ratio:1` — und reservierten trotzdem
**215 × 899**, also die Höhe aus dem `height`-Attribut. Ohne `height:auto` gewinnt das Attribut.
```css
.kacheln img{width:100%;height:auto;aspect-ratio:1;object-fit:cover}   /* height:auto ist Pflicht */
```
Dieselbe Falle wie bei Bildern und Videos, nur andersherum: Dort fehlten die Maße, hier
verhinderten sie das gewünschte Verhältnis. **Regel: Maße ins Markup, `height:auto` ins CSS —
immer beides.**

### Inhalte aus PowerPoint holen
Eine `.pptx` ist ein ZIP. Folientexte und Bilder kommen ohne Zusatzwerkzeug heraus:
```bash
unzip -qo datei.pptx -d ordner
# Texte:
node -e 'const s=require("fs").readFileSync(process.argv[1],"utf8");
 console.log([...s.matchAll(/<a:t>([^<]*)<\/a:t>/g)].map(m=>m[1]).join("\n"))' ordner/ppt/slides/slide2.xml
# Bilder liegen in ordner/ppt/media/
```
Das war bei der iCapsule die Quelle **aller** Produktangaben — und die Bilder dort waren
deutlich hochauflösender als die zuvor aus dem PDF geschnittenen.

### Fremde Marken im Portfolio
Die Seite ist eine **Bewerbungsunterlage**. Ein studentischer Konzeptentwurf im Stil eines
Herstellers ist üblich und völlig in Ordnung — eine Seite, die sich als dieser Hersteller
**ausgibt**, ist es nicht.
→ Formensprache ja: Typografie, Weißraum, Tafelrhythmus, ganzseitige Produktbilder.
→ Fremde Logos, nachgebaute Navigation der echten Firma, Anschein eines echten Angebots: nein.
→ Und immer eine klare Einordnung im Anschluss: wessen Entwurf, dass er nicht verkauft wird,
  dass Preis und Daten erfunden sind, wem die Marken gehören.


### Bildfüllend heißt nichts, wenn das Bild selbst leer ist
Die Renderings liefen über die volle Fensterbreite — und das Produkt sah trotzdem winzig aus.
Grund: **Die Bilder selbst waren zu 70–90 % leerer Hintergrund.** Gemessen am Anteil der
genutzten Bildfläche: Auftakt **12 %**, Assistent **17 %**, Bildschirme **32 %**.
Ein Bild auf volle Breite zu ziehen vergrößert dann nur die Leere mit.

→ **Erst zuschneiden, dann vergrößern.** Und: **kein Format erzwingen.** Der erste Versuch
schnitt auf 16:9 zu — bei hochkantem oder quadratischem Inhalt bleibt dann zwangsläufig
seitlich Leere (der Chip kam von 47 % auf 47 %, also gar nichts gewonnen). Auf die
**natürliche Form** des Inhalts schneiden und das Layout danach richten:
breite Zuschnitte über die volle Breite, quadratische mittig mit Maximalbreite.

**Der Trick dahinter:** Wenn Bild- und Seitenhintergrund dieselbe Farbe haben, ist der Bildrand
unsichtbar — das Produkt steht scheinbar frei auf der Seite statt in einem Kasten.

`cropdetect` reichte hier nicht (fand bei dunklem Produkt auf Schwarz gar nichts). Stattdessen
eigene Erkennung: Bild klein in Graustufen auslesen, Hintergrund aus den vier Ecken mitteln,
und alles zählen, was um mehr als eine Schwelle abweicht:
```bash
ffmpeg -v error -i bild.png -vf scale=320:180,format=gray -frames:v 1 -f rawvideo -
```
Danach den Rahmen in Quellpixel zurückrechnen und mit etwas Luft schneiden.

### `sips` wandelt stillschweigend die alte Datei um
Beim Zuschneiden schlug `ffmpeg` fehl (ein `:` im Dateinamen der Skalierungsoption), die
Zwischendatei blieb aber vom vorigen Durchlauf liegen — `sips` wandelte sie brav erneut um.
Ergebnis: **sieben scheinbar erfolgreiche Bilder, alle mit demselben Inhalt.** Aufgefallen nur,
weil alle exakt gleich groß waren.
→ Zwischendatei vor jedem Durchlauf löschen und danach prüfen, dass sie existiert und nicht
leer ist:
```bash
rm -f "$T/z.png"
ffmpeg … "$T/z.png" || { echo fehlgeschlagen; continue; }
[ -s "$T/z.png" ] || { echo leer; continue; }
```


### Canvas vor dem Layout messen ergibt 1 × 1
`getBoundingClientRect()` liefert beim Skriptstart oft noch 0, besonders bei `svh`-Höhen und
klebenden Rahmen. Ein Canvas, das daraufhin auf 1 × 1 gesetzt wird, bleibt für immer leer —
ohne Fehlermeldung.
→ `messen()` soll **zurückgeben, ob es geklappt hat**, und mehrfach nachgefasst werden:
bei `load`, per `ResizeObserver`, nach 60/250/700/1500 ms — und die Zeichenfunktion misst
selbst nach, wenn noch nichts da ist.

### Partikel: unter einem Pixel ist unsichtbar
Erste Fassung der Wolke: 700 Punkte mit 0,55–1,8 px und Deckkraft 0,10–0,26 →
**0,4 % Flächendeckung**, praktisch nicht zu sehen. Auf dem Bildschirm wirkt das wie Staub.
→ Faustwerte, die hier funktionieren: Punktzahl an die Fläche koppeln (`B*H/240`, gedeckelt),
Größe **1,2–4 px**, Deckkraft **0,2–0,55**, additive Überlagerung. Ergebnis: 5,9 % Deckung.
→ Und **nachmessen statt schätzen**: `getImageData` auslesen und den Anteil der Bildpunkte mit
Alpha über einer Schwelle zählen. Das sagt in einer Zahl, ob man überhaupt etwas sieht.

### Beim Ausblenden im klebenden Rahmen entsteht ein schwarzes Loch
Ein klebender Auftakt von 185 svh hat nur (185−100)=85 svh Scrollstrecke, in der er klebt.
Danach scrollt er noch 100 svh lang hinaus. Wer den Inhalt in dieser Strecke auf Deckkraft 0
bringt, hinterlässt **eine Bildschirmhöhe leere Fläche**.
→ Entweder den Inhalt sichtbar lassen und ihn natürlich hinausscrollen lassen, oder die
Ausblendung erst im letzten Viertel der Gesamthöhe beginnen.


### Ein Bild auf Schwarz schneidet ein Loch in alles dahinter
Der Auftakt hatte Partikel hinter dem Produkt — und mitten darin ein **rechteckiges schwarzes
Loch**. Ursache: Das Produktbild war ein JPEG mit undurchsichtigem schwarzem Hintergrund. Auf
schwarzem Grund sieht man den Kasten normalerweise nicht, über einer Animation schon.
→ Vor einem bewegten Hintergrund gehören Produktbilder **freigestellt**, mit Alphakanal
(PNG oder WebP — JPEG kann das nicht).

**Die Renderings hatten zwar einen Alphakanal, aber einen komplett deckenden.** Immer prüfen,
ob er auch benutzt wird, nicht nur ob er existiert:
```bash
sips -g hasAlpha bild.png          # sagt nur, DASS es einen gibt
ffmpeg -v error -i bild.png -vf scale=160:90 -pix_fmt rgba -frames:v 1 -f rawvideo -   # und dann zaehlen
```

### Freistellen: konvexe Hülle statt Flutung
Drei Anläufe, nur der dritte taugte:
1. **Zeilen- und Spaltenspanne, dann geschnitten** → Karomuster im Inneren, weil beide Spannen
   an dunklen Randstellen unterschiedlich weit reichen.
2. **Flutung vom Bildrand** (alles Dunkle, das vom Rand erreichbar ist, ist Hintergrund) →
   lief durch eine dunkle Lücke im Rand ins Innere und machte die Kuppel durchsichtig.
3. **Konvexe Hülle aller hellen Punkte, Polygon zeilenweise gefüllt** → sauber. Funktioniert,
   weil das Objekt von dieser Seite konvex ist; dunkle Innenflächen bleiben automatisch drin.
Danach die Maske zweimal weichzeichnen und leicht anziehen (`a*1.3-0.14`), sonst ist die Kante
entweder hart oder ausgefranst.

Zum Prüfen die Freistellung **auf eine grelle Farbe legen** — Reste sieht man sonst nicht:
```bash
ffmpeg -v error -y -f lavfi -i color=c=0xcc2222:s=WxH:d=1 -i frei.png \
  -filter_complex "[0][1]overlay" -frames:v 1 -update 1 test.jpg
```

### Hochskalieren: rechnen, nicht schätzen
Das Auftaktbild war sichtbar verpixelt. Rechnung: Quelle 584 px Produkt, ausgegeben als 1200er
Datei (2,05× hochgerechnet), dargestellt mit 600 CSS-px — auf einem Retina-Bildschirm sind das
1200 echte Bildpunkte aus 584 echten. Nach dem Neuschnitt aus einer 635er Quelle, Ausgabe 952 px,
Darstellung 500 CSS-px: **1,05×**. Faustformel:
`Hochskalierung = Darstellungsbreite × 2 ÷ echte Quellbreite` — über 1,3 sieht man es.


### Im Browser-Bereich feuern gar keine Scroll-Ereignisse
Nicht nur `requestAnimationFrame` friert ein — **`scroll` wird überhaupt nicht ausgelöst**.
`window.scrollTo` ändert `pageYOffset` tatsächlich, aber kein einziger Zuhörer wird gerufen.
Gemessen: 0 Ereignisse bei 9 Scrollschritten über 520 px.
→ Alles, was an Scrollen hängt, von Hand auslösen:
```js
window.scrollTo({top:y,behavior:'instant'});
window.dispatchEvent(new Event('scroll'));
```
Sonst misst man einen Ruhezustand und hält ihn für das Ergebnis.

### Zustand beim Entstehen einfrieren macht Effekte träge
Die Wellen der Partikelwolke merkten sich ihre Stärke **beim Entstehen**. Wer zu scrollen
anfing, sah deshalb bis zu 2,6 Sekunden lang nichts — die laufenden Wellen blieben schwach,
erst die nächste war kräftig.
→ Bei Effekten, die auf eine Eingabe reagieren sollen, den **aktuellen** Wert lesen, nicht den
gespeicherten. Messbar: aufleuchtende Partikel vorher 1,0× (kein Unterschied), danach **6,6×**.

### Einen Effekt auf ein Element zentrieren, nicht auf die Fläche
Die Partikelwolke war auf die Canvasmitte gerechnet, das Produkt saß aber tiefer — es wirkte
nach unten versetzt. Statt einen festen Versatz zu raten, den Mittelpunkt **aus dem Element
holen**:
```js
var g=el.getBoundingClientRect(), c=canvas.getBoundingClientRect();
var mx=(g.left+g.width/2-c.left)/c.width*B, my=(g.top+g.height/2-c.top)/c.height*H;
```
Das folgt auch Transformationen automatisch. Abweichung danach: 1–3 px.


### Zwei Elemente tauschen, ohne dass das Layout springt
Wenn zwei unterschiedlich hohe Texte an derselben Stelle wechseln sollen, ist absolute
Positionierung die naheliegende, aber schlechte Lösung — man muss die Höhe des Containers raten
und sie stimmt spätestens bei anderer Fensterbreite nicht mehr.
→ **Beide ins selbe Rasterfeld legen.** Der Container nimmt automatisch die Höhe des Höheren:
```css
.stapel{display:grid;align-items:center;justify-items:center}
.stapel>*{grid-area:1/1}
```
Nachgemessen: Höhe am Rechner 233 px, am Handy 96 px — jeweils vor und nach dem Tausch gleich.

### Mehr Fläche bei gleicher Punktzahl wirkt blasser
Die Partikelwolke wurde für einen weichen Rand vergrößert — und war plötzlich halb so hell
(Kern von 13 auf 7). Die Punktzahl war konstant geblieben, die Fläche aber um das 1,6-fache
gewachsen.
→ Bei Partikelsystemen die Anzahl **an die Fläche koppeln** und nach jeder Größenänderung die
Helligkeit nachmessen, nicht nur hinsehen.


### `style="grid-column:…"` am Element schlägt jede Medienabfrage
Zwei neue Bilder bekamen ihre Rasterposition als Attribut direkt am `<figure>`. Am Rechner sah
es richtig aus, am Handy blieben sie ~70–86 px schmal: Die Regel
`@media(max-width:900px){…{grid-column:1/-1}}` kam per Spezifität nicht dagegen an, und die
festen Spaltenangaben erzeugten im einspaltigen Raster zusätzlich **implizite Spalten**.
→ Rasterpositionen **immer als Klasse** im Stylesheet, nie als `style`-Attribut. Prüfen mit
`grep -c 'style="[^"]*grid-column' datei.html` — die Antwort muss `0` sein.

### Eine gelöschte Medienabfrage fällt am Rechner nicht auf
Beim Ausbauen eines nicht mehr gebrauchten CSS-Blocks verschwand die einzige Regel, die das
zwölfspaltige Raster am Handy auf eine Spalte zusammenlegt. Am Rechner war **nichts** zu sehen,
die Seite war vollständig in Ordnung — kaputt war sie nur unter 900 px, und dort in *allen acht
Kapiteln* gleichzeitig, nicht nur in dem, an dem gearbeitet wurde.
→ Nach jedem Eingriff ins Stylesheet gegenprüfen, dass die Regel noch da ist, und die Seite
**einmal bei 375 px messen**, nicht nur ansehen:
```js
[...document.querySelectorAll('.sr>*,.tr>*')].every(e=>getComputedStyle(e).gridColumnStart==='1')
```
Muss `true` ergeben. Kaputte Regeln melden sich nicht von selbst — CSS wirft keine Fehler.

### Das Stylesheet hängt im Zwischenspeicher
Nach einer CSS-Änderung zeigte die Messung im Browser weiter die alten 70 px, obwohl die Datei
auf der Platte richtig war. Erst ein hartes Neuladen brachte die erwarteten 423/247 px.
→ Wenn eine Messung einer gerade gemachten Änderung widerspricht: **zuerst hart neu laden**,
bevor man anfängt, die Ursache im Code zu suchen.

### Im zugeklappten Browser-Bereich landet `scrollTo` nie
`html{scroll-behavior:smooth}` lässt einen programmatischen Sprung über
`requestAnimationFrame` laufen — und rAF friert ein, sobald der Browser-Bereich zu ist. Folge:
`window.scrollTo(0,y)` ändert gar nichts, `scrollY` bleibt 0, und jede Messung, die auf der
Scrollposition beruht, liefert stillschweigend Unsinn. Hier sah es so aus, als würde die
Video-Auswahl nicht mehr greifen — dabei war die Seite nur nie gescrollt.
→ Vor solchen Messungen `document.documentElement.style.scrollBehavior='auto'` setzen und
danach `Math.round(scrollY)` **gegenprüfen**, statt dem Sprung zu vertrauen.

### Ein Fenster der Breite 0 liefert plausible, aber falsche Zahlen
Nach einem Wechsel auf `preset:"desktop"` war der Bereich auf 0 px zusammengeklappt.
Die Messung lief trotzdem durch und meldete Videos von 77 px Höhe und eine um 2000 px
gewachsene Seite — alles Folgeerscheinungen von `innerWidth === 0`.
→ Jede Messfunktion mit einem Riegel beginnen:
`if(innerWidth!==1400) return {abbruch:'Fenster '+innerWidth+' px'};`
Lieber ein Abbruch als eine Zahl, der man glaubt.

### `getClientRects().length` zählt keine Textzeilen
Bei einem Block-Element ist das Ergebnis immer 1, egal über wie viele Zeilen der Text läuft.
Eine Prüfung „Titel passt in eine Zeile" war damit wertlos.
→ Über die Höhe rechnen: `Math.round(höhe / parseFloat(lineHeight))`.

### Nicht jedes Element ohne `grid-column-start:1` ist ein Fehler
Die Handy-Prüfung „alle Rasterkinder beginnen in Spalte 1" schlug fehl — die Treffer waren
aber durchweg `.pb__bg`, also absolut positionierte Hintergrundebenen, die gar nicht am Raster
teilnehmen.
→ Vor dem Vergleich `getComputedStyle(e).position!=='absolute'` filtern.

### Hintergrundformen ohne prozentuale Verankerung wandern
Die ersten Filmstreifen saßen mit festen Pixelabständen zur Mitte. Bei 1400 px stimmte es, ab
etwa 1200 px lagen sie außerhalb des Fensters und waren unsichtbar.
→ Die Deko-Ebene über `left/right` genauso breit machen wie die Inhaltsspalte
(`.pb__bg` ragt 18 % über, also `13.24%` = 18/136) und alles daran ausrichten. Dann sitzt
jede Form bei jeder Fensterbreite an derselben relativen Stelle.

### Parallaxe braucht Überstand, sonst reißt die Kante auf
Eine mitlaufende Hintergrundebene wird um `center × speed` verschoben. Ist sie nur so hoch wie
ihr Block, wird am Rand eine Lücke sichtbar.
→ Größten Versatz ausrechnen — `(Fensterhöhe/2 + Blockhöhe/2) × speed` — und die Ebene um mehr
als diesen Wert über den Block hinausziehen. Hier: höchstens 163 px Versatz gegen 379 px
Überstand.

### `background-size:cover` skaliert auch nach oben
Eine Hintergrundgrafik füllte die Ebene zuverlässig — aber mit Faktor 1,206, also 20 % zu groß,
weil das Kapitel höher war als beim Entwurf angenommen. Auffallen tut das nur beim Nachmessen:
weiche Kanten und dickere Striche sehen nicht offensichtlich falsch aus.
→ Nach dem Einbau `Math.max(ebeneBreite/dateiBreite, ebeneHöhe/dateiHöhe)` ausrechnen. Liegt der
Wert über 1, ist die Grafik zu klein — dann die Datei größer erzeugen, nicht das CSS nachregeln.

### Zufall macht aus einem Zeichen ein Rauschen
Eine schematische Karte wurde mit Zufallsgenerator gefüllt: zufällige Parzellen, verstreute
Bäume, gedrehte Gebäude. Das Ergebnis war dicht und detailreich — und als Karte **nicht mehr
erkennbar**. Max: „zu viele random linien".
→ Was als Zeichen gelesen werden soll, braucht **Ordnung**, nicht Menge: parallele Feldstreifen
statt schiefer Vierecke, Bäume im gleichmäßigen Versatzraster statt gestreut, Straßen mit
echten Kreuzungen statt sich zufällig überschneidender Linien. Weniger Formen bei mehr Struktur
liest sich sofort. Hier: von 500+ Formen auf 133 — und erst dadurch erkennbar.

### Eine nahtlose Kachel baut man nicht von Hand, sondern über 3×3-Versatz
Formen so zu setzen, dass sie am Kachelrand zusammenpassen, ist Fummelei und geht bei jeder
Änderung wieder kaputt.
→ Den gesamten Inhalt in eine Gruppe legen und **neunmal** mit Versatz −T/0/+T in beide
Richtungen einsetzen; die `viewBox` schneidet auf eine Kachel zu. Das Ergebnis ist per
Konstruktion periodisch. Zusätzlich muss alles, was ein Gitter benutzt, seine Zufallswerte
**über den Index umlaufen lassen** (`i mod n`) — sonst springen die Linien an der Naht, obwohl
die Kachel selbst stimmt.

### Nahtlosigkeit lässt sich messen
Zwei Kacheln nebeneinander in ein Canvas zeichnen, für jede Spalte den mittleren Farbabstand
zur Nachbarspalte ausrechnen und den Wert an der Naht gegen die Verteilung im übrigen Bild
halten. Liegt er unter dem normalen Höchstwert, ist keine Kante zu sehen.
→ Besser als Hinsehen, und im zugeklappten Browser-Bereich die einzige Möglichkeit.

### „Unendlicher Loop" heißt Bewegung, nicht nur nahtlose Kachel
Ich hatte den Wunsch nach einem endlosen Loop als *nahtlos kachelndes Bild* verstanden, die
Nahtlosigkeit sauber nachgewiesen — und dabei übersehen, dass sich nichts bewegte. Gemeint war
eine dauerhafte Bewegung.
→ Wenn von „Loop", „endlos" oder „es soll wirken als würde man fliegen" die Rede ist: Es geht
um **Bewegung über der Zeit**. Die nahtlose Kachel ist nur die Voraussetzung dafür.

### Bei großen Flächen bewegt man `background-position`, nicht `transform`
Eine 1400 × 4000 px große Ebene dauerhaft zu animieren: Mit `transform` wird sie zur
Verbundebene und muss bei jedem Bild komplett neu gezeichnet werden (5,6 Mio. Pixel). Über
`background-position` zeichnet der Browser nur den sichtbaren Ausschnitt.
→ Und dann darauf achten, dass **kein anderes Skript** ein `transform` auf dasselbe Element
setzt — hier hätte die vorhandene Parallaxe genau das getan. Element aus deren Auswahl
herausgenommen (Klasse entfernt), Bewegung kommt jetzt allein aus der Animation.

### Der Weg pro Durchlauf muss exakt der Kachelgröße entsprechen
Sonst springt das Bild bei jeder Wiederholung. Wird die Kachel woanders anders skaliert — etwa
kleiner am Handy —, braucht dieser Fall **eigene Keyframes** mit dem passenden Weg. Eine
Animation von 1700 px auf einer 880-px-Kachel springt bei jedem Durchlauf sichtbar.

### Ein Prüfmuster ohne Minuszeichen übersieht stillschweigend Treffer
Die Kontrolle „steht ein Baum auf der Straße?" las die Kreise mit `cx="([\d.]+)"` aus der
Datei. Acht Bäume hatten negative Koordinaten (sie ragen über den Kachelrand) und wurden
dadurch **gar nicht geprüft** — das Ergebnis „0 Treffer" war zu diesem Zeitpunkt nichts wert.
→ Bei solchen Prüfungen immer gegenrechnen, ob die Anzahl der geprüften Elemente mit der
Gesamtzahl übereinstimmt. Hier: 133 geprüft gegen 141 vorhanden — die Lücke hat den Fehler
verraten, nicht das Ergebnis.

### Ausdünnen am Rand muss man durchrechnen, nicht schätzen
Ein Waldstück sollte nach außen ausfransen statt als Kreis abzuschneiden. Mit geschätzten
Werten für Rasterabstand, Streckung und Ausdünnschwelle blieben von einem Wald **17 Bäume**
übrig, vom zweiten fünf.
→ Die Formel vorher isoliert durchrechnen und die Trefferzahl ausgeben lassen, bevor man sie
in den Generator einbaut. Drei Parametersätze durchgespielt, dann stimmte es auf Anhieb.

### Eine Farbe kann rechnerisch da sein und trotzdem unsichtbar
Sechs Feldtöne mit Deckkraft .04 bis .13 auf dunklem Grund ergaben einen Farbabstand von
20 bis 37 — für das Auge praktisch nichts. Sichtbar blieben nur die Striche darüber, und das
Bild wirkte wie Gekritzel.
→ Bei Flächen auf dunklem Grund den **Abstand zum Grund ausrechnen**, nicht die Deckkraft
beurteilen: `grund + alpha*(farbe-grund)` und davon den Abstand zum Grund. Unter etwa 40 ist
eine Fläche auf dunklem Grund nicht mehr als Fläche wahrnehmbar.
→ Und prüfen, wie viel Prozent der Fläche überhaupt vom Grund abweicht. Ein Flächenbild liegt
nahe 100 %, ein Strichbild bei wenigen Prozent — die Zahl sagt sofort, welches von beiden man
gebaut hat.

### Wer eine Linie nachträglich auftrennt, muss auch mitnehmen, was darauf saß
Bäume wurden entlang des vollen Heckenverlaufs gesetzt, die Hecke danach an den Straßen
aufgetrennt. Ergebnis: Bäume, die frei im Nichts stehen, weil ihre Hecke dort gar nicht mehr
ist.
→ Erst auftrennen, dann bestücken — die Punkte auf den **übrig gebliebenen** Stücken verteilen.

### Eine Abstandsprüfung gilt nur dort, wo sie aufgerufen wird
Nach einem Umbau prüfte nur noch die Heckenschleife auf Abstand zur Straße; die Waldschleife
war eine eigene Funktion und hatte die Prüfung nicht. Vier Bäume standen auf der Fahrbahn,
obwohl „die Prüfung" angeblich drin war.
→ Nach jedem Umbau die Prüfung **aus der fertigen Datei heraus** wiederholen, nicht auf den
Generator vertrauen. Genau das hat es hier gefunden.

### Feste Koordinaten für Gebäude gehen irgendwann schief
Die Höfe standen an eingetragenen Punkten. Sobald die Straßen sich änderten, standen sie darauf.
→ Platz **suchen** statt eintragen: in Ringen nach außen gehen, bis alle Ecken frei sind, und
die Verschiebung ausgeben, damit man sie sieht (hier 78 px).

### Eine Musterkachel muss die Bildkachel ohne Rest teilen
Ein `<pattern>` mit `patternUnits="userSpaceOnUse"` wird im Benutzerkoordinatensystem des
Elements positioniert. Bei einer über `<use>` neunfach versetzten Kachel verschiebt sich das
Muster mit jedem Versatz — teilt die Musterkachel die Bildkachel nicht glatt, sieht man in
jeder Fläche, die über den Rand läuft, einen Sprung im Raster.
→ Musterkachel als Teiler wählen und das im Code festhalten: 1700 / 50 = 34.

### Beim Abtasten einer Fläche nicht ausgerechnet auf die Markierung zielen
Die Prüfung „ist die Straße deckend?" tastete die Fahrbahn entlang der **Mittellinie** ab —
also genau dort, wo der gestrichelte Mittelstreifen liegt. Ergebnis: Streuung 17,8 und das
falsche Urteil „durchscheinend". Seitlich versetzt abgetastet: Streuung 0.
→ Messpunkte bewusst dorthin legen, wo nur das liegt, was man prüfen will — und bei einem
überraschenden Ergebnis zuerst die Messstelle verdächtigen, nicht die Sache.

### Halbdurchsichtige Flächen ergeben nie eine saubere Karte
Felder, Wald und Gebäude lagen als eigene Ebenen übereinander, jede mit Alphawert. An jeder
Berührung mischten sich die Farben, und ein Wald über einem Feld sah aus wie ein Klecks — die
Zeichen des Feldes schimmerten hindurch.
→ Eine Karte ist eine **Aufteilung**: Jeder Punkt gehört genau einer Fläche. Wald ist keine
Ebene über den Feldern, sondern eine Nutzungsart **neben** ihnen. Und alle Flächenfarben
deckend setzen, also den Wert über dem Grund ausrechnen und als Vollton eintragen. Zeichen
(Bäume, Symbole) dürfen Umrisse bleiben, Flächen nicht.

### Deckung prüft man mit einem zweiten Hintergrund
Ob eine Grafik wirklich deckend ist, sieht man auf dunklem Grund fast nie.
→ Zweimal in ein Canvas zeichnen, einmal auf den echten Grund, einmal auf eine Signalfarbe.
Jeder Pixel, der sich unterscheidet, ist durchsichtig. Hier: 0 % Abweichung.

### Gewürfelte Verteilungen treffen Anforderungen nicht zuverlässig
Die Nutzungsarten wurden zufällig verteilt, mit der einzigen Regel „kein gleicher Nachbar".
Ergebnis: eine einzige Getreideparzelle — und damit war das Flurzeichen, das genau dort liegen
sollte, praktisch unsichtbar.
→ Wo eine bestimmte Mischung gebraucht wird, die Verteilung **von Hand legen** und die Regeln
beim Bauen prüfen lassen (hier: Abbruch, wenn zwei Nachbarn gleich sind, Naht eingeschlossen).

### Ein Wald braucht Kronendeckung, keine Baumzahl
Ein Raster aus Baumzeichen sah nach Punktmuster aus, obwohl fast 200 Bäume darin standen. Die
Zahl ist die falsche Größe — entscheidend ist, **wie viel Prozent der Fläche die Kronen
bedecken**. Bei 13 % liest man Punkte, bei rund 70 % einen Wald, deutlich darüber eine
strukturlose grüne Masse.
→ Vorher ausrechnen: `Kronenfläche / Rasterzelle`, und danach am fertigen Bild nachmessen
(Anteil Kronenfarben an Kronen plus Boden). Hier 73,9 %.

### Farbabstände zwischen Nachbarn muss man rechnen, nicht schätzen
Sieben Flächentöne wirkten für sich gut, aber vier Nachbarpaare lagen unter ΔE 12 und lasen
sich als eine Fläche.
→ Die Töne in L\*a\*b\* umrechnen und alle Nachbarpaare prüfen. Unter etwa ΔE 15 verschwimmen
zwei Flächen ineinander. Und wenn die Anordnung frei ist: sie **suchen** statt legen — hier aus
400 000 Mischungen die mit dem größten kleinsten Abstand, Ergebnis ΔE 15,5 statt 9,4.

### Einen SVG-Filter dreht man über das Koordinatensystem, nicht über Parameter
`feGaussianBlur` kennt nur x und y, eine schräge Richtung gibt es nicht. Ein Filter rechnet aber
im Koordinatensystem des Elements, an dem er hängt.
→ Außen drehen, Filter dort anhängen, innen zurückdrehen:
```xml
<g transform="rotate(45 cx cy)"><g filter="url(#mb)"><g transform="rotate(-45 cx cy)">…</g></g></g>
```
Der Inhalt landet geometrisch unverändert, nur die Filterachse ist gedreht. Bei einer kachelbaren
Grafik bleibt dadurch auch die Periode erhalten.
Danach prüfen, ob die Unschärfe die Kachelränder anfrisst: Anteil der Pixel am Rand, die noch
die Grundfarbe zeigen. Hier 0 %.

### Eine schöne Palette kann den Text unlesbar machen
Eine vorgegebene, helle Farbreihe als Hintergrund ließ den Kontrast des Fließtextes auf 2,45:1
fallen — die Schwelle liegt bei 4,5.
→ Bei Flächen hinter Text nicht nach Gefühl abdunkeln, sondern die Deckkraft **durchrechnen**:
das hellste Pixel der Grafik über dem Grund zusammensetzen und den WCAG-Kontrast gegen die
Textfarbe bilden. Dann den höchsten Wert nehmen, der die Schwelle noch hält. Hier 0,36.
→ Ein dunkler Grund hinter dem Text ist die naheliegende Lösung, wird aber leicht als Rahmen
wahrgenommen, selbst mit weichem Verlauf. Zuerst die Deckkraft versuchen.

### `.pb__bg` ist kein Vollflächen-Hintergrund
Der Kasten für die Hintergrundtypografie reicht nur 18 % über die Inhaltsspalte hinaus, also
etwa 1414 px bei 1040 px Spalte. Für lange Umrisswörter genügt das, für einen flächigen
Hintergrund nicht — an breiten Fenstern bleiben links und rechts Streifen stehen.
→ Flächige Hintergründe direkt ans Kapitel hängen (`position:absolute; inset:0`), nicht in
`.pb__bg`. Danach nachmessen: alle vier Ränder zwischen Ebene und Kapitel müssen 0 sein.

### Wer das Kapitel überdeckt, überdeckt auch den Farbübergang
Der weiche Übergang zum vorigen Kapitel steckt als `background-image` am Kapitel selbst. Eine
flächige Ebene darüber löscht ihn, und die Kapitelgrenze wird hart.
→ Den Übergang als `::after` mit `position:absolute; inset:0` wiederholen. Ein `::after` ist das
letzte Kind und deckt damit vorher stehende positionierte Geschwister ab, während Inhalte mit
`z-index:1` darüber bleiben.

### Ein Gaußfilter unter Sigma 0,8 tut nichts mehr
Beim Feinjustieren einer Bewegungsunschärfe lieferten die Querwerte 0,8, 0,4 und 0,2 exakt
dieselben Messwerte. Unterhalb von etwa einem Pixel verschwindet der Effekt in der
Rasterauflösung.
→ Nicht weiter nach unten drehen und auf eine Wirkung hoffen — 0,8 ist die praktische
Untergrenze. Und: gegenläufige Wünsche („mehr Richtung, weniger Weichzeichnung") lassen sich
nur messen, nicht sehen. Farbunterschied zum Nachbarn längs gegen quer, beides gegen die
scharfe Fassung als Bezug.

### Erzeugte Dateien auf die Werte prüfen, die drinstehen sollten
Ein Testlauf übergab zwei Zahlen als ein Argument. Der zweite Parameter fiel auf seinen
Standardwert zurück, und in der Datei stand `stdDeviation="13 1.6 1.6"` — drei Werte, ungültig.
Die Probedateien sahen trotzdem plausibel aus und hatten fast identische Größen.
→ Nach dem Erzeugen den entscheidenden Wert **aus der Datei zurücklesen** und anzeigen. Ein
`grep -o 'stdDeviation="[^"]*"'` hätte den Fehler sofort gezeigt — und hat es dann auch.

### Eine Endlosanimation bei `currentTime = Dauer` abzutasten misst den nächsten Umlauf
Die Prüfung einer Flugbahn ergab einen Tempofaktor von 170 und eine Richtung von −135°. Beides
kam von einem einzigen Messpunkt: Bei `currentTime = Dauer` steht eine `infinite`-Animation
schon wieder am Anfang, der letzte Schritt sprang also über den ganzen Weg zurück.
→ Bis knapp davor abtasten (`Dauer · 0,9999`) und den Endpunkt getrennt aus den Keyframes
prüfen.

### Schwankungen in einem Loop brauchen ganzzahlige Frequenzen
Tempo und Richtung sollen sich über den Umlauf ändern, der Loop aber nahtlos bleiben. Mit
beliebigen Frequenzen stimmen Anfang und Ende zwar im Wert überein (das erzwingt die
Skalierung), nicht aber in der **Steigung** — und genau das sieht man als Ruckler an der Naht.
→ Alle Schwingungen als ganzzahlige Vielfache der Umlauffrequenz ansetzen: `sin(2πt)`,
`sin(4πt)`, `sin(6πt)`. Dann passt auch die erste Ableitung.

### Amplituden für „mal schneller, mal langsamer" durchrechnen
Der erste Versuch hatte einen Tempofaktor von 35 — praktisch Stehenbleiben und Losschießen.
Ein Faktor um **4** fühlt sich nach Beschleunigen und Bremsen an, ohne zu stocken.
→ Die Amplituden vorher isoliert durchrechnen und den Faktor ausgeben lassen, statt am
fertigen Bild zu schätzen.

### Automatische Rasterplatzierung wandert nur vorwärts
Ein breites Element wurde vor einem schmalen in dieselbe Rasterreihe gesetzt. Weil das breite
Element die Spalten 5–12 belegte, fand das schmale (Spalten 1–4) keinen Platz mehr links davon
— der Cursor geht nicht zurück — und rutschte in eine eigene Reihe. Kostenpunkt: eine leere
Hälfte und 426 px Seitenhöhe.
→ Bei `grid-auto-flow: row` das Element mit der **kleineren Spaltennummer zuerst** in den
Quelltext setzen. Danach nachmessen, ob beide wirklich dieselbe Reihe haben: die y-Werte
vergleichen, nicht nur hinsehen.
