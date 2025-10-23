let a = 0;
let b = 0;
let op = "";

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
	const display = document.querySelector("#display");
	const datasetNum = e.target.dataset.num;
	display.textContent += datasetNum;
}

const numberBtns = document.querySelectorAll("#numpad > button");

numberBtns.forEach((btn) => {
	btn.addEventListener("click", addDigitToDisplay);
})
