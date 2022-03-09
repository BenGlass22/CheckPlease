

function setup()
{
var randR= random(0,255);
var randG= random(0,255);
var randB= random(0,255);
blendMode(OVERLAY);
  createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
    fill(randR,randG,randB);
    noStroke();
}

function draw() 
{
  background(255);
 imageMode(CENTER);

 ellipse( mouseX, mouseY, 20, 20);
}
