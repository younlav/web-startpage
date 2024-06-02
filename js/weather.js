const API_KEY = "9c4ad94dd579649ba5025891cf68140e";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //섭씨로 바꾸기 위해 metric 추가
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C / ${data.name}`;
      });
}
function onGeoError(){
    alert("Can't find you.")
}

//브라우저에서 지역을 알려줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);