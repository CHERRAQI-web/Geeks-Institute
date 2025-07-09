const letters = ['x', 'y', 'z', 'z'];
const count = {};

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (count[letter]) {
    count[letter]++;
  } else {
    count[letter] = 1;
  }
}

console.log(count);



const cnt = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(cnt);