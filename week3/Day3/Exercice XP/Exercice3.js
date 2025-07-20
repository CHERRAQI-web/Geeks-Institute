let somme=0
function  changeEnough(itemPrice,amountOfChange){
    const money=[0.25,0.10,0.05,0.01]
    for(let i=0;i<amountOfChange.length;i++){
        let s=amountOfChange[i]*money[i]
        somme+=s
    }
     return somme >= itemPrice;
}
console.log(changeEnough(14.11, [2,100,0,0]))