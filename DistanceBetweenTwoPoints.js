var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var lines2 = lines[0].split(' ');
var lines3 = lines[1].split(' ');

var x1 = parseFloat(lines2[0]);
var y1 = parseFloat(lines2[1]);
var x2 = parseFloat(lines3[0]);
var y2 = parseFloat(lines3[1]);

var distance = Math.sqrt(((x2 - x1)**2)+((y2-y1)**2));
console.log(`${distance.toFixed(4)}`);