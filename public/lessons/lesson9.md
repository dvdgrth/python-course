# Du kommst hier nicht rein

Wir bringen dem Computer bei, eine Entscheidung zu machen.

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Schreibe ein Programm, das nach dem Alter fragt. Wenn man über 18 Jahre alt ist, wird man begrüßt, sonst wird man weg geschickt.</p>

</div>

<details>

 <summary>Tipp</summary>

Mit `if` und `else` können wir eine **Verzweigung** programmieren. Nur, wenn die Bedingung nach dem `if` zutrifft, wird der eingerückte Code ausgeführt, sonst wird der eingerückte Code unter dem `else` ausgeführt. Achte auf den Doppelpunkt und auf die korrekte Einrückung.

```python
alter = input("Stop. Wie alt bist Du?")
alter = int(alter)

if alter < 18:
    print("Du kommst hier nicht rein.")
else:
    print("Herzlich willkommen.")
```

_if_ heißt auch englisch _wenn_.

_else_ heißt auf englisch _sonst_.

</details>
