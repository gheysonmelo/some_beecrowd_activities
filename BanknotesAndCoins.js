var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines[0]);

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
    var resto7 = (resto6 % 1)  + 0.00001;
var cinq = Math.trunc(resto7/0.5);
    var resto8 = (resto7 % 0.5) + 0.00001;
var vincin = Math.trunc(resto8/0.25);
    var resto9 = (resto8 % 0.25)  + 0.00001;
var dezmo = Math.trunc(resto9/0.1);
    var resto10 = (resto9 % 0.1)  + 0.00001;
var cin = Math.trunc(resto10/0.05);
    var resto11 = (resto10 % 0.05)  + 0.00001;
var ummo = Math.trunc(resto11/0.01);

console.log(`NOTAS:
${cem} nota(s) de R$ 100.00
${cinquenta} nota(s) de R$ 50.00
${vinte} nota(s) de R$ 20.00
${dez} nota(s) de R$ 10.00
${cinco} nota(s) de R$ 5.00
${dois} nota(s) de R$ 2.00
MOEDAS:
${um} moeda(s) de R$ 1.00
${cinq} moeda(s) de R$ 0.50
${vincin} moeda(s) de R$ 0.25
${dezmo} moeda(s) de R$ 0.10
${cin} moeda(s) de R$ 0.05
${ummo} moeda(s) de R$ 0.01`);