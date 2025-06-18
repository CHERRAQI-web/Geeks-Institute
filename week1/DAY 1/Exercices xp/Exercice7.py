basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")

basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0,"Apples")

cnt=basket.count("Apples")
print(f"la liste contient  {cnt} Apples")

basket.clear()
print(basket)