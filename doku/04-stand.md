# Stand — 13.09.2026

Diese Datei ist das Erste, was man liest, wenn man weiterarbeitet.
**Ergänzen, nicht überschreiben.** Neuer Eintrag oben, alter Stand bleibt darunter stehen.

---

## Stand vom 14.09.2026 — iCapsule als eigene Produktseite

Nach Max' Korrektur umgebaut: Das Projekt steht im Portfolio wieder **als normales Projekt**,
mit einem großen Knopf zur Produktseite.

**Zwei Dateien:**
- `live/index.html` → Kapitel `#p-ibee`: fünf Renderings im gewohnten Raster, Projekttext,
  darunter der Knopf `.tor` → `icapsule.html`. Seite wieder **27264 px** (vorher 36950).
- `live/icapsule.html` → die Produktseite, 16 KB.

**Die Produktseite wurde kürzer und abwechslungsreicher.** Max' Kritik an der ersten Fassung
(„alles nur untereinander in Reihe, rechts und links viel leerer Raum") war berechtigt.
Jetzt: Auftakt, Bento mit zwei Kacheln nebeneinander, geteilter Abschnitt Bild/Text, geteilt
andersherum plus Zahlenstreifen, Bildband mit Text darauf, zwei Karten nebeneinander, Preis,
zweispaltiges Datenblatt. **6184 px statt 11279 px — 45 % kürzer.**

**Der Rückweg ist exakt.** Über `sessionStorage` wird beim Klick der Scrollstand gemerkt und
beim Zurückkommen genau dorthin gesprungen, nicht nur zum Anker. Gemessen: hin bei 17167,
zurück bei 17167, **Abweichung 0**. Der Merker wird danach gelöscht.

Geprüft: beide Dateien strukturell sauber, index 127 und icapsule 22 Asset-Verweise vollständig,
60 picture-Paare stimmig, keine doppelten IDs, alle Anker lösen auf, kein Querscrollen am
Rechner und am Handy, am Handy bricht alles auf eine Spalte um.

**Offene Frage bleibt:** Heißt das Projekt iBee oder iCapsule? Die Präsentation sagt iCapsule,
die Dateien heißen iBee. Karte und Kapitel stehen aktuell auf iCapsule.

---

## Stand vom 14.09.2026 — iCapsule als Produktwelt im Portfolio

Projekt 06 ist umgebaut: Das Apple-Konzeptprojekt wird jetzt **als Produktseite präsentiert**,
mitten im Portfolio, ohne die Seite zu verlassen.

**Ablauf beim Durchscrollen:** dunkles Kapitel führt hin → schwarzer Auftakt wächst per
Verlauf aus der Kapitelfarbe → die Produktwelt in voller Fensterbreite (Weiß/Schwarz/Grau im
Wechsel, Systemschrift, riesige Typo, ganzseitige Renderings, Datenblatt) → Verlauf zurück in
die Kapitelfarbe → ehrliche Einordnung im Portfolio-Stil.

**Alle Inhalte stammen aus Max' Präsentation**, nicht erfunden: 20 TB, M4 mit 16 Kernen,
7 Hochtöner, 6″ OLED, „Erinnerungen neu erleben.", 1.349 €. Das Produkt heißt **iCapsule** —
iBee ist nur der Dateiname. Die Karte 03.01 wurde entsprechend umbenannt.
*Offene Frage: Falls „iBee" doch der richtige Projektname ist, sagen — dann zurück.*

Die Renderings wurden neu aus der `.pptx` gezogen (`ppt/media/`), sie sind deutlich
hochauflösender als die vorher aus dem PDF geschnittenen. Sie liegen in
`assets/img/icapsule/` (12 Dateien, zusammen rund 660 KB als WebP).

**Bewusst nicht gebaut:** keine Apple-Logos, keine nachgebaute apple.com-Navigation, nichts,
was sich als Apple ausgibt. Begründung in `02-vorgeschichte.md`, Abschnitt 19.

Geprüft: CSS 459/459, div 363/363, 67 picture-Paare stimmig, keine doppelten IDs oder
Kartennummern, alle 141 Asset-Verweise vorhanden, Seitenhöhe 36950 ohne Sprung, Produktwelt
volle Fensterbreite, Farbkette intakt, Hintergrundzeilen 17 px Luft, kein Querscrollen am
Rechner und am Handy, Einblenden 22 von 22.

**Die Seite ist dadurch von 27805 auf 36950 px gewachsen.** Max mag kurze Seiten — falls es
ihm zu lang wird, lassen sich Tafeln zusammenlegen (Assistent und Bildschirm zum Beispiel).

**Vorher gesichert**, wie von Max gewünscht: `Backups/stand-2026-09-14-1434/` (323 MB, der
komplette veröffentlichte Stand plus Doku, außerhalb des Repos).

---

## Stand vom 14.09.2026 — Therme-Video entzerrt, Springen weg

**Max bestätigt: Das Autoplay funktioniert.** Offen war nur noch das Fisch-Video in Projekt 08.

**Ursache:** Das Video ist **anamorph** — gespeichert 1280 × 720, dargestellt aber 689:96
(rund 7,2:1), ein ultrabreites Band für die Beckenwand-Projektion. Im Markup standen die
gespeicherten Maße, also reservierte der Browser einen 16:9-Kasten und korrigierte ihn beim
Laden. Weil die Autoplay-Steuerung ständig auf- und abbaut, sprang die Seite dauernd.

**Behoben:** aus dem Original neu gerechnet mit `scale=2756:384,setsar=1` — quadratische
Pixel, exakt 689:96. Poster aus der korrigierten Fassung neu erzeugt.

| | vorher | jetzt |
|---|---|---|
| Datei | 1280 × 720 anamorph, 10,8 MB | 2756 × 384, 15,0 MB |
| Kasten beim Laden / Spielen / Abbauen | sprang | **1040 × 147 in allen Zuständen** |
| Vorschaubild | gestaucht | richtig |

Zur Sicherheit **alle** Maße gegen die Dateien geprüft: 57 Bilder, 10 Videos, keine Abweichung.
Kein weiteres Video ist anamorph.

Richtiggestellt: Der alte `mdls`-Eintrag in `05-fallen.md` war falsch — `mdls` meldete die
Darstellungsgröße, nicht Unsinn.

**Bewusst nicht geändert:** Am Handy ist das Band nur 43 px hoch. Max dazu: „ne das layout
passt dann schon."

---

## Stand vom 14.09.2026 — Autoplay stabil nach mehrmaligem Scrollen

Max: „anfangs hat es gut funktioniert, aber wenn ich dann öfter hoch und runter scrolle, hat
es dann wieder nicht mehr gestartet." Ein Fehler, der sich **anhäuft**.

**Ursache:** `load()` feuert sein `pause`-Ereignis **verzögert**. Meine Schutzmarke, die
eigenes Pausieren vom Nutzerklick unterscheidet, war nur synchron gesetzt — das verspätete
Ereignis galt deshalb als Nutzerklick, das Video wurde als „von Hand angehalten" markiert und
**startete nie wieder**. Bei jedem Hoch und Runter traf es ein weiteres Video.

**Behoben:**
1. Schutzmarke je Element als **Zähler, der erst nach 150 ms verfällt** — deckt verzögerte
   Ereignisse ab.
2. **Beim Abbauen werden alle Merker gelöscht**; danach ist das Element frisch.
3. Nach einem asynchronen Start wird **die Lage neu geprüft** statt einem vorher gesetzten
   Wunsch vertraut, der durch einen Abbau verschwunden sein kann.
4. Der **DOM entscheidet**, ob ein Video eine Quelle hat, nicht ein Flag.
5. Die Ausnahme „schon angesehene Videos behalten ihre Quelle" ist gefallen — jetzt hält
   **immer genau eines** eine Quelle.

**Geprüft durch Wiederholung**, weil ein einzelner Durchlauf solche Fehler nicht zeigt: echte
Wiedergabe nachgebildet (inklusive des verzögerten `pause` aus `load()`), acht Runden hoch
und runter, Prüfung an jedem der rund 500 Schritte.

| Prüfung | Ergebnis |
|---|---|
| jemals mehr als eine Quelle aktiv | **0 Mal** |
| jemals mehr als ein Video spielend | **0 Mal** |
| blockierte Videos am Ende | **keines** |
| echte Netzwerkanfragen über 5 Runden | 9, davon 7 sauber abgebrochen |

→ **Nach wie vor nur von Max prüfbar, ob die Bilder wirklich laufen.**
→ **Muss gepusht werden**, sonst sieht er auf der Live-Seite weiter den alten Stand.

---

## Stand vom 14.09.2026 — nur das mittige Video lädt

Max meldete, beim Durchscrollen laden die oberen Videos und **die unteren dann gar nicht mehr**.
Seine Vermutung war richtig: **`pause()` bricht den Download nicht ab.** Acht Videos luden
weiter im Hintergrund, belegten die sechs Verbindungen pro Server und machten die Leitung dicht.

**Behoben:**
1. Verliert ein Video die Mitte, wird sein `<source>` entfernt und `load()` gerufen — das
   bricht den Download wirklich ab. Kommt es zurück in die Mitte, wird die Quelle neu gesetzt.
   Ausnahme: schon angespielte Videos (`currentTime > 0`) behalten ihre Quelle, solange sie
   sichtbar sind — sonst springen sie beim Zusehen auf Anfang.
2. **160 ms Wartezeit**, bevor überhaupt geladen wird. Wer nur vorbeiscrollt, löst nichts aus.

**Am Netzwerkprotokoll nachgewiesen** (der einzige verlässliche Beweis — `play()`-Aufrufe
sagen nichts darüber, was über die Leitung geht):

| Vorgang | Videoanfragen |
|---|---|
| 93 Scrollschritte über die ganze Seite | **0** |
| unten stehen bleiben | 1 |
| hoch zum ersten Film | 1, die vorige mit `ERR_ABORTED` beendet |

Am Handy identisch. Zu jedem Zeitpunkt hält **genau ein** Video eine Quelle.

Für Prüfungen stellt die Steuerung `window.videoZustand()` bereit (hatQuelle, abgebaut,
networkState, currentTime).

→ **Weiterhin nur von Max prüfbar: ob die Bilder wirklich laufen.** Der Browser-Bereich hier
setzt Wiedergabe aus. Und: **muss gepusht werden**, sonst ändert sich für ihn nichts.

---

## Stand vom 14.09.2026 — Autoplay repariert, Layout steht still

Max meldete, die Videos spielten nicht von selbst. **Drei Ursachen**, alle behoben:

1. **Der Code war nicht veröffentlicht.** Der Commit lag nur lokal; auf der Live-Seite gab es
   `videoWahl` gar nicht. → Bei „funktioniert nicht" zuerst prüfen, welchen Stand Max sieht.
2. **Die `<video>`-Elemente hatten keine Maße.** Der eigentliche Fehler, und er betrifft die
   ganze Seite: Sie war vor dem Laden **22225 px statt 27805 px** und sprang um 5580 px. Die
   Mittenerkennung maß in ein zusammengefallenes Layout und wählte immer dasselbe falsche
   Video. Behoben mit echten Maßen plus `height:auto`. **Dabei fielen 18 Bilder** in den
   Design-Kapiteln auf, die ebenfalls keine Maße hatten — eines war 19 px hoch. Auch behoben.
3. **`play()` ist asynchron.** Jeder Scrollpixel feuerte ein neues `play()`, dazwischen
   abgebrochen durch `pause()`. Jetzt wird jede Startanfrage verfolgt und ein Haltewunsch
   erst danach ausgeführt.

**Die Seite steht jetzt beim Laden still: Sprung 0.** Das ist unabhängig vom Autoplay eine
spürbare Verbesserung — vorher rutschte beim Öffnen alles nach unten.

Geprüft: 13 Scrollpositionen am Rechner und alle zehn Videos am Handy einzeln — jedes Mal das
mittigste gewählt, 9 `play()`-Aufrufe statt Dutzenden, kein Abbruch beim schnellen Wechsel,
eigenes Pausieren wird respektiert, kein Bild verzerrt, kein Querscrollen.

→ **Was nur Max sehen kann: ob die Bilder wirklich laufen.** Der Browser-Bereich hier setzt
Wiedergabe aus, auch bei `readyState=4` und ohne Fehler aus `play()`.
→ **Und: das muss gepusht werden, sonst ändert sich für ihn nichts.**

---

## Stand vom 13.09.2026 — Videos starten von allein

Alle zehn Videos starten jetzt beim Scrollen von selbst. Es läuft **immer nur eines**: das,
dessen Mitte der Bildschirmmitte am nächsten ist. Wird ein Video ganz unsichtbar, hält es an.

**Zwei unvermeidbare Folgen, beide mit Max besprochen:**
1. **Alle Videos sind jetzt `muted`.** Browser erlauben automatisches Abspielen nur stumm.
   Für die Filme mit Sprache und Musik ist das ein Verlust — `controls` bleiben, man kann
   von Hand Ton anschalten.
2. **`preload="none"` bleibt**, damit die Seite nicht beim Aufruf über 200 MB Video zieht.
   Der Preis ist eine kurze Verzögerung beim ersten Start.

Zusätzlich eingebaut, weil ohne das die Bedienung kaputt wäre: Wer selbst auf Pause drückt,
bekommt keinen Neustart aufgezwungen. Und bei `prefers-reduced-motion` bleibt alles aus.

**Wichtig für die Prüfung:** Im zugeklappten Browser-Bereich spielt **kein** Video, auch wenn
`readyState=4` ist und `play()` keinen Fehler wirft. Die Auswahl-Logik wurde deshalb über
protokollierte `play`/`pause`-Aufrufe geprüft — 7 Scrollpositionen, Umschalten zwischen
mehreren laufenden, Anhalten beim Verlassen des Bildes, Respekt vor eigenem Pausieren:
**alles korrekt**. Muster dafür in `05-fallen.md`.

→ **Was noch offen ist: ob die Bilder im echten Browser tatsächlich laufen.** Das kann nur
Max am Gerät sehen. Wenn etwas nicht startet, zuerst prüfen, ob `muted` noch an allen
Videos steht.

---

## Stand vom 13.09.2026 — Nachtrag (Kameradrohne und eigene Fotos)

Das Drohnenkapitel hat jetzt **zwei Hälften** und ist vollständig aus Max' eigenem Material.

**Oben FPV, selbst geflogen:** Papierflieger, Winter, Autos — dazu **zwei eigene Fotos**
(die Flotte auf dem Gartentisch, und Funke/Brille/Akkus), beide mit Großansicht.

**Unten die Kameradrohne:** `zeitraffer.mp4` (21 s) und `drone-clip-1.mp4` (16 s). Max hat
die offene Frage aus dem vorigen Stand beantwortet — beide sind mit einer **DJI Mini 4 Pro**
gefilmt, also keine FPV-Aufnahmen. **Nicht neu komprimiert**, weil sie mit 1440×1080 bei
1,0 Mbit/s schon Zielformat sind; nur die fehlenden WebP-Poster ergänzt. Beide sind **4:3**
und haben deshalb eigene Plätze (`.tr__m1`, `.tr__m2`).

Geprüft: CSS 412/412, div 318/318, figure 39/39, video 10/10, 63 picture-Paare stimmig, alle
49 Großansicht-Ziele vorhanden, keine doppelten IDs, alle 131 Asset-Verweise da. Großansicht
an einem der neuen Fotos getestet: öffnet, zeigt Bild und Bildunterschrift, schließt wieder.
Bei 1400 px sitzen Fotos und Clips asymmetrisch versetzt, am Handy stapelt alles auf 295 px,
kein Querscrollen. Hintergrundzeilen: **12 px** Luft bei 2606 px Blockhöhe — noch im Rahmen
(10–16), aber am unteren Ende. Wer dort eine Zeile ergänzt, muss neu messen.

### Neuer offener Punkt: Seitengewicht

**Beim Aufruf lädt die Seite 5,2 MB** (65 Dateien). Grund: **keines der 63 Bilder hat
`loading="lazy"`** — es lädt alles sofort, auch was weit unten liegt. Die zwei neuen Fotos
sind allein 629 KB davon.
Max testet die Seite mit Freunden **am Handy**; das ist dort spürbar. Der Fix wäre klein
(`loading="lazy"` an allen Bildern außer dem Auftakt), ist aber **nicht beauftragt**.
Max wurde darauf hingewiesen.

### Weiterhin offen

- `p-flyer` hat den falschen Farbverlauf (teilt sich die Klasse mit `p-plakate`)
- zwei Kapitel tragen „Projekt 08"; die Zählung endet bei 10, es sind aber elf Kapitel
- `film-animals.mp4` und `film-imker.mp4` liegen komprimiert da, sind bewusst nicht eingebaut
- `showreel.mp4` (36,7 MB) wird von keiner Seite benutzt
- `Portfolio/index.html` leitet weiter auf `v1`

---

## Stand vom 13.09.2026 — spät nachts (eigenes Drohnenkapitel)

**Die Seite hat jetzt elf Kapitel und keinen einzigen Platzhalter mehr.**

Neu: **Projekt 10 · Drohne & FPV** (`#p-drohne`), Farbwelt „Himmel" `#101625`. Hinten
angehängt, damit nur ein Farbverlauf zu setzen war. Enthält drei Clips:

| Clip | Original | auf der Seite |
|---|---|---|
| Papierflieger (2:23) | 1930 MB | **47,5 MB** (CRF 30, mit Ton) |
| Winter/Timeline (0:33) | 449 MB | 6,1 MB (stumm) |
| Autos, vordere Hälfte (1:43) | 2801 MB | 21,7 MB (stumm) |

Papierflieger brauchte CRF 30, weil er bei 28 auf 63 MB kam. Autos wurde auf Max' Wunsch
gekürzt und dafür **neu aus dem Original** gerechnet; die Langfassung `fpv-autos.mp4`
(44,6 MB) ist gelöscht, sie war nirgends eingebunden.

Karte 02.04 heißt jetzt „Drohne & FPV", hat ein echtes Bild und springt auf `#p-drohne`.

**Die elf beigelegten Bilder wurden bewusst nicht verwendet** — Produktfotos aus
Herstellershops, KI-Bilder, schlechte Freisteller. Alle Standbilder kommen stattdessen aus
Max' eigenem Material. Begründung in `02-vorgeschichte.md`, Abschnitt 12. Max ist informiert.

Geprüft: CSS 404/404, div 309/309, video 8/8, a 25/25, keine doppelten IDs, keine doppelten
Kartennummern, alle Anker lösen auf, alle 123 Asset-Verweise vorhanden, null `warten`-Kacheln.
Bei 1400 px stehen die drei Clips im Zickzack (687×408), am Handy gestapelt, kein Querscrollen.
Hintergrundzeilen im neuen Kapitel: 15 px Luft. Farbkette geprüft — der neue Verlauf stimmt.

### Zwei ältere Fehler gefunden, bewusst nicht repariert

Beide stammen **nicht** aus dieser Sitzung und wurden Max gemeldet:

1. **`p-flyer` hat den falschen Farbverlauf.** Es teilt sich die Klasse `chapter--tinte` mit
   `p-plakate`, blendet deshalb von Graphit ein, obwohl davor schon Tinte liegt — schwacher
   dunkler Streifen am Kapitelanfang. Fix wäre eine eigene Klasse mit
   `linear-gradient(to bottom,#141013 …)`.
2. **Zwei Kapitel tragen „Projekt 08"** (Flyer und Therme), und die Zählung endet bei 10,
   obwohl es elf Kapitel sind.

**Größe:** `assets/video` liegt bei 279 MB. Größte Datei ist jetzt `fpv-papierflieger.mp4`
mit 47,5 MB. `showreel.mp4` (36,7 MB) wird weiterhin von keiner Seite benutzt.

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

**Geklärt (13.09. nachts):** Die Commits landeten auf GitHub, ohne dass ich gepusht hätte,
weil auf dem Rechner **GitHub Desktop** mit diesem Repo offen ist und Max dort von Hand auf
„Push origin" drückt. Im Protokoll stehen die Vorgänge als `[ui]` — also Mensch, kein Hook.
Es gibt weder Git-Hooks noch `core.hooksPath` noch eine Automatik.
→ **Wichtig:** „Nur lokal committet" ist dadurch kein sicherer Zwischenzustand. Details in
`05-fallen.md`.

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
