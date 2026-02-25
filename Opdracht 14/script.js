const message = document.getElementById("message");

let drankje = prompt("Wat wil je drinken? (cola, water of koffie)").toLowerCase();

if (drankje === "cola") {
    message.innerText = "Je krijgt een blikje cola 🥤";
    message.style.color = "red";
} else if (drankje === "water") {
    message.innerText = "Goed bezig, lekker gezond 💧";
    message.style.color = "blue";
} else if (drankje === "koffie") {
    message.innerText = "Energie incoming ☕";
    message.style.color = "brown";
} else {
    message.innerText = "Dat drankje is helaas op";
    message.style.color = "gray";
}