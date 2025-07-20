from game import Game
class rock:
   
    def __init__(self):
        self.jeu = Game()
        self.results = {'win': 0, 'loss': 0, 'draw': 0}
    def play(self):
        user=self.jeu.get_user_item()
        computer=self.jeu.get_computer_item()
        rslt=self.jeu.get_game_result(user,computer)
        if rslt=="win":
            self.results["win"]+=1
            message = "Vous avez gagné !"
        elif rslt=='loss':
            self.results["loss"]+=1
            message = "Vous avez perdu."
        else:
            self.results["draw"]+=1
            message = "Match nul."
        print(f"Vous avez sélectionné {user}. L’ordinateur a sélectionné {computer}. Vous avez {message}")

    def get_user_menu_choice(self):
        print("\nMenu principal :")
        print("1 - Jouer à une nouvelle partie")
        print("2 - Afficher les scores ")
        print("3 - Quitter")
        choix = str(input("Votre choix : "))
        return choix
    
    def print_results(self,results):

        
        print("\nRésultats des parties jouées :")
        print(f"  - Gagné : {results.get('win', 0)}")
        print(f"  - Perdu : {results.get('loss', 0)}")
        print(f"  - Matchs nuls : {results.get('draw', 0)}")
        print("\nMerci d'avoir joué !\n")


    def Menu(self):
        while True:
            choix = self.get_user_menu_choice()
            if choix.lower() in ['x', 'q', '3']:
                print("Fermeture du programme. À bientôt !")
                break
            elif choix == '1':
                self.play()
            elif choix == '2':
                self.print_results(self.results)
            else:
                print(f"Choix invalide : {choix}")
jeu = Game()  
if __name__ == "__main__":
    app = rock()
    app.Menu()