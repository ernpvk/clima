import { getSmallIcon } from "./iconUtils";
import { getCurrentTime, getDayName } from "./utils";

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

export function renderWeekForecast(data) {
  const forecastList = document.getElementById("forecast-list");
  forecastList.innerHTML = "";

  data.days.slice(0, 7).forEach((day, index) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    if (index == 0) {
      forecastCard.classList.add("current-forecast-card");
    }

    const dayName = document.createElement("div");
    dayName.classList.add("forecast-day");
    dayName.textContent = getDayName(day.datetime);

    const smallForecastIcon = document.createElement("img");
    smallForecastIcon.classList.add("small-forecast-icon");
    smallForecastIcon.src = getSmallIcon(day.icon);

    const forecastTemp = document.createElement("div");
    forecastTemp.classList.add("forecast-temp");
    forecastTemp.textContent = `${day.temp}°C`;

    forecastCard.appendChild(dayName);
    forecastCard.appendChild(smallForecastIcon);
    forecastCard.appendChild(forecastTemp);

    forecastList.appendChild(forecastCard);
  });
}

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
