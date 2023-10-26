const celciusText = document.getElementById('celcius-text')
const fahrenheitText = document.getElementById('fahrenheit-text')
const celciusInput = document.getElementById('celcius-input')
const fahrenheitInput = document.getElementById('fahrenheit-input')
const celciusTitle = document.getElementById('celcius-title')
const fahrenheitTitle = document.getElementById('fahrenheit-title')
const explanation = document.getElementById('explanation')
const reverseInfo1 = document.getElementById('reverse-info-1')
const reverseInfo2 = document.getElementById('reverse-info-2')
const alertInfo = document.getElementById('error-message')
const conversInput = document.getElementById('confers-field')

var temperature = [0, 1];
var input
var conversResult

const btnConversion = document.getElementById('button-conversion')
const btnReset = document.getElementById('button-reset')
const btnReverse = document.getElementById('button-reverse') 

// Validasi
function validateForm() {
    var x = document.forms["convers-form"]["input-form"].value;
    if (x == "") {
      alert("Masukkan derajat suhu dulu");
      return false;
    } else {
        calculate()
    }
  }

document.getElementById("convers-field").addEventListener('input', function
displayChange() {
    console.log(this.value)
    let e = this.value
    let chars = /^[0-9]+$/
    let strings= /^[A-z]+$/

    if (chars.test(e)) {
        alertInfo.innerHTML = ""
    } else if (strings.test(e)){
        alertInfo.innerHTML="<span class='alert'> Hanya masukkan angka</span>"
    } 
     else {
        alertInfo.innerHTML = "<span class='alert'> Masukkan derajat suhu</span>"
    }
})

// Konversi

function celciusCalculation(){
    input = document.getElementById('convers-field').value
    conversResult = Number(input * 1.8 + 32);
    document.getElementById('output-field').value = conversResult
    document.getElementById('method').value = input + " * (9/5) + 32 = " + conversResult
}
function fahrenheitCalculation(){
    input = document.getElementById('convers-field').value
    conversResult = Number((input - 32 ) * 0.5);
    document.getElementById('output-field').value = conversResult
    document.getElementById('method').value = "(" + input + " - 32) *5/9 = " + conversResult
}

function calculate(){
	if(temperature == 0)
    	celciusCalculation();
    else
        fahrenheitCalculation();
};

document.getElementById("button-conversion").onclick = function() {validateForm()};


// Reset
btnReset.addEventListener('click',function(){
    document.getElementById('output-field').value = ""
    document.getElementById('convers-field').value = ""
    document.getElementById('method').value = ""  
})

// Reserve
function fahrenheitToCelcius(){
    celciusText.innerHTML = "Celcius (C)"
    fahrenheitText.innerHTML = "Fahrenheit (F)"
    celciusInput.innerHTML = "Celcius (C)"
    fahrenheitInput.innerHTML = "Fahrenheit (F)"
    celciusTitle.innerHTML = "Celcius (C)"
    fahrenheitTitle.innerHTML = "Fahrenheit (F)"
    reverseInfo1.innerHTML = "Celcius"
    reverseInfo2.innerHTML = "Fahrenheit"
    explanation.innerHTML = "Suhu S dalam derajat Fahrenheit (F) sama dengan suhu S dalam derajat Celcius (C) dikurang 32 kali 5/9. <br>S(C)=(S(F) - 32) x 5/9 <br>atau <br>S(C)=(S(F) - 32) x 0.5"
}
function celciusToFahrenheit(){
    celciusText.innerHTML = "Fahrenheit (F)"
    fahrenheitText.innerHTML = "Celcius (C)"
    celciusInput.innerHTML = "Fahrenheit (F)"
    fahrenheitInput.innerHTML = "Celcius (C)"
    celciusTitle.innerHTML = "Fahrenheit (F)"
    fahrenheitTitle.innerHTML = "Celcius (C)"
    reverseInfo1.innerHTML = "Fahrenheit"
    reverseInfo2.innerHTML = "Celcius"
    explanation.innerHTML = "Suhu S dalam derajat Celcius (C) sama dengan suhu S dalam derajat Fahrenheit (F) kali 5/9 tambah 32 . <br>S(F)=(S(C) x 9/5) + 32<br>atau <br>S(F)=(S(C) x 1.8) + 32"
}
function temperatureReverse(){
    if(temperature) {
        temperature = 0;
        fahrenheitToCelcius();
        validateForm();
    }
    else {
        temperature = 1;
        celciusToFahrenheit();
        validateForm();
    }
}
function temperatureChange(){
    if(temperature) {
        temperature = 0;
        fahrenheitToCelcius();
    }
    else {
        temperature = 1;
        celciusToFahrenheit();
    }
}
document.getElementById("button-reverse").onclick = function() {temperatureReverse()};
document.getElementById("change").onclick = function() {temperatureChange()};

