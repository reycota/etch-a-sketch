function createGrid(size) {
    const container = document.getElementById(`container`);
    container.innerHTML = ``; // Clear previous grid

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement(`div`);
        div.classList.add(`grid-item`);
        container.appendChild(div);
    }
}

// Initial grid creation
createGrid(16);

// Add hover effect
document.getElementById(`container`).addEventListener(`mouseover`,function(e) {
    if (e.target.classList.contains(`grid-item`)) {
        e.target.style.backgroundColor = `black`;
    }
});

// Handle resize button click
document.getElementById(`resize-button`).addEventListener(`click`, function() {
    let size = parseInt(prompt(`Enter the number of squares per side for the new grid (maximum 100):`), 10);
    if (size > 100) size = 100; // Limit to 100
    createGrid(size);
});

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById(`container`).addEventListener(`mouseover` , function(e) {
    if (e.target.classList.contains(`grid-item`)) {
        e.target.style.backgroundColor = getRandomColor();
    }
});