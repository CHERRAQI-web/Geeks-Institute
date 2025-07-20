const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
console.log(add5(12))
//curriedSum(5) retourne une fonction qui ajoute 5 à son argument.
// add5 est donc une fonction équivalente à b => 5 + b 