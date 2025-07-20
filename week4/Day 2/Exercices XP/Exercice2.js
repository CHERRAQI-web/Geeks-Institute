const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

const result = colors.map((color, i) => {
  const number = i + 1;
  const suffix =
    (number % 100 >= 11 && number % 100 <= 13) ? ordinal[0] :
    (number % 10 === 1) ? ordinal[1] :
    (number % 10 === 2) ? ordinal[2] :
    (number % 10 === 3) ? ordinal[3] :
    ordinal[0];

  return `${number}${suffix} choice is ${color}`;
});

console.log(result.join("\n"));