import express from 'express';
import index from './routes/todos.js';

const app=express();
const port=3000;

app.use(express.json());

app.use('/',index);

app.listen(port,()=>{
    console.log(`Le serveur est en cours d'exécution sur : http://localhost:${port}`)
})