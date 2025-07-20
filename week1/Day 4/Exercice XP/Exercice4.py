
class Person:
    def __init__(self,first_name,age,last_name=""):
        self.first_name=first_name
        self.age=age
        self.last_name=last_name
    
    def is_18(self):
        if self.age>=18:
            return True
        else:
            return False
        
class Family:
    def __init__(self,last_name):
        self.last_name=last_name
        self.members=[]

    def born(self,first_name, age):
        new_member = Person(first_name, age, self.last_name)
        self.members.append(new_member)

    def check_majority(self,first_name):
        for member in self.members:
            if member.first_name==first_name:
                if member.is_18():
                   print(f"{first_name} You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                 print(f"{first_name} Sorry, you are not allowed to go out with your friends.")
                return
        
    def family_presentation(self):
        print(f"Nom de famille : {self.last_name}")
        for member in self.members:
            if member.last_name==self.last_name:
                print(f"First name : {member.first_name} and Age : {member.age}")
            
        

famille_cherraqi = Family("cherraqi")
famille_boubghy = Family("boubghy")
# Ajout de membres
famille_cherraqi.born("Aziza", 25)
famille_cherraqi.born("Sara", 17)
famille_boubghy.born("Mariem",26)
famille_cherraqi.check_majority("Aziza")
famille_cherraqi.check_majority("Sara")
famille_cherraqi.check_majority("Ali")
famille_boubghy.check_majority("Mariem")

# Présentation
famille_cherraqi.family_presentation()

famille_boubghy.family_presentation()