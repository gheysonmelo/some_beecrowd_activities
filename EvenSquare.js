var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (i = 1; i <= N; i++) {
    if ((i % 2) === 0) {
        c = i*i;
        console.log(`${i}^2 = ${c}`)
    }
}