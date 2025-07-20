//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//elle affiche 'bread' puis le contenu de table vegetables puis 'chicken' puis le contenu de table fruits
//------2------
const country = "USA";
console.log([...country]);
// dévise la chaine de caractere USA en un tableau de caractere
//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// affiche tableau qui contient 2 élement undefined