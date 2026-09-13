# Überblick — was liegt wo

Stand: 13.09.2026

---

## Wer und wozu

**Max Aulinger**, Medientechnik-Student an der TH Deggendorf.
Die Website soll sein Portfolio sein, Hauptzweck: Bewerbung um ein **verpflichtendes
Praxissemester (24 Wochen)**. Kontakt-Mail im Markup: `maxau.aulo@gmail.com`.

Drei Bereiche, die er zeigen will:
1. **Foto** — Menschen, Landschaft, Reise, Tiere
2. **Video & Drohne** — Doku, Imagefilm, Werbespot, FPV
3. **Design & 3D** — Produktentwurf, Plakat, Print, Animation

---

## Die drei Ebenen im Ordner

```
/Users/maxaulinger/Desktop/Portfolio/        ← Arbeitsordner, NICHT in Git
├── CLAUDE.md                                ← Regeln, wird automatisch geladen
├── INVENTORY.md                             ← erste Bestandsaufnahme vom 10.09., historisch
├── werkzeug/serve.js                        ← lokaler Vorschau-Server
├── Website/                                 ← ERSTER Anlauf von 2026-06/07, tot
├── Material/                                ← Rohmaterial (Videos, RAW), unbenutzt
└── Cloud_Portfolio/                         ← ===== GIT-REPO-WURZEL =====
    ├── .gitignore                           ← schließt Neu/ aus
    ├── .nojekyll
    ├── doku/                                ← diese Dokumentation
    ├── Neu/                                 ← Originalbilder, LOKAL, nicht veröffentlicht
    │   ├── Bilder/       (Seoul + Portraits + Sun + Tiere)
    │   └── Projekte/     (iBee, Plakate, Therme — inkl. PDF, PPTX, Rohvideo)
    └── Portfolio/                           ← was veröffentlicht wird
        ├── live/index.html                  ← ★ DIE AKTUELLE SEITE
        ├── assets/img/…                     ← komprimierte Bilder
        ├── assets/video/…                   ← komprimierte Videos
        ├── archiv/                          ← datierte Sicherungen
        ├── struktur-prototyp.html           ← Vorgänger, Quelle der Kapitel
        ├── startseite-a/-b/-c.html          ← Entwürfe der Startseite
        ├── v1…v6/                           ← alte Designversionen, eingefroren
        ├── scroll-showcase*.html            ← Effekt-Experimente
        ├── effekt-demos.html
        ├── index.html                       ← Weiterleitung auf v1, veraltet
        ├── css/ js/                         ← Altlast, von nichts eingebunden
        └── PROJEKT-UEBERGABE.md             ← altes Übergabedokument, teils überholt
```

---

## Die aktuelle Seite

**`Cloud_Portfolio/Portfolio/live/index.html`** — eine einzige, lange Seite mit allem.

Live: https://maxderfisch.github.io/Portfolio/Portfolio/live/index.html
Lokal: http://localhost:8000/Cloud_Portfolio/Portfolio/live/index.html

Aufbau von oben nach unten:

1. **Auftakt** — bildschirmfüllend, „MAX AULINGER" halb gefüllt halb Outline über einem
   abgedunkelten Donau-Nebel-Foto. Vollbild-Knopf oben rechts.
2. **Drei Bereichsreihen** — pro Bereich ein senkrechter Name am Rand, daneben die
   Projektkarten als waagerechte Reihe. Karten sind Anker-Links nach unten.
3. **Zehn Projektkapitel** — untereinander, jedes mit eigener Farbwelt:

| Anker | Kapitel | Farbe |
|---|---|---|
| `#p-nacht` | Seoul bei Nacht | Schwarz |
| `#p-tag` | Seoul bei Tag | Warmbraun `#191411` |
| `#kap-portraits` | Menschen (Porträts) | Schiefer `#13181b` |
| `#kap-sonnenaufgang` | Sonnenaufgänge | Pflaume `#1e1620` |
| `#kap-tiere` | Tiere | Waldgrün `#101713` |
| `#p-ibee` | iBee | Graphit `#0b0c0e` |
| `#p-plakate` | Politische Plakate | Tinte `#141013` |
| `#p-flyer` | Flyer | Tinte |
| `#p-therme` | Therme Bad Füssing | Wasser `#08171c` |
| `#p-video` | Video & Drohne | Film `#121212` — **nur Platzhalter** |

Die Kapitel gehen per Farbverlauf ineinander über (je ~460 px), sodass beim Scrollen ein
weicher Wechsel entsteht statt einer Kante.

---

## Wiederkehrende Bausteine

Diese CSS-Klassen ziehen sich durch alle Kapitel:

- **`.chapter`** — ein Projektkapitel. Setzt über CSS-Variablen seine Farbwelt:
  `--ink` (Fließtext), `--ink-strong` (Überschrift), `--faint` (Rahmen, Konturen),
  `--rail` (Kleinkram). Dadurch passt sich alles darin automatisch an.
- **`.pb__bg` / `.bgl`** — die großen Outline-Wörter im Hintergrund. Jede Zeile hat ein
  eigenes `data-speed`, das sie beim Scrollen unterschiedlich schnell wandern lässt.
- **`.pb`** mit `--duo` / `--road` / `--bridge` / `--hero` / `--left` / `--pair` —
  die asymmetrischen Bildblöcke der Seoul-Kapitel.
- **`.sr` / `.tr`** — 12-Spalten-Raster für die übrigen Kapitel, mit benannten Plätzen
  (`sr__lead`, `sr__a`…`sr__f`, `tr__xl`, `tr__hoch`, `tr__a`…`tr__g`).
- **`.pt`** — das Porträt-Kapitel: stehende Textspalte links, Bilderstrom rechts.
- **`.proj`** — eine Projektkarte auf der Startseite.
- **`.welt`** — ein Bereich auf der Startseite (Farbe + Reihe + großes Wort).
- **`.pjlb`** — die Bild-Großansicht. Öffnet über `data-pjlb` (Pfad) und `data-pjcap` (Text),
  `data-pjrot="1"` dreht das Bild (nur die Brücke).

---

## Was tot ist, aber liegen bleibt

- **`Website/`** — der erste Anlauf (Juni/Juli 2026). Zwei Designversionen plus eine
  Poké-Invaders-Case-Study. Wird nicht weiterentwickelt.
- **`Portfolio/v1`–`v6`** — sechs parallele Designversionen aus Juli 2026, eingefroren.
  Max wollte damals ausdrücklich, dass alte Versionen nie überschrieben werden.
- **`Portfolio/css/`, `Portfolio/js/main.js`** — Altlast, von keiner Seite eingebunden.
  `js/photos-data.js` wird noch von `struktur-prototyp.html` und v1–v6 genutzt.
- **`Portfolio/index.html`** — leitet auf `v1/index.html` weiter. Veraltet; wer die
  Repo-Wurzel aufruft, landet nicht auf der neuen Seite. **Offener Punkt.**

---

## Externes

- **GitHub**: `MaxderFisch/Portfolio`, Branch `main`, Pages aus der Wurzel.
- **Schriften** werden von zwei CDNs geladen:
  Fontshare (Clash Display, General Sans) und Google Fonts (Instrument Serif).
  Ohne Internet fehlen nur die Schriften, das Layout hält.
- **Koreanische Zeichen** in den Seoul-Kapiteln laufen bewusst in der Systemschrift
  (Apple SD Gothic Neo), es wird nichts nachgeladen.
