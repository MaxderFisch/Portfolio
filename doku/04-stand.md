# Stand — 13.09.2026

Diese Datei ist das Erste, was man liest, wenn man weiterarbeitet.
**Ergänzen, nicht überschreiben.** Neuer Eintrag oben, alter Stand bleibt darunter stehen.

---

## Stand vom 13.09.2026 — nachts (Imagefilm drin, vier Videos auf Halde)

**Kapitel 09 hat jetzt vier Filme.** Dazu liegen vier weitere Videos komprimiert bereit, die
Max **absichtlich noch nicht** auf der Seite haben will.

### Eingebaut

| Karte | Film | auf der Seite | Max' Rolle |
|---|---|---|---|
| 02.01 | Ein Tag als Bergmann (5:48) | 37,2 MB | Ton |
| 02.02 | Kommt zu mir (5:17) | 23,0 MB | Produktion |
| **02.03** | **Electrify Your Future (3:01)** | **24,6 MB** | **Szenenbild** |
| 02.04 | Drohne | — „folgt" | — |
| 02.05 | Hostage Holiday (2:18) | 14,6 MB | Regie und Schnitt, zu viert |

Max sagte, **Imagefilm und Werbespot Elektrotechnik sind dasselbe** — die beiden getrennten
Karten 02.03 und 02.04 wurden deshalb zu einer zusammengelegt, der Rest ist nachgerückt.
Die Datei war **schon web-fertig** und wurde unverändert übernommen statt neu gerechnet.

Im Kapitel ist nur noch **ein** Platzhalter übrig: „Drohne · FPV".

### Komprimiert, aber bewusst nicht eingebunden

Liegen in `assets/video/`, werden von keiner Seite referenziert:

| Datei | Original | fertig |
|---|---|---|
| `film-animals.mp4` | 1874 MB | 34,0 MB |
| `film-imker.mp4` | 846 MB | 14,4 MB |
| `fpv-autos.mp4` | 2801 MB | 44,6 MB |
| `fpv-timeline-1.mp4` | 449 MB | 6,1 MB |

Die beiden FPV-Clips sind **wirklich stumm** (−91 dB), deshalb ohne Tonspur. Animals und
Imker behalten ihren Ton. **Nicht einbauen ohne Rücksprache mit Max** — er weiß noch nicht,
wie er sie zeigen will, und bei FPV kommen noch mehrere Aufnahmen dazu.

Geprüft: CSS 403/403, div 298/298, video 5/5, a 23/23, 60 picture-Paare stimmig, keine
doppelten IDs und keine doppelten Kartennummern, alle Anker lösen auf, alle 115 Asset-Verweise
vorhanden. Bei 1400 px stehen die vier Filme im Zickzack, am Handy stapeln sie auf 295 px,
kein Querscrollen. Hintergrundzeilen: 13 px Luft — der Block ist auf 2122 px gewachsen, liegt
damit aber weiter im Rahmen der übrigen Kapitel (10–16 px).

**Größe im Blick behalten:** `assets/video` liegt jetzt bei rund 240 MB. Wenn Max viele
weitere FPV-Clips liefert (je ~40 MB), sollte man über Ausschnitte oder einen Zusammenschnitt
reden, statt jeden Clip ganz abzulegen.

---

## Stand vom 13.09.2026 — spätabends (dritter Film)

Max lieferte „Hostage Holiday" nach, sein erstes Filmprojekt aus dem ersten Semester.
Kapitel 09 hat jetzt **drei** Filme.

| Film | Original | auf der Seite | Max' Rolle |
|---|---|---|---|
| Ein Tag als Bergmann (5:48) | 337 MB | 37,2 MB | Ton |
| Kommt zu mir (5:17) | 222 MB | 23,0 MB | Produktion |
| **Hostage Holiday (2:18)** | **364 MB** | **14,6 MB** | **Regie und Schnitt, zu viert** |

Hostage Holiday lief mit **CRF 24** statt 28, weil er kurz genug ist, dass Qualität kaum
etwas kostet; Musik mit 128 kbit/s statt 96.

**Beinahe-Fehler, der festgehalten gehört:** Max nannte den Film „Stummfilm", gemeint war
*ohne Dialog*. Die Datei hat eine Musikspur mit 320 kbit/s bei −19,4 dB. Mit dem
`-an`-Befehl wäre die Musik weg gewesen. Steht jetzt in `05-fallen.md`.

