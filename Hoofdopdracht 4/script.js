let hunger = 100;
let energy = 100;
let happiness = 100;

const hungerText = document.getElementById('hunger');
const energyText = document.getElementById('energy');
const happinessText = document.getElementById('happiness');
const statusMessage = document.getElementById('statusMessage');

const hungerBar = document.getElementById('hungerBar');
const energyBar = document.getElementById('energyBar');
const happinessBar = document.getElementById('happinessBar');

function updateStatus() {
    hungerText.innerText = `Honger: ${hunger}`;
    hungerBar.style.width = hunger + "%";
    
    energyText.innerText = `Energie: ${energy}`;
    energyBar.style.width = energy + "%";
    
    happinessText.innerText = `Geluk: ${happiness}`;
    happinessBar.style.width = happiness + "%";

    if (hunger <= 0 && energy <= 0 && happiness <= 0) {
        statusMessage.innerText = "Je Tamagotchi is dood! 💀";
        statusMessage.classList.add('dead');
    } else {
        statusMessage.innerText = "Je Tamagotchi is gelukkig! 😊";
        statusMessage.classList.remove('dead');
    }
}

document.getElementById('feed').addEventListener('click', () => {
    hunger = Math.min(hunger + 20, 100);
    updateStatus();
});

document.getElementById('sleep').addEventListener('click', () => {
    energy = Math.min(energy + 20, 100);
    updateStatus();
});

document.getElementById('play').addEventListener('click', () => {
    happiness = Math.min(happiness + 20, 100);
    updateStatus();
});

// 5. Automatic decrease timer (every second) [cite: 156-162]
setInterval(() => {
    if (hunger > 0) hunger--;
    if (energy > 0) energy--;
    if (happiness > 0) happiness--;
    
    updateStatus();
}, 1000);

updateStatus();