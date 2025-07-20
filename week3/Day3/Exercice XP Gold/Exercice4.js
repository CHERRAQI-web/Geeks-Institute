function exist(tab){
    for (let i = 0; i < tab.length; i++) {
    let sousTableau = tab[i];
    // Si la valeur n’est PAS dans ce sous-tableau, on retourne false direct
    if (!sousTableau.includes(val)) {
      return false;
    }
  }
  // Si on a jamais retourné false, c’est que val est dans tous les sous-tableaux
  return true;
}
exist([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]])