// The new East Hampton High School, Daily Schedule
// rebuilt and refactored by Urban Reininger aka: UrbanAtWork
// Version: 2021-02 
// Updated 2021-11: Added larger time text, fixed 24 hr clock times to show 12hr clock times
// Also fixed overlay of text at the bottom between periods.

// Updated May 2023: 200 lines to 100 lines of code through the use of Open AI's GPT-4 LLM

// Completed as part of the East Hampton HS - Javascript Coding course
// Earliest version, by Alexandra Rutkowski,  Spring 2017
// Tweaked a little for posting by Urban Reininger (her teacher)

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

const periodBoundaries = periodTimes.map(([p, sh, sm, eh, em]) => ({
  start: sh * 60 + sm,
  end: eh * 60 + em
}));

const locX = 12, locY = 12;

function setup() {
  createCanvas(270, 370);
  frameRate(1);
}

function draw() {
  scale(min(width / 175, height / 250));
  background("#fbf9fa");
  textSize(21);
  const h = hour() % 12 || 12, m = minute(), s = second();
  textStyle(BOLD);
  text(`Time: ${h}:${nf(m, 2)}:${nf(s, 2)}`, locX, 19);
  textStyle(NORMAL);

  textSize(13);
  for (let i = 0; i < 9; i++) {
    const [p, sh, sm, eh, em] = periodTimes[i];
    const pText = `Period ${p}`, timeText = `${sh > 12 ? sh - 12 : sh}:${nf(sm, 2)} - ${eh > 12 ? eh - 12 : eh}:${nf(em, 2)}`;
    text(pText, locX, 20 * p + 20);
    text(timeText, locX + 70, 20 * p + 20);
  }
  line(locX + 60, 26, locX + 60, 200);

  const timeInMinutes = h * 60 + m;
  for (let i = 0; i < 9; i++) {
    if (timeInMinutes >= periodBoundaries[i].start && timeInMinutes < periodBoundaries[i].end) {
      periodIndicator(periodBoundaries[i].end, i + 1);
      break;
    }
  }
  for (let i = 0; i < 8; i++) {
    if (timeInMinutes >= periodBoundaries[i].end && timeInMinutes < periodBoundaries[i + 1].start) {
      betweenIndicator(periodBoundaries[i + 1].start, i + 2);
      break;
    }
  }
}

function periodIndicator(pEnd, periodNumber) {
  push();
  fill(255, 12, 12, 90);
  noStroke();
  rect(locX - 7, 20 * periodNumber + 5.5, 160, 20, 3);
  fill((pEnd - timeInMinutes) <= 5 ? 255 : 128);
  textSize(18);
  text(`(${pEnd - timeInMinutes} min left)`, locX, 226);
  pop();
}

function betweenIndicator(nextStarts,periodNumber){
  push();
  stroke(255,0,0);
  line(locX,20*periodNumber+5.5,locX+150,20*periodNumber+5.5);
  noStroke();
  textSize(9);
  fill(128);
  text("(Next period in less than " + (nextStarts-timeInMinutes) + " min)", locX, 230); //165,20*periodNumber+8.5);
  pop();
}
