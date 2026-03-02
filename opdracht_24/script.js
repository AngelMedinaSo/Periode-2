const bar = document.getElementById("bar");
let progress = 0;

const interval = setInterval(function() {
    progress += 10;
    if (progress > 100) progress = 100;
    bar.style.width = progress + "%";
    bar.innerText = "Loading... " + progress + "%";

    if (progress >= 100) {
        clearInterval(interval);
        bar.innerText = "Loading complete!";
    }
}, 500);