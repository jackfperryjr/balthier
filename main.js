let whiteBalls = [61,32,63,21,36,23,69,37,62,39,26,41,16,28,22,42,9]
let redBalls = [18,24,4,14,26]
let balls = '';

window.onload = function() {
    isTodayANewDay() ? getNumbersFromToday() : beginANewDay();
    deliverNumbers();
};

function isTodayANewDay() {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let x = localStorage.getItem('balthier-date');
    return x == today ? true : false;
};

function getNumbersFromToday() {
    localStorage.getItem('balthier-numbers') == null ? beginANewDay() : balls = localStorage.getItem('balthier-numbers');
    console.log('Balls have been retrieved.');
};

function beginANewDay() {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let newNumbers = addRedBall(redBalls, getWhiteBalls(whiteBalls));
    localStorage.setItem('balthier-date', today);
    localStorage.setItem('balthier-numbers', newNumbers);
    console.log('Balls have been stored.');
    getNumbersFromToday();
};

function deliverNumbers() {
    const ballArray = balls.split(',');
    const ballElement = document.getElementById('numbers');
    ballArray.forEach(function(e, i) {
        if (i == (ballArray.length - 1)) {
            ballElement.innerHTML += `<span class="p-3 bg-danger border border-danger text-strong text-white rounded-circle text-center flex-ball">${e}</span>`;
        } else {
            ballElement.innerHTML += `<span class="p-3 bg-white border border-white text-strong text-danger rounded-circle text-center flex-ball">${e}</span>`;
        }
    });
    console.log('Balls have been delivered.');
};

function getWhiteBalls(x) {
    const newArray = [];
    x.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 5; i++) {
        newArray.push(x[i]);
    }

    return newArray;
};

function addRedBall(x, y) {
    const randomIndex = Math.floor(Math.random() * x.length);
    const randomNumber = x[randomIndex];
    let newArray = y.sort();
    newArray.push(randomNumber);

    return newArray;
};
