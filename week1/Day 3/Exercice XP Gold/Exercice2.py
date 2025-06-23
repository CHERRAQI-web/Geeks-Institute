class MyList:

    
    def __init__(self,liste):
       self.liste=liste
    def listInver(self):
        return self.liste.sort(reverse=True)
    def lisTri(self):
        return self.liste.sort()
    
    def afficher(self):
        print(self.liste)

    def mylist(self,min_val=0, max_val=100):
        longueur=len(self.liste)
        print(longueur)
        import random
        return  [random.randint(min_val, max_val) for _ in range(longueur)]


ma_liste = MyList([4, 2, 9, 1, 7])

print("Liste originale :")
ma_liste.afficher()

print("Liste triée croissante :")
ma_liste.lisTri()
ma_liste.afficher()

print("Liste triée décroissante :")
ma_liste.listInver()
ma_liste.afficher()

liste_aleatoire = ma_liste.mylist()
print(liste_aleatoire)