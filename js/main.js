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
		
			//url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitudeL+'&lon='+longitudeL+'&APPID=8f7bf319328174346aed009f399f121c';

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
		var numWeekday = date.getDay(); //Obtiene numero de dia-semana (0-6) [Sun-Sat]
		var numMonth = date.getMonth(); //Obtiene numero de mes (0-11)
		var numDay = date.getDate(); // Obtiene dia de mes (1-31)
		var composeDate;

		switch(numWeekday){
			case 0:
				composeDate = "Sunday, ";
				break;
			case 1:
				composeDate = "Monday, ";
				break;
			case 2:
				composeDate = "Tuesday, ";
				break;
			case 3:
				composeDate = "Wednesday, ";
				break;
			case 4:
				composeDate = "Thursday, ";
				break;
			case 5:
				composeDate = "Friday, ";
				break;
			case 6:
				composeDate = "Saturday, ";
				break;
		}

		switch(numMonth){
			case 0:
				composeDate = composeDate + "January";
				break;
			case 1:
				composeDate = composeDate + "February";
				break;
			case 2:
				composeDate = composeDate + "March";
				break;
			case 3:
				composeDate = composeDate + "April";
				break;
			case 4:
				composeDate = composeDate + "May";
				break;
			case 5:
				composeDate = composeDate + "June";
				break;
			case 6:
				composeDate = composeDate + "July";
				break;
			case 7:
				composeDate = composeDate + "August";
				break;
			case 8:
				composeDate = composeDate + "September";
				break;
			case 9:
				composeDate = composeDate + "October";
				break;
			case 10:
				composeDate = composeDate + "November";
				break;
			case 11:
				composeDate = composeDate + "December";
				break;
		}

		if(h<10){
			h = "0" + h;
		}
		if(m<10){
			m = "0" + m;
		}

		var time = h + ":" + m;
		composeDate = composeDate + " " + numDay;

		document.getElementById("Clock").innerHTML = time;
		document.getElementById("Clock").textContext = time;
		document.getElementById("Date").innerHTML = composeDate;
		document.getElementById("Date").textContext = composeDate;

		setTimeout(showTime, 1000);
	}

	showTime();
	refreshTemp();
});