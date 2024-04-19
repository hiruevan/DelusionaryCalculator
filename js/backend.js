
// I honestly dont care if you completely re write this, I'm very new to js








// Function to append a character to the display
function appendToDisplay(value) {
    document.getElementById('display').innerHTML += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

// Function to calculate the result
//idk how to leave stuff as a variable when calculating
function calculate() {
    try {
        //re write this so it works pls
       /* if document.getElementById('display').innerHTML contains "/0"{
            (something to remove the /0)
            const result = eval(document.getElementById('display').innerHTML);
            document.getElementById('display').innerHTML += "D";
        }



        */
        const result = eval(document.getElementById('display').innerHTML);
        document.getElementById('display').innerHTML = result;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}
