from translate import Translator

# # Create a translator object from English to French
# translator = Translator(from_lang="en", to_lang="fr")

# # Text to translate
# text = "Hello, how are you?"

# # Translate the text
# translation = translator.translate(text)

# print(translation)  # Output: Bonjour, comment êtes-vous ?

french_words=[]
donner=str(input("Donner une liste : "))
french_words.append(donner)
trad=[]
translator = Translator(from_lang="fr", to_lang="en")
french_words = [mot.strip() for mot in donner.split(",")]

for word in french_words:
    
        translation = translator.translate(word)
        trad.append(translation)
dictionnaire = dict(zip(french_words, trad))

print(dictionnaire)