const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"; // Ta clé API Giphy

// Fonction pour récupérer plusieurs GIFs à partir de la catégorie donnée
async function fetchMultipleGifs(category) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit`; // Limite à 5 GIFs

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log("Données récupérées depuis l'API Giphy :", data);

    // Vérifier si des GIFs ont été retournés
    if (data.data && data.data.length > 0) {
      const gifContainer = document.getElementById("gifContainer");
      gifContainer.innerHTML = "";

      data.data.forEach((gif) => {
        const gifImage = document.createElement("img");
        gifImage.src = gif.images.original.url; // URL du GIF
        gifImage.alt = `GIF ${category}`;
        gifContainer.appendChild(gifImage); // Ajouter l'image au conteneur
      });
    } else {
      console.error("Aucun GIF trouvé pour la catégorie spécifiée");
      const gifContainer = document.getElementById("gifContainer");
      gifContainer.innerHTML = "Aucun GIF trouvé pour cette catégorie.";
    }
  } catch (error) {
    console.error("Une erreur est survenue :", error);
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML =
      "Une erreur est survenue lors de la récupération des GIFs.";
  }
}
document.getElementById("Supp").addEventListener("click", function () {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; // Vider le conteneur des GIFs
});

// Gérer l'événement de soumission du formulaire
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche la soumission classique du formulaire

  // Récupérer la catégorie entrée dans le champ input
  const category = document.getElementById("gif").value.trim();

  // Si la catégorie est vide, ne rien faire
  if (category) {
    fetchMultipleGifs(category);
  } else {
    alert("Veuillez entrer une catégorie");
  }
});
