import { readdir } from 'fs/promises';

const repertoire = './'; 

try {
  const fichiers = await readdir(repertoire);
  console.log('Contenu du répertoire :');
  fichiers.forEach(fichier => {
    console.log(fichier);
  });
} catch (err) {
  console.error('Erreur lors de la lecture du dossier :', err);
}
