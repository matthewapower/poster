var img;
var bg;
var input;
var button;

function setup() {
  var c = createCanvas(612, 792);
  background('pink');
  bg = loadImage('images/template.png');
  c.drop(gotFile);
  input = createFileInput(gotFile);
  input.position(35, 35);
  button = createButton('save');
  button.position(35, 55);
  button.mousePressed(saveCanvas);
}

function draw() {
  if (img) {
    image(img, 189, 71, 360, 360);
  } else {
    text('Drag an image file onto the canvas.', width>>1, height>>1);
  }
  image(bg, 0, 0, 613, 794);
  rect(mouseX, mouseY, 1, 1);
}

function gotFile(f) {
  if (f.type === 'image') {
    img = loadImage(f.data, redraw);
  } else {
    print(`"${f.name}" isn't an image file!`);
  }
}
