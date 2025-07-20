matrix=[
        [7,"i"," %"],
        ["K","h","@"],
        [0,"P",5],
        [1,6,"L"],
    ]
message = ""
buffer = ""

# Il y a 3 colonnes (longueur d'une ligne)
nb_colonnes = len(matrix[0])
# Il y a 4 lignes (nombre d'éléments dans la matrice)
nb_lignes = len(matrix) 

for  colonne in range(nb_colonnes):
    for ligne in range(nb_lignes):
        char=matrix [ligne][colonne]
        if str(char).isalpha():       # si c’est une lettre
            if buffer:
                message += " "
                buffer = ""
            message += char
        else:
            buffer += str(char)

print("Message secret :", message)
