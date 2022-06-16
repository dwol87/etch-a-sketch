const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
};

function newGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
};

makeRows(64, 64)

let gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((row) => {
    row.addEventListener('mouseover', event => {
        row.style.background = 'black'
    })
});

let button = document.getElementById("button");
button.addEventListener("click", function(event) {
    let userChoice = prompt("Choose grid size")
    
});


