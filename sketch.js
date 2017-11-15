var img;

function setup() {
  createCanvas(612, 792);
  background('white');

  img = loadImage('images/template.png');
}

function draw() {
  var uploadImg = loadImage('images/bauhaus.png');
  image(img, 0, 0, 613, 794);
  image(uploadImg, 40, 40, 50, 50);

}
