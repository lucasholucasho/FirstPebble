function retrieve() {
  ajax({ url: 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=dubl&dest=powl&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=1' }, function(data){
  var headline = data.match(/origTimeMin=(.*?)origTimeDate/);
  var timeQuotes = headline[0].match(/"(.*?)"/)[0];
  var time = timeQuotes.substring(1, timeQuotes.length-1);
  simply.title(time);
  simply.subtitle(Math.random());
});
}

retrieve();
simply.on('singleClick', retrieve);

//this code retrieves the next arrival time of BART at Dublin/Pleasanton, destination Powell Street, and displays it on screen.
//you can press a watch button to refresh this next arrival.
