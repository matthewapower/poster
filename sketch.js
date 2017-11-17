var img;
var bg;
var input;
var button;
var textInput;
var userText;

function setup() {
  var c = createCanvas(612, 792);
  c.drop(gotFile);
  input = createFileInput(gotFile);
  input.position(35, 35);
  button = createButton('save');
  button.position(35, 55);
  button.mousePressed(saveCanvas);
  textInput = createInput();
  textInput.position(35, 75);
  textInput.changed(addText);
  userText = false;
  background('#ececec');
  bg = loadImage('images/template.png', function(bg){
    image(bg, 0, 0, 613, 794);
  });
}

function draw() {
}

function processImg(upload, callback) {
  $(function(){
    $(upload).duotone({ gradientMap: '#df343c, #ececec' });
    callback(upload);
  });
}

function addImg(upload) {
  $(function(){
    var processedSrc;
    processedSrc = $(upload).attr('src');
    background('#ececec');
    loadImage(processedSrc, function(processedSrc){
      image(processedSrc, 189, 71, 360, 360);
    });
    loadImage('images/template.png', function(bg){
      image(bg, 0, 0, 613, 794);
    });
  });
}

function gotFile(f) {
  if (f.type === 'image') {
    var size = f.size;
    img = createImg(f.data).addClass(size).hide();
    processImg('.' + size, addImg);
  } else {
    print(`"${f.name}" isn't an image file!`);
  }
}

function mouseDragged() {
  if (userText === false ) {
    strokeWeight(5);
    stroke('#df343c');
  	line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseMoved() {
  if (textInput.value().length > 0) {
    userText.position(winMouseX, winMouseY);
  }
}

function mousePressed() {
  if (userText !== false ) {
    noStroke();
    textSize(45);
    text(userText.elt.textContent, mouseX, mouseY);
    userText = false;
    $('.user-text').remove();
  }
}

function addText() {
  noStroke();
  userText = createP(textInput.value()).addClass('user-text');
}
