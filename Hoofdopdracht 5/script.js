let timeLeft = 25 * 60;
let timerId = null;
let sessionsCompleted = 0;

const display = document.getElementById('timer-display');
const message = document.getElementById('message');
const sessionDisplay = document.getElementById('session-count');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerId !== null) return;

    message.textContent = "Focus tijd!";
    
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerId = null;
            sessionsCompleted++;
            sessionDisplay.textContent = `Sessies voltooid: ${sessionsCompleted}`;
            message.textContent = "Lekker gewerkt! Tijd voor pauze.";
            alert("Pomodoro voltooid!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    message.textContent = "Gepauzeerd";
}

function resetTimer() {
    pauseTimer();
    timeLeft = 25 * 60;
    updateDisplay();
    message.textContent = "";
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);