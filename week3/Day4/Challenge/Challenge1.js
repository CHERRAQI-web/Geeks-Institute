let userValues = {}; 

document.getElementById("libform").addEventListener("submit", function(event) {
  event.preventDefault();

  // Récupération des valeurs
  let noun = document.getElementById("noun").value.trim();
  let adjective = document.getElementById("adjective").value.trim();
  let person = document.getElementById("person").value.trim();
  let verb = document.getElementById("verb").value.trim();
  let place = document.getElementById("place").value.trim();

  // Vérification
  if (!noun || !adjective || !person || !verb || !place) {
    alert("⚠️ Tous les champs doivent être remplis !");
    return;
  }

  // Stocker les valeurs
  userValues = { noun, adjective, person, verb, place };

  // Afficher la première histoire
  document.getElementById("story").textContent = generateRandomStory(userValues);

  console.log("✅ Formulaire soumis !");
});

// Fonction pour générer une histoire aléatoire
function generateRandomStory({ noun, adjective, person, verb, place }) {
  const stories = [
    `${person} ${verb} un ${adjective} ${noun} à ${place}.`,
    `À ${place}, ${person} a trouvé un ${noun} très ${adjective} et a décidé de le ${verb}.`,
    `Un jour, ${person} ${verb} au ${place} avec un ${noun} ${adjective}.`,
    `Pourquoi ${person} a-t-il ${verb} ce ${noun} ${adjective} à ${place} ?`,
    `Sans prévenir, ${person} ${verb} un ${noun} ${adjective} juste au milieu de ${place}.`
  ];

  // Choisir une histoire au hasard
  const randomIndex = Math.floor(Math.random() * stories.length);
  return stories[randomIndex];
}

// Générer une nouvelle histoire quand on clique sur "Aléatoire"
document.getElementById("randomBtn").addEventListener("click", function () {
  if (Object.keys(userValues).length === 0) {
    alert("Veuillez d'abord remplir et valider le formulaire.");
    return;
  }

  const newStory = generateRandomStory(userValues);
  document.getElementById("story").textContent = newStory;
  console.log("Histoire aléatoire :", newStory);
});
