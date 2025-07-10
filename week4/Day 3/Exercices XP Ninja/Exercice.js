class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
//il affiche "I'm pink. 🌸" "I'm a bird. 🦢" car en fait super() apres console dans class Flamingo 