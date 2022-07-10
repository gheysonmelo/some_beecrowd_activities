var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines[0]);
var speed = parseInt(lines[1]);
var distance = time * speed;
var liters = distance/12;
console.log(`${liters.toFixed(3)}`);