var hourBinary;
var minutesBinary;

function startTime() {
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	if (parseInt(minutes) >= 10)
	{
		simply.setText({
			title: 'The time in binary',
			body: hour+":"+minutes+":"+seconds,
			}, true);
	}
	else
	{
		simply.setText({
			title: 'The time in binary',
			body: hour+":0"+minutes+":"+seconds,
			}, true);	
	}
}

startTime();
simply.on('singleClick', startTime());
