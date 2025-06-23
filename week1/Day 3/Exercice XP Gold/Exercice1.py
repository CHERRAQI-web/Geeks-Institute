class Circle():
    def __init__(self,rayon=1.0 ):
       self.rayon=rayon
    def perimetre(self):
        return self.rayon*3.14*2
    def surface(self):
        return (self.rayon**2)*3.14
    def definition(self):
        print("le cercle est L’ensemble de tous les points d’un plan qui sont à égale distance d’un point fixe appelé le centre.")
    
c = Circle(5)
print("Périmètre :", c.perimetre())
print("Surface :", c.surface())
c.definition()
