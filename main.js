// My Weather

// DOM Elements
let weekEl = document.getElementById('week-weather');
let celsBtn = document.getElementById('cels');
let fahrBtn = document.getElementById('fahr');

// Initialize Weather Data

// Option 1: Parallel Arrays
// let temps = [15, 20, 30, 18, 12, 25, 20];
// let days = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// let pop = ['50%', '70%', '20%', '90%', '20%', '10%', '0%'];

// Option 2: Array of Objects
let weather = [{
    day: 'Mon',
    temp: 15,
    pop: '50%'
}, {
    day: 'Tues',
    temp: 20,
    pop: '70%'
},
{
    day: 'Wed',
    temp: 30,
    pop: '20%'
},
{
    day: 'Thur',
    temp: 18,
    pop: '90%'
},
{
    day: 'Fri',
    temp: 18,
    pop: '10%'
},
{
    day: 'Sat',
    temp: 20,
    pop: '20%'
},
{
    day: 'Sun',
    temp: 3,
    pop: '0%'
}];

let currentUnit = "C";

for (let i = 0; i < weather.length; i++) {
    weekEl.innerHTML += `<p>${weather[i].day}: ${weather[i].temp.toFixed(1)}&deg;C ${weather[i].pop} POP</p>`
}

// Add Event Listeners
celsBtn.addEventListener('click', convertToCels);
fahrBtn.addEventListener('click', convertToFahr);

// Event Functions
function convertToFahr() {
    if (currentUnit == "C") {
        convert(celsToFahr, "F");
        currentUnit = "F";
        celsBtn.classList.remove('active');
        fahrBtn.classList.add('active');
    }

}

function convertToCels() {
    if (currentUnit == "F") {
        convert(fahrToCels, "C");
        currentUnit = "C";
        fahrBtn.classList.remove('active');
        celsBtn.classList.add('active');
    }
}

// Helper Functions
function convert(convertFunc, unit) {
    // Convert & Display Temperatures
    weekEl.innerHTML = ""; // Clear html display
    for (let i = 0; i < weather.length; i++) {
        weather[i].temp = convertFunc(weather[i].temp); // Convert Temp
        weekEl.innerHTML += `<p>${weather[i].day}: ${weather[i].temp.toFixed(1)}&deg;${unit} ${weather[i].pop} POP</p>` // Display
    }
}

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}

function celsToFahr(celsTemp) {
    return celsTemp * 9 / 5 + 32;
}