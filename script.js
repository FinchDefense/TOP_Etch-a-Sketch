const createSquare = () => {
    let square = document.createElement("div");
    square.classList.add('square');
    document.body.appendChild(square);

    return square;
}

for (let i=0; i<256; i++) {
    createSquare();
}