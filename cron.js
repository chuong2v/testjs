/*
Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11
Day of Week: 0-6
*/
var moment = require('moment')

var CronJob = require('cron').CronJob;
var job = new CronJob(new Date(moment().add(5, 'second')), function() {
	console.log('You will see this message every second');
	console.log(new Date())
}, null, true, 'America/Los_Angeles');