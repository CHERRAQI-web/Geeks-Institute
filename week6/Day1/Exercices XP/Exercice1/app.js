import express from 'express';
const app=express();
const port=3000;
import index from './routes/index.js';
app.use(express.json());


app.use('/', index);

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur : http://localhost:${port}`);
});