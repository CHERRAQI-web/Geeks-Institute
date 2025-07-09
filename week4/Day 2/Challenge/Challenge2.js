//partie 1
function getCarHonda(carInventory) {
    //Methode 1: 
    for(let i=0;i<carInventory.length;i++){
        if(carInventory[i].car_make==="Honda"){
            console.log(carInventory[i])
            console.log(`This is a ${carInventory[i].car_make} ${carInventory[i].car_model} from ${carInventory[i].car_year}`)
            break
        }
    }
    //Methode 2: 
        const car = carInventory.find(carInventory => carInventory.car_make==="Honda");
        console.log(car)
        console.log(`This is a ${car.car_make} ${car.car_model} from ${car.car_year}`)
}

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
getCarHonda(inventory)
//partie 2
function sortCarInventoryByYear(carInventory){
    let trie=carInventory.sort((a, b) => a.car_year - b.car_year)
    console.log(trie)
}sortCarInventoryByYear(inventory)