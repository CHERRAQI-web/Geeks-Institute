function compareToTen(num) {
  return new Promise(function(resolve, reject) {
    if (num <= 10) {
      resolve(`${num} est inférieur ou égal à 10`);
    } else {
      reject(`${num} est supérieur à 10`);
    }
  })
  .then(result => {
    console.log("Succès :", result);
  })
  .catch(error => {
    console.error("Erreur :", error);
  });
}

compareToTen(8);   
compareToTen(15); 
