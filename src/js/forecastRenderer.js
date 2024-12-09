import { getSmallIcon } from "./iconUtils";
import { getCurrentTime } from "./utils";

export function renderTodayForecast(data) {
  const forecastList = document.getElementById("forecast-list");

  const timezone = data.timezone;
  const time = getCurrentTime(timezone);

  const currentHour = time.split(":")[0] + ":00:00";

  const startIndex = data.days[0].hours.findIndex((hour) => {
    const hourTime = hour.datetime.split(":")[0] + ":00:00";
    return hourTime === currentHour;
  });

  console.log("Current Hour:", currentHour);

  const filteredHours =
    startIndex !== -1 ? data.days[0].hours.slice(startIndex) : data.days[0].hours;
  forecastList.innerHTML = "";
  filteredHours.forEach((hour, index) => {
    const formattedTime = hour.datetime.split(":")[0] + ":00";
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    const forecastHour = document.createElement("div");
    forecastCard.classList.add("forecast-hour");
    const smallForecastIcon = document.createElement("img");
    smallForecastIcon.classList.add("small-forecast-icon");
    const forecastTemp = document.createElement("div");
    forecastCard.classList.add("forecast-temp");

    if (index == 0) {
      forecastCard.classList.add("current-forecast-card");
    }
    forecastHour.textContent = formattedTime;
    smallForecastIcon.src = getSmallIcon(hour.icon);
    forecastTemp.textContent = hour.temp;

    forecastCard.appendChild(forecastHour);
    forecastCard.appendChild(smallForecastIcon);
    forecastCard.appendChild(forecastTemp);
    forecastList.appendChild(forecastCard);
  });
}

// Slider
const forecastList = document.getElementById("forecast-list");
const leftButton = document.querySelector(".left-btn");
const rightButton = document.querySelector(".right-btn");

const scrollAmount = 200;

leftButton.addEventListener("click", () => {
  forecastList.scrollLeft -= scrollAmount;
});

rightButton.addEventListener("click", () => {
  forecastList.scrollLeft += scrollAmount;
});
