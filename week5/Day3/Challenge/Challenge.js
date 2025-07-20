const API_KEY = "5cde6e36e5fd1ad793737b03"; // Ta clé API ExchangeRate
let taux = {}; // variable globale pour stocker les taux

async function Convert() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log("Données récupérées depuis ExchangeRate-API :", data);

    taux = data.conversion_rates;
    const container = document.getElementById("container");

    // Création des deux selects
    const devises = Object.keys(taux);

    let selectHTML = `
      <label for="from" class=" text-white text-2xl text-justify">From</label><br>
      <select id="from"class="text-black border border-white">
        <option disabled selected>-- Choisir une devise --</option>`;
    devises.forEach(devise => {
      selectHTML += `<option value="${devise}">${devise}</option>`;
    });
    selectHTML += `</select><br><br>`;
let btn = `
  <button onclick="iverser()" title="Convertir" class="bg-[url('change.png')] bg-cover bg-center w-16 h-16 shadow-md inline-block"></button><br>`;
      let selectHTML2 = `
      <label for="to"class=" text-white text-2xl ">To</label><br>
      <select id="to">
        <option disabled selected>-- Choisir une devise --</option>`;
    devises.forEach(devise => {
      selectHTML2 += `<option value="${devise}">${devise}</option>`;
    });
    selectHTML2 += `</select><br><br>`;

    const div = document.createElement("div");
    div.innerHTML = selectHTML+btn + selectHTML2;
    container.appendChild(div);

  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

function convertir() {
  const montant = parseFloat(document.getElementById('montant').value);
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  if (isNaN(montant) || !from || !to) {
    alert("Remplis tous les champs !");
    return;
  }

  const tauxFrom = taux[from];
  const tauxTo = taux[to];
  const montantEnUSD = montant / tauxFrom;
  const resultatFinal = montantEnUSD * tauxTo;

  document.getElementById('resultat').textContent =
    `${montant} ${from} = ${resultatFinal.toFixed(2)} ${to}`;
}
function iverser() {
  const montant = parseFloat(document.getElementById('montant').value);
   const selectFrom = document.getElementById('from');
  const selectTo = document.getElementById('to');

  const from = selectFrom.value;
  const to = selectTo.value;

  // Inverser les valeurs dans les <select>
  selectFrom.value = to;
  selectTo.value = from;
if (isNaN(montant) || !from || !to) {
    alert("Remplis tous les champs !");
    return;
  }
const tauxFrom = taux[from];
  const tauxTo = taux[to];
  const montantEnUSD = montant / tauxFrom;
  const resultatFinal = montantEnUSD * tauxTo;

  document.getElementById('resultat').textContent =
    `${montant} ${from} = ${resultatFinal.toFixed(2)} ${to}`;
}
Convert(); // Lance la fonction au chargement
