const questions = [
  {
    question: "Qu'est-ce que Node.js ?",
    options: {
      A: "Un langage de programmation",
      B: "Une base de données",
      C: "Un framework JavaScript",
      D: "Un environnement d'exécution JavaScript côté serveur",
      E: "Un navigateur alternatif"
    },
    answer: "D"
  },
  {
    question: "Lequel est un module natif de Node.js ?",
    options: {
      A: "express",
      B: "http",
      C: "axios",
      D: "nodemon"
    },
    answer: "B"
  },
  {
    question: "Quelle commande initialise un projet Node.js ?",
    options: {
      A: "npm install",
      B: "npm start",
      C: "npm init",
      D: "node init"
    },
    answer: "C"
  }
];

let currentQuestion = 0;
let score = 0;

const container = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const feedbackDiv = document.getElementById("feedback");
const scoreDiv = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  let html = `<h2 class="text-lg font-semibold mb-2">${currentQuestion + 1}. ${q.question}</h2>`;
  for (let key in q.options) {
    html += `
      <div>
        <label>
          <input type="radio" name="answer" value="${key}" class="mr-2">
          ${key}: ${q.options[key]}
        </label>
      </div>`;
  }
  container.innerHTML = html;
  feedbackDiv.innerText = "";
}

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) {
    feedbackDiv.innerText = "Veuillez sélectionner une réponse.";
    return;
  }

  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    feedbackDiv.innerText = "Correct !";
    score++;
  } else {
    feedbackDiv.innerText = ` Incorrect. La bonne réponse était : ${questions[currentQuestion].answer}`;
  }

  currentQuestion++;

  setTimeout(() => {
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      document.getElementById("submit-btn").style.display = "none";
      container.innerHTML = "<h2 class='text-xl font-bold'>Quiz terminé !</h2>";
      feedbackDiv.innerText = "";
      scoreDiv.innerText = ` Votre score final : ${score}/${questions.length}`;
      submitBtn.disabled = true;
    }
  }, 1500);
});

showQuestion();
