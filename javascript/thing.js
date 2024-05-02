const calcDisplay = document.querySelector(".display p");
calcDisplay.textContent = "80085"; // Default Text Content

let operator, answer;

let a = [0];
let b = [0];

const clear = (keepAns) => {
  a = [0];
  b = [0];
  operator = undefined;
  if (!keepAns) {
    answer = undefined;
    calcDisplay.textContent = undefined;
  }
};

const add = (a, b) => {
  const firstNumber = parseInt(a.join(""));
  const secondNumber = parseInt(b.join(""));

  return firstNumber + secondNumber;
};

const subtract = (a, b) => {
  const firstNumber = parseInt(a.join(""));
  const secondNumber = parseInt(b.join(""));

  return firstNumber - secondNumber;
};

const multiply = (a, b) => {
  const firstNumber = parseInt(a.join(""));
  const secondNumber = parseInt(b.join(""));

  return firstNumber * secondNumber;
};

const divide = (a, b) => {
  const firstNumber = parseInt(a.join(""));
  const secondNumber = parseInt(b.join(""));
  if (secondNumber == 0) {
    return "Hey! No division by 0";
  }

  return firstNumber / secondNumber;
};

// Operate function
const operate = (a, b, operator) => {
  if (operator == "+") return add(a, b);
  if (operator == "-") return subtract(a, b);
  if (operator == "×") return multiply(a, b);
  if (operator == "÷") return divide(a, b);
};

const setTextContent = (arr) => {
  if (!Array.isArray(arr)) {
    return (calcDisplay.textContent = arr);
  }
  return (calcDisplay.textContent = parseInt(arr.join("")));
};

const setA = (arr) => {
  a = arr;
};

const setNumbers = () => {
  const content = event.target.textContent;
  if (content == "+" || content == "-" || content == "÷" || content == "×") {
    operator = content;
    setTextContent(operator);

    console.log(`Operator: ${operator}`);
  } else if (content == "Clear") {
    clear(false);

    console.log("Clear");
  } else if (content == "=") {
    answer = operate(a, b, operator);
    setTextContent(answer);
    clear(true);

    if (answer == "Hey! No division by 0") {
      setA([0]);
    } else {
      setA(answer.toString().split(""));
    }

    console.log(`Answer: ${answer}`);
  } else if (operator) {
    value = parseInt(content);
    b.push(value);
    setTextContent(b);

    console.log(`b: ${b}`);
  } else if (parseInt(a.join("")) > 0) {
    clear();
    value = parseInt(content);
    a.push(value);
    setTextContent(a);

    console.log(`a: ${a}`);
  } else {
    value = parseInt(content);
    a.push(value);
    setTextContent(a);

    console.log(`a: ${a}`);
  }
};

const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", setNumbers));
