const browserVersion = parseInt(navigator.userAgent.match(/Chrome\/(\d+)/)[1]);
const minimumBrowserVersion = 88;

if (browserVersion < minimumBrowserVersion) {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'images/simpleBonac64.png',
      title: 'Unsupported Browser Version',
      message: `Your Chrome version (${browserVersion}) is not supported. Please update to version ${minimumBrowserVersion} or later.`,
      priority: 2,
    });
  });
}

// Set up an interval to call the updateBadge function every 1000ms (1 second)
setInterval(updateBadge, 1000);

// Define the updateBadge function
function updateBadge() {

    // Define an array of period times, where each period is defined as an array with the following values:
    //   0: period number (not used in this code)
    //   1: start hour
    //   2: start minute
    //   3: end hour
    //   4: end minute
    var periodTimes = [                                  
                   [1,7,40,8,21],
                   [2,8,30,9,11],
                   [3,9,15,9,56],
                   [4,10,0,10,41],
                   [5,10,45,11,26],
                   [6,11,30,12,11],
                   [7,12,15,12,56],
                   [8,13,0,13,41],
                   [9,13,45,19,51],                   
                  ];

    // Get the current time
    var now = new Date();
    var currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds(); // current time in seconds
     
    // Loop through the periodTimes array to find the current period
    for (var i = 0; i < periodTimes.length; i++) {

        // Get the start and end times of the current period, and the start time of the next period (if there is one)
        var periodStart = periodTimes[i][1] * 3600 + periodTimes[i][2] * 60;
        var periodEnd = periodTimes[i][3] * 3600 + periodTimes[i][4] * 60;
        if(i == 0 || i == periodTimes.length - 1){
            var nextPeriodStart = periodTimes[i][1] * 3600 + periodTimes[i][2] * 60;
        }
        else if (i < periodTimes.length - 1) {
            var nextPeriodStart = periodTimes[i+1][1] * 3600 + periodTimes[i+1][2] * 60;
        } else {
            var nextPeriodStart = 0
        }
      
        // If the current time is within the current period, set the badge text to show the time remaining in the period
        if (currentTime >= periodStart && currentTime <= periodEnd ) {
            var timeLeft = periodEnd - currentTime;
            if (timeLeft <= 60) {
                chrome.action.setBadgeText({ text: timeLeft.toString() + "s" });
                chrome.action.setBadgeBackgroundColor({ color: "#7A0C0D" });
            } else{
                chrome.action.setBadgeText({ text: Math.round(timeLeft / 60).toString() + "m" });
                chrome.action.setBadgeBackgroundColor({ color: "#5A5959" });
            }
            break;
        
        // If the current time is before the next period, set the badge text to show the time until the next period starts
        } else if (currentTime <= nextPeriodStart) {
            var timeLeft = nextPeriodStart - currentTime;
            if (timeLeft <= 60) {
                chrome.action.setBadgeText({ text: timeLeft.toString() + "s" });
                chrome.action.setBadgeBackgroundColor({ color: "#7A0C0D" });
            } else if(timeLeft <= 3600){
                chrome.action.setBadgeText({ text: Math.round(timeLeft / 60).toString() + "m" });
                chrome.action.setBadgeBackgroundColor({ color: "#214fc6" });
            }else{
                chrome.action.setBadgeText({ text: Math.round(timeLeft / 3600) + "h " + Math.round((timeLeft % 3600) / 60) + "m"  });
                chrome.action.setBadgeBackgroundColor({ color: "#163584" }); 
            }
            break;
        
        // If the current time is after the last period, clear the badge text
        } else if (i == periodTimes.length - 1) {
            chrome.action.setBadgeText({ text: "" });
        }
    }
}
