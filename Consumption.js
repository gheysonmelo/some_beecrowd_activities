var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]);
var Y = parseFloat(lines[1]);

let c = (X/Y);

console.log(`${c.toFixed(3)} km/l`);