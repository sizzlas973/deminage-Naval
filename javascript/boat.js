//const canvas = document.getElementById("canvas");
//const ctx    = canvas.getContext("2d");
//ctx.fillStyle = 'white';
//ctx.font = '18px serif';

class Boat {
  constructor() {
    this.x = 0;
    this.y = 0;
    
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
  }
  moveUp() {
    this.y -= 1;
  }
  moveDown() {
    this.y += 1; 
  }
  moveLeft() {
    this.x -= 1;
  }
  moveRight() {
    this.x += 1;
  }
  draw() {
    ctx.drawImage(this.img, this.x * W / 6, this.y * H / 6, 50, 50);
  }
}

/*
const boat = new Boat();
console.log("damn");
document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38: boat.moveUp();    console.log('up',    boat); break;
    case 40: boat.moveDown();  console.log('down',  boat); break;
    case 37: boat.moveLeft();  console.log('left',  boat); break;
    case 39: boat.moveRight(); console.log('right', boat); break;
  }
  updateCanvas();
})

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("Boat_x: " + boat.x, 580,40);
  ctx.fillText("Boat_y: " + boat.y, 580,60);
  
  boat.draw()
}

updateCanvas()
*/