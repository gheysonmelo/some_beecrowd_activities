var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);

var DIFFERENCE = ((A*B)-(C*D));

console.log(`DIFERENCA = ${DIFFERENCE}`);