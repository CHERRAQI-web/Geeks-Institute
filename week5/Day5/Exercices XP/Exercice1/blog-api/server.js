const express=require('express');
const app = express();
const port = 3000;

const data=[{
    id: 1,
    title: "Premier article",
    content: "Ceci est le contenu de mon premier article."
}
,{
    id: 2,
    title: "Deuxième article",
    content: "Ceci est le contenu de mon deuxième article."
},{
    id:3,
    title: "trois article",
    content: "Ceci est le contenu de mon deuxième article."
}

]
app.use(express.json());

// Route GET /posts : Renvoie tous les articles
app.get('/posts', (req, res) => {
  res.json(data);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = data.find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ message: 'Article non trouvé' });
  }

  res.json(post);
});

app.post('/posts', (req, res) => {
  const { title, content } = req.body;

  // Vérification des champs
  if (!title || !content) {
    return res.status(400).json({ message: 'Titre et contenu sont requis.' });
  }

  // Création d’un nouvel article
  const newPost = {
    id: data.length + 1, // Génère un ID automatiquement
    title,
    content
  };

  data.push(newPost); // Ajoute à la "base de données"

  res.status(201).json(newPost); // Renvoie l'article ajouté
});


app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  // Cherche l'article à modifier
  const post = data.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Article non trouvé' });
  }

  // Met à jour les champs si fournis
  if (title) post.title = title;
  if (content) post.content = content;

  res.json({ message: 'Article mis à jour', post });
});


app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const index = data.findIndex(p => p.id === postId);

  if (index === -1) {
    return res.status(404).json({ message: 'Article non trouvé' });
  }

  const deletedPost = data.splice(index, 1)[0]; // Supprime l'article

  res.json({ message: 'Article supprimé', deletedPost });
});








// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});