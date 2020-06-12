const inquirer = require('inquirer');

function askHours() {
return inquirer
  .prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Cuantas horas vas a logear?',
      choices: [
							{name:'Las 8 horas de una vez', value:'8'},
							{name:'Una sola hora', value: '1'},
							{name:'Las 8 horas de una en una', value: '1b1'}
						],
						pageSize: 10
    }
  ])
  .then(answer => {
    return answer.option
  });
}

function askDate() {
	return inquirer
		.prompt([{
			type: 'input',
			name: 'date',
			message: 'Que fecha? con este formato DD/MM/AAAA',
		}])
		.then(answer => {
			return answer.date
		});
}
function askHourByHourDescriptions() {
 return inquirer
 .prompt([{
  type: 'input',
  name: 'description',
  message: 'Escribe las descripciones, separa los dias con &&',
 }])
 .then(answer => {
  return answer.description
 });
}

module.exports = {
	askHours,
 askDate,
 askHourByHourDescriptions
};