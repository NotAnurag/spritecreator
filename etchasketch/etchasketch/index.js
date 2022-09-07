let currentColor = 'black';
let centerGrid = document.getElementById('center');
let totalSquares = 0;

/*Adds event listeners to the color selection buttons and the Clear Board button. 
Also has the chooseColor function which changes the current color. 
There is no dedicated button for white (same button as eraser) and it might have to be changed if I add a better color selection system. */
function makeColorButtons() {
    function chooseColor(c) {
        currentColor = `${c.target.innerText.toLowerCase()}`;
        console.log(currentColor);
        if (currentColor == 'eraser') {
            currentColor = 'white';
        }
        if (currentColor == 'clear board') {
            clearBoard();
        }
    }

    let colorButtons = document.querySelectorAll('.color');
    colorButtons.forEach(button => {
        button.addEventListener('click', chooseColor)
    })
}

/* Makes the grid that the user draws on. 
Takes input (n) and outputs a white grid with (n^2) number of squares.
May have to be changed if I allow the user to set up their own dimensions/cell size. */
function makeGrid(n) {
    totalSquares = n*n
    let container = document.getElementById('container');
    centerGrid.appendChild(container);
    let gridString = 0;

    //Had to use a for loop to create a string of repeating "1fr" which adjusts to the grid size. There is probably a better way to do this. 
    function setGridColumns() {
        const columns = [];
        for (let i = 0; i < n; i++) {
            columns.push('1fr');
        }
        gridString = columns.join(" ");
    }

    setGridColumns();

    container.setAttribute('style', `border: 5px solid black; display: inline-grid; grid-template-columns: ${gridString}`);

    //Simple for loop that creates grid cells and gives each of the the adequate properties to function. Probably does not need to be changed, besides replacing the 'dragenter' event listener
    function createSquares() {
        for (let i = 0; i < n*n; i++) {
            let squares = document.createElement('div');
            squares.setAttribute('id', `${i + 1}`);
            squares.setAttribute('class', 'gridCell');
            squares.setAttribute('style', 'background: white; height: 20px; width: 20px; display: inline-block');
            squares.addEventListener('dragenter', changeColor);
            squares.addEventListener('click', changeColor);
            container.appendChild(squares);
        }
    }

    createSquares();

    //Changes the currentColor variable that the makeColorButtons function uses
    function changeColor(c) {
        c.target.style.backgroundColor = currentColor;
    }

}

//Clears the board. Probably doesn't need to be changed
function clearBoard() {
    for(let i = 0; i < totalSquares; i++) {
        document.getElementById(`${i+1}`).style.backgroundColor = 'white';
    }
}

document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.querySelector('#container')).then(function (canvas) {
        saveAs(canvas.toDataURL(), 'sprite.png');
    });
});

//Uses the html2canvas library in order to download a copy of the image. Probably doesn't need to be changed.
function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

makeGrid(50);
makeColorButtons();







