const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
console.log(compose(add1, add5)(10))

//compose(add1, add5) retourne une nouvelle fonction qui applique d’abord add5, puis add1.

//compose(add1, add5)(10) fait :
//f(g(a)) → add1(add5(10))
        //→ add1(15)
        //→ 16