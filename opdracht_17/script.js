const block = document.getElementById("block");
const text = document.getElementById("text");

block.addEventListener('mouseover', function() {
    block.classList.add("hovered");
    text.innerText = "Nice hover!";
});

block.addEventListener('mouseout', function() {
    block.classList.remove("hovered");
    text.innerText = "";
});