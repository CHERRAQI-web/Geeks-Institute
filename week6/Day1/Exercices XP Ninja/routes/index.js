import express from 'express';
const router =express.Router();

router.get('/', (req, res) => {
  res.sendFile('app.html', { root: process.cwd() });
});
router.post('/greet', (req, res) => {
  const { username, emoji } = req.body;
  if (!username || !emoji) {
    return res.status(400).send('Veuillez remplir tous les champs.');
  }

  res.send(`
    <div style="text-align:center; font-family:sans-serif;">
      <h2>Bonjour ${username} !</h2>
      <p>Vous avez choisi ${emoji}</p>
    </div>
  `);
});

export default router;