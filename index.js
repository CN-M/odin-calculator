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

const operate = (a,b, operator) => {
    if (operator == '+')
        return add(a,b)
    if (operator == '-')
        return subtract(a,b)
    if (operator == '*')
        return multiply(a,b)
    if (operator == '/')
        return divide(a,b)
}

const answer = operate(1,0,'/');

console.log(answer)