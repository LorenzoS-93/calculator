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
    else if(a%b === 0) return a/b;
    else return (a/b).toFixed(6);
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
    return a;
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
    if(currentOperator !== "" && currentOperation.split(currentOperator).length === 1)
        display.textContent = "ERROR";
    else {
        display.textContent = currentOperation
                                        .split(currentOperator)
                                        .reduce((total, item) => operate(currentOperator, Number(total), Number(item)));
        currentOperation = display.textContent;
    }
    
}