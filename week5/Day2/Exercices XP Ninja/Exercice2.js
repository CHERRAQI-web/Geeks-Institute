let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};
let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};
//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)

// Après 1 seconde :

// La fonction concurrentPromise est appelée.

// Elle affiche "==CONCURRENT START with Promise.all==".

// Ensuite, les deux promesses sont lancées :

// resolveAfter2Seconds() affiche "starting slow promise".

// resolveAfter1Second() affiche "starting fast promise".

// Après 2 secondes (temps = 2s) :

// La promesse lente se résout :

// "slow promise is done" est affiché.

// La valeur résolue de resolveAfter2Seconds() ("slow") est ajoutée au tableau des résultats.

// Après encore 1 seconde (temps = 3s) :

// La promesse rapide se résout :

// "fast promise is done" est affiché.

// La valeur résolue de resolveAfter1Second() ("fast") est ajoutée au tableau des résultats.

// Finalement, les messages sont affichés :

// Le then() de Promise.all() est exécuté et affiche : slow fast
