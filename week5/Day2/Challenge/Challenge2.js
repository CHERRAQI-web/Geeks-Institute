document.getElementById("locationForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Empêcher la soumission classique du formulaire

    // Récupérer les informations de la première ville
    const city1 = document.getElementById("city1").value;
    const latitude1 = parseFloat(document.getElementById("latitude1").value);
    const longitude1 = parseFloat(document.getElementById("longitude1").value);

    // Récupérer les informations de la deuxième ville
    const city2 = document.getElementById("city2").value;
    const latitude2 = parseFloat(document.getElementById("latitude2").value);
    const longitude2 = parseFloat(document.getElementById("longitude2").value);

    if (!city1 || !city2 || isNaN(latitude1) || isNaN(longitude1) || isNaN(latitude2) || isNaN(longitude2)) {
        alert("Veuillez entrer des informations valides pour les deux villes !");
        return;
    }

    try {
        // Préparer les URLs de l'API pour les deux villes
        const url1 = `https://api.sunrise-sunset.org/json?lat=${latitude1}&lng=${longitude1}&formatted=0`;
        const url2 = `https://api.sunrise-sunset.org/json?lat=${latitude2}&lng=${longitude2}&formatted=0`;

        // Utiliser Promise.all pour récupérer les deux réponses en parallèle
        const [response1, response2] = await Promise.all([
            fetch(url1),
            fetch(url2)
        ]);

        // Vérifier si les réponses sont valides
        if (!response1.ok || !response2.ok) {
            throw new Error("Erreur lors de la récupération des données des villes");
        }

        // Parser les réponses JSON
        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log("Données pour la première ville:", data1); 
        console.log("Données pour la deuxième ville:", data2);  

        // Vérifier et afficher l'heure du lever du soleil en UTC pour la première ville
        if (data1.results) {
            const sunriseUtc1 = data1.results.sunrise; 
            const sunriseDate1 = new Date(sunriseUtc1);
            const utcSunriseTime1 = sunriseDate1.toUTCString();  
            document.getElementById("sunrise-time1").innerText = `Lever du soleil (UTC) à ${city1}: ${utcSunriseTime1}`;
        } else {
            document.getElementById("sunrise-time1").innerText = "Données non disponibles pour la première ville.";
        }

        // Vérifier et afficher l'heure du lever du soleil en UTC pour la deuxième ville
        if (data2.results) {
            const sunriseUtc2 = data2.results.sunrise;  
            const sunriseDate2 = new Date(sunriseUtc2);
            const utcSunriseTime2 = sunriseDate2.toUTCString();
            document.getElementById("sunrise-time2").innerText = `Lever du soleil (UTC) à ${city2}: ${utcSunriseTime2}`;
        } else {
            document.getElementById("sunrise-time2").innerText = "Données non disponibles pour la deuxième ville.";
        }

    } catch (error) {
        console.error(error);
        document.getElementById("sunrise-time1").innerText = "Erreur lors de la récupération de l'heure pour la première ville.";
        document.getElementById("sunrise-time2").innerText = "Erreur lors de la récupération de l'heure pour la deuxième ville.";
    }
});
