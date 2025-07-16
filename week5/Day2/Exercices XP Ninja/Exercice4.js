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

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)


// Après 13 secondes (temps = 13s) :

// La fonction parallelPromise est appelée.

// Le message "==PARALLEL with Promise.then==" est affiché.

// Ensuite, les deux promesses sont lancées en parallèle :

// resolveAfter2Seconds() commence à s'exécuter et affiche "starting slow promise".

// resolveAfter1Second() commence à s'exécuter et affiche "starting fast promise".

// Après 1 seconde (temps = 14s) :

// La promesse rapide (resolveAfter1Second()) se résout :

// "fast promise is done" est affiché.

// Le message "fast" est affiché grâce à .then().

// Après 2 secondes (temps = 15s) :

// La promesse lente (resolveAfter2Seconds()) se résout :

// "slow promise is done" est affiché.

// Le message "slow" est affiché grâce à .then().