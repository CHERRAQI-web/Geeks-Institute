(function(Nb_Enfant,Nom_partenaire,situation_géographique,intitulé_du_poste){
    document.getElementById("message").textContent=`You will be a ${intitulé_du_poste} in ${situation_géographique}, and married to ${Nom_partenaire} with ${Nb_Enfant} kids.`
})(3, "Lina", "Paris", "Web Developer");