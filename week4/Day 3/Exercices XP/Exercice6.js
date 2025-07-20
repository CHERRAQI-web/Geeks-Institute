//[2] === [2]  : false
//{}==={}   :false
//les objets et tableaux sont comparés par référence, pas par valeur.
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); //4
console.log(object3.number); //4
console.log(object4.number); //5
//object1, object2 et object3 pointent tous vers le même objet en mémoire. Modifier l’un les autres voient aussi la modification.
//object4 est un nouvel objet différent, même s’il a la même structure initiale. Il n’est pas lié aux autres.

class Animal {
  constructor(nom, type, couleur) {
    this.nom = nom;
    this.type = type;
    this.couleur = couleur;
  }
}

class Mammal extends Animal {
  constructor(nom, type, couleur) {
    super(nom,type,couleur);
  } 
  sound(son_émis){
         return `${this.nom} est un ${this.type} de couleur ${this.couleur} et fait "${son_émis}".`;
 
    }
}
const farmerCow = new Mammal("Lily", "cow", "brown and white");

// Appel de la méthode sound avec "Moooo"
console.log(farmerCow.sound("Moooo"));