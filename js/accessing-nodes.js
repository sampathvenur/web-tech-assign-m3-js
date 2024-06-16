function getElementByIdExample() {
    const element = document.getElementById('output');
    element.textContent = 'Element found by ID: ' + element.id;
}

function getElementsByTagNameExample() {
    const elements = document.getElementsByTagName('button');
    let outputText = 'Buttons found by Tag Name:\n';
    for (let i = 0; i < elements.length; i++) {
        outputText += `- ${elements[i].textContent}\n`;
    }
    document.getElementById('output').textContent = outputText;
}
