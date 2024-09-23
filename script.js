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
    return a/b;
}

function operate(a , b, operator) {
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
        case ":":
            a = divide(a, b);
            break;
        default:
            a = "ERROR";
            break;
    }
}