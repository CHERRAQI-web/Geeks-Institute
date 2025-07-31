import express from 'express';
import quizControllers from '../controllers/quizControllers.js';

const router = express.Router();

// Route pour obtenir la question suivante
// router.get('/next', getQuestion);

router.post('/add-option', quizControllers.createOption);

// Route pour soumettre la réponse à une question
//router.post('/createQuestion', createQuestion);

export default router;
