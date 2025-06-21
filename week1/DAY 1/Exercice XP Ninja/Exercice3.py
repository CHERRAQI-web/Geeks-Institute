paragraph= "Dans notre classe,  chacun a sa place. On s’écoute, on s’entraide, et c’est ce qui nous fait avancer ensemble."
langeur= len(paragraph)
print(f"le paragraph contient {langeur} de caractères")

import re
phrases = re.split(r'[.!?]', paragraph)

# On enlève les éléments vides (par exemple après le dernier point)
phrases = [phrase.strip() for phrase in phrases if phrase.strip() != ""]

print("Nombre de phrases :", len(phrases))

mots = paragraph.split()
nb_mots = len(mots)

print(f"Nombre de mots : {nb_mots}")
cnt=0
motUni=[]

for mot in mots:
    for index in range(len(mot) - 1):  
        if mot[index]!=mot[index+1]:
            cnt+=1
            break
    motUni=[mots]    
print(f"les mots non unique {motUni}")
