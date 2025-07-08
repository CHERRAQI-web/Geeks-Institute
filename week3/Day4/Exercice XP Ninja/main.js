function calculateTip(){
    let billAmount=document.getElementById("billAmt")
    let serviceQuality=document.getElementById("serviceQual")
    let numberOfPeople=document.getElementById("numOfPeople")
    if(serviceQuality==0||billAmount==" "){
        alert("veuillez remplir tout les champ")
        return;
    }
    if(numberOfPeople==""||parseInt(numberOfPeople<1)){
        numberOfPeople.value=1
        each.style.display = "none"; 
    }else{
        each.style.display = "inline";
    }
    let total=( billAmount * serviceQuality ) / numberOfPeople
    total=total.toFixed(2)

    let div=document.getElementById("totalTip")
    div.style.display="block"
    let variable=document.getElementById("tip")
    variable.textContent=total

    //Deuxième partie :
}
document.getElementById("calculate").onclick = calculateTip;
