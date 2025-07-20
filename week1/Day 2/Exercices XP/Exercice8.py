print("Entrez les garnitures pour votre pizza (tapez 'fin' pour terminer) :")
prix=10
while True:

    garniture = str(input("Garniture : "))

    if garniture.lower() == "quit":
        break

    print(f"  Adding {garniture} to your pizza.")
    prix+=2.5
print(f" le prix est {prix} $")

print(" Merci ! Votre pizza est en préparation.")
