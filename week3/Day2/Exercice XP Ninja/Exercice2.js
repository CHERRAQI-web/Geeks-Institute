let somme=0,avg=0
function findAvg(gradesList){
    for(let i=0;i<gradesList.length;i++){
        somme+=gradesList[i]
    }
    avg=somme/gradesList.length
    return avg
}
function affichage(){
  let gradesList=[6,8,8]
let moyenne=findAvg(gradesList)
console.log("La moyenne est : ",moyenne)
if(moyenne>65){
    console.log("Vous avez réussi")
}else{
    console.log("Échec : votre moyenne est inférieure à 65. Vous devez recommencer le cours.")
}
  
}
affichage();

