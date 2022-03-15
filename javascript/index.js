// Add
const add = (a,b) => a + b

// Subtract
const subtract = (a,b) => a - b

// Multiply
const multiply = (a,b) => a * b

// Divide
const divide = (a,b) => {
    if (b !== 0 ) 
        return a/b
    return 'Hey! No division by 0'
}

// Operate function
const operate = (a, b, operator) => {
    if (operator == '+')
        return add(a,b)
    if (operator == '-')
        return subtract(a,b)
    if (operator == '×')
        return multiply(a,b)
    if (operator == '÷')
        return divide(a,b)
}

//User inputs defaults
let a, b, operator, answer

const calcDisplay = document.querySelector('.display p');
calcDisplay.textContent = '80085' // Default Display Content

const clear = () => {
    a = undefined;
    b = undefined;
    operator = undefined;
    answer = undefined;
    calcDisplay.textContent = undefined
}

const showDisplay = (event) => {
    calcDisplay.textContent = event.target.textContent
    if (
        event.target.textContent == '+' ||
        event.target.textContent == '-' ||
        event.target.textContent == '÷' ||
        event.target.textContent == '×'
    ) { 
        operator = event.target.textContent
        console.log(`Operator: ${operator}`)
    } else if (event.target.textContent == 'Clear') {
            clear()
    } else if (event.target.textContent == '=' ) {
        answer = operate(a, b, operator)
        calcDisplay.textContent = answer
        console.log(`Answer: ${answer}`)
    } else if (operator) {
        b = parseInt(event.target.textContent)
        console.log(`b: ${b}`)
    } else {
        a = parseInt(event.target.textContent)
        console.log(`a: ${a}`)
    }
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', showDisplay))