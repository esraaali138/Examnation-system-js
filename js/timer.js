const startingMinutes = 20;
const countdownTimer = document.getElementById("time");
const totalTime = startingMinutes * 60;
let time;

function initializeTimer() {
  const startTime = localStorage.getItem("timerStart");
  if (startTime) {
    const startTimeDate = new Date(parseInt(startTime, 10));
    const currentTime = new Date();
    time = Math.max(
      0,
      Math.floor(
        (startTimeDate.getTime() + totalTime * 1000 - currentTime.getTime()) /
          1000
      )
    );
  } else {
    time = totalTime;
    localStorage.setItem("timerStart", new Date().getTime());
  }
}

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownTimer.innerHTML = `${minutes}:${seconds}`;

  time--;

  if (time < 0) {
    clearInterval(timer);
    updateCounter();
    localStorage.removeItem("timerStart");
    location.replace("timeout.html");
  }
}
const timer = setInterval(updateCountdown, 1000);

function updateCounter() {
  if (counter === 0) {
    localStorage.setItem("counter", 0);
  } else {
    localStorage.setItem("counter", counter);
  }
}

initializeTimer();
