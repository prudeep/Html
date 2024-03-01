document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('pyramidCanvas');
    const ctx = canvas.getContext('2d');

    function drawPyramid() {
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.moveTo(200, 350);
        ctx.lineTo(100, 250);
        ctx.lineTo(300, 250);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'gold';

        ctx.beginPath();
        ctx.moveTo(200, 350);
        ctx.lineTo(100, 250);
        ctx.lineTo(200, 250);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(200, 350);
        ctx.lineTo(300, 250);
        ctx.lineTo(200, 250);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = 'darkorange';

        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.lineTo(200, 250);
        ctx.lineTo(200, 150);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.lineTo(200, 250);
        ctx.lineTo(300, 250);
        ctx.closePath();
        ctx.fill();
    }

    drawPyramid();
});
