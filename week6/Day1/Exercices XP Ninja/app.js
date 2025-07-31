import express from 'express';
import index from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', index);

app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}`);
});
