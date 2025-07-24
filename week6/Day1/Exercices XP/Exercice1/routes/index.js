import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenue dans la page d\'accueil !');
});

router.get("/about", (req, res) => {
    res.send('Bienvenue dans la page à propos !');
});
export default router;