var hourBinary;
var minutesBinary;

function startTime() {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	if (parseInt(minutes) >= 10)
	{
		simply.setText({
			title: 'The time in binarydddd',
			body: hour+":"+minutes,
			}, true);
	}
	else
	{
		simply.setText({
			title: 'The time in binarydddddd',
			body: hour+":0"+minutes,
			}, true);	
	}
}

startTime();
simply.on('singleClick', startTime());
