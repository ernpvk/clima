import { getWeatherIcon } from "./iconUtils";

export function renderAside(data) {
  const cityName = document.querySelector(".city-name");
  const description = document.querySelector("#description");
  const mainTemp = document.querySelector(".main-temp");
  const dateElement = document.querySelector("#date");
  const mainIcon = document.querySelector(".animated-cloud");

  cityName.textContent = data.resolvedAddress;
  description.textContent = data.description;
  const iconPath = getWeatherIcon(data.days[0].icon);
  mainIcon.src = iconPath;
  mainTemp.textContent = `${data.days[0].temp}°C`;

  const rawDate = data.days[0].datetime;
  const formattedDate = new Date(rawDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  dateElement.textContent = formattedDate;
}
