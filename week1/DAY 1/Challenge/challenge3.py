from datetime import datetime
while True:
    dateNaissance = input("Donner votre date de naissance (JJ/MM/AAAA) : ")
    try:
        date_obj = datetime.strptime(dateNaissance, "%d/%m/%Y")
        break
    except ValueError:
        print("Format invalide. Merci d'entrer la date au format JJ/MM/AAAA.")
aujourdui=datetime.now()
print("Date formatée :", date_obj.strftime("%d/%m/%Y"))
age= aujourdui.year-date_obj.year
if (aujourdui.month, aujourdui.day) < (date_obj.month, date_obj.day):
    age -= 1
print(f"{age}")
bougies=age%10
print(f"{bougies}")
largeur_gateau = 17
espaces = (largeur_gateau - bougies) // 2

print("_" * espaces + "i" * bougies+"_"* espaces)
print("  |:H:A:P:P:Y:| ")
print("__|___________|__")
print("|^^^^^^^^^^^^^^^|")
print(":B:I:R:T:H:D:A:Y:")
print("|               |")
print("~~~~~~~~~~~~~~~~~")