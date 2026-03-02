let emojis = ["😆","😎","😉","😘","🤩"];
let index = 0;
const e = document.getElementById("emoji");

function showEmoji() {
    e.innerText = emojis[index];
    index++;
    if (index >= emojis.length) {
        index = 0;
    }
}

setInterval(showEmoji, 500);