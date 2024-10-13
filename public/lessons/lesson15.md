# Let's make some money!

Wir machen jetzt unser Wissen zu Geld: Wir programmieren ein Glücksspiel.

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Schreibe ein Programm für ein Glücksspiel mit folgenden Regeln:
  
+ Der Spieler gibt einen Geldeinsatz ein.
+ Es werden zwei Würfel geworfen (Zufallszahlen von 1 bis 6).
+ Die Würfelergebnisse werden angezeigt.
+ Gewinnregel: Nur bei zwei gleichen Zahlen (Pasch) gewinnt der Spieler.
+ Der Gewinn ist der Einsatz multipliziert mit der Augenzahl.
+ Bei unterschiedlichen Würfeln verliert der Spieler seinen Einsatz.
+ Am Ende wird ausgegeben, ob der Spieler gewonnen oder verloren hat und wie viel.
  </p>

</div>

<details>

 <summary>Tipp</summary>

Hier ist ein Grundgerüst für dein Programm:

```python
import random

# Begrüßung und Spielerklärung
print("Willkommen beim Würfelspiel!")
print("Bei zwei gleichen Zahlen gewinnst du.")
print("Du gewinnst deinen Einsatz multipliziert mit der Augenzahl.")
print("Ansonsten verlierst du deinen Einsatz.")

# Einsatz abfragen
einsatz = int(input("Wie viel möchtest du einsetzen? "))

# Würfeln
wuerfel1 = random.randint(1, 6)
wuerfel2 = random.randint(1, 6)

# Würfelergebnis ausgeben
print("Würfel 1: " + str(wuerfel1))
print("Würfel 2: " + str(wuerfel2))

# Hier kommt deine if-else Anweisung für die Gewinnbedingung


# Hier kommt deine Ausgabe für Gewinn oder Verlust


print("Danke fürs Spielen!")
```

</details>
