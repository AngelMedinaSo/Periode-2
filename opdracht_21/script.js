const activiteiten = ["wandelen", "mediteren", "een dutje doen", "schilderen", "hardlopen"];
const voorwerpen = ["een kop thee", "je favoriete boek", "je telefoon uitzetten", "muziek luisteren", "een snack"];

const adviesBtn = document.getElementById("adviesBtn");
const adviesP = document.getElementById("advies");

adviesBtn.addEventListener("click", function() {
    const activiteit = activiteiten[Math.floor(Math.random() * activiteiten.length)];
    const voorwerp = voorwerpen[Math.floor(Math.random() * voorwerpen.length)];

    adviesP.innerText = `Vandaag moet jij ${activiteit} met ${voorwerp}.`;
});