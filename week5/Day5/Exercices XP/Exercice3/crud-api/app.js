import express from 'express';
import fetchPosts from './data/dataService.js';
const app= express();
const port = 5000;


app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Les données ont été récupérées avec succès.');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts.' });
  }
});
app.listen(port, () => {
  console.log(` le serveur est en cours d'exécution sur :  http://localhost:${port}`);
});
