function handleSubmit(event) {
    event.preventDefault();
    addToOutput('Form Submitted!');
}

function handleReset(event) {
    addToOutput('Form Reset!');
}

function handleFocus(event) {
    addToOutput(`Input Focused: ${event.target.id}`);
}

function handleBlur(event) {
    addToOutput(`Input Blurred: ${event.target.id}`);
}

function handleChange(event) {
    addToOutput(`Input Changed: ${event.target.id} - New Value: ${event.target.value}`);
}

function handleInput(event) {
    addToOutput(`Input: ${event.target.id} - Current Value: ${event.target.value}`);
}

function addToOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

document.getElementById('name').addEventListener('focus', handleFocus);
document.getElementById('email').addEventListener('focus', handleFocus);
document.getElementById('message').addEventListener('focus', handleFocus);
document.getElementById('country').addEventListener('change', handleChange);

document.getElementById('name').addEventListener('blur', handleBlur);
document.getElementById('email').addEventListener('blur', handleBlur);
document.getElementById('message').addEventListener('blur', handleBlur);

document.getElementById('name').addEventListener('input', handleInput);
document.getElementById('email').addEventListener('input', handleInput);
document.getElementById('message').addEventListener('input', handleInput);
