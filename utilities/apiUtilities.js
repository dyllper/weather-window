import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/onecall';

async function fetchWeatherByCoords(coords) {
  const params = {
    appid: process.env.NEXT_PUBLIC_API_KEY,
    lat: coords.lat,
    lon: coords.lon,
    exclude: 'minutely,hourly',
    units: 'imperial',
  };
  try {
    const response = await axios.get(url, { params });
    console.log(`response from API is: ${JSON.stringify(response.data)}`);
    return { data: response.data };
  } catch (error) {
    return { error: error };
  }
}

export { fetchWeatherByCoords };
