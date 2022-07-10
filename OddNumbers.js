var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]);

for (var i = 1; i <= X; i++) {
    if ((i % 2) !== 0) {
        console.log(i);
    }
}