# Taschenrechner

Wir bringen dem Computer das Rechnen bei. (Selbst das muss man ihnen beibringen!)

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Schreibe ein Python-Programm, das Dich hintereinander nach 2 Zahlen fragt und dann diese 2 Zahlen addiert (plus rechnet).</p>
</div>

<details>

 <summary>Tipp</summary>

Für die Berechnung müssen die Daten den Datentyp _int_ (Zahl) haben. Für das Ausgeben mit `print()`, müssen die Daten den Datentyp _str_ (Wörter) haben.

```python
zahl1 = input("Zahl 1:")
zahl2 = input("Zahl 2:")

zahl1 = int(zahl1)
zahl2 = int(zahl2)

ergebnis = zahl1 + zahl2
ergebnis = str(ergebnis)

print("Das Ergebnis ist " + ergebnis)
```

Wörter und Zahlen sind **Datentypen**.

`int` steht für _integer_. Das ist englisch für _ganze Zahl_.

`str` steht für _string_. Das ist englisch für _Wort/Zeichenkette_.

</details>
