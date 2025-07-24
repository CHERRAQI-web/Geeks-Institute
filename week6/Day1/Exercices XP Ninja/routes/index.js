import express from 'express';
const router =express.Router();

router.get('/', (req, res) => {
  res.sendFile('app.html', { root: process.cwd() });
});
router.post('/greet',(req,res)=>{
    const {username,emoji}=req.body;
if (!username || !emoji) {
    return res.status(400).send('Veuillez remplir tous les champs.');
  }

  res.send(`<h2 style="font-family:sans-serif;">Bonjour ${username} ! Vous avez choisi ${emoji}</h2>`);})
export default router;