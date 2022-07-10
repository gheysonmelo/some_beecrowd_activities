var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lines2 = lines[0].split(' ');
var lines3 = lines[1].split(' ');

var code1 = parseInt(lines2[0]);
var units1 = parseInt(lines2[1]);
var price1 = parseFloat(lines2[2]);
var code2 = parseInt(lines3[0]);
var units2 = parseInt(lines3[1]);
var price2 = parseFloat(lines3[2]);

amount = ((units1*price1)+(units2*price2));

console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`);