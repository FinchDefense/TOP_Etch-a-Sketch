const createSquare = () => {
    const square = document.createElement("div");
    square.classList.add('square');

    return square;
}

const fragment = document.createDocumentFragment();

for (let i=0; i<256; i++) {
    const newSquare = createSquare();
    fragment.appendChild(newSquare);
}

document.body.appendChild(fragment);