let whiteBalls = [61,32,63,21,36,23,69,37,62,39,26,41,16,28,22,42,9]
let redBalls = [18,24,4,14,26]

window.onload = function() {
    isTodayANewDay() ? getNumbersFromToday() : beginANewDay();
    deliverNumbers();
};

function isTodayANewDay() {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let x = localStorage.getItem('balthier-date');
    return x == today ? false : true;
};

function beginANewDay() {
    let today = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let newNumbers = addRedBall(redBalls, getWhiteBalls(whiteBalls));
    localStorage.setItem('balthier-date', today);
    localStorage.setItem('balthier-numbers', newNumbers);
};

function deliverNumbers() {
    let numbers = addRedBall(redBalls, getWhiteBalls(whiteBalls));
    document.getElementById('numbers').innerHTML = numbers;
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
