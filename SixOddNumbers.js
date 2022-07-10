var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]);   
var i = 0;
    
while (i <6) {
    if ((X % 2) !== 0) {
        console.log(X);
        i++;
        X++;
    } else {
        X++
    }
}