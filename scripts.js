let a = "";
let b = "";
let op = null;
let clearDisplayFlag = false;
const display = document.querySelector("#display");

function roundToTwoDecimalPlaces(number) {
	return Math.round(number * 100) / 100;
}
function add(a, b) {
	return roundToTwoDecimalPlaces(a + b);
}

function subtract(a, b) {
	return roundToTwoDecimalPlaces(a - b);
}

function multiply(a, b) {
	return roundToTwoDecimalPlaces(a * b);
}

function divide(a, b) {
	if (b === 0) {
		return "Error: Divide by 0";
	}
	return roundToTwoDecimalPlaces(a / b);
}

function operate(a, operand, b) {
	a = Number(a);
	b = Number(b);
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
	const datasetNum = e.target.dataset.num;

	if (clearDisplayFlag) {
		display.textContent = datasetNum; // replace text content
		clearDisplayFlag = false;
	} else {
		display.textContent += datasetNum; //append to the current text content
	}
}

const numberBtns = document.querySelectorAll("#numpad > button");

numberBtns.forEach((btn) => {
	btn.addEventListener("click", addDigitToDisplay);
});

function calculate(e) {
	if (e.target.className === "operator") {
		if (op && a != "" && !clearDisplayFlag) {
			// if there's a previous operation pending, calculate it first
			b = parseInt(display.textContent);
			const result = operate(a, op, b);
			display.textContent = result;
			a = result.toString();
		} else {
			a = display.textContent;
		}

		op = e.target.dataset.op;
		clearDisplayFlag = true;

	} else if (e.target.id === "equals" && op) { // do the equals operation
		if (a != "" && !clearDisplayFlag) {
			b = parseInt(display.textContent);
			const result = operate(a, op, b);
			display.textContent = result;
			a = result.toString();
			op = null;
			clearDisplayFlag = true;
		}
	} else if (e.target.id === "clear") { // clear everything
		a = "";
		b = "";
		op = null;
		clearDisplayFlag = false;
		display.textContent = "";
	}
}

// pressing an operator button (+, -, /, should set the clearDisplayFlag to true)
const operatorBtns = document.querySelectorAll("#operators > button");

operatorBtns.forEach((btn) => {

	btn.addEventListener("click", calculate);
});

