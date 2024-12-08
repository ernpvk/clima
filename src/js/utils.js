import moment from "moment-timezone";

export function getCurrentTime(zone) {
  const timezone = zone;
  const currentTime = moment.tz(timezone).format("HH:mm:ss");

  return currentTime;
}
