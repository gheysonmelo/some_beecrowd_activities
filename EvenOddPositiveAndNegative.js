var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = parseInt(lines[2]);
var D = parseInt(lines[3]);
var E = parseInt(lines[4]);
var arr = [A, B, C, D, E];
var even = 0;
var odd = 0;
var positive = 0;
var negative = 0;

for (var i = 0; i < arr.length; i++) {
    if ((lines[i] % 2) === 0) {
        even++;
    } 
};

for (var i = 0; i < arr.length; i++) {
    if ((lines[i] % 2) != 0) {
        odd++;
    } 
};

for (var i = 0; i < arr.length; i++) {
    if (lines[i] > 0) {
        positive++;
    } 
};

for (var i = 0; i < arr.length; i++) {
    if (lines[i] < 0) {
        negative++;
    } 
};

console.log(`${even} valor(es) par(es)
${odd} valor(es) impar(es)
${positive} valor(es) positivo(s)
${negative} valor(es) negativo(s)`);