document.addEventListener('DOMContentLoaded', () => {
    // Using CountAPI to track total page visits
    function cb(response) {
        document.getElementById('visits').innerText = response.value;
    }

    // Fix the player resizing issue when minimizing/maximizing
    const playerWrapper = document.querySelector('.player-wrapper');
    const resizePlayer = () => {
        if (playerWrapper) {
            playerWrapper.style.height = `${playerWrapper.offsetWidth * 9 / 16}px`;
        }
    };
    window.addEventListener('resize', resizePlayer);
    resizePlayer(); // Initial call
});
