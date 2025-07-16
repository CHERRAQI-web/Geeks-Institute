const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';  // Ta clé API Giphy

async function fetchMultipleGifs(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;  // On limite à 5 GIFs

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        console.log("Données récupérées depuis l'API Giphy :", data);

        // Vérifier si des GIFs ont été retournés
        if (data.data && data.data.length > 0) {
            // Récupérer l'élément pour afficher les GIFs
            const gifContainer = document.getElementById('gifContainer');
            gifContainer.innerHTML = '';  // Vider le conteneur avant d'ajouter de nouveaux GIFs
            const suppTout=document.createElement('button');
                suppTout.textContent='supprimer Tout'
                gifContainer.appendChild(suppTout)
                 suppTout.addEventListener('click', function(){
                    gifContainer.innerHTML = '';
                })
            // Créer un élément img pour chaque GIF et l'ajouter au conteneur
            data.data.forEach(gif => {
                const gifImage = document.createElement('img');
                gifImage.src = gif.images.original.url;
                gifImage.alt = 'GIF aléatoire';
                gifContainer.appendChild(gifImage);  // Ajouter l'image au conteneur
                const supp=document.createElement('button');
                supp.textContent='supprimer'
                gifContainer.appendChild(supp)
                supp.addEventListener('click', function(){
                    gifImage.remove()
                    supp.remove()
                })
            });
        } else {
            console.error("Aucun GIF trouvé pour la catégorie spécifiée");
        }
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
}

// Gérer l'événement de soumission du formulaire
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Empêche la soumission classique du formulaire

    // Récupérer la catégorie entrée dans le champ input
    const category = document.getElementById('gif').value.trim();

    // Si la catégorie est vide, ne rien faire
    if (category) {
        fetchMultipleGifs(category);
    } else {
        alert("Veuillez entrer une catégorie");
    }
});
