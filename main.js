let goalDate = new Date("Dec 25, 2023 00:00:00").getTime();
let timer = setInterval(tick, 1000);
function tick() {
  let now = new Date().getTime();
  let t = goalDate - now;

  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (days < 10) {
      days = "0" + days;
    }

    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // adding these elements individually instead of a single `` string so that I can style them easier
    document.getElementById("daysD").innerText = days;
    document.getElementById("hoursD").innerText = hours;
    document.getElementById("minutesD").innerText = minutes;
    document.getElementById("secondsD").innerText = seconds;
  }
}
