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
