const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for(let i=1;i<colors.length+1;i++){
    console.log(`<<le choix ${i} est ${colors[i]} >>`)
}
let c=0
for(let i=1;i<colors.length+1;i++){
    if(colors[i]=="Violet"){
        c=c+1
    }
}
if(c>0){
    console.log("Yeah")
}else{
    console.log("No...")
}