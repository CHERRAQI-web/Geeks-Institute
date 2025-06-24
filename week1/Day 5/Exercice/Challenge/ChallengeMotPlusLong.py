
def MotPlusLong(longest_word):
    
    mots =[m.strip() for m in longest_word.split(" ")]
    #lenMaxMots=max(len(mot) for mot in mots) 
    motMax=max(mots, key=len)
    print(motMax)
    #print(lenMaxMots)
longest_word=str(input("Donner une phrase : "))
MotPlusLong(longest_word)