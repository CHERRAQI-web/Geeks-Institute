
function displayNumbersDivisible(div){
    let sum=0
    console.log("Outcome : ")
    for (let i=0;i<500;i++){
        if(i%div==0){
            console.log(i)
            sum+=i
        }
    }
    console.log("Sum : ",sum)
}displayNumbersDivisible(9)