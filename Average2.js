var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var MEDIA = ((2*A)+(3*B)+(5*C))/10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);