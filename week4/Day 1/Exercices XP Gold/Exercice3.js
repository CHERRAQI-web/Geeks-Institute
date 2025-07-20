const curriedSum = (a) => (b) => a + b

console.log(curriedSum(30)(1))
//curriedSum(30) retourne une nouvelle fonction  (b)=>30+b
//Ensuite, tu appelles cette nouvelle fonction avec (1) : 30+1