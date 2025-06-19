mois = int(input("Saisir un mois (1-12) : "))

if 1 <= mois <= 12:
    if mois in [3, 4, 5]:
        print("Spring")
    elif mois in [6, 7, 8]:
        print("Summer")
    elif mois in [9, 10, 11]:
        print("Autumn")
    else:  # mois in [12, 1, 2]
        print("Winter")
else:
    print("Saisir un mois correct (entre 1 et 12)")
