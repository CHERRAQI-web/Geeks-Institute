import { readFile, writeFile } from 'fs/promises';

try {
  const contenu = await readFile('source.txt', 'utf8');
  await writeFile('destination.txt', contenu);
  console.log('Fichier copié avec succès.');
} catch (err) {
  console.error('Erreur :', err);
}