function getWeather() {

    document.querySelector(".weather-info").style.display = "block";

    const cityName = document.querySelector("input").value;

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d0a4d68a835b937430166246c26b61de&units=metric`,
        success: function (data) {
            console.log(data);
            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp > span").innerHTML = data.main.temp;
            document.querySelector(".icons").innerHTML = `<div>${data.weather[0].description}'</div>`;
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = data.main.temp_min;
            document.querySelector(".max").innerHTML = data.main.temp_max;

    console.log(data.weather[0].description)
    console.log(data.weather[0].main)
    console.log(data.weather[0].id)



           let body = document.querySelector("body");
           
           if (data.sys.sunrise > data.sys.sunset) {
                $("body").css("background-color", "orange");
                $("body").css("color", "black");

            } else{

                $("body").css("background-color", "black");
                $("body").css("color", "white");
            }
      
        },
        error: function (err) {
            alert(data.error);
        }
    });

}