const fetch = require('node-fetch');
const {headers, body} = require('./params');

async function sendRequest(params) {
 let {dateToLog} = params;
 dateToLog = encodeURIComponent(dateToLog);
 console.log({dateToLog});
 const response = await fetch("https://timetracker.bairesdev.com/CargaTimeTracker.aspx", {
  "headers": headers,
  "referrer": "https://timetracker.bairesdev.com/CargaTimeTracker.aspx",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body":`${body}&ctl00%24ContentPlaceHolder%24txtFrom=${dateToLog}`,
  "method": "POST",
  "mode": "cors"
 });
 console.log(response);;
}

module.exports ={
 sendRequest
}
