function handleClick() {
    addToOutput('Clicked!');
}

function handleDoubleClick() {
    addToOutput('Double Clicked!');
}

function handleMouseDown() {
    addToOutput('Mouse Down!');
}

function handleMouseUp() {
    addToOutput('Mouse Up!');
}

function handleMouseOver() {
    addToOutput('Mouse Over!');
}

function handleMouseOut() {
    addToOutput('Mouse Out!');
}

function handleMouseMove() {
    addToOutput('Mouse Move!');
}

function addToOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
}
