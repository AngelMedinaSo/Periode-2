let emojis = ["😆","😎","😉","😘","🤗","🤩","😤","😭"];
const button = document.getElementById("button");

button.addEventListener('click', function() {
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("text").innerHTML = randomEmoji;
});