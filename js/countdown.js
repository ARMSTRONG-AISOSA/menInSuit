// countdown.js

function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display results
        countdownElement.innerHTML = `
            <div class="cd-item"><span>${days}</span><p>Days</p></div>
            <div class="cd-item"><span>${hours}</span><p>Hours</p></div>
            <div class="cd-item"><span>${minutes}</span><p>Minutes</p></div>
            <div class="cd-item"><span>${seconds}</span><p>Seconds</p></div>
        `;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "The event has started!";
        }
    }

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
}

// Set the target date (May 31, 2025, 3:00 PM)
const targetDate = new Date('May 31, 2025 15:00:00').getTime();
startCountdown(targetDate);
