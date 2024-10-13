# Schere, Stein, Papier

Wir bringen dem Computer bei, zu spielen.

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Lies und teste das Programm. Wie trifft der Computer seine Auswahl? Schreibe ein kleines Programm, das eine zufällige Zahl zwischen 1 und 100 ausgibt.</p>

```python
import random

# Begrüßung
print("Willkommen zu Schere, Stein, Papier!")

# Eingabe der Benutzerauswahl (mit großem Anfangsbuchstaben)
wahl_spieler = input("Schere, Stein oder Papier? ")

# Computer trifft eine zufällige Wahl
zufall = random.randint(1, 3)

if zufall == 1:
    wahl_computer = "Schere"
elif zufall == 2:
    wahl_computer = "Stein"
else:
    wahl_computer = "Papier"

# Überprüfung der Spielereingabe und Spielregeln
if wahl_spieler == "Schere":
    print("Du hast Schere gewählt.")
    print("Der Computer hat " + wahl_computer + " gewählt.")
    if wahl_computer == "Papier":
        print("Du gewinnst!")
    elif wahl_computer == "Schere":
        print("Unentschieden!")
    else:
        print("Der Computer gewinnt!")

elif wahl_spieler == "Stein":
    print("Du hast Stein gewählt.")
    print("Der Computer hat " + wahl_computer + " gewählt.")
    if wahl_computer == "Schere":
        print("Du gewinnst!")
    elif wahl_computer == "Stein":
        print("Unentschieden!")
    else:
        print("Der Computer gewinnt!")

elif wahl_spieler == "Papier":
    print("Du hast Papier gewählt.")
    print("Der Computer hat " + wahl_computer + " gewählt.")
    if wahl_computer == "Stein":
        print("Du gewinnst!")
    elif wahl_computer == "Papier":
        print("Unentschieden!")
    else:
        print("Der Computer gewinnt!")

else:
    print("Ungültige Wahl. Bitte wähle nur Schere, Stein oder Papier.")

```

</div>

<details>

 <summary>Tipp</summary>

Der Befehl `import random` lädt das _random_-Modul in dein Programm. Dieses Modul enthält Funktionen, die zufällige Zahlen erzeugen können. `import`-Befehle müssen immer ganz am Anfang eines Programms stehen.
Hier ist als Hilfestellung ein Gerüst für Dein Programm:

```python
# Lade das random Modul.
import random

# Erzeuge eine Zufallszahl zwischen 1 und 100.

# Gib die Zufallszahl aus.


```

</details>
