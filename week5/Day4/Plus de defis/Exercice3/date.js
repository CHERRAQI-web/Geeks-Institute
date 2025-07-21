export  function prochainJourFerie() {
  const maintenant = new Date();
  const anneeActuelle = maintenant.getFullYear();

  // Jour férié codé en dur : 18 novembre à minuit
  let prochainFerie = new Date(`${anneeActuelle}-11-18T00:00:00`);

  // Si le jour férié est déjà passé cette année, prendre l'année prochaine
  if (prochainFerie < maintenant) {
    prochainFerie = new Date(`${anneeActuelle + 1}-11-18T00:00:00`);
  }

  const diffMs = prochainFerie - maintenant;

  // Conversion en jours, heures, minutes, secondes
  const totalSeconds = Math.floor(diffMs / 1000);
  const jours = Math.floor(totalSeconds / (60 * 60 * 24));
  const heures = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secondes = totalSeconds % 60;

  const dateActuelleStr = maintenant.toLocaleString();

  return `Aujourd'hui, nous sommes le ${dateActuelleStr}.
Le prochain jour férié est la Fête nationale (18 novembre) dans ${jours} jours, ${heures}h ${minutes}m ${secondes}s.`;
}
