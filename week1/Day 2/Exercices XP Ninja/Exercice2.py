def get_full_name(first_name,last_name,middle_name=" "):
     nomComplet = first_name +" "+middle_name+" "+last_name
     return nomComplet
nom=str(input("Donner votre Nom : "))
while nom =="":
    nom=str(input("Donner votre Nom : "))

middle=str(input("Donner votre middle_name : "))
prenom=str(input("Donner votre prenom : "))
while prenom =="":
    prenom=str(input("Donner votre prenom : "))
print(get_full_name(nom,prenom,middle))
    