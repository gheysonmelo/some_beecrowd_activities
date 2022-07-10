var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < lines.length; i++) {
    linesaux = lines[i].split(' ');
    A = parseInt(linesaux[0]);
    B = parseInt(linesaux[1]);
    if (A > 0 && B > 0) {
        console.log("primeiro")
    } else if (A < 0 && B > 0) {
        console.log("segundo")
    } else if (A < 0 && B < 0) {
        console.log("terceiro")
    } else if (A > 0 && B < 0) {
        console.log("quarto")
    }
}