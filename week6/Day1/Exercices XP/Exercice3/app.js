import express from 'express';
const app=express();
const port=3000;
import index from './routes/books.js';

app.use(express.json())
app.use('/',index)
app.listen(port,()=>{
 console.log(`Serveur démarré sur http://localhost:${port}`);
})