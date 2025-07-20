birthdays = {
    "CHERRAQI AZIZA": "2000/04/15",
    "CHERRAQI": "1998/09/15",
    "AZIZA": "2001/04/20"
}
print("les noms du dictionnaire est : ",birthdays.keys())
birthdays_clean = {key.strip().lower(): value for key, value in birthdays.items()}
person_name = input("Entrer le nom de personne : ").strip().lower()

if person_name in birthdays_clean:
    print("le nom existe dans le dictionnaire")
else:
    print(f"Désolé, nous n'avons pas les informations d'anniversaire pour {person_name}")
