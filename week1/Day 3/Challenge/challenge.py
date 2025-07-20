class farm():
    def __init__(self,farm_name):
        self.name=farm_name
        self.animals={}
    def add_animal(self, animal_type, count= 1):
        if animal_type in self.animals:
            self.animals[animal_type]+=count
        else:
            self.animals[animal_type] = count
            
    def get_info(self):
        info=f"{self.name} Farm \n"
        for animal, count in self.animals.items():
                info += f"{animal.ljust(10)}: {count}\n"
        info += "\nEIEI-0 !"
        return info
    
# macdonald = farm("McDonald")
# macdonald.add_animal('cow', 5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
    def get_animal_types(self):
           return sorted(self.animals.keys())
    
    def get_short_info(self):
        types = self.get_animal_types()
        if not types:
            return f"La ferme {self.name} n'a aucun animal."

        # Construire la liste formatée avec pluriels
        mots = []
        for animal in types:
            count = self.animals[animal]
            nom = animal
            if count > 1 and not animal.endswith('s'):
                nom += 's'
            mots.append(f"des {nom}")

        # Phrase naturelle : a, b et c
        if len(mots) == 1:
            animaux_str = mots[0]
        elif len(mots) == 2:
            animaux_str = f"{mots[0]} et {mots[1]}"
        else:
            animaux_str = ", ".join(mots[:-1]) + f" et {mots[-1]}"

        return f"La ferme {self.name} a {animaux_str}."
    
macdonald = farm("McDonald")
macdonald.add_animal("vache", 5)
macdonald.add_animal("chèvre", 1)
macdonald.add_animal("mouton", 2)

print(macdonald.get_short_info())
