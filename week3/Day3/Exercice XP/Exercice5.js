let div=document.getElementById("container")
console.log(div)

let ul1 = document.getElementsByClassName("list")[0];
ul1.children[1].textContent = "Richard";

let ul2 = document.getElementsByClassName("list")[1];
ul2.removeChild(ul2.children[1])

let ul=document.getElementsByClassName("list")
for (let i = 0; i < ul.length; i++) {
    ul[i].children[0].textContent = "Aziza";
  }

let list=document.getElementsByTagName("ul")
for(let i=0;i<list.length;i++){
    list[i].classList.add("student_list")
    if(i==0){
         list[0].classList.add("university","attendance")
    }
}
let d=document.getElementById("container")
d.style.backgroundColor = "blue";
d.style.padding = "16px";

let list2=document.getElementsByClassName("list")[1]
for (let i = 0; i < list2.children.length; i++) {
  list2.children[1].style.display = "none";
}

for (let i = 0; i < ul1.children.length; i++) {
  ul1.children[1].style.border="1px solid"
}
let body=document.getElementsByTagName("body")[0]

body.style.fontFamily="Courier New"

if(d.style.backgroundColor === "blue"){
alert(`Bonjour ${ul1.children[1].textContent} et ${ul1.children[0].textContent}`);
}