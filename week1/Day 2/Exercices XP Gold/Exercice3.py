names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("Entrer le nom de personne : ").strip().lower()
for index , nom in enumerate(names):
    if nom.lower()  ==name:
        print(f"if input is {name} we should be printing the index {index}")
        break
else:
            print(f"{name} n'existe pas dans la liste.")

