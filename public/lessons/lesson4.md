# 100 Jahre

Wir verarbeiten unsere eingegeben Daten.

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Schreibe ein Python-Programm, das Dich nach Deinem Alter fragt und dann ausrechnet, in wie vielen Jahren Du 100 Jahre alt sein wirst.</p>
</div>

<details>

 <summary>Tipp</summary>

Computer sind dumm. Wir müssen ihnen extra sagen, dass wir eine Zahl eingegeben haben, denn der Computer denkt, alle Eingaben über die Tastatur sind Wörter.
Wir können ein Wort umwandeln in eine Zahl mit `int()`. Und eine Zahl können wir wieder zurück in ein Wort umzuwandeln mit `str()`.

```python
alter = input("Wie alt bist Du?")
alter = int(alter)

jahre = 100 - alter
jahre = str(jahre)

print("In " + jahre + " Jahren wirst Du 100 sein.")
```

Wörter und Zahlen sind **Datentypen**.

`int` steht für _integer_. Das ist englisch für _ganze Zahl_.

`str` steht für _string_. Das ist englisch für _Wort/Zeichenkette_.

</details>
