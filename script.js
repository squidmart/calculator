const display = document.querySelector('.display');
let firstOperand = null;
let secondOperand = null;
let operator = null;
let displayValue = '';
let resultDisplayed = false; // Flag to indicate if a result is displayed

function operate(a, operator, b) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === 'x') return a * b;
  if (operator === '/') 
    // {
    // if (b === 0) {
    //   display.textContent = "Can't devide by zero";
    //   console.log('zero');
    //   return null;
    // }
    return a / b;
  // }
  return null;
}

function populateDisplay(value) {
  if (resultDisplayed) {
    displayValue = ''; // Clear result and start new calculation
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

function calculateResult() {
  if (firstOperand !== null && operator !== null && displayValue !== '') {
    secondOperand = parseFloat(displayValue);
    const result = operate(firstOperand, operator, secondOperand);
    if (result !== null) {
      display.textContent = Math.round(result * 10000) / 10000; // Round to 4 decimal places
      firstOperand = result; // Store result for chaining
      secondOperand = null;
      operator = null;
      displayValue = '';
      resultDisplayed = true;
      console.log(display.textContent);
      console.log(result);
    }
  }
}

// Event Listeners
const numericalButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
numericalButtons.forEach(id => {
  document.getElementById(id).addEventListener('click', () => populateDisplay(document.getElementById(id).textContent));
  document.getElementById(id).addEventListener('click', (ev) => console.log(ev.target.id));
});

const operatorButtons = ['plus', 'subtract', 'multiply', 'divide'];
operatorButtons.forEach(id => {
  document.getElementById(id).addEventListener('click',(ev) => console.log(ev.target.id));
  document.getElementById(id).addEventListener('click', () => {
    if (displayValue !== '') {
      if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operator = document.getElementById(id).textContent;
        displayValue = '';
      } else {
        secondOperand = parseFloat(displayValue);
        const result = operate(firstOperand, operator, secondOperand);
        if (result !== null) {
          firstOperand = result;
          operator = document.getElementById(id).textContent;
          display.textContent = Math.round(result * 10000) / 10000;
          displayValue = '';
        }
      }
    } else if (firstOperand !== null){
        operator = document.getElementById(id).textContent;
    }
  });
});

document.getElementById('equal').addEventListener('click', calculateResult);
document.getElementById('equal').addEventListener('click', (ev) => console.log(ev.target.id) );

document.getElementById('clear').addEventListener('click', clearCalculator);
document.getElementById('clear').addEventListener('click', (ev) => console.log(ev.target.id));













// // 
// // const display = document.querySelector('.display');
// // let displayValue = '';
// // let isListening = true;
// // let firstOperand = null;
// // let operator = null;

// const numericalButtonIds = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// const operatorButtonIds = ['plus', 'subtract', 'multiply', 'divide'];

// numericalButtonIds.forEach(id => {
//   document.getElementById(id).addEventListener('click', () => {
//     if (isListening) {
//       if (displayValue.length < 10) {
//         displayValue += document.getElementById(id).textContent;
//         display.textContent = displayValue;
//       }
//     }
//   });
// });

// // operatorButtonIds.forEach(id => {
// //   const operatorButton = document.getElementById(id);

// //   if (operatorButton) {
// //     operatorButton.addEventListener('click', () => {
// //       if (displayValue !== '') {
// //         if (firstOperand === null) {
// //           firstOperand = parseFloat(displayValue);
// //           operator = operatorButton.textContent;
// //           displayValue = '';
// //           isListening = true;
// //         } else {
// //           const secondOperand = parseFloat(displayValue);
// //           let result;

// //           if (operator === '+') {
// //             result = firstOperand + secondOperand;
// //           } else if (operator === '-') {
// //             result = firstOperand - secondOperand;
// //           } else if (operator === 'x') {
// //             result = firstOperand * secondOperand;
// //           } else if (operator === '/') {
//             if (secondOperand === 0) {
//               display.textContent = "Error: Cannot divide by zero.";
//               displayValue = "";
//               firstOperand = null;
//               operator = null;
//               return;
//             } else {
//               result = firstOperand / secondOperand;
//             }
//           }

//           if (isNaN(result)) {
//             display.textContent = "Error: Invalid Input";
//             displayValue = "";
//             firstOperand = null;
//             operator = null;
//             return;
//           }

//           displayValue = "";
//           display.textContent = result;
//           firstOperand = result;
//           operator = operatorButton.textContent;
//         }
//       } else if (firstOperand !== null) {
//           operator = operatorButton.textContent;
//       } else {
//         console.log("No first operand entered.");
//       }
//     });
//   } else {
//     console.log("Operator button with ID", id, "not found.");
//   }
// });

// document.getElementById('equal').addEventListener('click', () => {
//   if (firstOperand !== null && operator !== null && displayValue !== '') {
//     const secondOperand = parseFloat(displayValue);
//     let result;

//     if (operator === '+') {
//       result = firstOperand + secondOperand;
//     } else if (operator === '-') {
//       result = firstOperand - secondOperand;
//     } else if (operator === 'x') {
//       result = firstOperand * secondOperand;
//     } else if (operator === '/') {
//       if (secondOperand === 0) {
//         display.textContent = "Error: Cannot divide by zero.";
//         displayValue = "";
//         firstOperand = null;
//         operator = null;
//         return;
//       } else {
//         result = firstOperand / secondOperand;
//       }
//     }

//     if (isNaN(result)) {
//       display.textContent = "Error: Invalid Input";
//       displayValue = "";
//       firstOperand = null;
//       operator = null;
//       return;
//     }

//     display.textContent = result;
//     displayValue = result.toString();
//     firstOperand = result;
//     operator = null;
//   }
// });

// document.getElementById('clear').addEventListener('click', () => {
//   displayValue = '';
//   display.textContent = '';
//   isListening = true;
//   firstOperand = null;
//   operator = null;
// });