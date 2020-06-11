const {askHours, askDate} = require('./interface');
const {sendRequest} = require('./request');

(async () => {
 const hoursToLog = await askHours()
 const dateToLog = await askDate()
 console.log({hoursToLog});
 console.log({dateToLog});
 if (hoursToLog === '1b1') {
  console.log('if');
  let vamosaver = await sendRequest({dateToLog:dateToLog})
  console.log(vamosaver);
 }
	
})();

