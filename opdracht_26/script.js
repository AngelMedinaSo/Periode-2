const playlist = [
    {titel: "Love", artiest: "Keyshia Cole", duur: 4.15},
    {titel: "Poesia Acustica #2", artiest: "Pinapple sTormTv", duur: 7.52},
    {titel: "Happier", artiest: "Olivia Rodrigo", duur: 2.56},
    {titel: "Watermelon Sugar", artiest: "Harry Styles", duur: 2.54},
    {titel: "Save Your Tears", artiest: "The Weeknd", duur: 3.35}
];

const container = document.getElementById("playlist");

for (let nummer of playlist) {
    const p = document.createElement("p");
    p.innerText = `${nummer.titel} – ${nummer.artiest} (${nummer.duur} minuten)`;
    container.appendChild(p);
}