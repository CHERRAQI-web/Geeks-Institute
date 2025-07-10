function search_word(chaine,mot){
   let compteur = 0;
    let position = chaine.indexOf(mot);

    while (position !== -1) {
    compteur++;
    position = chaine.indexOf(mot, position + mot.length);
    }

  
    console.log(`${mot} was found ${compteur} times.`)
}
search_word("cherraqi aziza","aziza")