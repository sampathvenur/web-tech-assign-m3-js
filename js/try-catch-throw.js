function validateInput() {
    let input = prompt("Enter a number between 1 and 10:");

    try {
        if (input === null || input === "") {
            throw "Input is empty";
        }

        input = Number(input);

        if (isNaN(input)) {
            throw "Input is not a number";
        }

        if (input < 1 || input > 10) {
            throw "Input is out of range";
        }

        alert("Valid input: " + input);
        document.getElementById("error-message").textContent = "";
    } catch (error) {
        document.getElementById("error-message").textContent = "Error: " + error;
    }
}