const createSquare = (index) => {
    const square = document.createElement("div");
    square.classList.add('square');
    square.textContent = index + 1;

    return square;
}