


const apiKey= "c8a9fa23f3ab4efe6c5f7d027b16e963" ;
const apiUrl = "https:api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`)





    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="https://cdn3d.iconscout.com/3d/premium/thumb/cloudy-day-7331212-6001027.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8k60lJig2rXv03Fg7-NC88GksuSbpEdbigkJ9q1MwuQ&s";
    }
    else if(data.weather[0].main  == "Rain"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6zEud6WBfW-vhoMT6Imq3OIVrtEhu8WgUkeDXd4NSg&s";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.freepik.com/512/6142/6142570.png";
    }
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzAPJQCyJGLGdtY06dIwbHoIZmtOL1ui-8m9rfSf1gQ&s";
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
