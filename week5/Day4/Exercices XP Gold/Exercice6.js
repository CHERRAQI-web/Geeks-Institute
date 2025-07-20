import readlineSync from 'readline-sync';

const nomComplet = readlineSync.question("Entrez votre nom et prenom : ");

const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

if (regex.test(nomComplet)) {
  console.log("Le nom est valide.");
} else {
  console.log("Le nom est invalide.");
}