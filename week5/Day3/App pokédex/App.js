function getRandomPokédex() {
  const id = Math.floor(Math.random() * 1010) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const characterDiv = document.getElementById("pokedex");

  characterDiv.innerHTML = `
    <div class="relative w-fit mx-auto">
      <img src="pokedex.png" alt="pokedex" class="w-full h-auto "/>
      <div class="absolute bottom-20 left-10 right-20 flex justify-between">
        <div class="flex space-x-3">
          <button onclick="affichage('${url}'),getRandomPokédex()" class="bg-gray-600 text-white px-4 py-2 hover:bg-gray-600 shadow"></button>
          <button onclick="affichage('${url}'),getRandomPokédex()" class="bg-gray-600 text-white px-4 py-2 hover:bg-gray-600 shadow"></button>
        </div>
        <div>
          <button onclick="affichage('${url}'),getRandomPokédex()" class="bg-gray-600 text-white px-4 py-2 hover:bg-gray-700 shadow"></button>
        </div>
      </div>
      <div id="info" class="absolute top-4 left-4 text-black text-lg"></div>
    </div>
  `;
}

function affichage(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const image = data.sprites.front_default;
      const name = data.name;
      const height = data.height;
      const weight = data.weight;
      const type = data.types.map((t) => t.type.name).join(", ");
      const id = data.id;

      const infoDiv = document.getElementById("info");
      infoDiv.innerHTML = `
  <!-- image complète du pokédex en arrière-plan déjà affichée ailleurs -->

  <!-- IMAGE DU POKÉMON DANS L'ÉCRAN BLEU -->
  <div class="absolute top-[105px] left-[360px] w-[160px] h-[160px] flex items-center justify-center">
    <img src="${image}" alt="${name}" class="object-contain w-full h-full" />
  </div>

  <!-- INFOS DANS LA ZONE BEIGE EN BAS -->
  <div class="absolute top-[420px] left-[360px] text-sm leading-6 w-[250px]">
    <h1 class="text-xl font-bold capitalize"> ${name}</h1>
    <p>Pokemone N°${id}</p>
    <p>Height: ${height}</p>
    <p>Weight: ${weight}</p>
    <p>Type: ${type}</p>
  </div>
`;
    })
    .catch(() => {
      const infoDiv = document.getElementById("info");
      infoDiv.innerHTML = `<p class="text-red-400">Erreur lors du chargement du Pokémon.</p>`;
    });
}

getRandomPokédex();
