const personne1={
    FullName:"CHERRAQI Aziza",
    Mass:52,
    Height:1.55
}
const personne2={
    FullName:"BOUBGHY Meryem",
    Mass:65,
    Height:1.72
}
/*2 */
function calculerIMC(personne){
    return personne.Mass/(personne.Height**2);
 }
// console.log(calculerIMC(personne1).toFixed(2))
// console.log(calculerIMC(personne2).toFixed(2))
/*3 */
function comparerIMC(personne1,personne2){
    if(calculerIMC(personne1)>calculerIMC(personne2)){
        console.log(calculerIMC(personne1).toFixed(2))
    } else{
        console.log(calculerIMC(personne2).toFixed(2))
    }
}
comparerIMC(personne1,personne2)