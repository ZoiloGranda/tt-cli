const Promise = require('bluebird');
const {askHours, askDate, askHourByHourDescriptions, askDescription} = require('./interface');
const {sendRequest} = require('./request');
const chalk = require('chalk');

(async () => {
 const hoursToLog = await askHours()
 const dateToLog = await askDate()
 console.log({hoursToLog});
 console.log({dateToLog});
 switch (hoursToLog) {
  case '1b1':
  hourByHourHandler({dateToLog:dateToLog})
  break;
  case '8':
  allHoursHandler({dateToLog:dateToLog})
  break;
  default:
  
 }
})();

async function hourByHourHandler(params) {
 const {dateToLog}= params
 let hourByHourDescriptions = await askHourByHourDescriptions()
 hourByHourDescriptions= hourByHourDescriptions.split('&&')
 console.log({hourByHourDescriptions});
 Promise.map(hourByHourDescriptions, function(description) {
  return sendRequest({
   description:description,
   dateToLog:dateToLog
  })
  .then(function(data) {
   console.log(chalk.green(`\nHour logged successfully: ${data}`));
  })
  .catch(function(err) {
   console.log(chalk.red('ERROR'));
   console.log(err);
  });
 }, {
  concurrency: 1
 })
 .then(function() {
  console.log(chalk.green.bold('Successfully logged hours'));
  process.exit();
 }).catch(function(err) {
  console.log('ERROR');
  console.log(err);
  process.exit();
 });
}

async function allHoursHandler(params) {
 let description = await askDescription()
 let result = await sendRequest({
  description:description,
  dateToLog:dateToLog
 })
 console.log(result);
}

