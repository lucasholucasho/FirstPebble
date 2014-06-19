var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

var hourBinary;
var minutesBinary;

if (minutes >= 10)
{
	simply.setText({
		title: 'The time in binary',
		body: hour+":"+minutes,
		}, true);
}

else
{
	simply.setText({
		title: 'The time in binary',
		body: hour+":0"+minutes,
		}, true);	
}
