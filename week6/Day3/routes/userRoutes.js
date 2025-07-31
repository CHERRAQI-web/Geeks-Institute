import express from "express";
import bcrypt from "bcrypt";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";import { readFile, writeFile } from 'fs/promises';  // Import direct des fonctions

import { fileURLToPath } from "url";
const router = express.Router();


    const __filename = fileURLToPath(import.meta.url); 
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, '../users.json');
    const counterFilePath = path.join(__dirname, '../id-counter.json');



async function getNextId() {
    try {
        const data = await readFile(counterFilePath, 'utf8');
        const counter = JSON.parse(data);
        const nextId = counter.nextId || 1;
        
        await writeFile(
            counterFilePath, 
            JSON.stringify({ nextId: nextId + 1 }), 
            'utf8'
        );
        
        return nextId;
    } catch (error) {
        await writeFile(
            counterFilePath, 
            JSON.stringify({ nextId: 2 }), 
            'utf8'
        );
        return 1;
    }
}

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const saltRounds = 10;
    
    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).send('Veuillez remplir tous les champs.');
    }

    try {
        let data;
        try {
            data = await readFile(filePath, 'utf8');
        } catch (err) {
            data = '[]'; 
        }
        
        let users = JSON.parse(data);
        const userExists = users.some(user => 
            user.username === username || user.email === email
        );
        
        if (userExists) {
            return res.status(409).send(
                'username already exists or email already registered.'
            );
        }
        
        const newId = await getNextId();
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newUser = {
            id: newId,
            firstName,
            lastName,
            email,
            username,
            hashedPassword
        };
        
        users.push(newUser);
        
        await writeFile(
            filePath, 
            JSON.stringify(users, null, 2), 
            'utf8'
        );
        
        res.status(200).send(`Utilisateur créé avec ID: ${newId}`);
      
    } catch (err) {
        console.error('Erreur:', err);
        res.status(500).send('Erreur interne du serveur.');
    }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Veuillez remplir tous les champs.");
  }

  const filePath = path.join(__dirname, "../users.json");

  fs.readFile(filePath, "utf8", async (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier:", err);
      return res.status(500).send("Erreur interne du serveur.");
    }

    let users = [];
    try {
      if (data) {
        users = JSON.parse(data);
      }
    } catch (parseError) {
      console.error("Erreur de parsing JSON:", parseError);
      return res.status(500).send("Erreur de traitement des données utilisateur.");
    }

    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(401).send("username or password is incorrect.");
    }
    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
      return res.status(401).send("username or password is incorrect.");
    }

    res.send(`
      <div style="text-align:center; font-family:sans-serif;">
        <p>Bienvenue ${user.firstName} ${user.lastName} !</p>
      </div>
    `);
  });
});

router.get('/users', async (req, res) => {
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(data); 
        res.json(users); 
    } catch (err) {
        console.error('Erreur de lecture du fichier:', err);
        res.status(500).send('Erreur interne du serveur.');
    }
});
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await fsPromises.readFile(filePath, 'utf8');
        const users = JSON.parse(data); 
        const user = users.find(u=>u.id === parseInt(id));
        if (!user) {
            return res.status(404).send('Utilisateur non trouvé.');
        }
        res.json(user); 
    } catch (err) {
        console.error('Erreur de lecture du fichier:', err);
        res.status(500).send('Erreur interne du serveur.');
    }
  });

  router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, username, password } = req.body;
    try {

        const data = await fsPromises.readFile(filePath, 'utf8');
        let users = JSON.parse(data); 

        const userIndex = users.findIndex(u => u.id ===parseInt(id) );
        if (userIndex === -1) {
            return res.status(404).send('Utilisateur non trouvé.');
        }

        if (firstName) users[userIndex].firstName = firstName;
        if (lastName) users[userIndex].lastName = lastName;
        if (email) users[userIndex].email = email;
        if (username) users[userIndex].username = username;
        if (password) {
            const saltRounds = 10;
            users[userIndex].hashedPassword = await bcrypt.hash(password, saltRounds);
        }

        await fsPromises.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');

        res.send('Utilisateur mis à jour avec succès.');
    } catch (err) {
        console.error('Erreur de lecture du fichier:', err);
        res.status(500).send('Erreur interne du serveur.');
    }
});
export default router;
