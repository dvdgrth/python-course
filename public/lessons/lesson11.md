# elif

Wir werden immer besser! Wir verstehen immer mehr!

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Lies folgendes Programm und überlege, was das Programm macht. Was fällt Dir auf?</p>

```python
zahl1 = int(input("Gib die erste Zahl ein: "))
zahl2 = int(input("Gib die zweite Zahl ein: "))

if zahl1 < zahl2:
    print("Die erste Zahl ist größer.")
elif zahl1 > zahl2:
    print("Die zweite Zahl ist größer.")
else:
    print("Beide Zahlen sind gleich.")
```

</div>

<details>

 <summary>Tipp</summary>

Ist Dir aufgefallen,

- dass das Programm einen Fehler hat? Korrigiere das Programm.
- dass `elif` eine weitere Option hinzufügt? Zwischen `if` und `else` kann man so viele `elif`s, wie man will, einfügen.
- dass die Datentyp-Umwandlung direkt nach dem input stattfindet? Das ist kürzer zu schreiben und funktioniert auch.
  Die folgenden beiden Code-Schnippsel machen beide das gleiche:

  ```python
  zahl1 = input("Gib die erste Zahl ein: ")
  zahl1 = int(zahl1)
  ```

  ```python
  zahl1 = int(input("Gib die erste Zahl ein: "))
  ```

</details>
