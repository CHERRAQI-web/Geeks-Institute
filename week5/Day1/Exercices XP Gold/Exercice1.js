const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3]).then((result)=>console.log(result)).catch((error)=>console.log(error));
//Promise.all :: Promise.all est une méthode statique de l'objet Promise qui permet d'exécuter plusieurs promesses en parallèle 
// et de continuer uniquement lorsque toutes sont résolues.