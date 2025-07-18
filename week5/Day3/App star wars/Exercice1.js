function getRandomCharacter() {
  const id = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${id}`;
  const characterDiv = document.getElementById("character");

  // Message de chargement avec spinner FontAwesome
  characterDiv.innerHTML = `
        
        <div class="fa-3x">
          <i class="fa-solid fa-spinner fa-spin-pulse text-white text-[90px]"></i> <p class="text-[20px] mt-4 text-white">Loading ...</p>
        </div>
      `;
  setTimeout(() => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          const character = response.result.properties;

          characterDiv.innerHTML = `
              <h1  class="text-[30px]"><strong>${character.name}</strong></h1>
              <p><strong>Gender :</strong> ${character.gender}</p>
              <p><strong>Height :</strong> ${character.height} cm</p>
              <p><strong>Birth year:</strong> ${character.birth_year}</p>
              
              <p><strong>Home world :</strong> ${character.birth_year}</p>
            `;
        } else {
          characterDiv.innerHTML = `<p class="text-white"> Oh No! That person isnt available.</p>`;
        }
      }
    };
    request.send();
  }, 2000); // délai de 2 secondes
}
