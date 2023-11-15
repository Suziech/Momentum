function onGeoOk(position) {
    const API_KEY = '85b8c66f1e504081c5adf98868500b07'
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerHTML = data.weather[0].main === 'Clouds' ? 
        `<i class="fa-solid fa-cloud"></i> <span>${Math.floor(data.main.temp)}°</span>` 
        : data.weather[0].main === 'Clear' ? `<i class="fa-regular fa-sun"></i> <span>${Math.floor(data.main.temp)}°</span>`
        : data.weather[0].main === 'Rain' && `<i class="fa-solid fa-cloud-rain"></i>`
    })
}

function onGeoError() {
    alter("can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

