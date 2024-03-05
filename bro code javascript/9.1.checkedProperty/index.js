let myCheckbox = document.getElementById("myCheckbox");
let visaButton = document.getElementById("visaButton");
let paypalButton = document.getElementById("paypalButton");
let masterCardButton = document.getElementById("masterCardButton");
let submitButton = document.getElementById("submitButton");
let content = document.getElementById("content");
let subContent = document.getElementById("subContent");


submitButton.onclick = function () {
    if (myCheckbox.checked) {
        content.textContent = "kamu sudah SUBSCRIBE";
    } 
    else {
        content.textContent = "Belum Subscribe";
    }


    if (visaButton.checked) {
        subContent.textContent = "kamu pake VISA";
    } 
    else if (paypalButton.checked) {
        subContent.textContent = "kamu pake PAYPAL";
    } 
    else if (masterCardButton.checked) {
        subContent.textContent = "kamu pake MASTER CARD";
    } 
    else {
        subContent.textContent = "kamu belum pake pembayaran";    
    }


}



/*
INI JIKA TANPA BUTTON

myCheckbox.addEventListener('change', function() {
    if (this.checked) {
        content.textContent = "kamu sudah SUBSCRIBE";
    } else {
        content.textContent = "Belum Subscribe";
    }
});

*/