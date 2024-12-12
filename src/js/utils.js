import moment from "moment-timezone";

export function getCurrentTime(zone) {
  const timezone = zone;
  const currentTime = moment.tz(timezone).format("HH:mm:ss");
  return currentTime;
}

export function highlightActiveButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add("nav-active");
  inactiveBtn.classList.remove("nav-active");
}

export function getDayName(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

export function getUVInterpretation(index) {
  if (index >= 0 && index < 3) {
    uvInterpret.style.backgroundColor = "#65ae39";
    return "Low";
  } else if (index >= 3 && index < 6) {
    uvInterpret.style.backgroundColor = "#ffec00";
    return "Moderate";
  } else if (index >= 6 && index < 8) {
    uvInterpret.style.backgroundColor = "#ffa139";
    return "High";
  } else if (index >= 8 && index < 11) {
    uvInterpret.style.backgroundColor = "#f25930";
    return "Very High";
  } else if (index >= 11) {
    uvInterpret.style.backgroundColor = "violet";
    return "Extreme";
  }
}
