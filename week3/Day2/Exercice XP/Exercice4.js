const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log("numberOfFloors: ", building["numberOfFloors"]);
console.log(
  "Nombre d'appartements etage 1 :",
  building["numberOfAptByFloor"].firstFloor
);
console.log(
  "Nombre d'appartements étage 3 :",
  building["numberOfAptByFloor"].thirdFloor
);
console.log("le nom est : ", building["nameOfTenants"][1] ,"le nombre de chambre est : ",building["numberOfRoomsAndRent"].dan[0]);
let somme=building["numberOfRoomsAndRent"].sarah[1]+building["numberOfRoomsAndRent"].david[1]
let prix=building["numberOfRoomsAndRent"].dan[1]
if(somme>prix){
   prixLoc= building["numberOfRoomsAndRent"].dan[1]+=1200
}
console.log(prixLoc)