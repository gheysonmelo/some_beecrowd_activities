var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

aux = 0;
d = 0;

for (i = 0; i < lines.length; i++) {
    if (parseFloat(lines[i]) < 0 || parseFloat(lines[i]) > 10) {
        console.log("nota invalida")
    } else {
        A = parseFloat(lines[i]);
        aux += A;
        d++
        if (d === 2) {
            break;
        }
    }
}

console.log(`media = ${(aux/2).toFixed(2)}`);
