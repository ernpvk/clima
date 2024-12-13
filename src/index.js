import { setupSearch } from "./js/setupSearch";
import { getAside } from "./js/asideData";
import { highlightActiveButton } from "./js/utils";
import "./style.css";
import { getTodayForecast, getWeekForecast } from "./js/foreCastData";
import { getHighlight } from "./js/highlightData";


setupSearch((data, error) => {
  if (data) {
    getAside(data);
    getTodayForecast(data);
    getHighlight(data);

    const todayButton = document.querySelector(".today-btn");
    const weekButton = document.querySelector(".week-btn");

    todayButton.addEventListener("click", () => {
      getTodayForecast(data);
      highlightActiveButton(todayButton, weekButton);
    });

    weekButton.addEventListener("click", () => {
      getWeekForecast(data);
      highlightActiveButton(weekButton, todayButton);
    });
  } else if (error) {
    document.querySelector(".city-name").textContent = error;
  }
});
