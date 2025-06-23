class Cat:
    def __init__(self,nom,age):
        self.nom=nom
        self.age=age
    
    def __str__(self):
        return f" le nom {self.nom}, et age : {self.age}"
    
    def walk(self):
        return f'{self.nom} is just walking around'

class Pets:
    def __init__(self,all_cats):
        self.all_cats=all_cats
        
    
    def walk(self):
        for x in self.all_cats:
            print(x.walk())

class Bengal(Cat):
    def __init__(self,nom,age):
        super().__init__(nom,age)          

class Chartreux(Cat):
    def __init__(self,nom,age):
        super().__init__(nom,age)

class Siamese(Cat):
    def __init__(self,nom,age):
        super().__init__(nom,age)


bengal_obj = Bengal("Simba", 3)
chartreux_obj = Chartreux("Grisou", 5)
siamese_obj = Siamese("Luna", 2)  
all_cats = [bengal_obj, chartreux_obj, siamese_obj]
     
sara_pets = Pets(all_cats)  

sara_pets.walk()
      