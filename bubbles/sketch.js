let bubble = [];
let bubblecnt = 7;
class Bubbles {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    for (let i = 0; i < bubblecnt; i++) {
      bubble[i].x += random(-5, +5);
      bubble[i].y += random(-5, +5);
      if (bubble[i].x === 0) bubble[i].x += 300;
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    for (let i = 0; i < bubblecnt; i++)
      ellipse(bubble[i].x, bubble[i].y, bubble[i].r);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < bubblecnt; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}

for (let i = 0; i < bubblecnt; i++) bubble[i] = new Bubbles(200, 150, 40);
