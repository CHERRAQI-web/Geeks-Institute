//1
poids1(5)
function poids1(Kg) {
    let gramme=Kg*1000
    console.log(`${Kg} kg équivaut à ${gramme} g`) 
}
//2

const poids2=function(Kg){ let gramme=Kg*1000
     console.log(`${Kg} kg équivaut à ${gramme} g`) 
    }
poids2(3)
//3
//Dans une déclaration de fonction, on peut appeler la fonction avant sa déclaration.Mais dans une expression de fonction, on ne peut pas appeler la fonction avant l’avoir initialisée.
//4
const poids3=(Kg)=>{console.log(`${Kg} kg équivaut à ${Kg*1000} g`);}
poids3(6)

