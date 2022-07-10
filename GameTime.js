var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseInt(lines[0]);
var B = parseInt(lines[1]);
var C = B - A;
var D = 24 - A;
var E = D + B;

if (B > A) {
    console.log(`O JOGO DUROU ${C} HORA(S)`);
} else if ( A === B) {
    console.log(`O JOGO DUROU 24 HORA(S)`);
} else {
    console.log(`O JOGO DUROU ${E} HORA(S)`)
};