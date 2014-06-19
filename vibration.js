function startTime() {
	var date = new Date();
	var hourBin = date.getHours().toString(2);
	var minutes = date.getMinutes().toString(2);;
	var seconds = date.getSeconds();
	simply.setText({
		title: 'The time in binary',
		body: hour+":"+minutes+":"+seconds,
		}, true);
}

startTime();
simply.on('singleClick', startTime);
