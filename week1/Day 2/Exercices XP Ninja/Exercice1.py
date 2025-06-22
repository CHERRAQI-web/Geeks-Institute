marque="Volkswagen,Toyota , Ford Motor, Honda, Chevrolet"
list1=[l.strip() for l in marque.split(",")]
print(list1)
Nb=len(list1)
print(f"le nombre de fabricants/entreprises présents dans la liste est :{Nb}")
list1.sort(reverse=True)
print(list1)
cnt=0
for x in list1:
    if "o" in x:
        cnt+=1
        continue
print(f"le nombre marque contient le caractère 'o' est {cnt}")

c=0
for x in list1:
    if "i" not in x:
        c+=1
print(f"le nombre marque contient pas le caractère  'i' est {cnt}")

list2=["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
liste_sans_doublons = list(set(list2))
print(",".join(liste_sans_doublons))
print(f"il contient {len(liste_sans_doublons)} de marque")
liste_sans_doublons.sort()
print(liste_sans_doublons)

for x in range(len(liste_sans_doublons)) :
    lettre=list(liste_sans_doublons[x])
    lettre.sort(reverse=True)
    liste_sans_doublons[x]="".join(lettre)


print(liste_sans_doublons)
