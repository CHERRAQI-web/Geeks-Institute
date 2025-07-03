const prompt = require('prompt-sync')();

let nombre;
do {
  let saisie = prompt("Veuillez saisir un nombre : ");
  console.log("Type reçu :", typeof saisie);  // Toujours string avant conversion

  nombre = Number(saisie);
  console.log("Type après conversion :", typeof nombre);

  if (isNaN(nombre)) {
    console.log("Erreur : vous devez saisir un nombre !");
  } else if (nombre < 10) {
    console.log("Le nombre est inférieur à 10, veuillez recommencer.");
  }
} while (isNaN(nombre) || nombre < 10);

console.log("vous avez saisi un nombre valide et supérieur ou égal à 10 :", nombre);
