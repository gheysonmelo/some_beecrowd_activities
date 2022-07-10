var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines[0]);

console.log(`1 x ${N} = ${N}
2 x ${N} = ${N*2}
3 x ${N} = ${N*3}
4 x ${N} = ${N*4}
5 x ${N} = ${N*5}
6 x ${N} = ${N*6}
7 x ${N} = ${N*7}
8 x ${N} = ${N*8}
9 x ${N} = ${N*9}
10 x ${N} = ${N*10}`)