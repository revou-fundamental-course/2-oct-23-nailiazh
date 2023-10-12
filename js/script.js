// Switch
const celciusTeks = document.getElementById('celcius-teks')
const fahrenheitTeks = document.getElementById('fahrenheit-teks')
const celciusInput = document.getElementById('celcius-input')
const fahrenheitInput = document.getElementById('fahrenheit-input')
const celciusTitle = document.getElementById('celcius-title')
const fahrenheitTitle = document.getElementById('fahrenheit-title')
const celciusExp = document.getElementById('celcius-exp')

const switchBtn = document.getElementById('btn-tukar')
switchBtn.addEventListener('click', function(){
    celciusTeks.innerHTML = "Fahrenheit (F)"
    fahrenheitTeks.innerHTML = "Celcius (C)"
    celciusInput.innerHTML = "Fahrenheit (F)"
    fahrenheitInput.innerHTML = "Celcius (C)"
    celciusTitle.innerHTML = "Fahrenheit (F)"
    fahrenheitTitle.innerHTML = "Celcius (C)"
    celciusExp.innerHTML = "Suhu S dalam derajat Celcius (C) sama dengan suhu S dalam derajat Fahrenheit kali 9/5 dikurang 32."
})
// Konversi
// Reverse

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