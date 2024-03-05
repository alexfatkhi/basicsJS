let count = 0;

let decrease = document.getElementById("decreaseButton");
let reset = document.getElementById("resetButton");
let increase = document.getElementById("increaseButton");

document.getElementById("number").innerText = count;

decrease.onclick = function () {
    count--;
    document.getElementById("number").innerText = count;
}

reset.onclick = function () {
    count = 0;
    document.getElementById("number").innerText = count;
}

increase.onclick = function () {
    count++;
    document.getElementById("number").innerText = count;
}

