birthdays = {
    "CHERRAQI AZIZA": "2000/04/15",
    "CHERRAQI": "1998/09/15",
    "AZIZA": "2001/04/20"
}

# Créer un nouveau dictionnaire avec les clés normalisées (minuscules, sans espace en trop)
birthdays_clean = {key.strip().lower(): value for key, value in birthdays.items()}

print("Vous pouvez consulter les dates d'anniversaire des personnes de la liste !")
person_name = input("Entrer le nom de personne : ").strip().lower()

if person_name in birthdays_clean:
    birthday = birthdays_clean[person_name]
    print(f"La date d'anniversaire de {person_name.title()} est le {birthday}.")
else:
    print(f"Désolé, je n'ai pas d'information sur {person_name.title()}.")
