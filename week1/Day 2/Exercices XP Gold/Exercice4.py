import random

# Simule un lancer de dé
def throw_dice():
    return random.randint(1, 6)

# Lance les dés jusqu'à obtenir des doubles, et retourne le nombre d'essais
def throw_until_doubles():
    i = 0
    while True:
        d1 = throw_dice()
        d2 = throw_dice()
        # print(f"({d1}, {d2})")  # tu peux décommenter si tu veux voir chaque lancer
        i += 1
        if d1 == d2:
            return i  # retourne le nombre d'essais, au lieu de juste arrêter

# Fonction principale
def main():
    lancers = []  # Liste pour stocker les 100 résultats

    for _ in range(100):  # Répéter 100 fois
        essais = throw_until_doubles()
        lancers.append(essais)

    total = sum(lancers)
    moyenne = round(total / len(lancers), 2)

    print(f"Il a fallu {total} lancers au total pour obtenir 100 doubles.")
    print(f"En moyenne, il faut {moyenne} lancers pour obtenir un double.")

# Appel de la fonction principale
main()
