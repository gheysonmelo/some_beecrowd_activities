var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var sellersName = lines[0];
var salary = parseFloat(lines[1]);
var sales = parseFloat(lines[2]);

total = (sales*0.15)+salary;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);