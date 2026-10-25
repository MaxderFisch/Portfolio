# Stand

## 25.10.2026 — Kopfleiste „Über mich" + eigene Seite `site/ueber-mich.html` (lokal)

Max (diktiert, mit Selbstkorrekturen): Oben rechts soll auf **allen** Seiten statt „Kontakt" etwas wie „Infos zu mir / zur Person"
stehen, daneben der kleine Pfeil nach unten mit Menü. Im Menü **Deutsch/Englisch raus**, dafür ein Knopf zur neuen Seite.
Auf der Startseite nicht sein Foto im Knopf, sondern das schwarz-weiße Symbol von der Filme-Seite. Die neue Seite: ein Bild von ihm,
darunter/daneben ein schlichter Text, „einfach vollständigkeitshalber". Danach schickte er einen Screenshot von der Seite eines
Freundes (Foto links, Text rechts) mit dem Hinweis: **nicht erkennbar kopieren**, nur den Umfang übernehmen, Text aus seinen Punkten.

Umsetzung:
- **Wort oben:** „Über mich" / „About me". Grund: kurz und üblich; Max hatte „Infos zu mir oder zur Person oder so" vorgeschlagen,
  also unentschieden. Leicht zu ändern (`about:` in `L` von Startseite und Video, Klartext in Navi und icapsule).
- **Startseite + Filme:** Textlink oben führt nach `ueber-mich.html` (vorher `#kontakt`). Menü: „Über mich", (Startseite zusätzlich
  „Profil wechseln", das führt zur Profilwahl, wo man weiterhin die Sprache wählt), „Kontakt" (mailto). Die DE/EN-Liste mit Bildern
  ist raus. Startseite-Knopf zeigt jetzt `assets/profil-icon.png` statt `ueber-mich/max-1.webp`. Filme-Seite: Sprache bleibt über
  die Knöpfe im Fuß wählbar. `imgs`/`profs` im Code stehen noch, werden aber nicht mehr angezeigt.
- **Navi.dc.html** (Menschen, Fotos, Korea, Drohne, 3D): rechts jetzt „Über mich" (ab 900 px) + Symbol mit Pfeil, Menü mit
  „Über mich" und „Kontakt". Eigener Zustand `prof`, schließt sich wie „Entdecken" beim Klick daneben; beide Menüs schließen sich gegenseitig.
- **live/icapsule.html:** „Kontakt" in der statischen Leiste durch „Über mich" ersetzt (kein Menü dort).
- **Neue Seite `site/ueber-mich.html`:** statisch, dunkel, General Sans, rotes Logo oben. Foto `ueber-mich/max-1` (mit Drohne bei
  Sonnenuntergang) links, Text rechts; unter 760 px untereinander, Foto dann höchstens 60svh. `<picture>` mit WebP + neuem JPEG
  `ueber-mich/max-1.jpg` (aus der WebP, 1051×1400, q62, 119 KB). Englisch, wenn `mx-lang` = en.
  Text bewusst eigenständig zum Vorbild des Freundes (kein Zitat, keine Kapitelzeile, kein „Philosophie"):
  „Hey, ich bin Max" / 21, fünftes Semester Medientechnik an der TH Deggendorf, gerade Auslandssemester in Südkorea /
  studiert das, weil er machen will, was ihm Spaß macht und was er cool findet; weiß nicht alles, weiß sich aber zu helfen /
  fast alles hier ist im letzten Jahr entstanden. Die Variante „erste Kamera vor ein paar Monaten" **nicht** genommen, weil Max sie
  nur als Alternative nannte. Darunter „← Zurück zur Startseite · Schreib mir" und klein Impressum/Datenschutz.
- Sicherungen `Portfolio/archiv/{startseite-stream,video,navi,icapsule}.2026-10-25-vor-ueber-mich.html`.
- Geprüft: Klammern/divs/sc-if/Skripte aller 5 Dateien; im Browser Menüinhalte auf Startseite, Filme, Menschen per Klick ausgelesen,
  Startseiten-Knopf zeigt das Symbol; neue Seite bei 1280 px nebeneinander und bei 648 px untereinander angesehen, Englisch-Umschaltung.
  **Nicht hochgeladen.**

---

## 25.10.2026 — Startseite: Kartentitel in den Reihen „Natur" und „3D & Design" ausgeblendet (lokal)

Max: Unter den Bildern dieser zwei Reihen sollen keine Namen stehen (z. B. „Goldene Stunde", „Toms Büro"), „ändere nichts außer" das.
Umsetzung: In `renderVals` ist `hasT` für Karten der Reihen `natur` und `design` immer falsch. Die Namen bleiben in den Daten,
damit das Vorschaufenster beim Drüberfahren seine Titel behält. Alle anderen Reihen unverändert (geprüft: Projekte, Aus der Luft,
Südkorea, Filme zeigen ihre Titel, Natur und 3D & Design keine). Sicherung `archiv/Startseite Stream.dc.2026-10-25-vor-kartentitel.html`.
**Nicht hochgeladen.**

---

## 25.10.2026 — Impressum und Datenschutz (Minimalfassung, lokal)

Max wollte „auf die Schnelle das Minimum" und gab dafür seine Anschrift: **Euzersdorf 8e, 94121 Salzweg** (Gemeinde
Salzweg, Landkreis Passau). E-Mail `maxau.aulo@gmail.com`.
- Neu: `site/impressum.html` (Name, Anschrift, E-Mail, Hinweis zu eigenen Inhalten) und `site/datenschutz.html` (Verantwortlicher,
  keine eigenen Cookies/Tracking, Browser-Speicher nur Sprache/Übergänge, GitHub Pages, Fontshare + unpkg, YouTube erst auf Klick,
  E-Mail, Rechte inkl. BayLDA Ansbach, Stand Oktober 2026). Schlichte statische Seiten **ohne** fremde Schriften oder Bibliotheken,
  `noindex`, rotes Logo mit festen Maßen.
