const { Weather } = require("./weather");
const weather = new Weather('London', 'uk');

const { UI } = require("./ui");
const ui = new UI();

require("../style.css");

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
