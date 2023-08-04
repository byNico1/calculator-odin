const numbers = document.querySelectorAll("button[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const allclear = document.querySelector("[data-all-clear]");
const deleteN = document.querySelector("[data-delete]");
const display = document.querySelector(".output");

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNumber = "";
let operator = "";
let secondNumber = "";

let displayValue = "";

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

function numbersOnClick(el) {
  // this.innerText
  displayValue += this.innerText;
  display.innerText = displayValue;
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("*") ||
    displayValue.includes("/")
  ) {
    secondNumber += this.innerText;
  } else {
    firstNumber += this.innerText;
  }
}

function updateOparator() {
  operator = this.innerText;
  displayValue += this.innerText;
  display.innerText = displayValue;
}

function getResult() {
  let result = operate(+firstNumber, operator, +secondNumber);
  displayValue = result;
  display.innerText = displayValue;
  console.log(result);
  console.log(`result: ${result}`);
}

function clearAll() {
  display.innerText = "";
  displayValue = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  display.innerText = displayValue;
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("*") ||
    displayValue.includes("/")
  ) {
    secondNumber = secondNumber.slice(0, -1);
  } else {
    firstNumber = firstNumber.slice(0, -1);
  }
}

numbers.forEach((number) => number.addEventListener("click", numbersOnClick));
operations.forEach((operation) =>
  operation.addEventListener("click", updateOparator)
);
equals.addEventListener("click", getResult);
allclear.addEventListener("click", clearAll);
deleteN.addEventListener("click", deleteLast);
