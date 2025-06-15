// Selecting the display element
const display = document.getElementById("display");

// Selecting all buttons
const buttons = document.querySelectorAll(".btn");

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Adding event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value"); // Get button value
        if (value) {
            appendValue(value);
        }
    });
});

// Function to evaluate the expression
document.getElementById("equals").addEventListener("click", () => {
    try {
        display.value = eval(display.value); // Evaluate the expression safely
    } catch {
        display.value = "Error"; // Handle invalid input
    }
});

// Function to clear the display
document.getElementById("clear").addEventListener("click", () => {
    display.value = ""; // Clear the display
});

// Adding keyboard support
document.addEventListener("keydown", (event) => {
    const validKeys = "0123456789/*-+.()"; // Allowed keys
    const key = event.key;

    if (validKeys.includes(key)) {
        appendValue(key); // Append number or operator to display
    } else if (key === "Enter") {
        document.getElementById("equals").click(); // Calculate result
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1); // Remove last character
    } else if (key === "Escape") {
        document.getElementById("clear").click(); // Clear display
    }
});