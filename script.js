const container = document.createElement("div");
container.classList.add('fragment');
document.body.appendChild(container);

const button = document.createElement("button");
button.textContent = "NEW GRID";
button.style.color = getRandomRgbColor();
button.style.backgroundColor = getRandomRgbColor();
document.body.insertBefore(button, container); // Insert button before container

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}

const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add('square');
    return square;
}

function newGrid(sps = 16) {
    container.replaceChildren(); // clear out the container

    const square_size = 40 / sps; // Each square takes up 1 / sps of the grid width (50 vw)

    for (let i=0; i < sps * sps; i++) {
        const square = createSquare();
        square.style.width = `${square_size}vw`;
        square.style.aspectRatio = "1 / 1";

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = getRandomRgbColor();
            })

        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = getRandomRgbColor();
        })

        container.appendChild(square);
    }
}

function promptMe() {
    return prompt("Number of squares per side(max 100): ");
}

newGrid(16); // Have a grid ready as soon as web page loads

button.addEventListener('click', () => {
    let sps = -1; // So that it will run the first iteration 
    while (isNaN(sps) || +sps > 100 || +sps < 1) {
        sps = promptMe();
        if (sps === null) return;
    }

    newGrid(+sps); // Because sps is a string, we have to convert to a number
    }
)




