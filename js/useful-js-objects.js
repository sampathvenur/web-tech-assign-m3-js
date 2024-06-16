function showArray() {
    const fruits = ["Apple", "Banana", "Cherry"];
    document.getElementById('output').textContent = `Array: ${fruits.join(", ")}`;
}

function showBoolean() {
    const isJavaScriptFun = true;
    document.getElementById('output').textContent = `Boolean: JavaScript is fun - ${isJavaScriptFun}`;
}

function showDate() {
    const currentDate = new Date();
    document.getElementById('output').textContent = `Date: ${currentDate.toDateString()}`;
}

function showMath() {
    const randomNumber = Math.random();
    document.getElementById('output').textContent = `Math: Random Number - ${randomNumber.toFixed(2)}`;
}

function showString() {
    const message = "Hello, World!";
    document.getElementById('output').textContent = `String: ${message} - Length: ${message.length}`;
}

function manipulateDOM() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = "DOM Manipulated!";
    outputDiv.style.color = "blue";
    outputDiv.style.fontSize = "20px";
}
