const number = document.getElementById('number');
const decreaseBtn = document.getElementById('decreaseBtn');
const restartBtn = document.getElementById('restartBtn');
const increaseBtn = document.getElementById('increaseBtn')
let count = 0;
number.innerText = count;

decreaseBtn.onclick = function () {
count--;
number.textContent = count;
}

restartBtn.onclick = function () {
count = 0;
number.textContent = count;
}

increaseBtn.onclick = function () {
count++;
number.textContent = count;
}