import express from 'express';
import path from 'path';
import connectDB from './config/db.js'; // Si tu utilises MongoDB
import quizRoutes from './routes/quizRoutes.js'; // Routes de ton quiz
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;

// Connexion à MongoDB (si tu l'utilises)
connectDB();

// Middleware pour servir des fichiers statiques
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../public')));

// Middleware pour analyser le JSON des requêtes
app.use(express.json());

// Routes de ton quiz (tu peux ajuster selon ton API)
app.use('/quiz', quizRoutes);

// Route par défaut pour afficher index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// Lancer le serveur
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
