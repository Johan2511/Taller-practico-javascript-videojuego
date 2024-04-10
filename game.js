const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;



function setCanvasSize() {
    
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.75;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementSize = canvasSize / 10;
    
    startGame();
    
}

// window.innerHeight
// window.innerWidth 

// game.fillRect(0, 50, 100, 100);
// game.clearRect(0, 50, 50, 50);
// game.clearRect(0, 0, 50, 50);
// game.clearRect(0, 0, 50, 50);

// game.font = '25px verdana';
// game.fillStyle = 'purple';
// game.textAlign = 'end';
// game.fillText('Platzi', 50, 50)

function startGame() {
    console.log({canvasSize, elementSize});;

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'],elementSize * i, elementSize);
        
    }
}