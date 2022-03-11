const container = document.getElementById('container');
let squareAmount = 0;

container.setAttribute('style', 'border: 5px solid black');

function createSquares() {
    for (let i = 1; i < 17; i++) {
        const squares = document.createElement('div');
        squares.setAttribute('id',`${i}`);
        squares.setAttribute('style', 'background: white; border: 5px solid blue; height: 50px; width: 50px');
        container.appendChild(squares);
    }
    if (i = 16) {
        squareAmount = i;
    }
}

function moveSquares() {
    let squareRoot = Math.sqrt(`${squareAmount}`);
    console.log(`${squareRoot}`);
}

createSquares();
moveSquares();

