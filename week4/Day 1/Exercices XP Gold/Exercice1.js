// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }
// // ajout x fois le caractère _
//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }
// // ajout / puis x fois le caractere ' puis \
//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// console.log(landscape())


// fonction fléché
let landscape = ()=> {
    let result = "";
    let flat = (x) =>{
        for(let count = 0; count<x; count++){
     result = result + "_";
        }
    }// ajout x fois le caractère _
    let mountain = (x)=> {
        result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
        result = result + "\\"
}// ajout / puis x fois le caractere ' puis \
 flat(4);
 mountain(4);
 flat(4)

 return result;
}
console.log(landscape())
