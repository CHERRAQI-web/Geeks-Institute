brand={
    "name": "Zara",
    "creation_date": "1975",
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes":["men", "women", "children", "home"],
    "international_competitors":["Gap", "H&M", "Benetton"],
    "number_stores": "7000",
    "major_color":{
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"]
    } 
}
brand["number_stores"]=2
print(brand)
print("Les client de Zara Sont :",brand["type_of_clothes"])
brand["country_creation"]="Spain"
print(brand)

if "international_competitors" in brand:
    print("existe")
    brand["international_competitors"].append("Desigual")
else:
    print("pas ex")
del brand["creation_date"]

lastE=brand["international_competitors"][-1]
print(lastE)

couleur=brand["major_color"]["US"]
print("les couleurs principales aux États-Unis est : ",couleur)
ct=0
print(" le nombre de clés dans le dictionnaire est : ",len(brand))
print("les clés du dictionnaire est :",brand.keys())

more_on_zara={
    "creation_date": "2000",
    "number_stores": "9000",
}
merge=more_on_zara|brand
print("more_on_zara + brand ",merge)