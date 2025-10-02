'use strict'

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// important: currentNumber must be a string.
let currentNumber = ''

let numberA = 0
let numberB = 0

let operation = ''
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {

    // handle numbers
    if (event.target.classList.contains('number')) {

        let thisNumber = event.target.innerText
        display.innerHTML += thisNumber

        currentNumber += thisNumber

    }

    // handle operations
    if (event.target.classList.contains('operator')) {

        let operator = event.target.innerText

        if (operator === 'C') {
            currentNumber = ''
            numberA = 0
            numberB = 0
            operation = ''
            display.innerHTML = ''
            
        } else {

            display.innerHTML += operator

            numberA = parseInt(currentNumber)

            currentNumber = ''
            operation = operator
        }
        
    }

    // handle calculation
    if (event.target.innerText === '=') {

        numberB = parseInt(currentNumber)
        currentNumber = ''

        const result = calculate(operation, numberA, numberB)
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
        case '-':
            console.log(operator, a, b)
            return subtract(a, b)
        case '*':
            console.log(operator, a, b)
            return multiply(a, b)
        case '/':
            console.log(operator, a, b)
            return divide(a, b)
    }
}
