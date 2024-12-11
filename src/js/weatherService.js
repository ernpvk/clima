export async function fetchWeatherData(location, unit = "uk") {
  const API_KEY = process.env.API_KEY;
  const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const requestUrl = `${BASE_URL}/${location}?unitGroup=${unit}&lang=en&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(requestUrl, { mode: "cors" });
    if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    throw error;
  }
}
