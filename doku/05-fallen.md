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

