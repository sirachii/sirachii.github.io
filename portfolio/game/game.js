var ballx = 300;
var bally = 300;
var ballSize = 80;
var score = 0;
var gameState = "intro";

var img;
var tailsGif;
var ringGif2;
var continueGif3;
var sonicexeGif4;
var winGif5;

// SONIC EXE
var sonicexeGif4X = 100;
var sonicexeGif4Y = 100;
var sonicexeGif4Size = 120;
var sonicexeGif4SpeedX = 3;
var sonicexeGif4SpeedY = 2;

var sonicSpeedMultiplier = 1;
var sonicActive = false;

function preload() {
  img = loadImage('https://sirachii.github.io/images/greenhill.jpg');
  tailsGif = loadImage('https://sirachii.github.io/images/tailsflying.gif');
  ringGif2 = loadImage('https://sirachii.github.io/ring.gif');
  continueGif3 = loadImage('https://sirachii.github.io/images/continuescreen.gif');
  sonicexeGif4 = loadImage('https://sirachii.github.io/images/sonicexe.gif');
  winGif5 = loadImage('https://sirachii.github.io/images/victoryscreen.gif');
}

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
}

function draw() {
  image(img, 0, 0, width, height);
  fill(255);
  stroke(0);
  strokeWeight(4);

  textSize(32);
  text("RINGS: " + score, width / 2, 50);

  textSize(22);
  if (gameState == "L1") text("LEVEL 1", width / 2, 90);
  if (gameState == "L2") text("LEVEL ???", width / 2, 90);
  if (gameState == "L3") text("RUN!", width / 2, 90);

  noStroke();

  if (gameState == "intro") levelIntro();
  if (gameState == "L1") levelOne();
  if (gameState == "L2") levelTwo();
  if (gameState == "L3") levelThree();

  if (gameState == "WIN") winScreen();
  if (gameState == "LOSE") loseScreen();

  if (gameState != "LOSE") {
    image(tailsGif, mouseX - 60, mouseY - 60, 120, 120);
  }
}

function levelIntro() {
  background(30);

  fill(255);
  textSize(26);
  text("Collect 50 Rings to Win!", width / 2, height / 2 - 30);
  text("Press any key to start", width / 2, height / 2 + 20);

  if (keyIsPressed) {
    gameState = "L1";
  }
}

//LEVEL 1
function levelOne() {
  sonicActive = false;
  sonicSpeedMultiplier = 1;
  ballSize = 80;

  var d = dist(ballx, bally, mouseX, mouseY);

  if (d < ballSize) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    score++;
  }

  image(ringGif2, ballx, bally, ballSize, ballSize);

  if (score >= 10) {
    gameState = "L2";
  }
}

//LEVEL 2
function levelTwo() {
  sonicActive = true;
  sonicSpeedMultiplier = 1.5;
  ballSize = 60;

  var d = dist(ballx, bally, mouseX, mouseY);

  if (d < ballSize) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    score++;
  }

  sonicexeGif4X += sonicexeGif4SpeedX * sonicSpeedMultiplier;
  sonicexeGif4Y += sonicexeGif4SpeedY * sonicSpeedMultiplier;

  if (sonicexeGif4X < 0 || sonicexeGif4X > width - sonicexeGif4Size) {
    sonicexeGif4SpeedX *= -1;
  }

  if (sonicexeGif4Y < 0 || sonicexeGif4Y > height - sonicexeGif4Size) {
    sonicexeGif4SpeedY *= -1;
  }

  var dBad = dist(sonicexeGif4X, sonicexeGif4Y, mouseX, mouseY);

  if (dBad < sonicexeGif4Size / 2) {
    gameState = "LOSE";
  }

  image(ringGif2, ballx, bally, ballSize, ballSize);
  image(sonicexeGif4, sonicexeGif4X, sonicexeGif4Y, sonicexeGif4Size, sonicexeGif4Size);

  if (score >= 20) {
    gameState = "L3";
  }
}

// LEVEL 3
function levelThree() {
  sonicActive = true;
  sonicSpeedMultiplier = 2.5;
  ballSize = 40;

  var d = dist(ballx, bally, mouseX, mouseY);

  if (d < ballSize) {
    ballx = random(ballSize, width - ballSize);
    bally = random(ballSize, height - ballSize);
    score++;
  }

  sonicexeGif4X += sonicexeGif4SpeedX * sonicSpeedMultiplier;
  sonicexeGif4Y += sonicexeGif4SpeedY * sonicSpeedMultiplier;

  if (sonicexeGif4X < 0 || sonicexeGif4X > width - sonicexeGif4Size) {
    sonicexeGif4SpeedX *= -1;
  }

  if (sonicexeGif4Y < 0 || sonicexeGif4Y > height - sonicexeGif4Size) {
    sonicexeGif4SpeedY *= -1;
  }

  var dBad = dist(sonicexeGif4X, sonicexeGif4Y, mouseX, mouseY);

  if (dBad < sonicexeGif4Size / 2) {
    gameState = "LOSE";
  }

  image(ringGif2, ballx, bally, ballSize, ballSize);
  image(sonicexeGif4, sonicexeGif4X, sonicexeGif4Y, sonicexeGif4Size, sonicexeGif4Size);

  if (score >= 50) {
    gameState = "WIN";
  }
}

//win
function winScreen() {
  background(255, 245, 180);

  fill(0);
  textSize(40);
  text("YOU WIN!", width / 2, height / 2 - 120);

  textSize(22);
  text("Press R to restart", width / 2, height / 2 - 80);

  image(winGif5, width / 2 - 150, height / 2 - 50, 300, 300);
}

//lose
function loseScreen() {
  background(0);

  image(continueGif3, width / 2 - 300, height / 2 - 200, 600, 400);

  fill(255, 0, 0);
  textSize(50);
  text("GAME OVER", width / 2, height / 2 - 200);

  fill(255);
  textSize(22);
  text("Press R to restart", width / 2, height / 2 + 220);
}

//restart
function restartGame() {
  score = 0;
  gameState = "intro";

  ballx = random(100, width - 100);
  bally = random(100, height - 100);

  sonicexeGif4X = random(width);
  sonicexeGif4Y = random(height);

  sonicSpeedMultiplier = 1;
  sonicActive = false;
}

function keyPressed() {
  if (gameState == "WIN" || gameState == "LOSE") {
    if (key == 'r' || key == 'R') {
      restartGame();
    }
  }
}
