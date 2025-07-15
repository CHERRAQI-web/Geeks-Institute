function makeAllCaps(tableau) {
  return new Promise((resolve, reject) => {
    const allStrings = tableau.every(el => typeof el === "string");

    if (!allStrings) {
      reject("Erreur : Le tableau contient un ou plusieurs éléments non chaînes.");
    } else {
      const uppercased = tableau.map(el => el.toUpperCase());
      resolve(uppercased);
    }
  });
}

function sortWords(tableau) {
  return new Promise((resolve, reject) => {
    if (tableau.length > 4) {
      const sorted = tableau.sort(); // trie alphabétique
      resolve(sorted);
    } else {
      reject("Erreur : La longueur du tableau doit être supérieure à 4.");
    }
  });
}

makeAllCaps(["pjear", "banana", "kiwi", "orange", "melon"])
  .then(arr => {
    console.log("Majuscules :", arr);
    return sortWords(arr); // retourne tableau trié
  })
  .then(sorted => {
    console.log("Trié :", sorted); // ici tu vois bien le résultat de sort()
  })
  .catch(error => {
    console.error("Erreur :", error);
  });

