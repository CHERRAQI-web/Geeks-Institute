const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const newEpic=epic.reduce((acc,ep)=>acc+' '+ep)
console.log(newEpic)