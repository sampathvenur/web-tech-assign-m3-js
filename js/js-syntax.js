function variablesAndAssignment() {
    let message = "Hello, World!";
    const pi = 3.14159;

    let a = 5;
    let b = 10;
    let sum = a + b;

    alert("Message: " + message);
    alert("Pi: " + pi);
    alert("Sum of " + a + " and " + b + " is " + sum);
}

function conditionals() {
    let age = prompt("Enter your age:");

    if (age >= 18) {
        alert("You are an adult.");
    } else if (age > 0) {
        alert("You are a minor.");
    } else {
        alert("Invalid age.");
    }
}

function loops() {
    let result = "Counting from 1 to 5: ";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }

    alert(result);
}

function arrays() {
    let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    let result = "Fruits in the array:\n";
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i] + "\n";
    }

    alert(result);
}
