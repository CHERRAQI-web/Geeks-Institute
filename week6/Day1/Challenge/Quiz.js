// const container = document.getElementById("quiz-container");
// const feedback = document.getElementById("feedback");
// const submitBtn = document.getElementById("submitBtn");

// let currentQuestionIndex = 0;
// let score = 0;

// // Questions codées en dur
// const triviaQuestions = [
//   {
//     question: "What is the capital of France?",
//     options: { A: "Paris", B: "Italie", C: "Portugal" },
//     answer: "A",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: { A: "April", B: "Mars", C: "October" },
//     answer: "B",
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     options: { A: "Blue whale", B: "African elephant", C: "Giraffe" },
//     answer: "A",
//   },
// ];

// async function fetchQuestion() {
//   // Si toutes les questions ont été répondues
//   if (currentQuestionIndex >= triviaQuestions.length) {
//     return showFinalScore();
//   }
//   const q = triviaQuestions[currentQuestionIndex];
//   showQuestion(q);
// }

// function showQuestion(q) {
//   let html = `<h2 class="text-lg font-semibold mb-2">${currentQuestionIndex + 1}. ${q.question}</h2>`;
//   for (let key in q.options) {
//     html += `
//       <div>
//         <label>
//           <input type="radio" name="answer" value="${key}" class="mr-2" />
//           ${key}: ${q.options[key]}
//         </label>
//       </div>`;
//   }
//   container.innerHTML = html;
//   feedback.textContent = "";
// }

// // Afficher le score final
// function showFinalScore() {
//   container.innerHTML = `<h2>Quiz terminé ! Votre score est ${score} / ${triviaQuestions.length}</h2>`;
//   submitBtn.textContent = "Recommencer";
//   submitBtn.removeEventListener("click", handleSubmit);
//   submitBtn.addEventListener("click", restartQuiz);
// }

// async function handleSubmit() {
//   const selected = document.querySelector("input[name='answer']:checked");
//   if (!selected) {
//     feedback.textContent = "Veuillez sélectionner une réponse.";
//     return;
//   }
//   const answer = selected.value;

//   // Envoi de la réponse au serveur
//   const res = await fetch('/quiz', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ answer })
//   });
//   const data = await res.json();

//   if (data.done) {
//     // Lorsque toutes les questions sont répondues, afficher un message avant de rediriger
//     feedback.textContent = `Quiz terminé ! Votre score est ${data.score} / ${data.total}`;
//     submitBtn.textContent = "Recommencer";

//     // Utiliser setTimeout pour attendre un moment avant la redirection
//     setTimeout(() => {
//       // Redirection vers /quiz/score après un délai
//       window.location.href = "/quiz/score";
//     }, 1500);  // délai de 1.5 secondes avant la redirection
//     return;
//   }

//   feedback.textContent = data.feedback;
//   currentQuestionIndex++;

//   setTimeout(() => {
//     feedback.textContent = '';
//     fetchQuestion();
//   }, 1500);
// }

// function restartQuiz() {
//   // Réinitialiser les variables du quiz
//   currentQuestionIndex = 0;
//   score = 0;
//   submitBtn.textContent = "Suivant";

//   // Réinitialiser l'affichage
//   fetchQuestion();

//   // Réattacher l'événement du bouton pour avancer dans les questions
//   submitBtn.removeEventListener("click", restartQuiz);
//   submitBtn.addEventListener("click", handleSubmit);
// }

// submitBtn.addEventListener("click", handleSubmit);

// fetchQuestion();  // Démarrer le quiz dès le début
const container = document.getElementById("quiz-container");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");

let currentQuestionIndex = 0;
let score = 0;

// Questions codées en dur
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

async function fetchQuestion() {
  // Si toutes les questions ont été répondues
  if (currentQuestionIndex >= triviaQuestions.length) {
    return showFinalScore();
  }
  const q = triviaQuestions[currentQuestionIndex];
  showQuestion(q);
}

function showQuestion(q) {
  let html = `<h2 class="text-lg font-semibold mb-2">${currentQuestionIndex + 1}. ${q.question}</h2>`;
  for (let key in q.options) {
    html += `
      <div>
        <label>
          <input type="radio" name="answer" value="${key}" class="mr-2" />
          ${key}: ${q.options[key]}
        </label>
      </div>`;
  }
  container.innerHTML = html;
  feedback.textContent = "";
}

// Afficher le score final
function showFinalScore() {
  container.innerHTML = `<h2>Quiz terminé ! Votre score est ${score} / ${triviaQuestions.length}</h2>`;
  submitBtn.textContent = "Recommencer";
  submitBtn.removeEventListener("click", handleSubmit);
  submitBtn.addEventListener("click", restartQuiz);
}

async function handleSubmit() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) {
    feedback.textContent = "Veuillez sélectionner une réponse.";
    return;
  }
  const answer = selected.value;

  // Envoi de la réponse au serveur
  const res = await fetch('/quiz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer })
  });
  const data = await res.json();

  if (data.done) {
    // Lorsque toutes les questions sont répondues, afficher un message avant de rediriger
    feedback.textContent = `Quiz terminé ! Votre score est ${data.score} / ${data.total}`;
    submitBtn.textContent = "Recommencer";

    // Utiliser setTimeout pour attendre un moment avant la redirection
    setTimeout(() => {
      // Redirection vers /quiz/score après un délai
      window.location.href = "/quiz/score";
    }, 1500);  // délai de 1.5 secondes avant la redirection
    return;
  }

  feedback.textContent = data.feedback;
  currentQuestionIndex++;

  setTimeout(() => {
    feedback.textContent = '';
    fetchQuestion();
  }, 1500);
}

function restartQuiz() {
  // Réinitialiser les variables du quiz
  currentQuestionIndex = 0;
  score = 0;
  submitBtn.textContent = "Suivant";

  // Réinitialiser l'affichage
  fetchQuestion();

  // Réattacher l'événement du bouton pour avancer dans les questions
  submitBtn.removeEventListener("click", restartQuiz);
  submitBtn.addEventListener("click", handleSubmit);
}

submitBtn.addEventListener("click", handleSubmit);

fetchQuestion();  // Démarrer le quiz dès le début
