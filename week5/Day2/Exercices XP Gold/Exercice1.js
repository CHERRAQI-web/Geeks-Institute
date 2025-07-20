const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fonction pour récupérer un GIF aléatoire
async function fetchRandomGif() {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log("Données récupérées depuis l'API Giphy:", data);

    if (data.data) {
      const gifContainer = document.getElementById("gifContainer");
      gifContainer.innerHTML = ""; // Vider le conteneur avant d'ajouter le GIF

      // Créer l'élément img pour afficher le GIF
      const gifImage = document.createElement("img");
      gifImage.src = data.data.images.original.url;
      gifImage.alt = "GIF aléatoire";
      gifImage.style.width = "300px"; // Limiter la taille du GIF

      // Ajouter l'image au conteneur
      gifContainer.appendChild(gifImage);
    } else {
      console.error("Aucun GIF trouvé.");
    }
  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}

// Appeler la fonction pour afficher un GIF aléatoire dès que la page se charge
window.onload = fetchRandomGif;
