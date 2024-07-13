let promptBtn = document.querySelector('.prompt-btn');

promptBtn.addEventListener('click', () => {
    let resolution = 0;
    while (resolution <= 0 || resolution > 100) {
        resolution = prompt("Enter number of squares per side (1- 100): ", "32");
    }
    createGrid(resolution)
});

function rgbValues() {
    let redValue = Math.random() * 255;
    let greenValue = Math.random() * 255;
    let blueValue = Math.random() * 255;

    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

let containerDiv = document.querySelector('.container');

let randomBtn = document.querySelector('.random-btn');
let isRandomColors = false;
let clicked = false;
randomBtn.textContent = "Rainbows off"
randomBtn.addEventListener('click', () => {
    isRandomColors = !isRandomColors;
    clicked = !clicked
    if (clicked == true) {
        randomBtn.textContent = "Rainbows on";
    } else {
        randomBtn.textContent = "Rainbows off";
    }
})

function createGrid(resolution) {
    containerDiv.innerHTML = '';
    const squareSize = 640 / resolution;

    for (let i = 0; i < (resolution * resolution); i++) {
        const square = document.createElement("div");
        square.classList.add('square');

        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.addEventListener('mouseenter', () => {
            if (isRandomColors) {
                square.style.backgroundColor = rgbValues();
            } else {
                square.style.backgroundColor = "red";
            }
        });

        containerDiv.appendChild(square);
    }
}
