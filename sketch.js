let stars = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-2");
  canvas.style("position", "fixed");
  noCursor(); 


  for (let i = 0; i < 300; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      baseSize: random(2, 4),     
      pulseSpeed: random(0.01, 0.03),
      offset: random(999)
    });
  }
}

function draw() {
  clear();


  noStroke();
  for (let s of stars) {
    let pulse = sin(frameCount * s.pulseSpeed + s.offset) * 0.5 + 0.5;
    let brightness = map(pulse, 0, 1, 80, 255);
    let size = s.baseSize + pulse * 2.0; //  más pulso

    fill(255, brightness);
    circle(s.x, s.y, size);
  }


  let haloX = mouseX;
  let haloY = mouseY;

 
  noFill();
  strokeWeight(3);
  stroke(255, 0, 200, 160);
  circle(haloX, haloY, 25);

 
  stroke(0, 255, 255, 160);
  circle(haloX, haloY, 12);


  noStroke();
  fill(255, 0, 200, 60);
  circle(haloX, haloY, 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
