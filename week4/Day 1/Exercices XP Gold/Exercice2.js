const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3));
//addTo(10) retourne une fonction qui ajoute 10 à son argument.
// addToTen est donc une fonction équivalente à y => 10 + y