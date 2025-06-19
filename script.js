let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  display.innerText += operator;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteChar() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
  } catch {
    display.innerText = "Error";
  }
}
