var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

var cem = Math.trunc(N/100);
var resto1 = N % 100;
var cinquenta = Math.trunc(resto1/50);
var resto2 = resto1 % 50;
var vinte = Math.trunc(resto2/20);
var resto3 = resto2 % 20;
var dez = Math.trunc(resto3/10);
var resto4 = resto3 % 10;
var cinco = Math.trunc(resto4/5);
var resto5 = resto4 % 5;
var dois = Math.trunc(resto5/2);
var resto6 = resto5 % 2;
var um = Math.trunc(resto6/1);

console.log(`${N}
${cem} nota(s) de R$ 100,00
${cinquenta} nota(s) de R$ 50,00
${vinte} nota(s) de R$ 20,00
${dez} nota(s) de R$ 10,00
${cinco} nota(s) de R$ 5,00
${dois} nota(s) de R$ 2,00
${um} nota(s) de R$ 1,00`);