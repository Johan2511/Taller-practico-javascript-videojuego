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

const giftPosition = {
    x: undefined,
    y: undefined,
}

let enemyPositions = [];



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
    console.log({canvasSize, elementSize});;

    game.font = (elementSize - 10) + 'px Verdana';
    game.textAlign = 'end';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''))
    console.log(map, mapRows, mapRowCols);

    enemyPositions = [];
    game.clearRect(0, 0, canvasSize, canvasSize);

    mapRowCols.forEach((row, rowI )=> {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            let posX = elementSize * (colI + 1);
            let posY = elementSize * (rowI + 0.8);

            if (col == 'O') {
                if (!playerPosition.x & !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    console.log({playerPosition});
                }
            } else if (col == 'I') {
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if (col == 'X') {
                enemyPositions.push({
                    x: posX,
                    y: posY,
                })
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
const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);;
const giftCollision = giftCollisionX && giftCollisionY;


    if (giftCollision){
        console.log('Subiste de nivel!');
    }

const enemyCollision = enemyPositions.find(enemy => {
    const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
    const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
    return enemyCollisionX && enemyCollisionY;
    
});
if (enemyCollision) {
    console.log('Chocaste con un enemigo');
}

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
        if ((playerPosition.y - elementSize) < elementSize) {
            console.log('OUT');
        } else {
            playerPosition.y -= elementSize;
            startGame();
        }
    };
    function moveLeft() {
        console.log('Mueve hacia la izquierda');
        if ((playerPosition.x - elementSize) < elementSize) {
            console.log('OUT');
        } else {
            playerPosition.x -= elementSize;
            startGame();
        }
    };
    function moveRight() {
        console.log('Mueve hacia la derecha');
        if ((playerPosition.x + elementSize) > canvasSize) {
            console.log('OUT');
        } else {
            playerPosition.x += elementSize;
            startGame();
        }
    };
    function moveDown() {
        console.log('Mueve hacia abajo');
        if ((playerPosition.y + elementSize) > canvasSize) {
            console.log('OUT');
        } else {
            playerPosition.y += elementSize;
            startGame();
        }
    }