let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
console.log("Mot trouvé à la position : ", wordNot);
let wordBad = sentence.indexOf("bad");
console.log("Mot trouvé à la position : ", wordBad);
if (wordBad > wordNot) {
  let New_sentence = sentence.replace("not that bad", "good");
  console.log(New_sentence);
} else {
  console.log(sentence);
}
