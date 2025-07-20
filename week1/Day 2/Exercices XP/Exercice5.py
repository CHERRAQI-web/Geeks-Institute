import random
def fonct(nombre):
    if(nombre>=1 and nombre<=100):
        Nb_aleatoire =random.randint(1, 100)
        print(f"Tu a donne le Nombre {nombre}")
        print(f"Le Nombre aleatoire est {Nb_aleatoire}")
        if(nombre==Nb_aleatoire):
            print(f"Success! (if the numbers match)")
        else:
             print(f"Fail! Your number: {nombre}, Random number: {Nb_aleatoire} (if they don't match)")
    else:
        print("Erreur : le nombre doit être entre 1 et 100.")
  
fonct(102)