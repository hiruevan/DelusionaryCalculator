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
        document.getElementById('display').innerHTML = error;
    }
}












