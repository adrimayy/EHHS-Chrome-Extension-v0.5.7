chrome.runtime.onStartup.addListener(() => {
  chrome.alarms.create("updateBadge", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.1
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("updateBadge", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.1
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "updateBadge") {
    updateBadge();
  }
});

function updateBadge() {
  try {    
    const periodTimes = [
      [1, 7, 40, 8, 21],
      [2, 8, 30, 9, 11], 
      [3, 9, 15, 9, 56], 
      [4, 10, 0, 10, 41],
      [5, 10, 45, 11, 26], 
      [6, 11, 30, 12, 11], 
      [7, 12, 15, 12, 56], 
      [8, 13, 0, 13, 41], 
      [9, 13, 45, 14, 26]
    ];

    const now = new Date();
    const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const firstPeriodStart = periodTimes[0][1] * 3600 + periodTimes[0][2] * 60;

    if (currentTime < firstPeriodStart) {
      updateBadgeTextAndColor(firstPeriodStart - currentTime);
    } else {
      for (let i = 0; i < periodTimes.length; i++) {
        const periodStart = periodTimes[i][1] * 3600 + periodTimes[i][2] * 60;
        const periodEnd = periodTimes[i][3] * 3600 + periodTimes[i][4] * 60;

        if (currentTime >= periodStart && currentTime <= periodEnd) {
          updateBadgeTextAndColor(periodEnd - currentTime);
          break;
        } else if (i < periodTimes.length - 1) {
          const nextPeriodStart = periodTimes[i + 1][1] * 3600 + periodTimes[i + 1][2] * 60;
          if (currentTime >= periodEnd && currentTime < nextPeriodStart) {
            updateBadgeTextAndColor(nextPeriodStart - currentTime);
            break;
          }
        } else if (i === periodTimes.length - 1) {
          chrome.action.setBadgeText({ text: "" });
        }
      }
    }
  } catch (error) {
    console.error('An error occurred in updateBadge:', error);
  }

  setTimeout(updateBadge, 1000);
}

function updateBadgeTextAndColor(timeLeft) {
  let timeText = "";
  if (timeLeft <= 60) {
    timeText = timeLeft.toString() + "s";
    chrome.action.setBadgeBackgroundColor({ color: "#7A0C0D" });
  } else if (timeLeft <= 3600) {
    timeText = Math.ceil(timeLeft / 60).toString() + "m";
    chrome.action.setBadgeBackgroundColor({ color: "#214fc6" });
  } else {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.ceil((timeLeft % 3600) / 60);
    timeText = hours.toString() + "h " + minutes.toString() + "m";
    chrome.action.setBadgeBackgroundColor({ color: "#5A5959" });
  }
  chrome.action.setBadgeText({ text: timeText });
}
