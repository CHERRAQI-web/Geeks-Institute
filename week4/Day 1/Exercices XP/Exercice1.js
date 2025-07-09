// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//    alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne();
// //
// // #1.2 What will happen if the variable is declared with const instead of let ?
// // il affiche dans le console : Erreur de type non interceptée : affectation à une variable constante.



// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // affiche alert a=0 et deuxieme alert a=5
// // #2.2 What will happen if the variable is declared with const instead of let ?
// // il affiche seulement alert de la fonction funcThree()

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// il affiche :inside the funcFive function 5
//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // affiche : inside the funcSix function test
// // #4.2 What will happen if the variable is declared  with const instead of let ?
// // Elle affiche toujours : inside the funcSix function test
// // Car il ne s'agit pas d'une réaffectation, mais d'une nouvelle déclaration locale dans la fonction.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//affiche alert : in the if block 5 et alert : outside of the if block 2
// #5.2 What will happen if the variable is declared with const instead of let ?
//elle affiche toujours alert : in the if block 5 et alert : outside of the if block 2
//// Car la variable a est redéclarée dans un bloc différent avec une portée locale.
// Il n'y a donc pas de conflit entre les deux constantes.