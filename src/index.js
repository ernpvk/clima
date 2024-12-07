import { setupSearch } from "./js/setupSearch";
import { renderAside } from "./js/asideRenderer";
import "./style.css";

setupSearch((data, error) => {
  if (data) {
    renderAside(data);
  } else if (error) {
    document.querySelector(".city-name").textContent = error;
  }
});
