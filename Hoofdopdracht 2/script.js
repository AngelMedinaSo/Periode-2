let pizzaCount = 0;

function addPizza() {
    pizzaCount = pizzaCount + 1;

    document.getElementById("title").innerHTML = pizzaCount + " pizza!";

    if (pizzaCount == 5) {
        document.getElementById("message").innerHTML = "Dat begint ergens op te lijken 😋";
    }
    else if (pizzaCount == 9) {
        document.getElementById("message").innerHTML = "Bijna daar...";
    }
    else if (pizzaCount >= 10) {
        document.getElementById("message").innerHTML = "Klasse-traktatie!";
        document.getElementById("overlay").style.display = "block";
    }
    else {
        document.getElementById("message").innerHTML = "";
    }
}

function resetGame() {
    pizzaCount = 0;
    document.getElementById("title").innerHTML = "0 pizza!";
    document.getElementById("message").innerHTML = "";
    document.getElementById("overlay").style.display = "none";
}