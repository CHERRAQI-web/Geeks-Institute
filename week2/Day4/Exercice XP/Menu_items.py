from Data import connect_db

class MenuItem:
    def __init__(self,name,price,item_id=None):
        
        self.name=name
        self.price=price
        self.item_id=item_id

    def save(self):
        con=connect_db()
        with con:
            with con.cursor() as cur:
                cur.execute("INSERT INTO menu_items (nom_element, item_price) VALUES (%s, %s) RETURNING item_id", (self.name, self.price))
                self.item_id=cur.fetchall()[0]
                print(f"enregistrer avec id {self.item_id}")
        con.close()

    def update(self,n_name,n_price):
        if not self.item_id:
            raise ValueError("Element non enregistré")
        con=connect_db()
        with con:
            with con.cursor() as cur:
               cur.execute("UPDATE menu_items SET nom_element=%s, item_price=%s WHERE item_id=%s",
                (n_name, n_price, self.item_id))
            print(f"Mis à jour {self.item_id}")
        con.close()

    def delete(self):
        if not self.item_id:
            raise ValueError("Element non enregistré")
        con=connect_db()
        with con:
            with con.cursor() as cur:
                cur.execute("delete from menu_items where item_id=%s",self.item_id)
                print(f"supprimer id= {self.item_id}")

        con.close()