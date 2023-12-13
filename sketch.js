let mSerial;
let connectButton;
let readyToReceive;
let cBackgroundColor;
let circleSize = 0;  // 新增变量来存储圆圈的大小

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
  circleSize = map(a0.value, a0.min, a0.max, 0, width); // 根据光敏电阻的值映射圆圈大小
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

  fill(255, 0, 0);  
  noStroke();     
  ellipse(width / 2, height / 2, circleSize, circleSize); 

  if (mSerial.opened() && readyToReceive) {
    readyToReceive = false;
    mSerial.clear();
    mSerial.write(0xab);
  }

  if (mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}