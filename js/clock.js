function showTime(){
	var date = new Date();
	var h = date.getHours(); // Get Hours
	var m = date.getMinutes(); //Get Minutes

	var time = h + ":" m;

	document.getElementById("Clock").innerText = time;
	document.getElementById("Clock").textContext = time;

	setTimeout(showTime, 1000);
}

showTime();