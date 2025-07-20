const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));

turtle = turtle.trim().padEnd(9, '=');

console.log(turtle); // 🐢=======

//Cette opération donne une trace visuelle de la course, comme si la tortue laissait des marques derrière elle sur le chemin.