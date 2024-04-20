// This file connects the js to python (In addition to setting up some display functions)
let currentDisplayText = "<br>"
// Function to append a character to the display
function appendToDisplay(value) {
    if (document.getElementById('display').innerHTML == 'Error') clearDisplay();
    if (document.getElementById('display').innerHTML == '<br>') {
        document.getElementById('display').innerHTML = '';
    }
    document.getElementById('display').innerHTML += value;
}
function removeLastLetter() {
    
    currentDisplayText = document.getElementById('display').innerHTML
    currentDisplayText = currentDisplayText.replace(/.$/, '')
    document.getElementById('display').innerHTML = currentDisplayText
    if (currentDisplayText == '<br' || currentDisplayText == '') {
        document.getElementById('display').innerHTML = '<br>'
    }

}

// Function to clear the display
function clearDisplay() {
    
    document.getElementById('display').innerHTML = '<br>';
}

// Function to calculate the result
//idk how to leave stuff as a variable when calculating

// This will be changed to python later on
function calculate() {
    let result;
    try {
        //re write this so it works pls
       /* if document.getElementById('display').innerHTML contains "/0"{
            (something to remove the /0)
            const result = eval(document.getElementById('display').innerHTML);
            document.getElementById('display').innerHTML += "D";
        }



        */

        result = eval(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = result;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}














// Keys that are allowed to add to the calculation
const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '*', '/', '+', '-', '!', '^', '%', '.', 'x', 'y', 'z', 'a', 'b', 'c', 't', 'h', 'k', 'd', 'i','Delete','Backspace'];
let pressingCtr = false;

// Add expressions if user types
window.addEventListener('keydown', function(e) {
    console.log(e.key);
    e.preventDefault();
    if (e.key == "Control") {
        pressingCtr = true;
    }
    if (e.key == "c" && pressingCtr) {
        pressingCtr = false;
        clearDisplay();
        return;
    }
    if (e.key == "Delete" || e.key == "Backspace") {
        removeLastLetter();
        return;
    }

    if (allowedKeys.includes(e.key)) {
        appendToDisplay(e.key);
    }
    if (e.key == "Enter" || e.key == "=") {
        calculate();
    }
    
});

window.addEventListener('keyup', function(e) {
    if (e.key == 'Control') pressingCtr = false;
});
