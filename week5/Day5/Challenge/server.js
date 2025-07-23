// server.js
import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "jeu.html"));
});
const emojis = [
  { emoji: "🐶", name: "Chien" },
  { emoji: "🐱", name: "Chat" },
  { emoji: "🐸", name: "Grenouille" },
  { emoji: "🐵", name: "Singe" },
  { emoji: "🦁", name: "Lion" },
  { emoji: "🐷", name: "Cochon" },
  { emoji: "🐔", name: "Poulet" },
  { emoji: "🐧", name: "Pingouin" }
];

// Endpoint question
app.get("/api/question", (req, res) => {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const distractors = emojis.filter(e => e.name !== correct.name);
  const options = [correct.name];
  while (options.length < 4) {
    const choice = distractors[Math.floor(Math.random() * distractors.length)];
    if (!options.includes(choice.name)) {
      options.push(choice.name);
    }
  }
  options.sort(() => Math.random() - 0.5);
  res.json({ emoji: correct.emoji, correct: correct.name, options });
});

// Enregistrement du score
app.post("/api/score", (req, res) => {
  const { username, score } = req.body;
  let scores = [];
  if (fs.existsSync("scores.json")) {
    scores = JSON.parse(fs.readFileSync("scores.json"));
  }
  scores.push({ username, score });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10);
  fs.writeFileSync("scores.json", JSON.stringify(scores, null, 2));
  res.json({ success: true });
});

// Récupérer le classement
app.get("/api/leaderboard", (req, res) => {
  if (!fs.existsSync("scores.json")) return res.json([]);
  const scores = JSON.parse(fs.readFileSync("scores.json"));
  res.json(scores);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
