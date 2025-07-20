const product=require('./products.js');

function recherche(nom){
    return product.filter(p => p.name.toLowerCase().includes(nom.toLowerCase()));
}

console.log(recherche("Ordinateur Portable")); 
console.log(recherche("Casque Bluetooth")); 
console.log(recherche("Telephone")); 