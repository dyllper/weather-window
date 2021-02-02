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

const iconToBgMap = {
  '01d': 'clear-day',
  '01n': 'clear-night',
  '02d': 'partlyCloudy',
  '02n': 'partlyCloudy',
  '03d': 'scatteredClouds',
  '03n': 'scatteredClouds',
  '04d': 'overcastClouds',
  '04n': 'overcastClouds',
  '09d': 'drizzle',
  '09n': 'drizzle',
  '10d': 'rain',
  '10n': 'rain',
  '11d': 'thunderstorm',
  '11n': 'thunderstorm',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'fog',
  '50n': 'fog',
};

function getPathForWeatherIcon(iconId) {
  return `/weather-icons/${iconToSvgMap[iconId]}`;
}

function getPathForBgFromWeatherIcon(iconId) {
  return iconToBgMap[iconId];
}

export { getPathForBgFromWeatherIcon, getPathForWeatherIcon };
