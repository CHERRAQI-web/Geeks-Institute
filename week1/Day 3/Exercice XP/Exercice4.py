class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]

    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(f"les animaux actuellement présents dans le zoo est {self.zoo_name}")        
        for animal in self.animals:
            print(f"--",animal)

    def sell_animal(self,animal_sold):
            if animal_sold in self.animals:
                self.animals.remove(animal_sold)
                print(f"{animal_sold} a été retiré du zoo.")
            else:
                print(f"{animal_sold} n'est pas présent dans le zoo.")

    

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped = {}
        for animal in sorted_animals:
            lettre = animal[0].upper()
            if lettre not in grouped:
                grouped[lettre] = []
            grouped[lettre].append(animal)
        return grouped

    def get_groups(self):
        grouped_animals = self.sort_animals()
        print("Animaux groupés par lettre :")
        for lettre in grouped_animals:
            print(f"{lettre} : [ {', '.join(grouped_animals[lettre])}]")

mon_zoo=Zoo("zoo casablanca")
mon_zoo.add_animal("Giraffe")
mon_zoo.add_animal("Bear")
mon_zoo.add_animal("Baboon")
mon_zoo.get_animals()
mon_zoo.sell_animal("Bear")
mon_zoo.get_animals()
mon_zoo.sort_animals()
mon_zoo.get_groups()