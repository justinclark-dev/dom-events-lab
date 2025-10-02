'use strict'

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// important: currentNumber must be a string.
let currentNumber = ''
let numberA = 0
let numberB = 0
let operation = ''
let lastOperation = ''

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

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
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
    }
}

/*----------------------------- Event Handlers -----------------------------*/
const handleNumbers = (event) => {
    let thisNumber = event.target.innerText
    display.innerHTML += thisNumber
    currentNumber += thisNumber
}

const handleOperations = (event) => {
    let operator = event.target.innerText

    if (operator === 'C') {
        currentNumber = ''
        numberA = 0
        numberB = 0
        operation = ''
        lastOperation = ''
        display.innerHTML = ''
    } else {
        if (currentNumber === '') {
            // prevents using operator before number
            return
        }
        if (lastOperation) {
            numberB = parseInt(currentNumber)
            const result = calculate(operation, numberA, numberB)
            currentNumber = result
            numberA = 0
            display.innerHTML = result
        }
        display.innerHTML += operator
        numberA = parseInt(currentNumber)
        currentNumber = ''
        operation = operator
    }
    lastOperation = operator
}

const handleCalculation = (event) => {
    numberB = parseInt(currentNumber)
    const result = calculate(operation, numberA, numberB)
    currentNumber = result
    numberA = 0
    numberB = 0
    operation = ''
    lastOperation = ''
    display.innerHTML = result
}
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {

    if (event.target.classList.contains('number')) {
        handleNumbers(event)
    }

    if (event.target.classList.contains('operator')) {
        handleOperations(event)
    }

    if (event.target.innerText === '=') {
        handleCalculation(event)
    }

});


