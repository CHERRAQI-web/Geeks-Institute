number = int(input("entrer un number : "))
length = int(input("entrer un length : "))
multiples = []
i = 1
while len(multiples) < length:
    multiples.append(number * i)
    i += 1

# Résultat
print("Liste des multiples :", multiples)