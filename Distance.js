var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x1 = parseInt(lines[0]);

var time = 2*x1;
console.log(`${time} minutos`);