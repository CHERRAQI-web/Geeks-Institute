import random
class Game:
    def __init__(self):
        pass
    
    def get_user_item(self):
        choix=input("Selectionner un élement: pierre/feuille/ciseaux  :").lower()
        while choix not in ['pierre','feuille','ciseaux'] :
            choix=input("Selectionner un élement: pierre/feuille/ciseaux  :").lower()
        return choix
            
    def get_computer_item(self):
        return random.choice(['pierre','feuille','ciseaux'])
    
    def get_game_result(self, user_item, computer_item):
        print(f"User item : {user_item}")
        print(f"Computer item : {computer_item}")

        if computer_item == user_item:
            print("match Null")
            return "draw"       # retourne "draw" si égalité
        elif ((computer_item == 'pierre' and user_item == 'ciseaux')
          or (computer_item == 'feuille' and user_item == 'pierre')
          or (computer_item == 'ciseaux' and user_item == 'feuille')):
            print("Perdu")
            return "loss"       # retourne "loss" si ordinateur gagne
        else:
            print("Gagné")
            return "win"        # retourne "win" si utilisateur gagne

