let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries=()=>{
    groceries.fruits.forEach(fruit => {
        console.log(fruit)
    });
}
displayGroceries()
const  cloneGroceries=()=>{
    let user ;
    user=client
    client="Betty"; 
    console.log(user)
    //Non, la variable user ne change pas.Parce que les types primitifs sont copiés par valeur.
    const shopping=groceries
    groceries.totalPrice="35$"
    console.log(shopping.totalPrice)
    //Oui, la modification est visible dans shopping Parce que les objets sont passés par référence.
    groceries.other.paid=false
    console.log(shopping.other.paid)
    //Oui, la modification est visible dans shopping Parce que les objets sont passés par référence.

}
 cloneGroceries()