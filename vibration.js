var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

var hourBinary;
var minutesBinary;


simply.setText({
  title: 'The time in binary',
  body: hour+":"+minutes,
}, true);
