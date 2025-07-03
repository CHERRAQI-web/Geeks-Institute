const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const premieresLettres = names.map((name) => name[0]);

lettre = premieresLettres.sort();
nomEntreprise = lettre.join("");

console.log("Le nom de l'entreprise est : ", nomEntreprise);
