ajax({ url: 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=dubl&dest=powl&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=1' }, function(data){
  var headline = data.match(/origTimeMin=(.*?)origTimeDate/);
  var timeQuotes = headline[0].match(/"(.*?)"/)[0];
  var time = timeQuotes.substring(1, yourString.length-1);
  simply.title(time);  
});

//simply.scrollable(truesdfsdfs);
//make it work
