// Get the input field
var screen = document.getElementById("screen");
var buttons = document.querySelectorAll('button');
// val="";
// // Function to add numbers and operators to the screen
function addToScreen(value) {
    var screen = document.getElementById("screen");

    console.log(screen);
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    var screen = document.getElementById("screen");

    screen.value = "";
}

// Function to calculate the result
function calculate() {
    var screen = document.getElementById("screen");

    let result = eval(screen.value);
    screen.value = result;
}
