import { getUVInterpretation } from "./utils";
import rain from "../assets/icons/highlight/rain.png";
export function getHighlight(data) {
  const highlightList = document.querySelector(".highlight-list");
  const feeltemp = document.getElementById("feel-temp");
  const tempMax = document.getElementById("temp-max");
  const tempMin = document.getElementById("temp-min");

  tempMax.textContent = `High ${data.days[0].tempmax}°C`;
  tempMin.textContent = `Low ${data.days[0].tempmin}°C`;
  feeltemp.textContent = `Real Feel 
   ${data.days[0].feelslike}`;

  const rainCard = document.querySelector(".rain-card");
  const rainPercentage = document.getElementById("rain-percentage");
  console.log(data.days[0].preciptype);
  if (
    data.days &&
    data.days[0] &&
    Array.isArray(data.days[0].preciptype) &&
    data.days[0].preciptype.includes("rain")
  ) {
    rainPercentage.textContent = `${data.days[0].precipprob}`;
    rainCard.style.display = "flex";
  } else {
    rainCard.style.display = "none";
  }

  const conditions = document.getElementById("conditions");
  conditions.textContent = data.days[0].conditions;
  const cover = document.getElementById("cover");
  cover.textContent = `${data.days[0].cloudcover}%`;

  const windSpeed = document.getElementById("wind-speed");
  windSpeed.textContent = `${data.days[0].windspeed} mph`;

  const uv = document.getElementById("uv");
  const uvIndex = data.days[0].uvindex;
  uv.textContent = uvIndex;

  const uvInterpret = document.getElementById("uvInterpret");
  uvInterpret.textContent = getUVInterpretation(uvIndex);

  const sunriseTime = document.getElementById("sunrise-time");
  const sunsetTime = document.getElementById("sunset-time");
  sunriseTime.textContent = data.days[0].sunrise.slice(0, -3);
  sunsetTime.textContent = data.days[0].sunset.slice(0, -3);
}
