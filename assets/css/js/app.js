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

  function displayForecast(){
    let forecastElement= document.querySelector("#forecast");
    
    let forecastHTML=  `<div class="row">`;
    days.forEach(function(day){
      forecastHTML=
      forecastHTML +
        `
        <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
      `;
    });

      forecastHTML = forecastHTML + `</div>`;
      forecastElement.innerHTML= forecastHTML;
      console.log(forecastHTML);
  }
    
   displayForecast();

  function updateDateInfo() {}

  let updateTime = document.querySelector("#time-info");
  updateTime.addEventListener("load", updateDateInfo);
  updateTime.innerHTML = `${day} ${time}`;




    function handleSubmit(event) {
      event.preventDefault();
    let city = document.querySelector(".city");
    let cityInput = document.querySelector("#city-input");
      city.innerHTML = cityInput.value;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;
      console.log(url);
      axios.get(url).then(showWeather);
    }


    function getForecast(coordinates){
      console.log(coordinates);
         let apiKey = "ca1ffb1091b0df583fbba9435o82b47tc";
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query={query}&key={apiKey}`;
        axios.get(apiUrl).then(displayForecast);
      }
    let searchForm = document.querySelector(".search-form");
    searchForm.addEventListener("submit", handleSubmit);

    function showWeather(response) {
      let temperature = Math.round(response.data.main.temp);
      console.log(temperature);

      celsiusTemperature = response.data.main.temp;

      let currentTemperature = document.querySelector(".temperature");
      currentTemperature.innerHTML=`${temperature}`;
      let humidityElement=document.querySelector(".humidity");
      humidityElement.innerHTML=response.data.main.humidity;
      let windElement = document.querySelector(".wind");
      windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
      let descriptionElement=document.querySelector(".description");
      descriptionElement.innerHTML=response.data.weather[0].description;
      let iconElement=document.querySelector("#icon");
      iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
      iconElement.setAttribute("alt", response.data.weather[0].description);

        getForecast(response.data.coord);
    
    }

    let apiKey = "a867e25f2d83db579421a57fd8e937ec";
    let units = "metric";


      function displayFahrenheitTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector(".temperature");
        
        celsiusLink.classList.remove("active");
        fahrenheitElement.classList.add("active");
        let fahTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahTemperature);
      }
      let fahrenheitElement = document.querySelector("#fahrenheit");
      fahrenheitElement.addEventListener("click", displayFahrenheitTemperature);


      function displayCelsiusTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector(".temperature");
            celsiusLink.classList.add("active");
            fahrenheitElement.classList.remove("active");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
      }
      let celsiusTemperature = null;
      
      let celsiusLink = document.querySelector("#celsius-link");
      celsiusLink.addEventListener("click", displayCelsiusTemperature);

  