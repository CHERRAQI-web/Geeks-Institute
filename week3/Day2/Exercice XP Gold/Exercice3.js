let age = [20,5,12,43,98,55];
let N=0;
for (let i=0;i<age.length;i++){
    N+=age[i]
}
console.log("la somme de tous les nombres est : ",N)
let Nage=0
for (let i=0;i<age.length;i++){
    if(age[i]<age[i+1]){
         Nage=age[i+1]
    }
}
console.log("l'âge le plus élevé est : ",Nage)