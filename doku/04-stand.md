# Stand — 13.09.2026

Diese Datei ist das Erste, was man liest, wenn man weiterarbeitet.
**Ergänzen, nicht überschreiben.** Neuer Eintrag oben, alter Stand bleibt darunter stehen.

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
3. **Weiterleitung in `Portfolio/index.html`** klären (siehe oben, nur nach Rückfrage).
4. Nichts davon ist dringend. Die Seite ist vorzeigbar und Max verschickt den Link bereits.

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
