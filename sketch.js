var backColor = 255

function setup() {
  createCanvas(500,500);
}

function draw() {
 
  fill(backColor);
  stroke('#fae');
  rect(100, 150, 100, 50, 20, 20);

  //text
  fill(255);
  noStroke();
  textSize(20);
  text("Suprise!", 115, 180);
}

function mousePressed(){
  backColor = '#fae';
  console.log("click!");
}

function mouseReleased(){
  backColor = 255;
}