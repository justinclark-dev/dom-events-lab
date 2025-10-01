'use strict'

/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentNum = ''
let num1 = 0
let num2 = 0

let operation = ''
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);

    // numbers
    if (event.target.classList.contains('number')) {
        // console.log(event.target.innerText)
        // display.innerHTML += event.target.innerText
        let num = event.target.innerText
        // console.log(num)
        display.innerHTML += num

        currentNum += num
        // console.log(currentNum)
      
    
 
    }

    // operations
    if (event.target.classList.contains('operator')) {
        console.log('operator...')
        display.innerHTML += event.target.innerText
        num1 = parseInt(currentNum)
        console.log(num1)
        currentNum = ''
        operation = event.target.innerText
    }

    // calculate
    if (event.target.innerText === '=') {
        num2 = parseInt(currentNum)
        currentNum = ''
        const result = calculate(operation, num1, num2)
        display.innerHTML = result
    }
});

/*-------------------------------- Functions --------------------------------*/
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const calculate = (operator, a, b) => {
    switch (operator) {
        case '+':
            console.log(operator, a, b)
            return add(a, b)
    }
}
