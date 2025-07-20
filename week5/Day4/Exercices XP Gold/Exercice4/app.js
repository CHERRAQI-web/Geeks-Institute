import { faker } from '@faker-js/faker';

// function generateUsers(count) {
//   const users = [];

//   for (let i = 0; i < count; i++) {
//     users.push({
//       nom: faker.name.fullName(),
//       adresse: faker.address.city(),
//       rue: faker.address.streetAddress(),
//       pays: faker.address.country()
//     });
//   }

//   return users;
// }

// const users = generateUsers(5);
// console.log(users);

import readlineSync from 'readline-sync';

const users = [];

function demanderInfosUtilisateur() {
  const nom = readlineSync.question('Quel est votre nom ? ');
  const adresse = readlineSync.question('Quelle est votre ville ? ');
  const rue = readlineSync.question('Quelle est votre rue ? ');
  const pays = readlineSync.question('Quel est votre pays ? ');

  const user = {
    nom,
    adresse,
    rue,
    pays
  };

  users.push(user);
  console.log('Utilisateur ajouté avec succès :');
  
}

// Exemple : demander à l'utilisateur 1 fois
demanderInfosUtilisateur();

console.log('\n utilisateurs :');
console.log(users);
