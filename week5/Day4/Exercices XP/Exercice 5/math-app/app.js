import _ from 'lodash';
import { addition, multiplication } from './math.js'; 

console.log("Addition de 5,10 est :",addition(5,10));
console.log("Multiplication de 5,10 est :",multiplication(5,10));

const tableau = [1, 2, 3, 4];
console.log('Somme avec lodash:', _.sum(tableau));