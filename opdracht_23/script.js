let emojis = ["😆","😎","💀","😘","🤩"];
let index = 0;
const e = document.getElementById("emoji");

function showEmoji() {
    e.innerText = emojis[index];
    const colors = ["red", "blue", "green", "orange", "purple"];
    e.style.color = colors[Math.floor(Math.random() * colors.length)];
    e.style.fontSize = `${50 + Math.floor(Math.random() * 20)}px`;
    index++;
    if (index >= emojis.length) {
        index = 0;
    }
}

setInterval(showEmoji, 500);