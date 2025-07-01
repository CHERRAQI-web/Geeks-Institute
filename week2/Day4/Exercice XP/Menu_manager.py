from Data import connect_db
from Menu_items import MenuItem
class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        con = connect_db()
        item = None
        with con:
            with con.cursor() as cur:
                cur.execute("SELECT * FROM menu_items WHERE nom_element = %s", (name,))
                result = cur.fetchone()
                if result:
                    item_id, name, price = result
                    item = MenuItem(name=name, price=price, item_id=item_id)
        con.close()
        return item

    @classmethod
    def all_items(cls):
        con = connect_db()
        items = []
        with con:
            with con.cursor() as cur:
                cur.execute("SELECT * FROM menu_items")
                results = cur.fetchall()
                for row in results:
                    item_id, name, price = row
                    item = MenuItem(name=name, price=price, item_id=item_id)
                    items.append(item)
        con.close()
        return items
    


# Code exécutable
if __name__ == "__main__":
    item = MenuItem('Burger', 35)
    item.save()
    print(f"✅ Sauvé avec l'ID : {item.item_id}")
    
    item.save()
    item.update('Veggie Burger', 37)
    item.delete()

    item2 = MenuManager.get_by_name('Beef Stew')
    if item2:
        print(f"✔️ Trouvé : {item2.name} - {item2.price} MAD")
    else:
        print("❌ Élement non trouvé")

    items = MenuManager.all_items()
    print("📋 Tous les éléments du menu :")
    for i in items:
        print(f"• {i.name} : {i.price} MAD")