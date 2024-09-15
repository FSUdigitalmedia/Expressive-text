let showText = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // if the L key is pressed the background colors will change
  if (showText) {
    background(random(255), random(255), random(255))
  } else {
  background("hotpink");
  }

  // change color based on vertical mouse pos.

  let startingColor = color("red");
  let endingColor = color("pink");
  let pct = map(mouseY, 0, height, 0, 1, true);
  let clr = lerpColor(startingColor, endingColor, pct);
  fill(clr);
  noStroke();

  // draw circle, with the size based on horizontal mouse pos.
  let d = map(mouseX, 0, width, 50, 300, true);

  // set shape to heart
  heart(width/2, height/ 2 - 50, d);
  console.log(d);

  // show "XOXO" if the L key is pressed
  if (showText) {
    fill(255);
    textSize(73);
    textAlign(CENTER, CENTER);
    text("✨XOXO✨", width / 2, height / 2) ; // xoxo will be at center 

  }
}

  // draw heart shape
  function heart(x, y, size) {
  beginShape();
  let scaleFactor = size / 50; 
  vertex(x,y);
  bezierVertex(x - 25 * scaleFactor, y - 25 * scaleFactor, x - 50 * scaleFactor, y + 10 * scaleFactor, x, y + 50 * scaleFactor);
  bezierVertex(x + 50 * scaleFactor, y + 10 * scaleFactor, x + 25 * scaleFactor, y - 25 * scaleFactor, x, y);
  endShape(CLOSE);
  }

  // detect the L key being pressed 
  function keyPressed() {
    if (key === 'L' || key ==='l') {
      showText = true;
    }
  }

  // hide xoxo when key is released 
  function keyReleased() {
    if (key === 'L' || key === 'l') {
      showText = false;
    }
  }