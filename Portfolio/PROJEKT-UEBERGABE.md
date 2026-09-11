# Übergabe-Dokument: Portfolio-Website von Max Aulinger

Dieses Dokument ist eine vollständige Wissensübergabe für eine andere KI (oder einen anderen Claude-Chat), die dieses Projekt weiterbetreuen soll. Es beschreibt den Zweck, den aktuellen Stand, die technische Architektur, die Design-Entscheidungen, bekannte Probleme und ihre Lösungen sowie offene Punkte. Alles, was hier steht, basiert auf dem tatsächlichen Verlauf der Zusammenarbeit mit Max — nicht auf Annahmen.

---

## 1. Wer ist der Nutzer und worum geht es

Max Aulinger ist Medientechnik-Student an der TH Deggendorf. Er baut sich eine persönliche Portfolio-Website, deren Hauptzweck es ist, sich für ein **verpflichtendes Praxissemester** (laut Kontaktsektion: 24 Wochen) zu bewerben. Die Website soll seine drei Kernkompetenzen zeigen:

- **Fotografie** (Porträt, Natur, Architektur, Tiere, "Momente")
- **Video/Drohnenaufnahmen** (Showreel, Zeitraffer, Drohnenclips)
- **Design** (ein gestalteter Flyer als Beispielarbeit, als PDF herunterladbar)

Die Kontaktsektion adressiert explizit Firmen/Betreuer, die ein Praxissemester anbieten könnten. E-Mail-Adresse im Kontakt-Mailto-Link: `maxau.aulo@gmail.com`.

Max kommuniziert fast ausschließlich über lange, gesprochene und transkribierte Sprachnachrichten (spürbar bayerisch eingefärbt, mit vielen Füllwörtern, Selbstkorrekturen und Wiederholungen). Er ist **nicht** technisch/programmierseitig, sondern beschreibt gewünschte visuelle/interaktive Effekte sehr bildhaft ("das klebt mir so nach unten", "ich will die Website nicht so breit", "die Bilder sollen quasi reinfliegen"). Als Assistent ist es wichtig, aus diesen bildhaften Beschreibungen präzise technische Anforderungen abzuleiten, und im Zweifel lieber sauber nachzufragen (per AskUserQuestion) als etwas Falsches zu bauen — Max hat das in der Vergangenheit positiv aufgenommen.

Wichtig: Max testet die Ergebnisse **selbst im echten Browser** und gibt dann sehr genaues, konkretes Feedback zu dem, was er sieht (z.B. dass eine Galerie sich nicht wie erwartet verhält). Das bedeutet: Auch wenn eine Implementierung logisch/statisch korrekt aussieht, kann es echte Laufzeit-Bugs geben, die erst durch sein Feedback auffallen (siehe Abschnitt 7, "Sticky-Bug").

---

## 2. Grundkonzept: Mehrere Design-Versionen parallel

Das Kernkonzept dieser Website ist ungewöhnlich: Es gibt **nicht eine** finale Website, sondern **sechs parallele, komplett eigenständige Design-Versionen** (`v1` bis `v6`), zwischen denen man über einen kleinen Versions-Schalter oben links auf jeder Seite hin- und herwechseln kann. Max nutzt das, um verschiedene Stilrichtungen und Interaktionsideen zu vergleichen, bevor er sich (vermutlich irgendwann) auf eine finale Version festlegt oder Elemente aus mehreren kombiniert.

**Ganz wichtig für die Weiterarbeit:** Wenn Max sagt "lass die alten Versionen so, wie sie sind" oder Ähnliches, bedeutet das: bestehende `vX`-Ordner **nicht verändern**, sondern neue Versionen als neue Ordner (`v(n+1)`) daneben anlegen. Das ist in der Vergangenheit explizit so gewünscht worden, nachdem eine Iteration versehentlich alte Versionen überschrieben hatte bzw. Max den Eindruck hatte, ältere Versionen seien verloren gegangen (siehe Abschnitt 7).

Jede Version ist komplett eigenständig: eigenes `index.html`, eigenes `css/style.css`, eigenes `js/main.js`, jeweils im Ordner `vX/`. Gemeinsame Ressourcen (Bilder, Videos, Fotodaten) liegen **eine Ebene höher** im Projekt-Root und werden über relative Pfade (`../assets/...`, `../js/photos-data.js`) eingebunden.

---

