// Select input and buttons
let input = document.querySelector(".input .inputNum");
let delButton = document.querySelector(".buttonsNum .DEL");
let restButton = document.querySelector(".buttonsNum .Rest");
let equalButton = document.querySelector(".buttonsNum .Equal");
let numButtons = document.querySelectorAll(
  ".buttonsNum button:not(.DEL):not(.Rest):not(.Equal)"
);

// Function to update the input
function updateInput(value) {
  if (input.innerHTML === "0") {
    input.innerHTML = value;
  } else {
    input.innerHTML += value;
  }
}

// Function to clear the input
function clearInput() {
  input.innerHTML = "0";
}

// Function to evaluate the expression
function evaluateExpression() {
  try {
    // Replace 'x' with '*' for evaluation
    let expression = input.innerHTML.replace(/x/g, "*");
    input.innerHTML = eval(expression);
  } catch {
    input.innerHTML = "Error";
  }
}

// Event listeners for number and operator buttons
numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    updateInput(button.innerHTML);
  });
});

// Event listener for delete button
delButton.addEventListener("click", (e) => {
  input.innerHTML = input.innerHTML.slice(0, -1) || "0";
});

// Event listener for reset button
restButton.addEventListener("click", (e) => {
  clearInput();
});

// Event listener for equal button
equalButton.addEventListener("click", (e) => {
  evaluateExpression();
});

// Keyboard event listener
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    // Numeric keys
    updateInput(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    // Operator keys
    updateInput(e.key);
  } else if (e.key === "Enter") {
    // Enter key
    evaluateExpression();
  } else if (e.key === "Backspace") {
    // Backspace key
    input.innerHTML = input.innerHTML.slice(0, -1) || "0";
  } else if (e.key === "Delete") {
    // Delete key
    clearInput();
  } else if (e.key === ".") {
    // Decimal point
    updateInput(e.key);
  }
});

// Select theme radio inputs
let themeInputs = document.querySelectorAll(".themeSwitch .calc-input");

// Function to change theme
function changeTheme(theme) {
  // Remove existing theme classes from the body
  document.body.classList.remove("theme1", "theme2", "theme3");
  // Add the selected theme class to the body
  document.body.classList.add(theme);
}

// Add event listeners to the theme inputs
themeInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    // Get the selected theme from the data-theme attribute
    let selectedTheme = e.target.getAttribute("data-theme");
    changeTheme(selectedTheme);
  });
});
