class Dog:
    def __init__(self,name,age,weight):
        self.weight=weight
        self.name=name
        self.age=age

    def bark(self):
        return "aboie"
    
    def run_speed(self):
        return (self.weight/self.age)*10
    
    def fight(self,other_dog):
        dog1=self.run_speed()*self.weight
        other_dog=self.run_speed()*other_dog.weight

        if dog1>other_dog:
           return f"{self.name} est gagner"
        elif other_dog>dog1:
           return f"{other_dog.name} est gagner"
        else:
           return "Match nul"

Dog1=Dog("Louis",2,5)
Dog2=Dog("arki",1,2)
Dog3=Dog("maya",5,3)
print(Dog1.bark())
print(Dog2.run_speed())
print(Dog3.fight(Dog2))