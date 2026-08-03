const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const verveBtn = document.getElementById("verveBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed`;
    } else {
        subResult.textContent = `You are not subscribed`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    }
     else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card`;
    }
    else if (verveBtn.checked) {
        paymentResult.textContent = `You are paying with Verve`;
    } 
    else {
        paymentResult.textContent = `Select payment method`;
    }
    
}