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

  enableMicTap('Tap to enable microphone');

  background(50);
}

function draw() {
  background(0, 0, 240);

if (window.micEnabled) {
    let level = mic.getLevel();
    let size = map(level, 0, 1, 10, 200);

  let scaleX = width / walkS.width;
  let scaleY = height / walkS.height;
  let scale = max(scaleX, scaleY);


  let scaledWidth = walkS.width * scale;
  let scaledHeight = walkS.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;

  image(walkS, x, y, scaledWidth, scaledHeight);
    }else{
    let scaleX = width / walkL.width;
  let scaleY = height / walkL.height;
  let scale = max(scaleX, scaleY);


  let scaledWidth = walkL.width * scale;
  let scaledHeight = walkL.height * scale;
  let x = (width - scaledWidth) / 2;
  let y = (height - scaledHeight) / 2;

  image(walkS, x, y, scaledWidth, scaledHeight);
    }
}