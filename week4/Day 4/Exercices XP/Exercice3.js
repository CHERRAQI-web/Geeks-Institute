const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

const jsonMarioGame=JSON.stringify(marioGame)
console.log(jsonMarioGame)//Tous les objets imbriqués deviennent eux aussi des objets JSON dans la chaîne.
const jsonMarioGames = JSON.stringify(marioGame, null, 1);
console.log(jsonMarioGames);
debugger;
console.log(marioGame);
