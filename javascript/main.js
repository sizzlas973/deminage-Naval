let boat ;
let gameover;
let raf;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

const mines = [
    [0, 0],
    [5, 0],
    [1, 1],
    [2, 1],
    [4, 1],
    [5, 2],
    [1, 3],
    [3, 3],
    [0, 4],
    [5, 4],
    [1, 5],
    [3, 5],
]


const longSide = W / 6
const shortSide = H / 6
const diffBetweenLongSideAndShortSide = longSide - shortSide


function draw() {

    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < 6; j++) {
            // Trace des cases
            ctx.fillStyle = 'blue';
            ctx.fillRect(j * (W / 6), i * (H / 6), (W / 6),  (H / 6))
            ctx.strokeRect(j * (W / 6), i * (H / 6), (W / 6),  (H / 6));
            
            mines.forEach( (coords) => {
      
                if( j === coords[0] && i === coords[1]){

    
                    const radius = shortSide / 2; 
                    const startAngle = 0;
                    const endAngle = Math.PI*2; 
                    ctx.fillStyle = '#FF0000';
                    ctx.beginPath();
                    ctx.arc(j*(W / 6) + radius + diffBetweenLongSideAndShortSide/2 , i*(H / 6) + radius, radius, startAngle, endAngle);
                    ctx.stroke();
                    ctx.fill();
                    
                }   
            })
           
                }

    }
           
    boat.draw()
}
            
           // ctx.arc(150, 170, 35, 0, Math.PI * 2);
            //ctx.fillStyle = 'red';
            // trace les mines
            // suis-je sur une coord i,j correspondant a une mine 
            //si oui j'affiche un cercle 
            //si non rien 
 // calculer les nouvelle coordonnée de ton bateau
// si UP:
 // x, y-1
// si DOWN:
 // x, y+1
// si LEFT
 // x+1, y
// si RIGHT
 // x-1, y

document.addEventListener('keydown', e => {
    if(e.keyCode === 38){
        // calculer les nouvelle coordonnée de ton bateau
        // vérifier si les nouvelle coordonnée du bateau est égale aux coordonées d'une mine
        // si oui, gameover = false
        // sinon (else) dessine-moi le bateau
        boat.moveUp();
        console.log('up', boat); 
    } else if(e.keyCode === 40){
        // calculer les nouvelle coordonnée de ton bateau
        // vérifier si les nouvelle coordonnée du bateau est égale aux coordonées d'une mine
        // si oui, gameover = false
        boat.moveDown();
        console.log('down',  boat);   
    }else if(e.keyCode === 37){
        boat.moveLeft();
        console.log('left',  boat); 
    }else if(e.keyCode === 39){
        boat.moveRight()
        console.log('right', boat); 
    }
    /*
    switch (e.keyCode) {
        case 38: 
            boat.moveUp();    
            console.log('up', boat); 
            break;
        case 40: 
            boat.moveDown();  
            console.log('down',  boat); 
            break;
        case 37: 
            boat.moveLeft();  
            console.log('left',  boat); 
            break;
        case 39: 
            boat.moveRight(); 
            console.log('right', boat); 
            break;
    }
    */
    
    draw()
    })

let frames = 0;
function animLoop() {
    frames++;

    draw();

    if (!gameover) {
    raf = requestAnimationFrame(animLoop);
    }

    if(gameover){
        //dessin moi booom!
    }
}


function startGame() {
    if (raf) {
        cancelAnimationFrame(raf);
    }
    
    gameover = false;
    
    
    boat = new Boat();
   // obstacles = [];
    
    raf = requestAnimationFrame(animLoop);
}
//draw() 
startGame()
