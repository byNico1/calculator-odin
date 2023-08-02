const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber;
let operator;
let secondNumber;

const operate = (fNumber, operator, sNumber) => {
  switch (operator) {
    case "+":
      return add(fNumber, sNumber);
    case "-":
      return substract(fNumber, sNumber);
    case "*":
      return multiply(fNumber, sNumber);
    case "/":
      return divide(fNumber, sNumber);
  }
};
