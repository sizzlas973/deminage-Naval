

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
    ctx.fillRect(x, y, width, height)
    ctx.fillStyle = 'black';
    ctx.strokeRect(x, y, width, height)
    ctx.clearRect(x, y, width,height)
}