const periodElement = document.getElementById("periodTime");
const periodTimes = [
  [1, 7*3600 + 40*60, 8*3600 + 21*60],
  [2, 8*3600 + 30*60, 9*3600 + 11*60],
  [3, 9*3600 + 15*60, 9*3600 + 56*60],
  [4, 10*3600 + 0*60, 10*3600 + 41*60],
  [5, 10*3600 + 45*60, 11*3600 + 26*60],
  [6, 11*3600 + 30*60, 12*3600 + 11*60],
  [7, 12*3600 + 15*60, 12*3600 + 56*60],
  [8, 13*3600 + 0*60, 13*3600 + 41*60],
  [9, 13*3600 + 45*60, 14*3600 + 26*60]
];

function updateBadge() {   
  const now = new Date();
  const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  for (let i = 0; i < periodTimes.length; i++) {
    if (currentTime < periodTimes[i][1]) {
      updateBadgeTextAndColor(periodTimes[i][1] - currentTime, false);
      return;
    } else if (currentTime <= periodTimes[i][2]) {
      updateBadgeTextAndColor(periodTimes[i][2] - currentTime, true);
      return;
    }
  }

  periodElement.remove();
}

function updateBadgeTextAndColor(timeLeft, inPeriod) {
  let timeText = "";
  let color;

  if (timeLeft <= 60) {
    timeText = timeLeft.toString() + "s";
    color = "var(--title-color)";
  } else if (timeLeft <= 3600) {
    timeText = Math.ceil(timeLeft / 60).toString() + "m";
    color = inPeriod ? "var(--grey-time-color)" : "var(--blue-time-color)";
  } else {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.ceil((timeLeft % 3600) / 60);
    timeText = hours.toString() + "h" + minutes.toString() + "m";
    color = inPeriod ? "var(--grey-time-color)" : "var(--blue-time-color)";
  }

  periodElement.innerText = timeText;
  periodElement.style.backgroundColor = color;
}

setInterval(updateBadge, 1000);