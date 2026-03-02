let pokemons = [
    { naam: "Pikachu", type: "Electric", powerlevel: 80, emoji: "⚡🐭" },
    { naam: "Greninja", type: "Water/Dark", powerlevel: 95, emoji: "💧🐸" },
    { naam: "Caterpie", type: "Bug", powerlevel: 30, emoji: "🐛" }
];

const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function() {

    let randomIndex = Math.floor(Math.random() * pokemons.length);
    let gekozen = pokemons[randomIndex];

    result.innerHTML =
        "<h2>" + gekozen.emoji + " " + gekozen.naam + "</h2>" +
        "<p>Type: " + gekozen.type + "</p>" +
        "<p>Powerlevel: " + gekozen.powerlevel + "</p>";

});