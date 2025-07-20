let div=document.querySelector("div")
div.setAttribute("id","socialNetworkNavigation")

let ul = document.getElementById("maListe");

let li=document.createElement("li")
li.textContent="Déconnexion"
ul.appendChild(li);
let first=ul.firstElementChild
console.log(first.textContent)

let last=ul.lastElementChild
console.log(last.textContent)

