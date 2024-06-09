const targetDate = new Date("June 9, 2024 20:00:00").getTime();
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const proceedButton = document.getElementById("proceedButton");

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "THIS IS YOUR DAY, SAYANG!";
    proceedButton.disabled = false;
    proceedButton.style.cursor = "pointer";
    document.body.style.overflow = "auto";
  }
}, 1000);

proceedButton.addEventListener("click", () => {
  if (!proceedButton.disabled) {
    alert("YOU GOT IT BABY!😘");
  }
});
