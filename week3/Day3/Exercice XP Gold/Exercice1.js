function isBlank(value){
    return value===null ||value===undefined || value.trim()==="";
}
console.log(isBlank(''));
console.log(isBlank('abc')); 