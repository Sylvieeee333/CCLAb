/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new Lammie(width / 2+300, height / 2+300);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Lammie {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
     this.baseY = startY;
    this.frame = 0;
    this.bodyAngle = 0;
    this.headAngle = 0;
    this.leftArmAngle = 0;
    this.rightArmAngle = 0;
    this.leftLegAngle = 0;
    this.rightLegAngle = 0;
    this.bodyColor = "White";
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
 this.frame++;

    // Body movement
    this.bodyAngle = sin(this.frame * 0.08) * 0.12;
    this.y = this.baseY + sin(this.frame * 0.12) * 4;

    // Head movement
    this.headAngle = sin(this.frame * 0.1) * 0.1;

    // Arms waving
    this.leftArmAngle = sin(this.frame * 0.12) * 0.6;
    this.rightArmAngle = sin(this.frame * 0.12 + PI) * 0.6;

    // Feet stepping
    this.leftLegAngle = sin(this.frame * 0.12) * 0.1;
    this.rightLegAngle = sin(this.frame * 0.12 + PI) * 0.1;


  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    rotate(this.bodyAngle);
    noStroke();
    // Ears
    fill(this.bodyColor);
    ellipse(-25, -80, 15,20);
    ellipse(25, -80, 15,20);
    // Legs
    push();
    translate(-20, 55);
    rotate(this.leftLegAngle);
    fill(this.bodyColor);
    ellipse(0, -30, 10, 20);
    pop();

    push();
    translate(20, 55);
    rotate(this.rightLegAngle);
    fill(this.bodyColor);
    ellipse(0, -30, 10, 20);
    pop();
    // Arms
    push();
    translate(28, -15);
    rotate(this.leftArmAngle - 0.5);
    fill(this.bodyColor);
    ellipse(0, 8, 10, 20);
    pop();

    push();
    translate(-28, -15);
    rotate(this.rightArmAngle + 0.5);
    fill(this.bodyColor);
    ellipse(0, 8, 10, 20);
    pop();
    // Body
    fill(this.bodyColor);
    ellipse(0, 0, 65, 60);
    // Head
    push();
    translate(0, -48);
    rotate(this.headAngle);

    fill(this.bodyColor);
    ellipse(0, 0, 90, 80);
    // Eyes
    fill("black");
    circle(-10, -5, 6);
    circle(10, -5, 6);
    // Nose
    fill("black");
    ellipse(0, 8, 7, 6);
    // Mouth
    noFill();
    stroke("black");
    strokeWeight(3);
    arc(-3, 12, 6, 6, 0, PI);
    arc(3, 12, 6, 6, 0, PI);
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    //rect(-100, -100, 200, 200);
    //fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/