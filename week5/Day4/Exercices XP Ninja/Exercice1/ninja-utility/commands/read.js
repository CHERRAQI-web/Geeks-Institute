import fs from 'fs';
import path from 'path';

export default function readFile(filename) {
  const filePath = path.resolve(filename);

  if (!fs.existsSync(filePath)) {
    console.error(`Le fichier "${filename}" n'existe pas.`);
    return;
  }

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('Contenu du fichier :\n');
    console.log(data);
  } catch (error) {
    console.error('Erreur de lecture :', error.message);
  }
}
