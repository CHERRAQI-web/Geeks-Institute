import express from 'express';
import index from './routes/index.js';

const app = express();
const port = 3000;

// Pour traiter les données du formulaire
app.use(express.urlencoded({ extended: true }));

app.use('/', index);

app.listen(port, () => {
  console.log(`Serveur : http://localhost:${port}`);
});
