function setup() {
	createCanvas(600,600);
}

function draw() {
	colorMode(HSB);
	var xoff=0;
	var xoff2=0;
	
var xIncrement = random(0.005, 0.05);
var gradientSmoothness = random(0.05, 1);
var hueRange1 = random(0, 360);
var hueRange2 = random(0, 360);
var strokeRange = random(10, 50);
/* var breakpoint1 = 0;
var breakpoint2 = 100;
var breakpoint3 = 150;
var breakpoint4 = 200;
var breakpoint5 = 250;
var breakpoint6 = 300;
*/ 
var strokeSat = 100;
var strokeBright = 100;
var breakpointRandom = random(4, 20);
var breakpoints = width/breakpointRandom;

	
	for(var x=0; x < width; x+=xIncrement) {
		var strokeHue=map(noise(xoff2*gradientSmoothness), 0, 1, hueRange1, hueRange2);
		//var strokeHue=noise(xoff2*gradientSmoothness)*360;
		
		//strokeSat = (Math.round(x/100)*100)/width*100;
		
		/* if (x >= breakpoint1 && x < breakpoint2) {
			strokeSat = 100;
		} else if (x >= breakpoint2 && x < breakpoint3) {
			strokeSat = 85;
		} else if (x >= breakpoint3 && x < breakpoint4) {
			strokeSat = 65;
		} else if (x >= breakpoint4 && x < breakpoint5) {
			strokeSat = 50;				 
	  } else if (x >= breakpoint5 && x < breakpoint6) {
			strokeSat = 30;		 
		} else if (x >= breakpoint6 && x < (width-10)) {
			strokeSat = 20;
		} else {
			strokeSat = 5;
		} */ 
		
		
		for (var idk=0; idk < width; idk+=breakpoints) {
			strokeSat=100-breakpoints;
		
		}
		
		//var strokeBright= ((Math.round(x/100)*100)/width*100)+30;
		var randomStrokeWeight=noise(xoff)*strokeRange;
		var y=noise(xoff)*height;
		stroke(strokeHue, strokeSat, strokeBright);
		strokeWeight(randomStrokeWeight);
		point(x, y);
		xoff+=0.0002;
		xoff2+=0.01;
	}
	noLoop();
}