import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Obtenir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function afficherFichier() {
  const cheminFichier = path.join(__dirname, 'data', 'example.txt');

  if (fs.existsSync(cheminFichier)) {
    const stats = fs.statSync(cheminFichier);
    console.log('Le fichier existe');
    console.log('Taille :', stats.size, 'octets');
    console.log('Créé le :', stats.birthtime);
  } else {
    console.log("Le fichier n'existe pas");
  }
}

export default afficherFichier;
