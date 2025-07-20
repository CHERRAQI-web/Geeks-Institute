import random
# def get_random_temp():
#      #return random.randint(-10, 40)
#       return round(random.uniform(-10, 40), 1)

def get_random_temp(mois):
   
    if mois in [12, 1, 2]:  # Hiver
            return round(random.uniform(-10, 5), 1)
    elif mois in [3, 4, 5]:  # Printemps
            return round(random.uniform(6, 20), 1)
    elif mois in [6, 7, 8]:  # Été
            return round(random.uniform(21, 35), 1)
    elif mois in [9, 10, 11]:  # Automne
            return round(random.uniform(10, 25), 1)
    else:
            print("Mois invalide.")
            return None
    
def main():
    mois = int(input("Entrez un mois (1 à 12) : "))
    while mois not in range(1,13):
        mois = int(input("Entrez un mois (1 à 12) : "))
        continue
   # N=get_random_temp()
    N=get_random_temp(mois)
    print(f"La température actuelle est de {N} degrés Celsius.")
    if N<0:
        print(f"Brrr, il fait un froid de canard ! Portez des couches supplémentaires aujourd'hui. ")
    elif N>=0 and N<=16:
        print(f" Il fait plutôt frais ! N'oubliez pas votre manteau. ")
    elif N>=17 and N<=23:
        print(f"Beau temps")
    elif N>=24 and N<=32:
        print(f"Beau temps")
    elif N>=32 and N<=40:
        print(f"Beau temps")
    
main()