## 3. Ordnerstruktur (Stand jetzt)

```
Portfolio/                          ← Projekt-Root (= das vom Nutzer ausgewählte Verzeichnis)
├── index.html                      ← Redirect-Seite, leitet automatisch auf v1/index.html weiter
├── css/style.css                   ← ACHTUNG: Altlast, wird von KEINER aktuellen Version referenziert
├── js/main.js                      ← ACHTUNG: Altlast, wird von KEINER aktuellen Version referenziert
├── js/photos-data.js               ← AKTIV GENUTZT von allen v1–v6 (zentrale Foto-Datenbank, siehe unten)
├── assets/
│   ├── img/
│   │   ├── photo/thumb/            ← 30 Fotos als .jpg + .webp (60 Dateien), für Galerie-Thumbnails
│   │   ├── photo/full/             ← dieselben 30 Fotos in voller Auflösung, für die Lightbox
│   │   ├── design/                 ← Flyer-Bilder (flyer-cover.*, flyer-full.*) + flyer-fertig.pdf
│   │   └── misc/                   ← profile.jpg/.webp (Porträtfoto für "Über mich")
│   └── video/                      ← showreel.mp4, drone-clip-1.mp4, zeitraffer.mp4 + jeweilige Poster-JPGs
├── v1/  (css/style.css, index.html, js/main.js)   ← "Monochrom"
├── v2/  (css/style.css, index.html, js/main.js)   ← "Scroll-Kino"
├── v3/  (css/style.css, index.html, js/main.js)   ← "Editorial"
├── v4/  (css/style.css, index.html, js/main.js)   ← "Editorial Noir"
├── v5/  (css/style.css, index.html, js/main.js)   ← "Editorial Noir Refined"
└── v6/  (css/style.css, index.html, js/main.js)   ← "Editorial Noir Motion"
```

**Root-Level `index.html`** ist aktuell eine simple Weiterleitung (`window.location.replace("v1/index.html")`) auf **V1**, nicht auf die neueste Version. Das ist evtl. nicht (mehr) beabsichtigt — könnte ein guter Punkt sein, den man Max proaktiv anspricht: Soll die Startseite künftig auf die neueste/beste Version (aktuell V6) zeigen, oder soll es eine echte Auswahlseite werden?

**Root-Level `css/style.css` und `js/main.js`** sind vermutlich Überbleibsel aus einer sehr frühen Version, bevor das Versionierungs-Konzept mit `v1`–`v6`-Unterordnern eingeführt wurde. Sie werden von keiner aktuell existierenden Version eingebunden (verifiziert per Grep über alle `vX/index.html`). Diese Dateien könnten aufgeräumt/gelöscht werden, aber das wurde nie explizit besprochen — vor dem Löschen lieber bei Max nachfragen, falls es relevant wird.

---

## 4. Geteilte Ressourcen im Detail

### `js/photos-data.js`
Eine reine Datendatei mit einem globalen `const PHOTOS = [...]` Array. Jeder Eintrag hat die Form:
```js
{ slug: "nebelmeer-gold", category: "natur", title: "Nebelmeer in Gold", alt: "…", ratio: 1.4989 }
```
- `slug` referenziert die Dateinamen in `assets/img/photo/thumb/` und `assets/img/photo/full/` (jeweils `.jpg` und `.webp`, gleicher Basisname).
- `category` ist eine von: `portrait`, `natur`, `architektur`, `tiere`, `momente` (Filterleiste in der Galerie nutzt genau diese Werte plus `all`).
- `ratio` ist das Seitenverhältnis (Breite/Höhe) des Originalbildes — wird von den Galerie-Layout-Algorithmen genutzt, um Bildgrößen zu berechnen, **ohne** auf das tatsächliche Laden des Bildes warten zu müssen (deterministisches Layout).
- Aktuell 30 Fotoeinträge, alle Assets vorhanden und verifiziert (60 Thumb-Dateien, 60 Full-Dateien, jeweils jpg+webp).

Diese Datei wird von **jeder** Version über `<script src="../js/photos-data.js"></script>` eingebunden und ist die einzige "Quelle der Wahrheit" für die Fotogalerie. Wenn Max neue Fotos hinzufügen will, muss hier ein neuer Eintrag rein UND die Bilddateien müssen in `thumb/` und `full/` liegen.

