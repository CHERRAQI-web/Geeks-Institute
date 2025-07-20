const prompt = require('prompt-sync')();

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let nom = prompt("Donner votre nom : ");
let trouvé = false;

for (let clé in guestList) {
  if (nom === clé) {
    console.log(`Hi! I'm ${clé} , and I'm from  ${guestList[clé]}`);
    trouvé = true;
    break;
  }
}

if (!trouvé) {
  console.log("Hi! I'm a guest.");
}
