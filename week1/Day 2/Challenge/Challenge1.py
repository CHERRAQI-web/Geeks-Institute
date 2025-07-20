Mot=str(input("Entrer un nom :"))
result = {}
for index, lettre in enumerate(Mot):
    lettre = str(lettre)
    if lettre in result:
            result[lettre].append(index)
    else:
            result[lettre] = [index]
print(result)   
