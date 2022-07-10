var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

if (((B % A) == 0) || ((A % B) == 0)) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
};