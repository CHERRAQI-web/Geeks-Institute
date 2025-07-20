names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
name = input("Entrez votre nom : ").strip().lower()
names_lower = [n.lower() for n in names]

if name in names_lower:
    index = names_lower.index(name)  
    print(f"Votre nom se trouve à l'index {index} dans la liste.")
else:
    print("Votre nom n'existe pas dans la liste.")