Auf der Seite: neue Karte **02.06** (angehängt, damit 02.01–02.05 ihre Nummern behalten),
dritter Filmplatz `.tr__f3`, Vorschaubild bewusst **nicht** aus dem Party-Ende — das ist die
Pointe. Einleitungstext auf drei Filme und drei Rollen umgeschrieben.

Geprüft: CSS 402/402, div 302/302, video 4/4, a 24/24, 59 picture-Paare alle stimmig, keine
doppelten IDs, alle Anker lösen auf, alle 111 Asset-Verweise vorhanden, beide Skripte in
Ordnung. Bei 1400 px stehen die drei Filme im Zickzack (687×408/419/419), am Handy stapeln
sie auf 295 px, kein Querscrollen. Hintergrundzeilen: 14 px Luft über den ganzen Scrollweg.

**Noch offen:** Imagefilm (ARRI), Werbespot Elektrotechnik, Drohne — Karten 02.03–02.05
stehen weiter auf „folgt", zwei Platzhalterkacheln im Kapitel. Für den Werbespot gibt es
weiterhin keine eigene Kachel.

---

## Stand vom 13.09.2026 — abends (zwei Filme eingebaut)

**Kapitel 09 „Video & Drohne" ist nicht mehr leer.** Max lieferte `Neu/Videos/` mit zwei
fertigen Filmen; beide sind eingebaut, komprimiert und geprüft.

| | Original | auf der Seite | Karte |
|---|---|---|---|
| Ein Tag als Bergmann (5:48) | 337 MB | `film-bergmann.mp4` — **37,2 MB** | 02.01, Vorschaubild gesetzt |
| Kommt zu mir (5:17) | 222 MB | `film-kommt-zu-mir.mp4` — **23,0 MB** | 02.02, Vorschaubild gesetzt |

Beide 1280×720, CRF 28, Ton als AAC 96 kbit/s, `faststart`, `preload="none"` mit Poster.
Kein Google Drive nötig — GitHub blockt erst bei 100 MB pro Datei.

**Max' Rollen stehen im Abspann und so auch auf der Seite:** Bergmann = **Ton**,
Kommt zu mir = **Produktion**. Beides sind Teamproduktionen. Details und das ganze Team in
`02-vorgeschichte.md`, Abschnitt 9. Nicht zu Alleinleistungen umschreiben.

Geprüft: CSS 401/401, div 295/295, video 3/3, picture 58/58 und alle auf dasselbe Bild
zeigend, keine doppelten IDs, alle Anker lösen auf, alle 107 Asset-Verweise vorhanden,
beide Skripte syntaktisch in Ordnung. Bei 1400 px sitzen die Filme mit 687×387 versetzt,
am Handy (375 px) stapeln sie auf volle Breite, kein Querscrollen. Hintergrundzeilen:
15 px Luft über den ganzen Scrollweg.

**Noch offen in diesem Kapitel:** Imagefilm (ARRI), Werbespot Elektrotechnik und Drohne.
Die Karten 02.03–02.05 stehen weiter auf „folgt", zwei Platzhalterkacheln (`tr__c`,
`tr__d`) sind im Kapitel geblieben. Für den Werbespot gibt es keine eigene Kachel.

**Größen jetzt:** `assets/img` 38 MB, `assets/video` 113 MB. Größte Dateien:
`film-bergmann.mp4` 37,2 MB, `showreel.mp4` 36,7 MB (wird von keiner Seite benutzt),
`film-kommt-zu-mir.mp4` 23,0 MB. Beim reinen Seitenaufruf laden 3,8 MB, die Filme erst
auf Klick.

**Zwei Dinge nebenbei repariert:**
- Der iCloud-Rückholbefehl in `CLAUDE.md` und `05-fallen.md` war **kaputt** und meldete
  Erfolg, obwohl er nichts geholt hat. Korrigiert, mit Erklärung in `05-fallen.md`.
