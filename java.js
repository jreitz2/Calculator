//operators
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(a, b, c) {
    switch (b) {
        case add:
            return add(a, c);
            break;
        case subtract:
            return subtract(a, c);
            break;
        case multiply:
            return multiply(a, c);
            break;
        case divide:
            return divide(a, c);
            break;
    }
}
//populate display

