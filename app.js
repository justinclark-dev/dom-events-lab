'use strict'

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);

    // Example
    if (event.target.classList.contains('number')) {
        // Do something with a number
    }

    // Example
    if (event.target.innerText === '*') {
        // Do something with this operator
    }
});

/*-------------------------------- Functions --------------------------------*/
