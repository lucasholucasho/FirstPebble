ajax({ url: 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig=dubl&dest=powl&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=4' }, function(data){
  var trips = data.getElementsByTagName("trip");
  var size = trips.length;
  simply.text({ title: "Lucas", subtitle: size });
});
