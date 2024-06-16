function createAndAppendElement() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Newly created div element';
    document.getElementById('output').appendChild(newDiv);
}

function createAndAppendAttribute() {
    const newLink = document.createElement('a');
    const newAttribute = document.createAttribute('href');
    newAttribute.value = 'https://example.com';
    newLink.setAttributeNode(newAttribute);
    newLink.textContent = 'Click me to visit Example';
    document.getElementById('output').appendChild(newLink);
}

function createAndAppendTextNode() {
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode('This is a new paragraph with text node.');
    newParagraph.appendChild(newText);
    document.getElementById('output').appendChild(newParagraph);
}

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
