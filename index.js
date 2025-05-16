let firstNumber, secondNumber, operator;
let displayValue = '';

const display = document.querySelector(".display");
const btn = document.querySelectorAll(".btn");

const add = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  if ( b == 0 ) {
    console.log("Cannot divide by zero.");
    return false;
  }
  return a / b;
}

const operate = function (operation, firstNumber, secondNumber) {
  return operation(firstNumber, secondNumber);
}


// Create the functions that populate the display when you click the digit buttons. You should store the content of the display (the number) in a variable for use in the next step.
const nonDigits = ['+', '-', '*', '/', '=', 'C', 'P', '⌫'];
const getBtnValue = function () {
  btn.forEach( btn => {
    btn.addEventListener('click', (e) => {
      const btnVal = e.target.textContent.trim();
      // console.log(e.target.textContent.trim());
      if (!nonDigits.includes(btnVal)) {
        display.textContent += btnVal;
      }
    })
  })
}
  
const populateDisplay = function () {
  getBtnValue();
}

populateDisplay();