var images = [];
var randX = 0;
var randY = 0;
let fr= 1.5;
function setup() {
 createCanvas(windowWidth, windowHeight);
 canvas.position (0,0);
canvas.style('z-index','-1');
  frameRate(fr);

   for (var i = 0; i < 3; i++) {
  images[i] = loadImage('check' + i + '.png');
      console.log('check' + i + '.png');
  }
}

function draw() {

  image(random(images), randX, randY);
  randX = random(0, windowWidth);
  randY = random(0, windowHeight);


}
