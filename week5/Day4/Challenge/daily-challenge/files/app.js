import { readFile } from 'fs/promises';

const contenu= await readFile('file-data.txt', 'utf8');
console.log('Contenu du fichier :', contenu);