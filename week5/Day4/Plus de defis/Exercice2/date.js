
export default function calculerMinutesDeVie(dateNaissance) {
  const naissance = new Date(dateNaissance);
  const maintenant = new Date();

  const differenceMs = maintenant - naissance;
  const minutes = Math.floor(differenceMs / (1000 * 60));

  return `Vous avez vécu environ ${minutes.toLocaleString()} minutes.`;
}