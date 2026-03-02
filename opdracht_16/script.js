function veranderen() {

    const text = document.getElementById("titel");

    if (text.textContent.trim() === "Hallo") {
        text.textContent = "Doeg";
        text.style.color = "white";
        document.body.style.backgroundColor = "black";
    } else {
        text.textContent = "Hallo";
        text.style.color = "black";
        document.body.style.backgroundColor = "white";
    }

}