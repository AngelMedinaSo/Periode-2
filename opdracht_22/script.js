const input = document.getElementById("naamInput");
const button = document.getElementById("begroetBtn");
const begroeting = document.getElementById("begroeting");

button.addEventListener("click", function () {
  const naam = input.value.trim();

  if (naam === "") {
    begroeting.innerText = "Typ eerst je naam!";
    begroeting.style.color = "red";
  } else {
    begroeting.innerText = `Hallo, ${naam}!`;
    begroeting.style.color = "green";
    input.value = "";
  }
});
