var month = prompt('Enter your birth month in the following format: MM');
var day = prompt('Enter your birth day in the following format: DD');

var bDay = new Date();

bDay.setDate(day);
bDay.setMonth(month - 1);

var today = new Date();

bDay.setFullYear(today.getFullYear());

if (today > bDay) {
  bDay.setFullYear(today.getFullYear() + 1);
}

var daysUntil = (Math.floor((bDay - today) / (1000 * 60 * 60 * 24)));

alert('Number of days until your next birthday: ' + daysUntil);

var curYear = today.getFullYear();
var curMonth = today.getMonth();

var nextBday = new Date(curYear, curMonth, (daysUntil+7));

var nextDay = nextBday.getDate();
var nextMonth = nextBday.getMonth() + 1;
var nextYear = nextBday.getFullYear();

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dayName = week[nextBday.getDay()];

document.write('<h1>Your next birthday: ' + dayName + ' ' + nextMonth + '/' + nextDay + '/' + nextYear + '</h1>');