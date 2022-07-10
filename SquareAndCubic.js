var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (j = 1; j <= N; j++) {
    console.log(`${j} ${j*j} ${j*j*j}`)
}