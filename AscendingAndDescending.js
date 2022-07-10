var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i<lines.length; i++) {
    linesaux = lines[i].split(' ');
    A = parseInt(linesaux[0]);
    B = parseInt(linesaux[1]);
    if (A > B) {
        console.log("Decrescente")
    } else if (A < B) {
        console.log("Crescente")
    } 
}