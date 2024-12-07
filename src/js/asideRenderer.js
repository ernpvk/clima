export function renderAside(data) {
  const cityName = document.querySelector(".city-name");
  const description = document.querySelector("#description");
  const mainTemp = document.querySelector(".main-temp");
  const dateElement = document.querySelector("#date");
  const timeElement = document.querySelector("#time");
  const mainIcon = document.querySelector(".animated-cloud");

  cityName.textContent = data.resolvedAddress;
  description.textContent = data.description;
  
  mainTemp.textContent = `${data.days[0].temp}°C`;

  const rawDate = data.days[0].datetime;
  const formattedDate = new Date(rawDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  dateElement.textContent = formattedDate;

  function updateCityTime() {
    const cityTime = new Date(new Date().toLocaleString("en-US", { timeZone: data.timezone }));

    const formattedTime = cityTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    timeElement.textContent = formattedTime;
  }

  setInterval(updateCityTime, 1000);
  updateCityTime();
}