- Der Untertitel der Karte 02.02 („Ein Pfarrer, ein Tag, eine Kamera") war erfunden und
  sachlich falsch. Ersetzt.

**Erledigt im selben Zug:** Der ffmpeg-Befehl in `CLAUDE.md` warf mit `-an` pauschal den Ton
weg. Dort stehen jetzt **zwei** Befehle — einer für Filme mit Sprache (AAC 96k bleibt drin),
einer für stumme Schleifen wie die Therme-Animation. Dazu die Regel, CRF an einer Probe zu
kalibrieren statt zu raten, und die GitHub-Grenzen (100 MB blockt, 50 MB warnt).

**Gepusht am 13.09. abends:** `4c29f7d` und `5b3b83d`. Live geprüft — die neue Fassung steht,
alle zehn neuen Dateien werden von GitHub ausgeliefert, die Originale in `Neu/` bleiben mit
404 privat.

**Offen geblieben:** Wie `56956b8` (die Übergabe-Doku) auf GitHub gelandet ist, ist ungeklärt.
Ich habe den Commit nur lokal angelegt und keinen Push ausgeführt; im Reflog steht trotzdem
„update by push". Max gefragt, Antwort steht noch aus.

---

## Stand vom 13.09.2026

### Woran zuletzt gearbeitet wurde

1. **12.09. abends** — `Portfolio/live/index.html` fertiggestellt: eine einzige durchgehende
   Seite mit Auftakt, drei Bereichsreihen und zehn Projektkapiteln. Danach eine Runde
   Handy-Anpassungen (iPhone/Chrome). Beides steckt im Commit `2694697`.
2. **13.09.** — keine Änderung an der Website. Es wurde ausschließlich diese Dokumentation
   geschrieben (`CLAUDE.md`, `doku/`, `werkzeug/serve.js`), damit eine neue Sitzung ohne
   den alten Chatverlauf weiterarbeiten kann.

### Was fertig ist

| Teil | Zustand |
|---|---|
| `Portfolio/live/index.html` | **fertig und veröffentlicht.** 1494 Zeilen, 100 KB, 293 `<div>`-Paare, CSS 399/399 Klammern, keine doppelten IDs, alle Anker lösen auf, alle 99 Asset-Verweise vorhanden, beide Skriptblöcke syntaktisch in Ordnung. |
| Neun der zehn Kapitel | Bilder, Texte und Farbwelten stehen. |
| Bild- und Videokompression | durchgezogen; `assets/img` 38 MB, `assets/video` 52 MB auf der Platte, beim Seitenaufruf werden rund 3,5 MB WebP geladen. |
| GitHub Pages | läuft: https://maxderfisch.github.io/Portfolio/Portfolio/live/index.html — Seite, Bilder und Video wurden mit 200 geprüft. |
| Originale bleiben privat | `Neu/` steht in `.gitignore`, Stichprobe auf GitHub gibt 404. Das ist so gewollt. |
| Handy | `svh` statt `vh`, Seitwärtsdrift unter 700 px aus und durch `scroll-snap` ersetzt, 23 Media-Queries. |

### Was halbfertig ist — und in welchem Zustand genau

**Kapitel 09 „Video & Drohne" (`#p-video`) ist nur ein Platzhalter.**
Es gibt bereits: Farbwelt (`chapter--film`, `#121212`), Hintergrundtypografie, einen Einleitungstext
und **vier leere Kacheln** mit der Klasse `warten` und den Beschriftungen
*Doku · Unter Tage*, *Personenporträt*, *Imagefilm · ARRI*, *Drohne · FPV*.
Im Text steht wörtlich „Das Material dafür liefert Max noch nach."
Angekündigt sind: Doku aus dem Graphitbergwerk Kropfmühl, Personenporträt über einen Pfarrer,
Imagefilm mit der ARRI Alexa Mini, Werbespot für den Studiengang, Drohnenaufnahmen.
→ Sobald Material kommt: komprimieren wie in `CLAUDE.md` beschrieben, die vier `warten`-Kacheln
durch echte Inhalte ersetzen und die Vorschaukarte oben im Bereich „Video & Drohne" anpassen.

**In `assets/video/` liegt schon Material, das auf der Seite nicht vorkommt:**
`showreel.mp4` (37 MB), `drone-clip-1.mp4` (1,9 MB), `zeitraffer.mp4` (2,5 MB) — jeweils mit Poster.
Eingebunden ist nur `therme-fische.mp4`. Die drei stammen aus den alten Designversionen v1–v6.
*Offene Frage an Max: sollen die ins Video-Kapitel, oder sind sie veraltet?*
`showreel.mp4` ist mit 37 MB in jedem Fall zu groß und müsste vorher neu kodiert werden.

**Und in `Material/` (außerhalb des Repos) liegen sechs weitere Videos**, die gut zum
Video-Kapitel passen könnten: `Drohne_Winter_01.mp4`, `Drone.mp4`, `Timeline 1.mp4`,
`Nexus_Papierflieger.mov`, `0001-0375.mp4`, `0001-0500.mp4`.
Vorsicht bei der Beurteilung: Der ganze Ordner ist **iCloud-ausgelagert**, `du -sh` meldet
deshalb 12 KB für 14 Dateien. Das heißt *nicht*, dass er leer ist — vor dem Anschauen
zurückholen (siehe `05-fallen.md`).
*Offene Frage an Max: ist das brauchbares Material oder Reste?*

### Was nicht stimmt, aber nichts kaputt macht

- **`Portfolio/index.html` leitet auf `v1/index.html` weiter** (Stand 24.07.2026). Wer die
  Repo-Wurzel öffnet, landet also auf einer alten Designversion und nicht auf der aktuellen
  Seite. Der Live-Link funktioniert nur, weil er den vollen Pfad enthält.
  → Naheliegend wäre, die Weiterleitung auf `live/index.html` zu ändern. **Vorher fragen** —
  Max hat bisher nie gesagt, dass v1 weg soll, und er will alte Versionen ausdrücklich behalten.
- **Rund 45 von 177 CSS-Klassen in `live/index.html` werden nirgends benutzt.** Es sind die
  Reste der übernommenen Blöcke aus `struktur-prototyp.html`: altes Kopfmenü (`top__logo`,
  `top__nav`, `top__fs`), Startbereich (`hub`, `areas`, `area__*`), Galerie (`grid`, `kit`,
  `tags`), Über-mich (`about*`), alte Lightbox (`lb*`) und Fußzeile (`foot`).
  Schadet nichts, kostet ein paar Kilobyte. Aufräumen nur, wenn ohnehin dort gearbeitet wird —
  und dann sehr vorsichtig, weil einige Klassen erst per JavaScript gesetzt werden
  (`streak` wird zum Beispiel in `document.createElement` vergeben und sieht in einer
  naiven Suche „ungenutzt" aus).
- **Der Vollbild-Knopf erscheint am iPhone nicht.** Das ist kein Fehler, sondern Absicht:
  iOS kennt kein Vollbild fürs ganze Dokument, der Knopf blendet sich deshalb aus. Siehe
  `05-fallen.md`.

### Was außerhalb von Git liegt

Die Git-Wurzel ist `Cloud_Portfolio/`. Damit liegen **nicht** im Repo:
`CLAUDE.md`, `INVENTORY.md`, `werkzeug/serve.js`, `Website/`, `Material/`.
Das heißt: Diese Dateien sind nicht gesichert und bei einem frischen `git clone` nicht dabei.
`CLAUDE.md` muss aber im Arbeitsordner liegen, damit es automatisch geladen wird — deshalb
bleibt es vorerst dort. *Offene Frage an Max: soll `CLAUDE.md` zusätzlich ins Repo kopiert werden?*

### Was als Nächstes ansteht

1. **Diese Dokumentation committen** (passiert direkt im Anschluss).
2. **Video-Material von Max abwarten** und Kapitel 09 füllen — der einzige inhaltliche Rest.
3. **Weiterleitung in `Portfolio/index.html`** klären — siehe „Was nicht stimmt, aber nichts
   kaputt macht". Nur nach Rückfrage.
4. Nichts davon ist dringend. Die Seite ist vorzeigbar und Max verschickt den Link bereits.

### Offene Fragen an Max

Gesammelt beim Durchlesen mit fremden Augen. **Nicht raten — nachfragen.**

1. Sollen die vorhandenen Videos (`showreel`, `drone-clip-1`, `zeitraffer` in `assets/video/`
   und die sechs in `Material/`) ins Video-Kapitel, oder sind sie veraltet?
2. Soll `Portfolio/index.html` künftig auf `live/index.html` weiterleiten statt auf `v1`?
3. Soll `CLAUDE.md` zusätzlich ins Repo, damit es bei einem `git clone` dabei ist?
4. **Warum ist die Git-Wurzel `Cloud_Portfolio/` und nicht `Portfolio/`?** Grund unbekannt.
   Folge ist der doppelte Pfad in der Adresse: `…/Portfolio/Portfolio/live/index.html`.
   Falls das stört, ließe es sich ändern — aber alle bestehenden Links würden brechen.

### Wo der Code gerade steht

```
Repo    Cloud_Portfolio/  (5 Commits)
HEAD    2694697  Startseite mit allen Projekten auf einer Seite
        78d8ad4  Porträts, Sonnenaufgänge und Tiere als eigene Kapitel
        2ff6f4d  Bilder komprimiert, WebP via picture-Element
        818b2e9  Projektseite Seoul: Tages-Kapitel, Hintergrundtypo, Lichtspuren
        38d5bd3  Initial commit
origin/main  identisch mit HEAD
```

---

<!-- Neue Einträge oberhalb dieser Linie anfügen. Alte Stände stehen lassen. -->
