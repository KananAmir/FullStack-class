const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")
const counterDisplay = document.querySelector(".count")


let count = 0


function increment() {
    count++
    counterDisplay.textContent = count
}

function decrement() {
    count--
    counterDisplay.textContent = count
}

function reset() {
    count = 0
    counterDisplay.textContent = count
}
incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)
resetBtn.addEventListener("click", reset)



const firstNumber = document.getElementById("num1")
const secondNumber = document.getElementById("num2")

const calcBtn = document.getElementById("calculate")
const resultDisplay = document.getElementById("result")
const operatorSelect = document.getElementById("operator")


calcBtn.addEventListener("click", () => {
    // console.log(operatorSelect.value);
    // console.log(firstNumber.value);
    calculate(operatorSelect.value);
})


function calculate(operator) {

    const num1 = parseFloat(firstNumber.value)
    const num2 = parseFloat(secondNumber.value)

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }

    resultDisplay.textContent = `Result: ${result}`;
}