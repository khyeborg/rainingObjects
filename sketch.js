let ballArray = [];
let rainDropImage, cloud1Image, cloud2Image;

function preload() {
   rainDropImage = loadImage("images/raindrop.png");
   cloud1Image = loadImage("images/cloud1.png");
   cloud2Image = loadImage("images/cloud2.png");
}
 
function setup() {
   createCanvas(500, 500);
   imageMode(CENTER);
 
   for (let i = 0; i < random(30, 60); i++) {
	   let temp = new Ball(random(0, 500), 0, 0, 255, 0, random(1, 5), random(0.75, 1));
	   ballArray.push(temp) 
   }
}
 
function draw() {
   background(0);
 
   for (let i = 0; i < ballArray.length; i++) {
      image(rainDropImage, ballArray[i].xPos, ballArray[i].yPos, ballArray[i].picWidth, ballArray[i].picHeight);
	   ballArray[i].yPos += ballArray[i].speedValue;

	   if (ballArray[i].yPos > 525) {
		   ballArray[i].yPos = -25;
		}
   }

   image(cloud1Image, 50, 30, 300, 195);
   image(cloud2Image, 250, 10, 500, 208);
   image(cloud1Image, 450, 30, 300, 195);
}
 
class Ball {
   constructor(x, y, r, g, b, speed, factor) {
      this.xPos = x;
      this.yPos = y;
      this.redValue = r;
      this.greenValue = g;
	   this.blueValue = b;
      this.speedValue = speed;
      this.picWidth = 25 * factor;
      this.picHeight = 39 * factor;
   }
}
