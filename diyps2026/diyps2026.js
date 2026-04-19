var img;
var initials ='na'; 
var choice = '1';
var screenbg = 0; // BACKGROUND
var lastscreenshot=61;

function preload() {
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
  createCanvas(606, 606);
  background(screenbg);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }

  if (mouseIsPressed){
    newkeyChoice(choice);
  }

  // UI
  noStroke();
  fill(255);
  textSize(12);
  textAlign(CENTER);
  text("1-0 tools | G image | X clear | P save", width/2, 20);
}

function newkeyChoice(toolChoice) {

  noFill(); 

  // 1 — thin line 
  if (toolChoice == '1') {
    stroke(180, 180, 255, 180);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // 2 —  white line
  } else if (toolChoice == '2') {
    stroke(255);
    strokeWeight(6);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // 3 — colorful neon line
  } else if (toolChoice == '3') {
    stroke(random(255), random(100), 255, 180);
    strokeWeight(2);
    line(mouseX + random(-10,10), mouseY + random(-10,10), pmouseX, pmouseY);

  // 4 — glowing white
  } else if (toolChoice == '4') {
    stroke(255, 255, 255, 200);
    strokeWeight(3);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // 5 — white/blue squares 
  } else if (toolChoice == '5') {
    stroke(255, 255, 255, 120);
    rect(mouseX - 30, mouseY - 30, 60, 60);
    stroke(0, 200, 255, 150);
    rect(mouseX - 20, mouseY - 20, 40, 40);

  // 6 — glow 
  } else if (toolChoice == '6') {
    stroke(255, 255, 255, 40);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);

  // 7 — gray cross
  } else if (toolChoice == '7') {
    stroke(200, 200, 200, 200);
    strokeWeight(2);
    line(mouseX - 15, mouseY, mouseX + 15, mouseY);
    line(mouseX, mouseY - 15, mouseX, mouseY + 15);

  // 8 — red x 
  } else if (toolChoice == '8') {
    stroke(255, 50, 50);
    strokeWeight(4);
    line(mouseX - 20, mouseY - 20, mouseX + 20, mouseY + 20);
    line(mouseX + 20, mouseY - 20, mouseX - 20, mouseY + 20);

  // 9 — blue burst 
  } else if (toolChoice == '9') {
    stroke(0, 200, 255);
    strokeWeight(2);
    for (let i = 0; i < 5; i++) {
      line(mouseX, mouseY, mouseX + random(-40,40), mouseY + random(-40,40));
    }

  // 0 — scattered dots
  } else if (toolChoice == '0') {
    noStroke();
    fill(random(255), random(255), random(255), 180);
    rect(mouseX + random(-50,50), mouseY + random(-50,50), 12, 12);

  // G — image stamp
  } else if (toolChoice == 'g' || toolChoice == 'G') {
    image(img, mouseX, mouseY, 60, 60);
  }
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg);
  } else if (key == 'p' || key == 'P') {
    saveme();
  }
}

function saveme(){
  filename = initials + day() + hour() + minute() + second();

  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
    key = "";
  }

  lastscreenshot = second();
}
