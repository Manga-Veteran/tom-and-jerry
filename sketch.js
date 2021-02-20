var tom, jerry;
function preload() {
  //load the images here
  var tomImg1 = loadImage("cat1.png");
  var tomImg2 = loadImage("cat2.png");
  var tomImg3 = loadImage("cat3.png");
  var tomImg4 = loadImage("cat4.png");

  var jerryImg1 = loadImage("mouse1.png");
  var jerryImg2 = loadImage("mouse2.png");
  var jerryImg3 = loadImage("mouse3.png");
  var jerryImg4 = loadImage("mouse4.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
}

function draw() {
  background("garden.png");
  //Write condition here to evalute if tom and jerry collide

  drawSprites();
}

function keyPressed() {
  //For moving and changing animation write code here
}
