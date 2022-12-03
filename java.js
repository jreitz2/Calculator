let firstNum = "";
let secondNum = "";
let operator = "";
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
const displayValue = document.querySelector(".display");
console.log(displayValue.innerHTML);
displayValue.innerHTML = "";

const one = document.getElementById("one");
one.addEventListener("click", function() {
    displayValue.innerHTML += "1";
})
const two = document.getElementById("two");
two.addEventListener("click", function() {
    displayValue.innerHTML += "2";
})
const three = document.getElementById("three");
three.addEventListener("click", function() {
    displayValue.innerHTML += "3";
})
const four = document.getElementById("four");
four.addEventListener("click", function() {
    displayValue.innerHTML += "4";
})
const five = document.getElementById("five");
five.addEventListener("click", function() {
    displayValue.innerHTML += "5";
})
const six = document.getElementById("six");
six.addEventListener("click", function() {
    displayValue.innerHTML += "6";
})
const seven = document.getElementById("seven");
seven.addEventListener("click", function() {
    displayValue.innerHTML += "7";
})
const eight = document.getElementById("eight");
eight.addEventListener("click", function() {
    displayValue.innerHTML += "8";
})
const nine = document.getElementById("nine");
nine.addEventListener("click", function() {
    displayValue.innerHTML += "9";
})
const zero = document.getElementById("zero");
zero.addEventListener("click", function() {
    displayValue.innerHTML += "0";
})
// operator display
const plus = document.getElementById("plus");
plus.addEventListener("click", function() {
    operator = add;
    firstNum = Number(displayValue.innerHTML);
    displayValue.innerHTML = "";
})
const minus = document.getElementById("minus");
minus.addEventListener("click", function() {
    operator = subtract;
    firstNum = Number(displayValue.innerHTML);
    displayValue.innerHTML = "";
})
const times = document.getElementById("times");
times.addEventListener("click", function() {
    operator = multiply;
    firstNum = Number(displayValue.innerHTML);
    displayValue.innerHTML = "";
})
const divided = document.getElementById("divide");
divided.addEventListener("click", function() {
    operator = divide;
    firstNum = Number(displayValue.innerHTML);
    displayValue.innerHTML = "";
})
// ac button
const ac = document.getElementById("ac");
ac.addEventListener("click", function() {
    displayValue.innerHTML = "";
    firstNum = "";
    secondNum = "";
    operator = "";
})
// evaluate
const equals = document.getElementById("equals");
equals.addEventListener("click", function() {
    secondNum = Number(displayValue.innerHTML);
    displayValue.innerHTML = operate(firstNum, operator, secondNum);
})

console.log(firstNum);