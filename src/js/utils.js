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
  const uvInterpret = document.getElementById("uvInterpret");
  if (index >= 0 && index < 3) {
    uvInterpret.style.background = "linear-gradient(190deg, #B0F2B6 0%, #90EE90 100%)";
    return "Low";
  } else if (index >= 3 && index < 6) {
    uvInterpret.style.background = "linear-gradient(135deg, #FFF5B1 0%, #FFFACD 100%)";
    return "Moderate";
  } else if (index >= 6 && index < 8) {
    uvInterpret.style.background = "linear-gradient(135deg, #FFD1A0 0%, #FFDAB9 100%)";
    return "High";
  } else if (index >= 8 && index < 11) {
    uvInterpret.style.background = "linear-gradient(135deg, #FFB3BA 0%, #FFCCCB 100%)";
    return "Very High";
  } else if (index >= 11) {
    uvInterpret.style.background = "linear-gradient(135deg, #E6E6FA 0%, #D8BFD8 100%)";
    return "Extreme";
  }
}
