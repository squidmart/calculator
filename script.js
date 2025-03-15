const display = document.querySelector('.display');
let firstOperand = null;
let secondOperand = null;
let operator = null;
let displayValue = '';
let resultDisplayed = false; 

const DECIMAL_PLACES = 4;
const ROUNDING_FACTOR = Math.pow(10, DECIMAL_PLACES);

function operate(a, operator, b) {
  try {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) {
          display.textContent = "Cheeky! Unable to divide by zero";
          console.log('zero');
          return null;
        }
        return a / b;
      default:
        return null;
    }
  } catch (error) {
    console.error('Calculation error:', error);
    display.textContent = 'Error';
    return null;
  }
}

function populateDisplay(value) {
  if (resultDisplayed) {
    displayValue = ''; 
    resultDisplayed = false;
  }
  displayValue += value;
  display.textContent = displayValue;
}

function clearCalculator() {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  displayValue = '';
  display.textContent = '';
  resultDisplayed = false;
}

function handleOperator(operatorSymbol) {
  if (displayValue !== '') {
    if (firstOperand === null) {
      firstOperand = parseFloat(displayValue);
    } else {
      const result = operate(firstOperand, operator, parseFloat(displayValue));
      if (result !== null) {
        firstOperand = result;
        display.textContent = Math.round(result * ROUNDING_FACTOR) / ROUNDING_FACTOR;
      }
    }
    operator = operatorSymbol;
    displayValue = '';
  } else if (firstOperand !== null) {
    operator = operatorSymbol;
  }
}

function calculateResult() {
  if (firstOperand !== null && operator !== null && displayValue !== '') {
    secondOperand = parseFloat(displayValue);
    const result = operate(firstOperand, operator, secondOperand);
    if (result !== null) {
      display.textContent = Math.round(result * ROUNDING_FACTOR) / ROUNDING_FACTOR;
      firstOperand = result;
      secondOperand = null;
      operator = null;
      displayValue = '';
      resultDisplayed = true;
      console.log(display.textContent);
    }
  }
}

// Event Listeners
const numericalButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
numericalButtons.forEach(id => {
  document.getElementById(id).addEventListener('click', (ev) => {
    populateDisplay(ev.target.textContent);
    console.log(ev.target.id);
  });
});

const operatorButtons = ['plus', 'subtract', 'multiply', 'divide'];
operatorButtons.forEach(id => {
  document.getElementById(id).addEventListener('click', (ev) => {
    console.log(ev.target.id);
    handleOperator(ev.target.textContent);
  });
});
document.getElementById('equal').addEventListener('click', (ev) => {
  console.log(ev.target.id);
  calculateResult();
});

document.getElementById('clear').addEventListener('click', (ev) => {
  console.log(ev.target.id);
  clearCalculator();
});