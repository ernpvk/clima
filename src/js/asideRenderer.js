import { getWeatherIcon } from "./iconUtils";
import { getCurrentTime } from "./utils";

export function renderAside(data) {
  const cityName = document.querySelector(".city-name");
  const description = document.querySelector("#description");
  const mainTemp = document.querySelector(".main-temp");
  const dateElement = document.querySelector("#date");
  const mainIcon = document.querySelector(".animated-cloud");
  const feelsLike = document.getElementById("feelslike");
  const weatherContainer = document.querySelector(".aside-display");
  const timezone = data.timezone;
  const time = getCurrentTime(timezone);
  console.log(time);

  const conditionClasses = [
    "day",
    "night",
    "snow-day",
    "snow-night",
    "thunder-day",
    "thunder-night",
    "rain-day",
    "rain-night",
    "fog-day",
    "fog-night",
    "wind-day",
    "wind-night",
    "cloudy-day",
    "cloudy-night",
    "clear-day",
    "clear-night",
  ];
  weatherContainer.classList.remove(...conditionClasses);

  const tzoffset = data.tzoffset || 0;
  const currentEpoch = Math.floor(Date.now() / 1000);
  const adjustedEpoch = currentEpoch + tzoffset * 3600;
  const currentHour = data.days[0].hours.find(
    (hour) => adjustedEpoch >= hour.datetimeEpoch && adjustedEpoch < hour.datetimeEpoch + 3600
  );
  const hourData = currentHour || data.days[0].hours[0];
  const icon = data.days[0].icon;

  const newClasses = getConditionClasses(icon);

  weatherContainer.classList.add("weather-container", ...newClasses);

  cityName.textContent = data.resolvedAddress;
  mainIcon.src = getWeatherIcon(icon);
  mainTemp.textContent = `${hourData.temp}°C`;

  console.log(hourData.icon);

  const rawDate = data.days[0].datetime;
  const formattedDate = new Date(rawDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  dateElement.textContent = formattedDate;

  description.textContent = data.description;
  feelsLike.textContent = `${data.days[0].feelslike} °C`;

  console.log("Applied Classes:", newClasses);
}

function getConditionClasses(icon) {
  const baseClass = icon.includes("day") ? "day" : "night";

  if (icon.includes("snow")) return [baseClass, icon.includes("day") ? "snow-day" : "snow-night"];
  if (icon.includes("thunder"))
    return [baseClass, icon.includes("day") ? "thunder-day" : "thunder-night"];
  if (icon.includes("rain") || icon.includes("showers"))
    return [baseClass, icon.includes("day") ? "rain-day" : "rain-night"];
  if (icon.includes("fog")) return [baseClass, icon.includes("day") ? "fog-day" : "fog-night"];
  if (icon.includes("wind")) return [baseClass, icon.includes("day") ? "wind-day" : "wind-night"];
  if (icon.includes("cloudy") || icon.includes("partly-cloudy"))
    return [baseClass, icon.includes("day") ? "cloudy-day" : "cloudy-night"];
  if (icon.includes("clear"))
    return [baseClass, icon.includes("day") ? "clear-day" : "clear-night"];

  return [baseClass];
}
