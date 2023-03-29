
let canvas = document.querySelector('#tetris');
let scoreboard = document.querySelector('h2')
let ctx = canvas.getContext('2d');  // 2d Drawing Board
ctx.scale(30,30)


const SHAPES = [
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
    ],
    [
        [0,1,0],  
        [0,1,0],  
        [1,1,0]   
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,1]
    ],
    [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ],
    [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    [
        [1,1,1],
        [0,1,0],
        [0,0,0]
    ],
    [
        [1,1],
        [1,1],
    ]
]

const COLORS = [
    "#fff",
    "#9b5fe0",
    "#16a4d8",
    "#60dbe8",
    "#8bd346",
    "#efdf48",
    "#f9a52c",
    "#d64e12"
]

const ROWS = 20;
const COLS = 10;

let grid = generateGrid();
let fallingPieceObj = null;
let score = 0;

function generateRandomPiece(){
    let ran = Math.floor(Math.random() * 7); // The random function will get is a integer between 1 to 7, floor will
    let piece = SHAPES[ran];
    let colorIndex = ran + 1;
    let x = 4;
    let y = 0; 
    return {piece,colorIndex,x,y}
}

function renderPiece(){
    let piece = pieceObj.piece;
    for(let i=0; i<piece.length; i++){
        for(let j=0; j<piece[i].length; j++){
            if(piece[i][j] == 1){
                ctx.fillStyle = COLORS[pieceObj.colorIndex];
                ctx.fillRect(pieceObj.x+j,i,1,1)
            }
        }
    }
}



let pieceObj = generateRandomPiece();

console.log(generateRandomPiece());
renderPiece()