function abbrevName(name) {
    let prts=name.trim().split(' ')
    if(prts.length<2)return name

     let firstName = prts[0];
    let lastInitial = prts[1][0].toUpperCase();

  return `${firstName} ${lastInitial}.`;
}
console.log(abbrevName("Robin Singh"));