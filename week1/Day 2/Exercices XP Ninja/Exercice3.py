morse_code = {
    'A': '.-',     'B': '-...',   'C': '-.-.',
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '1': '.----',  '2': '..---',  '3': '...--',
    '4': '....-',  '5': '.....',  '6': '-....',
    '7': '--...',  '8': '---..',  '9': '----.',
    '0': '-----',  ' ': '/'  # Espace représenté par /
}

def text_to_morse(texte):
    texte = texte.upper()
    resultat = ""

    for char in texte:
        if char in morse_code:
            resultat += morse_code[char] + " "
        else:
            resultat += "? "  # caractère non reconnu
    return resultat.strip()
message = input("Entrer un message : ")
code = text_to_morse(message)
print("Code Morse :", code)
