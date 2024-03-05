let textBox = document.getElementById("textBox");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let submitButton = document.getElementById("submitButton");
let result = document.getElementById("result");

let temp;

submitButton.onclick = function () {
    let angka = Number(textBox.value);
    
    if (toFahrenheit.checked) {
        temp = (angka * 9 / 5) + 32;
        result.textContent = temp + `°F`;
    }    
    else if (toCelsius.checked) {
        temp = (angka - 32) * (5 / 9);
        result.textContent = `${temp}°C`;
    }
}

