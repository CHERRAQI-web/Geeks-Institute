

export function tempsRestantNouvelAn() {
  const maintenant = new Date();
  const nouvelAn = new Date(maintenant.getFullYear() + 1, 0, 1);

  const diff = nouvelAn - maintenant; // différence en millisecondes

  const totalSeconds = Math.floor(diff / 1000);
  const jours = Math.floor(totalSeconds / (60 * 60 * 24));
  const heures = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secondes = totalSeconds % 60;

  return `Le 1er janvier est dans ${jours} jours et ${heures}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')} heures`;
}
