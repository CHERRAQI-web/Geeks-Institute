import math
class Circle:
    def __init__(self,rayon ,diamètre ):
        self.rayon=rayon
        self.diamètre=diamètre
        self.airCercle=math.pi*rayon**2
    def __str__(self):
        return f"rayon : {self.rayon} diamètre : {self.diamètre} l'aire du cercle : {self.airCercle}"
    
    def __add__(self,autre):
        if isinstance(autre,Circle):
            nouveau_rayon = self.rayon + autre.rayon
            return Circle(nouveau_rayon)
        return NotImplemented

    def __gt__(self, value):
        if isinstance(value,Circle):
            return self.airCercle<value.airCercle
        return NotImplemented
    
    def __eq__(self, value):
        if isinstance(value,Circle):
            return self.airCercle==value.airCercle
        return NotImplemented
    
    def __lt__(self, value):  # Pour le tri
        if isinstance(value, Circle):
            return self.airCercle < value.airCercle
        return NotImplemented

c1 = Circle(9,15)
c2 = Circle(1,20)
c3 = Circle(2,8)

cercles = [c1, c2, c3]

# Tri croissant par aire
cercles_triees = sorted(cercles)

for c in cercles_triees:
    print(c)
