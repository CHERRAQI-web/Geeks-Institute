// server.js (ES module version)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Ces deux lignes sont nécessaires pour utiliser __dirname en ES modules :
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Quiz.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
