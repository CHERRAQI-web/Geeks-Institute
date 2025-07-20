(function(nom_utilisateur){
    const nav=document.getElementById("navBar")
    const donnee=document.createElement("div")
  
    // Créer l'image de profil (photo par défaut ici)
  const img = document.createElement("img");
  img.src = "https://i.pravatar.cc/35"; // image aléatoire avatar 35x35px
  img.alt = `Photo de profil de ${nom_utilisateur}`; 
  
  donnee.textContent=nom_utilisateur 
  donnee.appendChild(img)
   nav.appendChild(donnee)
    
})("cherrraqi")