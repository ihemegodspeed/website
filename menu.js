// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburgerMenu');
const list = document.getElementById('list');

hamburgerMenu.addEventListener('click', () => {
    list.classList.toggle('show');
})

// Jumping text animation
const letters = document.querySelectorAll('.jump-text span');

function startJump() {
    letters.forEach(letter => {
        letter.style.animationPlayState = 'running';
    });
}

function stopJump() {
    letters.forEach(letter => {
        letter.style.animationPlayState = 'paused';
    });
}

// Start/stop every 5 seconds
startJump(); // start initially
setInterval(() => {
    if (letters[0].style.animationPlayState === 'running') {
        stopJump();
    } else {
        startJump();
    }
}, 5000);
// Contact form submission
    document.getElementById('booking').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your message!   your message have been sent');
      this.reset();
    });
