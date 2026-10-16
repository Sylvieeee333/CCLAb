/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let angle = 0
let s = 8
let click = false;
function mousePressed(){
  click = ! click
}

function setup() {
   createCanvas(800, 500);
  background(35, 51, 125);
noStroke()
   rad = 0;
   x = width/2;
  y = 0;
}
function draw() {
  
  cell()
  
}

function cell(){
  //white
  push()
  stroke(174, 170, 240);
  fill(map(sin(frameCount/5), -1, 1, 0, 255));
  fill(255);
  circle(width/2, height/2, map(sin(frameCount / 50), -1, 1, 150, 250));
  pop()

  //background
  push()
  fill(mouseX,0,mouseY)
  noStroke()
  angle = angle + 1
  r = noise(frameCount * 0.05)*100

  v = r + 100;
  xx = width/2 + cos(angle) * v ;
  yy = height/2 + sin(angle) * v;
  
  circle(xx,yy,10);
  pop()

  //more
  let num = 24;
  let speed = 0.01;
  for( let i = 0; i < num; i++){
    let a = TWO_PI / num * i + frameCount * speed
    let xxx = width/2 + 100 * cos(a) 
    let yyy = height/2 + 100 * sin(a)
    fill(174, 170, 240)
    noStroke()
    ellipse(xxx,yyy,16,10)
  }
  push()
  translate(width/2,height/2)
  rotate(frameCount*0.02)
  fill(79, 52, 117)
  circle(0-100,0,10)
  circle(0+100,0,10)
  circle(0,0-100,20)
  pop()
  
  eye()
}
  
function eye(){
   //inner
  if (click == false){
    z = width/2 - 25 + mouseX * 0.1;
  w = height/2 - 25 + mouseY * 0.1;
  fill(16, 24, 59);
  stroke(20,0,55);
    strokeWeight(5)
  circle(z, w, 50);
  z = width/2 -10 + mouseX * 0.1;
  w = height/2 -30 + mouseY * 0.1;
 fill(255)
  noStroke();
  circle(z, w, 10);
  }else{
     fill(16, 24, 59);
  noStroke();
    z = width/2 - 25 + mouseX * 0.1;
  w = height/2 - 25 + mouseY * 0.1;
    ellipse(z,w,30,70)
  }


  //wave
  
 

  }
  
