document.addEventListener('DOMContentLoaded', function() {
  let currentQuestionIndex = 0;
  let score = 0;

  // Charger la question suivante
  const loadQuestion = async () => {
    const res = await fetch('/quiz/next');
    const data = await res.json();

    if (data.quizComplete) {
      document.getElementById('quiz-container').innerHTML = `Quiz terminé! Votre score est : ${score}`;
      return;
    }

    const question = data.question;
    const options = data.options.map(option => `
      <label>
        <input type="radio" name="answer" value="${option._id}">
        ${option.option}
      </label>
    `).join('');

    document.getElementById('quiz-container').innerHTML = `
      <p>${question}</p>
      ${options}
    `;
  };

  // Soumettre la réponse
  document.getElementById('submitBtn').addEventListener('click', async () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
      alert("Veuillez sélectionner une réponse.");
      return;
    }

    const res = await fetch('/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionId: currentQuestionIndex + 1,
        selectedAnswerId: selectedAnswer.value
      })
    });

    const data = await res.json();
    score += data.score;
    document.getElementById('feedback').textContent = data.message;
    
    // Passer à la question suivante
    currentQuestionIndex++;
    loadQuestion();
  });

  // Charger la première question
  loadQuestion();
});
