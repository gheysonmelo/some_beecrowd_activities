var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines[0]);

for (i = 1; i <= N; i++) {
    linesaux = lines[i].split(' ');
    grade = (((parseFloat(linesaux[0])*2)+(parseFloat(linesaux[1])*3)+(parseFloat(linesaux[2])*5))/10)
    console.log(`${grade.toFixed(1)}`);
}