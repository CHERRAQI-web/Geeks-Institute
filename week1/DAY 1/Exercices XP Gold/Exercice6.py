import random
Nb=int(input("Entrer un nombre entre 1 et 9 : ")) 
while Nb not in range(1,10):
    print("Nombre invalide. Veuillez réessayer.")
    Nb = int(input("Entrer un nombre entre 1 et 9 : "))
    
nombre = random.randint(1, 9)
print(f"Le nombre  aléatoire entre 1 et 9 est : {nombre}")
if Nb==nombre:
    print(" Gagnant")
else:
    print(" Meilleure chance la prochaine fois ")