const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

let canvasSize;
let elementSize;

const playerPosition = {
    x: undefined,
    y: undefined,
}



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

    game.font = (elementSize - 10) + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''))
    console.log(map, mapRows, mapRowCols);

    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCols.forEach((row, rowI )=> {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            let posX = elementSize * (colI + 1);
            let posY = elementSize * (rowI + 0.8);

            if (col == 'O') {
                playerPosition.x = posX;
                playerPosition.y = posY;
                console.log({playerPosition});
            }
            game.fillText(emoji, posX, posY);
        });
    });
    // for (let x = 1; x <= 10; x++) {
    //     for (let y = 1; y <= 10; y++) {
    //         let posX = elementSize * x + 10 ;
    //         let posY = elementSize * y ;
    //         game.fillText(emojis[mapRowCols[x - 1][y -1]],posX, posY);
    //     }
    // }
    movePlayer();
}
function movePlayer() {
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keydown', moveByKeys);
    btnUp.addEventListener('click', moveUp);
    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
    btnDown.addEventListener('click', moveDown);


    function moveByKeys(event) {
        switch(event.key) {
            case 'ArrowUp':
                moveUp();
                break;
            case 'ArrowDown':
                moveDown();
                break;
            case 'ArrowRight':
                moveRight();
                break;
            case 'ArrowLeft':
                moveLeft();
                break;
            default:
                // Manejar otras teclas si es necesario
                break;
        }
    }

    function moveUp() {
        console.log('Mueve hacia arriba');
        playerPosition.y -= elementSize;
        movePlayer();
    };
    function moveLeft() {
        console.log('Mueve hacia la izquierda');
    };
    function moveRight() {
        console.log('Mueve hacia la derecha');
    };
    function moveDown() {
        console.log('Mueve hacia abajo');
    }