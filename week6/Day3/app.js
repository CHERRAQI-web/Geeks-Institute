import express from 'express';
import router from './routes/userRoutes.js';
import path from 'path'; 
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
const app= express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

    const __filename = fileURLToPath(import.meta.url);  
    const __dirname = path.dirname(__filename); 
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './public/inscription.html'));  
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/connexion.html'));
});
app.use('/', router)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});