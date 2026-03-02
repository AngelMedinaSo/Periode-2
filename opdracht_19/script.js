let favorieteDingen = ["games", "eten", "volleyball", "basketball", "koken"];

document.getElementById("eerste").innerHTML = "Het eerste item: " + favorieteDingen[0];

document.getElementById("laatste").innerHTML = "Het laatste item: " + favorieteDingen[favorieteDingen.length - 1];

document.getElementById("totaal").innerHTML = "Totaal aantal items: " + favorieteDingen.length;

document.getElementById("lijst").innerHTML = "Lijst: " + favorieteDingen;

favorieteDingen[1] = "Brazillie";

document.getElementById("nieuweLijst").innerHTML = "Nieuwe lijst: " + favorieteDingen;