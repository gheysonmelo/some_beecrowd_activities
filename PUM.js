var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (j = 1; j < N*4; j=j+4) {
    console.log(`${j} ${j+1} ${j+2} PUM`)
}