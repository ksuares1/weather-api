// ⏰Feature #1
// In your project, display the current date and time using JavaScript: Tuesday 16:00

// 🕵️‍♀️Feature #2
// Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

// 🙀Bonus Feature
// Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

// use dom innerhtml to update the date and time upon loading
let now = new Date();
let time = now.toLocaleTimeString("en-US");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

function updateDateInfo() {}

let updateTime = document.querySelector("#time-info");
updateTime.addEventListener("load", updateDateInfo);
updateTime.innerHTML = `${day} ${time}`;

// function for city update

function search(event) {
  event.preventDefault();
  let city = document.querySelector(".city");

  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;
}

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", search);



// [X]In your project, when a user searches for a city (example: New York), it should display the name of the city on the result page 
// and the current temperature of the city.

// Please note: there's no need to include a temperature conversion at the moment. This will be taught later on in the course.

// 🙀 Bonus point:
// Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates and display and the city and current temperature using the OpenWeather API.




function showWeather(response) {
  let city = response.data.name;
  console.log(city);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemperature = document.querySelector(".temperature");
  currentTemperature.innerHTML = `${temperature}`;
}

let apiKey = "a867e25f2d83db579421a57fd8e937ec";
let units = "metric";
let city="Boston";
let url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
console.log(url);

axios.get(url).then(showWeather);