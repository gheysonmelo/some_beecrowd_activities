var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

for (i = 1; i <= N; i++) {
    if (parseInt(lines[i]) === 0) {
        console.log("NULL");
    } else if (((parseInt(lines[i]) % 2) === 0) && (parseInt(lines[i]) > 0)) {
        console.log("EVEN POSITIVE");
    } else if (((parseInt(lines[i]) % 2) === 0) && (parseInt(lines[i]) < 0)){
        console.log("EVEN NEGATIVE");        
    } else if (((parseInt(lines[i]) % 2) !== 0) && (parseInt(lines[i]) > 0)){
        console.log("ODD POSITIVE");
    } else if (((parseInt(lines[i]) % 2) !== 0) && (parseInt(lines[i]) < 0)){
        console.log("ODD NEGATIVE");
    }
}
