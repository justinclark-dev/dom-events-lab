'use strict'

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        console.log(event.target.innerText)
        // Future logic to capture the button's value would go here...
    })
})
/*-------------------------------- Functions --------------------------------*/
