# Lire la saisie utilisateur
saisie = input("Entrez des mots séparés par des virgules : ")

# Diviser la chaîne en une liste
liste_mots = saisie.split(",")
liste_mots.sort()
# Afficher la liste
print("Liste des mots :", liste_mots)