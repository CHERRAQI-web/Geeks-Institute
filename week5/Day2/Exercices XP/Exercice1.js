const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const url = ` https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${API_KEY}&hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

// Fonction pour récupérer les données avec fetch()
async function fetchGifs() {
  try {
    // Envoi de la requête GET à l'API Giphy
    const response = await fetch(url);

    // Vérification de l'état de la réponse
    if (!response.ok) {
      // Si la réponse n'est pas correcte, lancer une erreur
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    // Récupérer la réponse au format JSON
    const data = await response.json();

    // Afficher l'objet JavaScript dans la console
    console.log("Données récupérées depuis l'API Giphy :", data);
  } catch (error) {
    // En cas d'erreur, l'afficher dans la console
    console.error("Une erreur s'est produite :", error);
  }
}

// Appel de la fonction pour récupérer et afficher les GIFs
fetchGifs();
