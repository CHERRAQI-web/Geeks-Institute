family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
resultat = ""
rslt=0
for nom, age in family.items():
    if age <= 3:
       prix = "Gratuit"
       rslt=0
    elif age <= 12:
        prix ="10 $"
        rslt+=10
    else:
        prix  ="15 $"
        rslt+=15
    resultat += f"{nom} : le prix du billet est {prix}\n"
    
print(resultat)
print("le coût total est :",rslt)