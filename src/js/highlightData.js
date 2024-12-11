export function getHighlight(data) {
  const highlightList = document.querySelector(".highlight-list");
  const feeltemp = document.getElementById("feel-temp");
  const tempMax = document.getElementById("temp-max");
  const tempMin = document.getElementById("temp-min");

  tempMax.textContent = data.days[0].tempmax;
  tempMin.textContent = data.days[0].tempmin;
  feeltemp.textContent = data.days[0].feelslike;
}
