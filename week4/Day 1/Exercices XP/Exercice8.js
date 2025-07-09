function makeJuice(size_drink){
    let ingredients=[]
    const addIngredient=(first_ingredient,second_ingredient,third_ingredient)=>{
        
    ingredients.push(size_drink,first_ingredient,second_ingredient,third_ingredient)
    }
   
const displayJuice=()=>{
    document.getElementById("auto").textContent=`The client wants a ${size_drink} juice, containing ${ingredients.join(", ")}`
    } 
    addIngredient("orange","mango","pineapple")
    addIngredient("apple", "carrot", "ginger")
    displayJuice()
}
makeJuice("small")