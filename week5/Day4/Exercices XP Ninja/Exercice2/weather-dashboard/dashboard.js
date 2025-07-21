import readline from 'readline';
import getWeather from './weather.js';  
function dasboard() {
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Écris le nom de la ville : ", async (city) => {
  await getWeather(city);  // Appel à la fonction météo avec la ville saisie
  rl.close();
});
}export default dasboard;