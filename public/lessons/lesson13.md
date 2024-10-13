# Eine Cola bitte

Wir könnten uns auch bei _Coca-Cola_ als Programierer für Getränkeautomaten bewerben? (Und dann die Automaten hacken! 😈)

<div class="exercise-box">
  <h3>Aufgabe:</h3>
  <p>Lies das Programm des Getränkeautomaten. Erweitere das Programm mit Deinem Lieblings-Getränk für die Auswahl 5.
  
Wenn Du fertig bist, füge zusätzlich eine geheime Auswahl 999 hinzu, die Dein Lieblings-Getränk für 0 Euro anbietet. 😈</p>

```python
# Begrüßung und Getränkeauswahl
print("Willkommen beim Getränkeautomat!")
print("Bitte wähle dein Getränk:")
print("1 - Cola (1,50 Euro)")
print("2 - Wasser (1,00 Euro)")
print("3 - Eistee (1,20 Euro)")
print("4 - Limonade (1,80 Euro)")

# Eingabe der Getränkewahl
wahl = int(input("Gib die Nummer des Getränks ein (1-4): "))

# Überprüfung der Wahl und Ausgabe des Preises
if wahl == 1:
    print("Du hast Cola gewählt. Das kostet 1,50 Euro.")
elif wahl == 2:
    print("Du hast Wasser gewählt. Das kostet 1,00 Euro.")
elif wahl == 3:
    print("Du hast Eistee gewählt. Das kostet 1,20 Euro.")
elif wahl == 4:
    print("Du hast Limonade gewählt. Das kostet 1,80 Euro.")
else:
    print("Ungültige Wahl. Bitte wähle eine Zahl zwischen 1 und 4.")
```

</div>

<details>

 <summary>Tipp</summary>

Du musst an mehreren Stellen das Programm anpassen, wenn Du ein neues Getränk hinzufügen willst.

</details>
