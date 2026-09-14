# Vorgeschichte — wie die Seite geworden ist, was sie ist

Chronologisch gewachsen, **neue Einträge kommen unten dazu**. Alte bleiben stehen, auch wenn
sie überholt sind — dann mit Vermerk. Der Sinn dieser Datei ist, dass man nachlesen kann,
*warum* etwas so ist, bevor man es „verbessert" und damit eine bewusste Entscheidung kaputt macht.

---

## 0. Ausgangslage (10.09.2026)

Im Ordner lagen **zwei getrennte Anläufe**:

- `Website/` — Juni/Juli 2026. Zwei Designversionen, dazu eine Poké-Invaders-Case-Study
  (UE5-Game-Doku fürs Studium). Rohbau, nur Hero + Horizontalgalerie.
- `Cloud_Portfolio/Portfolio/` — Juli 2026. Sechs parallele Designversionen `v1`–`v6`
  plus mehrere Effekt-Prototypen.

Max wusste selbst nicht mehr genau, was da alles liegt. Erste Aufgabe war deshalb eine
Bestandsaufnahme (`INVENTORY.md`) — die ist inzwischen historisch.

### Warum `struktur-prototyp.html` die Basis wurde

Max suchte „die Version, die zwar sehr simpel war, die aber einigermaßen umfangreich war".
Das war nicht v6 (die technisch aufwendigste), sondern `struktur-prototyp.html`:
eine einzelne Datei, schwarz-weiß, mit einem Hub aus fünf Bereichen.

Ausschlaggebend: Sie ist die **einzige**, die einen 3D-Bereich hat und Equipment- sowie
Programmlisten enthält — inhaltlich also am vollständigsten, obwohl gestalterisch am
schlichtesten. Genau das hat ihm gefallen.

**Wichtig aus der Altzeit** (steht so auch in `PROJEKT-UEBERGABE.md`): Max hatte damals
ausdrücklich verlangt, dass **alte Versionen nie überschrieben werden** — neue Ideen kommen
als neuer Ordner daneben. Dieser Grundsatz gilt weiter und ist der Grund, warum v1–v6 und
die Showcase-Dateien alle noch liegen.

---

## 1. Projekt „Seoul bei Nacht" — das erste echte Projekt

Der Bereich, an dem das ganze gestalterische Vokabular entstanden ist. Entsprechend viele
Schleifen.

**Material:** vier Nachtaufnahmen aus Seoul. Max' Geschichte dazu: Er wollte ein großes
Feuerwerk fotografieren, ist dafür drei Kilometer weit auf einen Hügel gefahren, um nicht in
der Menschenmenge zu stehen — und war dann zu weit weg. Stattdessen hat er die Stadt
fotografiert und dabei die Kamera am Ende der Belichtung nach unten gerissen, woraus die
Lichtlinien entstanden.

### Was ausprobiert und verworfen wurde

