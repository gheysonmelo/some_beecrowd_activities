var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

var years = Math.trunc(N/365);
var months = Math.trunc((N % 365)/30);
var days = Math.trunc((N % 365) % 30);


console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`);