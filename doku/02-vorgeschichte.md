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