**Erster Entwurf: gegliedert mit Zwischenüberschriften und einem Zitatblock.**
Verworfen. Max: *„mach es nicht so strukturiert"* und die Texte seien *„zu hoch literarisch
und hoch angepriesen"*. Er wollte **netter und humble**. Seitdem: keine Zwischenüberschriften
in Projekttexten, Ich-Form, Alltagssprache, Fehler dürfen drinstehen („War dann leider ein
bisschen zu weit").
→ **Diese Tonlage gilt für alle Projekttexte.**

**Zweiter Entwurf: vier Bilder gleichmäßig versetzt untereinander, Text daneben.**
Teilweise verworfen. Max wollte es „kreativer" und die beiden Skyline-Bilder gehörten
inhaltlich zusammen, also **ein** Text für beide.

**Dritter Entwurf: freie, asymmetrische Komposition.** Blieb. Drei Blöcke, jeder sitzt anders
im 12-Spalten-Raster, mit senkrechter Kapitelmarke am linken Rand.

### Einzelentscheidungen

- **Die beiden Skyline-Bilder wurden getauscht**: das *ohne* Rauch ist groß und links, das
  *mit* Rauch klein und versetzt. Max' Wunsch, ohne weitere Begründung.
- **Das Brückenbild liegt in der Datei hochkant, gehört aber quer.** Es wird per CSS um 270°
  gedreht (`.rot90`), die Originaldatei bleibt unangetastet. Ich hatte beide Drehrichtungen
  testweise gerendert und verglichen — bei 90° stand das „true friend"-Schild auf dem Kopf.
  Die Mathematik ist exakt: Bild füllt den Rahmen ohne Verzerrung oder Beschnitt.
  → **Fragil**: Wer an `.rot90` oder den Bildmaßen dreht, zerstört das leicht.
- **Weiße Passepartout-Rahmen**: erst hatten alle Bilder einen (wie in der alten
  Projektübersicht). Max wollte sie weg — **außer bei der Brücke**. Später wurde daraus ein
  **dünner grauer Rahmen** (1 px, Weiß bei 15 %), *„sodass es nicht so stark deutlich ist"*.

### Die Hintergrundtypografie

Max sah in seiner eigenen `scroll-showcase.html` den Effekt „großes Wort in Outline-Schrift,
das langsamer scrollt" (dort Effekt 04) und wollte den haben.

Verlauf: erst **ein** Wort pro Block → war zu 97 % hinter den Bildern versteckt, also
neu positioniert, sodass es an den Bildkanten halb hervorschaut → dann wollte Max **viel
mehr Text und viel größer**, „muss nicht vollständig lesbar sein" → daraus wurden 17 Zeilen
in vier Größenstufen, die 60–66 % der Blockfläche füllen.

- **Rote Akzentwörter**: Die Farbe stammt nicht aus der Luft, sondern wurde per Canvas aus
  Max' eigenen Bildern gemessen (Rücklichter `#f70702`, Turmlichter `#d93a2c`,
  Linien `#ce261d`) → gemittelt zu **`#df2219`**.
  Im Code steht er als `rgba(223,34,25,.62)` in `.pb__bg .bgl.red` — nach „df2219" zu suchen
  führt ins Leere.
  Erst 3 rote Wörter, dann auf Wunsch 4, dann wieder auf **2** reduziert
  („nur die beiden unteren"): **BELICHTUNG** und **LEUCHTRÖHREN**.
  → **BELICHTUNG ist ausdrücklich eingefroren** — Max: „das wort belichtung oben soll so bleiben".
- **Später kamen koreanische Zeichen dazu** (서울의 밤, 빛의 강, 다리 …), auf Max' Anregung
  „vielleicht auch mal coole koreanische Schriftzeichen". Bewusst in der Systemschrift, damit
  nichts nachgeladen wird — der Bruch zur Clash Display ist gewollt.

### Die roten Lichtspuren

Max wollte „rote Linien wie Blitze, die öfter mal im Hintergrund durchziehen", passend zu den
Lichtspuren auf den Fotos.

- Zufällig in Länge, Dicke, Höhe, Richtung, Dauer und Helligkeit.
- **Erst leicht schräg (±4,5°) — das wollte Max ausdrücklich nicht**: „nicht gedreht, also
  nicht so leicht schräg". Jetzt exakt waagerecht.
- Dicke ging bis 5 px, auf Wunsch bis **8 px** erweitert.
- Laufen nur in sichtbaren Blöcken, max. 6 gleichzeitig, pausieren bei verstecktem Tab.

---

## 2. Projekt „Seoul bei Tag"

**Material:** sechs Tagesaufnahmen. Max konnte sich bei der Farbwelt nicht entscheiden und
wollte **beide Varianten als zwei getrennte Projekte** sehen: einmal dunkles Warmbraun,
einmal helles Papierbeige.

**Ergebnis: Braun gewonnen, Beige gelöscht.** Max: „mir gefällt der dunkel braune teil besser".
→ **Die helle Variante ist damit verworfen.** Nicht erneut vorschlagen, ohne das zu erwähnen.

### Kompaktheit

Max fand es „zu lang gezogen" und die Bilder hätten „nicht alle so das besondere
Alleinstellungsmerkmal". Daraufhin auf **45 % der Höhe** geschrumpft (6592 → 2978 px):
engere Blockabstände, kleinere Versätze, kleinere Hintergrundschrift, kürzere Texte.

### Die Reihenfolge

Das Tempeldach war zuerst der Auftakt, sollte dann an dritte Stelle. Beim ersten Versuch habe
ich nur die *Inhalte* zwischen den Plätzen getauscht — dadurch haben beide Bilder Größe und
Seite gewechselt, was Max nicht wollte. Richtig war, **den ganzen Block zu verschieben**,
sodass das Layout mitwandert.
→ **Merksatz**: „Bilder tauschen" heißt bei Max fast immer, dass Größe und Textseite
mitkommen sollen.

---

## 3. Projekt „Menschen" (Porträts)

Max wollte hier ausdrücklich **weniger Text pro Bild** und eine **andere Gestaltung**.

**Lösung:** stehende Textspalte links (`position:sticky`), Bilderstrom rechts in zwei
versetzten Spalten. Pro Bild nur ein kurzer Titel plus Blendendaten, die erst beim
Drüberfahren erscheinen.

### Der Namenswechsel

Max' Idee: In der stehenden Spalte soll statt „Menschen" **der Name der Person** stehen, die
gerade daneben ist. Der Rest des Texts bleibt.

Drei Fehler, die dabei auftraten und alle behoben sind:
1. Die Erkennung nahm immer das **erste** Bild bei Gleichstand — bei zwei Bildern
   nebeneinander also nur die linke Spalte. Robin kam nie dran. → jetzt Abstand von
   Bildmitte zu Bezugslinie.
2. Bezugspunkt war die Titelzeile — die **steht am Kapitelende still**, also konnte das letzte
   Bild seinen Moment nie bekommen. → jetzt Bildschirmmitte als Bezug.
3. Die Seite endete zu früh, Robins Bild erreichte die Mitte nicht. → Auslauf plus eine
   Klammer, die am Seitenende auf das letzte Bild schaltet.

**Personen:** Timo (Brille), Ares (Frau), Gabriel (dunkle Locken), Paul (Himbeere),
Robin (Cap). Bei „der andere heißt Gabriel" waren zwei Männer möglich — **nachgefragt statt
geraten**, Max klärte: Himbeere = Paul, Locken = Gabriel.
→ Die Reihenfolge ist so gruppiert, dass Bilder derselben Person beieinanderstehen, damit der
Name nicht hin- und herspringt. **Nicht umsortieren, ohne das zu prüfen.**

Paul und Robin stehen bewusst in **eigenen Reihen** (diagonal versetzt), damit klar ist,
welcher Name zu welchem Gesicht gehört.

---

## 4. Projekt „Sonnenaufgänge"

Max' Vorgabe: **ein** Textblock, die Bilder drumherum — nicht Text pro Bild.

Inhalt: Er ist öfter früh aufgestanden, als man denkt, um zur Donau runterzugehen und den
Nebel im Sonnenaufgang zu fotografieren.

**Das Badezimmerbild**: Max erwähnte ein Bild mit Wald und Nebel, das er aus dem
Badezimmerfenster in Passau gemacht hat und das lange sein Lieblingsbild war. Identifiziert
über EXIF — es ist als einziges an einem anderen Tag und mit 55 mm statt 70–180 mm entstanden.
Steht unten rechts mit entsprechender Bildunterschrift.

Von zehn Bildern sind **sieben** drin; drei Aufnahmen desselben Baums vor der Brücke waren
nahezu identisch.

---

## 5. Projekt „Tiere"

Max nannte zwei Bilder ausdrücklich: die Katze mit herausgestreckter Zunge und die dunkle,
frontal zulaufende Katze — **beide „sehr groß" darstellen**.

Die Zungen-Katze läuft über die volle Breite (1040 px), die dunkle wurde auf Wunsch später
noch einmal vergrößert (511 → **687 px**, 78 % mehr Fläche).

Alle sechs Bilder sind drin.

---

## 6. Die Startseite — drei Runden Entwürfe

Max' Ausgangsproblem: Wer den Link bekommt, landet auf einer Startseite und muss sich erst
durchklicken. Er wollte eine Hauptseite, auf der die Projekte **gleich** zu sehen sind.

### Runde 1 — drei grundverschiedene Ansätze

- **A · Index** — ruhig, redaktionell, Bereichsspalte bleibt stehen, Projekte als Liste
- **B · Raster** — alles sofort sichtbar, Filterchips
- **C · Kino** — bildschirmfüllender Auftakt, Bänder mit Outline-Typo, große Kacheln

**Max wählte C**, ausdrücklich wegen des Auftakts mit dem Bild und wegen der Untergliederung
mit den großen Wörtern im Hintergrund. **Kritik:** Bilder zu groß, „ewig weit runterscrollen".

### Runde 2 — Kopf und Gliederung von C überall, Karten kleiner

A und B bekamen C's Auftakt und Gliederung **wörtlich**, dazu kompakte Karten im Stil der
alten Projektübersicht. C blieb unangetastet.

Max wählte **A**, wollte aber den weißen Rahmen weg → dünner grauer Rahmen überall.

### Runde 3 — Farbe und Bewegung

A blieb als schlichte Referenz, B bekam **Farbwelten pro Bereich** plus feines Korn,
C bekam **mitlaufende Outline-Typo** plus stehenden Bereichskopf.

Max gefiel **beides**: die Farben von B und der Scroll-Effekt von C. Also in C kombiniert.

### Runde 4 — Kompaktheit

A und B wurden zwei kompakte Versuche. Max wählte **B** („weil auch alle hochkant sind, die
einzelnen Bilder"). Dann sollte A noch einmal etwas völlig Neues werden.

### Das Ergebnis: „Drift"

Daraus wurde `startseite-a.html` — das ist der **direkte Vorfahr** der Live-Seite und die
einzige der drei Startseiten, die schon den `scrollLeft`-Drift benutzt. `startseite-b.html`
und `-c.html` sind die verworfenen Geschwister und liegen nur noch als Vergleich herum.

Die Fassung, die in der Live-Seite steckt:
- **Bereichsname steht senkrecht** am linken Rand statt als Überschrift darüber — spart Höhe
- **Die Reihen wandern beim vertikalen Scrollen von selbst seitlich**
- **Das große Bereichswort dahinter driftet gegenläufig**
- **Hover-Fokus**: das Bild unter der Maus bleibt hell, die anderen dunkeln ab

Drei Fallen, die dabei auftraten:
1. Bei 1400 px passten alle Karten nebeneinander → **0 px Überlauf, der Effekt lief ins
   Leere.** Karten von 228 auf 300 px verbreitert.
2. Der Drift war erst fertig, wenn der Bereich oben schon rausgescrollt war → die letzte Karte
   wurde genau dann frei, wenn man sie nicht mehr sah. Verlauf nach vorn verlegt.
3. Ursprünglich per `transform` auf einer inneren Spur — dann wären bei zu kurzem Scrollweg
   Karten **unerreichbar** geworden. → Jetzt über `scrollLeft`, dadurch bleibt die Reihe
   **immer auch von Hand wischbar**. **Diese Entscheidung nicht rückgängig machen.**

---

## 7. `live/index.html` — alles auf einer Seite (12.09.2026)

Max wollte: Startseite + alle Projekte als **eine** durchgehende Seite. Klick auf eine Karte
springt zum Kapitel, von dort scrollt man einfach weiter.

Gebaut, indem `struktur-prototyp.html` in seine Teile zerlegt wurde (CSS, Kapitel, Lightbox,
Skripte), die Pfade eine Ebene höher gebogen und der neue Kopf davorgesetzt wurde.
**Die alte Seite blieb dabei unangetastet** und dient weiter als Referenz.

Weggefallen: die View-Umschaltung, das Foto-Raster und die alte Galerie-Lightbox (deren
Markup war zuerst versehentlich mitgewandert, ohne ihr JavaScript — toter Dialog, entfernt).

### Neue Kapitel Design & 3D

- **iBee** — Der Name stand in `iBee.pdf`; aus Max' Diktat („so ein Ei, B war unser Projekt")
  war er nicht zu erraten. Es gibt **kein PDF-Werkzeug** auf dem Rechner, deshalb wurden die
  26 eingebetteten JPEGs direkt aus der PDF-Datei geschnitten (Suche nach `FFD8…FFD9`).
  Später lieferte Max bessere Renderings nach.
  **Max wollte ausdrücklich**: das Bild mit den drei Geräten und das mit dem Fernseher
  *kleiner* und **nicht als Vorschau**. Vorschau ist jetzt das weiße Produktfoto.
- **Politische Plakate** — drei Entwürfe plus Ausstellungsfoto und Syntheca-Druck.
  `IMG_2601` (Blender-Screenshot mit weißen Kugeln) gehört **zum Bubble-Plakat**, nicht zu
  iBee — das hatte ich zuerst falsch einsortiert, Max hat es korrigiert.
- **Flyer** — mit dem vorhandenen Material und PDF-Link.
- **Therme Bad Füssing** — die Unterwasseranimation als Video.

### Video & Drohne ist nur ein Platzhalter

Kapitel existiert mit vier leeren Kacheln und einem Text. Max liefert das Material nach:
Doku Graphitbergwerk Kropfmühl (200 m tief), Personenporträt über einen Pfarrer, Imagefilm
mit ARRI Alexa Mini, Werbespot Elektrotechnik, Drohnenaufnahmen.

---

## 8. Handy-Anpassung und ein Missverständnis (12./13.09.2026)

Max testete am **iPhone mit Chrome**. Der Vollbild-Knopf funktionierte nicht.

**Ursache, keine Fehlprogrammierung**: Auf iOS müssen alle Browser WebKit benutzen, auch
Chrome. `requestFullscreen` auf dem Dokument gibt es dort nicht — nur für Video-Elemente.
→ Der Knopf blendet sich jetzt aus, wo das Gerät es nicht kann.

Dazu fünf Handy-Anpassungen: Bereichsname waagerecht, Karten auf 72 % Breite, Wischen mit
Einrasten, seitlicher Drift am Handy aus (er kämpfte mit dem Wischen), Hintergrundschrift
kleiner, Auftakt in `svh` statt `vh` (sonst zieht die Safari-Leiste am Layout).

**Missverständnis, das festgehalten gehört:** Max schrieb nach dem Push „also ohne was am
inhalt zu ändern oder zu optimieren" — die Nachricht kam an, als die Anpassungen schon
gepusht waren. Ich hatte sein vorheriges „iphone" als Startfreigabe gelesen, gemeint war
wohl nur die Antwort auf meine Rückfrage.
→ **Lehre: Bei „mach X" und anschließender Rückfrage nicht annehmen, dass die Antwort auf die
Rückfrage auch die Freigabe für X ist.** Im Zweifel kurz bestätigen lassen.
Am Inhalt wurde nichts geändert, nur Darstellung auf schmalen Bildschirmen.
Rückgängig ginge es mit `git revert 2694697`.

---

## 9. Die zwei Filme im Video-Kapitel (13.09.2026)

Max legte `Neu/Videos/` an: zwei fertige Filme aus dem Studium plus das Exposé zum zweiten.
Damit ist Kapitel 09 zur Hälfte gefüllt; Imagefilm, Werbespot und Drohne fehlen weiter.

### Max' Rollen — nachgeschlagen, nicht geraten

Das ist der wichtigste Punkt an diesem Kapitel. **Beide Filme sind Teamproduktionen der THD,
Max hat sie nicht allein gemacht.** Die Rollen stehen im Abspann, ich habe sie dort abgelesen:

| Film | Max' Rolle | Übriges Team |
|---|---|---|
| Ein Tag als Bergmann | **Ton** | Regie Anita Evseenko · Kamera Tobias Schreiber · Reporter/Schnitt Bastian Fuchs · Licht Viktoria Bulich · Post Tobias Schreiber |
| Kommt zu mir | **Produktion** | Regie Noah Barber · Kamera Joao Rio de Lima Lübeck · Ton Patrice Djemai · Schnitt Finn Eichler |

→ **Die Seite sagt das auch so** („mein Part: Ton" bzw. „mein Part: Produktion"). Wer hier
Texte ändert, darf daraus keine Alleinleistung machen.

### Worum es geht

- **Ein Tag als Bergmann** — Reportage im Graphitbergwerk Kropfmühl, ein Reporter fährt ein
  und spricht unter Tage mit den Bergleuten. 5:48.
- **Kommt zu mir** — Porträt über **Felix M. Schandl**, Karmelitenpater und katholischer
  Jugendseelsorger an der TH Deggendorf. 5:17. Den Inhalt musste ich nicht raten: im selben
  Ordner lag `A_03_ Exposé.pdf`, aus dem ich den Text gezogen habe (FlateDecode-Ströme mit
  Node entpackt, weil es kein PDF-Werkzeug gibt). Kernsatz daraus: *kein Porträt über einen
  Beruf, sondern über eine Haltung*.
  **Achtung:** Der Film benutzt Musik unter **CC BY 3.0** („Traveling Around The World" von
  Alex-Productions). Die Namensnennung steht im Abspann des Films selbst — die Lizenz ist
  damit erfüllt, solange der Abspann drin bleibt. **Den Film nicht kürzen.**

### Kompression

Die Regel aus `CLAUDE.md` musste angepasst werden: der dortige ffmpeg-Aufruf wirft mit `-an`
den **Ton weg**. Das war für die Therme-Animation richtig (stumme Schleife), für Filme mit
Sprache ist es falsch. Hier stattdessen AAC mit 96 kbit/s.

| | Original | 1280×720, CRF 28, Ton 96k |
|---|---|---|
| Ein Tag als Bergmann | 337 MB | **37,2 MB** |
| Kommt zu mir | 222 MB | **23,0 MB** |

CRF 28 wurde an 40-Sekunden-Proben bei 26/28/30 kalibriert und danach an einer **dunklen
Stollenszene** gegengeprüft — dort fällt Kompression am ehesten auf, und der Unterschied zum
Original war nicht zu sehen. GitHub blockt erst bei 100 MB pro Datei und warnt ab 50 MB;
beide bleiben darunter, Google Drive war also nicht nötig.

### Gestaltung

Die beiden Platzhalterkacheln `tr__a`/`tr__b` sind durch zwei 16:9-Plätze ersetzt:
`.tr__f1` (Spalte 5–12) und `.tr__f2` (Spalte 2–9), also **versetzt statt nebeneinander** —
passend zur Asymmetrie im Rest der Seite. `tr__c`/`tr__d` bleiben als Platzhalter für
Imagefilm und Drohne unverändert stehen.

Die Hintergrundwörter „MATERIAL FOLGT" und „IN ARBEIT" stimmten nicht mehr und wurden zu
„UNTER TAGE" und „KOMMT ZU MIR". Die `data-speed`-Stufen von 0,005 blieben; nachgemessen
über den ganzen Scrollweg bleiben **15 px Luft** zwischen den engsten Nachbarzeilen — das
liegt im selben Rahmen wie die übrigen Kapitel (10–16 px).

Der Einleitungstext sprach vorher in der **dritten Person** über Max („Das Material dafür
liefert Max noch nach") — auf seiner eigenen Seite. Jetzt in Ich-Form wie überall sonst.

### Was ich korrigiert habe, ohne gefragt zu werden

Die Karte 02.02 hieß „Personenporträt" mit dem Untertitel „Ein Pfarrer, ein Tag, eine Kamera."
Beides stammte aus einer früheren Session und war **erfunden bzw. falsch**: Schandl ist
Karmelitenpater und Jugendseelsorger, nicht Pfarrer, und „ein Tag, eine Kamera" war Deko.
Jetzt: „Kommt zu mir — Porträt über den Jugendseelsorger der THD." Max weiß davon.

---

## 10. „Hostage Holiday" — der dritte Film (13.09.2026)

Max lieferte nach: `TeamA4_MaxAulinger_NoahBarber_PatriceDjemai_JoaodeLimaLubeck.mp4`, sein
**erstes Filmprojekt im ersten Semester**. Er beschrieb ihn als „Stummfilm".

### Der Titel und die Rollen standen nicht im Dateinamen

Der Dateiname nennt nur das Team. Titel und Rollen habe ich aus dem Film selbst abgelesen:
Titelkarte am Anfang, Abspannrolle am Ende.

**Titel: „Hostage Holiday".** Eine Entführungsgeschichte ohne Dialog, die am Ende als
Überraschungsparty aufgelöst wird. 2:18 lang, entstanden in der Vorlesung **Kameratechnik**
unter Leitung von **Ilona Meier**, © TH Deggendorf.

| Rolle | Namen |
|---|---|
| **Regie, Schnitt und Party-Gäste** | **Max Aulinger**, Noah Barber, Patrice Djemai, Joao De Lima Lübeck |
| Entführer | Marvin Schmirler |
| Geisel | Johann Hacker |
| Schrift-FX | Noah Barber |
| Color Grading | Patrice Djemai |
| Musik | Royalty-free sound effects, pixabay.com |

→ Hier ist Max' Rolle **eine andere als in den beiden anderen Filmen**: Regie und Schnitt, zu
viert geteilt. Das Team ist bis auf Max dasselbe wie bei „Kommt zu mir". Auf der Seite steht
deshalb „mein Part: Regie und Schnitt, zu viert".

### „Stummfilm" heißt nicht tonlos

**Fast danebengegangen.** Nach Max' Beschreibung hätte man den ffmpeg-Befehl für stumme
Schleifen genommen — also `-an`, Ton weg. Der Film hat aber eine volle Tonspur:
AAC mit 320 kbit/s, gemessen **−19,4 dB mittlere Lautstärke**. Gemeint war „ohne Dialog",
nicht „ohne Ton". Die Musik ist da und gehört dazu.
→ **Immer messen statt glauben:**
```bash
ffmpeg -hide_banner -nostats -i datei.mp4 -vn -af volumedetect -f null /dev/null 2>&1 | grep mean_volume
```

### Kompression

Der Film ist mit 2:18 kurz genug, dass Qualität fast nichts kostet. Deshalb hier **CRF 24**
statt der 28 der langen Filme, und Musik mit **128 kbit/s** statt 96 — Musik verträgt die
niedrige Rate schlechter als Sprache.

| Original | auf der Seite |
|---|---|
| 364 MB, 1920×1080, 24 fps, 22 Mbit/s | **14,6 MB**, 1280×720 |

Gegenprobe: Tonspur nach der Kompression bei −19,5 dB, also unverändert.

### Einordnung auf der Seite

- Neue Karte **02.06** am Ende der Video-Reihe. Bewusst **angehängt statt eingeschoben**,
  damit 02.01–02.05 ihre Nummern behalten und keine Verweise brechen.
- Im Kapitel ein dritter Filmplatz `.tr__f3` (Spalte 5–12). Damit stehen die drei Filme im
  Zickzack: rechts, links, rechts.
- Vorschaubild ist die maskierte Gestalt im Türrahmen bei 0:80. **Absichtlich kein Bild aus
  dem Party-Ende** — das ist die Pointe des Films.
- Die Hintergrundzeilen vertragen den höheren Block: 14 px Luft über den ganzen Scrollweg,
  vorher 15. Liegt weiter im Rahmen der übrigen Kapitel (10–16 px).

---

## 11. Imagefilm eingebaut, vier weitere Videos nur komprimiert (13.09.2026)

Max lieferte fünf Dateien in drei Ordnern nach und gab dazu **unterschiedliche Aufträge**:
den Imagefilm einbauen, die anderen nur komprimieren und liegen lassen, weil er noch nicht
weiß, wie er sie zeigen will. Die FPV-Aufnahmen sind erst zwei von mehreren.

### „Electrify Your Future" — eingebaut

Max' Hinweis war entscheidend: **Imagefilm und Werbespot Elektrotechnik sind dasselbe.**
Auf der Seite standen dafür zwei getrennte Karten (02.03 und 02.04). Die sind jetzt **zu
einer zusammengelegt**, und 02.05/02.06 sind auf 02.04/02.05 nachgerückt, damit keine Lücke
in der Nummerierung bleibt. Die Nummern sind reine Anzeige, keine Sprungziele — das Umnummerieren
bricht nichts.

**Die Datei war schon web-fertig** und wurde deshalb **unverändert übernommen**: 1280×720,
1,0 Mbit/s, 24,6 MB bei 3:01, AAC 128k, faststart schon gesetzt. Sie nochmal durch x264 zu
schicken hätte nur Generationsverlust gebracht und kaum Platz gespart.
→ **Regel daraus: vor dem Komprimieren prüfen, ob die Quelle schon Zielformat hat.**

Rollen aus dem Abspann abgelesen — **Max war Production Designer**, also Szenenbild:

| Rolle | |
|---|---|
| Writer/Director | Sarah Abinger |
| Editor | Tamara Blüml |
| Producer | Johann Hacker |
| Technical Producer | Yannick Köhler |
| DP | Laura Mutzl |
| DOA | Benedict Müller |
| **Production Designer** | **Max Aulinger** |
| Gaffer | Karolina Grün |

Der Film liegt in **Breitwand mit Balken**: echter Bildbereich 1280×480 ab y=120, ermittelt
mit `cropdetect`. Der Kartenausschnitt musste deshalb aus diesem Streifen kommen, nicht aus
dem vollen Bild — sonst wären schwarze Balken in der Vorschau gelandet.

Damit hat Max in **jedem** der vier Filme einen anderen Job gehabt: Ton, Produktion,
Szenenbild, und Regie/Schnitt zu viert. Genau das sagt jetzt auch der Einleitungstext.

### Nur komprimiert, absichtlich nicht eingebaut

| Datei | Original | fertig | Ton |
|---|---|---|---|
| `film-animals.mp4` | 1874 MB, 4K/50p | **34,0 MB** (CRF 29) | bleibt, −31,2 dB |
| `film-imker.mp4` | 846 MB, 4K/50p | **14,4 MB** (CRF 28) | bleibt, −27,9 dB |
| `fpv-autos.mp4` | 2801 MB, 4K/60p | **44,6 MB** (CRF 28) | **entfernt** |
| `fpv-timeline-1.mp4` | 449 MB, 4K/60p | **6,1 MB** (CRF 28) | **entfernt** |

Alle vier liegen in `assets/video/`, sind aber von **keiner Seite eingebunden** — das war
Max' ausdrücklicher Wunsch. Wer sie einbaut, sollte vorher mit ihm reden.

**Warum bei den FPV-Clips der Ton weg durfte:** gemessen −91,0 dB in Mittel *und* Spitze,
also digitale Stille. Die Pegelmessung aus Abschnitt 10 hat sich damit gleich zweimal
ausgezahlt — einmal um Musik zu retten, einmal um leere Spuren wegzuwerfen.

**Animals lief auf CRF 29 statt 28**, weil er bei 28 auf 52 MB gekommen wäre und damit über
GitHubs Warnschwelle von 50 MB. Bei 4K/50p über 2:44 ist das die teuerste Datei im Projekt.

→ **Achtung für später:** Max sagt, es kommen **noch mehr FPV-Aufnahmen**. Bei rund 40 MB pro
Clip wächst das Repo schnell. Wenn es viele werden, sollte man mit ihm über kürzere Ausschnitte
oder einen Zusammenschnitt reden, statt jeden Clip vollständig abzulegen.

---

## 12. Eigenes Kapitel für Drohne & FPV (13.09.2026)

Max lieferte den Film **„Papierflieger"** nach und bat darum, aus den FPV-Aufnahmen einen
eigenen Bereich zu bauen. Dazu legte er einen Ordner mit elf Bildern bei, aus denen ich die
besten auswählen sollte.

### Die beigelegten Bilder wurden bewusst NICHT verwendet

**Keines der elf Bilder stammt von Max.** Beim Durchsehen:

- **Produktfotos aus Herstellershops** — die Dateinamen tragen noch die Artikelnummern
  (`nazgul-evoque-f5-v3-frame-kit-preorder-7194380.webp`, `Pavo20_Pro_O4_Pro_1080x.webp`),
  dazu DJI-Goggles und O4 Air Unit
- **zwei KI-Bilder**, erkennbar an `Gemini_Generated_Image_…` — darunter die RadioMaster-Fernsteuerung
- **zwei schlecht freigestellte PNGs** mit sichtbaren weißen und grünen Streifen im Bild

→ **Nicht eingebaut, und zwar aus drei Gründen:** fremde Produktfotos auf einer
Bewerbungsseite sind rechtlich heikel; KI-Bilder in einem Portfolio, das eigene Arbeit zeigen
soll, können bei einem Medientechnik-Betrieb genau falsch ankommen; und die freigestellten
Bilder sind handwerklich schlecht.
**Stattdessen:** Alle Standbilder kommen aus Max' eigenem Filmmaterial. Die Drohnentypen
werden im Text genannt — zu schreiben, womit man fliegt, ist unproblematisch.
→ **Diese Entscheidung wurde Max offen mitgeteilt.** Wenn er die Produktbilder trotzdem will,
ist das seine Sache, aber es soll bewusst passieren.

### Die beiden Drohnen

Aus den Dateinamen eindeutig, deshalb nicht geraten:
**iFlight Nazgul Evoque F5** (die große, für schnelle Verfolgungen) und
**BetaFPV Pavo20 Pro** (die kleine, für enge Stellen). Max' Diktat sagte „Airblade Nazgul,
die Evoke da" — gemeint war die Nazgul Evoque.

### Der Film „Papierflieger"

Flüge durch den Wald; am Ende faltet jemand aus einem Hinweisblatt einen Papierflieger. Auf
dem Blatt steht sinngemäß, dass der Betrieb von Drohnen im Nationalpark untersagt ist.
Der Film ist also ein kleines Statement, keine reine Aneinanderreihung von Flügen.

### Kompression

| Clip | Original | fertig | |
|---|---|---|---|
| Papierflieger (2:23) | 1930 MB | **47,5 MB** | CRF 30, Ton bleibt (−19,8 dB) |
| Winter/Timeline (0:33) | 449 MB | 6,1 MB | stumm |
| Autos, **vordere Hälfte** (1:43) | 2801 MB | **21,7 MB** | stumm |

**Papierflieger brauchte CRF 30 statt 28.** Bei 28 kam er auf **63 MB** und lag damit über
GitHubs 50-MB-Warnschwelle — 4K/60p durch dichten Wald ist mit das teuerste Material überhaupt.

**Autos wurde gekürzt**, weil Max es so wollte („die Hälfte hinten weglöschen"). Gekürzt wurde
**neu aus dem Original**, nicht aus der fertigen Fassung geschnitten — sonst hätte es einen
zweiten Kompressionsdurchlauf gegeben. Die alte Langfassung `fpv-autos.mp4` (44,6 MB) wurde
entfernt; sie war von keiner Seite eingebunden.

### Das neue Kapitel

`#p-drohne`, **Projekt 10**, Farbwelt „Himmel" (`#101625`, kaltes Indigo) — die erste Farbe im
Projekt, die ins Blaue geht, damit sie sich vom Filmschwarz davor absetzt.

**Sicher eingefügt:** Das Kapitel hängt **ganz hinten**. Damit war nur *ein* Verlauf zu setzen
(aus `#121212`, dem Filmschwarz davor) und kein Nachbar zu reparieren — genau der Grund,
warum Anhängen einfacher ist als Einschieben (siehe `05-fallen.md`, verkettete Übergänge).

Die Karte 02.04 zeigt jetzt auf `#p-drohne` statt auf `#p-video` und hat ein echtes Bild.
Damit gibt es **keinen einzigen `warten`-Platzhalter mehr** auf der Seite.

### Dabei gefunden, nicht angefasst

Beim Prüfen der Farbkette fiel ein **älterer** Fehler auf: `p-flyer` benutzt dieselbe Klasse
`chapter--tinte` wie `p-plakate`. Sein Verlauf blendet deshalb von Graphit `#0b0c0e` ein,
obwohl davor schon Tinte `#141013` liegt — ein schwacher dunkler Streifen am Kapitelanfang.
Stammt nicht aus dieser Sitzung. **Nicht repariert, weil nicht beauftragt; Max wurde informiert.**
Behebung wäre eine eigene Klasse für `p-flyer` mit `linear-gradient(to bottom,#141013 …)`.

Ebenfalls weiterhin offen: **zwei Kapitel tragen „Projekt 08"** (Flyer und Therme), und die
Zählung endet bei 10, obwohl es elf Kapitel sind.

---

## 13. Kameradrohne und echte FPV-Fotos (13.09.2026)

Nachtrag am selben Abend, zwei getrennte Wünsche von Max.

### Die zwei alten Clips sind gar nicht FPV

`zeitraffer.mp4` und `drone-clip-1.mp4` lagen seit den v1–v6-Zeiten unbenutzt in
`assets/video/`. In `04-stand.md` stand als offene Frage, ob sie brauchbar sind.
**Max hat sie beantwortet:** Beide sind mit einer **DJI Mini 4 Pro** gefilmt, also einer
ganz normalen Kameradrohne — nicht FPV.

Das Kapitel hat deshalb jetzt **zwei Hälften**: oben FPV, selbst geflogen; unten der ruhige
Teil mit der Kameradrohne, eingeleitet durch einen eigenen kurzen Text. Fachlich ist der
Unterschied groß genug, dass es sich lohnt, ihn auf der Seite zu benennen.

**Nicht neu komprimiert.** Beide sind 1440×1080 bei rund 1,0 Mbit/s und 21 bzw. 16 Sekunden
lang — also bereits Zielformat. Nach der Regel aus Abschnitt 11 wurden sie unverändert
übernommen; ergänzt wurden nur die fehlenden WebP-Poster.
Ungewöhnlich: beide sind **4:3**, nicht 16:9. Deshalb haben sie ihre eigenen Plätze
(`.tr__m1`, `.tr__m2`) statt der 16:9-Plätze der Filme.

### Endlich eigene Bilder zu den Drohnen

Nachdem die elf beigelegten Bilder aus Abschnitt 12 allesamt Fremdmaterial waren, lieferte
Max **zwei eigene Fotos** nach (`IMG_1713.HEIC`, `IMG_7616.HEIC`, je 4032×3024):

- **Die Flotte** — sieben FPV-Drohnen mit bunten Propellern auf einem runden Gartentisch
- **Vor dem Start** — Funke, FPV-Brille, eine Reihe Akkus und die kleine Cinewhoop

Beide liegen jetzt unter den FPV-Videos, mit Großansicht wie die übrigen Kapitelbilder
(`data-pjlb`). Die Bildunterschriften bleiben bei dem, was zu sehen ist — es steht **nicht**
dort, dass er die Drohnen selbst gebaut hat, weil ich das nicht weiß.
→ Damit ist das Kapitel vollständig aus Max' eigenem Material gebaut.

HEIC lässt sich mit `sips` direkt verarbeiten, ein Zwischenschritt ist nicht nötig:
```bash
sips -Z 1400 -s format jpeg -s formatOptions 62 bild.HEIC --out ziel.jpg
```

### Was dabei aufgefallen ist

Das Kapitel ist mit sechs Hintergrundzeilen und 2606 px Blockhöhe der zweitgrößte Block der
Seite. Die engste Stelle liegt bei **12 px** — noch im Rahmen (10–16 px), aber am unteren
Ende. Wer dort eine weitere Zeile ergänzt, muss neu nachmessen.

**Die Seite lädt beim Aufruf inzwischen 5,2 MB** (65 Dateien), davon 629 KB allein die zwei
neuen Fotos. Grund: **keines der 63 Bilder hat `loading="lazy"`**, es lädt also alles sofort,
auch was zehn Bildschirmhöhen weiter unten liegt. Max wurde darauf hingewiesen; die Änderung
wäre klein, war aber nicht beauftragt.

---

## 14. Videos spielen von allein — immer nur das mittigste (13.09.2026)

Max' Wunsch: Alle Videos sollen beim Scrollen von selbst starten, sobald sie am Bildschirmrand
auftauchen, und erst anhalten, wenn sie ganz verschwunden sind. Sind mehrere gleichzeitig zu
sehen, soll **nur das laufen, das der Bildschirmmitte am nächsten ist**.

### Zwei Dinge, die vorher geklärt werden mussten

**Automatisches Abspielen erlauben Browser nur stumm.** Chrome, Safari und Firefox blockieren
Ton ohne vorherige Nutzerinteraktion — das ist keine Einstellung, sondern eine feste Regel.
Alle zehn Videos haben deshalb jetzt `muted`. Die `controls` bleiben, wer Ton will, klickt
aufs Lautsprechersymbol. **Für die Filme mit Sprache und Musik ist das ein echter Verlust**,
für die stummen FPV-Clips belanglos. Max wurde darauf hingewiesen, bevor gebaut wurde.

**`preload="none"` bleibt.** Sonst hätte die Seite beim Aufruf über 200 MB Video angefangen zu
laden. So lädt nur das Video, das gerade an der Reihe ist. Der Preis: beim ersten Start eine
kurze Verzögerung, während gepuffert wird. Alle Dateien haben `faststart`, das hält sie klein.

### Wie es gebaut ist

Eine eigene Funktion am Ende des zweiten Skriptblocks, `window.videoWahl`:
- bei jedem Scroll (auf `requestAnimationFrame` gedrosselt, wie die übrigen Effekte)
- Abstand von jeder Videomitte zur Bildschirmmitte, das kleinste gewinnt
- alle anderen laufenden Videos werden angehalten
- ein Video, das **gar nicht mehr sichtbar** ist, wird angehalten; war es zu Ende gelaufen,
  wird es auf Anfang zurückgespult, damit es beim nächsten Mal wieder starten kann

**Zwei Feinheiten, die nicht beauftragt waren, aber nötig sind:**

1. **Eigenes Pausieren wird respektiert.** Ohne das würde die Steuerung ein Video, das der
   Nutzer gerade angehalten hat, beim nächsten Scrollpixel sofort wieder starten. Gelöst über
   ein Flag `data-von-hand`, das beim `pause`-Ereignis gesetzt wird — aber nur, wenn der Halt
   *nicht* von uns kam (`eigenerHalt`) und das Video nicht einfach zu Ende war.
   Das Flag verfällt, sobald das Video den Bildschirm ganz verlässt.
2. **`prefers-reduced-motion` schaltet alles ab.** Wer im Betriebssystem weniger Bewegung
   eingestellt hat, bekommt kein automatisches Abspielen. Betrifft fast niemanden, ist aber
   genau der Fall, für den die Einstellung existiert. **Max weiß davon**, und es lässt sich in
   einer Zeile entfernen, wenn er es anders will.

### Prüfung — und was nicht prüfbar war

Im zugeklappten Browser-Bereich **setzt die Wiedergabe aus**: `readyState` war 4, 2,24 s
gepuffert, `play()` warf keinen Fehler — und trotzdem blieb `currentTime` bei 0. Ein echtes
Abspielen ließ sich hier also nicht zeigen. Der Bereich ließ sich auch nicht aufklappen.

**Stattdessen wurde geprüft, welche Aufrufe die Steuerung macht**, indem `play` und `pause`
protokolliert wurden. Das prüft den echten Code, nicht eine Nachbildung:

| Fall | Ergebnis |
|---|---|
| 7 Scrollpositionen, je 2–3 Videos sichtbar | jedes Mal das mittigste gewählt, Abstände nachgerechnet |
| kein Video sichtbar | kein Aufruf |
| zwei laufen, ein drittes ist mittig | beide angehalten, das mittige gestartet |
| laufendes Video komplett aus dem Bild | angehalten |
| Nutzer pausiert selbst | kein Neustart, solange es sichtbar bleibt |
| danach weg- und wieder hingescrollt | Merker verfällt, startet wieder |

→ **Offen bleibt allein, ob die Bilder tatsächlich laufen.** Das muss Max im richtigen Browser
ansehen. Muster zum Protokollieren von Medienaufrufen steht in `05-fallen.md`.

---

## 15. Warum das Autoplay „gebugt" hat (14.09.2026)

Max meldete, die Videos spielten nicht von selbst. Drei Ursachen, davon eine banal und zwei echt.

**1. Der Code war gar nicht veröffentlicht.** Auf der Live-Seite kam `videoWahl` null mal vor
und nur ein Video war stumm geschaltet — der Commit lag noch lokal. Wer die Live-Seite
ansieht, sieht den alten Stand. *(Hieraus: bei „funktioniert nicht" immer zuerst prüfen,
welchen Stand Max überhaupt vor sich hat.)*

**2. Die `<video>`-Elemente hatten keine Maße.** Das war der eigentliche Fehler und er ist
größer als das Autoplay. Ohne `width`/`height` fällt ein Video vor dem Laden auf Standardgröße
zusammen — die Seite war **22225 px statt 27805 px**, also 5580 px zu kurz, und sprang beim
Nachladen. Für eine Steuerung, die das „mittigste sichtbare Video" sucht, ist das fatal: Sie
maß in ein zusammengefallenes Layout und wählte bei **jeder** Scrollposition dasselbe falsche
Video. Genau das hatte ich beim ersten Bauen als „Auswahl funktioniert" verbucht — sie
funktionierte nur, weil beim damaligen Test die Poster zufällig schon geladen waren.

Behoben: echte Maße an allen zehn Videos, `height:auto` ins CSS. Dabei fielen **18 Bilder**
in den Design-Kapiteln auf, die ebenfalls keine Maße hatten; eines war 19 px hoch statt voll.
Auch die bekamen ihre Maße. Ergebnis: Die Seite steht sofort auf ihrer Endhöhe, Sprung 0.

**3. `play()` ist asynchron.** Bei `preload="none"` lädt das Video erst nach dem Aufruf,
`paused` bleibt solange `true` — mein Code feuerte deshalb bei jedem Scrollpixel ein neues
`play()`, und ein dazwischenkommendes `pause()` brach die laufende Anfrage ab. Das ist das
Ruckeln und Hängenbleiben.

Behoben, indem jede Startanfrage verfolgt wird: Ein Haltewunsch während eines laufenden
Starts wird vorgemerkt und erst danach ausgeführt. Messbar: 13 Scrollschritte über zehn
Videos ergeben jetzt **9** `play()`-Aufrufe statt Dutzenden.

### Nachgeprüft

| Prüfung | Ergebnis |
|---|---|
| Seitenhöhe vor und nach dem Laden | 27805 / 27805, **Sprung 0** |
| Bilder verzerrt? | keines |
| 13 Scrollpositionen am Rechner | je das mittigste gewählt, 9 `play()` ohne Doppelung |
| alle 10 Videos am Handy einzeln zentriert | jedes Mal das richtige gestartet |
| schneller Wechsel während ein Start noch läuft | kein Abbruch; Halt wird danach nachgeholt |
| eigenes Pausieren | kein Neustart, Merker verfällt beim Verlassen des Bildes |

**Weiterhin nicht prüfbar:** ob die Bilder tatsächlich laufen — der Browser-Bereich setzt
Wiedergabe aus. Das muss Max am Gerät sehen.

---

## 16. Nur das mittige Video lädt — Downloads wirklich abbrechen (14.09.2026)

Max meldete, dass beim Durchscrollen die oberen Videos zu laden anfangen und **die unteren
dann gar nicht mehr**. Seine Vermutung — „weil die oberen glaube ich gerade noch runterladen" —
war genau richtig.

**Die Ursache war mein Fehler:** `pause()` hält die Wiedergabe an, **bricht den Download aber
nicht ab**. Nach einem Durchlauf luden acht Videos weiter im Hintergrund, belegten die sechs
Verbindungen, die ein Browser pro Server erlaubt, und machten die Leitung dicht.

**Zwei Änderungen:**

1. **Abbauen statt nur anhalten.** Verliert ein Video die Mitte, wird sein `<source>` entfernt
   und `load()` gerufen — das bricht den Download wirklich ab und stellt das Poster wieder her.
   Wird es wieder mittig, kommt die Quelle zurück; die Datei liegt dann im Zwischenspeicher.
   Ausnahme: Ein Video, das schon angespielt wurde (`currentTime > 0`), behält seine Quelle,
   solange es sichtbar bleibt — sonst würde es beim kleinsten Scrollen auf Anfang springen,
   während man zusieht.
2. **160 ms Wartezeit vor dem Laden.** Wer nur vorbeiscrollt, löst gar keine Anfrage mehr aus.

### Nachgewiesen am Netzwerkprotokoll

Das war die entscheidende Lehre: Die Anzahl der `play()`-Aufrufe sagt **nichts** darüber, was
über die Leitung geht. Erst das Netzwerkprotokoll zeigt es.

| Vorgang | Videoanfragen |
|---|---|
| 93 Scrollschritte über die ganze Seite | **0** |
| unten stehen bleiben | 1 (`drone-clip-1.mp4`) |
| hoch zum ersten Film | 1 (`film-bergmann.mp4`); die erste wurde mit `ERR_ABORTED` beendet |

Am Handy dasselbe Bild: Durchscrollen null Videos, Stehenbleiben genau eines. Zu jedem
Zeitpunkt hält **genau ein** Video eine Quelle, die anderen neun sind abgebaut.

Für spätere Prüfungen stellt die Steuerung `window.videoZustand()` bereit.

---

## 17. Warum es nach mehrmaligem Scrollen aufhörte (14.09.2026)

Max: „anfangs hat es gut funktioniert, aber wenn ich dann öfter hoch und runter scrolle, hat
es dann wieder nicht mehr gestartet". Ein Zustandsfehler, der sich anhäuft — die schwierigste
Sorte, weil ein einzelner Durchlauf sie nicht zeigt.

**Ursache: `load()` feuert sein `pause`-Ereignis verzögert.**
Die Steuerung merkt sich, wenn der Nutzer selbst pausiert, damit sie ihn nicht überfährt.
Meine Schutzmarke dafür wurde synchron gesetzt und sofort wieder gelöscht. Das `pause` aus
`load()` traf aber erst danach ein — und galt deshalb als Nutzerklick. Das Video wurde als
„von Hand angehalten" markiert und **startete nie wieder**. Aufgeräumt wurde der Merker nur
bei nicht-aktiven Videos, ein aktives blieb also dauerhaft blockiert. Nach jedem Hoch und
Runter traf es ein weiteres Video — genau das beschriebene Verhalten.

**Drei Änderungen:**
1. **Schutzmarke je Element als Zähler, die erst nach 150 ms verfällt.** Damit fallen auch
   verzögerte Ereignisse noch darunter.
2. **Beim Abbauen werden alle Merker gelöscht.** Nach einem Abbau ist das Element frisch.
3. **Nach einem asynchronen Start wird die Lage neu geprüft**, statt sich auf einen vorher
   gesetzten Wunsch zu verlassen — der kann durch einen Abbau verschwunden sein.

Dazu aufgeräumt: Der DOM entscheidet, ob ein Video eine Quelle hat, nicht ein Flag. Und die
Ausnahme „schon angesehene Videos behalten ihre Quelle" ist gefallen — jetzt hält **immer
genau eines** eine Quelle, das ist vorhersagbarer und war ohnehin Max' Wunsch.

### Wie es geprüft wurde

Der entscheidende Punkt: Solche Fehler zeigen sich erst durch **Wiederholung**. Also wurde
echte Wiedergabe nachgebildet — inklusive des verzögerten `pause` aus `load()`, das ja die
Ursache war — und acht Runden hoch und runter gefahren, mit Prüfung an **jedem** der rund
500 Schritte:

| Prüfung | Ergebnis |
|---|---|
| jemals mehr als eine Quelle aktiv | **0 Mal** |
| jemals mehr als ein Video spielend | **0 Mal** |
| blockierte Videos am Ende | **keines** |
| echte Netzwerkanfragen über 5 Runden | 9, davon 7 sauber abgebrochen |

Vorher wäre nach wenigen Runden ein Video nach dem anderen blockiert gewesen.

---

## 18. Das Therme-Video war anamorph (14.09.2026)

Max meldete: Beim Fisch-Video ist das Standbild verzerrt, und die Seite springt beim Scrollen,
„weil wenn das Video wieder stoppt, springt es kurz ins verzerrte Format zurück". Wieder eine
präzise Beschreibung, die direkt zur Ursache führte.

**Das Video hat nicht-quadratische Pixel.** Gespeichert 1280 × 720, aber
`sample_aspect_ratio=2067:512` — dargestellt also **689:96, rund 7,2:1**. Ein ultrabreites
Band, was für eine Projektion auf eine Beckenwand auch genau richtig ist. Das Original in
`Neu/Projekte/` ist genauso gebaut: 1920 × 1080 gespeichert, 7751 × 1080 dargestellt.

Im Markup standen die **gespeicherten** Maße. Der Browser reservierte damit einen 16:9-Kasten,
korrigierte ihn beim Eintreffen der Metadaten auf das echte Verhältnis — und beim Abbauen
sprang er zurück. Da die Autoplay-Steuerung ständig auf- und abbaut, hüpfte die Seite dauernd.
Das Vorschaubild war aus demselben Grund gestaucht.

**Behoben durch Neurechnen aus dem Original mit quadratischen Pixeln:**
`scale=2756:384,setsar=1` — 2756 × 384 ist exakt 689:96 und beide Maße sind gerade.
Danach stimmen gespeicherte und dargestellte Größe überein, und ein einziger Wert passt
überall. Das Poster wurde aus der korrigierten Fassung neu erzeugt.

| | vorher | jetzt |
|---|---|---|
| Datei | 1280 × 720 anamorph, 10,8 MB | 2756 × 384 quadratisch, 15,0 MB |
| Kasten beim Laden / Spielen / Abbauen | sprang | **1040 × 147 in allen Zuständen** |
| Vorschaubild | gestaucht | richtig |

Dabei fiel auf, dass dasselbe Standbild im Kapitel auch als normales Bild vorkommt — es trug
noch die alten Maße und wurde mitkorrigiert. Zur Sicherheit wurden **alle** Maße im Markup
gegen die Dateien geprüft: 57 Bilder und 10 Videos, **keine Abweichung**.

**Und eine alte Doku-Stelle war falsch:** In `05-fallen.md` stand, `mdls` habe bei den
Videomaßen „gelogen", weil es 7751 × 1080 meldete. Es hatte recht — das ist die
*Darstellungs*größe dieses anamorphen Videos, `ffprobe` nennt die *gespeicherte*. Der Eintrag
ist richtiggestellt.

**Nicht geändert, weil Max es ausdrücklich nicht wollte:** Am Handy ist das Band bei 295 px
Breite nur 43 px hoch. Auf die Rückfrage kam „ne das layout passt dann schon".

---

## 19. Die iCapsule als Produktseite mitten im Portfolio (14.09.2026)

Max' Auftrag: Das Apple-Projekt so präsentieren, „dass man kurz meint, man sei jetzt auf der
Website von Apple". Zuerst hatte ich es als **eigene Seite** gebaut — das war falsch verstanden.
Seine Korrektur: Es soll **an seinem Platz zwischen den anderen Projekten bleiben**, damit man
beim Durchscrollen von oben nach unten auch durch diesen Bereich scrollt. Die eigenständige
Seite wurde wieder gelöscht, damit nicht zwei Fassungen auseinanderdriften.

### Woher der Inhalt kommt

Aus Max' eigener Präsentation, nicht erfunden. Die `.pptx` ist ein ZIP — die Folientexte
stehen als `<a:t>` in `ppt/slides/slideN.xml`, die Bilder liegen in `ppt/media/`:
```bash
unzip -qo praesentation.pptx -d ordner
node -e '…[...s.matchAll(/<a:t>([^<]*)<\/a:t>/g)]…'
```
Daraus stammen **alle** Claims: „Erinnerungen sicher aufbewahren. Bis zu 20TB Speicher.",
„7 Ringförmig angeordnete Hochtöner", „M4-Chip mit 16 Kernen", „6 Zoll OLED-Bildschirm",
„Erhältlich in Mitternacht und Weiß. 1349€", und der Leitsatz „Erinnerungen neu erleben."

**Das Produkt heißt iCapsule**, nicht iBee — iBee ist nur der Dateiname der Projektunterlagen.
Die Karte 03.01 hieß deshalb falsch und wurde umbenannt. *Falls iBee der richtige Projektname
sein soll: Max fragen.*

In `ppt/media/` lagen außerdem **28 Bilder**, deutlich hochauflösender als die, die vorher auf
der Seite waren (aus dem PDF geschnitten). Die Renderings wurden daraus neu gezogen.
Bemerkenswert: Die „Erinnerungen" auf den Gerätebildschirmen sind **Max' eigene Fotos** —
Grillen am See, Sonnenblume, Gipfel über dem Nebelmeer. Die stehen jetzt auch so auf der Seite.

### Die Gestaltung — und wo die Grenze liegt

**Nicht gebaut:** keine Apple-Logos, keine nachgebaute apple.com-Navigation, nichts, was sich
als Apple ausgibt. Eine Bewerbungsseite, die eine echte Firma imitiert, wäre rechtlich heikel
und würde die Aussage kaputtmachen — ein Betrieb soll ja sehen, dass **Max** das entworfen hat.

**Gebaut:** die Formensprache. Systemschrift (`-apple-system` liefert auf Apple-Geräten SF Pro),
riesige eng laufende Überschriften, sehr viel Luft, Tafeln im Wechsel Schwarz/Weiß/Grau,
blaue Akzentzeile, ganzseitige Renderings, Datenblatt am Ende.

**Der Übergang** war Max ausdrücklich wichtig („keinen schlechten Fake"). Gelöst so:
1. Der dunkle Kapitelanfang **führt hin** und sagt, was kommt: „Ab hier übernimmt der Entwurf."
2. Dann ein **schwarzer Auftakt**, der per Verlauf aus der Kapitelfarbe `#0b0c0e` herauswächst —
   dunkel zu schwarz ist nahtlos, der Bruch fällt nicht auf.
3. Erst danach kippt es auf Weiß. Der Wechsel wirkt dadurch gewollt.
4. Am Ende führt ein Verlauf über Schwarz **zurück** in die Kapitelfarbe, gefolgt von der
   ehrlichen Einordnung im Stil des übrigen Portfolios.

**Technisch gekapselt:** Alle Klassen tragen das Präfix `ap-`, die Schriftumstellung gilt nur
innerhalb von `.ap`. Die Welt bricht per `width:100%` aus dem `.wrap` aus, liegt aber weiter
im Kapitel — die **Farbkette bleibt damit intakt** (`p-plakate` blendet weiter aus `#0b0c0e`
ein, geprüft).

### Ehrlichkeit

Auf der Seite steht am Ende des Bereichs deutlich: **keine Seite von Apple**, studentischer
Konzeptentwurf, wird nicht verkauft, Preis und Daten erfunden, Apple und M4 sind Marken von
Apple Inc., keine Verbindung dorthin. Das kostet den Effekt nichts — es kommt *nach* der Schau.

### Geprüft

| | |
|---|---|
| Seitenhöhe vor/nach dem Laden | 36950 / 36950, **Sprung 0** |
| Produktwelt volle Fensterbreite | ja (1400 von 1400) |
| Farbkette | intakt, `p-ibee` endet auf `#0b0c0e` |
| Hintergrundzeilen im Einleitungsblock | 17 px Luft |
| Querscrollen Rechner / Handy | nein / nein |
| Handy | Kacheln quadratisch, Raster brechen um, nichts läuft über |
| Einblenden | 22 von 22 (über das Auffangnetz, da der Beobachter hier einfriert) |

**Ein Fehler dabei gemacht und behoben:** Die Erinnerungskacheln reservierten 215 × 899 statt
quadratisch — `aspect-ratio` allein reicht nicht, es fehlte `height:auto` gegen die
`height`-Angabe im Bild. Dieselbe Falle wie bei den Videos, nur andersherum.

---

## 20. Doch als eigene Seite — und kürzer (14.09.2026)

Max' Korrektur zur Fassung aus Abschnitt 19, in zwei Punkten:

1. **Doch wieder eine eigene Seite.** Im Portfolio soll das Projekt normal als Projekt stehen,
   mit einem **großen Knopf** zur Produktseite — und beim Zurückkommen soll man „wieder genau
   dahin zurück" kommen.
2. **Die Produktseite war zu lang und zu eintönig:** „wirkt alles so einfach nur untereinander
   in Reihe gepackt, rechts und links ist immer so viel leerer Raum".

Der zweite Punkt war berechtigt. Die erste Fassung war eine einzige Kolonne aus mittig
gesetzten Tafeln — das ist genau *eine* von Apples Bausteinen, und wenn man nur die benutzt,
wird es lang und monoton.

### Was sich am Aufbau geändert hat

| vorher | jetzt |
|---|---|
| 9 mittige Tafeln untereinander | Auftakt, **Bento** (zwei Kacheln nebeneinander), **geteilter Abschnitt** (Bild links, Text rechts), **geteilt andersherum** plus Zahlenstreifen, **Bildband mit Text darauf**, **zwei Karten nebeneinander**, Preis, zweispaltiges Datenblatt |
| 11279 px hoch | **6184 px** — 45 % kürzer |

Alles nebeneinander statt untereinander: Dadurch verschwindet der leere Raum an den Seiten,
und die Seite wird fast halb so lang, ohne dass Inhalt wegfällt.
Am Handy bricht alles sauber auf eine Spalte um; der Text des Bildbands rutscht dann unter das
Bild, statt darüber zu liegen.

### Der Rückweg, exakt

Ein Anker allein (`#p-ibee`) bringt einen nur an den Kapitelanfang. Max wollte **genau die
Stelle** zurück, an der er weggegangen ist. Gelöst über `sessionStorage`:

- Klick auf den Knopf merkt `window.pageYOffset`
- Beim Laden der Portfolio-Seite: liegt ein Wert vor **und** ist der Anker `#p-ibee`, wird
  exakt dorthin gesprungen statt zum Anker — mit `behavior:'instant'`, sonst kämpft
  `scroll-behavior:smooth` dagegen
- Danach wird der Merker gelöscht, damit ein *normaler* Aufruf des Kapitels sich normal verhält
- Nachgefasst wird bei `load` und nach 120/450/900 ms, weil Bilder und Schriften später kommen
  und die Seitenhöhe bis dahin noch wandert

Gemessen: hingehen bei 17167, zurückkommen bei 17167 — **Abweichung 0**.

### Das Kapitel im Portfolio

Wieder ein normales Projektkapitel in der Sprache der Seite: Hintergrundtypografie, fünf
Renderings im gewohnten Raster mit Großansicht, der Projekttext — und darunter der Knopf
(`.tor`), der in Ruhe erklärt, wohin er führt. Die Seite ist dadurch von 36950 wieder auf
**27264 px** geschrumpft, also sogar etwas kürzer als vor dem ganzen Umbau.

---

## 21. Große Renderings, und die Fotos richtiggestellt (14.09.2026)

Max nach der kompakten Fassung: zu klein geworden, „wichtige Bilder sind zu klein … die
Renderings sollen teils schon sehr bildfüllend sein, vor allem auch die technischen".
Und: der Fotobereich auf Weiß gefiel ihm nicht, „weil da die Maße der Fotos so komisch sind".

### Der Fotobereich war tatsächlich kaputt

Er hatte recht, und die Ursache war ein Fehler von mir. Die Erinnerungsfotos hatte ich aus
`image16.png` bis `image19.png` der Präsentation gezogen. Das sind aber **keine Fotos**,
sondern **durchsichtige quadratische Flächen mit einem gerundeten Foto darin** — jedes in
anderer Größe und anderem Seitenverhältnis. Beim Umwandeln nach JPEG wurde die Transparenz
**weiß**. Ergebnis: Fotos, die mit ungleichen weißen Rändern in ihren Kacheln schwammen,
noch dazu gerundet in einer gerundeten Kachel.

→ **Behoben mit den Originalfotos.** In der Präsentation liegen unter `image1` bis `image15`
und `image20` die echten Aufnahmen, sauber 4:3 oder 3:4. Sechs davon wurden mittig quadratisch
beschnitten (800 × 800) und ersetzen die Montagen: türkiser See, verschneiter Grat,
Hafenstadt in der Dämmerung, Polarlicht, Katze, Pilz im Wald.
Quadratisch passt außerdem besser zum runden Bildschirm des Geräts.

```bash
# mittiger Quadratschnitt, unabhaengig vom Ausgangsformat
ffmpeg -i foto.jpg -vf "crop='min(iw,ih)':'min(iw,ih)',scale=800:800" ziel.png
```

### Bildfüllende Renderings

Die kompakte Fassung hatte die Renderings in geteilte Abschnitte gesteckt — dort waren sie nur
**542 px breit**. Für ein Produktbild, das beeindrucken soll, ist das zu wenig, besonders bei
der Röntgenansicht und dem Chip.

Jetzt laufen **acht Renderings über die volle Fensterbreite**: Text mittig darüber, darunter
das Bild ohne jede Begrenzung. Gemessen bei 1400 × 900: **1400 × 788 px, also 100 % der
Fensterbreite und 88 % der Fensterhöhe.**

Dafür wurden sie auch neu gezogen — jetzt in der vollen Quellauflösung **1920 × 1080** statt
1800 px, weil sie auf großen Bildschirmen bildfüllend laufen.

| Fassung | Höhe | Renderings |
|---|---|---|
| erste, eine Kolonne | 11279 px | mittig, begrenzt |
| kompakt (nebeneinander) | 6184 px | **542 px breit — zu klein** |
| jetzt | **10587 px** | **volle Fensterbreite** |

Länger als die kompakte Fassung, aber kürzer als die erste — und der Platz geht jetzt in die
Bilder statt in leeren Raum. Das war ausdrücklich Max' Wunsch, nachdem die Seite ohnehin
eigenständig ist.

Am Handy bleibt alles sinnvoll: Renderings 375 × 211, die Fotokacheln brechen von sechs auf
drei Spalten um, der Bandtext rutscht unter das Bild.

---

## 22. Die Renderings zugeschnitten (14.09.2026)

Max schickte einen Bildschirmfoto des Auftakts: das Produkt winzig in der Mitte, ringsum nur
Schwarz. Sein Einwand: „da ist doch alles leere Fläche darum, wieso schneidest du die Bilder
nicht zu". Dazu: die Seite überzeuge ihn insgesamt noch nicht.

**Er hatte recht, und der Fehler war grundsätzlich.** Ich hatte die Bilder bildfüllend gemacht,
aber die Bilder selbst waren fast leer. Gemessener Anteil genutzter Bildfläche:

| Bild | genutzt |
|---|---|
| Auftakt | **12 %** |
| Assistent | **17 %** |
| Bildschirme | 32 % |
| Chip | 47 % |
| Röntgenansicht | 46 % |

Ein fast leeres Bild auf volle Breite zu ziehen vergrößert nur die Leere mit.

**Erster Reparaturversuch: auch falsch.** Ich schnitt auf 16:9 zu, weil das Layout darauf
ausgelegt war. Bei hochkantem oder quadratischem Inhalt bleibt dann aber zwangsläufig seitlich
Leere — der Chip kam von 47 % auf 47 %, also null Gewinn.

**Richtig war:** auf die **natürliche Form** des Inhalts schneiden und das Layout danach
richten. Ergebnis:

| Bild | Zuschnitt | Form |
|---|---|---|
| Auftakt | 584 × 544 | quadratisch |
| Röntgenansicht | 1188 × 964 | 1,23 |
| Chip | 1096 × 1076 | quadratisch |
| Assistent | 724 × 668 | quadratisch |
| Bildschirme | 1524 × 528 | **2,89 — breiter Streifen** |
| Farben | 1920 × 988 | 1,94 |

Danach das Layout darauf abgestimmt: breite Zuschnitte laufen über die volle Breite, die
quadratischen stehen mittig mit Maximalbreite oder im Paar neben dem Text.

**Der entscheidende Kniff:** Bild- und Seitenhintergrund sind beide Schwarz. Nach dem engen
Zuschnitt ist der Bildrand damit unsichtbar — das Produkt steht scheinbar frei auf der Seite
statt in einem Kasten. Genau so machen es Herstellerseiten.

`cropdetect` von ffmpeg war dafür unbrauchbar (fand bei dunklem Produkt auf Schwarz nichts).
Ersatz: eigene Erkennung über ein Graustufenraster, Hintergrund aus den vier Ecken gemittelt.
Muster in `05-fallen.md`.

Die Seite liegt jetzt bei **8832 px**. Die Bilder sind in Pixeln teils kleiner als vorher —
aber sie zeigen jetzt zu 100 % Produkt statt zu 25 %.

**Offen und Max mitgeteilt:** Die Quellrenderings sind nur 1920 × 1080, der Auftakt enthält
davon nur 584 × 544 echtes Produkt. Für die zwei, drei wichtigsten Bilder wäre ein **neues
Rendering, eng gerahmt und hochauflösend**, der größte verbleibende Qualitätsgewinn —
Max hatte angeboten, bei Bedarf neu zu rendern.

---

## 23. Größer, dunkler, und der Text nicht mehr über dem Produkt (14.09.2026)

Max schickte drei Bildschirmfotos mit drei Einwänden. Alle drei waren berechtigt.

**1. „Immer noch nur schwarze Fläche um das Bild."**
Diesmal lag es *nicht* mehr am Bild — der Zuschnitt aus Abschnitt 22 war eng. Es lag daran,
dass ich das Bild zu klein zeigte: **640 px auf einem 1400er Fenster, also 45 %.**
Max sagte dazu: „keine Ahnung, wenn du sagen würdest dass Apple das auch machen würde, dann
lass es so." → **Würde Apple nicht.** Deren Produktbilder nehmen typisch 60–80 % der
Fensterbreite ein. Jetzt: **980 px, also 70 %.** Am Handy 87 % statt 70 %, weil die
Prozentgrenze dort zu stark griff.

**2. „Da ist der Text über der Kapsel."**
Das Wohnzimmerbild lief als Band mit Text darüber. Auf dem Bild steht das Gerät klein unter
dem Fernseher — genau dort, wo die Überschrift lag. Der Text verdeckte also ausgerechnet das
Produkt. **Die Textüberlagerung ist ganz raus**, das Bild läuft jetzt wie die anderen über die
volle Breite mit dem Text darüber. Das zugehörige CSS wurde mit entfernt, damit nichts
Ungenutztes liegen bleibt.
→ **Lehre: Text über einem Bild nur, wenn man weiß, was an der Stelle im Bild steht.**

**3. „Der Bereich mit dem Opa wirkt sehr komisch."**
Der Assistenten-Abschnitt lag auf hellem Grau — und das Rendering ist ein **schwarzes
Quadrat**. Ein schwarzer Klotz auf hellgrauem Feld, klein in der Mitte. Jetzt auf Schwarz,
womit der Bildrand wieder unsichtbar ist, und von 460 auf 680 px vergrößert.

Damit sind alle Produktabschnitte dunkel; hell bleibt nur der Preisabschnitt, wo das Rendering
selbst einen hellen Hintergrund hat — dort passt es.

---

## 24. Partikelwolke im Auftakt (14.09.2026)

Max' Wunsch: Auftaktbild etwas kleiner, dafür „voll die krasse Animation … so wie es Apple beim
HomePod gemacht hat". Erst sagte er „Wolken", dann korrigierte er: **Partikel**.

### Was gebaut wurde

Ein Canvas hinter dem Gerät, ohne jede Bibliothek:
- **Eine treibende Wolke** aus Punkten, gleichmäßig über eine Kreisfläche verteilt
  (Wurzel des Zufallswerts, sonst klumpt alles in der Mitte). Jeder Punkt hat eigenes Tempo,
  eigene Phase und einen Tiefenwert, der Größe und Helligkeit steuert.
- **Wellen**, die rhythmisch vom Zentrum nach außen laufen. Punkte im Wellenkamm werden nach
  außen geschoben und leuchten auf — das ist der „Schall, der sich ausbreitet".
- Farbverlauf von Blau über Violett zu einem warmen Akzent, additiv überlagert
  (`globalCompositeOperation='lighter'`).
- Senkrecht auf 0,72 gestaucht, damit es räumlich statt flach wirkt.

Beim Scrollen: die Wolke weitet sich (Außenkante **440 → 783 px**), die Wellen werden
schneller, Titel und Gerät wandern unterschiedlich schnell, das Gerät wächst auf 1,17.

### Drei Fallen, die dabei zuschnappten

**1. `position:sticky` brach an `overflow-x:hidden`.** Der Auftakt braucht einen klebenden
Rahmen. Auf der Seite stand `overflow-x:hidden` am `body` — genau die dokumentierte Falle.
Entfernt, nachdem geprüft war, dass ohnehin **kein Element über die Fensterbreite hinausragt**.
Danach: kein Querscrollen, und sticky funktioniert.

**2. Das Canvas war 1 × 1.** `messen()` lief einmal beim Start, da stand das Layout noch nicht.
→ Jetzt gibt `messen()` zurück, ob es klappte, wird bei `load`, per `ResizeObserver` und nach
60/250/700/1500 ms nachgefasst, und das Zeichnen misst selbst nach, wenn noch nichts da ist.

**3. Die Wolke war viel zu schwach.** Erste Fassung: **0,4 % Deckung**, mittlere Deckkraft 22 —
praktisch unsichtbar. Ursache: Punkte unter einem Pixel groß und zu dunkel.
→ Punktzahl von 700 auf 5250 (an die Fläche gekoppelt), Größe von 0,55–1,8 auf 1,25–3,95 px,
Helligkeit fast verdoppelt. Jetzt **5,9 % Deckung**, mittlere Deckkraft 61.

### Und ein Denkfehler im Ablauf

Die erste Fassung blendete beim Scrollen alles auf Deckkraft 0 aus. Ergebnis: Die Animation war
nach **halber Scrollstrecke fertig**, danach folgten 900 px schwarze Fläche, während der
klebende Rahmen noch hinausscrollte.
→ Abschnitt von 185 auf 158 svh verkürzt, und der Inhalt wird **nicht mehr ausgeblendet** —
er beruhigt sich nur (Titel auf 0,55) und scrollt dann natürlich hinaus. Kein schwarzes Loch mehr.

### Geprüft

Die Animation selbst ist hier nicht zu sehen (der Browser-Bereich friert `requestAnimationFrame`
ein). Deshalb über Bildpunkte gemessen, mit einem Haken `window.wolkeBild(p)`, der ein Bild
bei beliebigem Fortschritt erzwingt:

| Prüfung | Ergebnis |
|---|---|
| Wird überhaupt gezeichnet | 5,9 % der Fläche, hellster Punkt 255 |
| Bewegt es sich | **31,9 %** der Bildpunkte in der Mitte ändern sich in 0,7 s |
| Weitet es sich beim Scrollen | Außenkante **440 → 783 px** |
| Klebt der Rahmen | ja, kein Vorfahre mit `overflow` |
| Handy | Canvas 375 × 812, **1600** statt 5250 Punkte, 6,9 % Deckung |
| Querscrollen | keins, auch ohne `overflow-x:hidden` |

**Was nur Max beurteilen kann: ob es gut aussieht.**

---

## 25. Produkt freigestellt, Auftakt scharf (14.09.2026)

Max zur Partikelfassung: „die Partikel sind sehr gut, nur das Bild ist sehr verpixelt und
nicht ausgeschnitten, also da ist so ein rechteckiger schwarzer Rahmen um das Produkt."

Beide Punkte waren echte Fehler.

**Der schwarze Rahmen** war ein undurchsichtiges JPEG. Auf schwarzem Grund fällt so ein Kasten
nicht auf — über einer Partikelanimation schneidet er ein Rechteck heraus. Die Renderings haben
zwar einen Alphakanal, der ist aber **komplett deckend**; sie wurden auf Schwarz ausgegeben.

**Freigestellt in drei Anläufen** (Details in `05-fallen.md`): Zeilen-/Spaltenspanne ergab ein
Karomuster, Flutung vom Rand lief durch eine dunkle Lücke ins Innere — erst die **konvexe Hülle
aller hellen Punkte** saß sauber. Das Objekt ist von dieser Seite konvex, dunkle Innenflächen
bleiben damit automatisch drin.

**Die Verpixelung** war nachrechenbar: Quelle 584 px Produkt, Datei 1200 px (2,05× hochgerechnet),
Darstellung 600 CSS-px — auf Retina also 1200 echte Punkte aus 584. 

Dabei fiel auf: **Im PDF stecken höher aufgelöste Fassungen als in der Präsentation.** Eines ist
sogar 3840 × 2160. Für den Auftakt gibt es dort `bild28.jpg` mit 635 × 578, schon eng gerahmt —
nicht viel mehr, aber besser. Daraus neu freigestellt, mit Lanczos auf 952 px, dargestellt mit
500 CSS-px: **1,05× statt 2,05×.** Praktisch scharf.

→ **Merke: die Bildquellen dieses Projekts liegen an zwei Orten.** `iBee.pdf` enthält 30
eingebettete JPEGs, teils höher aufgelöst als die 28 Bilder in der `.pptx`. Vor dem nächsten
Bildtausch beide durchsehen.

Nachgemessen: Ecke des Bildes durchsichtig, Mitte deckend, **17 % der Fläche hinter dem Gerät
zeigen Partikel** — sie laufen also wirklich dahinter durch. Am Handy 263 px (70 % der Breite),
WebP mit Alphakanal, kein Querscrollen.

**Die Auflösungsgrenze bleibt:** 635 px echtes Produkt. Größer als etwa 500 CSS-px wird es
wieder weich. Ein neues Rendering, eng gerahmt und **mit transparentem Hintergrund exportiert**,
wäre weiterhin der größte Gewinn — und würde das Freistellen gleich überflüssig machen.

---

## 26. Auftakt fertig: zentriert, ruhig im Stand, Wucht beim Scrollen (14.09.2026)

Max' vier Punkte zur Partikelfassung, alle umgesetzt.

**1. Das Produkt saß nicht in der Mitte der Wolke.** Die Wolke war auf die Canvasmitte
gerechnet, das Gerät sitzt aber tiefer, weil Titel und Untertitel darüber Platz brauchen.
→ Die Wolkenmitte kommt jetzt **aus dem Gerät selbst** (`getBoundingClientRect` des Bildes,
umgerechnet in Canvaskoordinaten). Da die Scroll-Verschiebung des Geräts eine Transformation
ist, folgt die Wolke ihm automatisch. Gemessen: **Abweichung 1–3 px.**

**2. Preiszeile entfernt.** Sie lag mitten in den Partikeln und war kaum lesbar. Der Preis
steht ohnehin zweimal weiter unten.

**3. Titel bekommt einen Auftritt.** Größer (bis 116 px statt 100), mit Einblenden beim Laden
(Titel, dann versetzt der Untertitel). Beim Scrollen **schrumpft der Titel auf 0,86 und steigt**,
während das **Gerät von 0,88 auf 1,18 wächst** — der Entwurf tritt aus dem Titel hervor.

**4. Ruhe im Stand, Wucht beim Scrollen.** Vorher liefen die Wellen immer gleich stark.
Jetzt gibt es einen **Schwung**, der sich beim Scrollen auflädt und abklingt:
```js
window.addEventListener('scroll',function(){
  schwung=Math.min(1,schwung+Math.abs(y-letzteHoehe)*0.010); },{passive:true});
// je Bild:  schwung*=0.945;   kraft=0.10+schwung*0.95;
```
`kraft` steuert Wellentakt, Schub und Aufleuchten. Das Atmen der Punkte ist im Stand halbiert.

**Ein Denkfehler dabei:** Zuerst merkte sich jede Welle ihre Kraft **beim Entstehen**. Dadurch
blieben laufende Wellen schwach, wenn man zu scrollen anfing — der Ausschlag kam erst mit der
nächsten Welle, also bis zu 2,6 s später. Jetzt lesen die Wellen die **aktuelle** Kraft, der
Ausschlag kommt sofort.

### Gemessen

| | im Stand | beim Scrollen |
|---|---|---|
| aufleuchtende Partikel | 780 | **5125 — 6,6×** |
| Gesamthelligkeit | 1088 | 1945 (1,8×) |
| Außenkante der Wolke | 431 px | 451 px |

Danach fällt alles wieder auf den Ruhewert (850 / 1104 / 431).

**Wichtig für künftige Prüfungen:** In diesem Browser-Bereich **feuern überhaupt keine
Scroll-Ereignisse** — `pageYOffset` ändert sich, aber kein `scroll` kommt an. Alles, was an
Scrollen hängt, muss über `window.dispatchEvent(new Event('scroll'))` von Hand ausgelöst
werden. Steht in `05-fallen.md`.

---

## 27. Weiche Wolkenkante und der Schriftzug, der sich tauscht (14.09.2026)

Zwei letzte Wünsche von Max zum Auftakt.

### Die Wolke hatte am Anfang eine harte Kante

Die Punkte lagen gleichverteilt in einer Kreisfläche — dadurch endete die Wolke abrupt.
Gemessen als Helligkeit je Ring von innen nach außen:

| Ring | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| vorher | 13 | 11 | 11 | 11 | 10 | 11 | **11** | **3** | 0 |
| jetzt | 12 | 12 | 10 | 10 | 9 | 8 | 5 | 3 | 1 |

Vorher brach es von 11 auf 3 auf 0 ab. Jetzt läuft es über fünf Ringe aus.

Umgesetzt mit einem weichen Abfall, der **nur am Anfang lang ist** und sich beim Scrollen
zusammenzieht — Max wollte den Rest ausdrücklich unverändert:
```js
var weichAb=0.34+p*0.34;                  // zu Beginn frueher ausfransen
var f=q.r<=weichAb ? 1 : Math.max(0,1-(q.r-weichAb)/(1.06-weichAb));
f=f*f*(3-2*f);                            // sanfte Kurve
```
Dazu die Wolke am Anfang größer (`0.58-p*0.12` statt fest `0.46`) und die Punkte reichen mit
`*1.06` etwas über den alten Rand hinaus, damit der Verlauf Platz hat.

**Dabei ein Nebeneffekt, der nachgemessen werden musste:** Dieselbe Punktzahl auf größerer
Fläche wirkt blasser — der Kern fiel von 13 auf 7. Ausgeglichen mit mehr Punkten
(`B*H/185` statt `/240`, jetzt 6811 statt 5250) und etwas mehr Helligkeit. Kern jetzt 12.

### Der Schriftzug tauscht sich beim ersten Scrollen

Max' Idee: Ganz oben steht **iCapsule**, sobald man leicht scrollt, wird daraus
**Erinnerungen neu erleben.** — in derselben Größe, am selben Platz. Der Untertitel als eigene
Zeile entfällt damit.

**Gelöst über ein Rasterfeld**, in dem beide Schriftzüge übereinanderliegen:
```css
.auftakt__titel{display:grid;align-items:center;justify-items:center}
.auftakt__titel>*{grid-area:1/1}
```
Damit bestimmt der längere Text die Höhe, und beim Tausch springt nichts — nachgemessen:
Titelhöhe **233 px am Rechner und 96 px am Handy, vor und nach dem Tausch identisch**.
Mit absoluter Positionierung hätte man die Höhe raten müssen.

Der Tausch läuft weich über Deckkraft, eine leichte Skalierung und einen kurzen Weichzeichner
in beide Richtungen:
```js
var wechsel=Math.min(1,Math.max(0,(p-0.015)/0.085));
wechsel=wechsel*wechsel*(3-2*wechsel);
```
Gemessen: bis 50 px Scrollweg steht iCapsule allein, ab etwa 90 px ist der Spruch da,
ab 160 px vollständig getauscht. Die ersten ~47 px passieren nichts, weil der klebende Rahmen
erst unter der Leiste hervorkommen muss — das fühlt sich richtig an, weil es dem „ganz oben"
entspricht, das Max beschrieben hat.
