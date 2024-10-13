# Spotify-Jahresstatistik

Wir können jetzt schon Code lesen!

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Lies folgendes Programm und erkläre, was das Programm in jeder Zeile macht.</p>

```python
# Eingabe der Werte
minuten_pro_tag = input("Wie viele Minuten hörst du ungefähr täglich Musik? ")

# Datentyp-Umwandlung
minuten_pro_tag = int(minuten_pro_tag)

# Berechnung der jährlichen Hördauer
stunden_pro_jahr = (minuten_pro_tag * 365) / 60

# Datentyp-Umwandlung
stunden_pro_jahr = str(stunden_pro_jahr)

# Ausgabe des Ergebnisses
print("Du hörst im Jahr insgesamt " + stunden_pro_jahr + " Stunden Musik.")
```

</div>

<details>

 <summary>Tipp</summary>

Die Zeilen, die mit `#` anfangen sind **Kommentare**. Code ist oft schwierig zu verstehen. Deshalb kann man Kommentare hinzufügen. Kommentare haben keine Wirkung auf das Programm, sie helfen aber beim Verstehen.

</details>
