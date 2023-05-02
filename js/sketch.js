// The new East Hampton High School, Daily Schedule
// rebuilt and refactored by Urban Reininger aka: UrbanAtWork
// Version: 2021-02 
// Updated 2021-11: Added larger time text, fixed 24 hr clock times to show 12hr clock times
// 									Also fixed overlay of text at the bottom between periods.

// Completed as part of the East Hampton HS - Javascript Coding course
// Earliest version, by Alexandra Rutkowski,  Spring 2017
// Tweaked a little for posting by Urban Reininger (her teacher)period

//EHHS-TwoHourDelaySchedule.png

// let img;
// function preload() {
//   img = loadImage('EHHS-TwoHourDelaySchedule300.png');
// }


var timeInMinutes = 0;
// NOTE: Period times need to be in 24 hour format!! Example: 1pm = 13
var periodTimes = [
               [1,7,40,8,21],
               [2,8,30,9,11],
               [3,9,15,9,56],
               [4,10,0,10,41],
               [5,10,45,11,26],
               [6,11,30,12,11],
               [7,12,15,12,56],
               [8,13,0,13,41],
               [9,13,45,14,26]                  
              ];

// var p1StartHr  = periodTimes[0][1];  // way to list each part
// var p1StartMin = periodTimes[0][2];  // not used this version
// var p1EndHr    = periodTimes[0][3];
// var p1EndMin   = periodTimes[0][4];
var p1Start    = periodTimes[0][1] * 60 + periodTimes[0][2];
var p1End      = periodTimes[0][3] * 60 + periodTimes[0][4];
// ---------
var p2Start    = periodTimes[1][1] * 60 + periodTimes[1][2];
var p2End      = periodTimes[1][3] * 60 + periodTimes[1][4];
// ---------
var p3Start    = periodTimes[2][1] * 60 + periodTimes[2][2];
var p3End      = periodTimes[2][3] * 60 + periodTimes[2][4];
// ---------
var p4Start    = periodTimes[3][1] * 60 + periodTimes[3][2];
var p4End      = periodTimes[3][3] * 60 + periodTimes[3][4];
// ---------
var p5Start    = periodTimes[4][1] * 60 + periodTimes[4][2];
var p5End      = periodTimes[4][3] * 60 + periodTimes[4][4];
// ---------
var p6Start    = periodTimes[5][1] * 60 + periodTimes[5][2];
var p6End      = periodTimes[5][3] * 60 + periodTimes[5][4];
// ---------
var p7Start    = periodTimes[6][1] * 60 + periodTimes[6][2];
var p7End      = periodTimes[6][3] * 60 + periodTimes[6][4];
// ---------
var p8Start    = periodTimes[7][1] * 60 + periodTimes[7][2];
var p8End      = periodTimes[7][3] * 60 + periodTimes[7][4];
// ---------
var p9Start    = periodTimes[8][1] * 60 + periodTimes[8][2];
var p9End      = periodTimes[8][3] * 60 + periodTimes[8][4];
// ---------

// var canvasX;
// var canvasY;
var locX;

function setup() {
createCanvas(270,370);

locX = 12;
locY = 12;

frameRate(1);

//  createA('http://p5js.org/', 'this is a link');

} // end of setup

