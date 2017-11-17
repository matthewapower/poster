var img;
var bg;
var input;
var button;
var swag;

function setup() {
  var c = createCanvas(612, 792);
  c.drop(gotFile);
  input = createFileInput(gotFile);
  input.position(35, 35);
  button = createButton('save');
  button.position(35, 55);
  button.mousePressed(saveCanvas);
  bg = loadImage('images/template.png', function(bg){
    image(bg, 0, 0, 613, 794);
  });
}

function draw() {
}

function processImg(upload) {
  $(function(){
    $(upload).duotone({ gradientMap: '#df343c, #ececec' });
    img = $(upload).attr('src');

    loadImage(img, function(img){
      image(img, 189, 71, 360, 360);
    });
  });
}

function gotFile(f) {
  if (f.type === 'image') {
    var size = f.size;
    img = createImg(f.data).addClass(size);
    processImg('.' + size);
  } else {
    print(`"${f.name}" isn't an image file!`);
  }
}

function mouseDragged() {
	strokeWeight(5);
  stroke('#df343c');
	line(mouseX, mouseY, pmouseX, pmouseY);
}
