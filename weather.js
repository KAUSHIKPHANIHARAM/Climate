
const windSpeed = document.querySelector(".wind")

const Humidity = document.querySelector(".humidity")

const click = document.querySelector(".btn")

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-icon")

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`
const apiKey = "2f8abb82789d24056151877fce63a4db"
async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await res.json();
    document.querySelector(".city").innerHTML = data.name
    windSpeed.innerHTML = data.wind.speed + " km/h";
    Humidity.innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    // console.log(data.main.humidity, data.wind.speed);
    if (data.weather[0].main === "Clouds") {
        weatherImg.src = "images/clouds.jpg"
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherImg.src = "images/drizzle.png"
    }
    else if (data.weather[0].main === "Clear") {
        weatherImg.src = "images/clear.jpg"
    }
    else if (data.weather[0].main === "Rain") {
        weatherImg.src = "images/rain.jpg"
    }
    else if (data.weather[0].main === "Mist") {
        weatherImg.src = "images/mist.jpg"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})