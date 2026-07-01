const createSquare = (index) => {
    let square = document.createElement("div");
    square.classList.add('square');
    square.textContent = index + 1;

    return square;
}

for (let i=0; i<256; i++) {
    document.body.appendChild(createSquare(i));
}