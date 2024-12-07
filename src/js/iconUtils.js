import daySnowIcon from "../assets/icons/full-weather/day-snow.png";
import dayRainIcon from "../assets/icons/full-weather/day-rain.png";

export function getWeatherIcon(iconName) {
  const iconMap = {
    snow: daySnowIcon,
    rain: dayRainIcon,
    // snow: "./assets/icons/full-weather/snow.png",
    // cloudy: "./assets/icons/full-weather/cloudy.png",
    // fog: "./assets/icons/full-weather/fog.png",
    // wind: "./assets/icons/full-weather/wind.png",
    // thunder: "./assets/icons/full-weather/thunder.png",
    // overcast: "./assets/icons/full-weather/overcast.png",
  };

  return iconMap[iconName] || "./assets/icons/full-weather/default.png";
}
