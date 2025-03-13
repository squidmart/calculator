# calculator


Assignment - https://www.theodinproject.com/lessons/foundations-calculator

1. Basic functions to add, subtract, multiply and divide
2. Its operation is a +-*/ b. Create variables for each
3. Create new function operate to calculate the values in 2
4. Create basic HTML buttons and add operator = and a clear button
5. Create a function that populate the display when it is clicked on. Store the content of the display (the number) in a variable for use in the next step.
6. Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
    - You should already have the code that can populate the display, so once operate has been called, update the display with the result of the operation.
    - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
7. Gotchas:
    - Calculator should not evaluate more than a single pair of numbes at a time
    - round answers with long decimals to avoid overflow
    - pressing = before entering all the numbers could cause problems
    - pressing clear should wipe out existing data. make sure it really starts fresh.
    - display snarky error message if divide by 0 and dont let it crash calculator
    - only run on operation at a time, if consecutive operator buttons are pressed, only take the last operator to be used for the next operation. 
    - when a result is display, pressing a new digit should clear the result and start a new calculation




