var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseFloat(lines[0]);
var B = parseFloat(lines[1]);
var C = parseFloat(lines[2]);

var MaiorAB = (A + B + Math.abs(A-B))/2;
var MaiorXC = (C + MaiorAB + Math.abs(C-MaiorAB))/2

console.log(`${MaiorXC} eh o maior`);