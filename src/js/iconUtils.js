import dSnow from "../assets/icons/full-weather/day-snow.png";
import nSnow from "../assets/icons/full-weather/night-snow.png";
import thunder from "../assets/icons/full-weather/thunder.png";
import dthunder from "../assets/icons/full-weather/day-thunder.png";
import nthunder from "../assets/icons/full-weather/night-thunder.png";
import rain from "../assets/icons/full-weather/rain.png";
import dRain from "../assets/icons/full-weather/day-rain.png";
import nRain from "../assets/icons/full-weather/night-rain.png";
import cloudy from "../assets/icons/full-weather/cloudy.png";
import dCloudy from "../assets/icons/full-weather/day-cloud.png";
import nCloudy from "../assets/icons/full-weather/night-cloud.png";
import dClear from "../assets/icons/full-weather/day-sun.png";
import nClear from "../assets/icons/full-weather/night-moon.png";

export function getWeatherIcon(iconName) {
  const iconMap = {
    snow: dSnow,
    "snow-showers-day": dSnow,
    "snow-showers-night": nSnow,
    "thunder-rain": thunder,
    "thunder-showers-day": dthunder,
    "thunder-showers-night": nthunder,
    rain: rain,
    "showers-day": dRain,
    "showers-night": nRain,
    cloudy: cloudy,
    "partly-cloudy-day": dCloudy,
    "partly-cloudy-night": nCloudy,
    "clear-day": dClear,
    "clear-day": nClear,
  };

  return iconMap[iconName] || "./assets/icons/full-weather/default.png";
}
