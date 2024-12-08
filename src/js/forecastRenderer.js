export function renderForecast(data) {
  const forecastList = document.getElementById("forecast-list");
  data.days[0].hours.forEach((hour) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    forecastCard.textContent = hour.datetime;
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
