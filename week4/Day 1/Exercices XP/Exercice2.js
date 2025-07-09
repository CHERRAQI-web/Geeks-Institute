let experiencePoints;
//methode 1
// const winBattle=()=>{ if(true) experiencePoints=10; else experiencePoints=1 ;console.log(experiencePoints)}
//Methode 2
const winBattle = () => {
    let experiencePoints = true ? 10 : 1;
    console.log(experiencePoints);
};
winBattle()