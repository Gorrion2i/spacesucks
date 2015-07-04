window.addEventListener('load', init, false);
var canvas = null,
    ctx = null;
var x = 50,
    y = 50;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

function run() {
    requestAnimationFrame(run);
    act();
    paint(ctx);
}

function act() {
    x += 1;
    if (x > canvas.width)
        x = -100;
}

function paint(ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, 100, 50);
}
//Funcion
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
})();