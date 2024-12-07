import { fetchWeatherData } from "./weatherService";

export async function setupSearch(callback) {
  const cityInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".aside-header button");

  const handleSearch = async () => {
    const city = cityInput.value.trim();
    if (city) {
      try {
        const data = await fetchWeatherData(city);
        cityInput.value = "";
        callback(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        callback(null, "⚠️ City not found");
      }
    } else {
      alert("Please enter a city name.");
    }
  };

  searchButton.addEventListener("click", handleSearch);

  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  });
}
