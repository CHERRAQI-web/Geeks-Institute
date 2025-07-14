Promise.resolve(3).then(result=>{
    console.log(result);})
Promise.reject("Bouh").catch(error=>{console.error("Erreur :", error)});
