phrase = str(input("Donne une phrase sans le caractere <A> : "))
#while phrase not in phrase:
char='A'
while char in phrase.upper():
        phrase=""
        print("phrase contient le caractere A . Veuillez réessayer.")
        phrase = str(input("Donne une phrase sans le caractere <A>: "))
   
print("bRAVO.")
     