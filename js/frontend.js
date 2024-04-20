// This file is where all user interaction is.


const observer = new IntersectionObserver((entries)=>{entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            
        }
        /*else {
            entry.target.classList.remove('show');
         }*/
        
    });


});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

// Keys that are allowed to add to the calculation
const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '*', '/', '+', '-', '!', '^', '%', '.', 'x', 'y', 'z', 'a', 'b', 'c', 't', 'h', 'k', 'd', 'i'];
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
