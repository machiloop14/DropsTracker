export function getHoursAndMinutes(dateObj: Date) {
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  // The hour '0' should be changed to '12'
  hours = hours ? hours : 12;

  // Pad the minutes with a leading zero if less than 10
  let minutesStr = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutesStr + " " + ampm;
  return strTime;
}
