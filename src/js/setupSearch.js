import { fetchWeatherData } from "./weatherService";

export async function setupSearch(callback) {
  const cityInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".aside-header button");
  const loaderContainer = document.querySelector(".loader-container");

  const showLoader = () => {
    loaderContainer.classList.remove("hidden");
  };

  const hideLoader = () => {
    loaderContainer.classList.add("hidden");
  };

  const handleSearch = async (cityName) => {
    const city = cityName || cityInput.value.trim();
    if (city) {
      try {
        showLoader();
        const data = await fetchWeatherData(city);
        cityInput.value = "";
        callback(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("City not found");
      } finally {
        hideLoader();
      }
    } else {
      alert("Please enter a city name.");
    }
  };

  searchButton.addEventListener("click", () => handleSearch());
  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  });

  handleSearch("Bangkok");
}
