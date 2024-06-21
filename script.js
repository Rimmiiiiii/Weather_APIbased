const inputbox = document.querySelector('.inputbox');
const search = document.getElementById('search');
const weatherimg = document.querySelector('.weatherimg');
const temperature = document.querySelector('.temperature');
const feelslike = document.querySelector('.feelslike');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind');
const location_not_found = document.querySelector('.location_not_found');
const weatherbody = document.querySelector('.weatherbody');
async function checkweather(city){
    const apikey = "89e25dd3fd070bef327c0f070cf89f54";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const weather_data = await fetch(`${url}`).then (response =>response.json());
    if(weather_data.cod === '404'){
        console.log("error");
        location_not_found.style.display= "flex";
        weatherbody.style.display= "none";
        return;
    };
    location_not_found.style.display = "none";
    weatherbody.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    feelslike.innerHTML =`${Math.round(weather_data.main.feels_like - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;
    switch(weather_data.weather[0]){
        case 'Clouds':
            weatherimg.src="/pictures.cloud.jpeg";
            break;
        case 'Clear':
            weatherimg.src="/pictures.clear.jpeg";
            break;
        case 'Rain':
            weatherimg.src="/pictures.rain.jpeg";
            break;
        case 'Mist':
            weatherimg.src="/pictures.mist.jpeg";
            break; 
        case 'Wind':
            weatherimg.src="/pictures.wind.jpeg";
            break;  
        case 'Sunny':
            weatherimg.src="/pictures.sunny.jpeg" ;
    }
    console.log(weather_data);
}
search.addEventListener('click',()=>{
    checkweather(inputbox.value);
})