### `assets/`
- Videos liegen als `.mp4` mit jeweiligem `-poster.jpg` (Vorschaubild vor dem Abspielen) vor: `showreel`, `drone-clip-1`, `zeitraffer`.
- Der Flyer (Design-Sektion) liegt als Bild (`flyer-cover.*`, `flyer-full.*`) UND als herunterladbares PDF (`flyer-fertig.pdf`) vor.
- Das Porträtfoto für "Über mich" ist `misc/profile.jpg` / `.webp`.

---

## 5. Der Versions-Schalter (WICHTIGER KONTRAKT)

Jede `vX/index.html` beginnt (nach Grain-/Cursor-Deko-Divs) mit einem Nav-Block:

```html
<nav class="version-switch" aria-label="Design-Version wählen">
  <a href="../v1/index.html" class="version-switch__link">V1</a>
  <a href="../v2/index.html" class="version-switch__link">V2</a>
  <a href="../v3/index.html" class="version-switch__link">V3</a>
  <a href="../v4/index.html" class="version-switch__link">V4</a>
  <a href="../v5/index.html" class="version-switch__link">V5</a>
  <a href="../v6/index.html" class="version-switch__link is-active">V6</a>
</nav>
```

**Regel:** Diese Liste muss in JEDER Version alle existierenden Versionen enthalten, mit `is-active` nur auf dem Link zur jeweils eigenen Version. Sobald eine neue Version (z.B. künftig `v7`) angelegt wird, müssen **alle** bestehenden `vX/index.html`-Dateien (inklusive der ganz alten v1–v4) um einen neuen Link ergänzt werden. Aktuell (Stand dieses Dokuments) haben alle sechs Versionen korrekt 6 Links mit je genau einem `is-active`.

### Bekannter, bereits behobener Bug: unsichtbarer Schalter in V3/V4
Max hatte gemeldet, er habe in V4 gar keinen Schalter gesehen und wusste deshalb nicht mal, dass v1–v3 noch existierten. Ursache war ein CSS-Z-Index-Fehler: In v3 und v4 war `--z-version-switch: 100` kleiner als `--z-nav: 200` (die fixierte Hauptnavigation), wodurch der Schalter hinter der Nav-Leiste verschwand. **Fix:** In v3, v4, v5 und v6 ist `--z-version-switch` jetzt auf `210` gesetzt (über der Nav mit 200). v1 und v2 hatten dieses Problem nie (andere Z-Index-Werte). Wenn künftig neue Versionen von v4/v5/v6 abgeleitet werden (z.B. per Copy), unbedingt prüfen, dass dieser Wert erhalten bleibt.

---

## 6. Die sechs Versionen im Überblick

