let timer;
let isRunning = false;
let lapNo = 1;

const hrEle = document.getElementById('hr');
const minEle = document.getElementById('min');
const secEle = document.getElementById('sec');
const msecEle = document.getElementById('msec');
const lapListEle = document.getElementById('lapList');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');

function startTimer() {
    isRunning = true;
    timer = setInterval(updateTimer, 10);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    hrEle.textContent = '00';
    minEle.textContent = '00';
    secEle.textContent = '00';
    msecEle.textContent = '00';
    lapNo = 1;
    lapListEle.innerHTML = '';
}

function updateTimer() {
    let hr = Number(hrEle.textContent);
    let min = Number(minEle.textContent);
    let sec = Number(secEle.textContent);
    let msec = Number(msecEle.textContent);

    msec++;

    if (msec === 100) {
        msec = 0;
        sec++;
    }

    if (sec === 60) {
        sec = 0;
        min++;
    }

    if (min === 60) {
        min = 0;
        hr++;
    }

    hrEle.textContent = hr.toString().padStart(2, '0');
    minEle.textContent = min.toString().padStart(2, '0');
    secEle.textContent = sec.toString().padStart(2, '0');
    msecEle.textContent = msec.toString().padStart(2, '0');
}

function lapTime() {
    if (isRunning) {
        const lapTime = `${hrEle.textContent}:${minEle.textContent}:${secEle.textContent}.${msecEle.textContent}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapNo}: ${lapTime}`;
        lapListEle.appendChild(lapItem);
        lapNo++;
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', lapTime);
