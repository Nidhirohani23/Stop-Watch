let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps-list');

function updateDisplay() {
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    timeDisplay.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    lapsList.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = timeDisplay.textContent;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapsList.appendChild(li);
}

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', lapStopwatch);
