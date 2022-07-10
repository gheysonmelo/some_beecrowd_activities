var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]); 
var Y = parseInt(lines[1]);
var aux = Y+1
var sum = 0;

if (aux > X) {
    sum = 0;
}

for (aux+1; aux < X; aux++) {
    if ((aux % 2) !== 0) {
        sum = sum + aux;
    }
} 

console.log(sum);