$(document).ready(function(){
	// Weather functionality starts here
	function refreshTemp(){

		var currentT;
		var maxTemp;
		var minTemp;
		var latitudeL;
		var longitudeL;
		var url;

		if(navigator.geolocation){
			// Obtener y guardar coordenadas en variables
			navigator.geolocation.getCurrentPosition(function (position){
				latitudeL = position.coords.latitude;
				longitudeL = position.coords.longitude;
				console.log(latitudeL);
				console.log(longitudeL);
			});
		
			url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitudeL+'&lon='+longitudeL+'&APPID=8f7bf319328174346aed009f399f121c';

			// document.getElementById("curTemp").innerHTML = currentT + "°C";
			// document.getElementById("maxTemp").innerHTML = maxTemp + "°C";
			// document.getElementById("minTemp").innerHTML = minTemp + "°C";
		}
		else{
			// Clima sera mostrado para la ciudad de Culiacan, Sin
		}
	}

	// Clock functionality starts here
	function showTime(){
		var date = new Date();
		var h = date.getHours(); // Obiene Hora
		var m = date.getMinutes(); // Obtiene minutos

		if(h<10){
			h = "0" + h;
		}
		if(m<10){
			m = "0" + m;
		}

		var time = h + ":" + m;

		document.getElementById("Clock").innerHTML = time;
		document.getElementById("Clock").textContext = time;
		console.log(time);

		setTimeout(showTime, 1000);
	}

	showTime();
	refreshTemp();
});