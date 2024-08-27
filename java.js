const box = document.getElementById('animatedBox');
let position = 0;
let direction = 1;

function animate() {
    position += direction;
    if (position > window.innerWidth - 100 || position < 0) {
        direction *= -1;
    }
    box.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

animate();
