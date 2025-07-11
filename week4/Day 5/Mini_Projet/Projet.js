  const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];




const container = document.getElementById("container");
const searchInput = document.getElementById("recherche");

// Fonction pour afficher une liste de robots dans le container
function displayCards(list) {
  container.innerHTML = ""; // vide avant d’afficher

  list.forEach(robot => {
    const don = document.createElement("div");
    don.style.backgroundColor = "skyblue";
    don.style.backgroundImage = `url(card-pattern.png)`;
    don.style.borderRadius = "10px";
    don.style.padding = "45px";
    don.style.textAlign = "center";
    don.innerHTML = `
      <div style="background-color: rgb(0, 5, 53); width: 300px; height: 300px; margin: 0 auto; border-radius: 50%; overflow: hidden;">
        <img src="${robot.image}" alt="Image de ${robot.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />
      </div>
      <p style="font-family: 'Vactory Sans', sans-serif; font-weight: bold; font-size: 25px;">${robot.name}</p>
      <p>${robot.email}</p>
    `;
    container.appendChild(don);
  });
}

// Ecouteur sur l'input, filtrage à chaque lettre
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchTerm)
  );
  displayCards(filtered);
});

// Affichage initial de toutes les cartes
displayCards(robots);