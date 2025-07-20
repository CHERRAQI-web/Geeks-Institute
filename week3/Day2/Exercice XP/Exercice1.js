const people = ["Greg", "Mary", "Devon", "James"];
console.log(people)
people.splice(0,1)
console.log(people)
for (let i = 0; i < people.length; i++) {
  if (people[i] === "James") {
    people[i] = "Jason";
  }
}
console.log(people)

people.push("aziza")
console.log(people)
index=people.indexOf("Mary")
console.log(index)
people2=people.slice(1,3)
console.log(people2)
ind=people.indexOf("Foo")
console.log(ind)
/*l’élément n’existe pas, elle ne peut pas retourner un index valide et -1 
est un nombre négatif qui ne peut jamais être un index valide dans un tableau (les indices commencent à 0). */

const lastIndex=people.length-1
const last=people[lastIndex]
console.log(last)


/*             Partie 2            */
console.log("les donnees de tableau people")
for (i=0;i<people.length;i++)
{
  console.log(people[i])
}
console.log("les donnees de tableau people")
for (i=0;i<people.length;i++)
{
  if(people[i]!="Devon")
    console.log(people[i])
  else
    break
}
