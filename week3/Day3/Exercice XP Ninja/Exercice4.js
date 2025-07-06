function biggestNumberInArray(arrayNumber){

    if (!Array.isArray(arrayNumber)) {
    return "Le tableau est invalide.";
    }

    if (arrayNumber.length === 0) {
        console.log(0)
        return 0;
    }

    let nombresValid = arrayNumber.filter(x => typeof x === "number" && !isNaN(x));
    if (nombresValid.length === 0) {
        console.log(0)
        return 0;
    }

    let max = nombresValid[0];
    for (let i = 1; i < nombresValid.length; i++) {
        if (nombresValid[i] > max) {
        max = nombresValid[i];
        }
    }
    console.log(max)
    return max; 
  
}
biggestNumberInArray([])