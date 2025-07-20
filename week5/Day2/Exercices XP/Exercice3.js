async function asynchrone() {
   try {
        // Exécuter la requête GET
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        // Vérifier si la réponse est correcte (code HTTP 200)
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        // Attendre la conversion en JSON
        const data = await response.json();

        // Afficher les résultats dans la console
        console.log(data.result); // Affiche les détails du vaisseau

    } catch (error) {
        // Gérer les erreurs dans le bloc catch
        console.error("Une erreur est survenue : ", error);
    }
}

asynchrone()