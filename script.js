const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d"); //draw on the canvas / "2d" specifies that you want a 2D drawing context
// console.log(ctx);
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";
let x = 0;
// function animate() {
//   ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//   ctx.fillRect(50, x, 100, 100);
//   ctx.fillRect(x, 50, 100, 100);
//   x++;
//   requestAnimationFrame(animate);
// }
// animate();
const spritewidth = 575;
const spriteheight = 523;
let frameX = 0;
let frameY = 5;
let gameframe = 0;
let staggerframe = 5;
const spriteanimations = [];
const animationstates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
];
animationstates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spritewidth;
    let positionY = index * spriteheight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteanimations[state.name] = frames;
});
console.log(spriteanimations);
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameframe / staggerframe) % 6;
  frameX = spritewidth * position;
  //   ctx.drawImage(image, rect area to cut out/sx,sy , src width, src height, destination croped out part/ dx , dy ,dw,dh)
  ctx.drawImage(
    playerImage, // Source image
    frameX, // sx (Crop X start position)
    frameY * spriteheight, // sy (Crop Y start position)
    spritewidth, // sw (Crop width)
    spriteheight, // sh (Crop height)
    0, // dx (Draw X position)
    0, // dy (Draw Y position)
    spritewidth, // dw (Draw width)
    spriteheight // dh (Draw height)
  );
  //   if (gameframe % staggerframe == 0) {
  //     if (frameX < 9) frameX++;
  //     else frameX = 0;
  //   }
  gameframe++;
  requestAnimationFrame(animate);

animate();
