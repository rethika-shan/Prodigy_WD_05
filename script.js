let API_KEY = "487f4c7891cfac10d2a5edaba36c2131";
let url = `https://api.openweathermap.org/data/2.5/weather?q=nagpur,in&appid=${API_KEY}`
fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

    main.innerHTML = data.weather[0].main;


    let temp_kelvin = data.main.temp;
    let temp_celsius = parseInt(temp_kelvin - 273.15);
    temp.innerHTML = temp_celsius;

    feels_like.innerHTML = parseInt(data.main.feels_like - 273.15);
    temp_min.innerHTML = parseInt(data.main.temp_min - 273.15);
    temp_max.innerHTML = parseInt(data.main.temp_max - 273.15);
    pressure.innerHTML = data.main.pressure;
    humidity.innerHTML = data.main.humidity;
    visibility.innerHTML = data.visibility;
    speed.innerHTML = data.wind.speed;
    cityName.innerHTML = data.name;
    cityName1.innerHTML = data.name;



    // Weather Image
    // Extract weather condition
    const weatherCondition = data.weather[0].main.toLowerCase();
    let body = document.getElementById("mainContainer")

    // Set background based on weather condition
    if (weatherCondition.includes("clear")) {
        body.style.backgroundImage = "url('img/clear-sky.jpg')"; 
    } else if (weatherCondition.includes("cloud")) {
        body.style.backgroundImage = "url('img/cloudy.jpg')"; 
    } else if (weatherCondition.includes("rain")) {
        body.style.backgroundImage = "url('img/rainy.jpg')"; 
    } else if (weatherCondition.includes("haze")) {
        body.style.backgroundImage = "url('img/haze.jpg')"; 
    } else {
        
        body.style.backgroundImage = "url('img/default.jpg')"; 
    }




    // Timing
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    time.innerHTML = formattedTime;


    const now1 = new Date();
    const date = now1.getDate();
    const month = now1.toLocaleString('default', { month: 'long' });
    const dayName = now.toLocaleString('default', { weekday: 'long' });
    date.innerHTML = date;
    tmonth.innerHTML = month;
    day.innerHTML = dayName;

})


const apiKey = '8f44e8ea540f0c499e8a7e04ccc99ea3';
const city = 'Nagpur'; 
const country = 'IN';
const startDay = '2023-08-25'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&cnt=7&start=${startDay}&appid=${apiKey}`;
let dailyForcast = fetch(apiUrl)
dailyForcast.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    let array = data.list;
    console.log(array);
})



// Form
let SearchFetch = (city_name) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},in&appid=${API_KEY}`
    let dataFetch = fetch(url)
    dataFetch.then((response) => {
        return response.json()
    }).then((data) => {
        main.innerHTML = data.weather[0].main;

        feels_like.innerHTML = data.main.feels_like;

        let temp_kelvin = data.main.temp;
        let temp_celsius = parseInt(temp_kelvin - 273.15);
        temp.innerHTML = temp_celsius;

        temp_min.innerHTML = data.main.temp_min;
        temp_max.innerHTML = data.main.temp_max;
        pressure.innerHTML = data.main.pressure;
        humidity.innerHTML = data.main.humidity;
        visibility.innerHTML = data.visibility;
        speed.innerHTML = data.wind.speed;
        cityName.innerHTML = data.name;
        cityName1.innerHTML = data.name;



        // Weather Image
        // Extract weather condition
        const weatherCondition = data.weather[0].main.toLowerCase();
        let body = document.getElementById("mainContainer")

       
        if (weatherCondition.includes("clear")) {
            body.style.backgroundImage = "url('img/clear-sky.jpg')"; 
        } else if (weatherCondition.includes("cloud")) {
            body.style.backgroundImage = "url('img/cloudy.jpg')"; 
        } else if (weatherCondition.includes("rain")) {
            body.style.backgroundImage = "url('img/rainy.jpg')"; 
        } else if (weatherCondition.includes("haze")) {
            body.style.backgroundImage = "url('img/haze.jpg')"; 
        } else {
           
            body.style.backgroundImage = "url('img/default.jpg')"; 
        }


        // Timing
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
        time.innerHTML = formattedTime;


        const now1 = new Date();
        const date = now1.getDate();
        const month = now1.toLocaleString('default', { month: 'long' });
        const dayName = now.toLocaleString('default', { weekday: 'long' });
        date.innerHTML = date;
        tmonth.innerHTML = month;
        day.innerHTML = dayName;
    })
}

let form = document.getElementById("weatherForm");
form.addEventListener("submit", function (event) {
    let city_name = document.getElementById("formCity").value;
    console.log("==>", city_name);
    SearchFetch(city_name)
    event.preventDefault();
})