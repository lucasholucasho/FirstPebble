function startTime() {
	var date = new Date();
	var hourBin = date.getHours().toString(2);
	var minutesBin = date.getMinutes().toString(2);;
	var seconds = date.getSeconds();
	simply.setText({
		title: 'The time in binary',
		subtitle: hourBin+":"+minutesBin
		}, true);
}

startTime();
simply.on('singleClick', startTime);
