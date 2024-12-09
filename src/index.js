import { setupSearch } from "./js/setupSearch";
import { renderAside } from "./js/asideRenderer";
import { renderTodayForecast } from "./js/forecastRenderer";
import "./style.css";

setupSearch((data, error) => {
  if (data) {
    renderAside(data);
    renderTodayForecast(data);
  } else if (error) {
    document.querySelector(".city-name").textContent = error;
  }
});
