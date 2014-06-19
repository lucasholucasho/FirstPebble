function startTime() {
	var date = new Date();
	var hourBin = date.getHours().toString(2);
	var minutesBin = date.getMinutes().toString(2);;
	var seconds = date.getSeconds();
	simply.setText({
		title: 'The time in binary',
		body: hourBin+":"+minutesBin+":"+seconds,
		}, true);
}

startTime();
simply.on('singleClick', startTime);
