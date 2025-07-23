let currentCorrect = "";
let score = 0;

const emojiDiv = document.getElementById("emoji");
const optionsDiv = document.getElementById("options");
const feedbackDiv = document.getElementById("feedback");
const scoreSpan = document.getElementById("score");
const leaderboardUl = document.getElementById("leaderboard");

function fetchQuestion() {
  fetch("/api/question")
    .then(res => res.json())
    .then(data => {
      currentCorrect = data.correct;
      emojiDiv.textContent = data.emoji;
      optionsDiv.innerHTML = "";
      feedbackDiv.textContent = "";

      data.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "block w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded";
        btn.onclick = () => checkAnswer(opt);
        optionsDiv.appendChild(btn);
      });
    });
}

function checkAnswer(selected) {
  if (selected === currentCorrect) {
    feedbackDiv.textContent = "✅ Correct !";
    feedbackDiv.classList.remove("text-red-500");
    feedbackDiv.classList.add("text-green-600");
    score++;
  } else {
    feedbackDiv.textContent = `❌ Mauvais ! C'était "${currentCorrect}"`;
    feedbackDiv.classList.remove("text-green-600");
    feedbackDiv.classList.add("text-red-500");
  }

  scoreSpan.textContent = score;
  setTimeout(fetchQuestion, 1000);
}

document.getElementById("saveScore").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Entrez votre nom !");
  
  fetch("/api/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, score })
  }).then(() => {
    fetchLeaderboard();
    score = 0;
    scoreSpan.textContent = "0";
  });
});

function fetchLeaderboard() {
  fetch("/api/leaderboard")
    .then(res => res.json())
    .then(data => {
      leaderboardUl.innerHTML = "";
      data.forEach(({ username, score }) => {
        const li = document.createElement("li");
        li.textContent = `${username} : ${score}`;
        leaderboardUl.appendChild(li);
      });
    });
}

// Lancement
fetchQuestion();
fetchLeaderboard();
