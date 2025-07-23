import express, { application } from 'express';
const app = express();
const port= 5000;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const users = [];
app.use(express.json());

const SECRET_KEY = process.env.SECRET_KEY;

app.post("/api/register", async (req, res) => {
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"Username et mot de passe sont requis"});
    }
    const hashedPassword=await bcrypt.hash(password, 10);
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword
    };  
    users.push(newUser);
    res.status(201).json({message:"Utilisateur créé avec succès"});
});


app.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({message:"Username et mot de passe sont requis"});
    }
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(404).json({message:"Utilisateur non trouvé"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({message:"Mot de passe incorrect"});
    }
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: "Connexion réussie", token });
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer token"

  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Route protégée
app.get('/api/profile', authenticateToken, (req, res) => {
  res.send(`Bonjour ${req.user.username}, vous avez accès !`);
});






















app.listen(port,()=>{
        console.log(`Le serveur est en cours d'exécution sur : http://localhost:${port}`);
});