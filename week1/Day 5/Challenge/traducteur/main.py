from translate import Translator

translator = Translator(from_lang="en", to_lang="fr")

text = input("Enter you text: ")

# Translate the text
translation = translator.translate(text)

print(translation)  # Output: Bonjour, comment êtes-vous ?