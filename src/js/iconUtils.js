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

import sSnow from "../assets/icons/small-icon/snow.png";
import sdSnow from "../assets/icons/small-icon/snow-showers-day.png";
import snSnow from "../assets/icons/small-icon/snow-showers-night.png";
import sthunder from "../assets/icons/small-icon/thunder-rain.png";
import sdthunder from "../assets/icons/small-icon/thunder-showers-day.png";
import snthunder from "../assets/icons/small-icon/thunder-showers-night.png";
import srain from "../assets/icons/small-icon/rain.png";
import sdrain from "../assets/icons/small-icon/showers-day.png";
import snrain from "../assets/icons/small-icon/showers-night.png";
import scloudy from "../assets/icons/small-icon/cloudy.png";
import sdcloudy from "../assets/icons/small-icon/partly-cloudy-day.png";
import sncloudy from "../assets/icons/small-icon/partly-cloudy-night.png";
import sdclear from "../assets/icons/small-icon/clear-day.png";
import snclear from "../assets/icons/small-icon/clear-night.png";

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
    "clear-night": nClear,
  };

  return iconMap[iconName] || "./assets/icons/full-weather/default.png";
}

export function getSmallIcon(iconName) {
  const smallIconMap = {
    snow: sSnow,
    "snow-showers-day": sdSnow,
    "snow-showers-night": snSnow,
    "thunder-rain": sthunder,
    "thunder-showers-day": sdthunder,
    "thunder-showers-night": snthunder,
    rain: srain,
    "showers-day": sdrain,
    "showers-night": snrain,
    cloudy: scloudy,
    "partly-cloudy-day": sdcloudy,
    "partly-cloudy-night": sncloudy,
    "clear-day": sdclear,
    "clear-night": snclear,
  };
  return smallIconMap[iconName] || "./assets/icons/full-weather/default.png";
}
