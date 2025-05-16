let firstNumber;
let secondNumber;
let operator;
let displayValue;

const nonDigits = ['+', '-', '*', '/', '=', 'C', 'P', '⌫']

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.querySelector(".clear-btn")

const add = (a, b) => { a + b };

const subtract = (a, b) => { a - b };

const multiply = (a, b) => { a + b };

const divide = (a, b) => { b !== 0 ? a / b : display.textContent = "Cannot divide by zero." }

const operate = (operation, firstNumber, secondNumber) => { operation(firstNumber, secondNumber)};

const clear = () => { display.textContent = "" };

const getOperator = (op) => {
  switch (op) {
    case '+':
      operator = add;
      break;      
    case '-':
      operator = subtract;
      break;
    case '*':
      operator = multiply;
      break;
    case '/':
      operator = divide;
      break;
    case 'C':
      clear();
      break;
  }
}

// Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in 

buttons.forEach( (btn) => {
  btn.addEventListener('click', (e) => {
    const buttonValue = e.target.textContent.trim();
    if (!nonDigits.includes(buttonValue)) {
      display.textContent += buttonValue;
      displayValue = Number(display.textContent);
    } else{
      getOperator(buttonValue);
      clear();
    }
  });
});