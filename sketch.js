var input;
var img;
var bg;

function setup() {
  var c = createCanvas(612, 792);
  background('pink');
  bg = loadImage('images/template.png');
  // uploadImg = loadImage('images/bauhaus.png');
  input = createFileInput(handleFile);
  input.position(35, 35);
}

function draw() {
  // image(uploadImg, 189, 71, 360, 360);
  // image(img, 0, 0, 613, 794);
  // image(bg, 0, 0, width, height);
  rect(mouseX, mouseY, 1, 1);
}

function handleFile(file) {
  print(file);
  if (file.type == 'image') {
    img = createImg(file.data).addClass('lit');
    img.hide();
    image(img, 0, 0, width, height);
  }
}
