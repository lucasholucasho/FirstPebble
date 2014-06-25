/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');
var date = new Date();
var hourBin = date.getHours().toString(2);
var minutesBin = date.getMinutes().toString(2);
var secondsBin = date.getSeconds();
var main = new UI.Card({
  title: 'Binary Time',
   subtitle: hourBin+":"+minutesBin+":"+secondsBin,
    });
main.show();

function startTime()
{
  var date = new Date();
  var hourBin = date.getHours().toString(2);
  var minutesBin = date.getMinutes().toString(2);
  var secondsBin = date.getSeconds();
  main.subtitle(hourBin+":"+minutesBin+":"+secondsBin);
  main.show();
  setTimeout(startTime, 500);
}

startTime();
//setTimeout(startTime, 500);
