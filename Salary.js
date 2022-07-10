var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var employeesNumber = parseInt(lines[0]);
var workedHours = parseInt(lines[1]);
var amountPerHour = parseFloat(lines[2]);

var salary = (workedHours*amountPerHour);

console.log(`NUMBER = ${employeesNumber}
SALARY = U$ ${salary.toFixed(2)}`);
