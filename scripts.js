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

// attach event listeners to all the buttons

// when a number button is pressed, input into textContent of display

const numpadBtns = document.querySelectorAll("#numpad > button")

const display = document.querySelector("#display");

numpadBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (btn.id == "zero") {
			display.textContent += "0";
		} else {
			display.textContent += btn.id;
		}
	})
})

const a = parseInt(display.textContent);

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => display.textContent = "");
// when the operations button are pressed, parse the displayText and store the variable
