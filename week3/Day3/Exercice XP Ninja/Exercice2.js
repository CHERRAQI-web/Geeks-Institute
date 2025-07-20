function lettre_maj(chainee) {
  let res1 = []; 
  let res2 = [];

  for (let i = 0; i < chainee.length; i++) {
    if (i % 2 === 0) {
      res1.push(chainee[i].toUpperCase());
      res2.push(chainee[i].toLowerCase());
    } else {
      res1.push(chainee[i].toLowerCase());
      res2.push(chainee[i].toUpperCase());
    }
  }

  return [res1.join(""), res2.join("")]; 
}

let c = lettre_maj("chainee");
console.log(c.join(",")); 
