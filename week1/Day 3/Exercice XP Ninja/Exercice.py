class Phone:
    def __init__(self,phone_number):
        self.call_history=[]
        self.phone_number=phone_number
        self.messages=[]
    def call(self,other_phone):
        
        print(f"{self.phone_number} apelle {other_phone}")
        self.call_history.append(other_phone)
    
    def show_call_history(self):
        if self.call_history:
            print("Journal des appel")
            for number in self.call_history:
                print(f"{number}")

            
    def send_message(self,other_phone,message):
        print(f"{self.phone_number} envoi sms {other_phone} :{message}")
        self.messages.append({
                    "a":other_phone,
                    "de":self.phone_number,
                    "contenu":message
        })
    def show_outgoing_messages(self):
        print("outgoing messages")
    def show_incoming_messages(self):
        print("incoming messages")

    def show_messages_from(self):
        for msg in self.messages:
            if msg["de"]==self.phone_number:
                print(f"{msg['contenu']}")

        
p = Phone("0611223344")
p.call("0700112233")
p.call("0699887766")
p.show_call_history()
p = Phone("0611223344")
p.send_message("0700112233", "Bonjour !")
p.send_message("0699887766", "Coucou !")
print(p.messages)