Alle Versionen teilen dieselbe grundlegende Seitenstruktur (Sections in dieser Reihenfolge): `hero` (#top) → `about` (#about) → Foto-Galerie (#fotografie) → `design` (#design) → `video-section` (#video) → `contact` (#kontakt) → Footer. Was sich unterscheidet, ist Typografie, Farbwelt, Layout-Details und (ab V3) das Scrollverhalten.

- **V1 · "Monochrom"** — Schriftart Fraunces (Serif) für Überschriften. Klassischste, ruhigste Variante. Wird aktuell auch von der Root-`index.html` als Default-Weiterleitung angezeigt.
- **V2 · "Scroll-Kino"** — Schriftart Poppins (Sans) + Merriweather (Serif), andere Nav-Struktur (`header.header` statt `header.nav`, eigenes Burger-Menü-Markup). Laut Max' ursprünglichem Feedback die Basis, die er zunächst nur "ausgebessert" haben wollte (Hero-Text-Position, Bildbreiten etc. — dieses Feedback bezog sich historisch auf die Vorgängerversion von V2, wurde aber inhaltlich in der Praxis auf die V4→V5-Linie angewendet, siehe unten).
- **V3 · "Editorial"** — Schriftart Playfair Display (Serif-Headlines) + Crimson Text + IBM Plex Sans. Erste Version mit dem redaktionellen/"Editorial"-Look, der sich bis V6 durchzieht.
- **V4 · "Editorial Noir"** — Dunklere/düsterere Variante von V3. In einer früheren Iteration wurde hier ein abgelehnter Scroll-Zoom-Effekt entfernt und zu dunkle Video-/Foto-Filter (Helligkeit/Sättigung) aufgehellt, nachdem Max das als "zu dunkel" kritisiert hatte.
- **V5 · "Editorial Noir Refined"** — reine Layout-Verfeinerung von V4, siehe Abschnitt 6a.
- **V6 · "Editorial Noir Motion"** — V5 plus deutlich aufwendigeres Scrollverhalten, insbesondere die horizontale "Scroll-Jack"-Galerie. Aktuell die technisch aufwendigste und am weitesten entwickelte Version. Siehe Abschnitt 6b für Details.

Die CSS-Dateien nutzen durchgehend CSS Custom Properties (`:root { --color-bg: …; --color-accent: …; --font-display: …; }`) für Theming — das erleichtert es, Farben/Schriften pro Version zentral zu ändern.

### 6a. V5 im Detail — was genau geändert wurde

V5 wurde 1:1 von V4 kopiert (`cp -r v4 v5`), danach wurden **ausschließlich Layout-Anpassungen** vorgenommen (keine neue Funktionalität, kein JS-Verhalten geändert — der einzige JS-Unterschied ist ein Kommentar im Datei-Header). Auslöser war sehr detailliertes Feedback von Max, dass die vorherige Version (V4) ihm an mehreren Stellen "zu breit gezogen" vorkam:

- **Hero:** Der Name "Max Aulinger" + Untertitel klebte am unteren Bildschirmrand. Fix: `align-items: center` + reduziertes `padding-bottom` im `.hero`, sodass der Text vertikal mittiger sitzt.
- **Über-mich-Sektion:** Foto sollte etwas größer werden, der Textblock daneben schmaler (mehr Zeilenumbrüche statt langer Zeilen). Fix: Grid-Spalten von breiterer Aufteilung auf `340px 1fr` geändert, neues `.about__text { max-width: 540px }`, `.about__photo-frame` auf `max-width: 340px` (mobil 280px).
- **Design-Sektion:** Bild sollte nicht so weit an den rechten Rand rutschen und etwas kleiner sein, Text links sollte mehr (aber kürzere) Zeilen haben statt drei lange. Fix: `.design__media` bekam `max-width: 420px; justify-self: start`, neues `.design__text { max-width: 380px }`.
- **Video/Drohnen-Sektion:** Videos waren so groß, dass die Überschrift beim Scrollen aus dem Bild verschwand. Fix: `.showreel` und `.video-grid` auf `max-width: 860px` begrenzt und zentriert.
- **Allgemein "nicht so breite" Website:** Neue zentrale Variable `--content-max-width: 1180px` eingeführt (vorher war der Wert 1400px hart in `.nav__inner` und `.section__inner` kodiert) — dadurch wirkt die gesamte Seite kompakter.
- **Z-Index-Fix** (siehe Abschnitt 5) wurde hier zuerst eingeführt (`--z-version-switch: 210`) und später auch rückwirkend in v3/v4 nachgezogen.

V5 ist also im Kern: **V4-Optik, aber überall etwas schmaler/kompakter und mit funktionierendem Versions-Schalter.**

### 6b. V6 im Detail — Scroll-Jack-Galerie, unterschiedliche Reveal-Effekte, Parallax

V6 wurde von V5 kopiert und ist die bislang komplexeste Version. Max' Anforderung war sinngemäß: "Ich will viel krassere Scrollverhaltensänderungen sehen, vor allem soll die Fotogalerie beim Scrollen horizontal durchlaufen statt normal untereinander zu stehen, und verschiedene Elemente sollen sich beim Scrollen unterschiedlich verhalten." Er hat dabei explizit erlaubt, sich viel Zeit zu nehmen ("mach es sehr ordentlich, auch wenn es 30 Minuten oder länger dauert").

**Kernstück: horizontale Scroll-Jack-Galerie**

Normales, vertikales Scrollen der Seite läuft bis zur Fotogalerie ganz normal weiter. Erreicht man die Galerie, "übernimmt" sie das Scrollen: weiteres Scrollen bewegt die Fotos horizontal von rechts nach links (in max. zwei Reihen), statt dass die Seite weiter nach unten scrollt. Ist die Galerie durchlaufen, geht es normal mit der Seite weiter nach unten.

Technisch umgesetzt über das klassische "Sticky-Pin + Spacer"-Muster:

```html
<section class="gallery-scroll" id="fotografie">
  <div class="section__inner"> … Filterleiste, klassisches Fallback-Grid (#photoGrid) … </div>
  <div class="gallery-scroll__spacer" id="gallerySpacer">     <!-- sehr hoch, gibt Scroll-"Raum" -->
    <div class="gallery-scroll__pin" id="galleryPin">          <!-- position: sticky; top:0; height:100vh -->
      <div class="gallery-scroll__track" id="galleryTrack">    <!-- wird per JS translateX bewegt -->
        <div class="gallery-scroll__row" id="galleryRow1"></div>
        <div class="gallery-scroll__row" id="galleryRow2"></div>
      </div>
      <span class="gallery-scroll__hint">weiterscrollen →</span>
    </div>
  </div>
</section>
```

JS-Logik (`v6/js/main.js`):
- `initGallery()` entscheidet **einmalig beim Laden**, ob der Scroll-Jack-Modus (`initGalleryScroll`) oder ein statisches Fallback-Grid (`initGalleryClassic`, = identisches Verhalten wie V5) verwendet wird. Fallback greift bei `prefers-reduced-motion: reduce` ODER bei Bildschirmbreite < 768px (Mobile). Diese Entscheidung wird bewusst NICHT bei Resize neu getroffen, um Moduswechsel-Komplexität zu vermeiden.
- `renderGalleryRows()` verteilt die sichtbaren (gefilterten) Fotos abwechselnd auf zwei Zeilen. Wichtig: `data-index` an jedem Foto-Element referenziert immer den Index im **vollständigen** `PHOTOS`-Array (`currentPhotos.indexOf(photo)`), nicht den Index innerhalb der gefilterten Teilmenge — dadurch funktionieren die (unveränderten) Lightbox-Funktionen (`openLightbox`, `getVisiblePhotos`, `stepLightbox`) korrekt weiter, egal welcher Filter aktiv ist.
- `updateGalleryScrollMetrics()` berechnet `scrollDistance = trackWidth - viewportWidth` und setzt die Spacer-Höhe auf `viewportHeight + scrollDistance`. Ist der Track schmaler als der Viewport (z.B. sehr wenige gefilterte Fotos), wird auf einen statischen Pin (`.is-static`) umgeschaltet — kein Scroll-Jacking nötig.
- `onGalleryScroll()` ist ein per `requestAnimationFrame` gedrosselter Scroll-Handler, der den Fortschritt innerhalb des Spacer-Bereichs (`-spacerRect.top / scrollableHeight`, geklammert auf 0–1) in `track.style.transform = translateX(...)` übersetzt.
- Bei Filterwechsel (`applyFilterScroll()`) werden Zeilen und Metriken neu berechnet.

**Bereits behobener Laufzeit-Bug (sehr wichtig für die Weiterarbeit!):**
Nach dem ersten Test durch Max stellte sich heraus, dass die Galerie zwar horizontal durchlief, aber die Seite gleichzeitig ganz normal weiter nach unten scrollte — die Galerie "blieb nicht stehen". Ursache: Die umschließende Sektion `.gallery-scroll` hatte selbst `overflow: hidden`. Das ist ein klassischer CSS-Fallstrick: Ein Vorfahre mit `overflow` ungleich `visible` wird selbst zu einem "Scroll-Container", wodurch `position: sticky` auf dem Kind-Element (`.gallery-scroll__pin`) nur relativ zu diesem (nicht scrollenden) Vorfahren "klebt" — de facto passierte dadurch gar kein Sticky-Effekt. **Fix:** `overflow: hidden` wurde aus `.gallery-scroll` entfernt (mit erklärendem Kommentar im CSS). Das reicht, weil `.gallery-scroll__pin` selbst bereits sein eigenes `overflow: hidden` hat, das den breiten Foto-Track sauber abschneidet.

**Merke für zukünftige Arbeit an Scroll-Jacking-Effekten:** Wenn ein `position: sticky`-Element nicht klebt, IMMER zuerst alle Vorfahren-Elemente auf `overflow` (hidden/auto/scroll) prüfen — das ist die häufigste Ursache.

**Weitere Anpassungen nach erstem Feedback:**
- Bildgröße in der Galerie wurde zunächst um Faktor 1,5 vergrößert (von 220/260px auf 330/390px Zeilenhöhe, je nach Fensterbreite), weil zu viel schwarze Leerfläche über/unter der Galerie sichtbar war, bei weiterhin genau zwei Zeilen.
- Danach auf Wunsch minimal wieder verkleinert (auf 305/360px) UND ein kleiner durchgehender schwarzer Rand links/rechts zum Bildschirmrand eingeführt (`.gallery-scroll__pin { padding: 0 1.5vw }`), damit die Bilder nicht bis an die Bildschirmkante "bluten". Die JS-Berechnung der Scroll-Distanz wurde entsprechend angepasst (`viewportWidth = window.innerWidth * (1 - edgeInsetRatio * 2)`), damit der Durchlauf weiterhin exakt am letzten Bild endet.
- Es gibt eine Sicherheitsklammer: Die Zeilenhöhe wird zusätzlich auf max. 86% der Fensterhöhe (minus Zeilenabstand) gedeckelt, damit auf niedrigeren Fenstern/Bildschirmen nichts oben/unten abgeschnitten wird (der Pin ist exakt `100vh` hoch).

**Weitere V6-Effekte (unterschiedliches Verhalten einzelner Elemente beim Scrollen):**
Statt dass alle Elemente beim Einblenden denselben Fade-up-Effekt haben, gibt es jetzt CSS-Modifier-Klassen, die auf die bestehende `.reveal`-Basisklasse aufsetzen (rein additiv, keine neue JS-Logik nötig, da der bestehende `IntersectionObserver` in `initScrollReveal()`/`observeRevealElements()` unverändert weiterläuft und einfach `.is-visible` hinzufügt):
- `.reveal--left` → kommt von links (translateX -70px)
- `.reveal--right` → kommt von rechts (translateX +70px)
- `.reveal--scale` → skaliert von 0.9 auf 1
- `.reveal--rotate` → Kombination aus Translate + leichter Rotation + Skalierung

Verteilt auf: Galerie-Header (`reveal--left`), Über-mich-Bild (`reveal--left`), Design-Bild (`reveal--rotate`), Showreel (`reveal--scale`), erste Video-Karte (`reveal--left`), zweite Video-Karte (`reveal--right`).

**Hero-Parallax:** `initHeroParallax()` verschiebt `.hero__media` beim Scrollen dezent per `translateY` (Faktor 0.15, rAF-gedrosselt), nur solange der Hero-Bereich im Blickfeld ist, und wird bei `prefers-reduced-motion` komplett übersprungen. CSS-seitig hat `.hero__media` dafür einen Puffer (`top: -10%; height: 120%`), damit beim Verschieben keine leeren Ränder sichtbar werden.

---

## 7. Wichtige Vorgeschichte / bereits gelöste Probleme (damit nichts doppelt gemacht wird)

1. **V4 wurde ursprünglich als "zu dunkel" kritisiert** (Hero-Video, Fotos, Über-mich- und Design-Bilder hatten zu aggressive `brightness`/`grayscale`-Filter, und ein Overlay-Gradient war zu deckend). Wurde aufgehellt — die aktuellen Filterwerte (`grayscale(0.35) contrast(1.03) brightness(1.05)` etc.) sind das Ergebnis dieser Korrektur und sollten als "richtig kalibriert" behandelt werden, nicht versehentlich wieder verdunkeln.
2. **Ein Scroll-Zoom-Effekt in V4 wurde komplett entfernt**, weil Max ihn nicht mochte. Falls in Zukunft wieder über Zoom-Effekte beim Scrollen gesprochen wird: Vorsicht, das war schon einmal unerwünscht — lieber konkret nachfragen, was genau diesmal gemeint ist.
3. **Der unsichtbare Versions-Schalter in V3/V4** (Z-Index-Bug) — siehe Abschnitt 5. Max wusste dadurch nicht einmal, dass ältere Versionen noch existierten. Das hat außerdem zur wichtigen Grundregel geführt: **alte Versionen (v1–v4) werden nicht mehr überschrieben, neue Ideen werden immer als neue vX-Ordner angelegt.**
4. **Der Sticky-Scroll-Bug in V6** — siehe Abschnitt 6b. Dies war ein reiner Laufzeit-Bug, der bei der statischen Code-Validierung (keine Browser-Vorschau verfügbar, siehe Abschnitt 8) nicht auffiel und erst durch Max' tatsächlichen Test im Browser entdeckt wurde. Guter Reminder: Bei allen scroll-basierten/CSS-Positionierungs-Effekten ist reale Browser-Verifikation durch den Nutzer unverzichtbar, da die Sandbox keine visuelle Vorschau erlaubt.

---

## 8. Technische Rahmenbedingungen der Arbeitsumgebung

Wichtig für die nachfolgende KI: In der verwendeten Sandbox-Umgebung gibt es **keinen Headless-Browser** (kein Chromium/Playwright verfügbar, Installation über npm ist durch Netzwerk-Policy blockiert). Das bedeutet: Visuelle/Interaktions-Bugs (wie der Sticky-Bug in Abschnitt 6b) können nicht automatisch erkannt werden, sondern nur durch:
- **Statische Validierung:** `node -c datei.js` (JS-Syntaxcheck), Python `html.parser` für HTML-Tag-Balance und doppelte IDs, Klammern-Zählung für CSS-Balance (`content.count('{') == content.count('}')`), Grep/`realpath` für Asset-Pfad- und Referenz-Checks (z.B. ob alle `getElementById`-Aufrufe im JS auch tatsächlich existierende IDs im HTML treffen, ob alle in `photos-data.js` referenzierten Bilddateien tatsächlich existieren).
- **Tatsächliches Feedback von Max**, der die Seite in seinem eigenen Browser öffnet und beschreibt, was er sieht.

Diese Einschränkung bitte beibehalten/kommunizieren, falls die nachfolgende KI versucht, einen Browser zu starten — das wird vermutlich weiterhin nicht funktionieren, und Zeit sollte stattdessen in möglichst gründliche statische Prüfung und klare Nachfragen an Max investiert werden.

---

## 9. Offene Punkte / mögliche nächste Schritte

Diese Punkte wurden entweder explizit als "später" markiert, oder sind naheliegende Verbesserungen, die noch nicht mit Max besprochen wurden:

- **Root-`index.html` leitet auf V1 weiter**, nicht auf die aktuell "beste"/neueste Version (V6). Sollte vermutlich irgendwann angepasst werden — aber erst nach Rücksprache mit Max, da das Multi-Versions-Vergleichskonzept bewusst gewollt ist und er möglicherweise absichtlich mit V1 als neutralem Ausgangspunkt starten will.
- **Root-Level `css/style.css` und `js/main.js` sind ungenutzte Altlasten** (siehe Abschnitt 3) — könnten aufgeräumt werden, aber unklar ob Max das möchte oder ob sie referenziert für eine geplante zukünftige Nutzung liegen bleiben sollen.
- Es gibt noch **keine finale Entscheidung**, welche Version (oder Mischung aus mehreren) am Ende tatsächlich live gehen soll. Das komplette V1–V6-Nebeneinander ist explizit ein Vergleichs-/Auswahlprozess, kein Zwischenstand einer linearen Entwicklung.
- Es könnte sinnvoll sein, Max irgendwann zu fragen, ob er eine **eigene, schlichte Übersichtsseite** möchte, die alle sechs Versionen mit kurzer Beschreibung nebeneinander auflistet (statt nur des kleinen Schalters oben links) — das wurde aber nie angefragt, nur eine Idee.
- Sollte Max weitere Versionen wünschen (`v7`, `v8`, …): unbedingt daran denken, den Versions-Schalter in **allen** bestehenden `vX/index.html`-Dateien zu synchronisieren (siehe Abschnitt 5), nicht nur in der neuen Version.
- Bei jeder neuen JS-Funktionalität in einer neuen Version: das etablierte Validierungs-Schema aus Abschnitt 8 konsequent anwenden, bevor das Ergebnis an Max geht — das hat sich bewährt, ersetzt aber echtes Browser-Testen nicht (siehe Sticky-Bug-Lehre in Abschnitt 7).

---

## 10. Zusammenfassung in einem Satz

Dies ist eine rein deutschsprachige, sechsfach parallel existierende Portfolio-Website für Max Aulinger (Medientechnik-Student, Bewerbung um ein Praxissemester), bei der jede Version (`v1`–`v6`) über einen synchronisierten Versions-Schalter erreichbar ist, gemeinsame Bild-/Video-/Fotodaten aus dem Projekt-Root nutzt, und bei der die neueste Version V6 sich durch eine technisch anspruchsvolle horizontale "Scroll-Jack"-Fotogalerie mit Sticky-Pin-Mechanik sowie unterschiedliche Scroll-Reveal-Animationen pro Element auszeichnet — mit dem Ziel, Max' Fotografie-, Video- und Design-Arbeiten möglichst modern und individuell zu präsentieren.
