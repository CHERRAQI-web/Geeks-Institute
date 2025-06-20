class cat():
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
    def afficher(self):
        print(f"Le chat s'appelle {self.nom} et il a {self.age} ans.")
def agee(chat1, chat2,chat3):
        if chat1.age>=chat2.age and chat1.age>chat3.age:
            return chat1
        elif chat2.age>chat1.age and chat2.age>chat3.age:
            return chat2
        else:
            return chat3
chat1 = cat("Mimi", 2)
chat2 = cat("Tigrou", 4)
chat3 = cat("Luna", 1)

Chat=agee(chat1, chat2, chat3)
print(f"Le chat le plus âgé est {Chat.nom}, et a {Chat.age} ans.")
