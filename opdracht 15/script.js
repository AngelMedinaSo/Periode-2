let aantal = 0;
const count = document.getElementById("count");
const warning = document.getElementById("warning");
const plusBtn = document.getElementById("plus");
const minBtn = document.getElementById("min");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    count.innerText = "Aantal: " + aantal;

    if (aantal >= 5) {
        warning.innerText = "Pauze? Water is ook lekker 💧";
    } else if (aantal >= 3) {
        warning.innerText = "Dat zijn er best veel… ⚠️";
    } else {
        warning.innerText = "";
    }

    if (aantal >= 5) {
        count.style.color = "red";
    } else if (aantal >= 3) {
        count.style.color = "orange";
    } else {
        count.style.color = "green";
    }
}

plusBtn.addEventListener("click", function() {
    aantal++;
    updateDisplay();
});

minBtn.addEventListener("click", function() {
    if (aantal > 0) {
        aantal--;
    }
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    aantal = 0;
    updateDisplay();
});

updateDisplay();