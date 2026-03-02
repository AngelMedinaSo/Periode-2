const kleurP = document.getElementById("kleur");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

setInterval(function() {
    const kleur = randomColor();
    document.body.style.backgroundColor = kleur;
    kleurP.innerText = kleur;
}, 1000);