function draw() {
if(width > height){
scale(height/250);
}else{
scale(width/175);
}

background("#fbf9fa");

textSize(13);

var h = hour();
var m = minute();
var s = second();

var totalMinutes = (h*60+m);
timeInMinutes = (h*60+m);

//var totalMinutes = (11*60+1);//used this to test things
//var totalSeconds = (totalMinutes*60+s);//don't think I need this


//these statements are so that the always reads as h:mm:ss, not h:m:s or h:mm:s or h:m:ss
////////////// START CLOCK /////////////////////
textSize(21);
if(h>12){ h=h-12; }
if(m<10){ m = "0"+m; }
if(s<10){ s = "0"+s; }
textStyle(BOLD);
text(("Time: " + h + ":" + m + ":" + s),locX, 19);
textStyle(NORMAL);
////////////// END CLOCK /////////////////////

//   push();
//   fill(128);
//   textSize(6);
//   text("Created in the Coding for Artists Class \nEHHS Computer Science ~ Mr. Reininger ", locX, 245); // 238);
//   pop();
textSize(13);


// text("Period "+ periodTimes[0][0], 105, 20*periodTimes[0][0]+20);
// text(periodTimes[0][1] + ":" + periodTimes[0][2] + " - " + periodTimes[0][3] + ":" + periodTimes[0][4], 175, 20*periodTimes[0][0]+20); 

///////////// PRINT PERIODS AND TIMES /////////////
for (var i=0; i<9; i++){

if(periodTimes[i][2] < 10){
		
		if(periodTimes[i][1] > 12) {
			text("Period "+ periodTimes[i][0], locX, 20*periodTimes[i][0]+20);
			text(((periodTimes[i][1])-12) + ":0" + periodTimes[i][2] + " - " + ((periodTimes[i][3])-12) + ":" + periodTimes[i][4], locX+70, 20*periodTimes[i][0]+20);
		}else{
  	text("Period "+ periodTimes[i][0], locX, 20*periodTimes[i][0]+20);
  	text(periodTimes[i][1] + ":0" + periodTimes[i][2] + " - " + periodTimes[i][3] + ":" + periodTimes[i][4], locX+70, 20*periodTimes[i][0]+20);
		}		
	
	} else if(periodTimes[i][1] > 12) {
		text("Period "+ periodTimes[i][0], locX, 20*periodTimes[i][0]+20);
  text(((periodTimes[i][1])-12) + ":" + periodTimes[i][2] + " - " + ((periodTimes[i][3])-12) + ":" + periodTimes[i][4], locX+70, 20*periodTimes[i][0]+20);
	} else {
  text("Period "+ periodTimes[i][0], locX, 20*periodTimes[i][0]+20);
  text(periodTimes[i][1] + ":" + periodTimes[i][2] + " - " + periodTimes[i][3] + ":" + periodTimes[i][4], locX+70, 20*periodTimes[i][0]+20);
}// end else
} // end for ------------------ <<<

line(locX+60,26,locX+60,200); // line between period and times

if(timeInMinutes >= p1Start && timeInMinutes < p1End){
 periodIndicator(p1End, 1);
}
if(timeInMinutes >= p2Start && timeInMinutes < p2End){
 periodIndicator(p2End, 2);
}

if(timeInMinutes >= p3Start && timeInMinutes < p3End){
 periodIndicator(p3End, 3);
}
if(timeInMinutes >= p4Start && timeInMinutes < p4End){
 periodIndicator(p4End, 4);
}
if(timeInMinutes >= p5Start && timeInMinutes < p5End){
 periodIndicator(p5End, 5);
}
if(timeInMinutes >= p6Start && timeInMinutes < p6End){
 periodIndicator(p6End, 6);
}
if(timeInMinutes >= p7Start && timeInMinutes < p7End){
 periodIndicator(p7End, 7);
}
if(timeInMinutes >= p8Start && timeInMinutes < p8End){
 periodIndicator(p8End, 8);
}
if(timeInMinutes >= p9Start && timeInMinutes < p9End){
 periodIndicator(p9End, 9);
}

// the in betweens
if(timeInMinutes >= p1End && timeInMinutes < p2Start){
 betweenIndicator(p2Start,2);
}
if(timeInMinutes >= p2End && timeInMinutes < p3Start){
 betweenIndicator(p3Start,3);
}
if(timeInMinutes >= p3End && timeInMinutes < p4Start){
 betweenIndicator(p4Start,4);
}
if(timeInMinutes >= p4End && timeInMinutes < p5Start){
 betweenIndicator(p5Start,5);
}
if(timeInMinutes >= p5End && timeInMinutes < p6Start){
 betweenIndicator(p6Start,6);
}
if(timeInMinutes >= p6End && timeInMinutes < p7Start){
 betweenIndicator(p7Start,7);
}
if(timeInMinutes >= p7End && timeInMinutes < p8Start){
 betweenIndicator(p8Start,8);
}
if(timeInMinutes >= p8End && timeInMinutes < p9Start){
 betweenIndicator(p9Start,9);
}


//   if(totalMinutes < period1start || totalMinutes > period9end){
//    text("School's out!", 100, 220);
//   }

//image(img, 90, 21); // FOR special schedules (just an image)
}  // end of draw


/////////////// RESIZE?? /////////////
////////////////////////////////////////////////////////////////////////////
function periodIndicator(pEnd, periodNumber){

// if(totalMinutes >=period2end && totalMinutes < period3start){
//   text("Between P2 and P3", 100,220);
// }

push();
fill(255, 12, 12, 90);											// color of the highlighted period box
noStroke();
rect(locX-7,20*periodNumber+5.5,160,20,3);  // highlighted period box

fill(128);
//text("(" + (pEnd-timeInMinutes) + ")", 167,20*periodNumber+15); // for num at end of line
textSize(18);
if((pEnd-timeInMinutes)<=5){
  fill(255,0,0);
} else{
  fill(128);
}
//text("left", 172,20*periodNumber+23);
text("(" + (pEnd-timeInMinutes) + " min left)", locX, 226);// 170,20*periodNumber+19);
// text("Time Left: " + (pEnd-timeInMinutes) + " minutes", locX,240);
pop();

} // end periodIndicator

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
