var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var result = N;

for (i = N-1; i>=1; i--) {
    a = result*(i);
    result = a;
}

console.log(result);