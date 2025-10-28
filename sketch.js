let walkL;
let walkR;
let walkS;

function preload() {
  walkL = loadImage('walking left.gif'); 
  walkR = loadImage('walking right.gif');
  walkS = loadImage('walking straight.gif');
}


function setup() {
  let canvasWidth = min(windowWidth, windowHeight * 0.5625);
  let canvasHeight = canvasWidth * 1.777; 

  lockGestures();

  if (canvasHeight > windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth = canvasHeight * 0.5625;
  }

  createCanvas(canvasWidth, canvasHeight);

  enableGyroTap('Tap to enable motion');

  background(50);
}

function draw() {
  background(0, 0, 240);

  let scaleX = width / walkL.width;
  let scaleY = height / walkL.height;
  let scale = max(scaleX, scaleY);


  let scaledWidth = walkL.width * scale;
  let scaledHeight = walkL.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;

  image(walkL, x, y, scaledWidth, scaledHeight);

  if (window.sensorsEnabled){
    let tilt = rotationY
  }
}