import express from 'express';
import axios from 'axios';
const app=express();
const port=5000;
app.use(express.json());


app.get("/api/posts",async (req,res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    res.json(posts)
});
app.get("/api/posts/:id", async (req, res) => {
  const postId = req.params.id;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = response.data;

    if (!post || Object.keys(post).length === 0) {
      return res.status(404).json({ message: "Post non trouvé" });
    }

    res.status(200).json({
      message: "Le post est trouvé",
      post
    }); 
} catch (error) {
    res.status(404).json({ message: "Post non trouvé" });
  }
});

// POST /api/posts - Création d'un post
app.post("/api/posts", async(req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ message: "Titre et contenu sont requis" });
  }
try{
    const response=await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    });
    res.status(201).json({
      message: "Post créé avec succès",
      post: response.data
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du post" });
  }

});

app.put('/api/posts/:id', async (req, res) => {
  const { title, body } = req.body;

  if (!title && !body) {
    return res.status(400).json({ message: 'Rien à mettre à jour' });
  }

  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
      title,
      body
    });

    res.status(200).json({
      message: 'Post mis à jour avec succès',
      post: response.data
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du post' });
  }
});
app.delete("/api/posts/:id",async (req, res) => {
    try{
        const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.status(200).json({
          message: "Post supprimé avec succès",
          postId: req.params.id
        });
    }catch(error) {
        res.status(500).json({ message: "Erreur lors de la suppression du post" });
    }
});

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur : http://localhost:${port}`);
});
