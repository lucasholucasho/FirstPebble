ajax({ url: 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=dubl&dest=powl&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=4' }, function(data){
  var headline = data.match(/<trip(.*?)<\/trip>/)[0];
  simply.title(headline);  
});
