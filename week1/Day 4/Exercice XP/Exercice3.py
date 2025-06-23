from Exercice2 import Dog
import random
class PetDog(Dog):

    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained=False

    def train(self):
        self.trained=True
        print (super().bark())
        

    def play(self,*args):
        print(f"{args} tous jouent ensemble")
       
    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name}  {random.choice(tricks)}")


PetDog1=PetDog("Louis",3,4)
PetDog1.train()
PetDog1.play("Buddy", "Max")
PetDog1.do_a_trick()
