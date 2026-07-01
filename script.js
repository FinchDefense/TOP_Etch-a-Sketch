const container = document.createElement("div");
container.classList.add('fragment');
document.body.appendChild(container);

const button = document.createElement("button");
button.textContent = "NEW GRID";
document.body.insertBefore(button, container);


const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add('square');
    return square;
}

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



function newGrid(sps = 256) {
    const fragment = document.createDocumentFragment();
    container.replaceChildren();

    for (let i = 0; i < sps; i++) {
        const newSquare = createSquare();
        fragment.appendChild(newSquare);
    }

    container.appendChild(fragment);
}