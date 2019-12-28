function refreshTemp(){
	if(navigator.geolocation){
		var coord = navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		document.getElementById("currentTime") = "XX";
		document.getElementById("maxTemp") = "XX";
		document.getElementById("minTemp") = "XX";
	}
}

function showCoord(){
	console.log(navigator.geolocation.getCurrentPosition(showPosition));
}