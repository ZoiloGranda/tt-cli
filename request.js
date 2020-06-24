const fetch = require('node-fetch');
const {headers, body} = require('./params');

async function sendRequest(params) {
 let {dateToLog, description} = params;
 dateToLog = encodeURIComponent(dateToLog);
 const response = await fetch("https://timetracker.bairesdev.com/CargaTimeTracker.aspx", {
  "headers": headers,
  "referrer": "https://timetracker.bairesdev.com/CargaTimeTracker.aspx",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body":`${body}&ctl00%24ContentPlaceHolder%24txtFrom=${dateToLog}&ctl00%24ContentPlaceHolder%24DescripcionTextBox=${description}`,
  "method": "POST",
  "mode": "cors"
 });
 if (response.url ==='https://timetracker.bairesdev.com/ListaTimeTracker.aspx') {
  return description
 } else {
  throw response
 }
}

module.exports ={
 sendRequest
}
