console.log([[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
))

// Le reduce va s’exécuter ainsi :

//  1ère itération :
// acc = [1, 2]

// cur = [0, 1]

// acc.concat(cur) → [1, 2, 0, 1]

//  2ème itération :
// acc = [1, 2, 0, 1]

// cur = [2, 3]

// acc.concat(cur) → [1, 2, 0, 1, 2, 3]

