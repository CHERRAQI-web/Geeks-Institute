let shoppingList=[]
let form=document.createElement("form")
let div=document.getElementById("root")
div.appendChild(form)
let input=document.createElement("input")
form.appendChild(input)
let button=document.createElement("button")
button.textContent="Ajouter un élément"
form.appendChild(button)

let effacer=document.createElement("button")
effacer.textContent="Effacer tout"
form.appendChild(effacer)

button.addEventListener("click", addItem);
effacer.addEventListener("click", clearAll);

function addItem(event) {
  event.preventDefault();

    let valeur=input.value.trim("")
     if (valeur !== "") {
        shoppingList.push(valeur);
        console.log("Liste actuelle :", shoppingList);
        input.value = "";
    } else {
        alert("Le champ est vide !");
    }
}
function clearAll(event){
    event.preventDefault();
    shoppingList.length=0
    console.log("Liste actuelle :", shoppingList);
        
}