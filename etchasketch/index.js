function gridMaker(n) {
    let container = document.getElementById('container');
    let gridString = 0;

    function setGridColumns() {
        const columns = [];
        for (let i = 0; i < n; i++) {
            columns.push('1fr');
        }
        gridString = columns.join(" ");
    }

    setGridColumns();

    container.setAttribute('style', `border: 5px solid black; display: inline-grid; grid-template-columns: ${gridString}`);

    function createSquares() {
        for (let i = 0; i < n * n; i++) {
            let squares = document.createElement('div');
            squares.setAttribute('id', `${i + 1}`);
            squares.setAttribute('class', 'gridCell');
            squares.setAttribute('style', 'background: white; height: 50px; width: 50px');
            squares.addEventListener('click', changeColor)
            container.appendChild(squares);
        }
    }

    createSquares();

    function changeColor(e) {
        e.target.style.backgroundColor = 'blue';
    }

}

gridMaker(30);