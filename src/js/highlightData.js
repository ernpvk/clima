import { getUVInterpretation } from "./utils";
export function getHighlight(data) {
  const highlightList = document.querySelector(".highlight-list");
  const feeltemp = document.getElementById("feel-temp");
  const tempMax = document.getElementById("temp-max");
  const tempMin = document.getElementById("temp-min");

  tempMax.textContent = `High ${data.days[0].tempmax}`;
  tempMin.textContent = `Low ${data.days[0].tempmin}`;
  feeltemp.textContent = `Feels like 
   ${data.days[0].feelslike}`;

  if (data.days[0].preciptype == "rain") {
    const rainPercentage = document.getElementById("rain-percentage");
    rainPercentage.textContent = `${data.days[0].precipprob}`;
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
}
