import file from './fileManager.js';

await file.writeText('Bye World.txt', ' Écriture dans le fichier');
const contenuBye = await file.readText('Bye World.txt');
console.log("Dans le fichier By World est :",contenuBye);   
const contenuHello = await file.readText('Hello World.txt');
console.log("Dans le fichier Hello World est :",contenuHello);

