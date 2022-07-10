var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

var hours = Math.trunc(N/3600);
var minutes = Math.trunc((N % 3600)/60);
var seconds = Math.trunc(((N % 3600) % 60));

console.log(`${hours}:${minutes}:${seconds}`);