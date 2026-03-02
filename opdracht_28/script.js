let broth = [
    { naam: "Shoyu", emoji: "🥣", rating: 8 },
    { naam: "Miso", emoji: "🍥", rating: 9 },
    { naam: "Tonkotsu", emoji: "🍖", rating: 10 }
];

let noodles = [
    { naam: "Thin noodles", emoji: "🍜", rating: 7 },
    { naam: "Thick noodles", emoji: "🍜", rating: 9 },
    { naam: "Udon style", emoji: "🍲", rating: 8 }
];

let toppings = [
    { naam: "Egg", emoji: "🥚", rating: 10 },
    { naam: "Naruto", emoji: "🍥", rating: 8 },
    { naam: "Corn", emoji: "🌽", rating: 7 }
];

let spiceLevel = [
    { naam: "Mild", emoji: "🙂", rating: 6 },
    { naam: "Spicy", emoji: "🌶️", rating: 9 },
    { naam: "Extreme", emoji: "🔥", rating: 10 }
];

const btn = document.getElementById("btn");
const result = document.getElementById("result");

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

btn.addEventListener("click", function() {

    let chosenBroth = randomItem(broth);
    let chosenNoodles = randomItem(noodles);
    let chosenTopping = randomItem(toppings);
    let chosenSpice = randomItem(spiceLevel);

    result.innerHTML =
        "<h2>Your Ramen Bowl</h2>" +
        "<p>" + chosenBroth.emoji + " Broth: " + chosenBroth.naam + " (⭐ " + chosenBroth.rating + ")</p>" +
        "<p>" + chosenNoodles.emoji + " Noodles: " + chosenNoodles.naam + " (⭐ " + chosenNoodles.rating + ")</p>" +
        "<p>" + chosenTopping.emoji + " Topping: " + chosenTopping.naam + " (⭐ " + chosenTopping.rating + ")</p>" +
        "<p>" + chosenSpice.emoji + " Spice: " + chosenSpice.naam + " (⭐ " + chosenSpice.rating + ")</p>";

});