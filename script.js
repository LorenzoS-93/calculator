function add(a , b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "NaN";
    else return a/b;
}

function operate(operator, a , b) {
    switch (operator) {
        case "+":
            a = add(a, b);
            break;
        case "-":
            a = subtract(a, b);
            break;
        case "*":
            a = multiply(a, b);
            break;
        case "/":
            a = divide(a, b);
            break;
        default:
            a = "ERROR";
            break;
    }
    if (Number.isInteger(a)) return a;
    else return a.toFixed(6);
}

const display = document.querySelector(".text");
let currentOperation = "";
let currentOperator = ""

function populateDisplay(input) {
    if (input === "+" || input === "-" || input === "*" || input === "/" ) {
        if (currentOperator !== "") equal();
        currentOperator = input;
        currentOperation += input;
    }
    else {
        if (currentOperator === "") {
            currentOperation += input;
            display.textContent = currentOperation;
        }
        else {
            currentOperation += input;
            display.textContent = currentOperation.split(currentOperator)[1];
        }
        
    }
}

function reset() {
    currentOperation = "";
    currentOperator = "";
    display.textContent = 0;
}

function equal() {
    display.textContent = currentOperation
                                    .split(currentOperator)
                                    .reduce((total, item) => operate(currentOperator, Number(total), Number(item)));
    currentOperation = display.textContent;
    currentOperator = "";
}