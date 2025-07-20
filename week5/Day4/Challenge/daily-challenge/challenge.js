import colorfulMessage from "./colorful-message.js";
import greet from "./greeting.js";
import { readFile } from 'fs/promises';

console.log(greet("Alice"));
console.log(colorfulMessage("Hello World!"));
const content =await readFile('./files/file-data.txt', 'utf8');
console.log('Contenu du fichier :', content);