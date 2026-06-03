let gridContainer = document.querySelector("#grid-container");

const SQUARE_SIZE_PX = 32;

function createGrid(squaresPerSide) {
    // squaresPerSide should be greater than 0 and less or equal 100
    squaresPerSide = (squaresPerSide < 1) 
                     ? 1 : (squaresPerSide > 100) 
                     ? 100 : squaresPerSide

    let width = SQUARE_SIZE_PX * squaresPerSide;
    gridContainer.style.width = width + "px";

    let squaresCount = squaresPerSide * squaresPerSide;

    for (let i = 0; i < squaresCount; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
    
    let squares = document.querySelectorAll(".square");
    
    squares.forEach(square => square.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "gray";
    }));

    return squares;
}

let squares = createGrid(16);
