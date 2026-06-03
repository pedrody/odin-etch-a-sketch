// TODO:
// the grid should occupy the same space no matter how many squares was inputted;
// add button to clear the grid (shake);
// change the way of how the grid width is calculated, should be a fixed width
// 

let gridContainer = document.querySelector("#grid-container");
let changeSizeBtn = document.querySelector("#change-size");

const CONTAINER_GRID_SIZE_PX = 512;

function createGrid(squaresPerSide) {
    // squaresPerSide should be greater than 0 and less or equal 100
    squaresPerSide = (squaresPerSide < 1) 
                     ? 1 : (squaresPerSide > 100) 
                     ? 100 : squaresPerSide

    let squareSize = CONTAINER_GRID_SIZE_PX / squaresPerSide;
    gridContainer.style.width = CONTAINER_GRID_SIZE_PX + "px";

    let squaresCount = squaresPerSide * squaresPerSide;

    for (let i = 0; i < squaresCount; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        gridContainer.appendChild(square);
    }
    
    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => square.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "gray";
    }));

    return squares;
}

function deleteGrid(squares) {
    squares.forEach(s => s.remove());
}

function clearGrid(squares) {
    squares.forEach(s => s.style.backgroundColor = "white");
}

let squares = createGrid(16);

changeSizeBtn.addEventListener("click", () => {
    var squaresPerSide = +prompt("New grid size (should be greater than 0 and less or equal 100): ");

    deleteGrid(squares);
    squares = createGrid(squaresPerSide);
});
