
// Values 
const meter = 3.281 
const liter = 0.264
const kilogram = 2.204

// User interactions 
const inputBox = document.getElementById('input-box')
const convertBtn = document.getElementById('convert-btn')

// Coverted Value Element Boxes

const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')


//Function 

function grabValue() {
}

// Event listen on click + conversions and display

convertBtn.addEventListener('click', function(){
 grabValue()
 
const inputValue = inputBox.value
const kilogramToPounds = inputValue * kilogram
const literToGallon = inputValue * liter
const  metersToFeet = inputValue * meter
//
const gallonToLiter = inputValue / liter
const feetToMeter = inputValue / meter
const poundToKilo = inputValue / kilogram

// If else for meter (singular) and plural
if (inputValue === '1') {
 length.innerHTML =`
 <h2>Length (Meter/Feet) </h2> 
 <p> ${inputValue} meter = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters </p>` 
} else {
 length.innerHTML =`
 <h2>Length (Meter/Feet) </h2> 
 <p> ${inputValue} meters = ${metersToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters </p>`
}


// If else for liter (singular) to liters (plural)
if (inputValue === '1') {
 volume.innerHTML =`
 <h2>Volume(Liters/Gallons) </h2> 
 <p> ${inputValue} liter = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallon = ${gallonToLiter.toFixed(3)} liters </p>`
} else {
 volume.innerHTML =`
 <h2>Volume(Liters/Gallons) </h2> 
 <p> ${inputValue} liters = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)} liters </p>`
}


// if else for kilo (singular) to plural 
if (inputValue === '1') {
 mass.innerHTML =`
 <h2>Mass (Kilogram/Pounds) </h2> 
 <p>${inputValue} kilo = ${kilogramToPounds.toFixed(3)} pounds | ${inputValue} pound = ${poundToKilo.toFixed(3)} kilos </p>`
} else {
 mass.innerHTML =`
 <h2>Mass (Kilogram/Pounds) </h2> 
 <p>${inputValue} kilos = ${kilogramToPounds.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)} kilos </p>`
 }


if (inputValue === '') {
    mass.innerHTML = `<h2> Please enter a valid value to convert` 
    volume.innerHTML =  `<h2> Please enter a valid value to convert` 
    length.innerHTML = `<h2> Please enter a valid value to convert`
}

 inputBox.value = ''
})





