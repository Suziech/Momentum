function onGeoOk(position) {
    const API_KEY = '85b8c66f1e504081c5adf98868500b07'
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerHTML = data.weather[0].main === 'Clouds' ? `<i class="fa-solid fa-cloud"></i> <span>${Math.floor(data.main.temp)}°C</span>` : `<i class="fa-solid fa-cloud-showers-heavy"></i> <span>${Math.floor(data.main.temp)}°C</span>`
        // weather.innerText = `${data.weather[0].main === 'Clouds' ? clouds : sun} ${Math.floor(data.main.temp)}°C`
    })
}

function onGeoError() {
    alter("can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

