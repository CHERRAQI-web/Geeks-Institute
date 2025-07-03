const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let ligne = "";
for (let [cle, valeur] of Object.entries(details)){
    ligne += `${cle} ${valeur} `;
}
console.log(ligne)