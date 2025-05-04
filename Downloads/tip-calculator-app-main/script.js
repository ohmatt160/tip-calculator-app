const bill_input = document.querySelector(".bill-input");
const button_5 = document.querySelector(".five");
const button_10 = document.querySelector(".ten");
const button_15 = document.querySelector(".fifteen");
const button_25 = document.querySelector(".twenty-five");
const button_50 = document.querySelector(".fifty");
const custom_input = document.querySelector("#input-custom");
const people_input = document.querySelector(".people-input");
const reset_button = document.querySelector(".reset");
const tip_amount = document.querySelector(".tip-amount");
const total_amount = document.querySelector(".total-amount");
let percentage = 0.00;

button_5.addEventListener("click", function () {
    percentage = 5 / 100;
    custom_input.value = "";
    calculate();
});

button_10.addEventListener("click", function () {
    percentage = 10 / 100;
    custom_input.value = "";
    calculate();
});

button_15.addEventListener("click", function () {
    percentage = 15 / 100;
    custom_input.value = "";
    calculate();
});

button_25.addEventListener("click", function () {
    percentage = 25 / 100;
    custom_input.value = "";
    calculate();
});

button_50.addEventListener("click", function () {
    percentage = 50 / 100;
    custom_input.value = "";
    calculate();
});

// incase you like a shorter approach to the above code, you can use this instead of the above 5 functions
// {
//     button_5.addEventListener("click", () => setPercentage(5));
//     button_10.addEventListener("click", () => setPercentage(10));
//     button_15.addEventListener("click", () => setPercentage(15));
//     button_25.addEventListener("click", () => setPercentage(25));
//     button_50.addEventListener("click", () => setPercentage(50));

//     // Set percentage and calculate
//     function setPercentage(percent) {
//         percentage = percent / 100;
//         custom_input.value = ""; // Clear custom input when preset button is clicked
//         calculate();
//     }
// }

custom_input.addEventListener("input", function () {
    percentage = parseFloat(this.value) / 100;
    calculate();
});

// Calculate function
function calculate() {
    document.querySelector(".error-bill").textContent = "";
    document.querySelector(".error-people").textContent = "";
    custom_input.style.border = ""; // Reset custom input styling

    const bill = parseFloat(bill_input.value);
    const people = parseFloat(people_input.value);
    let isValid = true;

    // Bill validation
    if (isNaN(bill)) {
        document.querySelector(".error-bill").textContent = "please enter a number";
        isValid = false;
    } else if (bill <= 0) {
        document.querySelector(".error-bill").textContent = "can't be zero";
        isValid = false;
    }

    // People validation
    if (isNaN(people)) {
        document.querySelector(".error-people").textContent = "enter a number";
        isValid = false;
    } else if (people <= 0) {
        document.querySelector(".error-people").textContent = "can't be zero";
        isValid = false;
    }

    // Percentage validation
    if (percentage === 0) {
        custom_input.style.border = "2px solid red";
        isValid = false;
    }

    // Only calculate if all inputs are valid
    if (isValid) {
        const result = (bill * percentage) / people;
        tip_amount.innerHTML = result.toFixed(2);
        total_amount.innerHTML = ((bill / people) + result).toFixed(2);
    } else {
        // Clear results if invalid
        tip_amount.innerHTML = "0.00";
        total_amount.innerHTML = "0.00";
    }
}

// Reset function
reset_button.addEventListener("click", function () {
    bill_input.value = "";
    people_input.value = "";
    custom_input.value = "";
    tip_amount.innerHTML = "0.00";
    total_amount.innerHTML = "0.00";
    percentage = 0;

    // Clear errors
    document.querySelector(".error-bill").textContent = "";
    document.querySelector(".error-people").textContent = "";
    custom_input.style.border = "";
});

// Recalculate when bill or people inputs change
bill_input.addEventListener("input", calculate);
people_input.addEventListener("input", calculate);