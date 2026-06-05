let gridContainer = document.querySelector("#grid-container");
let changeSizeBtn = document.querySelector("#change-size");
let randomColorBtn = document.querySelector("#random-color");
let shakeBtn = document.querySelector("#shake");

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
        if (randomColor) {
            event.target.style.backgroundColor = getRandomRgb();
        } else {
            event.target.style.backgroundColor = "black";
        }

        let opacity = +event.target.style.opacity;
        if (opacity < 1) {
            event.target.style.opacity = opacity + 0.1;
        }
    }));

    return squares;
}

function deleteGrid(squares) {
    squares.forEach(s => s.remove());
}

function clearGrid(squares) {
    squares.forEach(s => { 
        s.style.backgroundColor = "";
        s.style.opacity = "";
    });
}

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

let squares = createGrid(16);

let randomColor = false;

changeSizeBtn.addEventListener("click", () => {
    var squaresPerSide = +prompt("New grid size (should be greater than 0 and less or equal 100): ");

    deleteGrid(squares);
    squares = createGrid(squaresPerSide);
});

randomColorBtn.addEventListener("click", () => {
    if (randomColor === false) {
        randomColorBtn.textContent = "Random Color: ON";
        randomColor = true;
    } else {
        randomColorBtn.textContent = "Random Color: OFF";
        randomColor = false;
    }
});

shakeBtn.addEventListener("click", () => clearGrid(squares));