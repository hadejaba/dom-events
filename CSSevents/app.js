// Add an event listener to the start button, so that the cat starts moving across the
// screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.

// #1

let movePixels = 10;
const delayMs = 50;
let catTimer = null; // does not have a value, but it will
// the cat's placement and movement start recording the speed of the cat
function catWalk() {
    let img = document.getElementsByTagName('img')[0];
    let currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';
    if (currentLeft > (window.innerWidth - img.width)) {
        img.style.left = '0px';
    }
}
function startCatWalk() {
    catTimer = window.setInterval(catWalk, delayMs);
}

// starts the timer and keeps the speed

function onStartClick() {
    startCatWalk();
}
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);


function onStopClick() {
    window.clearInterval(catTimer);
}

// stop button functionality 

const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);

// speed functionality
function onSpeedClick() {
    movePixels += 2;
    let speed = movePixels * (1000 / 20);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
const speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);



