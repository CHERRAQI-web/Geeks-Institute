const prompt = require('prompt-sync')();

let reps = 0;
let nb,total=0
function hotelCost(nuits) {
    return nuits*40
}
function planeRideCost(destination){
   
    
     destination = destination.toLowerCase();

    if (destination === "londres") {
        prix = 183;
    } else if (destination === "paris") {
        prix = 220;
    } else {
        prix = 300;
    }
        return prix
}
// planeRideCost()

function rentalCarCost(jours){
     let total=0
    if(jours>10){
        total=(jours*40)-((jours*40)*5/100)
    }else{
        total=jours*40
    }
   return total

}
//rentalCarCost()

function totalVacationCost(){
    let  number
    let destination    
    let jours ,reps
    
     while(true){
         number = prompt("Combien de nuits souhaitez-vous passer à l'hôtel ?")
       
        if (number !== null && !isNaN(number) && number.trim() !== "") {
            
            reps = parseInt(number);
            break
        } else {
           console.log("Veuillez entrer un nombre valide.");
        }
    }
    while(true){
         destination = prompt("Quelle est votre destination ?");
        if(isNaN(destination)&&destination !== null&& destination.trim() !== ""){
            destination = destination.trim();
           break
        }else{
            console.log("Veuillez entrer une destination valide.");
        }
    }

     while(true){
        jours = prompt("Combien de jours souhaitez-vous louer la voiture ?");
          if(!isNaN(jours)&&jours !== null&& jours > 0 && jours.trim() !== "") {
            reps = parseInt(jours);
           
            break
        } else {
            console.log("Veuillez entrer un nombre valide.");
        }
    }
    console.log(" le prix de la voiture : ",rentalCarCost(jours)," $, le prix de l'hôtel :",
    hotelCost(number),"$, le prix des billets d'avion : ", planeRideCost(destination),"$. Indice")
}
totalVacationCost()