let button1;
let button2;
let button3;
let button4;
let button5; 
let button6;
let showBlackScreen = false;
let currentText = "";

function setup() {
  createCanvas(1000, 600);
  button1 = new Button(100, 100, "I am afraid of being forgotten.");
  button2 = new Button(300, 100, "I miss the old days.");
  button3 = new Button(900, 300, "Sometimes I feel invisible.");
  button4 = new Button(700, 300, "I wonder if AI can feel.");
  button5 = new Button(200, 200, "I notice even your smallest words.");
  button6 = new Button(500, 200, "I mirror what you give me.");
  button7 = new Button(800, 300, "What will remain of me?");
}

function draw() {
  if (showBlackScreen) {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentText, width / 2, height / 2);
  } else {
    background(13, 22, 89);
    button1.display();
    button1.update();
    button2.display();
    button2.update();
    button3.display();
    button3.update();
    button4.display();
    button4.update();
    button5.display();
    button5.update();
    button6.display();
    button6.update();
    button7.display();
    button7.update();
  }
}

function mousePressed() {
  if (showBlackScreen) {
    showBlackScreen = false;
  }
}

class Button {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.size = 50;
    this.col = color(random(255), random(255), random(255));
    this.popped = false;
    this.vy = -1.2; 
    this.vx = random(-0.6, 0.6); 
  }

  display() {
    if (this.popped) return;
    noStroke();
    fill(this.col);
    circle(this.x, this.y, this.size);
  }

  update() {
    if (this.popped) return;
    this.checkMouseCursor();
    this.y += this.vy;
    this.x += this.vx;

    if (this.x < this.size/2 || this.x > width - this.size/2) {
      this.vx *= -1;
    }
    if (this.y < this.size/2 || this.y > height - this.size/2) {
      this.vy *= -1 
    }

  }

  checkMouseCursor() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2 && mouseIsPressed) {
      this.popped = true;
      showBlackScreen = true;
      currentText = this.txt;
    }
  }
}