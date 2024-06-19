document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    let totalInput = "";

    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function() {
            if (this.classList.contains("clear")) {
                currentInput = "";
                totalInput = "";
                display.textContent = "";
            } else if (this.classList.contains("equal")) {
                totalInput += currentInput;
                try {
                    display.textContent = eval(totalInput);
                    currentInput = "";
                    totalInput = "";
                } catch {
                    display.textContent = "Error";
                    currentInput = "";
                    totalInput = "";
                }
            } else if (this.dataset.operator) {
                totalInput += currentInput + this.dataset.operator;
                currentInput = "";
            } else if (this.dataset.number) {
                currentInput += this.dataset.number;
                display.textContent = currentInput;
            }
        });
    });
});