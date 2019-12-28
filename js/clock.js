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