import data from './data.js';

function calculer(){
    const age=data.map(personne=>personne.age);
    const somme=age.reduce((acc, val) => acc + val, 0)
    const moyenne=somme/age.length
    console.log("l'age moyenne est :",moyenne)
}
calculer()