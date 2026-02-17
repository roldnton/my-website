function startBall() {
    const ball = document.getElementById("ball");
    
    let x = 0;
    let y = 0;
    
    // Speed
    let dx = 4;
    let dy = 4;

    function animate() {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 50;

        x += dx;
        y += dy;

        if (x >= maxX || x <= 0) {
            dx = -dx; 
        }

        if (y >= maxY || y <= 0) {
            dy = -dy;
        }

        ball.style.left = x + "px";
        ball.style.top = y + "px";

        requestAnimationFrame(animate);
    }

    animate();
}

startBall();