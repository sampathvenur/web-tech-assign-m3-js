const frame = document.getElementById('myFrame');

frame.addEventListener('load', function () {
    addToOutput('Frame loaded!');
});

function addToOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}
