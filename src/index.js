import { setupSearch } from "./js/setupSearch";
import { renderAside } from "./js/asideRenderer";
import { renderTodayForecast, renderWeekForecast } from "./js/forecastRenderer";
import { highlightActiveButton } from "./js/utils";
import "./style.css";

setupSearch((data, error) => {
  if (data) {
    renderAside(data);
    renderTodayForecast(data);

    const todayButton = document.querySelector(".today-btn");
    const weekButton = document.querySelector(".week-btn");

    todayButton.addEventListener("click", () => {
      renderTodayForecast(data);
      highlightActiveButton(todayButton, weekButton);
    });

    weekButton.addEventListener("click", () => {
      renderWeekForecast(data);
      highlightActiveButton(weekButton, todayButton);
    });
  } else if (error) {
    document.querySelector(".city-name").textContent = error;
  }
});
