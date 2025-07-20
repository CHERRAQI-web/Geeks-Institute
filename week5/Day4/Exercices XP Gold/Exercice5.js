const chaine='add3j6';
const regex=/^\d$/;
let Nb="";
for (let i=0;i<chaine.length;i++){
    if(regex.test(chaine[i])){
        Nb+=chaine[i];
    }   
}
console.log(Nb); 