document.addEventListener('keydown', function (event) {
    addToOutput(`Key Down: Key Code ${event.keyCode}`);
});

document.addEventListener('keypress', function (event) {
    addToOutput(`Key Pressed: Key Code ${event.keyCode}`);
});

document.addEventListener('keyup', function (event) {
    addToOutput(`Key Up: Key Code ${event.keyCode}`);
});

function addToOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
