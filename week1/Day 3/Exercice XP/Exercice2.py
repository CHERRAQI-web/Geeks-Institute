class Dog():
    def __init__(self,name,height):
        self.name=name
        self.height=height
    def bark(self):
        print(f"{self.name} goes woof !")
        
    def jump(self):
        x=self.height*2
        print(f"{self.name} jumps {x} cm high!")

davids_dog=Dog("Arki",14)
sarahs_dog=Dog("Louis",20)
davids_dog.jump()
sarahs_dog.jump()

davids_dog.bark()
sarahs_dog.bark()

if sarahs_dog.height> davids_dog.height:
    print(f"le chient {sarahs_dog.name} est plus long que {davids_dog.name}")