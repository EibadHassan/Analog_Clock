setInterval(() => {
  date = new Date();
  hours = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  hourrotation = 30 * hours + minute / 2;
  minuterotation = 6 * minute;
  secondrotation = 6 * second;
  document.getElementById(
    "hour"
  ).style.transform = `rotate(${hourrotation}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minuterotation}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `rotate(${secondrotation}deg)`;
}, 1000);
