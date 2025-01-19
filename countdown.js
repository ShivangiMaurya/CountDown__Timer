const timerDisplay = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };
  
  const datetimeInput = document.getElementById("datetime");
  const startButton = document.getElementById("startButton");
  
  let countdownInterval;
  
  startButton.addEventListener("click", () => {
    // Get the value from the input and convert it to a Date object
    const endTime = new Date(datetimeInput.value);
  
    // Check if the endTime is a valid future date
    if (isNaN(endTime) || endTime <= new Date()) {
      alert("Please select a valid future date and time!");
      return;
    }
  
    // If there's already a countdown, clear the previous interval
    if (countdownInterval) clearInterval(countdownInterval);
  
    // Start a new countdown
    countdownInterval = setInterval(() => {
      const now = new Date();
      const timeDifference = endTime - now;
  
      // If the countdown reaches zero, stop the interval and alert the user
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        alert("Countdown finished!");
        return;
      }
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      // Update the timer display
      timerDisplay.days.textContent = String(days).padStart(2, "0");
      timerDisplay.hours.textContent = String(hours).padStart(2, "0");
      timerDisplay.minutes.textContent = String(minutes).padStart(2, "0");
      timerDisplay.seconds.textContent = String(seconds).padStart(2, "0");
    }, 1000);
  });
  