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
const locX = 12;
let timeInMinutes;
const devicePixelRatio = window.devicePixelRatio || 1;
const canvas = document.getElementById('period-schedule');
const ctx = canvas.getContext('2d');

canvas.width = 270 * devicePixelRatio;
canvas.height = 370 * devicePixelRatio;
canvas.style.width = '270px';
canvas.style.height = '370px';
ctx.scale(devicePixelRatio, devicePixelRatio);

  function draw() {
    const scaleFactor = (canvas.width / devicePixelRatio) > (canvas.height / devicePixelRatio) ? (canvas.height / devicePixelRatio) / 250 : (canvas.width / devicePixelRatio) / 175;
    ctx.save();
    ctx.scale(scaleFactor, scaleFactor);
    ctx.fillStyle = getBackgroundColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    displayTime();
    printPeriodsAndTimes();
    highlightCurrentPeriod();
    ctx.restore();
  }

  function displayTime() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    timeInMinutes = h * 60 + m;
  
    ctx.font = "bold 21px sans-serif";
    ctx.fillStyle = getTextColor();
    ctx.fillText(`Time: ${h > 12 ? h - 12 : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`, locX, 19);
    ctx.font = "normal 13px sans-serif";
  }
  
  function printPeriodsAndTimes() {
    periodTimes.forEach(period => {
      const [num, h1, m1, h2, m2] = period;
      const formattedTime1 = `${h1 > 12 ? h1 - 12 : h1}:${m1 < 10 ? "0" + m1 : m1}`;
      const formattedTime2 = `${h2 > 12 ? h2 - 12 : h2}:${m2}`;
  
      ctx.fillText(`Period ${num}`, locX, 20 * num + 20);
      ctx.fillText(`${formattedTime1} - ${formattedTime2}`, locX + 70, 20 * num + 20);
    });
    ctx.beginPath();
    ctx.moveTo(locX + 60, 26);
    ctx.lineTo(locX + 60, 200);
    ctx.stroke();
  }
  
  function highlightCurrentPeriod() {
    periodTimes.forEach((period, i) => {
      const currentStart = period[1] * 60 + period[2];
        const currentEnd = period[3] * 60 + period[4];
        const periodNumber = i + 1;
    
        if (timeInMinutes >= currentStart && timeInMinutes < currentEnd) {
          periodIndicator(currentEnd, periodNumber);
        } else if (i > 0 && timeInMinutes >= (periodTimes[i - 1][3] * 60 + periodTimes[i - 1][4]) && timeInMinutes < currentStart) {
          betweenIndicator(currentStart, periodNumber);
        }
      });
    }
    
    function periodIndicator(pEnd, periodNumber) {
      ctx.save();
      ctx.fillStyle = "rgba(255, 12, 12, 0.35)";
      ctx.fillRect(locX - 7, 20 * periodNumber + 5.5, 160, 20);
      ctx.fillStyle = (pEnd - timeInMinutes) <= 5 ? getTitleColor() : getTextColor();
      ctx.font = "18px sans-serif";
      ctx.fillText(`(${pEnd - timeInMinutes} min left)`, locX, 226);
      ctx.restore();
    }
    
    function betweenIndicator(nextStarts, periodNumber) {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = getTitleColor();
      ctx.moveTo(locX, 20 * periodNumber + 5.5);
      ctx.lineTo(locX + 150, 20 * periodNumber + 5.5);
      ctx.stroke();
      ctx.font = "9px sans-serif";
      ctx.fillStyle = getTextColor();
      ctx.fillText(`(Next period in less than ${nextStarts - timeInMinutes} min)`, locX, 230);
      ctx.restore();
    }
    
    function loop() {
      draw();
      requestAnimationFrame(loop);
    }
    
    loop();
