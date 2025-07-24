import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Questions du quiz
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    options: { A: "Paris", B: "Italie", C: "Portugal" },
    answer: "A",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: { A: "April", B: "Mars", C: "October" },
    answer: "B",
  },
  {
    question: "What is the largest mammal in the world?",
    options: { A: "Blue whale", B: "African elephant", C: "Giraffe" },
    answer: "A",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Page principale
router.get('/', (req, res) => {
  currentQuestionIndex = 0;
  score = 0;
  res.sendFile(path.join(__dirname, '../app.html'));
});
router.post('/quiz', (req, res) => {
  const { answer } = req.body;

  // Si on est déjà à la fin du quiz
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const question = triviaQuestions[currentQuestionIndex];

  if (!answer) {
    return res.status(400).json({ message: 'Réponse manquante.' });
  }

  const correctAnswer = question.answer;
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    score++;
  }

  currentQuestionIndex++;

  // Si toutes les questions ont été répondues, renvoyer le score final
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({ done: true, score, total: triviaQuestions.length });
  }

  // Sinon, renvoyer la question suivante et la réponse à afficher
  res.json({ feedback: isCorrect ? 'Correct!' : 'Incorrect', correct: isCorrect });
});


// Route pour afficher le score final
router.get('/quiz/score', (req, res) => {
  res.send(`<h2>Quiz terminé ! Votre score est ${score} / ${triviaQuestions.length}</h2>`);
});

export default router;
