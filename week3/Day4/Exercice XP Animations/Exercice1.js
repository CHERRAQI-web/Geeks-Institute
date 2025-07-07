setTimeout(() => {
  console.log("Bonjour tout le monde ");
}, 2000);

setTimeout(()=>{
    let div= document.getElementById("container")
    let parag=document.createElement("p")
    parag.textContent="Hello World"
    div.appendChild(parag)
},2000)
// let id=setInterval(()=>{
//     let div= document.getElementById("container")
//     let parag=document.createElement("p")
//     parag.textContent="Hello World"
//     div.appendChild(parag)
// },2000)
// function effacer(){
//     clearInterval(id)

// }

let id=setInterval(()=>{
    let div= document.getElementById("container")
    let parag=document.createElement("p")
    parag.textContent="Hello World"
    div.appendChild(parag)
    if (div.getElementsByTagName("p").length >= 5) {
    clearInterval(id);
    }
},2000)