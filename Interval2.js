var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
var inside = 0;
var outside = 0;

for (i = 1; i <= N; i++) {
    if ((lines[i] > 9) && (lines[i] < 21)) {
        inside++;
    } else {
        outside++;
    }
}

console.log(`${inside} in
${outside} out`);