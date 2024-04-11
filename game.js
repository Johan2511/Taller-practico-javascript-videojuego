const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;



function setCanvasSize() {
    
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }
    
    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);
    
    elementSize = canvasSize / 10;
    
    startGame();
    
}


function startGame() {
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
    console.log({canvasSize, elementSize});;

    game.font = (elementSize - 2) + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[1];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''))
    console.log(map, mapRows, mapRowCols);


    mapRowCols.forEach((row, rowI )=> {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            let posX = elementSize * (rowI + 1);
            let posY = elementSize * (colI + 1);
            game.fillText(emoji, posY, posX);
        });
    });

    // for (let x = 1; x <= 10; x++) {
    //     for (let y = 1; y <= 10; y++) {
    //         let posX = elementSize * x + 10 ;
    //         let posY = elementSize * y ;
    //         game.fillText(emojis[mapRowCols[x - 1][y -1]],posX, posY);
    //     }
    // }
}