- Links „Impressum · Datenschutz" in der ©-Zeile von Startseite, Filme, Menschen, 3D, Drohne. Korea bekam dafür eine ©-Zeile wie
  die anderen („Südkorea"). Fotos: kleiner Link unten links. iCapsule: unter „Zurück zu 3D & Design".
- ~~Offen: voller Name?~~ Max: „ne das passt", also **„Max Aulinger" bleibt**. Texte sind meine
  Minimalfassung, keine Rechtsberatung. Empfohlen: mit einem Generator gegenprüfen, später Schriften/React selbst hosten.
- Sicherungen `archiv/*.2026-10-25-vor-impressum.html`. Geprüft: beide Seiten 200, je ein Link auf allen 8 Seiten, Korea-Fuß im
  Browser. **Hochgeladen** auf Max’ ausdrückliches „lade es hoch" (enthält seine Wohnadresse).

---

## 25.10.2026 — Frage Impressum/Datenschutz (nur Auskunft, nichts gebaut)

Max fragte, wie nötig ein Impressum für eine Bewerbungsseite ist. Meine Einschätzung (keine Rechtsberatung): Name + Anschrift
sind sehr wahrscheinlich nötig (§ 18 Abs. 1 MStV, die Seite ist öffentlich und nicht rein privat). Das volle Impressum nach § 5 DDG
ist eine Grauzone, spätestens bei bezahlten Aufträgen aber Pflicht. Wichtiger als das Impressum: eine **Datenschutzerklärung**,
weil die Seite fremde Dienste lädt. Geprüft am 25.10.: **Fontshare** (fast alle Seiten, `seitenwechsel.js`), **unpkg.com**
(React/Laufzeit in `support.js`), **YouTube**-Einbettung auf der Filme-Seite (lädt erst auf Klick, `youtube.com` statt
`youtube-nocookie`), dazu GitHub Pages selbst (Server-Logs). Kein Google Fonts mehr in `site/`. Vorschlag an Max: Impressum- und
Datenschutz-Seite, Schriften und React selbst hosten, YouTube auf nocookie. Offene Entscheidung: welche Adresse ins Impressum.

---

## 25.10.2026 — „Leberkassemmel-Debakel", dann alles von heute hochgeladen

Max: „Leberkas-Semmel ohne Bindestrich zusammengeschrieben" → Folge heißt **„Leberkassemmel-Debakel"** (der Bindestrich vor
„Debakel" bleibt). Dann: „lade bitte wieder alle Änderungen von heute auf GitHub hoch".
Hochgeladen: `site/Menschen.dc.html`, `site/Korea v3.dc.html`, `site/3D Design.dc.html`, `site/Drohne v5.dc.html`,
`site/Video.dc.html`, `site/Startseite Stream.dc.html`, `doku/04-stand.md`. Vorher alle sechs geprüft (Skript ok, Tags
ausgeglichen, alle verwendeten Dateien vorhanden). **Nicht dabei:** `site/update-handy/` (neu, nicht von mir: Kopien von
„3D Design" und „Korea v3" vom 23.10. 15:52, Max gefragt), Archiv-Sicherungen, die verworfenen Foto-Testseiten,
`site/render/` und das Übrige wie bisher.

---

## 25.10.2026 — Lange Texte nur im Infofenster, oben und im Vorschaufenster wieder kurz

Max: Die langen Texte standen jetzt auch **groß über dem Showreel** und verdeckten zu viel. Sie gehören nur ins Infofenster
(„Mehr Infos"), oben sollen „wieder so kurze kleine Wörter wie davor" stehen.
Lösung: Neues Feld **`short`** (Filme-Seite, Startseite `P`) bzw. **`xs`** (Startseite-Karten mit eigenem `x`). Showreel oben
und Vorschaufenster zeigen `short || txt`, das Infofenster weiter `txt`/`x` (lang).
- Filme-Seite: Imagefilm `short` = alter Satz „Imagefilm für den Studiengang Elektrotechnik unserer Hochschule, gedreht mit der
  ARRI Alexa Mini." Doschauher `short` = „Eine Live-Show unserer Hochschule." Bergmann, Hostage, Bienen, Kommt sind ohnehin kurz.
- Startseite: iCapsule `short` = alt „Mein erstes Projekt im Studium: ein eigenes Apple-Produkt, komplett in Blender.", Therme
  `short` = alt „Mein erster bezahlter Job: eine Unterwasser-Animation für die Wand der Therme.", Flyer `short` = „Die zweite
  Aufgabe war ein Flyer, gemacht in Illustrator und InDesign." (der alte „nie wieder Adobe"-Satz bewusst nicht), Imagefilm-Karte
  `xs` wie oben.
**Merke:** Showreel-Texte (Hero) sind Kurztexte. Lange Beschreibungen nur ins Infofenster.
Sicherungen `archiv/*.2026-10-25-vor-kurztexte.html`. Geprüft: oben Imagefilm/Doschauher/iCapsule/Therme kurz, Infofenster
Imagefilm/Therme lang. **Nicht hochgeladen.**

---

## 25.10.2026 — Filme-Seite: Texte nach Max, Folgen umbenannt, Fuß wie überall; Startseite übernimmt alle neuen Texte (lokal)

`site/Video.dc.html` (Sicherung `archiv/Video.dc.2026-10-25-vor-texte.html`), Inhalte von Max (Sprachnachricht):
- Bergmann: Meta „Doku · Ton · 5:48" → **„Doku · 5:48"**, Text bleibt.
- Imagefilm: Meta **„Imagefilm · 3:01"**. Text: mit erfahrenen Studenten, viel gelernt, Szenenbild, aber überall mit angepackt,
  ARRI Alexa Mini, „bis jetzt mit Abstand mein professionellster Dreh". (Max erwähnte auch Kostüm/Make-up, wollte es aber nur
  als „Szenenbild" zusammengefasst.)
- Bienen: Meta **„Doku · 1:14"**, Text **„Kein direktes Projekt, sondern einfach eine kleine filmische Dokumentation im eigenen
  Garten."** (vorher leer, Meta „Doku · im Team · Studium" war falsch).
- Doschauher: Text „Eine Live-Show unserer Hochschule. Ich war im Einspieler-Team und der zuständige Kameramann für die
  Einspieler, die zwischendrin gelaufen sind." **Folgen umbenannt:** S1 Auto → **Parkplatzproblem**, Theke →
  **Leberkas-Semmel-Debakel**, Schutzbrille → **Versuchsaufbau**, Regal → **Ladendiebstahl 1**, Maskiert → **Ladendiebstahl 2**.
  S2: Überwachungskamera bleibt, Reportage → **Außenreporter**, Handyaufnahme → **Maskierter Zeuge**. (IDs/Dateinamen
  unverändert, z. B. `ep-auto`, `auto.mp4`.)
- Hostage Holiday: Meta **„Stummfilm · 2:18"**, Text **„Mein allererstes Filmprojekt im ersten Semester, noch ganz ohne Erfahrung."**
- Kommt zu mir: Meta **„Personenporträt · 5:17"**, Text **„Mein zweites Filmprojekt im zweiten Semester."** (Jugendseelsorger raus).
- Weitere Videos: „Kugeln im Park" → **„Blender-Projekte"** (Text „Weitere kleine Projekte in meinem Lieblingsprogramm.").
  Therme: neues Vorschaubild **`therme-doku-poster.webp`** (aus dem Film vor Ort, 16:9 unverzerrt). Das alte `thumb/therme-cover`
  ist ein Standbild der 2756×384-Animation, in 16:9 gequetscht.
- Fuß: statt „Kontakt / Schreib mir. / E-Mail" jetzt dieselbe Zeile wie überall: „← Zurück zur Startseite · Schreib mir" (de/en über
  `L.home2`/`L.mail2`). Unten bleiben ©, Deutsch/English und „Nach oben".
**Startseite** (Max: Texte, die dort auch vorkommen, mitnehmen; Sicherung `archiv/Startseite Stream.dc.2026-10-25-vor-texte.html`):
  Infofenster-Texte von Menschen, iCapsule, Plakate, Erste bezahlte Arbeit, Blender, Flyer = die neuen Seitentexte (de) + von mir
  übersetzt (en). Filme-Reihe: Metas und Texte wie auf der Filme-Seite. FPV-Karten: „In den Bergen", „Durch den Schnee",
  „Auto-Rallye". Therme-Bild (Bereich und Karte) → `therme-doku-poster.webp`.
  **Offen/nicht angefasst:** Text des Bereichs „3D & Design" ist noch „Blender ist mein absolutes Lieblingsprogramm.", Meta
  „FPV · Schulprojekt · Bayerischer Wald" beim Papierflieger, Korea-Kartentitel (Krieger …) und „FPV-Flug" in „Weitere Videos"
  der Filme-Seite. Max gefragt.
Geprüft: Reihen und Folgennamen, Infofenster Imagefilm, Fuß im Browser ausgelesen. Tags ausgeglichen. **Nicht hochgeladen.**

---

## 25.10.2026 — Drohne: Texte und Beschriftungen aufgeräumt, „Flieg mit mir" am Handy höher (lokal)

Max: Die Drohnen-Seite ist etwas veraltet, bleibt aber gestalterisch, wie sie ist. Nur:
- „Flieg mit mir." → **„Flieg mit mir"** (beide Startvarianten). Am Handy saß der Schriftzug zu tief. **Ursache:** Der Abschnitt
  hatte `height:100vh`. Am iPhone ist das höher als der sichtbare Bereich (Adressleiste). Jetzt `100vh;100svh` wie die anderen
  Seiten, und am Handy unten 72 px Abstand (`heroPadB`, vorher clamp 24–44 px). Gemessen 375×812: Unterkante 72 px über dem Rand.
- **Kleine Beschriftungen weg:** „Projekt 11 · Zeitraffer · DJI Mini 4 Pro", die Abschnitts-Kopfzeilen „01 — Der Anfang · DJI Mini
  2", „02 — Der Umstieg · FPV · von Hand", „Projekt · Schule · Bayerischer Wald", „03 — Geliehen …", „04 — Heute · Antippen für
  Details" (Text weg, Trennlinie bleibt), „Im Urlaub · senkrecht nach unten / DJI Mini 2", „Das Haus am Ende der Landzunge /
  Mini 2", „Die Küste entlang / Mini 2", „Zeitraffer aus der Luft", „Im Nebel", „Noch ein Zeitraffer", „▶ FPV · 2:23".
  **Bleiben:** die großen Deko-Wörter „90°" und „Zeitraffer" auf den Zoom-Bildern, die Kamera-Anzeigen im FPV-Player (REC,
  CH 01/03, Zeit) und die Equipment-Karten. Max darauf hingewiesen.
- FPV-Text „Bei FPV sehe ich durch eine Brille …" entfernt.
- FPV-Clips: „Winter in den Bergen" → **„In den Bergen"**, „Autos über Feldwege" → **„Auto-Rallye"**, „Durch den Schnee" bleibt,
  **alle Unterzeilen weg**. Knopf „Ton an" entfernt (Clips bleiben stumm).
- Papierflieger: Punkt weg. Text jetzt nur **„Entstanden in einer Projektwoche unserer Schule."**
- Satz „Mit jedem Flug bin ich besser geworden … Das ist mein Stand heute." entfernt. „Equipment." → **„Equipment"**.
- Schluss: statt „Danke fürs Mitfliegen / Zurück zum Portfolio →" und „Max Aulinger · Schreib mir →" jetzt **derselbe Fuß wie auf 3D**:
  „← Zurück zur Startseite" · „Schreib mir", darunter „© 2026 Max Aulinger · Drohne & FPV". Der Abschnitt behält
  `data-am="LAND"` (Höhenanzeige 0 m).
- Nicht angefasst: die Texte t1–t3 (Max fand sie gut. Sie enthalten noch Gedankenstriche „—", falls er die später loswerden will).
Sicherung `archiv/Drohne v5.dc.2026-10-25-vor-texte.html`. Tags ausgeglichen, Abschnittstexte im Browser ausgelesen.
**Nicht hochgeladen.**

---

## 25.10.2026 — Plakate-Text: Illustrator und Photoshop

Max: Bei den politischen Plakaten waren nicht Illustrator und InDesign vorgesehen, sondern **Illustrator und Photoshop**.
Neu: „Eigentlich waren hier Illustrator und Photoshop vorgesehen. Weil ich Blender aber viel lieber mag, habe ich die
Plakate trotzdem darin gemacht." Das „auch" ist weggefallen, weil die Programme jetzt andere sind als beim Flyer.
**Nicht hochgeladen.**

---

## 25.10.2026 — Flyer-Text: Schluss gekürzt

Max: „beim letzten Muster sogar die meisten. Seitdem fühle ich mich … eingeschränkt. Ich kann es noch ganz gut, aber …" wirkt
komisch. Stattdessen: „Heutzutage benutze ich diese Programme eher ungern." (sein Satz). Damit „diese Programme" einen
Bezug hat, steht vorne jetzt „in Illustrator **und InDesign** verbracht". **Nicht hochgeladen.**

---

## 25.10.2026 — 3D & Design: Texte neu, Punkte und kleine Beschriftungen weg, „Zurück zur Startseite" (lokal)

Max wollte Texte, die **nicht KI-generiert wirken**, „aber trotzdem nicht scheiße klingen", und nicht länger als vorher.
Meine Regeln dafür: Ich-Form, kurze Sätze, locker; **keine** Gedankenstriche, keine Doppelpunkt-Aufzählungen,
keine „nicht nur … sondern", keine Werbewörter. Inhalte von Max vorgegeben (Sprachnachricht):
- **iCapsule:** Produktbeschreibung bleibt, **neu:** vom HomePod inspiriert, Apples Designsprache übernehmen wollen.
- **Flyer:** alles ausprobiert, bei Mustern an Grenzen gestoßen, Linien per Hand (letztes Muster fast komplett),
  fühlt sich eingeschränkt, kann es noch, nutzt es ungern.
- **Plakate:** eigentlich Illustrator/InDesign vorgesehen, Blender aber viel lieber, deshalb trotzdem Blender.
- **Erste bezahlte Arbeit:** statt Aufzählung des Gezeigten (Muschel, Fischschwarm …) jetzt: viele Techniken
  ausprobiert, ewig herumgespielt, Probleme. Wegen der Lichtreflexionen nur einfache Qualität, realistisch hätte der
  Rechner mehrere Tage rendern müssen, dafür war die Zeit zu knapp.
- **Blender-Abschnitt:** statt „Blender ist mein absolutes Lieblingsprogramm." jetzt „Weitere kleine Projekte in meinem
  Lieblingsprogramm" (ohne Punkt, Blender-Logo darüber bleibt).
- Punkte weg bei „Eigenes Apple-Produkt", „Flyer", „Politische Plakate", „Erste bezahlte Arbeit".
- **Kleine Beschriftungen weg:** Kopfzeilen über den Abschnitten („iCapsule · Erstes Semester · Blender" usw.;
  Text weg, die dünne Trennlinie bleibt), „In Blender · gedruckt und ausgestellt", „Vor Ort in der Therme", „Die
  Animation · Original / 2756 × 384", alle Beschriftungen unter den Blender-Arbeiten (Toms Büro, Syntheca, Kugeln im
  Park …). Plakate: **Titel bleiben** (Rechts ist nie ein Weg, Where your bubble ends, Kein Platz für Nazis), die
  Unterzeilen (3D-Typografie, Typografie, Verzerrte Schrift) sind weg. Großansicht: nur bei den drei Plakaten der Titel,
  sonst nichts.
- Fuß: „← Zurück zur Übersicht" → „← Zurück zur Startseite". **Korea:** dort wieder ein Link „← Zurück zur Startseite"
  vor „Schreib mir" (gleicher Stil wie der entfernte „Zurück zum Portfolio"). Menschen hat noch „Zurück zur Übersicht".
  Nicht angefasst, Max gefragt.
Sicherungen `archiv/3D Design.dc.2026-10-25-vor-texte.html`, `archiv/Korea v3.dc.2026-10-25-vor-startseite-link.html`.
Geprüft: alle Abschnittstexte wie oben ausgelesen, keine Kleinbeschriftungen, Großansicht Blender ohne Text, Plakat
mit Titel, Fuß „← Zurück zur Startseite | Schreib mir". **Nicht hochgeladen.**

---

## 25.10.2026 — Knopf „Alle Bilder ansehen" / „Zu den Projekten" erscheint verzögert (lokal)

Max: Bei Menschen soll der Knopf erst erscheinen, „wenn die Startanimation durch ist, also erst nach so 1 sec".
Dann: „bei den anderen Seiten auch erst nach so 1,5 sec".
- Knopf startet überall mit `opacity:0; pointer-events:none` (Merkmal `data-k="mehr"`), `showMehr(delay)` blendet
  700 ms weich ein und macht ihn klickbar. Den Zeitgeber räumt `componentWillUnmount` auf.
- **Menschen:** 1 s nach Ende der Startanimation (letzte Karte im Ring, `onfinish`). Die Startanimation selbst
  dauert ~3,6 s nach dem Bilder-Entpacken (bis 1,5 s Wartezeit), also insgesamt ca. 4,6–6 s nach dem Laden. Bei
  Ankunft per Seitenwechsel (`arrive`, keine Startanimation): nach 1 s. Bei reduzierter Bewegung sofort.
- **Korea / 3D & Design:** 1,5 s nach Start des Vorspann-Videos (`afterCover` → `startVid` + `showMehr(1500)`).
- Gedeutet: Bei Menschen „1 s nach Ende". Falls Max „1 s nach dem Laden" meinte, ist es ein Wert. **Max gesagt.**
Sicherungen `archiv/*.2026-10-25-vor-knopf-spaeter.html`. Gemessen (Vorschau verdeckt, Zeitgeber gedrosselt):
Korea erscheint nach 1,5 s, 3D ~2 s nach Messbeginn, Menschen nach 6,1 s (inkl. 1,5 s Entpack-Wartezeit),
danach jeweils klickbar. **Nicht hochgeladen.**

---

## 25.10.2026 — Texte: Fotos (nichts), Korea aufgeräumt, Pfeil-Knopf auf Menschen und 3D (lokal)

**Fotos:** Laut Max kein Text, nichts geändert.
**Korea** (`site/Korea v3.dc.html`, angezeigte Variante B):
- „Alle Bilder." → „Alle Bilder"
- „Ziehen, um alles zu sehen" entfernt (in der nicht angezeigten Variante A steht es noch, unsichtbar)
- „← Zurück zum Portfolio" entfernt, „Schreib mir" bleibt
- Gruppen-Überschriften auf der Bildfläche (`labels`, z. B. Krieger, Möwen, Am Meer, Seoul bei Nacht) entfernt
- Ebenso die Beschriftung oben links beim Vergrößern (`data-k="cap"`: Gruppenname + Bildtitel wie „Der pinke
  Schirm", „Goldenes Licht"). Das ist von mir als „kleine Überschriften" gedeutet und Max so gesagt. Die `CAP`-Texte
  stehen noch im Code.
**Knopf „Alle Bilder ansehen ↓"** (weiße Pille, schwarze Schrift, wippender Pfeil, unten rechts im Startbereich), so wie
auf Korea:
- Menschen: neu im Startbereich, Ziel `#bilder` (neue ID an der Bilder-Sektion), sanftes Scrollen (`toBilder`),
  Pfeil-Animation in `componentDidMount` wie bei Korea.
- 3D & Design: Der bisherige kleine Textlink „Zu den Projekten ↓" hat jetzt **genau das Aussehen** des Korea-Knopfs.
  Text bleibt „Zu den Projekten" (passt dort besser), Ziel und Wipp-Animation unverändert. Max darauf hingewiesen.
Sicherungen `Portfolio/archiv/*.2026-10-25-vor-texte-2.html`. Geprüft bei 1440×900: Korea-Fläche zeigt nur „Alle
Bilder", 0 Labels, kein Hover-Text, Fuß nur „Schreib mir". Menschen- und 3D-Knopf je 40 px rechts / 45 px unten,
Hintergrund #f2f2f2, Pfeil wippt, Klick scrollt genau zu den Bildern bzw. Projekten. **Nicht hochgeladen.**

---

## 25.10.2026 — Menschen: neuer Satz von Max

Max hat meine Vorschläge abgelehnt („neh, eher so") und selbst formuliert: „Ich liebe es mit coolen Bildern Leuten
eine Freude zu bereiten". Übernommen, nur Rechtschreibung angepasst (Komma, „Bildern"):
**„Ich liebe es, mit coolen Bildern Leuten eine Freude zu bereiten."** (`words` in `site/Menschen.dc.html`).
Geprüft: 11 Wörter, das Wort-für-Wort-Einfärben bleibt. **Merke:** Max formuliert lieber selbst, locker und
umgangssprachlich („coole Bilder"). Meine Vorschläge waren ihm zu gestelzt. **Nicht hochgeladen.**

---

## 25.10.2026 — Texte überarbeiten, Seite für Seite. Start: Menschen (lokal)

Max: Die Texte sind KI-generiert und sollen jetzt **Seite für Seite** überarbeitet werden. Start mit **Menschen**
(wenig Text). Ausdrücklich „mach nichts anderes".
1. Große Überschrift ohne Punkt: „Menschen." → **„Menschen"**. Max’ Regel: Bei dicken Überschriften bzw.
   Wörtern dieser Art kommt der Punkt weg. Er erwähnte, dass andere Seiten das auch haben. Die kommen erst dran,
   wenn wir bei ihnen sind. (Hinweis für später: Bei Korea und 3D ist „Südkorea." / „Design." Teil der
   gerenderten Videos.)
2. **Namen weg**: Bei manchen Bildern standen Namen (Timo, Ares, Gabriel, Paul, Robin), bei anderen „Südkorea",
   bei manchen nichts. Max fand das uneinheitlich, also überall nichts. Beschriftung beim Drüberfahren
   (`figcaption`), Name in der Großansicht und `alt` geben jetzt leer aus (`name: ''`, `lbName: ''`). **Die Namen
   bleiben intern in `F`** als Wissen, wer auf welchem Bild ist. Der `alt` vom Augen-Bild („Älterer Mann in
   Südkorea", unsichtbar) bleibt unverändert.
3. Satz „Ein Foto machen. Es zeigen. Und sie freuen sich." wirkt komisch. Max will **Vorschläge** und hat sich noch
   nicht entschieden. Sinn laut Max: „du kannst einfach von vielen Menschen coole Bilder machen und ihnen zeigen,
   und sie freuen sich dann". **Noch nicht geändert.**
Sicherung `Portfolio/archiv/Menschen.dc.2026-10-25-vor-texte.html`. Geprüft: Überschrift „Menschen", 19 Bilder,
keine Beschriftung mit Text, Großansicht ohne Namen. **Nicht hochgeladen.**

---

## 22.10.2026 — „beste" → „bessere"

Max: „ändere beste zu bessere, aber ändere sonst nichts". Nur das deutsche Wort im Handy-Hinweis geändert:
„Für das bessere Erlebnis / bitte am PC oder Tablet ansehen." Die englische Zeile („best experience") bleibt,
wie alles andere. Diff: genau eine Zeile. ~~Nicht hochgeladen~~ → **Hochgeladen** auf Max’ „ja" (Commit `9c717f1`),
live geprüft: Seite liefert „Für das bessere Erlebnis" (Handy) und „Wer schaut zu?" (groß) aus. (Vermerk nur lokal.)

---

## 22.10.2026 — Hinweis nur auf Handy-Bildschirmen, sonst wieder „Wer schaut zu?" (lokal)

Max: Lässt sich erkennen, ob Computer oder Handy? Dann den Hinweis **nur am Handy** zeigen. Am Computer und Tablet
ist er irrelevant, dort wieder die alte Frage. (Damit ist die offene Frage „was meinte er mit löschen" vermutlich
beantwortet: Am Computer sollte der Hinweis weg.)
Umsetzung in `site/Startseite Stream.dc.html` (Profilauswahl): zwei Blöcke `data-frage="gross"` (h1 „Wer schaut
zu?" + „Who’s watching?", **genau die alten Stile**, siehe `archiv/…vor-handy-hinweis.html`) und `data-frage="handy"`
(der zweizeilige Hinweis). Steuerung per CSS im `<helmet>`-Stil: Handy-Block standardmäßig aus, bei
`(max-width:699px)` **oder** `(max-height:500px) and (pointer:coarse)` (quer gehaltenes Handy) umgekehrt.
Erkannt wird also die Bildschirmgröße, nicht das Gerät. Tablets (ab 744 px) zählen als groß. Keine CSS-Klassen
(die Seite nutzt keine), sondern Attribut-Selektoren. Eine HTML-Notiz im Template habe ich zur Sicherheit wieder
entfernt. Sicherung `archiv/Startseite Stream.dc.2026-10-22-vor-handy-nur.html`.
Geprüft: 1440 px und Tablet 768×1024 → „Wer schaut zu? | Who’s watching?", Handy 375 px (Touch) → nur der
Hinweis. Quer gehaltenes Handy nicht emuliert (Werkzeug setzt Touch erst unter 768 px). ~~Nicht hochgeladen~~ →
**Hochgeladen** auf Max’ „ja" (Commit `e00cf12`), **live geprüft**: 1440 px „Wer schaut zu? | Who’s watching?", Handy 375 px
nur der Hinweis. (Vermerk nur lokal.)

---

## 22.10.2026 — Missverständnis: Umbruch wiederhergestellt

Max: „ne, schon zweizeilig". Mein Entfernen des Umbruchs (`6b394ff`, Eintrag darunter) war **falsch gedeutet**,
das ist überholt. Zweizeilige Fassung wiederhergestellt und hochgeladen. **Offen:** Was meinte Max mit „lösch das
bitte wieder raus"? Nachgefragt, nichts weiter geändert.

---

## 22.10.2026 — Zeilenumbruch im Hinweis wieder entfernt

Max: „ne, lösch das bitte wieder raus und lade es hoch". Gedeutet als: der eben eingefügte Umbruch (`<br>`) soll
weg. Der deutsche Satz ist am Computer wieder einzeilig, also wieder Stand `9f25029`. **Hochgeladen.** Falls er
den ganzen Hinweis meinte, nachfragen.

---

## 22.10.2026 — Hinweis hochgeladen (`9f25029`) und deutscher Satz am Computer zweizeilig

Auf Max’ „lade das so auf GitHub hoch" hochgeladen (`9f25029`), live geprüft. Danach Max (mit Bildschirmfoto):
am Computer den deutschen Satz in **zwei Zeilen**, den englischen in **einer**. Umsetzung: fester Umbruch
`Für das beste Erlebnis<br>bitte am PC oder Tablet ansehen.` Gemessen: 1440 px → Deutsch 2 Zeilen, Englisch 1.
Handy 375 px unverändert (3 / 2 Zeilen). Als Korrektur derselben Änderung ebenfalls hochgeladen (siehe Commit
darüber im Git-Log).

---

## 22.10.2026 — Englische Zeile auch am Handy größer

Max: „perfekt so passt es, ne so mit dem Englischen auch in zwei Zeilen". Gedeutet: Am Handy darf die
englische Zeile größer sein und umbrechen. Mindestgröße 15 → **16 px** (`clamp(16px,1.5vw,24px)`). Am Handy
(375 px) 2 Zeilen (vorher gemessen), am Computer unverändert 21,6 px einzeilig. **Nicht hochgeladen.**

---

## 22.10.2026 — Englische Hinweiszeile etwas größer

Max: „mach das Englische minimal größer". `font-size` der englischen Zeile `clamp(15px,1.25vw,20px)` →
`clamp(15px,1.5vw,24px)`: am Computer 1440 px 21,6 px (vorher 18), einzeilig. Am Handy bleibt sie 15 px
(mit 16 px brach sie in 2 Zeilen um), einzeilig. **Nicht hochgeladen.**

---

## 22.10.2026 — Hinweistext endgültig: „Für das beste Erlebnis bitte am PC oder Tablet ansehen."

Max hat entschieden: Fernseher weglassen („da wird es keiner schauen, umständlich"), nur **PC oder Tablet** nennen,
kein Wort mehr übers Handy. Aus meinen Varianten Nr. 1 gewählt, **mit „bitte" vor „am"**:
„Für das beste Erlebnis bitte am PC oder Tablet ansehen." / „For the best experience, watch on a PC or tablet."
(Englisch wie von ihm vorgegeben, ohne „please".) Die früheren Texte (Einträge darunter) sind **überholt**.
Gemessen 1024 px: beide einzeilig (721 / 334 px). **Nicht hochgeladen.**

---

## 22.10.2026 — Hinweistext: „am Handy geht viel verloren"

Max zu „am Handy geht’s aber auch": **nervt ihn**, weil Leute dann denken, das Handy sei kein Problem. Er will
Handy-Schauen **vermeiden**, aber ohne Befehlston. Jetzt: „Gemacht für große Bildschirme, am Handy geht viel
verloren." / „Made for big screens, a phone won’t do it justice." Größe wie im Eintrag darunter. Gemessen
1024 px: beide einzeilig (799 / 336 px). **Merke für Max’ Ton:** nichts verbieten, aber auch nichts erlauben,
sondern sagen, was man verpasst. **Nicht hochgeladen.**

---

## 22.10.2026 — Hinweistext neu: „Gemacht für große Bildschirme, am Handy geht’s aber auch."

Der Text vom Eintrag darunter („bitte nicht am Handy schauen") ist **überholt**. Max fand ihn wie einen Befehl:
Man *kann* am Handy schauen, es ist nur nicht dafür gemacht. Grund: Die meisten Videos sind Querformat.
Es geht um die **Bildschirmgröße**, nicht ums Gerät (Tablet, Fernseher gehen auch). Gewünscht: kurz, je **eine
Zeile** Deutsch und Englisch, „aber so, dass es komplett klar ist".
Jetzt: h1 „Gemacht für große Bildschirme, am Handy geht’s aber auch.", darunter „Made for big screens, but your
phone works too." Damit Deutsch am Computer einzeilig bleibt, ist die Überschrift kleiner: `clamp(24px,2.7vw,46px)`,
`line-height:1.1` (vorher `clamp(34px,3.8vw,60px)`, 1). Gemessen: 1440 px und 1024 px (iPad quer) → beide Sätze
einzeilig. Am Handy (375 px) bricht Deutsch in 3 Zeilen um (24 px), Englisch einzeilig. Bei der Satzlänge geht
das nicht anders. **Nicht hochgeladen.**

---

## 22.10.2026 — Startseite: Handy-Hinweis statt „Wer schaut zu?"

Max: Die Frage am Anfang („Wer schaut zu?" / „Who’s watching?") soll heißen „Für das beste Erlebnis bitte
nicht am Handy schauen" und „For the best experience, don’t watch on a phone" („oder so").
In der Profilauswahl von `site/Startseite Stream.dc.html` jetzt: h1 „Für das beste Erlebnis bitte nicht am Handy
schauen.", darunter „For the best experience, please don’t watch on a phone." Gleiche Schrift und Größe,
nur `text-wrap:balance` ergänzt (ausgewogener Umbruch). Gemessen: 1440 px → je 1 Zeile (Titel 1355 px
breit), Handy 375 px → Titel 3 Zeilen, Englisch 2 Zeilen, innerhalb 16 px Rand. Sicherung
`Portfolio/archiv/Startseite Stream.dc.2026-10-22-vor-handy-hinweis.html`. **Nicht hochgeladen.**

---

## 22.10.2026 — Hochgeladen: alle Änderungen an Startseite, Filme-Seite, Navigation (Commit `b0ab1d5`)

Max: „lade die alle Änderungen bitte wieder auf GitHub hoch". Gezielt vorgemerkt (16 Dateien):
`site/Startseite Stream.dc.html`, `site/Video.dc.html`, `site/Navi.dc.html`, `site/live/icapsule.html`,
`doku/04-stand.md`, `doku/05-fallen.md`, `site/assets/korea-tempelwaechter.webp`, die fünf
`site/assets/video/reel-*.mp4` und vier Standbilder. Vorher: alle Verweise beider Seiten auf
vorhandene Dateien geprüft (0 fehlend), keine iCloud-Platzhalter. **Nicht dabei** (wie bisher):
`site/render/`, `Fotos-leicht/-leinwand/-webgl` + `fotos-leicht/m/`, gelöschtes `plakat-syntheca.jpg`,
`Portfolio/archiv/*`, sonstiges Unversioniertes in `Portfolio/`, `Vorlagen/`, `doku/alt-ki-uebergaben/`.
Live nach ~1,5 min geprüft: Startseite (erste Reihe, Therme-Titel, Wisch-/Hover-Fix), Filme-Seite
(Nächste Folge, Überschrift weg), Navi „Filme" ausgeliefert, alle 10 neuen Dateien 200 mit exakt
der lokalen Größe. (Dieser Vermerk ist nur lokal.)

---

## 22.10.2026 — Filme-Seite: Überschrift „Filme aus dem Studium" entfernt

Max (Bildschirmfoto): „mach da den Text Filme aus dem Studium weg". In `site/Video.dc.html` hat die
Reihe `filme` jetzt `t: ''`. Die Überschriftenzeile wird per `sc-if` auf `r.hasT` ganz ausgeblendet
(keine leere Lücke). Die anderen Reihen (Doschauher · Einspieler, Weitere Videos) behalten ihre
Überschrift. Der Text `L.rowFilms` bleibt in den Sprachtexten (ungenutzt). Sicherung
`Portfolio/archiv/Video.dc.2026-10-22-vor-ueberschrift.html`. Geprüft: Reihe filme ohne Überschrift,
6 Karten, die anderen unverändert. **Nicht hochgeladen.**

---

## 22.10.2026 — Vorschau beim Drüberfahren blieb hängen: Ursache gefunden und behoben (lokal)

Max: „manchmal, wenn ich über einem Projekt drüber hovere, öffnet sich nicht die Vorschau, da muss
ich extra mit der Maus weg und wieder drauf".
**Ursache** (Video-Seite und Startseite, gleicher Code): Fährt die Maus aus einer offenen
Vorschau auf eine Nachbarkarte, feuert erst `pointerover` der Karte (Zeitgeber startet,
`hovCard` = Karte), **danach** das `mouseleave` der Vorschau → `popClose` hat pauschal
`clearTimeout(this.hovT); this.hovCard = null` gemacht und damit den eben gestarteten Zeitgeber der
neuen Karte gelöscht. Die Karte füllt das `<img>` vollständig aus, also kam ohne Verlassen kein
neues `pointerover` mehr. Zweiter Fall: Die schließende Vorschau schrumpft 220 ms lang über der
neuen Karte. Ruht die Maus danach, gibt es kein Ereignis.
**Behoben:**
- `popClose(now, keep)`: `popLeave` ruft `popClose(false, true)` und lässt Zeitgeber/`hovCard` in Ruhe.
  Nach dem Zuklappen (`onfinish`) läuft `reHoverSoon()`, also die Karte unter der Maus öffnen.
- `hovOn` merkt, ob ein Zeitgeber läuft. `popShows(card)` = Vorschau für diese Karte sichtbar.
  `onOver` bricht nur noch ab, wenn für dieselbe Karte ein Zeitgeber läuft oder ihre Vorschau offen
  ist, also kein dauerhaftes Hängen mehr. `onOut` setzt `hovOn` zurück.
- Sicherungen `Portfolio/archiv/*.2026-10-22-vor-hover-fix.html`.
- Geprüft (nachgestellte Ereignisreihenfolge, 1440×900): Fall 1 aus der Vorschau auf die
  Nachbarkarte → deren Vorschau öffnet. Fall 2 „gemerkte" Karte ohne Zeitgeber → öffnet beim
  Drüberfahren. Fall 3 Maus ruht auf der Nachbarkarte, Vorschau klappt zu → Nachbar öffnet.
  Auf beiden Seiten. **Mit echter Maus nicht geprüft. Nicht hochgeladen.**

---

## 22.10.2026 — Wischen in den Reihen trotz offenem Vorschaufenster (Filme-Seite + Startseite, lokal)

Max (mit Bildschirmfoto, Chrome, localhost): Sobald beim Drüberfahren das Vorschaufenster offen ist,
**kann man in der Reihe nicht mehr nach rechts wischen**. Er will weiterwischen können, und die
Karte, über der die Maus ist, soll dann die (leicht vergrößerte) Vorschau zeigen. Nebenbei: Das
Öffnen beim Drüberfahren „bugt manchmal ein bisschen". Das hat er selbst als „egal" abgetan.
Gezielt behoben habe ich nur das Wischen.

Ursache: Das Vorschaufenster (`data-k="pop"`, `position:fixed`, z-index 70) liegt über der Reihe.
Seitliche `wheel`-Ereignisse landen darauf statt auf dem Scroller der Reihe.
In `site/Video.dc.html` **und** `site/Startseite Stream.dc.html` (gleicher Code) ergänzt:
- `wheel`-Listener am Vorschaufenster: Bei überwiegend seitlicher Bewegung wird sie an die Reihe
  der geöffneten Karte (`this.popCard`) weitergegeben (`scrollLeft += deltaX`). Senkrechtes Scrollen
  bleibt beim Seitenscrollen.
- Die Reihen haben `scroll-snap-type: x mandatory`. Kleine Schritte würden zurückschnappen, deshalb
  ist das Einrasten **während** des Wischens aus und wird 200 ms nach dem letzten Scroll wieder
  eingeschaltet (`reHoverSoon`).
- Das Scrollen schließt das Fenster wie bisher. Neu: 200 ms nach Scrollende (+250 ms) öffnet sich
  die Vorschau der Karte unter der letzten Mausposition (`pointermove` merkt sie,
  `elementFromPoint`), ohne dass die Maus bewegt werden muss. Gilt auch nach normalem Wischen
  und nach den Pfeil-Knöpfen.
- Sicherungen: `Portfolio/archiv/Video.dc.2026-10-22-vor-wischen.html`,
  `…/Startseite Stream.dc.2026-10-22-vor-wischen.html`.
- Geprüft mit künstlichen `WheelEvent`s (12 × 40 px) bei 1440×900: Filme-Seite Vorschau
  „einspieler" → Reihe 0 → 480 px, Einrasten danach wieder normal, Vorschau jetzt „bienen" (Karte
  unter der Maus). Startseite Reihe Südkorea: 2-1 → 480 px → Vorschau 2-3. **Mit echtem Trackpad
  nicht getestet** (Vorschaubereich verdeckt). **Nicht hochgeladen.**

---

## 22.10.2026 — Filme-Seite: Doschauher wie eine Netflix-Serie (lokal)

Max (Sprachnachricht mit Bildschirmfoto vom Vorschaufenster „Doschauher"): Ein Klick aufs **Bild**
im kleinen Vorschaufenster soll wie der Pfeil unten rechts das **Infofenster mit den Staffeln**
öffnen. **„Abspielen" soll nicht das Showreel spielen, sondern Staffel 1, Folge 1 (Auto)**. Am
Ende jeder Folge wie bei Netflix „Nächste Folge" mit ablaufender Zeit, dann automatisch weiter
(Theke, Schutzbrille …), danach Staffel 2.

`site/Video.dc.html` (Sicherung `Portfolio/archiv/Video.dc.2026-10-22-vor-naechste-folge.html`):
- Vorschaufenster: Das Bild hat einen eigenen Klick `pop.img`. Bei Serie → `openModal`, bei
  Filmen und Folgen wie bisher Abspielen (Bergmann spielt weiter den ganzen Film).
- `openPlayer`: Ist die ID die Serie → die erste Folge der ersten Staffel wird gespielt. Das gilt
  überall, wo die Serie „Abspielen" hat: Vorschaufenster, Infofenster und **auch oben im Showreel**
  (bisher spielte dort der Einspieler-Ausschnitt). „Staffel abspielen" (YouTube-Gesamtshow) unverändert.
- Neu `epEnd/goNext/cancelNext`: `pv.onended` bei Folgen → `state.nx` = nächste Folge aus
  `D.eps` (Reihenfolge S1: Auto, Theke, Schutzbrille, Regal, Maskiert → S2: Überwachungskamera,
  Reportage, Handyaufnahme). Kasten unten rechts im Abspieler: Vorschaubild,
  „Nächste Folge · Staffel x · Folge y", Titel, Knopf **„▶ Nächste Folge"**, der sich über **6 s**
  füllt (WAAPI `scaleX`), dann geht es automatisch weiter. Dazu ein ✕ zum Abbrechen. Wieder Play
  drücken bricht ebenfalls ab. Nach der letzten Folge kommt kein Kasten. Texte de/en (`L.next`).
- Geprüft (Funktionen direkt, Vorschaubereich verdeckt): Serie abspielen → `ep-auto`/`auto.mp4`,
  Untertitel „Staffel 1 · Folge 1 · 0:28". Folgenende → Kasten „Nächste Folge · Staffel 1 · Folge 2 |
  Theke". Klick → `theke.mp4`, Kasten weg. Maskiert → `ep-ueberwachung`. Handyaufnahme → keine.
  Automatisch: Regal-Ende → nach 7 s läuft Maskiert. Bildklick Serie → Infofenster, Bildklick
  Bergmann → spielt. Klammern ausgeglichen (div 57/57, sc-if 23/23, button 21/21).
  **Das Aussehen des Kastens habe ich nicht gesehen.**
- **Nicht hochgeladen.**

---

## 22.10.2026 — Menüpunkt „Video" heißt jetzt „Filme"

Max: oben in der Navigation „Video" zu „Filme", ebenso in der Projektübersicht auf der Startseite.
Geändert (Link bleibt `Video.dc.html`): Startseite-Navi `['Filme', 'Films']`, Video-Seite-Navi ebenso,
`Navi.dc.html` (Menschen, Fotos, Korea, Drohne, 3D) `'Filme'`, iCapsule-Leiste „Filme", Startseite
`P.video.t` → `['Filme', 'Films']` (Karte in der ersten Reihe und Infofenster). Auf allen Navigationen
angeglichen, damit sie gleich bleiben (Max wollte die Leiste überall gleich). Nicht geändert: Seitentitel
„Video — Max Aulinger", Dateiname, die `aktiv`-Option „Video" in Navi (wird von keiner Seite benutzt).
Sicherungen `Portfolio/archiv/*.2026-10-22-vor-filme.html`. Geprüft: Startseite-Menü, erste Reihe,
Menschen-Navi zeigen „Filme". **Nicht hochgeladen.**

---

## 22.10.2026 — FPV-Winter-Reel eine Sekunde früher

Max: „eine Sekunde früher". `reel-fpv-winter.mp4` neu ab **5,5 s** (statt 6,5 s), weiter 5,6 s lang,
Standbild neu aus Bild 0. Startseite unverändert (gleicher Dateiname). **Nicht hochgeladen.**

---

## 22.10.2026 — FPV „Winter in den Bergen": Reel startet später

Max: „Starte das Drohnenvideo Winter in den Bergen erst eine Sekunde nach dem aktuellen Ende als
Showreel, also mach den Start erst später." Das Reel war `fpv-timeline-1.mp4` mit `s: 6, d: 5500`.
Max hat lokal geschaut (Startseite nicht hochgeladen), dort kann nicht gesprungen werden, er sah
also **0–5,5 s**. Gedeutet: neuer Start = 5,5 + 1 = **6,5 s**. Hätte er die Online-Fassung
gemeint (6–11,5 s), wäre es 12,5 s. **Max darauf hingewiesen.**
Neu: `site/assets/video/reel-fpv-winter.mp4` = ab 6,5 s, 5,6 s lang (1280×720, 59,94 fps, CRF 21,
2,2 MB, ohne Ton), Standbild `reel-fpv-winter-poster.webp` aus Bild 0. Reel `s: 0, d: 5500`.
Die Karte „FPV-Flug" in der Reihe „Aus der Luft" benutzt weiter das Original. **Nicht hochgeladen.**

---

## 22.10.2026 — Politische Plakate aus den Reels genommen

Max: „Nimm Politische Plakate da raus aus den Showreels, die kannst du weglassen." Das Plakate-Reel
ist aus `clips` in `site/Startseite Stream.dc.html` entfernt, jetzt 16 Reels. Die nur dafür
erzeugten Dateien `video/reel-3d-plakate.mp4` und `video/intro-3d-plakate-poster.webp` sind
gelöscht (waren nie hochgeladen, nirgends sonst verwendet). Die Plakate in der Reihe 3D & Design
und im Projekt `P.plakate` sind unverändert. Vorher (unbeantwortet) gefragt: Sollen alle Reels
über Schwarz wechseln oder nur Vorstellungskraft? **Nicht hochgeladen.**

---

## 22.10.2026 — Vorstellungskraft: Standbild verworfen, Ausschnitt bis zum Ende

Max zum gehaltenen Standbild: **„jetzt stoppt es einfach zu früh"**. Der Eintrag darunter
(„bleibt länger stehen", 1,5 s gehaltenes letztes Bild) ist damit **überholt**.
Bei genauerem Hinsehen: Ab ~5,0 s **leuchten die Augen des Totenkopfs rot und er fliegt auf die
Kamera zu**. Das ist der eigentliche Abschluss, danach Abblende ins Schwarz (bis 5,46 s). Das
Standbild hielt genau davor an. Der ursprünglich „zu frühe Übergang" kam sehr wahrscheinlich
vom lokalen Server: `s: 1` lässt sich dort nicht anspringen → Video ab 0 → nach `d` = 4,5 s
(Video bei 4,5 s) wechselte das Reel **vor** den roten Augen. Online wäre es bis 5,5 s gelaufen.
Neu: `reel-vorstellungskraft.mp4` = Original ab 1,0 s **bis zum Ende** (4,54 s, CRF 21, 4,8 MB),
ohne Standbild, Reel `s: 0, d: 4450`. Läuft so lokal und online gleich.
**Lehre:** Bei Max' Rückmeldungen zu Reels zuerst fragen bzw. prüfen, ob er lokal (ohne Spulen)
oder online geschaut hat. Zweimal war die Ursache der Testserver, nicht das Timing.
**Nicht hochgeladen.**

---

## 22.10.2026 — Vorstellungskraft-Reel bleibt länger stehen

Max: Vorstellungskraft „soll länger sichtbar bleiben, jetzt geht der Übergang minimal zu früh los".
Ursache: `vorstellungskraft-schaedel.mp4` ist nur 5,54 s lang und blendet selbst ab ~5,0 s ins
Schwarz (YAVG 175 → 89 bei 5,25 s → 16 bei 5,5 s). Das Reel startete bei 1 s, also begann die
Abblende nach 4 s. Neu: `site/assets/video/reel-vorstellungskraft.mp4` = Original 1,0–5,0 s
(vor der Abblende) + letztes Bild **1,5 s gehalten** (`tpad=stop_mode=clone`), 5,5 s, CRF 21,
4,4 MB. Zwischen 4 und 5 s ist das Bild schon ruhig (YAVG gleichbleibend), das Halten fällt nicht
auf. Startseite: Reel nutzt die neue Datei, `s: 0, d: 5300` (vorher `s: 1, d: 4500`). Das Original
bleibt für die Karte in der Reihe 3D & Design.
**Merke (ffmpeg):** `-t` **vor** `-i` begrenzt die Eingabe. Danach würde es auch die Ausgabe
abschneiden, dann wirkt `tpad` nicht (erster Versuch: 4,0 statt 5,5 s). **Nicht hochgeladen.**

---

## 22.10.2026 — Tempelwächter-Reel endet vor dem Übergang

Max: Der Ausschnitt schneidet „mitten in der Übergangsanimation". Er soll enden, „wo die
Tempelwächter noch vollständig da sind". Per Helligkeit je Bild gemessen: Das Bild ist bis
11,53 s ruhig (YAVG 46,1), ab 11,57 s beginnt das Zuklappen. Vorher endete der Ausschnitt bei
11,92 s. `reel-korea-tempel.mp4` neu: 8,75 → 11,50 s (2,73 s), die letzten Bilder haben alle
YAVG 46,14 (vollständig offen). In der Startseite `d` 3100 → 2650 ms, damit das nächste Reel
vor Dateiende überblendet. Beim Überblenden bleibt das letzte (volle) Bild stehen.
**Nicht hochgeladen.**

---

## 22.10.2026 — Menschen-Reel: nur Robin

Max: „nur das eine Bild bei Menschen und nicht 3 verschiedene, sondern nur das eine". Die drei
anderen Porträts sind raus, Robin (`portraits/dsc01731.webp`) läuft allein, wieder 4,5 s wie
früher das einzelne Porträt. Jetzt 17 Reels: Bergmann · Robin · Korea Tempelwächter ·
Vorstellungskraft · Über den Wolken · Erste bezahlte Arbeit · 3D Blase · Einspieler · Seoul Nacht ·
FPV · 3D Plakate · Sonnenaufgang · Park-Kugeln · 3D iCapsule · Drohne Nebel · Tiere · Electrify.
Die `heroSwap`-Ausnahme (gleicher Bereich → Text nicht neu einblenden) bleibt im Code. Sie schadet
nicht, greift aber zurzeit nirgends. Die Frage nach dem Namen der Frau („Ares"/„Iris") erledigt
sich für die Startseite. **Nicht hochgeladen.**

---

## 22.10.2026 — Startseite: Reel-Reihenfolge nach Max, Ausschnitte als eigene Dateien (lokal)

Max: Film zuerst passt. Dann **2. Menschen mit Robin**, **3. Südkorea, aber direkt mit den drei
Tempelbildern** (bei ihm startete es mit dem Schriftzug „Südkorea" und dem Aufploppen), **4. die
Blender-Animation mit dem Totenkopf (Vorstellungskraft)**, dann Drohne/FPV, aber „mit dem Video
**über den Wolken**", dann andere Projekte nach meiner Wahl. Drohne Nebel „erst später".
**Robin** = Mann mit weinroter Kappe und Lederjacke, raucht vor dem Auto =
`portraits/dsc01731.webp` (von Max bestätigt: „einer der letzten Bilder der Menschen-Seite, das wo
einer raucht vor dem Auto". Auf der Menschen-Seite heißt `portraet-cap` „Robin", dieselbe Person).

**Warum Korea bei Max falsch startete:** Er testete lokal auf `werkzeug/serve.js`, der nicht
spulen kann (siehe 05-fallen). Dort lief `intro-korea` ab 0 statt ab 8,75 s. **Lösung:** Die
Ausschnitte sind jetzt **eigene kurze Dateien**, die genau an der Stelle beginnen. So braucht es
kein Springen, und es lädt viel weniger (statt 16–29 MB):

| Datei (`site/assets/video/`) | aus | ab | Länge | Größe |
|---|---|---|---|---|
| `reel-korea-tempel.mp4` | intro-korea-16x9 | 8,75 s | 3,17 s | 1,2 MB |
| `reel-3d-blase.mp4` | intro-3d-design-16x9 | 14,033 s | 2,7 s | 0,7 MB |
| `reel-3d-plakate.mp4` | intro-3d-design-16x9 | 19,9 s | 2,5 s | 1,1 MB |
| `reel-3d-icapsule.mp4` | intro-3d-design-16x9 | 34,0 s | 5,4 s | 1,7 MB |

x264 slow CRF 20, 1080p, ohne Ton, faststart. **Fehler beim ersten Schnitt:** Die Blase begann bei
13,9 s mit Schwarz. Meine Bildfolgen (fps-Filter nach `-ss`) waren zeitlich ungenau. Per
Helligkeit je Einzelbild (`signalstats` YAVG; 16 = Schwarz) gemessen: Das Logo kommt ab 14,03 s →
neu geschnitten. Bei allen vier ist das erste Bild nicht schwarz (YAVG 20–34). Das Korea-Standbild
ist neu aus Bild 0 des Ausschnitts.

Reihenfolge jetzt (20): Bergmann · Robin · Frau Querformat (Name offen) · Gabriel (Feld) ·  ← überholt, siehe unten
Junge zeigt (dsc04625) · Korea Tempelwächter · Vorstellungskraft · Zeitraffer „Über den Wolken" ·
Erste bezahlte Arbeit · 3D Blase · Einspieler · Seoul Nacht · FPV · 3D Plakate · Sonnenaufgang ·
Park-Kugeln · 3D iCapsule · Drohne Nebel · Tiere · Electrify.
Sicherung: `Portfolio/archiv/Startseite Stream.dc.2026-10-22-vor-reel-reihenfolge-2.html`.
Geprüft: Liste wie oben, alle vier Ausschnittdateien laden auf dem normalen lokalen Server
(Längen stimmen). Vorschaubereich verdeckt, also kein Abspielen gesehen. Hinweis: Vorstellungskraft
(ab 1 s), FPV (ab 6 s) und Drohne Nebel (ab 3 s) springen weiterhin in der Datei, das klappt
lokal nicht, online schon (war schon immer so). **Nicht hochgeladen.**

---

## 22.10.2026 — Startseite: Reels umsortiert, Menschen wechseln, „Erste bezahlte Arbeit" (lokal)

Max, ausdrücklich „ändere diese Dinge auf der Startseite und nichts anderes":
1. Nicht Drohne zuerst, sondern **der Film** → Bergmann-Clip ist jetzt Reel 1.
2. Südkorea: statt des Standbilds (Krieger, `dsc00452`) **direkt die Tempelwächter-Animation**
   → der Ausschnitt `intro-korea` ab 8,75 s steht an der Stelle des Standbilds, der doppelte
   weiter hinten ist raus.
3. 3D & Design: „mehr Animationsdurchlauf" aus seinen Videos, z. B. die platzende Blase mit dem
   Blender-Logo und „die andere Animation, die da eh schon drin ist" → Blase (13,9 s) bleibt,
   **neu** Plakate aus `intro-3d-design` ab 19,9 s für 2,5 s, und das **iCapsule-Standbild
   (`icap-farben`) ist durch den iCapsule-Ausschnitt ab 34,0 s für 5,4 s ersetzt** (Kuppel mit
   „iCapsule", Schnittbild, weißer Render). Vorstellungskraft und Park-Kugeln bleiben.
   Neue Standbilder: `video/intro-3d-plakate-poster.webp`, `video/intro-3d-icapsule-poster.webp`.
4. Menschen: „mehrere Bilder abwechselnd, vor allem das mit **Iris** oder andere, die cool sind"
   → vier Querformate je 3 s hintereinander: `portraet-ares-quer` (das Bild, das Max am selben Tag
   „Ares" nannte, jetzt „Iris". **Name unklar, Max gefragt, nicht geraten**), `portraet-feld`,
   `portraits/dsc04625`, `portraits/dsc01731`. Damit der Text dabei nicht blinkt: `heroSwap`
   blendet nicht aus und ein, wenn das nächste Reel zum selben Bereich gehört (`p` gleich).
5. Therme: Titel **„Erste bezahlte Arbeit"** (`P.therme.t`, en „First paid job"). Das gilt für
   das Reel oben und für das Infofenster. Die Karte in der Reihe 3D & Design heißt weiter
   „Therme Bad Füssing" (eigener Text, nicht angefasst). Max darauf hingewiesen.

Reihenfolge jetzt (19 Reels): Bergmann · Drohne Nebel · Korea Tempelwächter · Therme · 3D Blase ·
4× Menschen · FPV · Vorstellungskraft · Sonnenaufgang · Seoul Nacht · Einspieler · Park-Kugeln ·
3D Plakate · 3D iCapsule · Tiere · Electrify.

Sicherung: `Portfolio/archiv/Startseite Stream.dc.2026-10-22-vor-reel-reihenfolge.html`.
Geprüft mit Range-Testserver (8001, danach beendet): Liste wie oben, das erste Reel ist Bergmann,
Startstellen Korea 8,75 s und iCapsule 34 s sitzen. Die Bereichsgleichheit habe ich direkt an
`heroSwap` geprüft: Porträt → Porträt 0 Textanimationen, Porträt → Drohne 1. Abspielen live
**nicht** gesehen, der Vorschaubereich war verdeckt (0 Bilder/s). **Nicht hochgeladen.**

---

## 22.10.2026 — Startseite: erste Reihe = Bereiche, Vorschau-Reels mit Filmen und Animationsausschnitten (lokal)

Max (lange Sprachnachricht, Kern): In der Reihe „Projekte" stehen Einzelprojekte (Sonnenaufgänge,
Tiere, iCapsule …). Stattdessen als erste Zeile die Bereiche **wie im Menü**, Reihenfolge
„3D & Design, dann Südkorea, dann Video, Drohne und Menschen", dazu Fotos. Vorschaubilder:
Südkorea = „die drei Statuen, diese drei Tempel-Dinger nebeneinander" aus der Animation,
Menschen = Ares im Querformat, 3D & Design = das Bild, das schon bei iCapsule ist, Video = das
Bergmann-Vorschaubild der Video-Seite. Oben die Vorschau-Reels überarbeiten: mehr aus den
Filmprojekten (z. B. Bergmann) und Ausschnitte aus den Korea-/3D-Animationen (Tempelwächter,
„Blender-Animation von dieser platzenden Blase"). „So wie es aktuell ist, kannst du es auch ein
bisschen lassen." Und ausdrücklich: **„aber ändere sonst nichts, auch nichts"**.
„Dann bei Tiere was" war nicht eindeutig. Gedeutet als: Fotos bekommt ein Tierbild
(`tier-zunge`, das bisherige Tiere-Bild). **Max darauf hingewiesen.** Drohne behält ihr Bild
(nicht genannt).

`site/Startseite Stream.dc.html` (Sicherung `Portfolio/archiv/Startseite Stream.dc.2026-10-22-vor-projekte-reels.html`):
- Neue Einträge in `P`: `design`, `video`, `fotos`, jeweils mit `grp` (welche Projekte im
  Infofenster unter „Mehr aus dem Projekt" erscheinen: design → icapsule, blender, therme, plakate,
  flyer; video → filme; fotos → sonne, tiere). Texte aus vorhandenen Einträgen übernommen
  (blender, filme, tiere), nichts neu erfunden. Der Filter in `renderVals` nutzt `P.grp`.
- Reihe „Projekte" (Titel unverändert) = 3D & Design (`thumb/icap-hero-weiss`) · Südkorea
  (**neu** `assets/korea-tempelwaechter.webp`: dsc01051/53/54 je 498×820 mit 16 px Abstand auf
  schwarzem 1600×900, wie die Szene in der Animation, 133 KB) · Video (`film-bergmann-poster.webp`
  wie auf der Video-Seite) · Drohne (wie bisher) · Menschen (`portraet-ares-quer.webp`) · Fotos
  (`thumb/tier-zunge`). Die anderen Reihen sind unverändert.
- Reels oben (`clips`), alle bisherigen bleiben, dazu kommen:
  Bergmann-Clip (`showreel-5-bergmann`, 7,5 s), 3D-Ausschnitt aus `intro-3d-design-16x9.mp4`
  **ab 13,9 s für 2,8 s** (Blender-Logo, Glaskugel fliegt, zerplatzt in Partikel), Korea-Ausschnitt
  aus `intro-korea-16x9.mp4` **ab 8,75 s für 3,2 s** (die drei Tempelwächter gehen auf),
  Einspieler-Clip (6,5 s). Das bisherige **Standbild** von Electrify ist jetzt der Electrify-**Clip**
  (7,5 s). 16 statt 12 Reels. Neue Standbilder: `video/intro-korea-tempel-poster.webp`,
  `video/intro-3d-blase-poster.webp`. Die Startstellen habe ich aus Bildfolgen im 0,25-s-Raster
  bestimmt.
- **Geprüft:** Erste Reihe im Browser: Reihenfolge, Bilder geladen, Links. Reels mit einem
  **eigenen Testserver mit Range-Unterstützung** (Port 8001, Skript im Scratchpad, danach beendet),
  weil `werkzeug/serve.js` nicht spulen lässt (`seekable` 0–0, siehe 05-fallen). Alle fünf neuen
  Reels laufen ab der gesetzten Stelle (z. B. Korea 8,75 → 9,64 s nach 0,9 s). Infofenster:
  design 9, fotos 10, video 4, korea 9 Bilder unter „Mehr". Diff zur Sicherung: nur die genannten
  Stellen.
- **Nicht hochgeladen.**

---

## 22.10.2026 — „Immer noch nicht aktualisiert": Laufzeit fragt Bausteine jetzt immer nach (Commit `372b7a6`)

Max sah die neue Kopfleiste online nicht. Per curl geprüft: Online war alles aktuell. Ursache:
`support.js` holt `dc-import`-Bausteine (z. B. `Navi.dc.html`) per `fetch()`. Beim Neuladen
holt Chrome nur das Dokument frisch, solche nachgeladenen Dateien kommen bis zu 10 min
(`max-age=600`) aus dem Zwischenspeicher. Neuladen hilft also nicht.
- `site/support.js`, eine Zeile (Geschwister-Import, ~Z. 1651): `fetch(target, { cache: "no-cache" })`.
  Damit fragt der Browser jedes Mal beim Server nach (bei unveränderter Datei nur „304").
  Sicherung: `Portfolio/archiv/support.site.2026-10-22-vor-no-cache.js`.
- Lokal geprüft: Der Kopf lädt weiter. Live: Die Datei ist oben.
- Kurz danach meldete Max: **„jetzt ist es aktualisiert"**.
- Hinweis: `support.js` selbst wird ebenfalls 10 min zwischengespeichert. Die Verbesserung
  greift pro Browser erst, wenn der die neue `support.js` hat.

---

## 22.10.2026 — Kopfleiste überall wie auf Video und Startseite (lokal)

Max: Die Leiste mit Menschen, Fotos, Korea usw. soll **linksbündig neben dem Max-Aulinger-Logo**
stehen wie auf Video- und Startseite, „dass das bitte auf allen Seiten gleich aussieht".

- `site/Navi.dc.html` neu geschrieben, nach dem Vorbild der Kopfleiste von `Video.dc.html` /
  `Startseite Stream.dc.html`: Höhe 68 px, `padding:0 4vw`, Verlauf von oben, rotes Logo links,
  die Seiten direkt daneben (Start · Menschen · Fotos · Korea · Drohne · Video · 3D & Design), 14 px,
  normale Schreibweise statt Versalien, aktive Seite 600/#f2f2f2, sonst 400/#e5e5e5, Hover #b3b3b3.
  „Kontakt" (mailto) rechts. Unter 900 px wird die Liste zum Menü **„Entdecken ▾"** (wie Video),
  das sich bei Klick daneben schließt. Das Logo ist jetzt auch am Handy sichtbar (vorher unter
  760 px ausgeblendet). Das Profil- und Sprachmenü der Video-Seite ist **nicht** übernommen (gibt
  es nur dort).
- `site/live/icapsule.html`: eigene Leiste (`.mxn`) per CSS auf dasselbe Aussehen gebracht,
  „Start" vorn ergänzt, Kontakt rechts. Am Handy bleibt die Liste waagerecht wischbar, kein Menü.
- Gemessen bei 1440×900: Auf allen sechs Seiten (Menschen, Fotos, Korea, Drohne, 3D, iCapsule) ist
  der Kopf 68 px hoch, das Logo steht bei 58–194 px, der erste Link bei **231 px, genau wie auf
  der Video-Seite**. Die jeweils aktive Seite ist fett. Handy (375 px): Logo und „Entdecken" mit
  allen 7 Seiten.
- Sicherungen: `Portfolio/archiv/Navi.dc.2026-10-22-vor-linksbuendig.html`,
  `…/icapsule.site.2026-10-22-vor-linksbuendig.html`.
- ~~Nicht hochgeladen~~ → **Hochgeladen** auf Max' „ja" (Commit `f2a06be`), live geprüft.
- **Nachtrag, beim Live-Test gefunden:** Beim ersten Laden stand der erste Link bei 95 statt
  231 px. Das Logo (73 KB PNG) hatte vor dem Laden keine Breite, dann sprang die Leiste. Regel 2
  aus CLAUDE.md (immer `width`/`height`) hatte ich nicht beachtet. Behoben mit
  `width="937" height="179"` am Logo in Navi und iCapsule (Commit `e0a106d`). Lokal geprüft: Die
  Laufzeit behält die Attribute. Live hatte mein Browser noch die zwischengespeicherte Navi
  (10 min, siehe 05-fallen), die Datei selbst ist oben (geprüft per curl). Video- und Startseite
  haben dasselbe Logo **ohne** Maße. Nicht angefasst, nicht beauftragt.

---

## 22.10.2026 — Drohne: Clip „Durch den Schnee" spielt jetzt das Video

Max: „Das Video Durch den Schnee ist noch nicht hochgeladen … aktuell ist da nur ein Standbild,
ersetze das mit dem richtigen Video." In `site/Drohne v5.dc.html` (`clipData()`) hatte der dritte
FPV-Clip `src: undefined, dur: '—'`. Das Video gab es längst online:
`Portfolio/assets/video/drohne-schnee.mp4` (24,3 MB, 1280×720, 63,9 s, kein Ton, faststart, nicht
fragmentiert, live 200). In der alten Drohnenseite V1 war es seit `7078b58` eingebaut, Claude Designs
Export hatte es wieder verloren.
- Geändert: `src: '../Portfolio/assets/video/drohne-schnee.mp4'`, `dur: '1:04'` (eine Zeile).
  Verweis statt Kopie, wie bei den ganzen Filmen der Video-Seite, also kein neuer Upload des Videos.
- `site/DrohneKapitel.dc.html` hat dieselbe Lücke, wird aber nur von `Portfolio v4` benutzt.
  Nicht angefasst.
- Sicherung: `Portfolio/archiv/Drohne v5.dc.2026-10-22-vor-schnee-video.html`.
- Lokal geprüft: Clip 3 lädt die Datei, 63,9 s, 1280 px, kein Fehler.

---

## 22.10.2026 — Fehler nach dem Logo-Klick: alte Adresse leitet jetzt weiter (Commit `28bf661`)

Max: „die neue ist auch nicht verknüpft … kommt da dann Error". Live nachgesehen: Die Links waren
richtig (`Startseite%20Stream.dc.html`). Ein echter Klick auf das Logo landete bei mir auf der
neuen Startseite, nur später als gedacht: Der Seitenwechsel braucht über 3 s, mein erster Blick
nach 3 s zeigte fälschlich „bleibt stehen".

**Wahrscheinliche Ursache bei Max:** GitHub Pages schickt `cache-control: max-age=600`. Bis zu
10 min nach dem Upload benutzt der Browser noch den **alten** `Navi.dc.html`, der auf die gerade
gelöschte `Startseite.dc.html` zeigt → 404. Das ist nicht bewiesen (Max' Browser kann ich nicht
sehen), passt aber genau.

**Lösung:** `site/Startseite.dc.html` gibt es wieder, aber nur als **Weiterleitung** (Kopie von
`site/index.html`: meta refresh + `location.replace` auf Startseite Stream). Die alte Kartenwand
bleibt weg. So landen alte gespeicherte Seiten und Lesezeichen nie mehr auf einem Fehler. Live
geprüft: Die alte Adresse öffnet die neue Startseite.

**Merke:** Wer eine Seite löscht, auf die bis eben verlinkt wurde, legt eine Weiterleitung an
(siehe 05-fallen).

---

## 22.10.2026 — „Max Aulinger" führt überall zur neuen Startseite, alte Startseite entfernt (lokal)

Max: Auf Menschen, Fotos, Korea, Drohne und 3D & Design steht oben links noch „das alte
Max-Aulinger-Logo, einfach dieser Schriftzug". Er führte zur alten Hauptseite (`Startseite.dc.html`,
Kartenwand). „Die alte Hauptseite ist komplett unbrauchbar, die kannst du wegmachen." Überall soll
ein Klick auf Max Aulinger zur **neuen** Hauptseite (Startseite Stream) führen, wie auf der
Video-Seite und der Startseite mit dem roten Logo. Damit ist auch **offene Frage 1** vom 21.10.
beantwortet.

- `site/Navi.dc.html` (gemeinsamer Kopf von Menschen, Fotos, Korea, Drohne, 3D): Ziel
  `Startseite%20Stream.dc.html`, **an zwei Stellen** (Fallback im Code **und** Vorgabe in
  `data-props`, siehe 05-fallen). Der weiße Schriftzug ist durch das **rote Logo**
  `assets/logo-max.png` ersetzt, gleiche Höhe wie auf der Video-Seite (`clamp(18px,1.9vw,26px)`).
  Am Handy ist er wie bisher ausgeblendet (< 760 px). Das rote Logo habe ich aus „das alte
  Logo" geschlossen, ausdrücklich verlangt war nur die Verlinkung. Max darauf hingewiesen.
- Links „Zurück zur Übersicht" unten auf Menschen, Korea, Drohne, 3D → Startseite Stream.
- `site/live/icapsule.html`: Kopf-Link → `../Startseite%20Stream.dc.html`, ebenfalls rotes Logo.
- `site/Startseite.dc.html` per `git rm` entfernt. Danach verweist keine Seite mehr darauf.
  **Folge:** Das Render-Werkzeug `site/render/render-showreels.mjs` (Job `startseite`) braucht
  diese Seite. Die gerenderten `startseite-*.mp4` gibt es schon, neu rendern ginge nur mit der
  Sicherung.
- Sicherungen: `Portfolio/archiv/*.2026-10-22-vor-logo-link.html` (Navi, Menschen, Korea v3,
  Drohne v5, 3D Design, Startseite, icapsule.site).
- Geprüft: Skripte und Klammern ok. Im Browser bei 1440×900 auf Menschen: rotes Logo 136×26 oben
  links, echter Klick → landet auf „Max Aulinger — Portfolio" (Startseite Stream).
- ~~Nicht hochgeladen~~ → **Hochgeladen** auf Max' „lade es hoch", zusammen mit dem
  Innenleben-Bild (Commit `5f25cc5`). Live nach ~1,5 min geprüft: Navi mit rotem Logo und nur
  noch Links zur neuen Startseite, ebenso Menschen, Korea, Drohne, 3D und iCapsule. Alte
  Startseite 404, neue 200. Innenleben-Foto 200 (68 770 Byte), die 3D-Seite benutzt es.
  (Dieser Vermerk ist nur lokal.)

---

## 22.10.2026 — 3D & Design: Bild „Das Innenleben · Blender" ausgetauscht (lokal)

Max schickte ein Handyfoto vom Blender-Bildschirm (Explosionsansicht des Geräts, 1242×1830) mit
„mach bitte das Bild statt Innenleben Blender, also tausch das aus".
- Gemeint ist im Abschnitt iCapsule („Eigenes Apple-Produkt") das zweite Bild neben „Am Bildschirm":
  Eintrag `bts2` in `site/3D Design.dc.html`.
- Original abgelegt als `Neu/Projekte/ibee-innenleben-blender-original.jpg` (nicht im Repo).
- Neu: `site/assets/ibee-innenleben-blender.webp`, 950×1400 (sips -Z 1400, q62 → cwebp q68,
  69 KB). **Neue Datei statt Überschreiben**, weil `Portfolio v4.dc.html` die alte
  `ibee-innen.webp` weiter benutzt.
- In `bts2` Pfad und Maße auf 950×1400 geändert (die Seite rechnet das Seitenverhältnis daraus).
  Sonst nichts geändert (diff: eine Zeile). Sicherung: `Portfolio/archiv/3D Design.dc.2026-10-22-vor-innenleben.html`.
- Im Browser bei 1440×900 geprüft: Das Bild lädt, ist 253×370 groß, gleich hoch wie „Am Bildschirm",
  Rahmenverhältnis 0,685 zu Bildverhältnis 0,679, also nicht verzerrt.
- **Nicht hochgeladen**, Max gefragt.

---

## 21.10.2026 — Neue Fassungen ersetzen die normalen Seiten (Korea, 3D & Design, Fotos)

Max: „Du solltest es doch in die normale Seite einbauen statt der ursprünglichen und nicht als
extra Seite." Er hatte über die Navigation gewechselt und deshalb nur die alten Seiten gesehen.
**Mein Missverständnis:** Ich hatte „statt der Animation" als neue Testseite daneben gelesen
(Regel „nie in bestehende Datei"). Ein ausdrücklicher Auftrag von Max geht der Regel vor.

- Sicherung vorher (byte-gleich): `Portfolio/archiv/Korea v3.dc.2026-10-21-vor-video.html`,
  `…/3D Design.dc.2026-10-21-vor-video.html`, `…/Fotos.dc.2026-10-21-vor-einfach.html`.
  Außerdem liegen die alten Stände in Git (`cbd8156` und früher).
- `site/Korea v3.dc.html` = bisherige `Korea v3 Video`, `site/3D Design.dc.html` = `3D Design Video`,
  `site/Fotos.dc.html` = `Fotos-einfach`. Per diff geprüft: Unterschied nur im `<title>` (wieder
  der ursprüngliche Titel).
- Die drei Testseiten sind aus dem Repo entfernt (`git rm`), damit es keine Doppelungen gibt.
- Statisch geprüft: Klammern, IDs, Skript, alle eingebundenen Dateien vorhanden.

---

## 21.10.2026 — Hochgeladen: Video-Vorspanne und Fotos-einfach (Commit `cbd8156`)

Max: „lade die aktuelle Version wieder auf GitHub hoch". Einzeln vorgemerkt (87 Dateien, 74 MB):
`site/Korea v3 Video.dc.html`, `site/3D Design Video.dc.html`, `site/Fotos-einfach.dc.html`,
`site/assets/fotos-leicht/s/` (78), die vier `site/assets/video/intro-*.mp4`, `doku/04-stand.md`,
`doku/05-fallen.md`. **Bewusst nicht dabei:** `site/render/` (229 MB, Frage nach `.gitignore`
weiter offen), die verworfenen Testseiten `Fotos-leicht/-leinwand/-webgl` und
`fotos-leicht/m/`, das lokal gelöschte `plakat-syntheca.jpg`, alles Unversionierte in
`Portfolio/`, `Vorlagen/`, `doku/alt-ki-uebergaben/`.

Live geprüft nach ~2 min: alle drei Seiten 200, die vier Videos 200 mit exakt richtiger Größe,
Startseite Stream und Original-Fotos weiter 200. Die neuen Seiten sind **nur über ihre Adresse**
erreichbar, die Navi zeigt weiter auf die Originale (nicht beauftragt, das umzustellen):
- https://maxderfisch.github.io/Portfolio/site/Korea%20v3%20Video.dc.html
- https://maxderfisch.github.io/Portfolio/site/3D%20Design%20Video.dc.html
- https://maxderfisch.github.io/Portfolio/site/Fotos-einfach.dc.html

Dieser Eintrag selbst ist nur lokal (nach dem Push geschrieben).

---

## 21.10.2026 — Handy-Videos (9:16): waren schon eingebaut, Weiterlaufen ergänzt

Max schickte `korea-9x16.mp4` und `3d-design-9x16.mp4`: „für die mobile Version … genau so wie die
anderen Videos, nur halt für die Handy-Version". Die waren schon drin (siehe Eintrag darunter),
byte-gleich mit `site/assets/video/intro-*-9x16.mp4`. In Handy-Größe (375×812 bzw. 394×853) geprüft:
Korea und 3D laden die 9:16-Fassung.

**Ergänzt:** Beim Test hielt das Video an, sobald der Vorschaubereich verdeckt war. Am Handy passiert
dasselbe beim App-Wechsel, und weil das Video per `play()` statt `autoplay` startet, wäre es danach
stehen geblieben. Jetzt läuft es bei `visibilitychange` → sichtbar wieder an (Listener wird beim
Abbauen entfernt). Skript in beiden Dateien geprüft. Am echten Handy nicht getestet.

---

## 21.10.2026 — Vorspann von Korea und 3D & Design als Video (Testseiten, lokal)

Max hat die Vorspann-Animationen selbst als Videos gerendert. Werkzeug: `site/render/`
(Puppeteer, `render-showreels.mjs`, LIES-MICH.md darin). Die Videos rendern Bild für Bild, ohne
Navi, Knöpfe, Fortschrittsbalken und Filmkorn (die bleiben auf der Seite). Seine Bitte: „baue bitte
mal diese Videos statt der Animation ein". Genannt hat er `korea-16x9.mp4` und `3d-design-16x9.mp4`.

**Videos:** H.264, 30 fps, ohne Ton, schon faststart. **Unverändert** kopiert (nicht neu
komprimiert) nach `site/assets/video/intro-korea-16x9.mp4` (35 s, 16,2 MB),
`intro-korea-9x16.mp4` (10,9 MB), `intro-3d-design-16x9.mp4` (48 s, 28,8 MB),
`intro-3d-design-9x16.mp4` (20,5 MB). Kein Standbild: Das erste Bild ist bei allen schwarz (alle
vier Standbilder hatten identisch 3776 Byte), also gelöscht, der Bereich ist ohnehin schwarz.

**Neue Seiten neben den Originalen** (Originale unberührt, 20.10. 19:47):
`site/Korea v3 Video.dc.html` und `site/3D Design Video.dc.html`.
- Der Inhalt von `[data-k="film"]` (Korea) bzw. `[data-k="reel"]` (3D) ist ersetzt durch **ein**
  `<video muted="true" loop="true" playsinline="true" preload="auto">` mit `object-fit:cover`.
  Boolesche Attribute mit `"true"` (siehe 05-fallen). Bei Korea sind auch die Wörter unten raus,
  die sind im Video.
- Zwei Quellen: **9:16 bei `(max-aspect-ratio: 3/4)`** (Handy, Tablet hochkant), sonst 16:9.
  Erst war es `orientation: portrait`, aber der leicht hochkante Vorschaubereich (716×811) bekam
  so schon die Handy-Fassung → geändert. Die 9:16-Fassung hat Max nicht ausdrücklich genannt,
  ich habe sie dazugenommen, weil er sie mitgerendert hat. Leicht wieder zu entfernen.
- Start wie bisher die Animation: erst nach dem Seitenwechsel (`afterCover` → `startVid`).
- Korea: Fortschrittsbalken (`data-f="vprog"`) folgt dem Video per `requestVideoFrameCallback`.
- Die Animationslogik ist noch drin, findet aber keine Elemente mehr (läuft ins Leere, schadet nicht).

**Geprüft:** Klammern, IDs, Skript, alle Dateien vorhanden. Im Browser: Video lädt, läuft, ist
stumm und in der Schleife, Knopf und Balken sind da, keine alten Animationsteile, Rest der
3D-Seite vorhanden. 404 nur für `{{ … }}`-Platzhalter (harmlos, wie im Original). **Nicht geprüft:**
echtes Handy. Ruckeln habe ich auf Max' Wunsch nicht gemessen.

**Offen, Max fragen:** `site/render/` liegt im Repo (229 MB, davon `node_modules` 90 MB,
`videos` 139 MB). Steht nicht in `.gitignore` → würde bei `git add -A` mit hochgehen. Nicht
angefasst. Ebenso offen: die gerenderte Startseiten-Fassung (`startseite-*.mp4`) ist noch nicht
eingebaut, war nicht beauftragt.

---

## 21.10.2026 — `site/Fotos-einfach.dc.html`: Max' eigener Vorschlag umgesetzt (lokal)

Max, sinngemäß: Nimm die unbearbeitete Seite. Am Anfang alles in schlechter Qualität laden. Erst
wenn man auf ein Bild gezoomt wird und direkt drauf ist, lädt **dieses eine Bild** nach ~0,5 s die
beste Fassung. Bewegt man sich, wird das abgebrochen. Und deutlich: **„Das ganze Messen bringt
nichts … ich messe für dich. Du misst gar nichts, du änderst einfach nur."** → keine
Leistungsmessungen mehr von mir, Max testet selbst.

Umgesetzt als Kopie von `Fotos.dc.html` (Original unberührt, 20.10. 19:47), nur drei Eingriffe:
1. Alle 78 Bilder starten mit der kleinen Fassung `assets/fotos-leicht/s/` (360 px).
2. `hires()` ist leer: Zoomen lädt **nichts** Größeres nach.
3. Klick/Pfeil auf ein Bild (`focus`): nach Fahrt (1 s) + 0,5 s lädt nur dieses Bild voll, getauscht
   nach `decode()`. Verlassen (`unfocus`, Ziehen, Rad, anderes Bild) bricht ab und setzt große
   Fassungen wieder auf klein.
Nachbarbilder werden nicht mehr vorgeladen. Die Ebene mit `will-change` ist geblieben, wie sie war.
Geprüft nur statisch (Klammern, Skript, alle kleinen Fassungen vorhanden), auf Max' Wunsch nicht
im Browser gemessen.

---

## 21.10.2026 — `Fotos-webgl` ruckelt laut Max „noch viel viel krasser"

Dritter Versuch, der es für Max nicht besser macht (leicht → leinwand → webgl). Ehrlich festgehalten:
Ich habe zu viel aus Teilmessungen geschlossen. Nachprüfung jetzt: Die Seite selbst ist im
Ruhezustand still (Schleife steht, keine Warteschlange, Timer 0,5 ms). Der Vorschaubereich lief
trotzdem nur mit 4 Bildern/s (sichtbar, aber das Claude-Fenster nicht vorne). **Eine saubere
Vergleichsmessung aller vier Fassungen ist nur möglich, wenn Max das Claude-Fenster eine Minute
vorne lässt und nichts anfasst.** Darum gebeten, außerdem gefragt, in welchem Browser er testet.
Nichts weiter umgebaut.

---

## 21.10.2026 — Fotos per WebGL, Nachladen erst nach dem Anhalten: `site/Fotos-webgl.dc.html` (lokal)

**Max zu `Fotos-leinwand`:** flackert nicht mehr, **ruckelt aber stark** auf dem MacBook, vor allem
„wenn ich vom Bild, wo ich alle Bilder sehe, auf eins draufdrücke und dann automatisch
reingezoomt wird". Auch in meiner Vorschau. Sein Wunsch: **„mach halt, dass es flüssig rein
lädt, in die komprimierte Version des Fotos, also die kleinere, und dann nach einer Zeit
einfach die bessere lädt"**.

**Gemessen an `Fotos-leinwand` (2D-Canvas), Klick in der Übersicht:** einzelne Zeichendurchgänge
96 ms bis **1,4 s**. Die 2D-Leinwand lädt jedes neue Foto beim ersten Zeichnen in die Grafik und
verkleinert mit hoher Qualität, alles im Hauptprozess. Schon das bloße Bewegen in 1512×982
(Leinwand 3024×1964) kostete regelmäßig 16,7 ms pro Bild.

**Neu, `Fotos-webgl.dc.html`** (Kopie von `Fotos-leinwand`, das bleibt liegen):
- Zeichnen per WebGL 2 (Rückfall WebGL 1, dann 2D). Jedes Foto wird einmal als Textur mit
  Mipmaps hochgeladen, danach zeichnet die Grafik 78 Rechtecke. Gemessen: ein kompletter
  Durchgang inkl. `gl.finish()` **0,2 ms** (Apple M4 Pro, ANGLE/Metal).
- Hochladen über eine Warteschlange, nicht beim Zeichnen.
- **Wie von Max gewünscht:** Während einer Bewegung (Fahrt, Zoom, Ziehen) wird **nichts
  nachgeladen**, es wird die kleine Stufe gezeichnet. 0,2 s nach dem Anhalten werden die nötigen
  Stufen geholt und **einzeln** hochgeladen (höchstens 6 Bilder bzw. 1,2 MP pro Bild). Neue
  Bewegung pausiert das. Die Großansicht lädt nicht mehr sofort voll (`loadHi` aus `focus`
  entfernt), sondern erst nach der Fahrt.
- Kontextverlust der Grafik wird abgefangen (Texturen neu laden).

Instrumentiert vor der letzten Änderung: Während der Fahrt hingen einzelne GL-Befehle
(`uniform4f` 114 ms, `clear` 183 ms, `texImage2D` 139 ms). Das ist Rückstau in der Grafik durch
gleichzeitiges Hochladen, deshalb das Nachladen nur in Ruhe. Einzelnes großes Foto separat
gemessen: holen 10 ms, entpacken 10 ms, hochladen 2 ms. Das ist also nicht das Problem.

**Nicht sauber nachgemessen:** Die Fahrt nach der letzten Änderung. Mitten in der Messung wurde
der Vorschaubereich verdeckt (Max testete parallel, rAF 1/s, `visibilityState: hidden`). Die
Werte dieser Läufe (bis 2 s „Bildzeit") sind **wertlos**. Gesichert ist nur: Beim Klick gibt es
keinen langen Block im Hauptprozess (PerformanceObserver `longtask` leer). **Max muss selbst
testen.**

Stand der Testdateien: `Fotos-leicht` (verworfen, Speicher), `Fotos-leinwand` (kein Flackern, aber
Ruckeln), `Fotos-webgl` (aktueller Versuch). `Fotos.dc.html` unberührt. Nichts hochgeladen.

---

## 21.10.2026 — Fotos-Seite als Leinwand: `site/Fotos-leinwand.dc.html` (lokal, nicht hochgeladen)

**Max' Rückmeldung zu `Fotos-leicht`:** „keinen Deut performativer", flackert auch auf seinem
MacBook bei schnellem Rein-/Rauszoomen und Wischen. Nach dem Rauszoomen gibt es **schwarze
Flecken, wo die Bilder nicht laden**. „Ich glaube, du musst es anders lösen."

**Ursache (jetzt gesehen, Browserbereich lief diesmal mit 120 Bildern/s):** Bildschirmfotos
mitten in schneller Bewegung zeigen schon auf der **Originalseite** fehlende Flächen und
rechteckige Löcher in Bildern. Der Browser rastert die eine riesige Ebene (10000×7160 px,
`will-change:transform`, Zoom per `scale`) nicht schnell genug nach. Der Hauptprozess war dabei
unauffällig (Median 8,3 ms). Das Problem liegt also im Zeichnen, nicht im Skript. Die Stufen in
`Fotos-leicht` sparen Speicher, ändern daran aber nichts, und sie tauschten beim schnellen Bewegen
69 statt 11 Mal ein Bild. **Der Ansatz `Fotos-leicht` ist damit verworfen** (Datei bleibt zum
Vergleich liegen).

**Neuer Ansatz:** Die Fotowand wird per `<canvas>` gezeichnet. Pro Bild zeichnet die Seite selbst
die gerade sichtbaren Fotos aus fertig entpackten `ImageBitmap`s. Fehlt eine größere Stufe noch,
wird die kleinere gezeichnet. Löcher sind so nicht möglich. Gleiche Bilder und Stufen wie
`fotos-leicht/` (s/m/voll). Die kleine Stufe aller 78 Bilder bleibt immer geladen, größere werden
nach 1,5 s Ruhe wieder freigegeben. Einblendung (gestaffelt, gleiche Kurve
`cubic-bezier(.16,1,.3,1)`, 900 ms), Abdunkeln in der Großansicht, Klick, Pfeile, Escape, Knöpfe,
Ziehen, Schwung und Mauszeiger sind nachgebaut, Treffer per Koordinate statt per Element.
Fenstergröße wird jetzt direkt im resize-Handler behandelt (`resized()`), weil
`componentDidUpdate` von der Laufzeit ohne prevState aufgerufen wird.

**Zwei eigene Fehler, beim Messen gefunden und behoben:**
1. Bei starkem Zoom dauerte ein Bild bis **2 s**: Es wurde das ganze riesig vergrößerte Foto
   gezeichnet, auch außerhalb des Schirms, und das mit `imageSmoothingQuality='high'`. Jetzt wird
   nur der sichtbare Ausschnitt gezeichnet, „high" nur noch beim Verkleinern. Danach max. 9,4 ms.
2. Ein einzelner Hänger von **0,7 s** beim schnellen Rein und Raus: `createImageBitmap(img)`
   entpackt in Chrome im Hauptprozess. Jetzt `fetch` → Blob → `createImageBitmap`, mit Rückfall
   auf `<img>`. Danach max. 16,5 ms (erster Durchgang) bzw. 9,4 ms.

**Gemessen** (eingebauter Browser, echt laufend, 120 Hz, 716×811 px):

| Test | langsamstes Bild | Bilder > 20 ms |
|---|---|---|
| 14× „+" bis tief hinein | 25,1 ms | 2 |
| tief hineingezoomt hin und her schieben | 9,4 ms | 0 |
| 3× schnell rein, wischen, raus (kalt) | 16,5 ms | 0 |
| dasselbe nochmal | 9,4 ms | 0 |

Bildschirmfotos mitten in der Bewegung zeigen keine Löcher. Speicher: Übersicht 6,7 MP (26 MB),
tief hineingezoomt nach langem Wischen 38 MP (146 MB), 4 s nach „0" wieder 7,6 MP (29 MB).
Bedienung per echtem Klick geprüft: Katze → Großansicht (scharf, Rest abgedunkelt), Pfeil →
nächstes Bild, ✕, „Alle Bilder", +, −, Ziehen.

**Nicht geprüft:** Touch/Pinch am Handy und Tablet (Logik unverändert übernommen, aber nicht
getestet), Safari. Einen Nachteil gibt es: Die Fotos sind auf der Leinwand keine einzelnen
`<img>` mehr (kein Rechtsklick „Bild speichern", kein Alt-Text pro Bild; vorher stand überall nur
„Foto").

---

## 21.10.2026 — Testfassung `site/Fotos-leicht.dc.html` (lokal, nicht hochgeladen)

Max: „können wir das testweise mal ausprobieren, wie es wäre, wenn du es performativer machen
würdest?" Gemeint ist die Fotos-Seite (siehe Eintrag darunter). Den Hinweis zum
iPhone-Stromsparmodus (Nachteil der Video-Idee) soll ich ignorieren.

**Neu angelegt, nichts überschrieben:** `site/Fotos-leicht.dc.html` (Kopie von `Fotos.dc.html`)
und `site/assets/fotos-leicht/s/` (78 Bilder, 360 px lange Kante, cwebp q74, zusammen 0,8 MB) sowie
`…/m/` (66 Bilder, 960 px, q72, 2,5 MB). Zwölf `fotos/`-Bilder sind ≤ 700 px und haben keine
mittlere Stufe. Quelle war jeweils das volle Bild aus `site/assets/`, hochskaliert wurde nichts.
`Fotos.dc.html` ist unberührt (Zeitstempel 20.10. 19:47).

**Änderungen in der Testfassung:**
- Jedes Bild hat drei Stufen (klein/mittel/voll). `hires()` wählt pro Bild die kleinste Stufe, die
  für die Bildschirmgröße × DPR reicht. Aufgestuft wird sofort, abgestuft nur in Ruhe und nur,
  wenn das Bild deutlich (unter 60 %) kleiner ist als die aktuelle Stufe. Bilder mehr als eine
  halbe Bildschirmbreite außerhalb fallen auf klein zurück. In der Großansicht bleiben das Bild
  und seine Nachbarn voll.
- Getauscht wird erst nach `decode()`, mit Rückfall nach 0,4 s (siehe 05-fallen).
- Die rAF-Schleife hält nach ~30 Ruhebildern an, Eingaben, `flyTo` und `zoomBy` wecken sie.
- Seitentitel „Fotos (Test leicht)". Kein Link aus der Navi, nur direkt erreichbar.

**Gemessen** (eingebauter Browser, Ersatztakt per setTimeout, DPR 2, gleiche Abfolge: Übersicht →
5× „+" → seitlich schieben → 3× „+" → „0"):

| Zustand | Original | Testfassung |
|---|---|---|
| Übersicht nach dem Öffnen | 47,6 MP · 182 MB | 9,8 MP · 38 MB |
| 5× hineingezoomt | 57,9 MP · 221 MB | 19,6 MP · 75 MB |
| verschoben | 60,5 MP · 231 MB | 19,2 MP · 73 MB |
| 8× hineingezoomt | 60,5 MP · 231 MB | 12,3 MP · 47 MB |
| zurück in der Übersicht | 61,9 MP · 236 MB | 9,8 MP · 38 MB |
| iPad-Format 1180×820, Übersicht | 46,9 MP · 179 MB | 8,2 MP · 31 MB |

Qualitätsprüfung: In keinem Zustand ist ein sichtbares Bild kleiner als 90 % der benötigten
Pixel (oder es ist schon das volle Bild). Großansicht zeigt das volle Bild (1700 px bei
1150 px Anzeige). Keine kaputten Bilder.

**Eigener Fehler, beim Prüfen gefunden:** Beim Abstufen bin ich zuerst auf die Stufe `keep`
statt `lv` gesprungen, also eine Stufe zu tief. Das ergab 7 leicht unscharfe Bilder in der
Übersicht (z. B. Feld-Porträt 360 statt 453 px nötig). Korrigiert und nachgemessen: 0.

**Nicht geprüft:** echtes Flüssigsein auf einem Tablet. Der Browserbereich war verdeckt,
rAF stand still (0 Bilder/s), deshalb gibt es keine Bildraten. Gemessen ist nur der Bildspeicher.
Ebenfalls nicht angefasst: die riesige Ebene mit `will-change:transform` und die
Einblend-Animation der 78 Bilder.

**Gesehen, nicht verursacht:** `TypeError: Cannot read properties of undefined (reading 'vw')`
in `componentDidUpdate` tritt auch im **Original** auf (die Laufzeit ruft es ohne prevState auf).

Offen: Max testet am Tablet. Dafür müsste die Testseite hochgeladen werden (nur die neuen
Dateien), **Max fragen**. Der lokale Server hört nur auf 127.0.0.1, das Tablet kommt also nicht dran.

---

## 21.10.2026 — Fotos-Seite: Grafiklast untersucht (nur gemessen, nichts geändert)

Ein Freund von Max meinte, die Fotos-Seite (`site/Fotos.dc.html`) könne schwächere Geräte, vor
allem **Tablets**, überfordern: Flackern, Bilder laden nicht sauber. Sein Vorschlag war, die
Vorspann-Animationen (Korea, 3D) als Video zu rendern. Max stellte klar: **es geht nicht ums
langsame Laden, sondern darum, dass die Grafik zu viele Bilder gleichzeitig zeigen muss**, und
zwar auf der Fotos-Seite.

Gemessen im eingebauten Browser, 1440×900, DPR 2:
- 78 Bilder auf einer einzigen Fläche von 10000×7160 px (`will-change:transform`, gezoomt per `scale`).
- Die „Vorschaubilder" sind 640–960 px breit (`thumb/n/`, `korea/t/`). Teils gibt es gar keine
  Vorschau, dann wird gleich das volle Bild geladen (`portraits/`, `fotos/`, `a()` ohne `th`).
  Angezeigt werden sie in der Übersicht mit **14–515 px, im Median 70 px**. Im Median sind sie
  damit ~5× größer als nötig.
- Schon in der Übersicht ergibt das **46 Megapixel ≈ 180 MB entpackte Bilddaten**. Nach etwas
  Herumzoomen waren es in einem ersten Lauf 88 MP ≈ 340 MB, weil geladene Vollbilder nie wieder
  freigegeben werden.
- Übertragen wurden ~4,2 MB. Am Laden liegt es also tatsächlich nicht.

Die Korea-Messung ist abgebrochen, weil der Browserbereich zugeklappt war (rAF eingefroren).
Vorschläge an Max siehe Antwort vom selben Tag: echte kleine Vorschaustufen, Speicher wieder
freigeben, Bildtausch erst nach `decode()`, Ebene ruhen lassen. **Noch nichts umgesetzt**, Max'
Antwort steht aus.

---

## 21.10.2026 (neue Session) — Überblick abgefragt, nichts geändert

Max fragte, ob ich alles Wichtige sehen und verstehen kann. Ich habe den Stand zusammengefasst,
die vier offenen Fragen unten noch einmal gestellt und angeboten, in `01-ueberblick.md` einen
Vermerk „überholt, siehe site/" nachzutragen. Außerdem habe ich auf die vielen unversionierten
Dateien hingewiesen (u. a. `assets/3D/`, `.acr`, `korea/`, `portraits-neu/`, `Vorlagen/`), die
bei einem pauschalen `git add -A` mit hochgehen würden. Max' Antwort: **„nö es sollte alles
passen"**. Deshalb nichts geändert, auch kein Vermerk im Überblick. Ob das auch die vier offenen
Fragen einzeln beantwortet, ist **unklar**. Sie bleiben offen, bis Max sie ausdrücklich beantwortet.

---

## 21.10.2026 — Sammelstelle: offene Punkte zum Sessionende (für den nächsten Chat)

Website = `site/` (Claude Design Version 2), Einstieg `site/Startseite Stream.dc.html`. Letzter
veröffentlichter Commit `cf13c46`. **Lokal noch nicht hochgeladen:** nur Doku-Einträge
(dieser + „Ganze Filme in besserer Qualität … verworfen" + Live-Vermerk zu Maskiert).

Offene Fragen an Max, **keine davon beantwortet** — nichts davon ungefragt umsetzen:
1. Navi und iCapsule verlinken „Startseite" auf `Startseite.dc.html` (Kartenwand) statt auf
   „Startseite Stream" — umstellen?
2. `Portfolio/assets/img/design3d/plakat-syntheca.jpg` ist lokal gelöscht, online noch da — Absicht?
3. Einspieler: beim Kürzen der schwarzen Bilder sind Tonausklänge weggefallen — zurückholen?
4. Originale liegen noch in `Portfolio/assets/video/neu/` (~1 GB) und `img/design3d/neu/` —
   nach `Neu/` verschieben, damit sie nie mit hochgehen?
5. `kreativ.html` benutzt das fragmentierte `film-electrify.mp4` (Browser meldet 5 s Länge) —
   nicht beauftragt, nicht angefasst.
6. Ganze Filme bewusst in alter Qualität gelassen (Max: „passt schon").

---

## 21.10.2026 — Ganze Filme in besserer Qualität: angefangen, auf Max' Wunsch verworfen

Max fand die ganzen Filme „sehr verpixelt" und wollte sie etwas weniger stark komprimiert (nur die
Filme, die Showreel-Clips passen). Kurz darauf: **„lass so, das passt schon, komprimiere nichts neu."**
Grund nicht genannt. **Nichts geändert, nichts hochgeladen.**

Was bis dahin herauskam, für ein späteres Mal:
- Die Filme laufen in 720p mit sehr wenig Datenrate (Bergmann 0,8, Kommt zu mir 0,5, Hostage 0,76,
  Imker 1,5 Mbit/s), die Showreel-Clips dagegen in 1080p mit 4–6 Mbit/s — daher der Unterschied.
- Originale: Bergmann, Kommt zu mir, Hostage Holiday (`TeamA4_…mp4`) in `Neu/Videos/` (1080p),
  Imker in `Neu/Videos/Andere Video Projekte/Imker.mov` (4K/50p). **Electrify hat kein besseres
  Original** — `Neu/Videos/Electrify Your Future.mp4` ist selbst schon die 720p-Fassung mit 1 Mbit/s.
- **Platz:** GitHub Pages erlaubt 1 GB pro Seite, belegt sind 694 MB → gut 300 MB Luft.
- Probe (40 s aus der Mitte, x264 slow, SSIM gegen Original bei 1080p), hochgerechnet auf ganze Länge mit Ton:

| Film | jetzt | 720p CRF 22 | 1080p CRF 23 | 1080p CRF 25 | 1080p CRF 27 |
|---|---|---|---|---|---|
| Bergmann | 46,5 MB · 0,9829 | 82,0 MB · 0,9890 | 147,2 MB · 0,9918 | 116,8 MB · 0,9903 | 93,7 MB · 0,9886 |
| Kommt zu mir | 21,7 MB · 0,9823 | 39,0 MB · 0,9885 | 68,4 MB · 0,9929 | 53,3 MB · 0,9914 | 41,6 MB · 0,9897 |
| Hostage Holiday | 16,7 MB · 0,9863 | 18,9 MB · 0,9869 | 40,1 MB · 0,9886 | — | — |

Imker nicht mehr gemessen (abgebrochen). Bergmann ist in 1080p der teure Fall (dunkles Bergwerk).

---

## 21.10.2026 — Einspieler Staffel 1: Maskiert ans Ende

Max: in Staffel 1 (The Big Brain Battle) soll **Maskiert die letzte Folge** sein, nach Regal. Neu: Auto → Theke → Schutzbrille → Regal → Maskiert (Folgennummern zählen automatisch mit). Nur die Reihenfolge in `site/Video.dc.html` geändert. Im Browser geprüft: Reihe und Infofenster zeigen Maskiert als Folge 5. **Hochgeladen** auf Max' Ja (Commit `cf13c46`), nach ~90 s live geprüft: Reihenfolge auf der Live-Seite stimmt.

---

## 21.10.2026 — Video-Seite: ganze Filme, Reihenfolge der Reihen, Staffeln getauscht

Max: „Abspielen" soll den **ganzen Film** zeigen, nicht nur den Ausschnitt. Dazu: bei den
Einspielern die Clips von „The Big Brain Battle" zuerst, in „Filme aus dem Studium" **Bergmann
zuerst** und **Imagefilm als viertes**. Ausdrücklich: **an den Showreel-Clips oben nichts ändern.**

**Ganze Filme:** neues Feld `full` in `films` (`site/Video.dc.html`); `playOf()` nimmt es vor
`embed` und Ausschnitt, mit Ton. Gilt für Abspielen im Infofenster, im Vorschau-Popup und für den
Abspielen-Knopf oben im Showreel (der spielt jetzt den ganzen Film des gerade laufenden Clips;
bei den Einspielern weiter den Ausschnitt, die haben keinen ganzen Film). Die Filme lagen schon
im Repo unter `Portfolio/assets/video/` und werden per `../Portfolio/assets/video/` verwiesen —
**nicht neu hochgeladen**: Bergmann 5:48, Hostage Holiday 2:18, Kommt zu mir 5:17.
**Bienen = `film-imker.mp4` (1:14)** — von Max so gewählt (Alternative war `film-animals.mp4`,
2:44 mit Eule/Elch/Wolf; beide waren laut Doku bisher bewusst nicht eingebaut). „Kommt zu mir"
ist damit abspielbar, das Schild „Ausschnitt folgt" fällt weg; einen Showreel-Clip hat er
weiterhin nicht (Max' Wahl von früher).
**Electrify** war ein fragmentiertes MP4 (Browser meldete 5,04 s statt 3:01, siehe 05-fallen) →
verlustfrei umgepackt nach `site/assets/video/film-electrify.mp4` (25,9 MB, Prüfsummen von Bild
und Ton identisch). Original in `Portfolio/assets/video/` unberührt — `kreativ.html` benutzt
weiter das alte, fehlerhafte; nicht beauftragt, Max Bescheid gesagt.

**Einspieler:** auf Max' Wahl die Staffeln komplett getauscht — **Staffel 1 = The Big Brain
Battle**, Staffel 2 = Doschauher, ein Mord! (Nummern, Reiter im Infofenster und Reihe folgen).
**Filme-Reihe:** eigene Reihenfolge Bergmann → Doschauher → Bienen → Imagefilm → Hostage Holiday →
Kommt zu mir. `films` selbst und die Showreel-Liste `clips` unverändert.

**Geprüft im Browser:** Reihenfolge aller drei Reihen ausgelesen; Showreel weiter Bergmann →
Electrify → Einspieler → Bienen → Hostage (nur die Clip-Dateien). Abspielen im Infofenster: alle
fünf Filme laden die ganze Datei, mit Ton, Längen 348/74/138/317 s; Electrify neu 181 s.
Sicherung vorher: `Portfolio/archiv/Video.dc.2026-10-21-vor-ganzen-filmen.html`.
**Hochgeladen** (Commit `2258581`), live geprüft: nach ~2 min ausgeliefert, Staffeln und Reihe stimmen, alle fünf Filmdateien antworten mit 200 und richtiger Größe. Nur 25,9 MB neu (Electrify), die anderen vier lagen schon oben.

---

## 21.10.2026 — Showreel-Reihenfolge auf der Video-Seite

Max: im Showreel oben auf der Video-Seite soll **„Ein Tag als Bergmann" zuerst** und **Hostage
Holiday zuletzt** laufen. Geändert nur die eigene Clip-Liste (`site/Video.dc.html`, `const clips = […]`),
nicht die Filmliste `films` — die Reihen weiter unten bleiben unverändert. Neu: Bergmann →
Electrify → Einspieler → Bienen → Hostage Holiday (mittlere drei in alter Reihenfolge). Im Browser
geprüft: Titel oben „Ein Tag als Bergmann", beim Öffnen lädt nur `showreel-5-bergmann.mp4`.
**Hochgeladen** (Commit `d51cc9e`), live geprüft.

---

## 21.10.2026 — Claude Design Version 2 online (site/)

Max hat einen neuen Export geliefert (`Portfolio-Website Überblick (2).zip`, 618 Dateien, 453 MB)
und wollte ihn hochgeladen, **fehlende Videos ergänzt**. Einstieg nach Rückfrage:
**„Startseite Stream"**. „Kommt zu mir" bleibt vorerst ohne Ausschnitt (Max' Wahl).

Die Export-Notizen nannten drei verschiedene „Hauptseiten" (Portfolio v4, Startseite, Startseite
Stream) — deshalb gefragt. Von beiden Startseiten sind dieselben 11 Seiten erreichbar.

**Aufbau:** eigener Ordner `site/` im Repo (keine Kollision mit `Portfolio/assets/`): 11 Seiten,
`support.js`, `seitenwechsel.js`, `flug-uebergang.js`, `live/icapsule.html`, `assets/` (ohne
`3d/`, ungenutzt, 31 MB), `ueber-mich/max-1…4.webp` (lag im Export außerhalb von assets →
erst übersehen, beim Test als 404 gefunden). Weiterleitungen: Repo-Wurzel, `Portfolio/index.html`,
`Portfolio/live/index.html` → `site/Startseite%20Stream.dc.html`. Alte Hauptseite gesichert als
`Portfolio/live/claude-design-1.html` (byte-gleich).

**Ergänzt:** Einspieler Reportage/Theke/Schutzbrille/Regal (gekürzte Fassungen aus `neu_web`) mit
`vid` + `dur` in `Video.dc.html`. **Drohnenseite** war wieder Claude Designs Fassung ohne meine
Korrekturen (5 Videos sofort geladen, Papierflieger nur Standbild) → erneut: verzögertes Laden
(`data-lsrc`), Papierflieger als Video mit Bedienleiste + Steuerung aus `live/drohne.html`.
Seitentitel ergänzt (keine Seite hatte einen).

**Geprüft im Browser:** alle 9 Seiten + iCapsule ohne fehlende Dateien und ohne kaputte Bilder
(Anfragen nach `{{ … }}` sind Platzhalter der Laufzeit, harmlos). Videos beim Öffnen: Stream nur
Logo-Intro, Drohne nur Zeitraffer, 3D & Design 3 kurze Showreel-Clips (~7 MB), Video 2.
**Offen:** Navi und iCapsule verlinken „Startseite" auf `Startseite.dc.html` (Kartenwand), nicht
auf die gewählte Stream-Seite — Max fragen. Seiten brauchen JS + unpkg (React, Lenis).
Upload: 242 MB neu (Claude Design hat alle Bilder als eigene Fassungen abgelegt), 64 MB
inhaltsgleich schon vorhanden.

**Veröffentlicht:** Commit `75e81ae` (327 Dateien, nur `site/`, Weiterleitungen, Sicherung, Doku —
explizit vorgemerkt). Live geprüft: alle Einstiegsadressen leiten auf die Stream-Startseite, neue
Clips, Papierflieger und Über-mich-Bilder antworten mit 200, Live-Seite lädt ohne fehlende Dateien.
Nicht im Commit: Max hat lokal `Portfolio/assets/img/design3d/plakat-syntheca.jpg` gelöscht — online
bleibt sie (Löschung nicht übernommen).

---

## 20.10.2026 (abends) — Einspieler gekürzt und stärker komprimiert

Max: Einspieler **stärker komprimieren** und **schwarze Bilder am Anfang und Ende wegkürzen**.
Name der Show bestätigt: **„Dochschauher TV"** (so von Max bestätigt).

**Befund:** bei allen acht genau 10 s Schwarz am Anfang (Überwachungskamera 10,08 s) und
8–14 s am Ende — ein Drittel jedes Clips. **Im Schwarz läuft teils Ton weiter** (ausklingende
Musik/Atmo: maskiert 11 s, Regal 6 s, Auto 6 s und Vorlauf 1,7 s vor dem ersten Bild, Schutzbrille
1,7 s, Theke 1,2 s). Entscheidung: auf Max' Wunsch **genau am ersten/letzten echten Bild**
geschnitten (`trim`/`atrim`, bildgenau), Ton an den Schnittstellen weich geblendet (Ende 0,6 s,
Anfang 0,25 s), nur wo dort Ton lag. Damit fehlen die ausklingenden Tonschwänze — Max darauf
hingewiesen, falls er sie zurück will.

Neu: Bild **CRF 23** (statt 20/21), Ton **AAC 160k** (statt Kopie 320k). Zusammen **240 → 132 MB**.

| neu_web | Länge | Größe | Mbit/s |
|---|---|---|---|
| `einspieler-handyaufnahme` | 49,7 s | 6,2 MB | 1,0 |
| `einspieler-reportage` | 72,1 s | 20,1 MB | 2,3 |
| `einspieler-ueberwachungskamera` | 50,8 s | 9,9 MB | 1,6 |
| `einspieler-maskiert` | 22,3 s | 15,1 MB | 5,7 |
| `einspieler-theke` | 32,8 s | 16,5 MB | 4,2 |
| `einspieler-regal` | 44,5 s | 24,6 MB | 4,6 |
| `einspieler-auto` | 28,2 s | 16,0 MB | 4,7 |
| `einspieler-schutzbrille` | 36,7 s | 24,4 MB | 5,6 |

Geprüft: Bildanzahl exakt = Schnittlänge × fps bei allen; Bild- und Tonlänge identisch
(synchron); kein Schwarz mehr an Anfang/Ende (blackdetect + Helligkeit der ersten Bilder);
faststart; Poster neu (Mittelbild hatte sich verschoben). Die Datenrate je Sekunde ist bei
maskiert/Schutzbrille gestiegen, weil das „billige" Schwarz fehlt — die Dateien sind trotzdem
kleiner. **Qualität:** schwächstes Bild doppelt vergrößert — das **künstliche VHS-Rauschen ist
sichtbar ruhiger** (Retro-Look etwas sauberer), nicht verpixelt. Option für Max: VHS-Clips mit
CRF 21.

**Drei eigene Fehler, alle vor dem Ersetzen gefunden:** (1) zsh las `$AF[a]` als
Listenelement → „Filter not found", keine Datei erzeugt; (2) `$a:end` als Modifikator `:e` →
überall `${…}`; (3) Qualitätsvergleich zuerst gegen das nur vorne beschnittene Original →
verglich mit dem schwarzen Nachlauf (Werte 0,62–0,67). **Merke:** beim Vergleich gekürzter
Videos das Original auf **denselben Ausschnitt** (`trim=start:end`) begrenzen.

---

## 20.10.2026 (später) — acht TV-Einspieler webtauglich, nicht eingebaut

Max: die acht Einspieler in `video/neu/` (für die TV-Show des Studiengangs) ebenso aufbereiten
— Name der Show bitte bei Max erfragen, nicht raten (diktiert als „Dochschauher TV").
Quellen: alle 1920×1080, 24/25 fps, 46–92 s, 3,8–10,7 Mbit/s, **echter Ton** (AAC 320k, Sprache,
Spitzen bis 0 dB). Fünf hatten Hash-Dateinamen.

**Regel wie bei den Showreels** (Full HD, so wenig Kompression wie möglich bei ~5 Mbit/s), dazu:
**Ton unverändert kopiert** (`-c:a copy`, schon browsertauglich; per MD5 geprüft: bitgleich),
und jede Datei **unter 50 MB** (GitHub-Warnschwelle).

| neu_web | Quelle | Verfahren | Mbit/s | Größe |
|---|---|---|---|---|
| `einspieler-handyaufnahme` | Einspieler_Handyaufnahme_v12.mp4 | **umverpackt** (Original schon 3,8 Mbit/s) | 3,8 | 31,3 MB |
| `einspieler-reportage` | Einspieler_Reportage_v12.mp4 | CRF 20 | 3,2 | 35,7 MB |
| `einspieler-ueberwachungskamera` | Einspieler_ueberwachungskamera_v12.mp4 | CRF 20 | 2,4 | 20,5 MB |
| `einspieler-maskiert` | c1457eed….mp4 | CRF 20 | 4,4 | 24,6 MB |
| `einspieler-theke` | 723ce04f….mp4 | CRF 20 | 4,6 | 28,8 MB |
| `einspieler-regal` | e560c962….mp4 | CRF 21 | 4,7 | 35,3 MB |
| `einspieler-auto` | 73bcbeac….mp4 | CRF 20 | 4,9 | 28,3 MB |
| `einspieler-schutzbrille` | 6904264e….mp4 | CRF 21 | 5,3 | 35,9 MB |

Namen der fünf Hash-Clips nach dem Sichtbaren gewählt (Supermarkt-Geschichte; Sturmhaube,
Theke, Regal, Auto, Schutzbrille/Tresor) — Reihenfolge der Geschichte unbekannt.
Schwächstes Einzelbild je kritischem Clip doppelt vergrößert geprüft: Reportage und Regal ohne
Unterschied (auch die kleine Schrift „Mövenpick", Preis); **Schutzbrille: künstliches VHS-Rauschen
minimal ruhiger** — nur vergrößert sichtbar, nicht verpixelt. Klötzchen-Störungen im
Überwachungskamera-Clip sind **im Original** (vermutlich gewollter Effekt).
Handyaufnahme bei CRF 20 wäre nur 10,5 MB bei SSIM 0,998 — Max als Option genannt.

`Netflix Intro_g30003-0100.mp4` nicht angefasst (nicht beauftragt).

---

## 20.10.2026 — fünf Showreels webtauglich, nicht eingebaut

Max: die 5 Showreels in `video/neu/` (`*_showreal_1…5.mov`) so wenig wie nötig komprimieren —
**nicht verpixelt, aber ohne Ruckeln**. Quellen: alle 1920×1080, 24 fps, H.264, 8,5–11,7 s,
**10–14 Mbit/s** (zu viel für schwache Leitungen). Tonspuren PCM 24 Bit; vier still (-91 dB),
**Electrify mit echtem Ton** (-25,8 dB, nur Sek. 7–9).

**Regel:** Full HD behalten, **so wenig Kompression wie möglich, solange die Datenrate bei
~5 Mbit/s bleibt**; CRF 22 als Grenze nach oben. Je Showreel CRF 18/20/22 gerechnet
(`-preset slow -tune film`). Geprüft am **jeweils schwächsten Einzelbild** bei CRF 22 (per
SSIM-Statistik je Bild gesucht), doppelt vergrößert gegen das Original: Bienen (Rost, Rauch),
Einspieler (Überwachungskamera-Zeilen), Bergmann (dunkler Stollen) — kein sichtbarer Unterschied.

| neu_web | Quelle | CRF | Mbit/s | Größe | Ton |
|---|---|---|---|---|---|
| `showreel-1-electrify` | Electrify_showreal_1.mov | 18 | 3,8 | 4,6 MB | AAC (Pegel identisch) |
| `showreel-2-einspieler` | Einspieler_showreal_2.mov | 22 | 5,6 | 7,3 MB | — |
| `showreel-3-bienen` | Bienen_showreal_3.mov | 22 | 5,9 | 8,2 MB | — |
| `showreel-4-erstes-semester` | 1.Semester_showreal_4.mov | 20 | 4,7 | 5,3 MB | — |
| `showreel-5-bergmann` | Bergmann_showreal_5.mov | 22 | 4,2 | 4,2 MB | — |

Alle Bildanzahlen = Original, faststart, Poster (Mittelbild). PCM-Ton in MP4 spielt kein
Browser → AAC. Electrify meldet nur 34 kbit/s Ton, weil 8 von 10 s still sind — geprüft.

**Nicht angefasst**, liegen seit 19.10. ebenfalls in `video/neu/`: drei `Einspieler_*_v12.mp4`
(31–117 MB), fünf Dateien mit Hash-Namen (37–71 MB), `Netflix Intro_g30003-0100.mp4` — nicht
beauftragt. Originale in `video/neu/` zusammen inzwischen weit über 1 GB — **vor jedem Upload
klären**.

---

## 17.10.2026 (abends) — „Vorstellungskraft"-Video: umverpackt statt komprimiert

Max: neues Video `video/neu/0001-0133.mp4` webtauglich, aber **„sehr gut erhalten"**. Inhalt:
Satz „Denn hier ist die einzige Grenze meine Vorstellungskraft.", dann fällt ein Schädel auf ein
Treibholz mit Moos und Blüten, hellgrauer Grund. 1920×1080, 24 fps, 133 Bilder, 5,5 s, 4,8 MB
(~7 Mbit/s), stille Tonspur (-91 dB), kein faststart.

Verglichen: neu berechnet in Full HD mit CRF 16 (7,9 MB, SSIM 0,9976) und CRF 18 (6,7 MB, 0,9968)
gegen bloßes Umverpacken (`-c copy`, 4,8 MB, 1,0). **Neu berechnen wurde größer UND schlechter**
— das Original ist schon effizient kodiert. Deshalb umverpackt: `-c copy -an -movflags +faststart`.
**Merke:** Wenn eine Quelle schon web-taugliches H.264 in vernünftiger Datenrate ist, erst
Umverpacken prüfen, bevor man neu rechnet.

Ergebnis `video/neu_web/vorstellungskraft-schaedel.mp4`: alle 133 Bilder per Prüfsumme
(`framemd5`) **bitgleich** mit dem Original, startet sofort, ohne Tonspur. Bewusst nicht auf
1280 verkleinert (Schrift und Moos). Poster `vorstellungskraft-schaedel-poster.jpg/.webp`
(Bild 110, Schädel auf dem Holz).

---

## 17.10.2026 — zehn Render-Videos aus video/neu webtauglich, nicht eingebaut

Max: alle noch nicht komprimierten Videos in `assets/video/neu/` webtauglich nach
`video/neu_web/`. Zehn Blender-Ausgaben (alle ohne echten Ton, SDR, 24/30 fps), dazu das schon
fertige Park-Video. Jeweils H.264 High, yuv420p, ohne Ton, faststart, Poster (JPEG + WebP),
Bildanzahl = Original (bei allen nachgeprüft).

| neu_web | Original | Maße | CRF | Größe |
|---|---|---|---|---|
| `plakat-bubble-animation` | 0000-0120.mkv (3072×1024) | 1920×640 | 22 | 521 KB |
| `roboter-haengend-1` | 0000-0180.mov (1024×3072, **4:4:4**) | 640×1920 | 22 | 1,3 MB |
| `roboter-haengend-2` | 0000-0300.mkv (1098×2304) | 640×1342 | 22 | 2,8 MB |
| `partikel-lila` | 0001-0049.mp4 | 1280×720 | **30** | 2,5 MB |
| `partikel-schwarm` | 0001-0120.mp4 (stille Tonspur) | 1280×720 | 22 | 1,7 MB |
| `schaedel-schimmernd` | 0001-0160.mkv (4K) | 1280×720 | 22 | 3,0 MB |
| `muster-rot` | 0001-0250.mkv | 1280×720 | 22 | 2,3 MB |
| `tunnel-rot` | 0001-0300.mp4 | 1280×720 | **26** | 6,7 MB |
| `figur-fackel` | 0100-0200.mkv (1126×1080) | 1126×1080 | **26** | 2,1 MB |
| `schaedel-schimmernd-ausschnitt` | 0150-0160.mkv | 1280×720 | 22 | 60 KB |

**Größenregel für Nicht-16:9** (Hausregel „1280 breit" passt nur auf 16:9, Hochformate wären
hochskaliert worden): ähnlich viele Pixel wie 1280×720, nie hochskalieren — Panorama 1920 breit,
Hochformate 640 breit, fast quadratisch in Originalgröße.
`0000-0180.mov` war **4:4:4** (spielt kein Browser) → nach 4:2:0.
`partikel-lila`: bei CRF 22 7 MB für 2 s (~28 Mbit/s, ruckelt bei schwacher Leitung); gegen
verlustfreie Fassung verglichen, CRF 30 sieht im chaotischen Partikelfeld gleich aus.
`figur-fackel`: niedrige Messwerte vom Render-Rauschen, 22/26 sichtbar gleich.
`tunnel-rot`: 26 statt 22, sonst 10 MB/12 s.
`0150-0160` ist **ein Ausschnitt** aus `0001-0160` (Bild 0 = dortiges Bild 150, SSIM 0,998) —
mit abgelegt, Max darauf hingewiesen.

**Fallen in meinem Skript (nicht in den Videos):** zsh liest `$var:…` als Modifikator →
`${var}` schreiben; `ffmpeg` in einer `while read`-Schleife frisst die Standardeingabe
(„oboter" statt „roboter") → **immer `-nostdin`**; eine Probe-Fassung ohne `+faststart`
landete im Ordner → per `-c copy -movflags +faststart` nachgerüstet.

Originale liegen weiter in `video/neu/` (zusammen ~410 MB, darunter 0000-0180.mov mit 274 MB) —
**würden beim Hochladen GitHubs Grenzen sprengen**. Max fragen.

---

## 16.10.2026 — Renderings und Park-Video webtauglich, in `neu_web`, nicht eingebaut

Max hat Ordner `neu` angelegt: `assets/img/design3d/neu/` (7 Renderings, 2048 px, sRGB) und
`assets/video/neu/Ohne Titel.mp4` (4K, 24 fps, 6 s, kein Ton, SDR). Auftrag: alles webtauglich,
**„das Skull-Bild nicht zu klein"**, Ergebnisse **„daneben jeweils in einen Ordner `neu_web`"**.

**`img/design3d/neu_web/`** (JPEG + WebP):

| neu | Original | Maße | Qualität |
|---|---|---|---|
| `metall-skulptur` | Cool metall Art.jpg | 1400×787 | q62/68 |
| `metall-skulptur-hell` | Cool metall Art_hell.jpg | 1400×787 | q62/68 |
| `max-schaedel` | MAX SKULLS 03.jpg | **2048×1152** | **q82/85** |
| `toms-buero` | Toms_Büro Fertig.jpg | 1400×1400 | q62/68 |
| `erdbeere-drahtgitter` | leuchtende Erdbeere3.jpg | 1400×787 | q62/68 |
| `ringtunnel` | rings-2.jpg | 1400×787 | q62/68 |
| `schaedel-moos` | skull in plants-3.jpg | **2048×1152** | **q82/85** |

Zwei Schädel-Bilder, beide in **voller Originalauflösung** (nicht verkleinert) und höherer
Qualität — „MAX" besteht aus vielen winzigen Schädeln, die bei weniger Pixeln verschwimmen.
Vergrößert gegen das Original verglichen: Augenhöhlen und Zähne gleich scharf. Beim Moos-Schädel
meldete der Vergleich nur 0,92 (feines Blattrauschen), vergrößert kein sichtbarer Unterschied;
q92 brachte nichts.

**`video/neu_web/park-kugeln.mp4`** — Park-Weg mit Bank, Feuerkorb und bunten Kugeln. 1280×720,
24 fps, 143 Bilder (Original dekodiert ebenfalls 143; die „147" im Dateikopf sind falsch),
**CRF 23**, 3,5 MB, faststart. Poster `park-kugeln-poster.jpg/.webp` (Bild 36).
**Falle bei mir:** Mein erster Vergleich zeigte das Gras nach der Kompression viel weicher —
auch „-tune grain" half nicht. Gegenprobe mit verlustfreier Fassung (Ähnlichkeit exakt 1,0):
genauso weich. Mein Vergleichsbild aus dem Original war ein anderer Moment mit weniger
Bewegungsunschärfe. **Merke:** Bei bewegter Kamera nie gegen ein einzeln gezogenes
Originalbild vergleichen, sondern gegen eine verlustfreie Fassung desselben Durchlaufs.

Lose in `design3d/` und **nicht** bearbeitet: drei `.acr`-Dateien (Adobe-Camera-Raw-
Einstellungen, keine Bilder) und `Untitled.png` (1920×1080, Wald mit Teich, mit Alphakanal) —
lagen nicht in `neu`. Die Originale in den `neu`-Ordnern liegen in `assets/` und gingen beim
Hochladen mit (Video 37 MB) — Max fragen.

---

## 15.10.2026 (spät) — Originale nach Neu/ verschoben

Auf Max' „ja": alle Originale raus aus dem veröffentlichten Bereich, nach `Neu/` (per
`.gitignore` ausgeschlossen). Mit `mv -n` (kein Überschreiben), vorher/nachher gezählt:
52 Dateien, 540 166 483 Bytes — identisch.

| von | nach |
|---|---|
| `assets/video/IMG_3196 2.MOV` (130 MB), `assets/video/0001-0100.mp4` | `Neu/Videos/Blender/` |
| `assets/Snow_around 1.mov`, `assets/WhatsApp Video 2025-11-15 at 21.59.53.mp4` | `Neu/Videos/Drohnen/` |
| `Neue Bilder/Korea`, `Neue Bilder/Bilder von Mir` | `Neu/Bilder/Korea`, `Neu/Bilder/Bilder von Mir` |
| `Neue Bilder/Portraits` | `Neu/Bilder/Portraits 2026-10` (`Portraits` gab es schon) |

Der leere Ordner `Neue Bilder/` ist entfernt. In `assets/` liegen jetzt keine Originale mehr —
damit ist der offene Punkt „Originale würden mit hochgeladen" erledigt. Nicht angefasst:
`assets/3D/cqpsule.glb` (nicht besprochen).

---

## 15.10.2026 (spät) — iPhone-Making-of webtauglich gemacht, nicht eingebaut

Max hat `assets/video/IMG_3196 2.MOV` abgelegt: iPhone 12 Pro Max filmt den Bildschirm mit der
Blender-Szene („Bubble Burst"), dann Rückzoom in den dunklen Raum. 12,9 s, **4K HEVC 10 Bit,
HDR (HLG, BT.2020)**, variable Bildrate (Ø 54 fps, 701 Bilder), echter Ton (Ø -42 dB, Spitzen
-10 dB), 130 MB.

**Falle HDR:** ohne Umrechnung wird es grau und blaustichig. Verglichen ohne / `hable` /
`mobius`: `hable` sieht natürlich aus (Blender-Orange stimmt, Schrift lesbar), `mobius`
brennt im Hellen aus. Kette:
`zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p,scale=1280:-2`
plus `-color_primaries/-color_trc/-colorspace bt709`. ffmpeg hat `zscale` und `tonemap`.

Neu: **`video/blender-making-of.mp4`** — 1280×720, H.264, Bildrate unverändert
(`-fps_mode passthrough`, 701 Bilder), **Ton behalten** (AAC 96k; echter Raumton, ob er
gebraucht wird, weiß ich nicht), faststart, **CRF 24**, 3,3 MB. Gewählt an der Bildschirmschrift:
bei 28 verschmieren „Search Blendkit" und Symbole sichtbar, 24 fast wie der unkomprimierte
Maßstab. Poster `blender-making-of-poster.jpg/.webp` (Bild 150, Bildschirm mit Kugel).

Original `IMG_3196 2.MOV` (130 MB) unverändert in `assets/video/` — **würde beim Hochladen
GitHubs 100-MB-Grenze sprengen**. Max fragen, ob es nach `Neu/` soll.

---

## 15.10.2026 (abends) — Blender-Animation webtauglich gemacht, nicht eingebaut

Max hat `assets/video/0001-0100.mp4` abgelegt (Blender-Render: Blender-Logo, dann schwarze
glänzende Kugel mit Lichtmustern; 4,2 s, 1920×1080, 24 fps, 738 KB). Nicht webtauglich:
`moov` am Dateiende (kein faststart → startet erst nach komplettem Download), stumme
Tonspur (-91 dB).

Neu: **`video/blender-animation.mp4`** — 1280×720, 24 fps, 100 Bilder wie das Original,
H.264, Ton entfernt, faststart, **CRF 22** (457 KB). Kalibriert 20/22/24/26 (SSIM 0,998–0,997)
und an einer dunklen Stelle mit 1,8-fach aufgehellten Schatten verglichen: 22 und 26 ohne
sichtbaren Unterschied, Partikel bleiben; wegen der Kürze die bessere Stufe. Poster
`blender-animation-poster.jpg/.webp` (Bild 50, Kugel mit Mustern).

Original `0001-0100.mp4` unverändert daneben liegen gelassen — liegt in `assets/`, ginge
also mit hoch (klein, aber unnötig). Max fragen, ob es nach `Neu/` soll.

---

## 15.10.2026 — Flyer-PDF in Einzelseiten zerlegt (für eine Animation), nicht eingebaut

Quelle: `~/Desktop/Design Projekte/Abgabe/lesson2-layout-Aulinger-Max-Abgabe 2/Fertiger Flyer
mit Textur.pdf` (10,3 MB, 4 Seiten à 138,6 × 98 mm, keine Beschnittzugabe). Max wollte die
Seiten „sorgfältig ohne Veränderung" als Einzelbilder.

**Befund:** Jede Seite besteht aus genau **einem** eingebetteten JPEG (6548 × 4630 px = 1200 dpi,
RGB, sRGB), sonst nichts. Geprüft, indem jede Seite mit PDFKit in Originalauflösung gerendert
und mit den herausgelösten Bildern verglichen wurde: Seite *n* ↔ Bild *n* jeweils SSIM 0,9997,
über Kreuz ~0,80. Also keine Vektoren oder Texte darüber.

**Deshalb nicht gerendert, sondern die JPEG-Daten bitgenau aus dem PDF herausgelöst** — keine
Neuberechnung, kein Qualitätsverlust. Abgelegt in **`Cloud_Portfolio/Neu/Flyer-Seiten/`**
(`flyer-seite-1.jpg` … `-4.jpg`, je 2,3–2,6 MB), dort von GitHub ausgeschlossen. Prüfsummen
gleich mit dem PDF-Inhalt. Das PDF selbst ist unverändert. Für die Website müssen die Seiten
später noch verkleinert werden (6548 px Breite ist für die Seite viel zu groß).

Werkzeug, falls wieder nötig: `osascript -l JavaScript` mit `ObjC.import("Quartz")` —
`PDFDocument`/`PDFPage` gehen ohne pdftoppm/gs/python. Das PDF lag in iCloud ausgelagert
und brauchte ~1 Min. zum Herunterladen.

---

## 14.10.2026 — weitere Porträts vorbereitet, ausdrücklich NICHT eingebaut

Max hat 5 Fotos nach `Cloud_Portfolio/Neue Bilder/Portraits/` gelegt und wollte sie so
aufbereitet, dass sie später gut auf der Seite gehen — **„nicht in der Seite einbauen, nur im
Ordner speichern"**. Neu: **`assets/img/portraits-neu/`**, JPEG q62 + WebP q68, Langkante
1400 px, sRGB, keine Drehungsmarken, keine weißen Rahmen (gemessen), JPEG ↔ WebP 0,97–0,98.
Die Dateien haben keine Kameradaten (vermutlich ohne Metadaten exportiert).

| neu | Maße | zu sehen (meine Beschreibung) |
|---|---|---|
| `portraits-neu/dsc00788` | 1022×1400 | junger Mann sitzt auf einem Stuhl, drinnen |
| `portraits-neu/dsc01731` | 1400×933 | Mann mit weinroter Kappe steigt ins Auto, Atemhauch |
| `portraits-neu/dsc02313` | 1400×1372 | Mann in blauer Uniform mit Hut, Maske und Sonnenbrille, Straße |
| `portraits-neu/dsc04625` | 1400×1000 | junger Mann mit Kappe und hellblauem Hemd zeigt zur Seite |
| `portraits-neu/dsc05781` | 933×1400 | Sprungkick auf einer Wiese |

Keins davon ist schon auf der Seite — mit den 7 Bildern in `portraits/`, den Porträts in
`photo/full/` und `ueber-mich/` verglichen, mit eigenen Augen. dsc01731 gehört sichtbar
zur selben Serie wie `portraits/portraet-cap` („Robin"), ist aber eine andere Aufnahme.
dsc02313 sieht nach Korea aus, liegt aber bei den Porträts, weil Max es dort hingelegt hat.
**Personennamen nicht vergeben** — nicht bekannt, nicht raten. Bildnummer als Dateiname.

Seiten nachweislich unverändert: `index`, `drohne`, `kreativ` und `icapsule` byte-gleich
mit GitHub. Git selbst hing, weil iCloud **wieder 1014 Dateien in `.git/` ausgelagert**
hatte — vor dem nächsten Commit zurückholen.

---

## 10.10.2026 (später) — Fotos „über mich" vorbereitet, noch nicht eingebaut

Max hat 4 Fotos nach `Cloud_Portfolio/Neue Bilder/Bilder von Mir/` gelegt (der Ordner war beim
ersten Blick noch leer) und wollte sie genauso aufbereitet, in einem eigenen Ordner.
**Neu: `assets/img/ueber-mich/`**, JPEG q62 + WebP, Langkante 1400 px, sRGB, keine
Drehungsmarken, keine weißen Rahmen. **Nicht eingebaut, nicht hochgeladen.**

| neu | Original | Maße | zu sehen (meine Beschreibung) |
|---|---|---|---|
| `ueber-mich/mit-drohne` | `39b8069e-….jpg` (keine Kameradaten) | 1051×1400 | junger Mann mit Brille und kleiner Drohne, Berge im Abendlicht |
| `ueber-mich/lichtmalerei` | `DSC00153.jpeg` (α7 IV) | 1400×935 | nachts im Garten, daneben „MAX" mit Licht geschrieben |
| `ueber-mich/profil-rosa` | `DSC03986.jpg` (α6700) | 1400×933 | Profil vor rosa Hintergrund |
| `ueber-mich/lachen` | `DSC06843.jpg` (α7 III) | 933×1400 | lachend mit Brille, nah, buntes Licht |

**`mit-drohne` ist schon auf der Seite** — als `misc/profile` (1000×1250, enger, 4:5). Der
Bild-Fingerabdruck hat das wegen des anderen Zuschnitts **nicht** erkannt, erst der Blick aufs
Bild. Trotzdem aufgenommen, weil die neue Datei die volle Fassung mit mehr Landschaft ist und
für einen Über-mich-Teil die bessere Grundlage. **Merke:** der Fingerabdruck findet nur
Gleiches in anderer Größe, keine anderen Zuschnitte — immer zusätzlich hinsehen.

**`profil-rosa`: WebP mit q80 statt q68.** Bei q68 glättete WebP das feine Korn des glatten
rosa Hintergrunds weg und zeigte leichte senkrechte Streifen (JPEG ↔ WebP nur 0,92).
Vergrößert verglichen: q80 behält das Korn, Streifen weg, 70 KB (JPEG 189 KB).
**Merke:** bei großen glatten Farbflächen das WebP ansehen, nicht nur rechnen.

---

## 10.10.2026 — Korea-Fotos vorbereitet, noch nicht eingebaut

Max hat 39 Fotos aus Korea nach `Cloud_Portfolio/Neue Bilder/Korea/` gelegt (Sony α7 III,
alle 2048 px Langkante, sRGB, keine Drehungsmarke). Auftrag: passend komprimieren, in einen
Korea-Ordner in `assets/` legen, einbaufertig machen. **Noch nicht eingebaut, nicht
hochgeladen.** Der Unterordner `Bilder von Mir` ist leer.

**9 davon sind schon auf der Seite** (`assets/img/seoul/`), per Bild-Fingerabdruck gesucht und
**mit eigenen Augen bestätigt** — der Fingerabdruck hatte bei den fast schwarzen Nachtbildern
`nacht-rauch` und `nacht-linien` vertauscht, und gedrehte Bilder erkennt er gar nicht:

| Original | auf der Seite |
|---|---|
| DSC07879 | `seoul/tag-pavillon` |
| DSC08142 | `seoul/tag-regen` |
| DSC08357 | `seoul/tag-stadt-gold` |
| DSC08365 | `seoul/tag-stadt-pastell` |
| DSC07436 | `seoul/tag-tempeldach` (dort enger zugeschnitten) |
| DSC08736 | `seoul/nacht-rauch` |
| DSC08756 | `seoul/nacht-linien` |
| DSC08585 | `seoul/nacht-strasse` |
| DSC08622 | `seoul/nacht-bruecke` (dort um 90° gedreht) |

Diese 9 wurden **nicht** noch einmal gerechnet. `tag-flagge` ist nicht unter den neuen Fotos.

**30 neue in `assets/img/korea/`**, jeweils JPEG (q62) + WebP (q68), Namen nach der
Bildnummer (`dsc00452` usw., Zusätze wie „-Topaz-Sharpen…" und „-2" weggelassen).
Langkante 1400 px, **Panoramen (Verhältnis ≥ 2) 1700 px** wie Aufmacher, weil sie sonst nur
~400 px hoch wären. Nie hochskaliert.

**Weiße Rahmen abgeschnitten** bei 8 Fotos (Max ausdrücklich: „schneide die Bilder mit
weißem Rand so zu, dass der Rand weg ist"; passt zu seiner früheren Ablehnung weißer
Rahmen). Gemessen mit Schwelle ≥ 250 auf allen vier Seiten. Erster Durchlauf ließ bei
dsc00640 (rechts) und dsc01461 (unten) einen 1-px-Strich stehen, weil der weiche Übergang
auf einer Seite zu knapp erfasst wurde. **Lösung:** Rahmen sind bei diesen Exporten
symmetrisch, also je Seitenpaar den breiteren Wert + 3 px. Danach an allen Kanten nachgemessen
und auf Magenta-Grund angesehen: keine Reste. Zugeschnitten mit `sips` (erhält das
Farbprofil), nicht mit `ffmpeg`.

JPEG ↔ WebP je Bild verglichen: 0,94–0,99. Die zwei 0,94er sind Nachtbilder mit Rauschen,
die bestehenden `nacht-strasse`/`nacht-bruecke` liegen genauso.

Beschreibung = **was ich auf dem Bild sehe**, nicht von Max. Orte und Anlässe bewusst nicht
benannt (nicht belegt).

| Datei | Maße | Format | zu sehen | Rahmen ab |
|---|---|---|---|---|
| `korea/dsc00452` | 1700×699 | Panorama 2.43 | Mann in roter traditioneller Tracht mit Stab, in Bewegung |  |
| `korea/dsc00461` | 1700×627 | Panorama 2.71 | dieselbe Szene, weiter gefasst |  |
| `korea/dsc00466` | 980×1400 | hoch 0.70 | Mann in roter Tracht mit Stab, ausfallend |  |
| `korea/dsc00536` | 1700×518 | Panorama 3.28 | Mann in roter Tracht mit Stab, schmales Panorama |  |
| `korea/dsc00537` | 1700×548 | Panorama 3.10 | dieselbe Szene, schmales Panorama |  |
| `korea/dsc00554` | 1700×548 | Panorama 3.10 | dieselbe Szene, schmales Panorama |  |
| `korea/dsc00640` | 932×1400 | hoch 0.67 | rote Fischlaterne, nah | ja |
| `korea/dsc01024` | 1104×1400 | hoch 0.79 | alter Mann mit weißem Bart, Porträt |  |
| `korea/dsc01025` | 1700×713 | Panorama 2.38 | derselbe Mann, sehr nah |  |
| `korea/dsc01051` | 851×1400 | hoch 0.61 | farbige Wächterfigur mit Krone |  |
| `korea/dsc01053` | 851×1400 | hoch 0.61 | Wächterfigur mit weißem Bart |  |
| `korea/dsc01054` | 852×1400 | hoch 0.61 | Wächterfigur mit Krone |  |
| `korea/dsc01382` | 1083×1400 | hoch 0.77 | Mann mit rotem Hut und Sonnenbrille, Porträt |  |
| `korea/dsc01400` | 1400×857 | quer 1.63 | Stacheldrahtzaun mit Vögeln, grauer Himmel |  |
| `korea/dsc01427` | 1400×931 | quer 1.50 | Felsen im schäumenden Meer, von oben | ja |
| `korea/dsc01461` | 1400×930 | quer 1.51 | Hafen mit Hochhäusern und Bergen | ja |
| `korea/dsc01462` | 1400×930 | quer 1.51 | Hafen mit Brücke und Hochhäusern im Dunst | ja |
| `korea/dsc01512` | 933×1400 | hoch 0.67 | Frau mit Locken im seichten Wasser, von hinten | ja |
| `korea/dsc01515` | 933×1400 | hoch 0.67 | Mann im weißen T-Shirt im seichten Wasser, von hinten | ja |
| `korea/dsc01970` | 1700×484 | Panorama 3.51 | Möwen vor blauem Himmel |  |
| `korea/dsc01971` | 1700×484 | Panorama 3.51 | Möwen vor blauem Himmel |  |
| `korea/dsc01973` | 1700×615 | Panorama 2.76 | mehrere Möwen vor blauem Himmel |  |
| `korea/dsc01976` | 1400×845 | quer 1.66 | einzelne Möwe im Flug |  |
| `korea/dsc02176` | 1400×932 | quer 1.50 | Mann mit Kappe in der Menge, nachts | ja |
| `korea/dsc07965` | 933×1400 | hoch 0.67 | belebte Einkaufsstraße mit Leuchtreklamen, nachts |  |
| `korea/dsc08575` | 1400×933 | quer 1.50 | Lichtspuren von Autos, nachts |  |
| `korea/dsc08579` | 1400×933 | quer 1.50 | Lichtspuren in einer Kurve, nachts |  |
| `korea/dsc08581` | 1400×933 | quer 1.50 | Lichtspuren in einer Kurve, nachts |  |
| `korea/dsc09222` | 933×1400 | hoch 0.67 | rosa Abendhimmel über einem Sportplatz | ja |
| `korea/dsc09776` | 1400×933 | quer 1.50 | rote Lichtspuren, sehr dunkel |  |

**Offen:** Der Originalordner `Cloud_Portfolio/Neue Bilder/` liegt im Repo und steht nicht
in der `.gitignore` — ein `git add -A` würde die 25 MB Originale mit hochladen. Max fragen
(Vorschlag: nach `Neu/` verschieben). Einige Fotos zeigen erkennbare fremde Personen
(dsc01024/01025, 01382, 02176) — beim Einbau an das Recht am eigenen Bild denken.

---

## 01.10.2026 (spät) — Schnee-Clip auf der Drohnenseite lud nicht

Max meldete: „das durch den Schnee Video lädt irgendwie nicht". Ursache doppelt:
Claude Design hatte dem dritten Clip im Brillen-Player („Durch den Schnee · FPV im Winter")
**nie eine Quelle gegeben** — schon im Export `src: undefined`, Standbild als Platzhalter,
Dauer „—". Und ich hatte `drohne-schnee.mp4` beim Hochladen weggelassen, weil kein Pfad
darauf zeigte. Die Prüfung „was wird verwendet" war technisch richtig, hat die leere Stelle
aber nicht als Fehler erkannt. **Merke:** beim Übernehmen fremder Exporte auch nach
`undefined`, leeren `src` und Platzhalter-Dauern („—") suchen.

Behoben: Clip zeigt jetzt auf `../assets/video/drohne-schnee.mp4`, Dauer 1:04. Lokal geprüft:
im letzten Drittel des Brillen-Abschnitts steht „Durch den Schnee", der Clip bekommt seine
Quelle, die Datei lädt (63,9 s, 1280×720). Auch im Umbauskript ergänzt.

---

## 01.10.2026 (abends) — Claude-Design-Fassung ist die Hauptseite

Max hat entschieden: Über seinen Link soll die in Claude Design überarbeitete Seite
erscheinen, mit eigener Drohnenseite, und der Papierflieger-Film soll dort laufen. Er hat
bestätigt, dass die Texte der Drohnenseite stimmen (DJI Mini 2, Urlaub, Küste, Schule
Bayerischer Wald, Papierflieger) und die fehlenden Bilder nachgeliefert
(`~/Downloads/Portfolio-Website Überblick (1).zip`).

**Neue Aufteilung in `live/`:**

| Datei | Was |
|---|---|
| `index.html` | Claude-Design-Hauptseite (aus `Portfolio Entwurf v2.dc.html` umgebaut) |
| `drohne.html` | eigene Drohnenseite (aus `Drohne v5.dc.html`) |
| `kreativ.html` | die bisherige kreative Fassung, byte-identisch (`bd7113305f45697c…`) |
| `support.js`, `flug-uebergang.js` | Laufzeit von Claude Design und Seitenübergang |

Zusätzlich `archiv/index-kreativ-vor-claude-design-2026-10-01.html`. Die kurzen Adressen
leiten jetzt weiter: Repo-Wurzel `index.html` (neu; vorher 404) und
`Portfolio/index.html` (zeigte bisher auf `v1/`).

**Umgebaut per Skript** (`scratchpad/bau/bau.js`, jede Ersetzung mit erwarteter Trefferzahl):
- Pfade: Karte aller Dateinamen → echter Pfad, im Kopf als `window.ASSETS`; `assetPfad()`
  und `videoPfad()` für die dynamisch gebauten Pfade. iCapsule-Bilder hießen im Export
  `icap-*`.
- **Videos wieder eingebaut**: Im Export waren alle 11 nur Standbilder. Jetzt echte
  `<video data-vsrc>` mit der **Videosteuerung aus der kreativen Fassung** — Regeln
  Zeile für Zeile gleich (verglichen per diff), nur `erfassen()` neu, weil die Seite ihre
  Inhalte erst nach dem Laden aufbaut (MutationObserver).
- Drohnenseite: Videos laden erst bei Annäherung (`data-lsrc`), weit weg wird die Quelle
  abgebaut; vorher wurden alle 5 sofort angefordert. Papierflieger als echtes Video mit
  Bedienleiste; Titel und Verlauf darüber blenden beim Abspielen aus.
- Knopf „Zur Produktseite" zeigte auf `#p-ibee` → jetzt `icapsule.html`.
- Schalterpult von Claude Design nur noch mit `?entwurf` in der Adresse.
- Tote Links „V1–V4" auf der Drohnenseite entfernt.

**Neue Bilder:** `img/drohne/dji-bucht|kapelle|kueste` (JPEG q62 + WebP q68, nicht
hochskaliert, 1182 px), `img/drohne/gear/*.webp` (aus PNG, Transparenz erhalten, 24–58 KB
statt 200–640 KB), `img/deko/streifen-gross|klein.svg`. Die Fotos haben keine
Kameradaten; Max hat bestätigt, dass die Texte stimmen. Die Ausrüstungsbilder sind
Herstellerfotos — Max darauf hingewiesen.

**Gemessen im Browser:** Hauptseite 84/84 Bilder, 11 Videos alle mit Bedienleiste, beim
Öffnen 0 Videos geladen, beim Scrollen immer genau eines mit Quelle. Drohnenseite 8/8
Bilder, beim Öffnen nur `zeitraffer.mp4`, Papierflieger lädt und läuft beim
Hinscrollen. Am Handy (375 px) keine waagerechte Scrollbarkeit.
**Nicht geprüft werden konnte**, ob ein Film ohne Unterbrechung durchläuft: Der
Browserbereich war verborgen, dann hält Chrome stumme Videos selbst an. Gegenprobe: die
kreative Fassung verhält sich dort genauso. Max soll es selbst im Browser ansehen.

**Veröffentlicht:** Commit `a576c0b`, von Max beauftragt. Nur die 24 Dateien einzeln
vorgemerkt (nicht `git add -A`), übertragen wurden 34 Objekte — bestehende Bilder und Videos
nicht erneut. Live geprüft: `maxderfisch.github.io/Portfolio/` leitet auf die Hauptseite,
84/84 Bilder, 11 Videos mit Bedienleiste, React von unpkg geladen; `drohne.html`,
`kreativ.html`, `icapsule.html`, neue Bilder und Videos antworten mit 200.
Nicht hochgeladen: Originale in `assets/` (Snow_around, WhatsApp-Video), `assets/3D/`,
`drohne-schnee.mp4` (wird nicht verwendet), Astra-Versuche, `00-LIES-MICH-ZUERST.md`.

**Abweichungen von den Hausregeln:** Bilder nur als WebP ohne JPEG-Rückfall (so hat Claude
Design die Seite gebaut; heute von allen Browsern unterstützt). Die Seite braucht
JavaScript und lädt React von unpkg.com — ohne JS oder ohne unpkg bleibt sie leer.

---

## 01.10.2026 (später) — Export aus Claude Design geprüft, nichts übernommen

Max hat aus Claude Design `~/Downloads/Portfolio-Website Überblick.zip` exportiert: zwei
Entwürfe (`Portfolio Entwurf v2.dc.html`, `Drohne v5.dc.html`), `flug-uebergang.js`,
`support.js`. Entpackt und im Browser angesehen **nur im Arbeitsordner** (Bilder per
Verknüpfung). Am Projekt ist nichts geändert.

**Was es ist:** Hauptseite komplett neu gestaltet, gleiche 11 Kapitel, gleiche Texte und
Farbwelten, dazu ein Schalterpult mit 12 umschaltbaren Effekten und ein neuer
Kontaktbereich („Schreib mir." mit Mailadresse). Das Drohnenkapitel ist eine eigene Seite
mit Start-/Landeübergang, bildfüllendem Zeitraffer und Höhenanzeige.

**Gemessene Probleme:**
- Hauptentwurf: **0 `<video>`** — alle Filme nur als Standbild. Videosteuerung fehlt ganz.
- Drohnenseite: alle 5 Videos werden **beim Laden gleichzeitig angefordert**
  (`src` + `autoplay`, kein `preload="none"`) — der Fehler, der schon zweimal behoben wurde.
- Kein reines HTML: läuft nur mit `support.js` (Claude-Design-Laufzeit), die React von
  unpkg.com nachlädt. Eigene Tags (`<x-dc>`, `<sc-for>`, `<sc-if>`).
- Pfade flach (`assets/name.webp`), iCapsule-Bilder umbenannt (`icap-*`), nur WebP.
- 8 Bilder verlinkt, die es nicht gibt und die nicht im ZIP sind (`dji-bucht/-kapelle/-kueste`,
  `gear/dji-brille, dji-o4-pro, nazgul-evoque-f5, pavo20-pro, radiomaster-pocket`).
- Drohnenseite enthält Inhalte, die nie auf der Seite standen (DJI Mini 2, „Im Urlaub",
  „Küste", „Schule · Bayerischer Wald", Papierflieger „von einem Freund", „Projekt 11").
  **Herkunft bei Max erfragt** — nicht als Tatsache übernehmen.

Empfehlung an Max: als Vorlage nutzen und gewählte Effekte in reinem HTML in
`index.html` nachbauen, Videosteuerung erhalten.

---

## 01.10.2026 — zwei neue Drohnenvideos komprimiert

Max hat zwei Videos direkt nach `Portfolio/assets/` kopiert und wollte sie „genau so wie
die anderen" komprimiert, **sonst nichts ändern** — also noch **nicht** in die Seite eingebaut.

| neu | Quelle | Ergebnis |
|---|---|---|
| `video/drohne-nebel.mp4` | `WhatsApp Video 2025-11-15 at 21.59.53.mp4`, 1080p/25, 34 s, 135 MB | 720p/25, **CRF 22**, 8,6 MB |
| `video/drohne-schnee.mp4` | `Snow_around 1.mov` (DaVinci-Export), 1080p/59,94, 64 s, 243 MB | 720p/59,94, **CRF 28**, 23,1 MB |

Wie die FPV-Clips: H.264 High, 1280×720, Bildrate des Originals behalten, `faststart`.
Ton bei beiden **entfernt** — beide Tonspuren sind digitale Stille (-91 dB). Bildanzahl
identisch mit dem Original (842 / 3830). CRF an 22/24/26/28 gerechnet und an Ausschnitten
verglichen: Nebel ist kurz, deshalb die beste Stufe; beim Schnee war zwischen 26 und 28 an
Ästen und Hauswand kein Unterschied zu sehen, 28 hält die Datenrate bei 3 Mbit/s wie die
anderen. Poster je JPEG (q62) + WebP (q68), 1280×720: Nebel bei 28 s (Morgenrot über dem
Nebelmeer), Schnee bei 17 s (Baum unter blauem Himmel). Die Namen sind neutral
(`drohne-`), weil nicht sicher ist, ob der Schneeflug FPV ist.

**Offen und wichtig:** Die beiden Originale liegen noch in `Portfolio/assets/` und sind
**nicht** von der `.gitignore` erfasst. Ein `git add -A` würde sie mitnehmen —
`Snow_around 1.mov` liegt mit 243 MB über GitHubs Grenze von 100 MB, der Push würde
scheitern, und Originale sollen ohnehin nicht auf GitHub. Vor dem nächsten Commit klären
(Vorschlag: nach `Neu/Videos/Drohnen/` verschieben). Ebenfalls neu und unversioniert:
`assets/3D/cqpsule.glb` (10 MB), von Max, Zweck noch nicht besprochen.

---

## 30.09.2026 (später) — Übergabe für Claude Design

Max will die kreative Fassung mit **Claude Design** aufwerten und wollte eine Übergabe,
mit der das Werkzeug alles über die Seite weiß — Aufbau, Zusammengehörigkeit, Inhalte,
was geändert werden darf und was nicht. Ausdrücklich **keine** Gestaltungsvorgaben.

**Neu: `Portfolio/00-LIES-MICH-ZUERST.md`** (21 KB). Alle Tabellen per Skript aus
`live/index.html` erzeugt: 14 Übersichtskarten, 11 Kapitel mit Farbwelt, alle 49
Kapitelbilder mit Maßen und Beschriftung, alle 11 Videos, die Mechanik (aus den
Code-Kommentaren), Max' Verbote wörtlich, offene Punkte. Gegengeprüft: alle 68 von der
Seite eingebundenen Medien sind erwähnt, alle erwähnten existieren. Beim Prüfen fiel ein
Fehler auf — ich hatte geschrieben, nur die Übersichtskarten zoomen beim Zeigen; die
Kapitelbilder zoomen auch (1.035–1.04). Korrigiert.

**Max hat klargestellt: Die Texte und Bildunterschriften der Seite sind Platzhalter**, die
ein früherer Claude geschrieben hat. Sie stimmen ungefähr, sind aber nicht seine Worte.
Ich hatte das am 22.09. falsch als „von Max selbst verfasst" festgehalten.

**Fallen im Ordner, die ein fremdes Werkzeug fehlleiten:** `Portfolio/index.html` leitet
auf `v1/` weiter; `PROJEKT-UEBERGABE.md` nennt sich „vollständige Wissensübergabe für eine
andere KI", ist aber aus der v1–v6-Zeit. Beides steht als Warnung in der neuen Datei.

`AUFBAU.md` und `BILDINDEX.md` (mit Fehlern) nach `doku/alt-ki-uebergaben/` verschoben,
nicht gelöscht. `live/index.html` unverändert.

---

## 30.09.2026 — zurück zur kreativen Fassung

Max verwirft die Richtungen der letzten Tage (Präsentationsseite, Astra/Codex-Versuche,
helle Materialfassung) und arbeitet ab jetzt **wieder an der kreativen Fassung weiter** —
`live/index.html`, die dunkle Seite mit den Farbwelten pro Kapitel, den roten
Lichtspuren in Seoul und dem Kartenflug im Drohnenkapitel. Seine Worte: „da wo alles
fertig ist". Als Nächstes will er Texte austauschen (noch nicht beauftragt).

**Nachgeprüft, nichts verändert:**

- `live/index.html` ist **byte-identisch** mit `Backups/Kreative-Version-1/` und mit dem
  Stand auf GitHub (SHA-256 `bd7113305f45697c…`). Letzter Commit, der sie berührt:
  „Kartenbewegung auf transform umgestellt" vom 17.09. Seitdem unverändert — das Backup
  ist also der letzte Stand, es muss nichts zurückgeholt werden.
- `icapsule.html` ebenfalls identisch mit GitHub.
- Abgleich des ganzen Ordners gegen das Backup: nur **hinzugekommene** Dateien
  (minimal, material, astra, astra-2, AUFBAU.md, BILDINDEX.md, ein Archivstand) und
  längere Doku. Keine Datei der kreativen Fassung fehlt oder hat sich in der Größe
  geändert. Die Codex-Läufe haben nur ihre eigenen Dateien geschrieben.
- Im Browser: 64 von 64 Inhaltsbildern laden (das 65. ist der leere Platzhalter der
  Großansicht), 11 Videos, 4 Lichtspur-Ebenen, Kartenflug aktiv. 136 + 28 Verweise
  in index.html/icapsule.html, keiner fehlt.

**iCloud** hatte wieder fast alles ausgelagert — auch **984 Dateien in `.git/`**, deshalb
hing jeder git-Befehl. Bilder und Videos sind zurückgeholt. **Vor dem nächsten Commit
prüfen, ob `.git/` vollständig lokal ist**, sonst hängt git wieder.

Die Nebenversuche bleiben unangetastet liegen; Max hat nicht gesagt, dass sie weg sollen.

---

## 22.09.2026 — Bildindex fuer eine Fremd-KI, Tonspuren nachgemessen

Max testet einen Monat lang Codex mit GPT-6 Astra und wollte einen Prompt, der eine
neue Seite bauen laesst. Bewusst **ohne** Designvorgaben: er will sehen, was das Modell
aus sich heraus entwickelt. Nur die Inhalte und die Richtung sind vorgegeben.

**Richtung, von Max korrigiert:** Die Seite soll nicht wie eine Apple-*Produktseite*
aussehen, sondern wie ein Apple-*Produkt*. Also kein Marketing-Layout auf Weiss, sondern
die Seite als Geraet — gefraestes Aluminium und Glas, echte Drehknoepfe, Regler,
Kippschalter mit Rastpunkten. Linie Braun/Dieter Rams zu Apple. Ich hatte das zuerst
als Stil gelesen statt als Gegenstand, Max hat korrigiert.

**Neu: `Portfolio/BILDINDEX.md`** (11,7 KB). Damit eine fremde KI nicht 132 Bilder
anschauen muss (~130.000 Tokens Bildverarbeitung), stehen dort je Datei die echten
Pixelmaße und die Beschriftung aus `live/index.html` — 48 Bildunterschriften der
Großansicht plus 53 alt-Texte, alle von Max selbst verfasst (**falsch**, siehe 30.09.: das sind KI-Platzhalter). 53 von 132 JPEGs haben
einen echten Text, 79 nur den Dateinamen; die sind als `[—]` markiert mit dem
ausdruecklichen Hinweis, nichts dazuzuerfinden. Erzeugt per Skript, nicht von Hand.

**Zwei Befunde beim Nachmessen:**

1. **Tonspuren:** `zeitraffer` und `drone-clip-1` haben eine Tonspur, die aber
   digitale Stille enthaelt (-91 dB) — also echte Stummschleifen. `fpv-papierflieger`
   dagegen hat **echten Ton** (-19,9 dB), den hatte ich im ersten Prompt faelschlich
   zu den stummen Schleifen gezaehlt, weil ich nach dem Muster `fpv-*` gruppiert habe.
   Merke: die Existenz einer Tonspur sagt nichts, nur `volumedetect` sagt etwas.
2. **`film-animals.mp4` und `film-imker.mp4` haben kein Poster.** Bei `preload="none"`
   bleibt dort eine schwarze Flaeche. Offen.

`therme-doku.mp4` ist nur 5,6 s lang — geprueft, das Original ist genauso kurz, kein
Fehler beim Komprimieren.

**iCloud:** 265 von 304 Mediendateien waren ausgelagert und wurden zurueckgeholt.

---

# Stand — 13.09.2026

Diese Datei ist das Erste, was man liest, wenn man weiterarbeitet.
**Ergänzen, nicht überschreiben.** Neuer Eintrag oben, alter Stand bleibt darunter stehen.

---

## Stand vom 19.09.2026 — zwei benannte Fassungen

Max findet die Seite eines Freundes „cleaner" und „stimmiger" und will einen
**minimalistischen Gegenentwurf** ausprobieren, ohne die bisherige Arbeit zu verlieren.
Deshalb gibt es ab jetzt **benannte Versionen**. Die Liste steht in
`Backups/VERSIONEN.md` (außerhalb des Repos), die Regel dazu in der `CLAUDE.md`.

| Name | Wo | Charakter |
|---|---|---|
| **Kreative Version 1** | `Backups/Kreative-Version-1/` (331 MB, Commit `a69a221`) | die ausgearbeitete, künstlerische Fassung |
| **Minimal Version 1** | `Portfolio/live/minimal.html` | der reduzierte Gegenentwurf, **neben** `index.html` |

`index.html` ist unverändert. Nichts wurde überschrieben.

### Warum überhaupt

Gemessen an der kreativen Fassung: **9 Farbwelten, 6 Arten ein Medium zu beschriften,
31 Rasterklassen, 51 Schriftgrößen, 17 Animationsdauern, 20 Inline-Styles.** Das Problem
sind nicht zu wenige Ideen, sondern zu wenige Wiederholungen.

### Was Minimal Version 1 anders macht

Eine Farbwelt, eine Schriftfamilie, **fünf** Schriftgrößen, sechs Abstände, **eine**
Bewegungskurve, **eine** Art zu beschriften, **drei** Rasterbreiten. Der Überblick ist
ein typografisches Werkverzeichnis statt Kacheln — beim Zeigen folgt das Vorschaubild der
Maus.

| | kreativ | minimal |
|---|---|---|
| Schriftgrößen | 51 | **5** |
| Beschleunigungskurven | 3 | **1** |
| Elemente mit `will-change` | 90 | **9** |
| Dateigröße | 136 KB | **38 KB** |

Inhalt ist identisch: 14 Projekte, 11 Abschnitte, 49 Bilder, 11 Videos, alle 129
Verweise geprüft.

### Fehler dabei, gefunden und behoben

Der Videoregler entfernte die Quellen **nicht zu Beginn** — beim Seitenaufbau luden alle
elf Videos gleichzeitig. Genau der Fehler, den die kreative Fassung schon einmal hatte.
Nachgemessen: jetzt **0 von 11** geladen beim Aufruf, und beim Scrollen immer genau eines,
und zwar das richtige.

### Offen

Max schickt Vorlagen und Referenzen für die Gestaltung — die Minimalfassung ist ein
Startpunkt zum Draufschauen, nicht das Ziel. Gesammelte Fremdvorlagen gehören nach
`Portfolio/Vorlagen/` (außerhalb des Repos, siehe `SO-GEHT-DAS.md` dort).

---

## Stand vom 14.09.2026 (abends) — Kapitel 09 und 10 neu gestaltet

Max' Auftrag: Filme besser darstellen, passende Hintergründe zu Filmen und Drohnenaufnahmen,
kein zusätzlicher Text, **und an der Abspiel- und Lademechanik nichts ändern**. Nach dem ersten
Durchgang die Nachbesserung: *viel abstrakter, viel krassere Elemente*, und die
Hintergrundwörter überlagerten sich — die durften weg.

**Was jetzt steht:** Jedes Video hat einen Datenblock (Nummer, Titel, Kontext, Laufzeit, Rolle)
**neben** sich statt einer Versalzeile darunter, abwechselnd links und rechts; der Aufmacher
jedes Kapitels hat ihn quer darunter, damit der Einleitungstext daneben Platz behält. Die
Ziffern sind 92-px-Outline. Im Filmkapitel liegen zwei riesige gedrehte Filmstreifen und eine
Blende im Hintergrund, im Drohnenkapitel ein Radar mit Gradteilung, eine zweite Scheibe und
eine gestrichelte Flugbahn über die volle Kapitelhöhe. Die `.bgl`-Wörter sind **nur in diesen
zwei Kapiteln** entfernt.

Die Formen laufen über den vorhandenen `data-speed`-Mechanismus mit — **kein neues JavaScript**.

**Nachgemessen:**

| | Ergebnis |
|---|---|
| Abspielmechanik | `videoZustand()` vor und nach dem Umbau identisch (10 Einträge, gleiche Reihenfolge, gleiche Marken) |
| Auswahl | alle neun Videos einzeln in die Fenstermitte gefahren — jedes Mal genau eines aktiv, und das richtige |
| Seitenhöhe | 27717 → 27698 px, also trotz größerer Videos **nicht** länger geworden |
| Rechner 1400 px | Datenblöcke 186–212 px neben den Videos, keiner höher als sein Video, kein Zeilenumbruch in der Meta-Zeile |
| Handy 375 px | alle neun Karten einspaltig 295 px, Datenblock unter dem Video, kein Überstand |
| Struktur | CSS 476/476, div 368/368, video 10/10, beide Skripte fehlerfrei, 0 `style="grid-column"` |
| Dateien | alle Verweise vorhanden (inkl. der drei neuen SVGs), 0 iCloud-ausgelagert |

**Was ich nicht prüfen konnte:** Wie es *aussieht*. Der Browser-Bereich ist zugeklappt,
Screenshots sind schwarz. Alles oben ist gemessen, nicht angeschaut — Max muss draufschauen.

**Offen, unverändert:** iBee oder iCapsule? `Portfolio/index.html` auf `live/` umbiegen?
`CLAUDE.md` ins Repo? Falscher Farbverlauf bei `p-flyer`, doppelte Nummer „Projekt 08",
`loading="lazy"` fehlt stellenweise, hochauflösender Freisteller der iCapsule.

Nicht gepusht — Max pusht selbst über GitHub Desktop.

---

## Stand vom 14.09.2026 (später) — iCapsule im Projektabschnitt

Geändert wurde **nur** `live/index.html`. `live/icapsule.html` ist unberührt
(`git diff --name-only` bestätigt das) — so von Max beauftragt.

**Was drin ist:** Aufmacher des Abschnitts `#p-ibee` von `hero-dunkel.jpg` auf
`hero-weiss.jpg` getauscht, Bildunterschrift „Mitternacht" → „Weiß". Zwei
Behind-the-Scenes-Bilder aus Blender vor dem Weiterlesen-Knopf (`.tr__bts1` Spalte 1–5,
`.tr__bts2` Spalte 7–9, dazu eine Zeile Text in `.tr__btstxt`). Vier veraltete Bildmaße
korrigiert.

**Was dabei kaputtging und repariert wurde:** Die Handy-Regel `@media(max-width:900px)` für das
Raster wurde versehentlich mitgelöscht — das hätte **alle acht Kapitel** am Handy zerlegt, nicht
nur die iCapsule. Aus `archiv/live-index-stand-2026-09-14-vor-umbau-separat.html`
wiederhergestellt und um die drei neuen Klassen ergänzt. Der erste Reparaturversuch mit
`style="grid-column:…"` am Element war ebenfalls falsch (schlägt die Medienabfrage) und wurde
durch echte Klassen ersetzt. Beides steht in `05-fallen.md`.

**Nachgemessen:**

| | Ergebnis |
|---|---|
| Rechner 1400 px | Aufmacher 1040×586, bts1 423 px, bts2 247 px, zwölfspaltiges Raster intakt |
| Handy 375 px | alle sieben Bilder 295 px, alle acht Kapitel einspaltig |
| Struktur | CSS 424/424, div 323/323, figure 38/38, picture 62/62, keine doppelten IDs |
| Verweise | alle 131 Dateien vorhanden, 56 Bildmaße gegen die echten Dateien geprüft, 0 falsch |
| Sonstiges | kein Querlauf, Seitenhöhe stabil, 0 iCloud-ausgelagerte Dateien |

**Offen, seit Längerem und weiterhin unbeantwortet:**
- Heißt das Projekt **iBee** oder **iCapsule**? Beides steht derzeit nebeneinander.
- Soll `Portfolio/index.html` auf `live/` zeigen statt auf `v1`?
- Gehört die `CLAUDE.md` ins Repo?
- `p-flyer` hat einen falschen Farbverlauf, und „Projekt 08" ist doppelt vergeben — beides
  älter als diese Sitzung, beides bisher nicht angefasst.
- `loading="lazy"` fehlt noch an einigen Bildern.
- Ein hochauflösender Freisteller der iCapsule mit echter Transparenz wäre besser als der
  errechnete Ausschnitt auf der Apple-Seite.

Die Commits sind **nicht gepusht** — Max pusht selbst über GitHub Desktop.

---

## Stand vom 14.09.2026 — Spruch einzeilig

Max wollte „Erinnerungen neu erleben." etwas kleiner, damit es **in eine Zeile** passt.

Gemessen war das Problem nicht die Größe, sondern die `max-width:15ch` am Titel — bei 112 px
brauchte der Spruch 1250 px, verfügbar waren 1352 px. Er hätte also gepasst und wurde nur durch
die Begrenzung umgebrochen. Begrenzung weg, Größe an die Fensterbreite gekoppelt
(`clamp(16px,7.0vw,94px)`) und `white-space:nowrap`, damit er nie umbricht.

| | Titel | Spruch | Textbreite | Platz | Zeilen |
|---|---|---|---|---|---|
| 1440 px | 112 px | **94 px** | 1049 | 1392 | 1 |
| 375 px | 46 px | **28 px** | 319 | 327 | 1 |

Am Handy war es mit 97 % des Platzes zu knapp — auf 7,0vw gesenkt, damit Luft bleibt.
Titelhöhe jetzt 116 px am Rechner, 48 px am Handy, für beide Schriftzüge gleich.

**Nebenbei: 260 Dateien waren iCloud-ausgelagert** und wurden zurückgeholt. Eine
(`film-imker.mp4`) brauchte einen zweiten Anlauf wegen Zeitüberschreitung — sie ist ohnehin
von keiner Seite eingebunden.

---

## Stand vom 14.09.2026 — weiche Wolkenkante, Schriftzug tauscht sich

Zwei letzte Wünsche von Max zum Auftakt der Produktseite:

**1. Weicher Rand statt harter Kante — nur am Anfang.** Die Wolke endete abrupt. Jetzt läuft
sie über fünf Ringe aus und ist am Anfang etwas größer; beim Scrollen zieht sie sich wieder
zusammen, der Rest bleibt wie er war.

| Ring | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| vorher | 13 | 11 | 11 | 11 | 10 | 11 | **11** | **3** | 0 |
| jetzt | 12 | 12 | 10 | 10 | 9 | 8 | 5 | 3 | 1 |

Dabei fiel auf: dieselbe Punktzahl auf größerer Fläche wirkt blasser (Kern von 13 auf 7).
Ausgeglichen mit 6811 statt 5250 Punkten und mehr Helligkeit — Kern jetzt 12.

**2. Der Schriftzug tauscht sich.** Ganz oben steht **iCapsule**, ab etwa 90 px Scrollweg wird
daraus **Erinnerungen neu erleben.** in derselben Größe am selben Platz. Der Untertitel als
eigene Zeile ist entfallen.
Gelöst über ein **Rasterfeld**, in dem beide Texte übereinanderliegen (`grid-area:1/1`) —
dadurch bestimmt der längere die Höhe und **beim Tausch springt nichts**: Titelhöhe 233 px am
Rechner, 96 px am Handy, jeweils vor und nach dem Tausch identisch.

Geprüft: kein Querscrollen am Rechner und am Handy, Wolke weiterhin auf das Gerät zentriert,
Schwung-Mechanik unverändert. Seite 9897 px.

---

## Stand vom 14.09.2026 — Auftakt der Produktseite fertig

Max' vier letzte Punkte umgesetzt:

1. **Wolke sitzt auf dem Gerät.** Der Mittelpunkt kommt jetzt aus dem Bild selbst statt aus der
   Canvasmitte — Abweichung **1–3 px**. Folgt automatisch der Scroll-Verschiebung.
2. **Preiszeile entfernt** (lag in den Partikeln, unlesbar; steht ohnehin zweimal weiter unten).
3. **Titel bekommt einen Auftritt:** größer (116 px), Einblenden beim Laden, und beim Scrollen
   schrumpft er auf 0,86 und steigt, während das Gerät von 0,88 auf 1,18 wächst.
4. **Ruhe im Stand, Wucht beim Scrollen** über einen Schwung, der sich beim Scrollen auflädt
   (`+|delta|*0.010`) und je Bild um 5,5 % abklingt.

| | im Stand | beim Scrollen |
|---|---|---|
| aufleuchtende Partikel | 780 | **5125 — 6,6×** |
| Gesamthelligkeit | 1088 | 1945 |
| Außenkante der Wolke | 431 px | 451 px |

Danach zurück auf Ruhewerte. Am Handy: 1600 Punkte, 6,8 % Deckung, Gerät 62 %, Titel 54 px,
kein Querscrollen. Seite 9897 px.

**Neu in `05-fallen.md` und wichtig für alle künftigen Prüfungen:** Im Browser-Bereich feuern
**überhaupt keine Scroll-Ereignisse** — `pageYOffset` ändert sich, aber kein `scroll` kommt an.
Alles Scrollabhängige muss mit `window.dispatchEvent(new Event('scroll'))` ausgelöst werden.

---

## Stand vom 14.09.2026 — Produkt freigestellt, Auftakt scharf

Max' Rückmeldung zur Partikelfassung: Partikel gut, aber das Bild verpixelt und mit einem
**rechteckigen schwarzen Rahmen** um das Produkt. Beides waren echte Fehler.

**Der Rahmen:** ein undurchsichtiges JPEG über einer Animation schneidet ein Rechteck heraus.
Die Renderings haben einen Alphakanal, der ist aber **komplett deckend** — sie wurden auf
Schwarz ausgegeben. Freigestellt über die **konvexe Hülle** aller hellen Punkte (zwei andere
Verfahren scheiterten, siehe `05-fallen.md`), jetzt als PNG und WebP mit Transparenz.

**Die Verpixelung:** Quelle 584 px Produkt, Datei 1200 px (2,05× hochgerechnet), Darstellung
600 CSS-px. Neu aus `bild28.jpg` des PDF (635 × 578), Ausgabe 952 px, Darstellung 500 CSS-px
→ **1,05× statt 2,05×.**

**Wichtiger Fund: die Bildquellen liegen an zwei Orten.** `iBee.pdf` enthält **30** eingebettete
JPEGs, teils höher aufgelöst als die 28 in der `.pptx` — eines sogar 3840 × 2160.
Vor dem nächsten Bildtausch beide durchsehen.

Nachgemessen: Ecke durchsichtig, Mitte deckend, **17 % der Fläche hinter dem Gerät zeigen
Partikel**. Am Handy 263 px (70 %), kein Querscrollen.

**Grenze bleibt:** 635 px echtes Produkt. Über etwa 500 CSS-px wird es wieder weich. Ein neues
Rendering **mit transparentem Hintergrund** wäre weiterhin der größte Gewinn und würde das
Freistellen überflüssig machen.

---

## Stand vom 14.09.2026 — Partikelwolke im Auftakt

Der Auftakt der Produktseite ist jetzt eine **Partikelanimation** auf einem Canvas, ohne
Bibliothek: eine treibende Punktwolke, aus der rhythmisch Wellen nach außen laufen.
Das Gerät ist dafür kleiner (600 px statt 980).

Beim Scrollen weitet sich die Wolke (Außenkante 440 → 783 px), die Wellen werden schneller,
Titel und Gerät wandern unterschiedlich schnell, das Gerät wächst auf 1,17.
Der Abschnitt ist 158 svh hoch mit klebendem Rahmen.

**Drei Fallen, die dabei zuschnappten** — alle in `05-fallen.md`:
1. `position:sticky` brach an `overflow-x:hidden` am `body`. Entfernt, nachdem geprüft war,
   dass kein Element über die Fensterbreite hinausragt. Kein Querscrollen.
2. Das Canvas war **1 × 1**, weil beim Skriptstart noch kein Layout stand.
3. Die Wolke war mit **0,4 % Deckung** praktisch unsichtbar — Punkte unter einem Pixel.
   Jetzt 5,9 %.

Dazu ein Denkfehler: Die erste Fassung blendete beim Scrollen alles aus, wodurch nach halber
Strecke **900 px schwarze Fläche** folgten. Jetzt bleibt der Inhalt sichtbar und scrollt
natürlich hinaus.

Gemessen (die Animation selbst ist hier nicht sichtbar, `requestAnimationFrame` friert ein —
geprüft wurde über Bildpunkte mit dem Haken `window.wolkeBild(p)`):

| | |
|---|---|
| Flächendeckung | 5,9 %, hellster Punkt 255 |
| Bewegung | 31,9 % der Bildpunkte in der Mitte ändern sich in 0,7 s |
| Ausweitung beim Scrollen | 440 → 783 px |
| Handy | 1600 statt 5250 Punkte, 6,9 % Deckung |
| Querscrollen | keins |

Seite **9897 px**. Beide Dateien strukturell sauber, alle Asset-Verweise vorhanden.

→ **Ob es gut aussieht, kann nur Max beurteilen.**

---

## Stand vom 14.09.2026 — Produktbilder groß, Abschnitte dunkel

Drei Einwände von Max, alle behoben:

1. **Produktbilder zu klein.** Der Zuschnitt stimmte, aber ich zeigte sie nur mit 640 px auf
   1400 px Fenster (45 %). Apple zeigt Produktbilder mit 60–80 % der Breite.
   → jetzt **980 px, 70 %**; am Handy 87 % statt 70 %.
2. **Text lag über dem Produkt.** Das Wohnzimmerbild lief als Band mit Textüberlagerung —
   und das Gerät steht im Bild genau dort, wo die Überschrift saß. Überlagerung entfernt,
   Bild läuft jetzt normal über die volle Breite mit Text darüber. Ungenutztes CSS mit weg.
3. **Assistenten-Abschnitt lag auf Hellgrau**, das Rendering ist aber ein schwarzes Quadrat —
   ein schwarzer Klotz auf hellem Feld. → jetzt dunkel, Bild von 460 auf 680 px.

Alle Produktabschnitte sind jetzt dunkel; hell bleibt nur der Preisabschnitt, wo das Rendering
selbst hellen Hintergrund hat.

Seite **9787 px**, kein Querscrollen am Rechner und am Handy, Einblenden 17 von 17.

**Weiterhin der größte Hebel:** neue, eng gerahmte Renderings in hoher Auflösung für Auftakt,
Chip und Röntgenansicht. Die Quellen sind nur 1920 × 1080, beim Auftakt davon 584 × 544 Produkt
— auf großen Bildschirmen ist das die Grenze.

---

## Stand vom 14.09.2026 — Renderings zugeschnitten

Max schickte ein Bildschirmfoto: Produkt winzig, ringsum nur Schwarz. Sein Einwand war
richtig und traf einen Grundfehler.

**Die Bilder selbst waren fast leer.** Genutzte Bildfläche: Auftakt **12 %**, Assistent
**17 %**, Bildschirme 32 %. Sie bildfüllend zu zeigen vergrößerte nur die Leere mit.

**Der erste Reparaturversuch war auch falsch:** Zuschnitt auf 16:9. Bei quadratischem Inhalt
bleibt dann seitlich Leere — der Chip kam von 47 % auf 47 %, also nichts gewonnen.

**Richtig:** auf die natürliche Form des Inhalts schneiden, Layout danach richten.
Breite Zuschnitte über die volle Breite, quadratische mittig oder im Paar neben dem Text.
Weil Bild- und Seitenhintergrund beide Schwarz sind, ist der Bildrand danach unsichtbar —
das Produkt steht scheinbar frei auf der Seite.

Seite jetzt **8832 px**. Bilder teils kleiner in Pixeln, zeigen aber 100 % Produkt statt 25 %.

Geprüft: 14 Bilder, alle Maße im Markup stimmen mit den Dateien, kein Querscrollen am Rechner
und am Handy, Einblenden 16 von 16.

### Der größte verbleibende Hebel

Die Quellrenderings sind nur **1920 × 1080**, und davon ist beim Auftakt nur **584 × 544**
echtes Produkt. Für die wichtigsten zwei, drei Bilder wäre ein **neues Rendering, eng gerahmt
und hochauflösend**, der deutlichste Qualitätsgewinn. Max hat angeboten, bei Bedarf neu zu
rendern — das ist der Punkt, an dem es sich lohnt.

---

## Stand vom 14.09.2026 — Produktseite mit bildfüllenden Renderings

Nach Max' Rückmeldung nachgeschärft: Die Renderings waren in der kompakten Fassung nur
**542 px breit** — zu klein für Bilder, die beeindrucken sollen.

**Jetzt laufen acht Renderings über die volle Fensterbreite.** Gemessen bei 1400 × 900:
**1400 × 788 px, also 100 % der Breite und 88 % der Höhe.** Dafür neu gezogen in voller
Quellauflösung 1920 × 1080.

**Der Fotobereich war echt kaputt** und Max hat es gemerkt. Die Erinnerungsfotos stammten aus
`image16-19.png` der Präsentation — das sind **durchsichtige quadratische Flächen mit einem
gerundeten Foto darin**, jedes anders groß. Die Transparenz wurde beim Umwandeln weiß, also
schwammen die Fotos mit ungleichen weißen Rändern in ihren Kacheln.
→ Ersetzt durch die **Originalfotos** (`image1-15`, `image20`), mittig quadratisch
beschnitten auf 800 × 800. Sechs Stück, einheitlich.

| Fassung | Höhe | Renderings |
|---|---|---|
| erste, eine Kolonne | 11279 px | mittig, begrenzt |
| kompakt | 6184 px | 542 px — zu klein |
| **jetzt** | **10587 px** | **volle Fensterbreite** |

Am Handy: Renderings 375 × 211, Fotokacheln von sechs auf drei Spalten, Bandtext unter das
Bild, kein Querscrollen.

Bildordner `assets/img/icapsule/`: 3,7 MB gesamt, davon 992 KB als WebP.

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
