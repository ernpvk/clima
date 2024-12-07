export function getWeatherIcon(iconName) {
  const iconMap = {
    clear: "./assets/icons/full-weather/day-clear.png",
    rain: "./assets/icons/full-weather/rain.png",
    snow: "./assets/icons/full-weather/snow.png",
    cloudy: "./assets/icons/full-weather/cloudy.png",
    fog: "./assets/icons/full-weather/fog.png",
    wind: "./assets/icons/full-weather/wind.png",
    thunder: "./assets/icons/full-weather/thunder.png",
    overcast: "./assets/icons/full-weather/overcast.png",
    // Add more mappings as needed
  };

  return iconMap[iconName] || "./assets/icons/full-weather/default.png";
}
