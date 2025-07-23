let countdown;
const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

function startTimer(type) {
  clearInterval(countdown); // clear any existing timer

  let duration;
  if (type === "soft") duration = 4 * 60;
  else if (type === "medium") duration = 6 * 60;
  else if (type === "hard") duration = 10 * 60;

  statusDisplay.textContent = `Boiling your ${type} egg...`;

  const endTime = Date.now() + duration * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "00:00";
      statusDisplay.textContent = `🥚 Your ${type} egg is ready!`;
      return;
    }

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}
