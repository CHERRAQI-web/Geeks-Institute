function stringNumber(string,number){
    const result = [];
  for(let i = 0; i < string.length; i += number) {
    result.push(string.substr(i, number));
  }
  return result;
}
console.log(stringNumber("cherraqi",2))