class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); //count=0
counterOne.increment();//count=1
counterOne.increment();//count=2

const counterTwo = counterOne;//count=2
counterTwo.increment();//count=3

console.log(counterOne.count);
//le resultat est 3 cae counterTow=counterOne donc contient meme valeur