let showText = false;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Change the background color based on whether the L key is pressed
  if (showText) {
    background(random(255), random(255), random(255));
  } else {
    background("hotpink");
  }

  // Change color of the circle based on vertical mouse position
  let startingColor = color("red");
  let endingColor = color("pink");
  let pct = map(mouseY, 0, height, 0, 1, true);
  let clr = lerpColor(startingColor, endingColor, pct);
  fill(clr);
  noStroke();

  // Draw a circle, with size based on horizontal mouse position
  let d = map(mouseX, 0, width, 50, 300, true);

  // Draw the heart shape
  heart(width / 2, height / 2 - 50, d);
  console.log(d);

  // Show "✨LOVE✨" if the L key is pressed
  if (showText) {
    fill(255);
    textSize(73);
    textAlign(CENTER, CENTER);
    text("✨LOVE✨", width / 2, height / 2);
  }
}

// Function to draw a heart shape
function heart(x, y, size) {
  beginShape();
  let scaleFactor = size / 50;
  vertex(x, y);
  bezierVertex(x - 25 * scaleFactor, y - 25 * scaleFactor, x - 50 * scaleFactor, y + 10 * scaleFactor, x, y + 50 * scaleFactor);
  bezierVertex(x + 50 * scaleFactor, y + 10 * scaleFactor, x + 25 * scaleFactor, y - 25 * scaleFactor, x, y);
  endShape(CLOSE);
}

// Detect the L key being pressed
function keyPressed() {
  if (key === 'L' || key === 'l') {
    showText = true;
  }
}

// Hide the text when the key is released
function keyReleased() {
  if (key === 'L' || key === 'l') {
    showText = false;
  }
}
