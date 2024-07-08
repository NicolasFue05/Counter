// Constants

const showNumber = document.getElementById('num-count');
const up = document.getElementById('up');
const reset = document.getElementById('reset');
const down = document.getElementById('down');
let count = 0;
// when buttons clicked do something

up.onclick = function() {
    count++;
    showNumber.innerText = count;
}

down.onclick = function() {
    count--;
    showNumber.innerText = count; 
}

reset.onclick = function() {
    count = 0;
    showNumber.innerText = count;
}