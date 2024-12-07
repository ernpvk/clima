import { getWeatherIcon } from "./iconUtils";

export function renderAside(data) {
  const cityName = document.querySelector(".city-name");
  const description = document.querySelector("#description");
  const mainTemp = document.querySelector(".main-temp");
  const dateElement = document.querySelector("#date");
  const mainIcon = document.querySelector(".animated-cloud");

  cityName.textContent = data.resolvedAddress;
  description.textContent = data.description;

  const tzoffset = data.tzoffset || 0;
  const currentEpoch = Math.floor(Date.now() / 1000);
  const adjustedEpoch = currentEpoch + tzoffset * 3600;

  const currentHour = data.days[0].hours.find(
    (hour) => adjustedEpoch >= hour.datetimeEpoch && adjustedEpoch < hour.datetimeEpoch + 3600
  );

  const hourData = currentHour || data.days[0].hours[0];

  const iconPath = getWeatherIcon(hourData.icon);
  mainIcon.src = iconPath;
  mainTemp.textContent = `${hourData.temp}°C`;

  const rawDate = data.days[0].datetime;
  const formattedDate = new Date(rawDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  dateElement.textContent = formattedDate;

  console.log("Current Hour Icon:", hourData.icon);
  console.log("Current Hour Temp:", hourData.temp);
}
