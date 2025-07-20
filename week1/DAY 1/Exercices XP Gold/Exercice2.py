int(print("Tous les nombres de 1 à 20 :"))
for i in range(1,21):
    print(i)

int(print("\nNombres de 1 à 20 où l'index est pair :"))
for index in range(20):  
    if index % 2 == 0:
        print(index + 1) 