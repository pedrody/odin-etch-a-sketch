let gridContainer = document.querySelector("#grid-container");

const SQUARE_SIZE_PX = 32;
const SQUARES_COUNT = 16*16;

for (let i = 0; i < SQUARES_COUNT; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}

let squares = document.querySelectorAll(".square");

squares.forEach(square => square.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "gray";
}));