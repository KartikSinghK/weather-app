const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const getAPI = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
};
async function getWeather(city) {
    const api = getAPI(city);
    const res = await fetch(api);
    const data = await res.json();
    const image = document.querySelector('.image');
    const temp = document.querySelector('#number');
    const rain = document.querySelector('.rain');
    const humid = document.querySelector('.humid');
    const wind = document.querySelector('.wind');
    document.querySelector('.place').innerText = data.name;
    image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    temp.innerText = data.main.temp;
    if (data.rain)
        rain.innerText = `${data.rain["3h"]} mm`;
    humid.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} m/s`;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const city = search.value;
    getWeather(city);

    console.log(city);
    search.value = "";
});

getWeather("delhi");
