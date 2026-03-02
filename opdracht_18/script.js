const password = document.getElementById("password");
const text = document.getElementById("text");
const counter = document.getElementById("counter");

password.addEventListener('input', function() {

    let length = password.value.length;
    counter.innerText = length;

    if (length > 0 && length < 6) {
        text.style.color = "red";
        text.innerText = "Wachtwoord te kort";
    } else if (length == 0){
        text.innerText = "Enter password";
        text.style.color = "black";
    } else {
        text.style.color = "green";
        text.innerText = "Sterk wachtwoord!";
    }
});