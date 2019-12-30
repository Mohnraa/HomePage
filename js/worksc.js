function refreshTemp(){
	var currentT;
	if(navigator.geolocation){
		//var coord = navigator.geolocation.getCurrentPosition(showPosition);
		currentT = "30";
		document.getElementById("currentTemp").innerHTML = currentT;
		document.getElementById("maxTemp").innerHTML = "XX";
		document.getElementById("minTemp").innerHTML = "XX";
	}
	else{
		currentT = "30"
		document.getElementById("currentTemp").innerHTML = currentT;
		document.getElementById("maxTemp").innerHTML = "XX";
		document.getElementById("minTemp").innerHTML = "XX";
	}
}

function showCoord(){
	console.log(navigator.geolocation.getCurrentPosition(showPosition));
}

function showTime(){
	var date = new Date();
	var h = date.getHours(); // Get Hours
	var m = date.getMinutes(); //Get Minutes

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