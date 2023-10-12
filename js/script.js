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
    celciusInp = document.getElementById('celcius-input').value
    hasil = Number(celciusInp * (9/5) + 32);
    document.getElementById('output-field').value = hasil
    document.getElementById('output-field').value = celciusInp + " * (9/5) + 32 = " + hasil
})

// Reset
btnReset.addEventListener('click',function(){
    document.getElementById('farenheit').value = ""
    document.getElementById('celcius').value = ""
    document.getElementById('kalkulasi').value = ""  
})

// Reserve
btnReverse.addEventListener('click',function(){
    fahrenheit = document.getElementById('farenheit').value
    hasil = Number((fahrenheit - 32) * 5/9);
    document.getElementById('celcius').value = hasil
    document.getElementById('kalkulasi').value = "( " + fahrenheit + " - 32) * 5/9 = " + hasil
    celciusTeks.innerHTML = "Fahrenheit (F)"
    fahrenheitTeks.innerHTML = "Celcius (C)"
    celciusInput.innerHTML = "Fahrenheit (F)"
    fahrenheitInput.innerHTML = "Celcius (C)"
    celciusTitle.innerHTML = "Fahrenheit (F)"
    fahrenheitTitle.innerHTML = "Celcius (C)"
    celciusExp.innerHTML = "Suhu S dalam derajat Celcius (C) sama dengan suhu S dalam derajat Fahrenheit kali 9/5 dikurang 32."
})

// ganti text berdasarkan class
// const title = document.getElementsByClassName('title')
// title.item(0).innerHTML = "hello world"
// console.log(title)
// function changeTitle() {
//     title.innerHTML = "hello"
// }

// ganti text berdasarkan id
// const title = document.getElementById('title')
// title.innerHTML = "hello world"
// console.log(title)
// function changeTitle() {
//     title.innerHTML = "hello"
// }

// mengganti teks ketika klik button
// const title = document.getElementById('title')
// const conversionButton = document.getElementById('button-konversi')

// conversionButton.addEventListener('click', changeTitle)
// function changeTitle() {
//     title.innerHTML = "Ini Kalkulator"
// }

//atau
// conversionButton.addEventListener('click', function(){
//     title.innerHTML = "Ini Kalkulator"
// })

// reverse = ditukar form beserta valuenya langsung