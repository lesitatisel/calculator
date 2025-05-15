let firstNumber, secondNumber, operator;

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
