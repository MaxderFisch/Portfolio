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

### `mdls` lügt bei Videomaßen
Meldete 7751 × 1080 für ein Video, das tatsächlich 1920 × 1080 war. Ich habe daraufhin
versehentlich **hoch**skaliert — 27,8 MB statt der möglichen 10,8 MB.
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

