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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
}

setTimeout(parallel, 5000)


// Après 5 secondes (temps = 5s) :

// La fonction parallel est appelée.

// Le message "==PARALLEL with await Promise.all==" est affiché.

// Ensuite, les deux promesses sont lancées en parallèle :

// resolveAfter2Seconds() commence à s'exécuter et affiche "starting slow promise".

// resolveAfter1Second() commence à s'exécuter et affiche "starting fast promise".

// Après 1 seconde (temps = 6s) :

// La promesse rapide se résout :

// "fast promise is done" est affiché.

// La valeur "fast" est affichée grâce à console.log(await resolveAfter1Second()).

// Après 2 secondes (temps = 7s) :

// La promesse lente se résout :

// "slow promise is done" est affiché.

// La valeur "slow" est affichée grâce à console.log(await resolveAfter2Seconds()).