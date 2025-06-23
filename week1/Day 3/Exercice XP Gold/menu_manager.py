class MenuManager:
    def __init__(self,menu=None):
            if menu is None:
                menu = []
                self.menu = menu

    def add_item(self,name, price, spice, gluten):
        self.menu.append({
                "name":name,
                "price":price,
                "spice":spice,
                "gluten":gluten
                })
        print(f"{name} a été ajouté au menu.")

    
    def update_item(self,name, price=None, spice=None, gluten=None):
        for item in self.menu:
                if item["name"]==name:
                    if item["price"] is not None:
                        item["price"]=price
                    if item["spice"] is not None:
                        item["spice"]=spice
                    if item["gluten"] is not None:
                      item["gluten"]=gluten
                return True
        print(f"{name}n'existe pas dans le menu.")
        return False
    def remove_item(self,name):
        for item in self.menu:
                if item["name"]==name:
                    self.menu.remove(item)
                    print(f"{name}' a été supprimé du menu.")
                    return True
        print(f"Le plat '{name}' n'est pas au menu.")
        return False
#     def show_menu(self):
#         if not self.menu:
#             print("Le menu est vide.")
#         else:
#             print("Menu actuel :")
#             for item in self.menu:
#                 print(f"- {item['name']} | Prix: {item['price']} | Épices: {item['spice']} | Gluten: {'Oui' if item['gluten'] else 'Non'}")
# manager = MenuManager()

# manager.add_item("Pizza", 10, 2, True)
# manager.add_item("Salade", 7, 1, False)

# manager.show_menu()

# manager.update_item("Pizza", price=12)    
# manager.update_item("Salade", spice=3)     
# manager.update_item("Tacos", price=8)      #  n'existe pas

# manager.remove_item("Burger")              #  pas au menu
# manager.remove_item("Salade")              # 

# manager.show_menu()
