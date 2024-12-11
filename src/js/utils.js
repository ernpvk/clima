import moment from "moment-timezone";

export function getCurrentTime(zone) {
  const timezone = zone;
  const currentTime = moment.tz(timezone).format("HH:mm:ss");
  return currentTime;
}

export function highlightActiveButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add("forecast-active");
  inactiveBtn.classList.remove("forecast-active");
}

export function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}
