const iconToSvgMap = {
  '01d': 'clear-day.svg',
  '01n': 'clear-night.svg',
  '02d': 'partly-cloudy-day.svg',
  '02n': 'partly-cloudy-night.svg',
  '03d': 'cloudy.svg',
  '03n': 'cloudy.svg',
  '04d': 'cloudy.svg',
  '04n': 'cloudy.svg',
  '09d': 'drizzle.svg',
  '09n': 'drizzle.svg',
  '10d': 'rain.svg',
  '10n': 'rain.svg',
  '11d': 'thunderstorm.svg',
  '11n': 'thunderstorm.svg',
  '13d': 'snow.svg',
  '13n': 'snow.svg',
  '50d': 'fog.svg',
  '50n': 'fog.svg',
};

function getPathForWeatherIcon(iconId) {
  return `/weather-icons/${iconToSvgMap[iconId]}`;
}

export { getPathForWeatherIcon };
