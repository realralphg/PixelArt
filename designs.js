
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}


function makeGrid() {
    const gridHeight = document.getElementById("input_height").value;
    const gridWidth = document.getElementById("input_width").value;
    const pixelCanvas = document.getElementById("pixel_canvas"); 
    pixelCanvas.innerText="";
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); // insert new row at the end
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); //insert new cell at end
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}