/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Settings = require('settings');
var ajax = require('ajax');
var main = new UI.Card({
  title: 'Your next train...'
   //subtitle: 'Helloooooo'
  });
main.show();
Settings.config(
  { url: 'http://lucasholucasho.github.io/config.html' },
    function(e) {
    console.log('closed configurable');
      
    var from = e.options["start"];
    var to = e.options["end"];
    var url = 'http://api.bart.gov/api/sched.aspx?cmd=depart&orig='+from+'&dest='+to+'&time=now&key=ZULP-JR5M-IVKQ-DT35&b=0&a=1';
    ajax(
    {
      url: url
    },
    function (data)
    {
      var headline = data.match(/origTimeMin=(.*?)origTimeDate/);
      var timeQuotes = headline[0].match(/"(.*?)"/)[0];
      var time = timeQuotes.substring(1, timeQuotes.length-1);
      main.subtitle(time);
    },
    function(error) {
    console.log('The ajax request failed: ' + error);
  });
});
