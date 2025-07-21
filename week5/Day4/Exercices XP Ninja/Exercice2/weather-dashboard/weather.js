import axios from 'axios';
import chalk from 'chalk';
  const apiKey = 'a0cadfb00ef6706ed83a4df86d8c42e3'; // Remplace par ta clé OpenWeatherMap

export default async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(`Météo à ${chalk.green(data.name)} :`);
    console.log(`Température : ${chalk.blue(data.main.temp)}°C`);
    console.log(`Temps : ${chalk.yellow(data.weather[0].description)}`);
  } catch (error) {
    console.error(' Erreur lors de la récupération de la météo :', error.response?.data?.message || error.message);
  }
}