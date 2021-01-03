let hoursDisplay = document.getElementById('hours'),
    minutesDisplay = document.getElementById('minutes'),
    secondsDisplay = document.getElementById('seconds');

const setTime = () => {
    let d = new Date();
    let time = {};

    time.hours = d.getHours();
    time.minutes = d.getMinutes();
    time.seconds = d.getSeconds();

    let hours = (time.hours < 10 ? '0' + time.hours : time.hours),
        minutes = (time.minutes < 10 ? '0' + time.minutes : time.minutes),
        seconds = (time.seconds < 10 ? '0' + time.seconds : time.seconds);

    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
};

setInterval(setTime, 1000);