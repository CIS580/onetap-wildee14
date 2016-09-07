var image = new Image();

var x = 380;
var y = 480;
image.onload = function () {
  y = y - image.height;
  x = x - image.width/8;
}
image.src = 'assets/link/not%20link/notlink%down.png';


export function init() {

}
export function update(elapsedTime, ctx) {

}
export function render(elapsedTime, ctx) {
  ctx.drawImage(image, x, y, 64, 64, 0, 0, image.width/4, image.height);
}
