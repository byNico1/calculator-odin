const numbers = document.querySelectorAll("button[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const allclear = document.querySelector("[data-all-clear]");
const deleteN = document.querySelector("[data-delete]");
const display = document.querySelector(".output");
const dot = document.querySelector(".dot");

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
  if (
    displayValue.includes("+") ||
    displayValue.includes("-") ||
    displayValue.includes("*") ||
    displayValue.includes("/")
  ) {
    // si tiene ya un punto y le quiero agregar otro:
    if (this.innerText === "." && secondNumber.includes(".")) {
      alert("Can't add more than one dot");
      return;
    } else {
      secondNumber += this.innerText;
    }
  } else {
    if (this.innerText === "." && firstNumber.includes(".")) {
      alert("Can't add more than one dot");
      return;
    } else {
      firstNumber += this.innerText;
    }
  }
  displayValue += this.innerText;
  display.innerText = displayValue;
}
// 01234

function updateOparator() {
  if (
    operator !== "" &&
    displayValue.indexOf(operator) === displayValue.length - 1
  ) {
    displayValue = displayValue.slice(0, -1);
  } else if (operator !== "" && displayValue.includes(operator)) {
    getResult();
  }
  operator = this.innerText;
  displayValue += this.innerText;
  display.innerText = displayValue;
}

function getResult() {
  let result = operate(+firstNumber, operator, +secondNumber).toString();
  displayValue = result;
  display.innerText = displayValue;
  firstNumber = result;
  operator = "";
  secondNumber = "";
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

function setupDot() {
  if (firstNumber.includes(".")) {
  } else {
    firstNumber += ".";
  }

  if (secondNumber.includes(".")) {
    // return 0;
  } else {
    // secondNumber += ".";
  }
}

numbers.forEach((number) => number.addEventListener("click", numbersOnClick));
operations.forEach((operation) =>
  operation.addEventListener("click", updateOparator)
);
equals.addEventListener("click", getResult);
allclear.addEventListener("click", clearAll);
deleteN.addEventListener("click", deleteLast);
// dot.addEventListener("click", setupDot);
