ajax({ url: 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=dubl&dest=powl&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=1' }, function(data){
  var headline = data.match(/origTimeMin=(.*?)origTimeDate/);
  var time = headline.match(/"(.*?)"/);
  simply.title(time[0]);  
});

//simply.scrollable(truesdfsdfs);
//make it work
