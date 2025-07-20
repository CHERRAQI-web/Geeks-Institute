import { writeFile, readFile } from 'fs/promises';

// Fonction pour écrire dans un fichier
async function writeText(fileName, content) {
  await writeFile(fileName, content, 'utf8');
}

// Fonction pour lire un fichier
async function readText(fileName) {
  const data = await readFile(fileName, 'utf8');
  return data;
}

// Objet contenant les fonctions
const fileManager = {
  writeText,
  readText,
};

export default fileManager;
