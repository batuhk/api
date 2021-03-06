var api = "https://api.openweathermap.org/data/2.5/weather?";
var apiKey = "&appid=fca597e643cbeb450f14658b0c645436";
var query = "q=Seoul";

function getWEATHERdata() {
	var url = api + query + apiKey;
		fetch(url)
			.then(function(response) {
				return response.json();
			})
		
		.then(function(response) {
			var celsius = response.main.temp - 273.15;;
			var temp = celsius.toFixed(0);
			var icon = response.weather[0].icon;
			var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";			
			document.getElementById("weather").innerHTML +=  '<h2 class="weather_title">' + temp + ' ' + '&#176;C'+ '<br>' + '</h2>' 
			+'<img class="weathericon" src=" ' + iconurl + '">' ;
		});
}

getWEATHERdata();