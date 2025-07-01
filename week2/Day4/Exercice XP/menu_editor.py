from Menu_items import MenuItem
from Menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n==== Menu du programme ====")
        print("V - Afficher un article")
        print("A - Ajouter un article")
        print("D - Supprimer un article")
        print("U - Mettre à jour un article")
        print("Q - Quitter")

        choice = input("Choisissez une option : ").strip().upper()

        # if choice == "V":
        #     name = input("Entrez le nom de l'article à afficher : ")
        #     item = MenuManager.get_by_name(name)
        #     if item:
        #         print(f"Article trouvé : ID={item.item_id}, Nom='{item.name}', Prix={item.price} MAD")
        #     else:
        #         print(" Aucun article trouvé avec ce nom.")

        if choice == "A":
            add_item_to_menu()

        elif choice == "D":
            remove_item_from_menu()

        elif choice == "U":
            update_item_from_menu()

        elif choice == "S":
           show_restaurant_menu()
        elif choice == "Q":
            show_restaurant_menu()

            break



def add_item_to_menu():
    name = input("Entrez le nom de l'article: ")
    try:
        price = float(input("Entrez le prix de l'article: "))
        item = MenuItem(name=name, price=price)
        item.save()
        print(f"item was added successfully")
    except ValueError:
        print("")

def remove_item_from_menu():
    name = input("Entrez le nom de l'article à supprimer : ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"Article supprimé : ID={item.item_id}, Nom='{item.name}', Prix={item.price} MAD")
    else:
        print("Aucun article trouvé avec ce nom.")
def update_item_from_menu():
    name = input("Entrez le nom de l'article à mettre à jour : ")
    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("Entrez le nouveau nom : ")
        try:
            new_price = float(input("Entrez le nouveau prix : "))
            item.update(new_name, new_price)
            print(f"Article mis à jour : ID={item.item_id}, Nom='{new_name}', Prix={new_price} MAD")
        except ValueError:
            print("Prix invalide.")
    else:
            print("Article non trouvé.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\n Menu complet :")
        for item in items:
            print(f"ID={item.item_id}, Nom='{item.name}', Prix={item.price} MAD")
    else:
        print("❌ Aucun article dans le menu.")

      

# Ajoute ceci pour exécuter le programme automatiquement
if __name__ == "__main__":
    show_user_menu()
