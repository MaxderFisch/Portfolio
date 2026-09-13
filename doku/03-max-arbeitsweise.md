# Max — wie er arbeitet und was er mag

Beobachtet über die Sessions vom 10.–13.09.2026. **Ergänzen, nicht überschreiben.**

---

## Wie er kommuniziert

**Er diktiert per Spracherkennung.** Die Nachrichten sind lang, springen, enthalten
Selbstkorrekturen, Füllwörter und gelegentlich verstümmelte Wörter. Beispiele:

- „so ein Ei, B war unser Projekt" → das Projekt heißt **iBee**
- „Dutzendgräse, ja, gefällt mir sehr gut" → vermutlich „ansonsten, ja"
- „lass da den oder mach den weißen Rand vielleicht grau" → er korrigiert sich mitten im Satz

**Daraus folgt:** Absicht herauslesen, nicht am Wortlaut kleben. Er beschreibt Gewünschtes
sehr bildhaft („das klebt mir so nach unten", „die Bilder sollen quasi reinfliegen") — daraus
präzise technische Anforderungen ableiten.

**Bei echter Mehrdeutigkeit nachfragen.** Er nimmt Rückfragen positiv auf. Das hat mehrfach
Fehler verhindert, zuletzt bei den Personennamen (Gabriel vs. Paul). Bei Namen realer
Personen **nie raten**.

---

## Tempo und Umfang

- **Qualität vor Geschwindigkeit**, sagt er ausdrücklich: *„Wenn du sagst, das ist zu viel auf
  einmal, um es ordentlich zu machen, dann mach lieber nicht alles und dafür dann schlampig,
  sondern mach es schon richtig gut."*
- Er ist bereit, **Schritt für Schritt** zu arbeiten. Wenn ein Auftrag zu groß ist: sagen und
  aufteilen, das ist ihm lieber als ein hingehudeltes Gesamtergebnis.
- Er gibt gern längere Zeitfenster: *„Nimm dir dafür ruhig länger Zeit."*, *„Ich gehe jetzt
  auf Toilette, das heißt du kannst jetzt in Ruhe arbeiten."*

---

## Wie er entscheidet

**Er will vergleichen können.** Das zieht sich durch das ganze Projekt — von den sechs
Designversionen v1–v6 über die A/B/C-Startseitenentwürfe bis zu den zwei Farbwelten für
„Seoul bei Tag". Wenn eine Gestaltungsfrage offen ist, **mehrere Varianten nebeneinander
bauen** statt eine zu begründen.

**Er testet selbst im Browser** und gibt sehr genaues, konkretes Feedback zu dem, was er sieht.
Er merkt Kleinigkeiten: dass ein Querformat im Hochformat-Rahmen sitzt, dass ein Rand zu stark
ist, dass zwei Bilder zusammengehören.

**Er ändert seine Meinung und das ist in Ordnung.** Rote Wörter: erst 3, dann 4, dann 2.
Rahmen: erst weiß, dann weg, dann dünn grau. Nicht als Widerspruch behandeln, einfach
umsetzen und den Stand festhalten.

---

## Was er mag

- **Dunkle Farbwelten.** Beige/hell wurde explizit verworfen.
- **Große Outline-Typografie im Hintergrund**, die beim Scrollen mitwandert. Das ist sein
  Lieblingselement; er hat es in seiner eigenen `scroll-showcase.html` gefunden und wollte es
  überall haben.
- **Farbwechsel pro Bereich** mit weichem Übergang beim Scrollen.
- **Asymmetrie und Versatz** statt gleichmäßiger Raster.
- **Kompaktheit.** Wiederkehrende Kritik: „dauert ewig zum Runterscrollen". Er will möglichst
  viel auf einen Blick und war begeistert, als die Startseite von 4838 auf 1979 px schrumpfte.
- **Hochformate** bei Vorschaubildern („weil auch alle hochkant sind, das gefällt mir").
- **Ehrliche, bescheidene Texte** in Ich-Form. Fehler dürfen drinstehen.

## Was er nicht mag — und warum

| Abgelehnt | Grund | Wann |
|---|---|---|
| Helle/Beige-Farbwelt | „der dunkel braune teil gefällt mir besser" | 12.09. |
| Weiße Passepartout-Rahmen um Projektbilder | zu auffällig; Ausnahme Brücke | 11.09. |
| Gegliederte Texte mit Zwischenüberschriften und Zitatblöcken | „zu hoch literarisch und hoch angepriesen" | 11.09. |
| Schräg laufende Lichtspuren | „wirklich nicht gedreht, also nicht so leicht schräg" | 11.09. |
| Zu große Bilder / zu viel Scrollweg | „ewig weit runterscrollen" | 12.09. |
| Viel Leerraum am Projektübergang | „vor allem beim übergang ist zu viel leerer platz" | 11.09. |
| Scroll-Zoom-Effekt | aus der v4-Zeit, laut altem Übergabedokument | Juli 2026 |

---

## Was ihm bei der Zusammenarbeit wichtig ist

- **Bestehendes nicht anfassen.** Er sagt häufig „lass X genau so". Das ist ernst gemeint.
  Am Ende belegen, dass es unberührt ist (Zeitstempel, `git status`, Diff).
- **Sichern vor Umbauten.** Er hat selbst darum gebeten, den Stand „irgendwo zwischenzuspeichern".
  Daher `Portfolio/archiv/` mit datierten Kopien.
- **Seine Originaldateien sind tabu.** Bearbeitet wird immer eine Kopie. Er hat außerdem
  entschieden, dass die Originale **nicht** auf GitHub sollen (`Neu/` in `.gitignore`).
- **Fehler offen benennen.** Er reagiert gut darauf. Mehrere echte Bugs kamen nur ans Licht,
  weil sie beim Prüfen auffielen und benannt wurden statt stillschweigend repariert.
- **Nicht ungefragt veröffentlichen.** Ein Push geht nach außen. Er fragt in der Regel selbst
  danach; einmal gab es ein Missverständnis (siehe `02-vorgeschichte.md`, Abschnitt 8).

---

## Kleinigkeiten, die man wissen sollte

- Er arbeitet **spätabends** und sagt dann Bescheid, wenn Schluss ist.
- Er schickt den Link zum Testen an Freunde — die öffnen ihn **am Handy**. Mobile Darstellung
  ist ihm deshalb wichtig, auch wenn er es nicht immer erwähnt.
- Er hat ein **iPhone**, Browser Chrome (läuft dort aber auf WebKit).
- Sein Rechner: iCloud Drive lagert Dateien ständig aus, `git` und `python3` sind kaputt.
  Das sind Umgebungsprobleme, keine Projektprobleme — siehe `CLAUDE.md`.
- Er schickt Material oft **nach** dem Auftrag nach („ich habe dir noch Bilder reingetan") und
  manchmal **mitten im Arbeitsgang**. Ordner auf neue Dateien prüfen, bevor man loslegt.
