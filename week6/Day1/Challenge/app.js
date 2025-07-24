import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import quizRouter from './routes/index.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware pour parser JSON et urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir fichiers statiques (HTML, JS, CSS)
app.use(express.static(__dirname));

// Routes quiz
app.use('/', quizRouter);

app.listen(port, () => {
  console.log(`Serveur démarré : http://localhost:${port}`);
});
