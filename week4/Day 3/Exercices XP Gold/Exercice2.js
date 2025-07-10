function keysAndValues(objetKeyVal){
    const key = Object.keys(objetKeyVal).sort()
    const value=key .map(key => objetKeyVal[key]);
    return  [key,value]
}
console.log(keysAndValues({ a: 1, c: 2, b: 3 }))