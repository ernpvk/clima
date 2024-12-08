import { setupSearch } from "./js/setupSearch";
import { renderAside } from "./js/asideRenderer";
import { renderForecast } from "./js/forecastRenderer";
import { currentTime } from "./js/utils";
import "./style.css";

setupSearch((data, error) => {
  if (data) {
    renderAside(data);
    renderForecast(data);
  } else if (error) {
    document.querySelector(".city-name").textContent = error;
  }
});
