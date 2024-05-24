function setup() {
  createCanvas(1200, 500);
  background("violet")
}

function draw() {
  fill("purple");
  stroke("lightblue");
  
  if (mouseIsPressed){
    circle(mouseX,mouseY,50);
  }
}
