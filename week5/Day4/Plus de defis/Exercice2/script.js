import calculerMinutesDeVie from './date.js';
// console.log(calculerMinutesDeVie('1990-05-15'));
//Demander la date de naissance à l'utilisateur
import readlineSync from 'readline-sync';

// Demander la date de naissance
const dateNaissance = readlineSync.question("Entrez votre date de naissance (YYYY-MM-DD) : ");

const resultat = calculerMinutesDeVie(dateNaissance);
console.log(resultat);
