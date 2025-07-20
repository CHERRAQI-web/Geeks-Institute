const users = { user1: 18273, user2: 92833, user3: 90315 }
let q1=Object.entries(users)
console.log(q1)
let q2=q1.map(([key,value])=>[key,value*2]);
console.log(q2)
