var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (i = 1; i <= N; i++) {
    console.log(`${i} ${i*i} ${i*i*i}
${i} ${i*i+1} ${i*i*i+1}`)
}