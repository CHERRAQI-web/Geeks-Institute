const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'; 
const searchQuery = 'sun';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=10&offset=2&rating=g&lang=fr
`;
async function Gif() {
    try{
        const response= await fetch(url)
       if (!response.ok) {
      // Si la réponse n'est pas correcte, lancer une erreur
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
        const data = await response.json();
    // Afficher l'objet JavaScript dans la console
    console.log("Données récupérées depuis l'API Giphy :", data);
    
  } catch (error) {
    // En cas d'erreur, l'afficher dans la console
    console.error("Une erreur s'est produite :", error);
  }
}
Gif()