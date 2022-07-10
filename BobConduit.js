var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);

for (i = 1; i <= N; i++) {
    linesaux = lines[i].split(' ');
    var R1 = parseInt(linesaux[0]);
    var R2 = parseInt(linesaux[1]);
    // var area1 = 3.14159*A*A;
    // var area2 = 3.14159*B*B;
    var radius = (((2*R1)+(2*R2))/2);
    console.log(radius);    
}