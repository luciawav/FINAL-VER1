let mSerial;
let connectButton;
let readyToReceive;
let cBackgroundColor;
let circles = []; 

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

  cBackgroundColor = map(a0.value, a0.min, a0.max, 0, 255);
  let circleCount = map(a0.value, a0.min, a0.max, 1, 30); 
  circles = [];

  for (let i = 0; i < circleCount; i++) {
    let circleSize = random(10, 100); 
    let x = random(width); 
    let y = random(height);
    let circleColor = color(255, 0, 0); 
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

  cBackgroundColor = 0;
  readyToReceive = false;

  mSerial = createSerial();

  connectButton = createButton("Connect To Serial");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {
  background(cBackgroundColor);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
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
