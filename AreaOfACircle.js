var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var π = 3.14159;
var R = parseFloat(lines[0]);
var A = π * (R * R);
console.log(`A= ${A.toFixed(4)}`);