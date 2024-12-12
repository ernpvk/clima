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

export function getUVInterpretation(index) {
  if (index >= 0 && index < 3) {
    uv.style.backgroundColor = "green";
    uv.style.color = "white";
    return "Low (Minimal protection needed)";
  } else if (index >= 3 && index < 6) {
    uv.style.backgroundColor = "yellow";
    uv.style.color = "black";
    return "Moderate (Some protection recommended)";
  } else if (index >= 6 && index < 8) {
    uv.style.backgroundColor = "orange";
    uv.style.color = "white";
    return "High (Protection essential)";
  } else if (index >= 8 && index < 11) {
    uv.style.backgroundColor = "red";
    uv.style.color = "white";
    return "Very High (Extra protection needed)";
  } else if (index >= 11) {
    uv.style.backgroundColor = "violet";
    uv.style.color = "white";
    return "Extreme (Avoid being outside)";
  }
}
