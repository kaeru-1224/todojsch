const API_KEY="4f23c6444c2d456195056724a96a5363";

function onGeoOk(positon){
    const lat= positon.coords.latitude;
    const lon=positon.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //js가ㅓurl을 불러줌
    fetch(url).then(response=> response.json()).then(data =>{ 
        const weather= document.querySelector("#weather span:first-child")
        const city= document.querySelector("#weather span:last-child")
        city.innerText =data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`});
}

function onGeoError(){
    alert("Where are you?")
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)