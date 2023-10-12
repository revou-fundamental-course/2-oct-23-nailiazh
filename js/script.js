const celciusTeks = document.getElementById('celcius-teks')
const fahrenheitTeks = document.getElementById('fahrenheit-teks')
const celciusInput = document.getElementById('celcius-input')
const fahrenheitInput = document.getElementById('fahrenheit-input')
const celciusTitle = document.getElementById('celcius-title')
const fahrenheitTitle = document.getElementById('fahrenheit-title')
const celciusExp = document.getElementById('celcius-exp')
const switchbtn = document.getElementById('btn-tukar')

var celciusInp
var fahrenheit
var hasil

const btnKonversi = document.getElementById('button-konversi')
const btnReset = document.getElementById('button-reset')
const btnReverse = document.getElementById('button-reverse') 

// Switch
const switchBtn = document.getElementById('btn-tukar')
switchBtn.addEventListener('click', function(){
    celciusTeks.innerHTML = "Fahrenheit (F)"
    fahrenheitTeks.innerHTML = "Celcius (C)"
    celciusInput.innerHTML = "Fahrenheit (F)"
    fahrenheitInput.innerHTML = "Celcius (C)"
    celciusTitle.innerHTML = "Fahrenheit (F)"
    fahrenheitTitle.innerHTML = "Celcius (C)"
    switchbtn.innerHTML = "Fahrenheit > Celcius"
    celciusExp.innerHTML = "Suhu S dalam derajat Celcius (C) sama dengan suhu S dalam derajat Fahrenheit kali 9/5 dikurang 32."
})
// Konversi
btnKonversi.addEventListener('click',function(){
    celciusInp = document.getElementById('convers-field').value
    hasil = Number(celciusInp * (9/5) + 32);
    document.getElementById('output-field').value = hasil
    document.getElementById('cara-kalk').value = celciusInp + " * (9/5) + 32 = " + hasil
})

// Reset
btnReset.addEventListener('click',function(){
    document.getElementById('output-field').value = ""
    document.getElementById('convers-field').value = ""
    document.getElementById('cara-kalk').value = ""  
})

// Reserve
btnReverse.addEventListener('click',function(){
    celciusTeks.innerHTML = "Fahrenheit (F)"
    fahrenheitTeks.innerHTML = "Celcius (C)"
    celciusInput.innerHTML = "Fahrenheit (F)"
    fahrenheitInput.innerHTML = "Celcius (C)"
    celciusTitle.innerHTML = "Fahrenheit (F)"
    fahrenheitTitle.innerHTML = "Celcius (C)"
    switchbtn.innerHTML = "Fahrenheit > Celcius"
    celciusExp.innerHTML = "Suhu S dalam derajat Celcius (C) sama dengan suhu S dalam derajat Fahrenheit kali 9/5 dikurang 32."

    fahrenheit = document.getElementById('farenheit').value
    hasil = Number((fahrenheit - 32) * 5/9);
    document.getElementById('celcius').value = hasil
    document.getElementById('kalkulasi').value = "( " + fahrenheit + " - 32) * 5/9 = " + hasil
})

