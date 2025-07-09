// const mergeWords = (string) => () => string;
function mergeWords(string) {
 return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}
console.log(mergeWords('Hello')())
console.log(mergeWords('There')('is')('no')('spoon.')())