const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add('square');
    return square;
}

function promptMe() {
    return prompt("Number of squares per side(max 100): ");
}

const button = document.createElement("button");
button.textContent = "NEW GRID";
button.addEventListener('click', () => {
    let sps = null;

    }
)

document.body.appendChild(button);

const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const newSquare = createSquare();
    fragment.appendChild(newSquare);
}

const container = document.createElement("div");
container.classList.add('fragment');
container.appendChild(fragment);  

document.body.appendChild(container);