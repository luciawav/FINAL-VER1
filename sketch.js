let mSerial;
let connectButton;
let readyToReceive;
let circles = []; 
let bgImage; 

function receiveSerial() {
  let line = mSerial.readUntil("\n");
  line = trim(line);
  if (!line) return;

  if (line.charAt(0) != "{") {
    print("error: ", line);
    readyToReceive = true;
    return;
  }

  let data = JSON.parse(line).data;
  let a0 = data.A0;

  let circleCount = map(a0.value, a0.min, a0.max, 1, 20); 
  circles = [];

  for (let i = 0; i < circleCount; i++) {
    let circleSize = random(10, 100); 
    let x = random(width); 
    let y = random(height);
    let circleColor = color(random(255,0), 0, 0); 
    circles.push({ x, y, size: circleSize, color: circleColor });
  }

  readyToReceive = true;
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);

    readyToReceive = true;
    connectButton.hide();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  bgImage = loadImage("pic.png"); 

  readyToReceive = false;
  mSerial = createSerial();

  connectButton = createButton("CONNECT");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {
 
  image(bgImage, 0, 0, width, height);

  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size, circle.size);
  }

  if (mSerial.opened() && readyToReceive) {
    readyToReceive = false;
    mSerial.clear();
    mSerial.write(0xab);
  }

  if (mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}