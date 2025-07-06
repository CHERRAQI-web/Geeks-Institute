const prompt = require('prompt-sync')();

let saisie = prompt("Donner plusieurs mots séparés par des virgules : ");
let table = saisie.split(","); 

console.log(table); 

let maxLen = 0;
for (let i = 0; i < table.length; i++) {
  if (table[i].length > maxLen) {
    maxLen = table[i].length;
  }
}
let ligneEtoiles = "* " + "*".repeat(maxLen) + " *";
let largeurTotale = maxLen + 4;
console.log("*".repeat(largeurTotale)); 

for (let i = 0; i < table.length; i++) {
  let mot = table[i];
  let espaces = " ".repeat(maxLen - mot.length);
  console.log(`* ${mot + espaces} *`);
 }

console.log("*".repeat(largeurTotale)); 
