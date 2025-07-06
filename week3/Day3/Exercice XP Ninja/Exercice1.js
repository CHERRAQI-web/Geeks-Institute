function nombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n = nombreAleatoire(1, 100);
console.log("Nombre aléatoire :", n);

console.log("Nombres pairs de 0 à", n, ":");
for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
