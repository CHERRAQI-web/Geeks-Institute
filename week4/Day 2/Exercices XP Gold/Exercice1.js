console.log([1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
}))
// //Le tableau [1, 2, 3] est parcouru avec .map()
// Chaque élément (num) est bien un number, donc la condition typeof num === 'number' est toujours vraie

// Donc return num * 2 s’exécute à chaque fois

// Le return; qui suit ne s’exécute jamais (car l’if est toujours vrai ici)