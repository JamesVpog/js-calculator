let a = 0;
let b = 0;
let op = "";
let clearDisplayFlag = false;
const display = document.querySelector("#display");

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, operand, b) {
	switch (operand) {
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
			return divide(a, b);
	}
}

function addDigitToDisplay(e) {
	const datasetNum = parseInt(e.target.dataset.num);

	if (clearDisplayFlag) {
		display.textContent = datasetNum;
	} else {
		display.textContent += datasetNum;
	}
}

const numberBtns = document.querySelectorAll("#numpad > button");

numberBtns.forEach((btn) => {
	btn.addEventListener("click", addDigitToDisplay);
})

// pressing an operator button (+, -, /, should set the clearDisplayFlag to true)
//
