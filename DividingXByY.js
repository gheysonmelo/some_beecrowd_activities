var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);
for (i = 1; i <= N; i++) {
    linesaux = lines[i].split(' ');
    A = parseInt(linesaux[0]);
    B = parseInt(linesaux[1]);
    if (B === 0) {
        console.log("divisao impossivel");
    } else {
        C = A/B;
        console.log(`${C.toFixed(1)}`);
    }
}