const container = document.createElement("div");
container.classList.add('fragment');
document.body.appendChild(container);

const button = document.createElement("button");
button.textContent = "NEW GRID";


const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add('square');
    return square;
}

newGrid(256);

function promptMe() {
    return prompt("Number of squares per side(max 100): ");
}


button.addEventListener('click', () => {
    let sps = -1;
    while (isNaN(sps) || +sps > 100 || +sps < 0) {
        sps = promptMe();
        if (sps === null) return;
    }

    newGrid(+sps);
    }
)

document.body.appendChild(button);

function newGrid(sps = 256) {
    const fragment = document.createDocumentFragment();
    container.replaceChildren();

    for (let i = 0; i < sps; i++) {
        const newSquare = createSquare();
        fragment.appendChild(newSquare);
    }

    const elements = document.querySelectorAll;
    elements.forEach(element => {
        element.style.width = `$(100 / +sps)vw`;
        element.style.aspectRatio = '1 / 1';
    })


    container.appendChild(fragment);
}