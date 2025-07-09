const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(JSON.stringify(array));
const result = array.map(item => 
  item.length === 1 && !Array.isArray(item[0]) ? item[0] : item.flat()
);
console.log(result);

 const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flat());

console.log(greeting.flat().join(' '))
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const flatTrapped = trapped.flat(Infinity);
console.log(flatTrapped);
