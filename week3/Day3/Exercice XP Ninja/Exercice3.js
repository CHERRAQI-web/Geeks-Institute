function palindrome(mot) {
  let len = mot.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (mot[i] !== mot[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("madame")); 
console.log(palindrome("bob")); 
console.log(palindrome("kayak")); 
