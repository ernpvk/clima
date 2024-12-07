export async function fetchWeatherData(location) {
  const API_KEY = process.env.API_KEY;
  const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const requestUrl = `${BASE_URL}/${location}?unitGroup=us&iconSet=icons2&key=${API_KEY}&contentType=json`;
  try {
    console.log(`Fetching weather data for: ${location}`);
    const response = await fetch(requestUrl, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    throw error;
  }
}
