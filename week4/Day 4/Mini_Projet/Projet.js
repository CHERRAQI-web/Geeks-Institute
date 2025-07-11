const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote:
      "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
  },
  {
    id: 1,
    author: "Oscar Wilde",
    quote: "Soyez vous-même, tous les autres sont déjà pris.",
  },
  {
    id: 2,
    author: "Confucius",
    quote:
      "Celui qui déplace une montagne commence par déplacer de petites pierres.",
  },
  {
    id: 3,
    author: "Voltaire",
    quote:
      "Le doute est un état mental désagréable, mais la certitude est ridicule.",
  },
  {
    id: 4,
    author: "Victor Hugo",
    quote: "Être bon, c'est facile ; ce qui est difficile, c'est être juste.",
  },
  {
    id: 5,
    author: "Voltaire",
    quote: "Le doute est un état",
  },
];
quotes.forEach((q) => {
  if (q.count === undefined) q.count = 0;
});

function clickQuote() {
  const section = document.getElementById("section");

  // Supprimer tout sauf le bouton
  section.innerHTML = `<button onclick="clickQuote()">Générer un devis</button>`;

  const indexAleatoire = Math.floor(Math.random() * quotes.length);
  const citation = quotes[indexAleatoire];

  if (citation.count === undefined) {
    citation.count = 0;
  }

  const quoteDiv = document.createElement("div");
  quoteDiv.className = "quote";
  quoteDiv.innerHTML = `
    <p id="citation">"${citation.quote}"</p>
    <p style="text-align:right" id="author"><em>— ${citation.author}</em></p>
    <p>J'aime : <span id="count-${indexAleatoire}">${citation.count}</span></p>
    <button onclick="NbJaime(${indexAleatoire})">J'aime</button>
  `;
  section.appendChild(quoteDiv);
}

function ajouterQuote(event) {
  event.preventDefault(); // empêche la soumission du formulaire

  const a = document.getElementById("author").value;
  const q = document.getElementById("quote").value;
  const id = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;

  quotes.push({ id: id, author: a, quote: q });

  document.getElementById("form").reset();
}
function NbCaractère() {
  const citationText = document.getElementById("citation").textContent;
  const nb = citationText.length;
  document.getElementById("val1").textContent = `Nombre de caractères : ${nb}`;
}
function NbCaractèreSans() {
  const citationText = document.getElementById("citation").textContent;
  const Nb = citationText.replace(/\s/g, "").length;
  document.getElementById(
    "val2"
  ).textContent = `Nombre de caractères sans espaces: ${Nb}`;
}
function NbMots() {
  const citationText = document.getElementById("citation").textContent;
  const mots = citationText.trim().split(/\s+/);
  const Nb = mots.length;
  document.getElementById("val3").textContent = `Nombre de Mots : ${Nb}`;
}
function NbJaime(index) {
  quotes[index].count++;
  document.getElementById(`count-${index}`).textContent = quotes[index].count;
}
let filteredQuotes = [];
let currentIndex = 0;

function Search(event) {
  event.preventDefault();
  const authorSearch = document.getElementById("searchInput").value.trim().toLowerCase();
  const section = document.getElementById("form2");

  filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorSearch));
  currentIndex = 0;

  section.innerHTML = `<h2>My Quotes</h2>
    <h3>Motivational, Inspirational and More !</h3>
     
      <input type="text" id="searchInput" placeholder="Nom de l'auteur"style="width: 300px;" />

    <button onclick="Search(event)" style="padding-left:20px">Search</button><br>
    <button type="button" onclick="previousQuote()">Previous</button>
    <button type="button" onclick="nextQuote()">Next</button>`;

  if (filteredQuotes.length === 0) {
    const p = document.createElement("p");
    p.textContent = "Aucune citation trouvée pour cet auteur.";
    section.appendChild(p);
    return;
  }

  displayQuote();
}

function displayQuote() {
  const section = document.getElementById("form2");
  const citation = filteredQuotes[currentIndex];

  const quoteDiv = document.createElement("div");
  quoteDiv.className = "quote";
  quoteDiv.innerHTML = `
    <h2>My Quotes</h2>
    <h3>Motivational, Inspirational and More !</h3>
      <p>"${citation.quote}"</p>
    <p style="text-align:right"><em>${citation.author}</em></p>
      <input type="text" id="searchInput" placeholder="Nom de l'auteur"style="width: 300px;" />

    <button onclick="Search(event)" style="padding-left:20px">Search</button><br>
    <button type="button" onclick="previousQuote()">Previous</button>
    <button type="button" onclick="nextQuote()">Next</button>
  `;

  // Nettoyer et réafficher
  section.innerHTML = ``;
  section.appendChild(quoteDiv);
}

function previousQuote() {
  if (currentIndex > 0) {
    currentIndex--;
    displayQuote();
  }
}

function nextQuote() {
  if (currentIndex < filteredQuotes.length - 1) {
    currentIndex++;
    displayQuote();
  }
}
