let display = document.getElementById("display");

// Number ku dar
function appendNumber(number) {

    if (display.value === "0" || display.value === "Error") {
        display.value = number;
    } else {
        display.value += number;
    }

}

// Operator ku dar
function appendOperator(operator) {

    if (display.value !== "Error") {
        display.value += operator;
    }

}

// Clear
function clearDisplay() {

    display.value = "0";

}

// Delete
function deleteNumber() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }

}

// Calculate
function calculate() {

    try {

        let result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid");
        }

        display.value = Number(result.toFixed(10)).toString();

    } catch (error) {

        display.value = "Error";

    }

}