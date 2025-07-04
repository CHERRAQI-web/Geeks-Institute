const numbers = [5,0,9,1,7,4,2,6,3,8];
let chaine=numbers.toString()
console.log(chaine)

console.log(numbers.join("+"))
console.log(numbers.join(" "))
console.log(numbers.join(""))
let num

for (let i=0;i<numbers.length;i++){
    for (let j=i;j<numbers.length;j++){
            if(numbers[i]<numbers[j]){
                num=numbers[i]
                numbers[i]=numbers[j]
                numbers[j]=num
                 console.log(num) 
            }
            
        }
      
}
console.log(numbers)