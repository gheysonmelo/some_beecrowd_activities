var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (i = 1; i < 10000; i++) {
    if ((i % N) === 2) {
        console.log(`${i}`);
    }
}