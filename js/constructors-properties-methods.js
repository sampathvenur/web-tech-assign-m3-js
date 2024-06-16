function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.displayInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

const myCar = new Car('Toyota', 'Corolla', 2020);

function displayCarInfo() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = myCar.displayInfo();
}
