const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]
const contientDessert=menu.some(item=>item.type==="dessert")?"Le menu contient un dessert":"Pas de dessert dans le menu";
console.log(contientDessert);
const tout=menu.every(item=>item.type==="starter")?"tout les éléments du tableau sont des démarreurs":"Tous les éléments du tableau ne sont pas des démarreurs.";
console.log(tout)
let platPrincipal
const mainExist=menu.some(item=>item.type==="main")
mainExist?"le menu contient déja le plat principal"
       : (
      platPrincipal = {
        type: "main",
        name: "Vegetable Curry"
      },
      menu.push(platPrincipal),
      console.log("Aucun plat principal trouvé. 'Vegetable Curry' ajouté")
    );

console.log(menu)

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]


// Test booléen : 
const menuWithVegetarianFlag = menu.map(dish => {
  const words = dish.name.toLowerCase().split(" ");
  const isVegetarian = words.some(word => vegetarian.includes(word));
  return { ...dish, végétarien: isVegetarian };
});
console.log(menuWithVegetarianFlag);
