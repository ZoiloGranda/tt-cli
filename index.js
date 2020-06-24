const Promise = require('bluebird');
const {askHours, askDate, askHourByHourDescriptions, askDescription} = require('./interface');
const {sendRequest} = require('./request');
const chalk = require('chalk');

(async () => {
 const hoursToLog = await askHours()
 const dateToLog = await askDate()
 validateDate(dateToLog)
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
   console.log(chalk.red(`\nERROR WITH ${description}`));
   // console.log(err);
  });
 }, {
  concurrency: 1
 })
 .then(function() {
  console.log(chalk.blue.bold('Finished logging hours, see logs above'));
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

function validateDate(dateToLog){
 let regExpTest = /^\d{2}[/]\d{2}[/]\d{4}$/gi.test(dateToLog)
 if (!regExpTest) {
  console.log(chalk.red(`\nIncorrect date ${dateToLog} exiting`));
  process.exit()
 }
 let splitDate = dateToLog.split('/')
 if (splitDate[0]>31 || splitDate[1]>12 || splitDate[2]>2030 || splitDate[2]<2020) {
  console.log(chalk.red(`\nIncorrect date ${dateToLog} exiting`));
  process.exit()
 }
}

